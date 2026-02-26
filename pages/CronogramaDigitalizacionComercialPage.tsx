import React, { useMemo } from "react";

type Quarter = 1 | 2 | 3 | 4;
type Month = 1 | 2 | 3;

type TimelineBar = {
  startMonth: Month;
  startQuarter: Quarter;
  endMonth: Month;
  endQuarter: Quarter;
  color?: "blue" | "black";
};

type Row = {
  id: string;
  actividad: string;
  entregable: string;
  semanas?: string; 
  observacion?: string;
  bars?: TimelineBar[]; 
};

type Phase = {
  id: string;
  title: string;
  phaseWeeks: string;
  observation?: string;
  phaseBars: TimelineBar[];
  rows: Row[];
};

// ==========================================
// Lógica de cálculo para el diagrama Gantt
// ==========================================
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function qIndex(m: Month, q: Quarter) {
  return (m - 1) * 4 + (q - 1);
}

function spanToStyle(bar: TimelineBar) {
  const start = qIndex(bar.startMonth, bar.startQuarter);
  const end = qIndex(bar.endMonth, bar.endQuarter);
  const s = clamp(Math.min(start, end), 0, 11);
  const e = clamp(Math.max(start, end), 0, 11);
  const leftPct = (s / 12) * 100;
  const widthPct = ((e - s + 1) / 12) * 100;
  return { leftPct, widthPct };
}

