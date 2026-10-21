interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onRandomPick: () => void;
  onGoHome?: () => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  onRandomPick,
  onGoHome,
}: HeaderProps) {
  const handleTitleClick = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      onRandomPick();
    } else if (onGoHome) {
      onGoHome();
    }
  };

  return (
    <header className="brutal-box rounded-3xl p-4 sm:p-7 mb-5 sm:mb-8 relative overflow-hidden bg-[#fdf6e2]">
      {/* Franja decorativa 70s en la esquina superior derecha (solo escritorio) */}
      <div className="absolute -right-8 -top-8 w-52 h-52 pointer-events-none opacity-95 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="135" cy="65" r="78" stroke="#260701" strokeWidth="14" fill="none" />
          <circle cx="135" cy="65" r="65" stroke="#d91e00" strokeWidth="14" fill="none" />
          <circle cx="135" cy="65" r="52" stroke="#f96d00" strokeWidth="14" fill="none" />
          <circle cx="135" cy="65" r="39" stroke="#f9a602" strokeWidth="14" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
        {/* Identidad MELOMANIAC (Azar activo solo en escritorio; aireado y limpio en móvil) */}
        <div>
          <div className="hidden sm:inline-flex flex-wrap items-center gap-2 bg-[#f9a602] border-2 border-[#260701] px-3 py-0.5 rounded-full shadow-[2px_2px_0px_#260701] mb-1.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#260701]">
              EST. 1973 • CULTURA FÍSICA Y SONIDO EN CARNE Y HUESO
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleTitleClick}
              title="En escritorio: ¡Haz clic en MELOMANIAC para escuchar un disco al azar!"
              className="group text-left cursor-pointer focus:outline-none inline-flex flex-wrap items-center gap-3"
            >
              <h1 className="cuphead-title text-3xl sm:text-5xl md:text-6xl leading-none tracking-tight transition-transform duration-200 md:group-hover:scale-[1.03] md:group-hover:-rotate-1 group-active:scale-95">
                MELOMANIAC
              </h1>
              {/* Insignia de Azar exclusiva de la versión de escritorio */}
              <span className="hidden md:inline-flex bg-[#f9a602] text-[#260701] border-2 border-[#260701] rounded-full px-3 py-1 text-xs font-extrabold uppercase shadow-[3px_3px_0px_#260701] group-hover:bg-[#d91e00] group-hover:text-[#fdf6e2] transition-colors">
                🎲 ¡Azar!
              </span>
            </button>
          </div>

          <p className="mt-1 sm:mt-2 text-xs sm:text-base font-extrabold text-[#4a1504] flex flex-wrap items-center gap-x-2">
            <span>Vinilos 180g, Casetes de Cromo y CDs de Colección</span>
            <span className="hidden md:inline text-[#d91e00]">•</span>
            <span className="hidden md:inline underline decoration-2 decoration-[#d91e00]">
              Haz clic en «MELOMANIAC» para pinchar un tema al azar
            </span>
          </p>
        </div>

        {/* Buscador Brutalista + Botón de Carrito en una sola fila limpia en móvil */}
        <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 lg:w-auto">
          <div className="relative flex-1 min-w-0 sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar álbum, artista..."
              className="w-full bg-[#f5e6c4] border-3 border-[#260701] rounded-full py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 sm:pr-4 text-xs sm:text-sm font-extrabold text-[#260701] placeholder-[#5c2209] shadow-[3px_3px_0px_#260701] sm:shadow-[4px_4px_0px_#260701] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d91e00]"
              style={{ borderWidth: '3px' }}
            />
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#260701] absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </div>

          <button
            type="button"
            onClick={onOpenCart}
            className="rubber-btn bg-[#d91e00] hover:bg-[#f9a602] text-[#fdf6e2] hover:text-[#260701] rounded-full px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-center gap-2 sm:gap-3 font-extrabold text-xs sm:text-sm tracking-wide shrink-0"
            title="Abrir Mi Maleta"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-9-4h6"
              />
            </svg>
            <span className="hidden sm:inline">MI MALETA</span>
            <span className="bg-[#f9a602] text-[#260701] border-2 border-[#260701] rounded-full px-2 sm:px-2.5 py-0.5 text-xs font-extrabold tabular-nums shadow-[2px_2px_0px_#260701]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
