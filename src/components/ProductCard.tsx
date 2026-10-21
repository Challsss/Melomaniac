import type { Album, FormatType } from '../types/catalog';

interface ProductCardProps {
  item: Album;
  isCurrentPlaying: boolean;
  onPreview: (albumId: number) => void;
  onAddToCart: (albumId: number) => void;
  onOpenFormatPage: (format: FormatType) => void;
}

export function CoverArtworkSVG({ item }: { item: Album }) {
  const badgeText =
    item.format === 'LP'
      ? 'VINILO HIFI'
      : item.format === 'CASSETTE'
        ? 'CROMO CrO₂'
        : 'CD DIGITAL';

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill={item.coverBg} />
      {/* Semitono decorativo de fondo */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="#fdf6e2"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.35"
      />
      {/* Contorno de tinta para que la cinta 70s contraste sobre cualquier color de portada */}
      <path
        d="M-10 150 H85 A45 45 0 1 0 85 60 A25 25 0 1 0 85 110 H210"
        fill="none"
        stroke="#260701"
        strokeWidth="38"
        strokeLinecap="round"
      />
      {/* Cintas concéntricas estilo años 70 */}
      <path
        d="M-10 150 H85 A45 45 0 1 0 85 60 A25 25 0 1 0 85 110 H210"
        fill="none"
        stroke="#f9a602"
        strokeWidth="32"
        strokeLinecap="round"
      />
      <path
        d="M-10 150 H85 A45 45 0 1 0 85 60 A25 25 0 1 0 85 110 H210"
        fill="none"
        stroke="#f96d00"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M-10 150 H85 A45 45 0 1 0 85 60 A25 25 0 1 0 85 110 H210"
        fill="none"
        stroke="#d91e00"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Círculo central con ilustración retro */}
      <circle cx="100" cy="95" r="42" fill="#fdf6e2" stroke="#260701" strokeWidth="5" />
      <circle cx="100" cy="95" r="32" fill={item.coverAccent} stroke="#260701" strokeWidth="3.5" />
      {/* Ojos Pie-Cut años 30 en la portada */}
      <ellipse cx="91" cy="90" rx="5.5" ry="8.5" fill="#fdf6e2" stroke="#260701" strokeWidth="2.2" />
      <ellipse cx="109" cy="90" rx="5.5" ry="8.5" fill="#fdf6e2" stroke="#260701" strokeWidth="2.2" />
      <circle cx="92" cy="90" r="2.8" fill="#260701" />
      <circle cx="110" cy="90" r="2.8" fill="#260701" />
      <path
        d="M88 103 Q100 112 112 103"
        stroke="#260701"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Etiqueta tipográfica integrada en portada */}
      <rect
        x="12"
        y="12"
        width="82"
        height="22"
        rx="11"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="3"
      />
      <text
        x="53"
        y="27"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans"
        fontWeight="800"
        fontSize="10"
        fill="#260701"
      >
        {badgeText}
      </text>
    </svg>
  );
}

