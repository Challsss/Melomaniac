import { useState } from 'react';
import { catalog } from '../data/catalog';
import type { Album, FormatType } from '../types/catalog';
import { FormatCharacterAvatar } from './FormatCharacters';
import { CoverArtworkSVG, SlidingMediaSVG } from './ProductCard';

interface FormatProductPageProps {
  format: FormatType;
  activeAlbumId: number;
  activeTrackIndex: number;
  isPlaying: boolean;
  onBackToCatalog: () => void;
  onSwitchFormatPage: (format: FormatType) => void;
  onPreviewAlbum: (albumId: number, trackIndex?: number) => void;
  onAddToCartWithQty: (albumId: number, qty: number) => void;
}

interface FormatPageConfig {
  format: FormatType;
  canonicalAlbum: Album;
  pageBadge: string;
  pageHeadline: string;
  characterName: string;
  characterRole: string;
  characterQuote: string;
  editorialSynopsis: string;
  specs: { label: string; value: string }[];
  includedItems: string[];
}

const FORMAT_PAGE_CONFIGS: Record<FormatType, FormatPageConfig> = {
  LP: {
    format: 'LP',
    canonicalAlbum: catalog[0], // Fiebre en el Surco (LP)
    pageBadge: 'FICHA DE PRODUCTO • FORMATO VINILO 12"',
    pageHeadline: 'Edición Maestra en Vinilo Audiófilo 180g',
    characterName: 'Don Surco',
    characterRole: 'Especialista Jefe del Apartado de Vinilos',
    characterQuote:
      '«Este prensaje de 180 gramos tiene un surco tan profundo que la aguja baila sola. Cero estática, graves redondos y carpeta Gatefold de cartón grueso.»',
    editorialSynopsis:
      'Todos los vinilos de MELOMANIAC pasan por nuestra máquina de limpieza ultrasónica antes del envío. Esta edición de referencia en vinilo naranja translúcido de 180g ha sido cortada directamente desde las cintas maestras analógicas de 1/4 de pulgada.',
    specs: [
      { label: 'Formato Físico', value: 'Vinilo LP 12" (30 cm)' },
      { label: 'Gramaje y Color', value: '180g Virgen • Naranja Translúcido' },
      { label: 'Velocidad de Giro', value: '33⅓ RPM Estéreo Hi-Fi' },
      { label: 'Carpeta Exterior', value: 'Gatefold Doble de 400g con Lomo Ancho' },
      { label: 'Funda Interior', value: 'Polylined Antiestática Japonesa' },
      { label: 'Graduación Goldmine', value: 'MINT (M) • Impecable' },
    ],
    includedItems: [
      'Disco LP 12" de 180 gramos limpiado por ultrasonidos',
      'Funda exterior japonesa resellable de polipropileno cristal',
      'Encarte interior impreso en papel kraft con créditos de sesión',
      'Certificado de graduación Goldmine firmado por Don Surco',
    ],
  },
  CASSETTE: {
    format: 'CASSETTE',
    canonicalAlbum: catalog[1], // Sinfonía de Cromo Vol. II (CASSETTE)
    pageBadge: 'FICHA DE PRODUCTO • FORMATO CASETE CrO₂',
    pageHeadline: 'Edición Analógica en Cinta de Cromo (Type II)',
    characterName: 'Max Cromo',
    characterRole: 'Especialista Jefe del Apartado de Casetes',
    characterQuote:
      '«Nada iguala la pegada cálida del dióxido de cromo a 70 microsegundos. Hemos revisado la almohadilla de fieltro y las bobinas para que gire suave en tu Walkman o pletina.»',
    editorialSynopsis:
      'Duplicada en tiempo real (1:1) sobre cinta magnética de Dióxido de Cromo (CrO₂ Type II) con reducción de ruido Dolby B. Su carcasa atornillada de 5 puntos permite mantenimiento de por vida y ofrece esa saturación analógica genuina de finales de los 70.',
    specs: [
      { label: 'Formato Físico', value: 'Compact Cassette Estéreo' },
      { label: 'Fórmula Magnética', value: 'Dióxido de Cromo (CrO₂ Type II • 70µs)' },
      { label: 'Reducción de Ruido', value: 'Dolby B NR Conmutable' },
      { label: 'Construcción Carcasa', value: 'Termoplástico Rojo con 5 Tornillos' },
      { label: 'Encarte Interior', value: 'J-Card Desplegable de 4 Paneles' },
      { label: 'Graduación Goldmine', value: 'NEAR MINT (NM) • Cabezal y Fieltro 10/10' },
    ],
    includedItems: [
      'Casete CrO₂ revisado y rebobinado con tensión calibrada',
      'Caja Norelco transparente libre de grietas y bisagras nuevas',
      'J-Card desplegable con letras completas e ilustraciones 70s',
      'Pegatina coleccionable del Escuadrón Cromo MELOMANIAC',
    ],
  },
  CD: {
    format: 'CD',
    canonicalAlbum: catalog[2], // Prisma Láser 1984 (CD)
    pageBadge: 'FICHA DE PRODUCTO • FORMATO CD ÓPTICO',
    pageHeadline: 'Primera Edición Red Book con Tira Obi Japonesa',
    characterName: 'Lady Láser',
    characterRole: 'Especialista Jefa del Apartado de CDs',
    characterQuote:
      '«Rango dinámico completo sin compresión agresiva. Superficie espejo verificada al milímetro bajo luz óptica: cero marcas, lectura instantánea y libreto de lujo.»',
    editorialSynopsis:
      'Masterizado respetando el rango dinámico original bajo el estándar Red Book (16-Bit / 44.1 kHz, código SPARS AAD). Incluye la codiciada tira lateral Obi de edición japonesa, caja Jewel Case de alto gramaje y libreto de 24 páginas grapado.',
    specs: [
      { label: 'Formato Físico', value: 'Compact Disc Digital Audio (CD-DA)' },
      { label: 'Resolución / SPARS', value: '16-Bit / 44.1 kHz • Masterización AAD' },
      { label: 'Sustrato Reflectante', value: 'Aluminio Espejo sobre Policarbonato' },
      { label: 'Presentación Exterior', value: 'Jewel Case Clásica + Tira Obi Lateral' },
      { label: 'Libreto Interior', value: '24 Páginas Ilustradas a Todo Color' },
      { label: 'Graduación Goldmine', value: 'MINT (M) • Superficie Espejo 100% Limpia' },
    ],
    includedItems: [
      'Disco Óptico CD con superficie espejo inspeccionada sin micro-rayas',
      'Tira lateral Obi japonesa original y funda protectora Mylar',
      'Libreto de 24 páginas con letras, fotos y notas técnicas',
      'Caja Jewel Case de alto impacto con bandeja dentada intacta',
    ],
  },
};

