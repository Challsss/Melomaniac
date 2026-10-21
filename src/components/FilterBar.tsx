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
  const formatOptions: { value: FormatFilter; label: string; shortLabel: string }[] = [
    { value: 'all', label: `Todos (${totalCatalogCount})`, shortLabel: `Todos (${totalCatalogCount})` },
    { value: 'LP', label: '● Apartado Vinilos', shortLabel: '● Vinilos' },
    { value: 'CASSETTE', label: '📼 Apartado Casetes', shortLabel: '📼 Casetes' },
    { value: 'CD', label: '💿 Apartado CDs', shortLabel: '💿 CDs' },
  ];

  const conditionOptions: {
    value: ConditionFilter;
    label: string;
    shortLabel: string;
    title?: string;
  }[] = [
    { value: 'all', label: 'Todos', shortLabel: 'Todos' },
    { value: 'M', label: 'Mint (M)', shortLabel: 'Mint (M)', title: 'Nuevo / Precintado de fábrica' },
    {
      value: 'NM',
      label: 'Near Mint (NM)',
      shortLabel: 'Near Mint (NM)',
      title: 'Casi nuevo, sin marcas audibles',
    },
    {
      value: 'VG+',
      label: 'Vintage (VG+)',
      shortLabel: 'Vintage (VG+)',
      title: 'Excelente época original con leve pátina',
    },
  ];

  return (
    <section className="brutal-box rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 mb-6 sm:mb-8 bg-[#f5e6c4]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Filtro por Apartado (En móvil: cuadrícula 2x2 limpia sin recortes; en escritorio: fila flexible) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#4a1504] mr-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d91e00] border border-[#260701] shrink-0" />
            APARTADO:
          </span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
            {formatOptions.map((option) => {
              const isActive = currentFormat === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onFormatChange(option.value)}
                  className={`format-btn rubber-btn rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm inline-flex items-center justify-center whitespace-nowrap ${
                    isActive
                      ? 'bg-[#260701] text-[#f9a602] font-extrabold'
                      : 'bg-[#fdf6e2] hover:bg-[#f9a602]/40 text-[#260701] font-extrabold'
                  }`}
                >
                  <span className="sm:hidden">{option.shortLabel}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtro por Estado de Conservación (En móvil: cuadrícula 2x2 sin scroll que recorte sombras ni bordes) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 pt-2 sm:pt-0 border-t-2 sm:border-t-0 border-dashed border-[#260701]/20">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#4a1504] mr-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f9a602] border border-[#260701] shrink-0 sm:hidden" />
            ESTADO:
          </span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
            {conditionOptions.map((option) => {
              const isActive = currentCondition === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  title={option.title}
                  onClick={() => onConditionChange(option.value)}
                  className={`cond-btn rubber-btn rounded-full px-3 sm:px-3.5 py-1.5 sm:py-1 text-xs inline-flex items-center justify-center whitespace-nowrap ${
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
      </div>
    </section>
  );
}
