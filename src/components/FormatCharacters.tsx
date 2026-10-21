import { FORMAT_DEPARTMENTS } from '../data/catalog';
import type { FormatFilter, FormatType } from '../types/catalog';

interface CharacterSVGProps {
  className?: string;
}

/**
 * PERSONAJE 1: DON SURCO — El Vinilo 12" (Apartado de Vinilos)
 * Estética Rubber-Hose años 30 + paleta cálida años 70, ojos Pie-Cut, guantes blancos y botas.
 */
export function VinylCharacterSVG({ className = 'w-full h-full' }: CharacterSVGProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={`${className} drop-shadow-[4px_4px_0px_#260701]`}
      aria-label="Don Surco - Personaje Vinilo"
    >
      {/* Piernas elásticas Rubber-Hose */}
      <path
        d="M52 106 Q48 120 40 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 106 Q92 120 100 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Botas clásicas años 30 */}
      <ellipse
        cx="35"
        cy="127"
        rx="13"
        ry="7"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="3.5"
      />
      <path d="M28 125 Q35 122 42 125" stroke="#d91e00" strokeWidth="2.5" fill="none" />
      <ellipse
        cx="105"
        cy="127"
        rx="13"
        ry="7"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="3.5"
      />
      <path d="M98 125 Q105 122 112 125" stroke="#d91e00" strokeWidth="2.5" fill="none" />

      {/* Brazo derecho en jarra */}
      <path
        d="M108 66 Q128 72 118 88"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="115" cy="90" r="8.5" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />

      {/* Cuerpo principal de Vinilo 12" */}
      <circle cx="70" cy="62" r="48" fill="#260701" stroke="#260701" strokeWidth="4" />
      {/* Brillos de acetato en diagonal */}
      <path
        d="M36 28 A48 48 0 0 1 60 16 L70 62 Z"
        fill="#4a190c"
        opacity="0.55"
      />
      <path
        d="M104 96 A48 48 0 0 1 80 108 L70 62 Z"
        fill="#4a190c"
        opacity="0.55"
      />
      {/* Surcos concéntricos */}
      <circle
        cx="70"
        cy="62"
        r="41"
        fill="none"
        stroke="#f9a602"
        strokeWidth="1.5"
        strokeDasharray="16 10"
        opacity="0.45"
      />
      <circle
        cx="70"
        cy="62"
        r="35"
        fill="none"
        stroke="#f96d00"
        strokeWidth="1.5"
        strokeDasharray="10 12"
        opacity="0.55"
      />

      {/* Galleta central años 70 */}
      <circle cx="70" cy="62" r="27" fill="#f9a602" stroke="#260701" strokeWidth="3.5" />
      <circle cx="70" cy="62" r="21" fill="#f96d00" stroke="#260701" strokeWidth="2.2" />

      {/* Sombrero / Mini aguja fonográfica en la cabeza */}
      <path
        d="M56 14 L84 14 L79 5 L61 5 Z"
        fill="#d91e00"
        stroke="#260701"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="52"
        y="12"
        width="36"
        height="5"
        rx="2.5"
        fill="#f9a602"
        stroke="#260701"
        strokeWidth="2.5"
      />

      {/* Ojos "Pie-Cut" estilo Cuphead / 1930 */}
      <ellipse
        cx="60"
        cy="56"
        rx="7"
        ry="10.5"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="2.8"
      />
      <ellipse
        cx="80"
        cy="56"
        rx="7"
        ry="10.5"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="2.8"
      />
      {/* Pupilas con muesca triangular (Pie-cut) */}
      <path d="M61 56 L66 52 A4.8 6.5 0 1 1 61 49 Z" fill="#260701" />
      <path d="M81 56 L86 52 A4.8 6.5 0 1 1 81 49 Z" fill="#260701" />

      {/* Sonrisa Vodevil expresiva */}
      <path
        d="M54 69 Q70 83 86 69"
        stroke="#260701"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="#260701"
      />
      <path d="M61 73 Q70 81 79 73" fill="#d91e00" />

      {/* Mano izquierda enguantada saludando */}
      <path
        d="M23 64 Q8 52 15 35"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="16" cy="30" r="9.5" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />
      <path d="M13 27 L16 33 M18 26 L20 32" stroke="#260701" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * PERSONAJE 2: MAX CROMO — El Casette CrO₂ (Apartado de Casetes)
 * Carcasa compacta de los 70s cuyas dos bobinas son sus ojos Pie-Cut, cinta magnética como sonrisa y brazos con guantes.
 */
export function CassetteCharacterSVG({ className = 'w-full h-full' }: CharacterSVGProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={`${className} drop-shadow-[4px_4px_0px_#260701]`}
      aria-label="Max Cromo - Personaje Casette"
    >
      {/* Piernas elásticas Rubber-Hose */}
      <path
        d="M50 102 Q45 118 37 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M90 102 Q95 118 103 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Zapatos estilo años 30 */}
      <ellipse
        cx="33"
        cy="127"
        rx="13"
        ry="7"
        fill="#f9a602"
        stroke="#260701"
        strokeWidth="3.5"
      />
      <ellipse
        cx="107"
        cy="127"
        rx="13"
        ry="7"
        fill="#f9a602"
        stroke="#260701"
        strokeWidth="3.5"
      />

      {/* Brazos Rubber-Hose con guantes blancos */}
      <path
        d="M20 62 Q4 48 13 30"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14" cy="25" r="9" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />
      <path
        d="M120 62 Q135 50 127 32"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="126" cy="27" r="9" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />

      {/* Cuerpo rectangular de Casette */}
      <rect
        x="18"
        y="22"
        width="104"
        height="78"
        rx="12"
        fill="#d91e00"
        stroke="#260701"
        strokeWidth="4"
      />
      {/* Tornillos en las 4 esquinas */}
      <circle cx="26" cy="30" r="2.5" fill="#fdf6e2" stroke="#260701" strokeWidth="1.5" />
      <circle cx="114" cy="30" r="2.5" fill="#fdf6e2" stroke="#260701" strokeWidth="1.5" />
      <circle cx="26" cy="92" r="2.5" fill="#fdf6e2" stroke="#260701" strokeWidth="1.5" />
      <circle cx="114" cy="92" r="2.5" fill="#fdf6e2" stroke="#260701" strokeWidth="1.5" />

      {/* Etiqueta interior crema con franjas años 70 */}
      <rect
        x="27"
        y="30"
        width="86"
        height="46"
        rx="7"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="3"
      />
      <rect x="29" y="34" width="82" height="5" fill="#f9a602" />
      <rect x="29" y="39" width="82" height="4" fill="#f96d00" />

      {/* Cejas expresivas sobre la etiqueta */}
      <path
        d="M42 42 Q52 37 60 43"
        stroke="#260701"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 43 Q88 37 98 42"
        stroke="#260701"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ventana central oscura de las bobinas (Gafas/Antifaz) */}
      <rect
        x="35"
        y="44"
        width="70"
        height="28"
        rx="14"
        fill="#260701"
        stroke="#260701"
        strokeWidth="2.5"
      />

      {/* Bobina Izquierda = Ojo Pie-Cut Izquierdo */}
      <circle
        cx="52"
        cy="58"
        r="11.5"
        fill="#fdf6e2"
        stroke="#f9a602"
        strokeWidth="2.8"
      />
      <path d="M53 58 L59 54 A6 6 0 1 1 53 51 Z" fill="#260701" />

      {/* Bobina Derecha = Ojo Pie-Cut Derecho */}
      <circle
        cx="88"
        cy="58"
        r="11.5"
        fill="#fdf6e2"
        stroke="#f9a602"
        strokeWidth="2.8"
      />
      <path d="M89 58 L95 54 A6 6 0 1 1 89 51 Z" fill="#260701" />

      {/* Visor central de cinta */}
      <rect x="65" y="51" width="10" height="14" rx="2" fill="#f96d00" stroke="#fdf6e2" strokeWidth="1.5" />

      {/* Trapecio inferior del cabezal con sonrisa magnética */}
      <path
        d="M36 100 L43 80 L97 80 L104 100 Z"
        fill="#f96d00"
        stroke="#260701"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Sonrisa pícara en el puente del cabezal */}
      <path
        d="M52 86 Q70 98 88 86"
        stroke="#260701"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="#fdf6e2"
      />
      {/* Cinta magnética asomando como lengua/bucle */}
      <path
        d="M64 92 Q70 103 76 92"
        fill="#260701"
        stroke="#260701"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * PERSONAJE 3: LADY LÁSER (DJ PRISMA) — El CD Óptico (Apartado de CDs)
 * Disco compacto brillante con destellos prismáticos cálidos, anillo central de policarbonato,
 * ojos Pie-Cut con brillo estelar y zapatillas cartoon.
 */
