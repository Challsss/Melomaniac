import { useEffect, useRef, useState } from 'react';
import type { Album } from '../types/catalog';

interface PlayerBarProps {
  activeAlbum: Album;
  activeTrackIndex: number;
  isPlaying: boolean;
  isDrawerOpen: boolean;
  onTogglePlay: () => void;
  onToggleDrawer: () => void;
  onSelectTrack: (index: number) => void;
}

const SCALE_MULTIPLIERS = [1, 1.189, 1.334, 1.498, 1.781, 1.498, 1.334, 1.189];
const INITIAL_VU_HEIGHTS = [8, 16, 12, 20, 8];

export function PlayerBar({
  activeAlbum,
  activeTrackIndex,
  isPlaying,
  isDrawerOpen,
  onTogglePlay,
  onToggleDrawer,
  onSelectTrack,
}: PlayerBarProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [vuHeights, setVuHeights] = useState<number[]>(INITIAL_VU_HEIGHTS);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }

    const audioCtx = audioCtxRef.current;
    if (audioCtx.state === 'suspended') {
      void audioCtx.resume();
    }

    let step = 0;
    const stepTimeMs = Math.round((60 / activeAlbum.bpm) * 500);

    const interval = window.setInterval(() => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      // Bajo funk/soul cálido
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = step % 2 === 0 ? 'triangle' : 'sawtooth';

      const noteFreq =
        activeAlbum.baseFreq * SCALE_MULTIPLIERS[step % SCALE_MULTIPLIERS.length];
      osc.frequency.setValueAtTime(noteFreq, now);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.24);

      // Animar barras del vúmetro
      setVuHeights(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 22) + 6)
      );

      step++;
    }, stepTimeMs);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPlaying, activeAlbum.bpm, activeAlbum.baseFreq, activeTrackIndex]);

  const track = activeAlbum.tracks[activeTrackIndex] || activeAlbum.tracks[0];
  const vuColors = ['bg-[#f9a602]', 'bg-[#f96d00]', 'bg-[#d91e00]', 'bg-[#f9a602]', 'bg-[#f96d00]'];
  const displayedVuHeights = isPlaying ? vuHeights : [6, 6, 6, 6, 6];

  const formatPlayLabel =
    activeAlbum.format === 'LP'
      ? 'PROBAR SONIDO VINILO'
      : activeAlbum.format === 'CASSETTE'
        ? 'PROBAR SONIDO CASETE'
        : 'PROBAR SONIDO CD';

  return (
    <div className="hidden md:block fixed bottom-0 inset-x-0 z-40 px-3 sm:px-6 pb-3 pointer-events-none">
      <div
        className="max-w-6xl mx-auto brutal-box bg-[#260701] text-[#fdf6e2] rounded-3xl p-3.5 sm:p-4 pointer-events-auto shadow-[0px_-4px_0px_#260701,8px_8px_0px_#f96d00] border-4 border-[#f9a602] outline outline-3 outline-[#260701]"
        style={{ backgroundColor: '#260701', color: '#fdf6e2' }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Plato Giradiscos Animado + Info de Pista Activa con Contraste AAA */}
          <div className="flex items-center gap-3.5 w-full md:w-auto min-w-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f9a602] border-2 border-[#fdf6e2] flex items-center justify-center shrink-0 overflow-hidden shadow-[2px_2px_0px_#000]">
              {/* Disco girando en el reproductor */}
              <div
                className="w-12 h-12 rounded-full bg-[#260701] border-2 border-[#fdf6e2] flex items-center justify-center spin-vinyl"
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              >
                <div
                  className="w-5 h-5 rounded-full border border-[#260701] flex items-center justify-center"
                  style={{ backgroundColor: activeAlbum.labelColor }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#260701]" />
                </div>
              </div>
              {/* Brazo de aguja / lector */}
              <div
                className={`absolute top-1 right-1 w-2 h-9 bg-[#fdf6e2] border border-[#260701] rounded-full origin-top transition-transform duration-300 ${
                  isPlaying ? 'rotate-12' : '-rotate-12'
                }`}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {isPlaying ? (
                  <span className="bg-[#d91e00] text-[#fdf6e2] border border-[#fdf6e2] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full animate-pulse tracking-wider">
                    ● SONANDO AHORA
                  </span>
                ) : (
                  <span className="bg-[#f9a602] text-[#260701] border border-[#260701] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                    ⏸ REPRODUCTOR EN PAUSA
                  </span>
                )}
                <span className="text-xs font-extrabold text-[#f9a602] bg-[#3d1105] border border-[#f9a602]/60 px-2.5 py-0.5 rounded-full truncate">
                  {activeAlbum.formatLabel} • {activeAlbum.conditionLabel}
                </span>
              </div>

              <h4 className="font-extrabold text-sm sm:text-base text-[#fdf6e2] truncate mt-1 tracking-wide">
                {activeAlbum.title} <span className="text-[#f9a602]">—</span> {activeAlbum.artist}
              </h4>

              <div className="text-xs sm:text-sm font-extrabold text-[#fdf6e2] truncate tabular-nums mt-0.5 flex items-center gap-2">
                <span className="bg-[#f9a602] text-[#260701] px-1.5 py-0.2 rounded text-[11px] font-extrabold shrink-0">
                  PISTA {track.num}
                </span>
                <span className="truncate text-[#fdf6e2]">{track.name}</span>
                <span className="text-[#f9a602] font-extrabold shrink-0">({track.time})</span>
              </div>
            </div>
          </div>

          {/* Controles de Audio Sintetizado (Web Audio API) */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-center border-t-2 md:border-t-0 border-[#f9a602]/30 pt-2.5 md:pt-0 shrink-0">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={onTogglePlay}
                className="rubber-btn bg-[#f9a602] hover:bg-[#f96d00] text-[#260701] rounded-full px-4 py-2 font-extrabold text-xs sm:text-sm flex items-center gap-2 border-2 border-[#fdf6e2] shadow-[3px_3px_0px_#000]"
              >
                <span>{isPlaying ? '⏸' : '▶'}</span>
                <span>{isPlaying ? 'PAUSAR AUDIO' : formatPlayLabel}</span>
              </button>

              <button
                type="button"
                onClick={onToggleDrawer}
                className="rubber-btn bg-[#fdf6e2] hover:bg-[#f5e6c4] text-[#260701] rounded-full px-3.5 py-2 font-extrabold text-xs flex items-center gap-1.5 border-2 border-[#260701] shadow-[3px_3px_0px_#000]"
              >
                <span>📜 {isDrawerOpen ? 'OCULTAR PISTAS' : 'VER TRACKLIST'}</span>
                <span className="bg-[#260701] text-[#f9a602] rounded-full px-2 py-0.2 text-[10px] font-extrabold tabular-nums">
                  {activeAlbum.tracks.length}
                </span>
              </button>
            </div>

            {/* Vúmetro analógico animado */}
            <div className="hidden sm:flex items-end gap-1 h-9 px-3 py-1.5 bg-[#120300] rounded-xl border-2 border-[#f9a602]/70">
              {displayedVuHeights.map((h, i) => (
                <div
                  key={i}
                  className={`vu-bar w-1.5 ${vuColors[i]} rounded-t transition-all duration-150`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gaveta Desplegable de Tracklist con Contraste Reforzado */}
        {isDrawerOpen && (
          <div className="mt-3.5 pt-3 border-t-2 border-[#f9a602]/40">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#f9a602]">
                LISTA DE PISTAS DE «{activeAlbum.title.toUpperCase()}»
              </span>
              <span className="text-xs font-extrabold text-[#fdf6e2] bg-[#3d1105] px-2.5 py-0.5 rounded-full border border-[#f9a602]/50">
                Haz clic en cualquier pista para reproducirla
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeAlbum.tracks.map((t, idx) => {
                const isSelected = idx === activeTrackIndex;
                return (
                  <button
                    key={t.num}
                    type="button"
                    onClick={() => onSelectTrack(idx)}
                    className={`flex items-center justify-between px-3.5 py-2 rounded-xl border-2 text-xs font-extrabold tabular-nums transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#f9a602] text-[#260701] border-[#fdf6e2] shadow-[3px_3px_0px_#d91e00]'
                        : 'bg-[#3b1105] text-[#fdf6e2] border-[#f9a602]/60 hover:border-[#f9a602] hover:bg-[#521807]'
                    }`}
                  >
                    <span className="truncate pr-2 flex items-center gap-2">
                      <strong
                        className={`px-1.5 py-0.2 rounded text-[10px] ${
                          isSelected
                            ? 'bg-[#260701] text-[#f9a602]'
                            : 'bg-[#f9a602] text-[#260701]'
                        }`}
                      >
                        {t.num}
                      </strong>
                      <span className="truncate">{t.name}</span>
                    </span>
                    <span
                      className={`font-extrabold shrink-0 ${
                        isSelected ? 'text-[#260701]' : 'text-[#f9a602]'
                      }`}
                    >
                      {t.time}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
