import type { ConditionFilter, FormatFilter } from '../types/catalog';

interface FilterBarProps {
  currentFormat: FormatFilter;
  onFormatChange: (format: FormatFilter) => void;
  currentCondition: ConditionFilter;
  onConditionChange: (condition: ConditionFilter) => void;
  totalCatalogCount: number;
}

export function FilterBar({
  currentFormat,
  onFormatChange,
  currentCondition,
  onConditionChange,
  totalCatalogCount,
}: FilterBarProps) {
  const formatOptions: { value: FormatFilter; label: string }[] = [
    { value: 'all', label: `Todos (${totalCatalogCount})` },
    { value: 'LP', label: '● Apartado Vinilos' },
    { value: 'CASSETTE', label: '📼 Apartado Casetes' },
    { value: 'CD', label: '💿 Apartado CDs' },
  ];

  const conditionOptions: { value: ConditionFilter; label: string; title?: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'M', label: 'Mint (M)', title: 'Nuevo / Precintado de fábrica' },
    { value: 'NM', label: 'Near Mint (NM)', title: 'Casi nuevo, sin marcas audibles' },
    { value: 'VG+', label: 'Vintage (VG+)', title: 'Excelente época original con leve pátina' },
  ];

  return (
    <section className="brutal-box rounded-2xl sm:rounded-3xl p-3 sm:p-5 mb-6 sm:mb-8 bg-[#f5e6c4]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
        {/* Filtro por Apartado (visible desde md; en móvil ya se filtra con las 3 tarjetas de personajes superiores) */}
        <div className="hidden md:flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#4a1504] mr-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d91e00] border border-[#260701]" />
            APARTADO:
          </span>
          {formatOptions.map((option) => {
            const isActive = currentFormat === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onFormatChange(option.value)}
                className={`format-btn rubber-btn rounded-full px-4 py-1.5 text-xs sm:text-sm ${
                  isActive
                    ? 'bg-[#260701] text-[#f9a602] font-extrabold'
                    : 'bg-[#fdf6e2] hover:bg-[#f9a602]/40 text-[#260701] font-extrabold'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Filtro por Estado de Conservación (una sola línea deslizable en móvil para no saturar) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#4a1504] mr-1 shrink-0">
            ESTADO:
          </span>
          {conditionOptions.map((option) => {
            const isActive = currentCondition === option.value;
            return (
              <button
                key={option.value}
                type="button"
                title={option.title}
                onClick={() => onConditionChange(option.value)}
                className={`cond-btn rubber-btn rounded-full px-3 sm:px-3.5 py-1 text-xs shrink-0 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#f9a602] text-[#260701] font-extrabold'
                    : 'bg-[#fdf6e2] hover:bg-[#f9a602]/40 text-[#260701] font-extrabold'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