export function CdCharacterSVG({ className = 'w-full h-full' }: CharacterSVGProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={`${className} drop-shadow-[4px_4px_0px_#260701]`}
      aria-label="Lady Láser - Personaje CD"
    >
      {/* Piernas elásticas Rubber-Hose */}
      <path
        d="M52 106 Q47 120 39 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 106 Q93 120 101 124"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Zapatillas / Botas retro-futuristas */}
      <ellipse
        cx="34"
        cy="127"
        rx="13"
        ry="7"
        fill="#d91e00"
        stroke="#260701"
        strokeWidth="3.5"
      />
      <circle cx="34" cy="127" r="3" fill="#fdf6e2" />
      <ellipse
        cx="106"
        cy="127"
        rx="13"
        ry="7"
        fill="#d91e00"
        stroke="#260701"
        strokeWidth="3.5"
      />
      <circle cx="106" cy="127" r="3" fill="#fdf6e2" />

      {/* Brazo izquierdo saludando con destello láser */}
      <path
        d="M22 60 Q7 44 18 28"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="19" cy="24" r="9" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />

      {/* Brazo derecho marcando el ritmo */}
      <path
        d="M118 62 Q133 48 124 30"
        stroke="#260701"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="123" cy="25" r="9" fill="#fdf6e2" stroke="#260701" strokeWidth="3.2" />

      {/* Cuerpo espejo de CD (Policarbonato crema/plata brillante) */}
      <circle cx="70" cy="62" r="47" fill="#fdf6e2" stroke="#260701" strokeWidth="4" />

      {/* Sectores de reflejo prismático irisado estilo Cartoon */}
      <path d="M70 62 L34 29 A47 47 0 0 1 56 17 Z" fill="#f9a602" />
      <path d="M70 62 L56 17 A47 47 0 0 1 72 15 Z" fill="#f96d00" />
      <path d="M70 62 L72 15 A47 47 0 0 1 85 18 Z" fill="#d91e00" />
      <path d="M70 62 L106 95 A47 47 0 0 1 84 107 Z" fill="#f9a602" />
      <path d="M70 62 L84 107 A47 47 0 0 1 68 109 Z" fill="#f96d00" />
      <path d="M70 62 L68 109 A47 47 0 0 1 55 106 Z" fill="#d91e00" />

      {/* Pistas ópticas concéntricas punteadas */}
      <circle
        cx="70"
        cy="62"
        r="39"
        fill="none"
        stroke="#260701"
        strokeWidth="1.5"
        strokeDasharray="8 6"
        opacity="0.4"
      />
      {/* Corona exterior re-trazada para limpiar bordes de los sectores */}
      <circle cx="70" cy="62" r="47" fill="none" stroke="#260701" strokeWidth="4" />

      {/* Anillo central de sujeción (Hub de CD) */}
      <circle
        cx="70"
        cy="62"
        r="24"
        fill="#f5e6c4"
        stroke="#260701"
        strokeWidth="3.2"
      />
      <circle
        cx="70"
        cy="62"
        r="10"
        fill="#f9a602"
        stroke="#260701"
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />

      {/* Ojos "Pie-Cut" expresivos con pestañas cartoon */}
      <ellipse
        cx="56"
        cy="54"
        rx="7.5"
        ry="11"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="2.8"
      />
      <ellipse
        cx="84"
        cy="54"
        rx="7.5"
        ry="11"
        fill="#fdf6e2"
        stroke="#260701"
        strokeWidth="2.8"
      />
      <path d="M57 54 L63 50 A5 6.8 0 1 1 57 47 Z" fill="#260701" />
      <path d="M85 54 L91 50 A5 6.8 0 1 1 85 47 Z" fill="#260701" />

      {/* Mejillas sonrojadas */}
      <ellipse cx="44" cy="65" rx="5" ry="3" fill="#f96d00" opacity="0.85" />
      <ellipse cx="96" cy="65" rx="5" ry="3" fill="#f96d00" opacity="0.85" />

      {/* Sonrisa radiante */}
      <path
        d="M54 71 Q70 85 86 71"
        stroke="#260701"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="#260701"
      />
      <path d="M61 75 Q70 83 79 75" fill="#d91e00" />

      {/* Destello estrella láser en el borde del CD */}
      <polygon
        points="106,24 109,32 117,35 109,38 106,46 103,38 95,35 103,32"
        fill="#f9a602"
        stroke="#260701"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FormatCharacterAvatar({
  format,
  className = 'w-full h-full',
}: {
  format: FormatType;
  className?: string;
}) {
  if (format === 'CASSETTE') {
    return <CassetteCharacterSVG className={className} />;
  }
  if (format === 'CD') {
    return <CdCharacterSVG className={className} />;
  }
  return <VinylCharacterSVG className={className} />;
}

