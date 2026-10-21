export function StyleGuideSection() {
  return (
    <section className="hidden md:block brutal-box rounded-3xl p-6 sm:p-8 mb-12 bg-[#fdf6e2] relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <span className="inline-block bg-[#d91e00] text-[#fdf6e2] border-2 border-[#260701] rounded-full px-3 py-0.5 text-xs font-extrabold uppercase mb-2 shadow-[2px_2px_0px_#260701]">
            Identidad Visual MELOMANIAC
          </span>
          <h3 className="font-caprasimo text-2xl sm:text-3xl text-[#260701] leading-tight">
            3 Formatos, 3 Personajes, Máximo Contraste
          </h3>
          <p className="text-sm mt-2 text-[#4a1504] font-bold leading-relaxed">
            La paleta cálida años 70 combina tinta oscura <strong>#260701</strong> y papel crema{' '}
            <strong>#fdf6e2</strong> (contraste &gt; 17:1) para que el reproductor, las pistas y los
            precios se lean con total nitidez.
          </p>
        </div>

        <div className="bg-[#f5e6c4] border-2 border-[#260701] rounded-2xl p-4 shadow-[4px_4px_0px_#260701]">
          <div className="font-caprasimo text-xl text-[#9e1b00] mb-1">
            1. Escuadrón Rubber-Hose
          </div>
          <p className="text-xs font-bold text-[#260701] leading-relaxed">
            Cada apartado cuenta con su anfitrión años 30/70: <strong>Don Surco</strong> (Vinilos),{' '}
            <strong>Max Cromo</strong> (Casetes) y <strong>Lady Láser</strong> (CDs), ilustrados con
            ojos <em>Pie-Cut</em> y guantes blancos.
          </p>
        </div>

        <div className="bg-[#f5e6c4] border-2 border-[#260701] rounded-2xl p-4 shadow-[4px_4px_0px_#260701]">
          <div className="font-extrabold text-lg text-[#260701] mb-1">
            2. Legibilidad y Tabular-Nums
          </div>
          <p className="text-xs font-bold text-[#260701] leading-relaxed">
            Tipografía <strong>Caprasimo</strong> con contorno reforzado junto a{' '}
            <strong>Plus Jakarta Sans</strong> en pesos <strong>700/800</strong> para graduaciones{' '}
            <em>Goldmine (M, NM, VG+)</em> y duraciones de pista.
          </p>
        </div>
      </div>
    </section>
  );
}
