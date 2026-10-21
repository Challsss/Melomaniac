export function TopBanner() {
  return (
    <div
      className="brutal-box bg-[#260701] text-[#fdf6e2] rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 mb-4 sm:mb-6 flex items-center justify-between gap-2 text-[11px] sm:text-sm font-extrabold tracking-wide border-3 border-[#f9a602]"
      style={{ backgroundColor: '#260701', color: '#fdf6e2' }}
    >
      {/* Versión móvil concisa de 1 línea */}
      <div className="flex md:hidden items-center justify-between w-full gap-2">
        <span className="text-[#f9a602] uppercase truncate">
          ● MELOMANIAC CLUB • EDICIONES FÍSICAS
        </span>
        <span className="text-[#fdf6e2] tabular-nums shrink-0">
          ENVÍO GRATIS &gt; 60&nbsp;€
        </span>
      </div>

      {/* Versión escritorio completa */}
      <div className="hidden md:flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-[#f9a602] animate-ping shrink-0" />
        <span className="uppercase tracking-wider text-[#f9a602] font-extrabold">
          MELOMANIAC CLUB:
        </span>
        <span className="text-[#fdf6e2]">
          Vinilos con funda japonesa, Casetes de Cromo revisados y CDs con graduación Goldmine.
        </span>
      </div>
      <div className="hidden md:flex items-center gap-4 tabular-nums text-[#f9a602] font-extrabold shrink-0">
        <span>ENVÍO GRATIS &gt; 60,00&nbsp;€</span>
        <span>•</span>
        <span>SONIDO FÍSICO GARANTIZADO</span>
      </div>
    </div>
  );
}
