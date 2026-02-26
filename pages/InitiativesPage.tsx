import React, { useMemo } from "react";

type TagTone = "quick" | "big" | "nice";

type Row = {
  phase: React.ReactNode;
  current: React.ReactNode;
  opportunity: React.ReactNode;
  initiative: React.ReactNode;
  basePct: React.ReactNode;
  automation: React.ReactNode;
  impact?: React.ReactNode;
  impactRowSpan?: number; // para combinar y centrar (rowSpan)
};

type Slide = {
  key: string;
  title: string;
  baseCost?: string;
  pctHeader: string; // "% de base de ingresos" o "% de base de costos"
  tag?: { label: string; tone: TagTone };
  rows: Row[];
  footnote: string;
};

const tagColors: Record<TagTone, string> = {
  quick: "#183f73",
  big: "#1f5f9f",
  nice: "#4f97dc",
};

const CornerTag: React.FC<{ label: string; tone: TagTone }> = ({ label, tone }) => {
  const bg = tagColors[tone];

  return (
    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 pointer-events-none select-none">
      {/* “hook” arriba */}
      <svg
        width="90"
        height="70"
        viewBox="0 0 90 70"
        className="absolute -top-8 right-4 md:right-6 opacity-90"
        fill="none"
      >
        <path
          d="M65 6c10 7 14 16 13 26-1 10-7 18-16 23"
          stroke={bg}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="49" cy="54" r="6" fill={bg} />
      </svg>

      {/* Tag */}
      <div
        className="w-[84px] h-[84px] md:w-[96px] md:h-[96px] rotate-45 shadow-xl"
        style={{
          background: bg,
          clipPath:
            "polygon(22% 0%, 100% 0%, 100% 78%, 78% 100%, 0% 22%, 0% 0%)",
          borderRadius: "14px",
        }}
      >
        {/* “hole” */}
        <div className="absolute top-[14px] left-[14px] w-[12px] h-[12px] bg-white/90 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="-rotate-90 text-white font-black text-[12px] md:text-[13px] tracking-wide">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideTable: React.FC<{
  pctHeader: string;
  rows: Row[];
}> = ({ pctHeader, rows }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1120px] border-collapse">
        <thead>
          <tr className="bg-[#183f73] text-white">
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[16%]">
              Fase
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[19%]">
              Estado Actual
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[19%]">
              Oportunidad AI
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[16%]">
              Iniciativa AI
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[10%]">
              {pctHeader}
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[10%]">
              Potencial de Automatización
            </th>
            <th className="p-3 text-sm md:text-base font-black text-center border border-black/60 w-[10%]">
              Impacto
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx}>
              <td className="p-4 align-middle border border-black/50 font-black text-[13px] md:text-[14px] leading-snug">
                {r.phase}
              </td>
              <td className="p-4 align-top border border-black/50 text-[12px] md:text-[13px] text-gray-700 leading-relaxed">
                {r.current}
              </td>
              <td className="p-4 align-top border border-black/50 text-[12px] md:text-[13px] text-gray-700 leading-relaxed">
                {r.opportunity}
              </td>
              <td className="p-4 align-top border border-black/50 text-[12px] md:text-[13px] text-gray-700 leading-relaxed">
                {r.initiative}
              </td>
              <td className="p-4 align-middle border border-black/50 text-center font-medium text-[13px] md:text-[14px]">
                {r.basePct}
              </td>
              <td className="p-4 align-middle border border-black/50 text-center font-medium text-[13px] md:text-[14px]">
                {r.automation}
              </td>

              {/* Impacto combinado y centrado (rowSpan) */}
              {r.impact ? (
                <td
                  className="p-4 align-middle border border-black/50 text-center font-black text-[13px] md:text-[14px] leading-snug"
                  rowSpan={r.impactRowSpan ?? 1}
                >
                  {r.impact}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InitiativesPage: React.FC = () => {
  const slides = useMemo<Slide[]>(
    () => [
      {
        key: "digitalizacion-comercial",
        title: "Digitalización Comercial",
        baseCost:
          "Base de costos: 17 representantes cuestan alrededor de 612M Pesos Colombianos / Año",
        pctHeader: "% de base de ingresos",
        rows: [
          {
            phase: (
              <>
                Fase 1: Proceso de cotización estándar para el área de comercial
              </>
            ),
            current:
              "Datos segregados a través de ERP, Informes de Excel y Word, con alta latencia en la digitalización de la información en la ERP, y en ocasiones perdidas de datos",
            opportunity:
              "Un formato de cotización adecuado puede permitir la automatización de ingesta de datos por parte de la ERP y una disponibilidad confiable de datos en tiempo real",
            initiative:
              "Subida automática de la información en cotizaciones a la ERP",
            basePct: "~70%",
            automation: "40–70%",
            impact: (
              <>
                +30% FTE,
                <br />
                70 – 120 M pesos
                <br />
                Colombianos / Año
              </>
            ),
            impactRowSpan: 2,
          },
          {
            phase: <>Fase 2: Separación del inventario por cotizaciones</>,
            current:
              "Logística de inventario no es consciente de los posibles pedidos, generando sobrecostos en transporte y deficiencias en la planeación del inventario",
            opportunity:
              "La planeación de inventario no posee indicadores que permitan la actuación y planeación óptima. Siendo un proceso sumamente reactivo.",
            initiative:
              "Separación del inventario disponible y sugerencia de stock de seguridad en función de las cotizaciones vigentes en tiempo real",
            basePct: "~70%",
            automation: "60–90%",
          },
        ],
        footnote:
          "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes",
      },

      {
        key: "diagnostico-clientes",
        title: "Diagnóstico de Clientes",
        baseCost:
          "Base de costos: Afectaciones y pérdidas causadas por no pagos de créditos",
        pctHeader: "% de base de Costos",
        tag: { label: "Quick Win", tone: "quick" },
        rows: [
          {
            phase:
              "Fase 1: Recopilación de Información financiera y relevante para el diagnóstico",
            current:
              "El proceso de recopilación de documentos financieros es lento, ineficiente, y provoca abandonos constantes. Falta de criterios para la aprobación de clientes.",
            opportunity:
              "Existen plataformas que recopilan gran parte de la información que solicitan manualmente",
            initiative:
              "Integración de plataformas externas + recopilación automática + diagnóstico sugerido (reglas/score).",
            basePct: "TBD",
            automation: "50–80%",
            impact: (
              <>
                40–60% FTE,
                <br />
                5–8% Aumento de
                <br />
                aprobaciones,
                <br />
                Reducción de
                <br />
                pérdidas de 10–15%
              </>
            ),
            impactRowSpan: 2,
          },
          {
            phase: "Fase 2: Proceso de seguimiento y control de cobro",
            current:
              "Inatención de los plazos de pago de clientes morosos, y pérdidas en cobro de seguros",
            opportunity: "La revisión de los plazos de pago es automatizable",
            initiative:
              "Revisión automática de condiciones de pago. Sistema de alertas en caso de mora.",
            basePct: "Base afectada por créditos",
            automation: "50–90%",
          },
        ],
        footnote:
          "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes",
      },

      {
        key: "reingresos",
        title: "Automatización de Reingresos",
        baseCost:
          "Base de costos: 140–160 operativos representan un estimado de 5.040 – 5.760M Pesos Colombianos / Año",
        pctHeader: "% de base de ingresos",
        tag: { label: "Big Swing", tone: "big" },
        rows: [
          {
            phase: "Fase 1: Automatización de reingresos de inventario",
            current:
              "Reintegros se cuantifican múltiples veces en formatos no estandarizados, manuales, y con alta latencia de digitalización",
            opportunity: "Es una actividad altamente automatizable",
            initiative:
              "Asistencia en el proceso de reintegro de inventario con una actualización de datos inmediata en ERP. Pre selección del inventario a ingresar por proyecto.",
            basePct: "~70%",
            automation: "40–75%",
            impact: (
              <>
                30–70% FTE
                <br />
                Dedicado a esta
                <br />
                tarea
                <br />
                50 – 130M Pesos
                <br />
                Colombianos / Año
              </>
            ),
            impactRowSpan: 2,
          },
          {
            phase:
              "Fase 2: Conexión entre áreas mediante alertas / Notificaciones y Dashboard General",
            current:
              "Baja comunicación entre áreas sobre novedades de pedidos, inventario, requerimientos, etc.",
            opportunity:
              "La comunicación efectiva entre líderes, representativos, y otro personal, permitiría una mejor planeación logística, de inventario, y comercial",
            initiative:
              "Notificaciones de alertas de inventario, stock, mantenimiento, y otras métricas de interés, así como proyecciones.",
            basePct: "~70%",
            automation: "30–70%",
          },
        ],
        footnote:
          "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes",
      },

      {
        key: "forecasting",
        title: "Forecasting de Alquiler y Ventas",
        pctHeader: "% de base de ingresos",
        tag: { label: "Big Swing", tone: "big" },
        rows: [
          {
            phase: "Fase 1: Levantamiento de Información y Generación de ETL",
            current:
              "Información relevante para la planeación del Inventario, Insumos, y Logística, se encuentra fragmentada, inexistente, o es poco precisa.",
            opportunity:
              "El análisis de la información disponible, así como la unificación y recopilación de nuevos datos, permitirían un análisis y predicción más preciso y significativo",
            initiative:
              "Centralización de datos relevantes. Asignación de variables clave en la predicción. Generación de Pipeline de ETL. Creación de conjunto de datos y dependencias de mantenimiento.",
            basePct: "~70%",
            automation: "40–80%",
            impact: (
              <>
                5–20% FTE
                <br />
                5–15% reducción
                <br />
                problemas disponibilidad,
                <br />
                10–20% Reducción
                <br />
                Logística Emergencia,
                <br />
                5–10% Reducción Costos
                <br />
                de Stock Estacionario
                <br />
                Stock de Seguridad
              </>
            ),
            impactRowSpan: 4,
          },
          {
            phase: "Fase 2: Forecasting de alquiler y ventas (v1.0)",
            current:
              "Planeación de Inventario, Insumos, y Logística reactiva, sin comunicación entre sedes. Análisis estadístico es llevado a cabo, pero con información incompleta y/o fragmentada.",
            opportunity:
              "Un modelo de IA podría realizar un análisis basado en la información disponible y dar un estimado de alquiler y ventas.",
            initiative:
              "Pronóstico demanda por sede/familia con horizonte de 1–4 semanas.",
            basePct: "~70%",
            automation: "20–60%",
          },
          {
            phase: "Fase 3: Forecasting de Retornos probables",
            current:
              "Los retornos de inventario llegan de forma imprevista, generando desorganización en la planeación de personal y retraso en las tareas de control de inventario",
            opportunity:
              "Un modelo probabilístico / ML puede analizar el comportamiento y anticipar la probabilidad de retorno",
            initiative: "Pronóstico de retornos de inventario por sede/familia.",
            basePct: "~70%",
            automation: "15–60%",
          },
          {
            phase: "Fase 4: Sistema de recomendación de traslado de Stock",
            current:
              "La comunicación entre sedes dificulta el proceso de optimización de inventario, generando stock estacionario que es necesitado en otras sedes.",
            opportunity:
              "Es posible asistir a la planeación logística de traslados mediante un análisis por IA, teniendo en cuenta los sistemas de predicción y la información de inventario de sedes.",
            initiative:
              "Alertas de stock de seguridad por sede, recomendaciones de traslado acorde a posibles alquileres / ventas, recomendaciones de agenda de traslado.",
            basePct: "~70%",
            automation: "20–40%",
          },
        ],
        footnote:
          "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes",
      },

      {
        key: "rendimiento-humano",
        title: "Medición de Rendimiento Humano",
        baseCost:
          "Base de costos: 140–160 operativos representan un estimado de 5.040 – 5.760M Pesos Colombianos / Año",
        pctHeader: "% de base de ingresos",
        tag: { label: "Nice to Have", tone: "nice" },
        rows: [
          {
            phase: "Fase 1: Puntos de control",
            current:
              "Programación de tareas informal y reactiva, medición de rendimiento manual o inexistente; tiempos muertos no visibles ni cuantificados.",
            opportunity:
              "Digitalizar un registro de actividades y tiempos habilita productividad real por hora-hombre.",
            initiative:
              "Interfaz que permita registrar inicio/fin de cada tarea de cargue y descargue.",
            basePct: (
              <>
                % FTE
                <br />
                Cargue/Descargue
              </>
            ),
            automation: (
              <>
                30–70%
                <br />
                (Asistencia por lider)
              </>
            ),
            impact: (
              <>
                5–20% Capacidad Efectiva
                <br />
                54 – 216 M Pesos
                <br />
                Colombianos / Año
              </>
            ),
            impactRowSpan: 4,
          },
          {
            phase: "Fase 2: Correlación con Reingresos",
            current:
              "Labores de reingreso son manuales y no se realizan en conjunto con el análisis de rendimiento de los trabajadores.",
            opportunity:
              "Se puede realizar el proceso de reingresos durante el registro de actividades, permitiendo la cuantificación de cargue/descargue de producto/familia por hora por empleado.",
            initiative:
              "Cuantificar eficiencia por producto/familia cargado/descargado de forma automática",
            basePct: (
              <>
                % FTE
                <br />
                Cargue/Descargue
                <br />
                /Digitalización
              </>
            ),
            automation: (
              <>
                30–70%
                <br />
                (Asistencia por lider)
              </>
            ),
          },
          {
            phase:
              "Fase 3: Dashboard de productividad y cumplimiento de plan diario",
            current:
              "Sin KPIs comparables; es difícil mejorar y dimensionar capacidad. Así mismo, imposibilita la toma de medidas.",
            opportunity:
              "Analítica permite redistribuir carga, reducir cuellos de botella y aumentar productividad",
            initiative:
              "Dashboard de productividad, tiempos muertos, cumplimiento de plan de trabajo, causas de cambio.",
            basePct: (
              <>
                % FTE
                <br />
                Cargue/Descargue
              </>
            ),
            automation: "--",
          },
          {
            phase: "Fase 4: Incentivos variables con métricas confiables",
            current: "Compensación desconectada de productividad real.",
            opportunity:
              "Métricas precisas permiten incentivos justos y formación focalizada.",
            initiative:
              "Modelo de incentivos por objetivo y productividad + alertas de seguridad.",
            basePct: (
              <>
                % FTE
                <br />
                Cargue/Descargue
              </>
            ),
            automation: "--",
          },
        ],
        footnote:
          "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes",
      },
    ],
    []
  );

  return (
    <div className="space-y-14 md:space-y-20 animate-in fade-in duration-700">
      {slides.map((s) => (
        <section key={s.key} className="relative">
          {s.tag ? <CornerTag label={s.tag.label} tone={s.tag.tone} /> : null}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900">
            {s.title}
          </h1>

          {s.baseCost ? (
            <p className="mt-4 md:mt-6 text-lg md:text-2xl text-gray-500 font-medium">
              {s.baseCost}
            </p>
          ) : (
            <div className="mt-6" />
          )}

          <div className="mt-8 md:mt-10">
            <SlideTable pctHeader={s.pctHeader} rows={s.rows} />
          </div>

          <div className="mt-6 bg-gray-100 text-gray-600 px-5 py-4 md:px-8 md:py-5 rounded-md text-sm md:text-lg font-medium">
            {s.footnote}
          </div>
        </section>
      ))}
    </div>
  );
};

export default InitiativesPage;