export function SlidingMediaSVG({ item }: { item: Album }) {
  if (item.format === 'CASSETTE') {
    return (
      <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[4px_4px_0px_#260701]">
        <rect
          x="25"
          y="18"
          width="140"
          height="144"
          rx="14"
          fill={item.discColor}
          stroke="#260701"
          strokeWidth="5"
        />
        <rect
          x="42"
          y="34"
          width="106"
          height="112"
          rx="8"
          fill="#fdf6e2"
          stroke="#260701"
          strokeWidth="3"
        />
        <rect x="68" y="48" width="54" height="84" rx="27" fill="#260701" />
        <circle cx="95" cy="68" r="13" fill="#fdf6e2" stroke="#f9a602" strokeWidth="3" />
        <circle cx="95" cy="112" r="13" fill="#fdf6e2" stroke="#f9a602" strokeWidth="3" />
      </svg>
    );
  }

  if (item.format === 'CD') {
    return (
      <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[4px_4px_0px_#260701]">
        {/* Superficie espejo del CD */}
        <circle cx="90" cy="90" r="84" fill="#fdf6e2" stroke="#260701" strokeWidth="5" />
        {/* Destellos prismáticos cálidos del CD */}
        <path d="M90 90 L32 30 A84 84 0 0 1 68 9 Z" fill="#f9a602" />
        <path d="M90 90 L68 9 A84 84 0 0 1 92 6 Z" fill="#f96d00" />
        <path d="M90 90 L92 6 A84 84 0 0 1 112 10 Z" fill="#d91e00" />
        <path d="M90 90 L148 150 A84 84 0 0 1 112 171 Z" fill="#f9a602" />
        <path d="M90 90 L112 171 A84 84 0 0 1 88 174 Z" fill="#f96d00" />
        <path d="M90 90 L88 174 A84 84 0 0 1 68 170 Z" fill="#d91e00" />
        {/* Surcos ópticos */}
        <circle
          cx="90"
          cy="90"
          r="66"
          fill="none"
          stroke="#260701"
          strokeWidth="1.5"
          strokeDasharray="10 8"
          opacity="0.45"
        />
        <circle cx="90" cy="90" r="84" fill="none" stroke="#260701" strokeWidth="5" />
        {/* Anillo de policarbonato y centro transparente */}
        <circle cx="90" cy="90" r="30" fill="#f5e6c4" stroke="#260701" strokeWidth="3.5" />
        <circle cx="90" cy="90" r="20" fill={item.labelColor} stroke="#260701" strokeWidth="2.5" />
        <circle cx="90" cy="90" r="10" fill="#260701" stroke="#fdf6e2" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 180 180" className="w-full h-full drop-shadow-[4px_4px_0px_#260701]">
      <circle cx="90" cy="90" r="84" fill={item.discColor} stroke="#260701" strokeWidth="5" />
      <circle
        cx="90"
        cy="90"
        r="72"
        fill="none"
        stroke="#fdf6e2"
        strokeWidth="1.5"
        strokeDasharray="18 12"
        opacity="0.55"
      />
      <circle
        cx="90"
        cy="90"
        r="58"
        fill="none"
        stroke="#260701"
        strokeWidth="1.5"
        strokeDasharray="12 10"
        opacity="0.55"
      />
      <circle cx="90" cy="90" r="32" fill={item.labelColor} stroke="#260701" strokeWidth="4" />
      <circle
        cx="90"
        cy="90"
        r="7"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="3"
      />
    </svg>
  );
}

function HypeSticker({ item }: { item: Album }) {
  const textColor = item.stickerBg === '#d91e00' ? '#fdf6e2' : '#260701';
  if (item.stickerType === 'star') {
    return (
      <div className="hype-sticker absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#260701] sm:drop-shadow-[3px_3px_0px_#260701]">
          <polygon
            points="50,3 63,18 82,11 84,31 98,44 86,60 92,79 73,83 64,98 48,88 31,96 25,78 7,73 15,55 4,39 22,29 24,10 42,17"
            fill={item.stickerBg}
            stroke="#260701"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-caprasimo absolute text-[8.5px] sm:text-[11px] leading-tight text-center px-1.5 sm:px-2"
          style={{ color: textColor }}
        >
          {item.stickerText}
        </span>
      </div>
    );
  }

  return (
    <div
      className="hype-sticker absolute -top-2 -right-1.5 sm:-top-2.5 sm:-right-2 z-20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 sm:border-3 border-[#260701] shadow-[2px_2px_0px_#260701] sm:shadow-[3px_3px_0px_#260701] pointer-events-none"
      style={{
        backgroundColor: item.stickerBg,
        color: textColor,
      }}
    >
      <span className="font-caprasimo text-[9px] sm:text-xs tracking-wide block">
        {item.stickerText}
      </span>
    </div>
  );
}

export function ProductCard({
  item,
  isCurrentPlaying,
  onPreview,
  onAddToCart,
  onOpenFormatPage,
}: ProductCardProps) {
  const conditionBadgeColor =
    item.condition === 'M'
      ? 'bg-[#f9a602] text-[#260701]'
      : item.condition === 'NM'
        ? 'bg-[#f5e6c4] text-[#260701]'
        : 'bg-[#f96d00] text-[#260701]';

  const formatPageLabel =
    item.format === 'LP'
      ? 'Ver Ficha de Vinilo'
      : item.format === 'CASSETTE'
        ? 'Ver Ficha de Casete'
        : 'Ver Ficha de CD';

  const shortFormatLabel =
    item.format === 'LP' ? 'VINILO' : item.format === 'CASSETTE' ? 'CASETE' : 'CD';

  return (
    <article
      onClick={() => onOpenFormatPage(item.format)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenFormatPage(item.format);
        }
      }}
      title={formatPageLabel}
      className="brutal-card rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 flex flex-col justify-between relative group bg-[#fdf6e2] cursor-pointer text-left"
    >
      <HypeSticker item={item} />

      <div>
        {/* Escenario de Portada + Vinilo/Casete/CD deslizante */}
        <div className="relative mb-2.5 sm:mb-4 pt-0.5 sm:pt-1 pr-3 sm:pr-6">
          {/* Soporte físico que asoma al hacer hover */}
          <div className="record-disc absolute top-1.5 sm:top-2 right-1.5 sm:right-4 w-4/5 aspect-square z-0 pointer-events-none">
            <SlidingMediaSVG item={item} />
          </div>

          {/* Funda cuadrada con borde de tinta */}
          <div
            className="relative z-10 aspect-square w-full rounded-xl sm:rounded-2xl border-2 sm:border-3 border-[#260701] overflow-hidden shadow-[3px_3px_0px_#260701] sm:shadow-[4px_4px_0px_#260701] bg-[#260701]"
          >
            <CoverArtworkSVG item={item} />
          </div>
        </div>

        {/* Metadatos técnicos adaptados a 2 columnas en móvil */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
          <span className="sm:hidden text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-[#260701] bg-[#260701] text-[#f9a602]">
            {shortFormatLabel}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border-2 border-[#260701] bg-[#260701] text-[#f9a602]">
            {item.formatLabel}
          </span>
          <span
            className={`text-[9px] sm:text-[11px] font-extrabold uppercase px-1.5 sm:px-2.5 py-0.5 rounded-full border sm:border-2 border-[#260701] ${conditionBadgeColor}`}
          >
            <span className="sm:hidden">{item.condition}</span>
            <span className="hidden sm:inline">{item.conditionLabel}</span>
          </span>
        </div>

        <div className="hidden sm:block text-[11px] font-extrabold text-[#5c2209] uppercase tracking-wider mb-0.5">
          {item.label}
        </div>

        <h3 className="text-xs sm:text-lg font-extrabold text-[#260701] leading-tight sm:leading-snug group-hover:text-[#9e1b00] transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="text-[11px] sm:text-sm font-extrabold text-[#9e1b00] mt-0.5 mb-2 sm:mb-3 truncate">
          {item.artist}
        </p>

        {/* Mini vista previa de las 2 primeras pistas (visible desde sm para airear móvil) */}
        <div className="hidden sm:block bg-[#f5e6c4] border-2 border-[#260701] rounded-xl p-2.5 mb-4 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-[#4a1504] border-b-2 border-[#260701]/25 pb-1">
            <span>PISTA</span>
            <span>DURACIÓN</span>
          </div>
          {item.tracks.slice(0, 2).map((t) => (
            <div
              key={t.num}
              className="flex items-center justify-between text-xs font-extrabold text-[#260701] tabular-nums"
            >
              <span className="truncate pr-2 flex items-center gap-1.5">
                <strong className="bg-[#260701] text-[#f9a602] px-1.5 py-0.2 rounded text-[10px] shrink-0">
                  {t.num}
                </strong>
                <span className="truncate">{t.name}</span>
              </span>
              <span className="font-extrabold text-[#4a1504] shrink-0">{t.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie de Tarjeta: Precio en una sola línea (whitespace-nowrap) + Acciones */}
      <div className="pt-2 sm:pt-2.5 border-t-2 border-dashed border-[#260701]/40 flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="shrink-0">
          <span className="hidden sm:block text-[10px] font-extrabold uppercase text-[#4a1504]">
            PRECIO FINAL
          </span>
          <span className="price-display text-base sm:text-2xl leading-none whitespace-nowrap">
            {`${item.price.toFixed(2).replace('.', ',')}\u00A0€`}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Botón de Preview solo en escritorio (md:) junto con el reproductor */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPreview(item.id);
            }}
            className={`hidden md:flex rubber-btn ${
              isCurrentPlaying
                ? 'bg-[#d91e00] text-[#fdf6e2]'
                : 'bg-[#f5e6c4] hover:bg-[#f9a602] text-[#260701]'
            } rounded-full px-2.5 py-2 text-xs font-extrabold items-center gap-1 whitespace-nowrap`}
            title="Pinchar en el reproductor inferior y ver tracklist completo"
          >
            <span>{isCurrentPlaying ? '⏸' : '🎧'}</span>
            <span className="hidden xl:inline">Preview</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(item.id);
            }}
            className="rubber-btn bg-[#f9a602] hover:bg-[#d91e00] text-[#260701] hover:text-[#fdf6e2] rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-wide flex items-center gap-1 whitespace-nowrap"
          >
            <span>+ Añadir</span>
          </button>
        </div>
      </div>
    </article>
  );
}