// ==========================================
// Subcomponentes de UI
// ==========================================
const QuarterHeader: React.FC = () => {
  const months: Month[] = [1, 2, 3];
  const quarters: Quarter[] =[1, 2, 3, 4];

  return (
    <div className="w-full bg-[#0e346a] text-white text-xs md:text-sm font-bold">
      <div className="grid grid-cols-[250px_180px_1fr_90px_160px] items-stretch">
        
        <div className="p-3 border-r border-white/20 flex items-center justify-start border-b border-white/20">
          Fase / Actividad
        </div>
        
        <div className="p-3 border-r border-white/20 flex items-center justify-start border-b border-white/20">
          Resultado / Entregable
        </div>
        
        <div className="flex flex-col border-r border-white/20">
          {/* Fila superior: Meses */}
          <div className="grid grid-cols-3 border-b border-white/20 flex-1">
            {months.map((m) => (
              <div key={m} className="flex items-center justify-center border-r last:border-r-0 border-white/20 py-2">
                Mes {m}
              </div>
            ))}
          </div>
          {/* Fila inferior: Trimestres (I, II, III, IV) */}
          <div className="grid grid-cols-12 flex-1">
            {months.map((m) =>
              quarters.map((q) => (
                <div key={`${m}-${q}`} className="flex items-center justify-center border-r last:border-r-0 border-white/20 py-1 text-[10px] md:text-xs bg-white/5">
                  {["I", "II", "III", "IV"][q - 1]}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-2 border-r border-white/20 flex items-center justify-center text-center border-b border-white/20 leading-tight">
          Semanas Estimadas
        </div>
        
        <div className="p-2 flex items-center justify-start border-b border-white/20 pl-4">
          Observación
        </div>

      </div>
    </div>
  );
};

const TimelineCell: React.FC<{ bars?: TimelineBar[] }> = ({ bars }) => {
  const quarters = useMemo(() => Array.from({ length: 12 }, (_, i) => i),[]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Grid punteado de fondo */}
      <div className="grid grid-cols-12 w-full h-full">
        {quarters.map((i) => (
          <div
            key={i}
            className="h-full border-r border-dashed border-gray-200 last:border-r-0"
          />
        ))}
      </div>

      {/* Barras de progreso */}
      <div className="absolute inset-0 overflow-hidden">
        {(bars ??[]).map((b, idx) => {
          const { leftPct, widthPct } = spanToStyle(b);
          const isBlack = (b.color ?? "blue") === "black";
          return (
            <div
              key={idx}
              className="absolute top-1/2 -translate-y-1/2 h-3.5 md:h-4 rounded-full shadow-sm transition-all"
              style={{
                left: `calc(${leftPct}% + 2px)`,
                width: `calc(${widthPct}% - 4px)`,
                backgroundColor: isBlack ? "#374151" : "#1f5f9f",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const PhaseHeaderRow: React.FC<{ phase: Phase }> = ({ phase }) => {
  return (
    <div className="grid grid-cols-[250px_180px_1fr_90px_160px] border-b border-gray-200 bg-gray-50/80">
      <div className="p-3 font-bold text-gray-900 border-r border-gray-200 text-sm flex items-center">
        {phase.title}
      </div>
      <div className="p-3 border-r border-gray-200" />
      <div className="border-r border-gray-200 relative min-h-[44px]">
        <TimelineCell bars={phase.phaseBars} />
      </div>
      <div className="p-3 border-r border-gray-200 text-center font-bold text-gray-900 text-sm flex items-center justify-center">
        {phase.phaseWeeks}
      </div>
      <div className="p-3 text-xs text-gray-600 border-l border-transparent whitespace-pre-line flex items-center pl-4">
        {phase.observation ?? ""}
      </div>
    </div>
  );
};

const PhaseRow: React.FC<{ row: Row }> = ({ row }) => {
  return (
    <div className="grid grid-cols-[250px_180px_1fr_90px_160px] border-b border-gray-200 hover:bg-blue-50/30 transition-colors">
      <div className="p-3 text-sm text-gray-800 border-r border-gray-200 leading-snug font-medium">
        {row.actividad}
      </div>
      <div className="p-3 text-sm text-gray-600 border-r border-gray-200 flex items-center">
        {row.entregable}
      </div>
      <div className="border-r border-gray-200 relative min-h-[48px]">
        <TimelineCell bars={row.bars} />
      </div>
      <div className="p-3 text-sm text-gray-800 border-r border-gray-200 text-center flex items-center justify-center font-medium">
        {row.semanas ?? "—"}
      </div>
      <div className="p-3 text-xs text-gray-500 flex items-center pl-4 leading-snug">
        {row.observacion ?? ""}
      </div>
    </div>
  );
};

// ==========================================
// Componente Principal
// ==========================================
export default function CronogramaDigitalizacionComercialPage() {
  const phases: Phase[] = useMemo(
    () =>[
      {
        id: "fase1",
        title: "Fase I: Proceso de Cotización Estándar",
        phaseWeeks: "8",
        observation: "Estandarización de proceso de cotización\nAcceso y Documentación API ERP",
        phaseBars:[{ startMonth: 1, startQuarter: 1, endMonth: 2, endQuarter: 4, color: "black" }],
        rows:[
          {
            id: "f1r1",
            actividad: "Definición de requisitos de campos mínimos",
            entregable: "Campos Mínimos",
            semanas: "1",
            bars:[{ startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 2, color: "blue" }],
            observacion: "Estandarización de proceso de cotización",
          },
          {
            id: "f1r2",
            actividad: "Definición de Arquitectura e Infraestructura Técnica",
            entregable: "Campos Mínimos",
            semanas: "2",
            bars:[{ startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 3, color: "blue" }],
            observacion: "Acceso y Documentación API ERP",
          },
          {
            id: "f1r3",
            actividad: "Definición de Formato Estándar",
            entregable: "Formato Comercial",
            semanas: "1",
            bars:[{ startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 1, color: "blue" }],
          },
          {
            id: "f1r4",
            actividad: "Automatización de sistema ERP",
            entregable: "API REST",
            semanas: "3",
            bars:[{ startMonth: 1, startQuarter: 3, endMonth: 2, endQuarter: 1, color: "blue" }],
          },
          {
            id: "f1r5",
            actividad: "Ingesta de Datos",
            entregable: "API REST",
            semanas: "4",
            bars:[{ startMonth: 2, startQuarter: 1, endMonth: 2, endQuarter: 4, color: "blue" }],
          },
        ],
      },
      {
        id: "fase2",
        title: "Fase II: Separación del Inventario por Cotizaciones",
        phaseWeeks: "8",
        phaseBars:[{ startMonth: 2, startQuarter: 1, endMonth: 3, endQuarter: 4, color: "black" }],
        rows:[
          {
            id: "f2r1",
            actividad: "Separación del Inventario",
            entregable: "Plataforma Web",
            semanas: "2",
            bars:[{ startMonth: 2, startQuarter: 2, endMonth: 2, endQuarter: 3, color: "blue" }],
          },
          {
            id: "f2r2",
            actividad: "Desarrollo Front-End",
            entregable: "Plataforma Web",
            semanas: "6",
            bars:[{ startMonth: 2, startQuarter: 1, endMonth: 3, endQuarter: 2, color: "blue" }],
          },
          {
            id: "f2r3",
            actividad: "Despliegue",
            entregable: "Modelo Funcional",
            semanas: "3",
            bars:[{ startMonth: 3, startQuarter: 2, endMonth: 3, endQuarter: 4, color: "blue" }],
          },
        ],
      },
    ],[]
  );

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700 font-sans pb-10">
      
      {/* Título Principal */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          Cronograma Digitalización Comercial
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-3xl">
          Visualización de tiempos, entregables y esfuerzo estimado para el despliegue del proceso comercial.
        </p>
      </div>

      {/* Contenedor Responsivo del Cronograma */}
      <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm custom-scrollbar bg-white">
        <div className="min-w-[1050px] w-full flex flex-col">
          
          {/* Encabezado */}
          <QuarterHeader />

          {/* Cuerpo del Cronograma */}
          <div className="w-full flex flex-col">
            {phases.map((p) => (
              <div key={p.id}>
                {/* Cabecera de la Fase (Barra Negra Resumen) */}
                <PhaseHeaderRow phase={p} />

                {/* Filas de Actividades */}
                {p.rows.map((r) => (
                  <PhaseRow key={r.id} row={r} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-8 bg-gray-50 border border-gray-100 text-gray-500 px-5 py-4 rounded-xl text-sm md:text-base font-medium flex items-start gap-3">
        <span className="text-lg leading-none mt-0.5">ℹ️</span>
        <p>
          Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.
        </p>
      </div>

    </div>
  );
}