export function FormatProductPage({
  format,
  activeAlbumId,
  activeTrackIndex,
  isPlaying,
  onBackToCatalog,
  onSwitchFormatPage,
  onPreviewAlbum,
  onAddToCartWithQty,
}: FormatProductPageProps) {
  const [qty, setQty] = useState<number>(1);
  const [isMediaExtracted, setIsMediaExtracted] = useState<boolean>(true);

  const config = FORMAT_PAGE_CONFIGS[format];
  const item = config.canonicalAlbum;
  const isThisAlbumPlaying = activeAlbumId === item.id && isPlaying;

  return (
    <div className="space-y-8 mb-14">
      {/* Barra de Navegación Superior de la Ficha de Producto */}
      <div className="brutal-box rounded-3xl p-4 sm:p-5 bg-[#f5e6c4] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onBackToCatalog}
            className="rubber-btn bg-[#260701] hover:bg-[#d91e00] text-[#f9a602] hover:text-[#fdf6e2] rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center gap-2"
          >
            <span>← Volver a la Batea</span>
          </button>
          <span className="text-xs font-extrabold uppercase text-[#4a1504] bg-[#fdf6e2] border-2 border-[#260701] px-3 py-1 rounded-full">
            {config.pageBadge}
          </span>
        </div>

        {/* Selector rápido entre las 3 páginas de producto (Vinilo, Casete, CD) */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase text-[#4a1504] mr-1">
            VER FICHA TIPO:
          </span>
          {(
            [
              { id: 'LP', label: '● Ficha Vinilo' },
              { id: 'CASSETTE', label: '📼 Ficha Casete' },
              { id: 'CD', label: '💿 Ficha CD' },
            ] as { id: FormatType; label: string }[]
          ).map((tab) => {
            const active = tab.id === format;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSwitchFormatPage(tab.id)}
                className={`rubber-btn rounded-full px-3.5 py-1.5 text-xs font-extrabold ${
                  active
                    ? 'bg-[#d91e00] text-[#fdf6e2]'
                    : 'bg-[#fdf6e2] hover:bg-[#f9a602] text-[#260701]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bloque Principal de Producto (2 Columnas) */}
      <section className="brutal-box rounded-3xl p-6 sm:p-8 bg-[#fdf6e2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Escenario Físico Interactivo + Personaje del Formato */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f5e6c4] border-3 border-[#260701] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_#260701] relative overflow-hidden" style={{ borderWidth: '3px' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#260701] text-[#f9a602] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full">
                  INSPECCIÓN FÍSICA INTERACTIVA
                </span>
                <button
                  type="button"
                  onClick={() => setIsMediaExtracted((prev) => !prev)}
                  className="rubber-btn bg-[#f9a602] hover:bg-[#f96d00] text-[#260701] rounded-full px-3 py-1 text-[11px] font-extrabold uppercase"
                >
                  {isMediaExtracted ? 'Guardar en funda' : 'Sacar de la funda'}
                </button>
              </div>

              {/* Portada + Vinilo/Casete/CD que asoma */}
              <div
                onClick={() => setIsMediaExtracted((prev) => !prev)}
                className="relative mx-auto max-w-[290px] sm:max-w-[320px] pt-2 pr-14 pb-2 cursor-pointer"
                title="Haz clic para sacar o guardar el soporte físico"
              >
                <div
                  className={`absolute top-4 right-2 w-4/5 aspect-square z-0 transition-transform duration-500 ${
                    isMediaExtracted
                      ? 'translate-x-[30%] rotate-[95deg]'
                      : 'translate-x-0 rotate-0'
                  }`}
                >
                  <SlidingMediaSVG item={item} />
                </div>

                <div
                  className="relative z-10 aspect-square w-full rounded-2xl border-3 border-[#260701] overflow-hidden shadow-[6px_6px_0px_#260701] bg-[#260701]"
                  style={{ borderWidth: '3px' }}
                >
                  <CoverArtworkSVG item={item} />
                </div>
              </div>

              <p className="text-center text-xs font-extrabold text-[#4a1504] mt-3">
                Haz clic en la portada para extraer o guardar el{' '}
                {format === 'LP' ? 'vinilo 180g' : format === 'CASSETTE' ? 'casete CrO₂' : 'CD óptico'}
              </p>
            </div>

            {/* Tarjeta de Reseña del Personaje del Apartado */}
            <div className="bg-[#f9a602] border-3 border-[#260701] rounded-3xl p-4 sm:p-5 shadow-[5px_5px_0px_#260701] flex items-center gap-4" style={{ borderWidth: '3px' }}>
              <div className="rubber-idle w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                <FormatCharacterAvatar format={format} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="inline-block bg-[#260701] text-[#f9a602] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1">
                  {config.characterName} • {config.characterRole}
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-[#260701] leading-snug">
                  {config.characterQuote}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Datos del Producto, Precio, Compra y Especificaciones */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border-2 border-[#260701] bg-[#260701] text-[#f9a602]">
                  {item.formatLabel}
                </span>
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full border-2 border-[#260701] bg-[#f9a602] text-[#260701]">
                  {item.conditionLabel}
                </span>
                <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full border-2 border-[#260701] bg-[#d91e00] text-[#fdf6e2]">
                  EN STOCK • ENVÍO 24H
                </span>
              </div>

              <div className="text-xs font-extrabold uppercase tracking-wider text-[#5c2209] mt-2">
                {item.label} • {config.pageHeadline}
              </div>

              <h2 className="font-caprasimo text-3xl sm:text-4xl md:text-5xl text-[#260701] leading-tight mt-1">
                {item.title}
              </h2>

              <p className="text-lg sm:text-xl font-extrabold text-[#9e1b00] mt-1">
                {item.artist}
              </p>

              <p className="text-sm font-bold text-[#260701] leading-relaxed mt-3 bg-[#f5e6c4] p-4 rounded-2xl border-2 border-[#260701]">
                {config.editorialSynopsis}
              </p>
            </div>

            {/* Caja de Precio (en una sola línea) y Botones de Acción */}
            <div
              className="bg-[#f5e6c4] border-3 border-[#260701] rounded-3xl p-5 shadow-[5px_5px_0px_#260701] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{ borderWidth: '3px' }}
            >
              <div className="shrink-0">
                <span className="block text-xs font-extrabold uppercase text-[#4a1504]">
                  PRECIO OFICIAL IVA INCLUIDO
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="price-display text-3xl sm:text-4xl leading-none whitespace-nowrap">
                    {`${(item.price * qty).toFixed(2).replace('.', ',')}\u00A0€`}
                  </span>
                  {qty > 1 && (
                    <span className="text-xs font-extrabold text-[#4a1504] whitespace-nowrap">
                      ({`${item.price.toFixed(2).replace('.', ',')}\u00A0€`} / ud.)
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Selector de cantidad */}
                <div className="flex items-center bg-[#fdf6e2] border-2 border-[#260701] rounded-full px-2 py-1 gap-2 shadow-[2px_2px_0px_#260701]">
                  <button
                    type="button"
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 rounded-full bg-[#f5e6c4] border-2 border-[#260701] font-extrabold text-sm text-[#260701] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-extrabold text-sm text-[#260701] tabular-nums">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((prev) => prev + 1)}
                    className="w-7 h-7 rounded-full bg-[#f9a602] border-2 border-[#260701] font-extrabold text-sm text-[#260701] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onPreviewAlbum(item.id)}
                  className={`hidden md:flex rubber-btn ${
                    isThisAlbumPlaying
                      ? 'bg-[#d91e00] text-[#fdf6e2]'
                      : 'bg-[#fdf6e2] hover:bg-[#f9a602] text-[#260701]'
                  } rounded-full px-4 py-2.5 text-xs sm:text-sm font-extrabold items-center gap-2 whitespace-nowrap`}
                >
                  <span>{isThisAlbumPlaying ? '⏸' : '🎧'}</span>
                  <span>{isThisAlbumPlaying ? 'Pausar Preview' : 'Escuchar Preview'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onAddToCartWithQty(item.id, qty)}
                  className="rubber-btn bg-[#f9a602] hover:bg-[#d91e00] text-[#260701] hover:text-[#fdf6e2] rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wide flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>+ Añadir a la Maleta</span>
                </button>
              </div>
            </div>

            {/* Tabla de Especificaciones Físicas del Formato */}
            <div>
              <h3 className="font-caprasimo text-xl text-[#260701] mb-3">
                Especificaciones Técnicas del Formato ({format === 'LP' ? 'Vinilo' : format === 'CASSETTE' ? 'Casete' : 'CD'})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {config.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-[#f5e6c4] border-2 border-[#260701] rounded-2xl p-3 shadow-[2px_2px_0px_#260701]"
                  >
                    <div className="text-[10px] font-extrabold uppercase text-[#4a1504]">
                      {spec.label}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-[#260701] mt-0.5">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracklist Completo + Qué incluye la edición */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
        {/* Lista de Pistas (interactiva en escritorio, informativa y limpia en móvil) */}
        <section className="lg:col-span-7 brutal-box rounded-3xl p-5 sm:p-6 bg-[#fdf6e2]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase text-[#9e1b00]">
                REPERTORIO COMPLETO • {item.bpm} BPM
              </span>
              <h3 className="font-caprasimo text-xl sm:text-2xl text-[#260701]">
                Tracklist Oficial ({item.tracks.length} Pistas)
              </h3>
            </div>
            <span className="hidden md:inline-block text-xs font-extrabold bg-[#f9a602] text-[#260701] border-2 border-[#260701] px-3 py-1 rounded-full">
              Haz clic en una pista para pincharla
            </span>
          </div>

          <div className="space-y-2.5">
            {item.tracks.map((track, idx) => {
              const isTrackActive =
                activeAlbumId === item.id && activeTrackIndex === idx && isPlaying;
              return (
                <button
                  key={track.num}
                  type="button"
                  onClick={() => {
                    if (window.matchMedia('(min-width: 768px)').matches) {
                      onPreviewAlbum(item.id, idx);
                    }
                  }}
                  className={`w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl border-2 text-left transition-all md:cursor-pointer default:cursor-default tabular-nums ${
                    isTrackActive
                      ? 'bg-[#260701] text-[#fdf6e2] border-[#260701] shadow-[4px_4px_0px_#d91e00]'
                      : 'bg-[#f5e6c4] md:hover:bg-[#f9a602] text-[#260701] border-[#260701] shadow-[3px_3px_0px_#260701]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-3">
                    <span
                      className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-xs font-extrabold shrink-0 border ${
                        isTrackActive
                          ? 'bg-[#f9a602] text-[#260701] border-[#fdf6e2]'
                          : 'bg-[#260701] text-[#f9a602] border-[#260701]'
                      }`}
                    >
                      {track.num}
                    </span>
                    <span className="font-extrabold text-xs sm:text-sm truncate">
                      {track.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`text-xs font-extrabold ${
                        isTrackActive ? 'text-[#f9a602]' : 'text-[#4a1504]'
                      }`}
                    >
                      {track.time}
                    </span>
                    <span className="hidden md:inline text-sm">
                      {isTrackActive ? '⏸' : '▶'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Garantía Física y Contenido del Paquete */}
        <section className="lg:col-span-5 brutal-box rounded-3xl p-6 bg-[#f5e6c4] flex flex-col justify-between">
          <div>
            <span className="inline-block bg-[#260701] text-[#f9a602] text-[11px] font-extrabold uppercase px-3 py-1 rounded-full mb-2">
              GARANTÍA COLECCIONISTA MELOMANIAC
            </span>
            <h3 className="font-caprasimo text-2xl text-[#260701] mb-3">
              ¿Qué incluye esta edición de {format === 'LP' ? 'Vinilo' : format === 'CASSETTE' ? 'Casete' : 'CD'}?
            </h3>
            <ul className="space-y-2.5">
              {config.includedItems.map((inc, i) => (
                <li
                  key={i}
                  className="bg-[#fdf6e2] border-2 border-[#260701] rounded-2xl p-3 text-xs sm:text-sm font-extrabold text-[#260701] flex items-start gap-2.5 shadow-[2px_2px_0px_#260701]"
                >
                  <span className="bg-[#d91e00] text-[#fdf6e2] w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t-2 border-dashed border-[#260701]/40 flex items-center justify-between text-xs font-extrabold text-[#4a1504]">
            <span>📦 Embalaje rígido anti-impacto</span>
            <span>🛡️ Graduación Goldmine 100%</span>
          </div>
        </section>
      </div>
    </div>
  );
}