interface FormatSectionsShowcaseProps {
  currentFormat: FormatFilter;
  onSelectFormat: (format: FormatFilter) => void;
  countsByFormat: Record<FormatType, number>;
}

export function FormatSectionsShowcase({
  currentFormat,
  onSelectFormat,
  countsByFormat,
}: FormatSectionsShowcaseProps) {
  return (
    <section aria-label="Apartados por formato y personajes" className="mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 sm:mb-4 px-1">
        <div className="flex items-center gap-2.5">
          <span className="hidden sm:inline-block bg-[#260701] text-[#f9a602] font-extrabold text-xs uppercase px-3 py-1 rounded-full border-2 border-[#260701] shadow-[2px_2px_0px_#f96d00]">
            3 ESCUADRONES FÍSICOS
          </span>
          <h2 className="cuphead-subtitle text-lg sm:text-2xl tracking-wide">
            ELIGE TU APARTADO Y SU ANFITRIÓN
          </h2>
        </div>
        {currentFormat !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectFormat('all')}
            className="rubber-btn bg-[#fdf6e2] hover:bg-[#f9a602] text-[#260701] rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs font-extrabold uppercase tracking-wide self-start sm:self-auto"
          >
            ✕ Ver los 3 apartados
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
        {FORMAT_DEPARTMENTS.map((dept) => {
          const isSelected = currentFormat === dept.format;
          const count = countsByFormat[dept.format] ?? 0;

          return (
            <div
              key={dept.format}
              onClick={() =>
                onSelectFormat(isSelected ? 'all' : dept.format)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectFormat(isSelected ? 'all' : dept.format);
                }
              }}
              className={`brutal-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 cursor-pointer relative overflow-hidden flex flex-col justify-between transition-all ${
                isSelected
                  ? 'bg-[#f5e6c4] ring-4 ring-[#d91e00] -translate-y-0.5 sm:-translate-y-1 shadow-[8px_8px_0px_#260701]'
                  : 'bg-[#fdf6e2] hover:bg-[#f5e6c4]'
              }`}
            >
              {/* Cinta superior del apartado (solo en tablet/escritorio para airear móvil) */}
              <div className="hidden sm:flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border-2 border-[#260701] bg-[#260701] text-[#f9a602]">
                  {dept.badgeText}
                </span>
                <span
                  className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border-2 border-[#260701] tabular-nums ${
                    isSelected
                      ? 'bg-[#d91e00] text-[#fdf6e2]'
                      : 'bg-[#f9a602] text-[#260701]'
                  }`}
                >
                  {count} {count === 1 ? 'referencia' : 'referencias'}
                </span>
              </div>

              {/* Cuerpo con Personaje + Presentación del Apartado (compacto y limpio en móvil) */}
              <div className="flex items-center gap-3.5 sm:gap-4 my-0.5 sm:my-1">
                <div className="rubber-idle w-16 h-16 sm:w-24 sm:h-24 shrink-0">
                  <FormatCharacterAvatar format={dept.format} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="inline-block bg-[#f9a602] text-[#260701] border-2 border-[#260701] rounded-lg px-2 py-0.5 text-[10px] font-extrabold uppercase mb-1 shadow-[2px_2px_0px_#260701]">
                    {dept.characterName}
                    <span className="hidden sm:inline"> • {dept.characterRole}</span>
                  </div>
                  <h3 className="font-caprasimo text-lg sm:text-2xl text-[#260701] leading-tight">
                    {dept.sectionTitle}
                  </h3>
                  <p className="text-xs font-extrabold italic text-[#9e1b00] mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-none">
                    {dept.tagline}
                  </p>
                </div>

                {/* Indicador rápido en móvil */}
                <div className="sm:hidden shrink-0">
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[11px] font-extrabold border-2 border-[#260701] shadow-[2px_2px_0px_#260701] ${
                      isSelected
                        ? 'bg-[#d91e00] text-[#fdf6e2]'
                        : 'bg-[#f9a602] text-[#260701]'
                    }`}
                  >
                    {isSelected ? 'Activo' : `${count} →`}
                  </span>
                </div>
              </div>

              {/* Descripción extendida y pie de tarjeta solo desde sm/md para liberar espacio en móvil */}
              <p className="hidden md:block text-xs font-bold text-[#260701] leading-relaxed mt-2 mb-4 bg-[#f5e6c4]/90 p-2.5 rounded-xl border-2 border-[#260701]">
                {dept.description}
              </p>

              <div className="hidden sm:flex items-center justify-between pt-2 mt-2 border-t-2 border-dashed border-[#260701]/30">
                <span className="text-[11px] font-extrabold uppercase text-[#4a1504]">
                  {isSelected ? '● Apartado activo' : 'Haz clic para filtrar'}
                </span>
                <span
                  className={`rubber-btn rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide ${
                    isSelected
                      ? 'bg-[#d91e00] text-[#fdf6e2]'
                      : 'bg-[#f9a602] text-[#260701]'
                  }`}
                >
                  {isSelected ? 'Ver Todos' : `Ir a ${dept.format === 'LP' ? 'Vinilos' : dept.format === 'CASSETTE' ? 'Casetes' : 'CDs'} →`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
