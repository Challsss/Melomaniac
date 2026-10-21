import type { ToastData } from '../types/catalog';

interface CartoonToastProps {
  toast: ToastData;
}

export function CartoonToast({ toast }: CartoonToastProps) {
  return (
    <div
      className={`fixed top-6 right-6 z-50 transform transition-transform duration-300 pointer-events-none ${
        toast.visible ? 'translate-x-0' : 'translate-x-[150%]'
      }`}
    >
      <div className="brutal-box bg-[#f9a602] text-[#260701] rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-[6px_6px_0px_#260701]">
        <span className="text-2xl">🎺</span>
        <div>
          <div className="font-caprasimo text-base leading-none">{toast.title}</div>
          <div className="text-xs font-extrabold mt-0.5">{toast.message}</div>
        </div>
      </div>
    </div>
  );
}
