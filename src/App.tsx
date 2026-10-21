import { useCallback, useMemo, useRef, useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { CartoonToast } from './components/CartoonToast';
import { FilterBar } from './components/FilterBar';
import {
  FormatCharacterAvatar,
  FormatSectionsShowcase,
} from './components/FormatCharacters';
import { FormatProductPage } from './components/FormatProductPage';
import { Header } from './components/Header';
import { PlayerBar } from './components/PlayerBar';
import { ProductCard } from './components/ProductCard';
import { RetroRibbon } from './components/RetroRibbon';
import { StyleGuideSection } from './components/StyleGuideSection';
import { TopBanner } from './components/TopBanner';
import { catalog, FORMAT_DEPARTMENTS, initialCart } from './data/catalog';
import type {
  Album,
  CartItem,
  ConditionFilter,
  FormatFilter,
  FormatType,
  ToastData,
} from './types/catalog';

export function App() {
  const [currentFormat, setCurrentFormat] = useState<FormatFilter>('all');
  const [currentCondition, setCurrentCondition] = useState<ConditionFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductPageFormat, setActiveProductPageFormat] =
    useState<FormatType | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<Album>(catalog[0]);
  const [activeTrackIndex, setActiveTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isTracklistOpen, setIsTracklistOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastData>({
    title: '¡AL SACO!',
    message: 'Disco añadido a tu maleta MELOMANIAC',
    visible: false,
  });

  const toastTimeoutRef = useRef<number | null>(null);

  const showToast = useCallback((title: string, message: string) => {
    if (toastTimeoutRef.current !== null) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    setToast({ title, message, visible: true });
    toastTimeoutRef.current = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2600);
  }, []);

  const countsByFormat = useMemo<Record<FormatType, number>>(() => {
    return {
      LP: catalog.filter((i) => i.format === 'LP').length,
      CASSETTE: catalog.filter((i) => i.format === 'CASSETTE').length,
      CD: catalog.filter((i) => i.format === 'CD').length,
    };
  }, []);

  const filteredCatalog = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return catalog.filter((item) => {
      const matchFormat = currentFormat === 'all' || item.format === currentFormat;
      const matchCondition =
        currentCondition === 'all' || item.condition === currentCondition;
      const matchSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.artist.toLowerCase().includes(query) ||
        item.label.toLowerCase().includes(query);
      return matchFormat && matchCondition && matchSearch;
    });
  }, [currentFormat, currentCondition, searchQuery]);

  const visibleDepartments = useMemo(() => {
    return FORMAT_DEPARTMENTS.map((dept) => ({
      ...dept,
      items: filteredCatalog.filter((item) => item.format === dept.format),
    })).filter((dept) => dept.items.length > 0);
  }, [filteredCatalog]);

  const totalCartItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.qty, 0),
    [cart]
  );

  const resetFilters = () => {
    setCurrentFormat('all');
    setCurrentCondition('all');
    setSearchQuery('');
  };

  const openFormatProductPage = (format: FormatType) => {
    setActiveProductPageFormat(format);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const previewAlbum = (albumId: number, trackIndex?: number) => {
    const found = catalog.find((i) => i.id === albumId);
    if (!found) return;

    let nextPlaying: boolean;
    if (typeof trackIndex === 'number') {
      if (activeAlbum.id === found.id && activeTrackIndex === trackIndex) {
        nextPlaying = !isPlaying;
        setIsPlaying(nextPlaying);
      } else {
        setActiveAlbum(found);
        setActiveTrackIndex(trackIndex);
        nextPlaying = true;
        setIsPlaying(true);
      }
    } else if (activeAlbum.id === found.id) {
      nextPlaying = !isPlaying;
      setIsPlaying(nextPlaying);
    } else {
      setActiveAlbum(found);
      setActiveTrackIndex(0);
      nextPlaying = true;
      setIsPlaying(true);
    }

    if (nextPlaying) {
      setIsTracklistOpen(true);
      const actionMsg =
        found.format === 'LP'
          ? '¡AGUJA EN EL SURCO!'
          : found.format === 'CASSETTE'
            ? '¡CABEZAL EN MARCHA!'
            : '¡LÁSER EN PISTA!';
      showToast(actionMsg, `Reproduciendo «${found.title}»`);
    }
  };

  const handleSelectTrack = (index: number) => {
    setActiveTrackIndex(index);
    setIsPlaying(true);
  };

  const handleRandomPick = () => {
    const pool = filteredCatalog.length > 0 ? filteredCatalog : catalog;
    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    previewAlbum(randomItem.id);
  };

  const addToCart = (albumId: number, qtyToAdd: number = 1) => {
    const item = catalog.find((i) => i.id === albumId);
    if (!item) return;

    setCart((prev) => {
      const existing = prev.find((c) => c.id === albumId);
      if (existing) {
        return prev.map((c) =>
          c.id === albumId ? { ...c, qty: c.qty + qtyToAdd } : c
        );
      }
      return [...prev, { ...item, qty: qtyToAdd }];
    });

    showToast('¡A LA MALETA!', `${item.title} (${item.formatLabel}) añadido.`);
  };

  const changeCartQty = (albumId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === albumId ? { ...c, qty: c.qty + delta } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    showToast(
      '¡PEDIDO EN MARCHA!',
      'El equipo de MELOMANIAC está empaquetando tus joyas.'
    );
  };

  return (
    <div className="min-h-screen pb-12 md:pb-40 relative selection:bg-[#d91e00] selection:text-[#fdf6e2]">
      <RetroRibbon />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-3.5 sm:pt-6">
        <TopBanner />

        <Header
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            setSearchQuery(val);
            if (activeProductPageFormat !== null) {
              setActiveProductPageFormat(null);
            }
          }}
          cartCount={totalCartItems}
          onOpenCart={() => setIsCartOpen(true)}
          onRandomPick={handleRandomPick}
          onGoHome={() => setActiveProductPageFormat(null)}
        />

        {activeProductPageFormat !== null ? (
          /* PÁGINA DE PRODUCTO UNIFICADA POR FORMATO (VINILO / CASETE / CD) */
          <FormatProductPage
            key={activeProductPageFormat}
            format={activeProductPageFormat}
            activeAlbumId={activeAlbum.id}
            activeTrackIndex={activeTrackIndex}
            isPlaying={isPlaying}
            onBackToCatalog={() => setActiveProductPageFormat(null)}
            onSwitchFormatPage={(fmt) => openFormatProductPage(fmt)}
            onPreviewAlbum={previewAlbum}
            onAddToCartWithQty={addToCart}
          />
        ) : (
          <>
            {/* TARJETAS DE LOS 3 APARTADOS CON SUS 3 PERSONAJES (VINILO, CASETTE, CD) */}
            <FormatSectionsShowcase
              currentFormat={currentFormat}
              onSelectFormat={setCurrentFormat}
              countsByFormat={countsByFormat}
            />

            <FilterBar
              currentFormat={currentFormat}
              onFormatChange={setCurrentFormat}
              currentCondition={currentCondition}
              onConditionChange={setCurrentCondition}
              totalCatalogCount={catalog.length}
            />

            {/* ENCABEZADO GENERAL DE LA BATEA */}
            <div className="flex flex-row items-center sm:items-end justify-between mb-4 sm:mb-6 gap-3 px-1">
              <div>
                <h2 className="cuphead-subtitle text-xl sm:text-3xl tracking-wide">
                  CATÁLOGO MELOMANIAC
                </h2>
                <p className="hidden md:inline-block text-xs sm:text-sm font-extrabold text-[#260701] bg-[#f9a602] px-3.5 py-1 rounded-full border-2 border-[#260701] mt-1.5 shadow-[2px_2px_0px_#260701]">
                  Haz clic en cualquier disco para abrir la ficha maestra de su formato (Vinilo, Casete o CD)
                </p>
              </div>
              <div className="text-xs sm:text-sm font-extrabold bg-[#fdf6e2] text-[#260701] border-2 border-[#260701] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-[2px_2px_0px_#260701] sm:shadow-[3px_3px_0px_#260701] tabular-nums shrink-0">
                {filteredCatalog.length}{' '}
                {filteredCatalog.length === 1 ? 'edición' : 'ediciones'}
              </div>
            </div>

            {/* SECCIONES POR APARTADO (VINILOS, CASETES, CDS) CON SU PERSONAJE */}
            <main className="space-y-9 sm:space-y-12 mb-10 sm:mb-14">
              {visibleDepartments.length === 0 ? (
                <div className="brutal-box rounded-3xl p-10 text-center bg-[#fdf6e2]">
                  <div className="text-5xl mb-3">🕵️‍♂️</div>
                  <h3 className="font-caprasimo text-2xl text-[#260701]">
                    ¡Batea vacía, melómano!
                  </h3>
                  <p className="text-sm font-extrabold text-[#4a1504] mt-1">
                    No hay ediciones con esa combinación de filtros. Prueba a restaurar la búsqueda.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="rubber-btn mt-4 bg-[#f9a602] hover:bg-[#d91e00] text-[#260701] hover:text-[#fdf6e2] rounded-full px-5 py-2 text-xs font-extrabold uppercase"
                  >
                    Restaurar todos los apartados
                  </button>
                </div>
              ) : (
                visibleDepartments.map((dept) => (
                  <section
                    key={dept.format}
                    aria-label={dept.sectionTitle}
                    className="space-y-4 sm:space-y-5"
                  >
                    {/* Cabecera del Apartado con su Personaje Anfitrión (aireada en móvil) */}
                    <div className="brutal-box rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 bg-[#fdf6e2] flex flex-row items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="rubber-idle w-14 h-14 sm:w-20 sm:h-20 shrink-0">
                          <FormatCharacterAvatar format={dept.format} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                            <span className="bg-[#260701] text-[#f9a602] text-[10px] sm:text-[11px] font-extrabold uppercase px-2 sm:px-2.5 py-0.5 rounded-full">
                              {dept.characterName}
                            </span>
                            <span className="hidden sm:inline-block bg-[#f9a602] text-[#260701] border border-[#260701] text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                              {dept.badgeText}
                            </span>
                          </div>
                          <h3 className="font-caprasimo text-lg sm:text-3xl text-[#260701] leading-tight truncate">
                            {dept.sectionTitle}
                          </h3>
                          <p className="hidden sm:block text-xs sm:text-sm font-extrabold text-[#4a1504] mt-1">
                            {dept.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => openFormatProductPage(dept.format)}
                          className="rubber-btn bg-[#f9a602] hover:bg-[#d91e00] text-[#260701] hover:text-[#fdf6e2] rounded-full px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold uppercase whitespace-nowrap"
                        >
                          Ficha {dept.format === 'LP' ? 'Vinilo' : dept.format === 'CASSETTE' ? 'Casete' : 'CD'} →
                        </button>
                      </div>
                    </div>

                    {/* Retícula de Productos del Apartado (2 por fila en móvil, 4 en escritorio) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7">
                      {dept.items.map((item) => (
                        <ProductCard
                          key={item.id}
                          item={item}
                          isCurrentPlaying={activeAlbum.id === item.id && isPlaying}
                          onPreview={previewAlbum}
                          onAddToCart={(id) => addToCart(id, 1)}
                          onOpenFormatPage={openFormatProductPage}
                        />
                      ))}
                    </div>
                  </section>
                ))
              )}
            </main>
          </>
        )}

        <StyleGuideSection />
      </div>

      <PlayerBar
        activeAlbum={activeAlbum}
        activeTrackIndex={activeTrackIndex}
        isPlaying={isPlaying}
        isDrawerOpen={isTracklistOpen}
        onTogglePlay={() => setIsPlaying((prev) => !prev)}
        onToggleDrawer={() => setIsTracklistOpen((prev) => !prev)}
        onSelectTrack={handleSelectTrack}
      />

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onChangeQty={changeCartQty}
        onCheckout={handleCheckout}
      />

      <CartoonToast toast={toast} />
    </div>
  );
}

export default App;
