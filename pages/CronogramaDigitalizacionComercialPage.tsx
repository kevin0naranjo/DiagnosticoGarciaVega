// src/pages/CronogramaDigitalizacionComercialPage.tsx
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
  semanas?: string; // puede ser "1", "2", "3", "4", "8", "—"
  observacion?: string;
  bars?: TimelineBar[]; // una fila puede tener 0..n barras (por si luego quieres sobreponer)
};

type Phase = {
  id: string;
  title: string;
  phaseWeeks: string; // Ej: "8"
  rows: Row[];
};

const NAVY = "#0F3B68";
const GRID = "#D1D5DB";
const TEXT = "#111827";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function qIndex(m: Month, q: Quarter) {
  // Devuelve 0..11 (Mes 1..3, cada uno con I..IV)
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

const QuarterHeader: React.FC = () => {
  const months: Month[] = [1, 2, 3];
  const quarters: Quarter[] = [1, 2, 3, 4];

  return (
    <div className="w-full">
      {/* Fila Mes 1..3 */}
      <div className="grid grid-cols-[260px_180px_1fr_110px_160px] items-stretch">
        <div className="bg-transparent" />
        <div className="bg-transparent" />
        <div className="grid grid-cols-3 border-y border-black">
          {months.map((m) => (
            <div
              key={m}
              className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-x border-black"
            >
              Mes {m}
            </div>
          ))}
        </div>
        <div className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-y border-black border-l border-black">
          Semanas Estimada
        </div>
        <div className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-y border-black border-l border-black">
          Observación
        </div>
      </div>

      {/* Fila I II III IV (x3 meses) */}
      <div className="grid grid-cols-[260px_180px_1fr_110px_160px] items-stretch">
        <div className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-b border-black border-l border-black">
          Fase
        </div>
        <div className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-b border-black border-l border-black">
          Resultado / Entregable
        </div>

        <div className="border-b border-black">
          <div className="grid grid-cols-12">
            {months.map((m) =>
              quarters.map((q) => (
                <div
                  key={`${m}-${q}`}
                  className="bg-[#0F3B68] text-white font-semibold text-center py-2 border-l border-black"
                >
                  {["I", "II", "III", "IV"][q - 1]}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="border-b border-black border-l border-black bg-white" />
        <div className="border-b border-black border-l border-black bg-white" />
      </div>
    </div>
  );
};

const TimelineCell: React.FC<{ bars?: TimelineBar[] }> = ({ bars }) => {
  const quarters = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  return (
    <div className="relative w-full">
      {/* Grid punteado */}
      <div className="grid grid-cols-12 w-full h-full">
        {quarters.map((i) => (
          <div
            key={i}
            className="h-full border-l border-dashed"
            style={{ borderColor: GRID }}
          />
        ))}
      </div>

      {/* Barras */}
      <div className="absolute inset-0">
        {(bars ?? []).map((b, idx) => {
          const { leftPct, widthPct } = spanToStyle(b);
          const isBlack = (b.color ?? "blue") === "black";
          return (
            <div
              key={idx}
              className="absolute top-1/2 -translate-y-1/2 h-3 rounded-sm"
              style={{
                left: `${leftPct}%`,
                width: `${widthPct}%`,
                background: isBlack ? "#111827" : "#2C6FB7",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const PhaseRow: React.FC<{
  row: Row;
}> = ({ row }) => {
  return (
    <div className="grid grid-cols-[260px_180px_1fr_110px_160px] border-b border-black">
      {/* Actividad */}
      <div className="p-3 text-[15px] leading-snug border-l border-black">
        {row.actividad}
      </div>

      {/* Entregable */}
      <div className="p-3 text-[15px] leading-snug border-l border-black flex items-center">
        {row.entregable}
      </div>

      {/* Timeline */}
      <div className="border-l border-black">
        <div className="h-full min-h-[46px] px-2 py-2">
          <TimelineCell bars={row.bars} />
        </div>
      </div>

      {/* Semanas */}
      <div className="p-3 text-[15px] border-l border-black text-center flex items-center justify-center">
        {row.semanas ?? "—"}
      </div>

      {/* Observación */}
      <div className="p-3 text-[13px] border-l border-black text-left flex items-center">
        {row.observacion ?? ""}
      </div>
    </div>
  );
};

const PhaseHeaderRow: React.FC<{ title: string; phaseWeeks: string; observation?: string }> = ({
  title,
  phaseWeeks,
  observation,
}) => {
  return (
    <div className="grid grid-cols-[260px_180px_1fr_110px_160px] border-b border-black">
      <div className="p-2 font-semibold border-l border-black">{title}</div>
      <div className="p-2 border-l border-black" />
      <div className="border-l border-black">
        <div className="h-full min-h-[34px] px-2 py-2">
          {/* Barra negra de fase completa (opcional) */}
          <TimelineCell
            bars={[
              {
                startMonth: 2,
                startQuarter: 1,
                endMonth: 3,
                endQuarter: 4,
                color: "black",
              },
            ]}
          />
        </div>
      </div>
      <div className="p-2 border-l border-black text-center font-semibold flex items-center justify-center">
        {phaseWeeks}
      </div>
      <div className="p-2 border-l border-black text-[13px] flex items-center">
        {observation ?? ""}
      </div>
    </div>
  );
};

export default function CronogramaDigitalizacionComercialPage() {
  const phases: Phase[] = useMemo(
    () => [
      {
        id: "fase1",
        title: "Fase I: Proceso de Cotización Estándar",
        phaseWeeks: "8",
        rows: [
          {
            id: "f1r1",
            actividad: "Definición de requisitos de campos mínimos",
            entregable: "Campos Mínimos",
            semanas: "1",
            bars: [
              { startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 2, color: "blue" },
            ],
            observacion: "Estandarización de proceso de cotización",
          },
          {
            id: "f1r2",
            actividad: "Definición de Arquitectura e Infraestructura Técnica",
            entregable: "Campos Mínimos",
            semanas: "2",
            bars: [
              { startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 3, color: "blue" },
            ],
            observacion: "Acceso y Documentación API ERP",
          },
          {
            id: "f1r3",
            actividad: "Definición de Formato Estándar",
            entregable: "Formato Comercial",
            semanas: "1",
            bars: [
              { startMonth: 1, startQuarter: 1, endMonth: 1, endQuarter: 1, color: "blue" },
            ],
          },
          {
            id: "f1r4",
            actividad: "Automatización de sistema ERP",
            entregable: "API REST",
            semanas: "3",
            bars: [
              { startMonth: 1, startQuarter: 3, endMonth: 2, endQuarter: 1, color: "blue" },
            ],
          },
          {
            id: "f1r5",
            actividad: "Ingesta de Datos",
            entregable: "API REST",
            semanas: "4",
            bars: [
              { startMonth: 2, startQuarter: 1, endMonth: 2, endQuarter: 4, color: "blue" },
            ],
          },
        ],
      },
      {
        id: "fase2",
        title: "Fase II: Separación del Inventario por Cotizaciones",
        phaseWeeks: "8",
        rows: [
          {
            id: "f2r1",
            actividad: "Separación del Inventario",
            entregable: "Plataforma Web",
            semanas: "2",
            bars: [
              { startMonth: 2, startQuarter: 2, endMonth: 2, endQuarter: 3, color: "blue" },
            ],
          },
          {
            id: "f2r2",
            actividad: "Desarrollo Front-End",
            entregable: "Plataforma Web",
            semanas: "6",
            bars: [
              { startMonth: 2, startQuarter: 1, endMonth: 3, endQuarter: 2, color: "blue" },
            ],
          },
          {
            id: "f2r3",
            actividad: "Despliegue",
            entregable: "Modelo Funcional",
            semanas: "3",
            bars: [
              { startMonth: 3, startQuarter: 2, endMonth: 3, endQuarter: 4, color: "blue" },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: TEXT }}>
          Cronograma Digitalización Comercial
        </h1>

        <div className="mt-8 border border-black bg-white overflow-hidden">
          {/* Encabezado */}
          <QuarterHeader />

          {/* Cuerpo */}
          <div className="w-full">
            {phases.map((p) => (
              <div key={p.id}>
                {/* Header de fase (con barra negra general de referencia) */}
                <PhaseHeaderRow
                  title={p.title}
                  phaseWeeks={p.phaseWeeks}
                  observation={
                    p.id === "fase1"
                      ? "Estandarización de proceso de cotización\nAcceso y Documentación API ERP"
                      : ""
                  }
                />

                {/* Rows */}
                {p.rows.map((r) => (
                  <PhaseRow key={r.id} row={r} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Nota */}
        <div className="mt-6 bg-gray-100 border border-gray-200 px-4 py-3 text-gray-700">
          Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes
        </div>

        {/* Responsive tip: en pantallas muy pequeñas, deja que el cronograma haga scroll horizontal */}
        <style>{`
          @media (max-width: 900px) {
            .cronograma-wrap {
              overflow-x: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
}