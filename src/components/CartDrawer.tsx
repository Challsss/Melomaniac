import type { CartItem } from '../types/catalog';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onChangeQty: (albumId: number, delta: number) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  cart,
  onClose,
  onChangeQty,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-[#260701]/75 backdrop-blur-xs z-50 flex items-center justify-end p-3 sm:p-5"
    >
      <div className="brutal-box w-full max-w-md h-full max-h-[92vh] rounded-3xl bg-[#fdf6e2] flex flex-col justify-between overflow-hidden">
        {/* Cabecera del Carrito */}
        <div className="p-5 bg-[#f9a602] border-b-4 border-[#260701] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#260701]">
              MELOMANIAC • PEDIDO FÍSICO PROTEGIDO
            </span>
            <h3 className="font-caprasimo text-2xl text-[#260701]">MI MALETA DE DISCOS</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rubber-btn bg-[#fdf6e2] hover:bg-[#d91e00] text-[#260701] hover:text-[#fdf6e2] w-10 h-10 rounded-full font-extrabold text-lg flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Lista de Items */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-2">🕸️</div>
              <p className="font-caprasimo text-xl text-[#260701]">Tu maleta está vacía</p>
              <p className="text-xs font-extrabold text-[#4a1504] mt-1">
                Añade algún vinilo, casete o CD de nuestros 3 apartados.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#f5e6c4] border-2 border-[#260701] rounded-2xl p-3 flex items-center justify-between gap-3 shadow-[3px_3px_0px_#260701]"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-extrabold uppercase bg-[#260701] text-[#f9a602] px-2 py-0.5 rounded-full">
                    {item.formatLabel}
                  </span>
                  <h4 className="font-extrabold text-sm text-[#260701] truncate mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-extrabold text-[#9e1b00] truncate">{item.artist}</p>
                  <div className="text-xs font-extrabold text-[#260701] tabular-nums mt-1 whitespace-nowrap">
                    {`${(item.price * item.qty).toFixed(2).replace('.', ',')}\u00A0€`}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 tabular-nums">
                  <button
                    type="button"
                    onClick={() => onChangeQty(item.id, -1)}
                    className="w-7 h-7 rounded-full bg-[#fdf6e2] border-2 border-[#260701] font-extrabold text-xs text-[#260701] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-extrabold text-sm text-[#260701]">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => onChangeQty(item.id, 1)}
                    className="w-7 h-7 rounded-full bg-[#f9a602] border-2 border-[#260701] font-extrabold text-xs text-[#260701] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pie del Carrito con Totales Tabular-Nums */}
        <div className="p-5 bg-[#f5e6c4] border-t-4 border-[#260701] space-y-3">
          <div className="flex justify-between text-xs font-extrabold text-[#4a1504] tabular-nums">
            <span>Empaquetado blindado anti-golpes + Funda protectora</span>
            <span>GRATIS</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-base font-extrabold text-[#260701]">TOTAL DEL PEDIDO:</span>
            <span className="price-display text-3xl tabular-nums whitespace-nowrap">
              {`${totalPrice.toFixed(2).replace('.', ',')}\u00A0€`}
            </span>
          </div>
          <button
            type="button"
            onClick={onCheckout}
            className="rubber-btn w-full bg-[#d91e00] hover:bg-[#f9a602] text-[#fdf6e2] hover:text-[#260701] rounded-full py-3.5 font-extrabold text-sm tracking-wider uppercase"
          >
            PASAR POR CAJA • ENVÍO INMEDIATO
          </button>
        </div>
      </div>
    </div>
  );
}
