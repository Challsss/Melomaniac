export function RetroRibbon() {
  return (
    <>
      {/* Resplandor superior cálido y limpio para dar profundidad sin saturar en móvil */}
      <div
        className="fixed inset-x-0 top-0 h-80 pointer-events-none z-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 50% -10%, rgba(249, 166, 2, 0.28) 0%, transparent 70%)',
        }}
      />

      {/* CINTA RETRO 70s IZQUIERDA (Solo en pantallas grandes para no recargar móvil/tablet) */}
      <div className="hidden xl:block fixed top-0 left-0 w-40 h-full pointer-events-none z-0 opacity-85">
        <svg
          viewBox="0 0 210 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
        >
          {/* Sombra suave de la cinta */}
          <path
            d="M0 58 H95 C128 58 128 10 95 10 C62 10 62 58 95 58 V540 C95 585 145 585 145 540 C145 495 95 495 95 540 V615 H185"
            stroke="#260701"
            strokeWidth="52"
            strokeLinecap="round"
            opacity="0.18"
            transform="translate(8,8)"
          />
          {/* Franja Exterior Amarilla */}
          <path
            d="M-10 42 H95 C140 42 140 -12 95 -12 C50 -12 50 42 95 42 V560 C95 605 150 605 150 560 C150 515 95 515 95 560 V610 H175"
            stroke="#f9a602"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Franja Naranja */}
          <path
            d="M-10 42 H95 C140 42 140 -12 95 -12 C50 -12 50 42 95 42 V560 C95 605 150 605 150 560 C150 515 95 515 95 560 V610 H175"
            stroke="#f96d00"
            strokeWidth="36"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Franja Roja */}
          <path
            d="M-10 42 H95 C140 42 140 -12 95 -12 C50 -12 50 42 95 42 V560 C95 605 150 605 150 560 C150 515 95 515 95 560 V610 H175"
            stroke="#d91e00"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Franja Interior Marrón Tinta */}
          <path
            d="M-10 42 H95 C140 42 140 -12 95 -12 C50 -12 50 42 95 42 V560 C95 605 150 605 150 560 C150 515 95 515 95 560 V610 H175"
            stroke="#260701"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ARCO CONCÉNTRICO DERECHO INFERIOR (Solo en pantallas grandes) */}
      <div className="hidden xl:block fixed -bottom-16 -right-16 w-72 h-72 pointer-events-none z-0 opacity-75">
        <svg viewBox="0 0 240 240" className="w-full h-full">
          <circle cx="180" cy="180" r="140" stroke="#260701" strokeWidth="16" fill="none" />
          <circle cx="180" cy="180" r="124" stroke="#f9a602" strokeWidth="16" fill="none" />
          <circle cx="180" cy="180" r="108" stroke="#f96d00" strokeWidth="16" fill="none" />
          <circle cx="180" cy="180" r="92" stroke="#d91e00" strokeWidth="16" fill="none" />
        </svg>
      </div>
    </>
  );
}
