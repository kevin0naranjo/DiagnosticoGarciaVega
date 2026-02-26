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
  impactRowSpan?: number; 
};

type Slide = {
  key: string;
  title: string;
  baseCost?: string;
  pctHeader: string; 
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
    <div
      className="absolute top-0 right-0 px-5 md:px-8 py-2 md:py-3 rounded-bl-3xl z-10 shadow-sm"
      style={{ backgroundColor: bg }}
    >
      <div className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
};

const SlideTable: React.FC<{
  pctHeader: string;
  rows: Row[];
}> = ({ pctHeader, rows }) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full min-w-[1000px] border-collapse bg-white">
        <thead>
          <tr className="bg-[#0e346a] text-white">
            <th className="p-4 text-sm font-bold text-left border-b border-gray-300 w-[16%]">
              Fase
            </th>
            <th className="p-4 text-sm font-bold text-left border-b border-gray-300 w-[19%]">
              Estado Actual
            </th>
            <th className="p-4 text-sm font-bold text-left border-b border-gray-300 w-[19%]">
              Oportunidad AI
            </th>
            <th className="p-4 text-sm font-bold text-left border-b border-gray-300 w-[16%]">
              Iniciativa AI
            </th>
            <th className="p-4 text-sm font-bold text-center border-b border-gray-300 w-[10%]">
              {pctHeader}
            </th>
            <th className="p-4 text-sm font-bold text-center border-b border-gray-300 w-[10%] leading-tight">
              Potencial de Automatización
            </th>
            <th className="p-4 text-sm font-bold text-center border-b border-gray-300 w-[10%]">
              Impacto
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
              <td className="p-4 align-top border-b border-r border-gray-200 font-bold text-sm text-gray-900 leading-snug">
                {r.phase}
              </td>
              <td className="p-4 align-top border-b border-r border-gray-200 text-sm text-gray-700 leading-relaxed">
                {r.current}
              </td>
              <td className="p-4 align-top border-b border-r border-gray-200 text-sm text-gray-700 leading-relaxed">
                {r.opportunity}
              </td>
              <td className="p-4 align-top border-b border-r border-gray-200 text-sm text-gray-700 leading-relaxed">
                {r.initiative}
              </td>
              <td className="p-4 align-middle border-b border-r border-gray-200 text-center font-semibold text-sm text-gray-900">
                {r.basePct}
              </td>
              <td className="p-4 align-middle border-b border-r border-gray-200 text-center font-semibold text-sm text-[#1f5f9f]">
                {r.automation}
              </td>

              {r.impact ? (
                <td
                  className="p-4 align-middle border-b border-gray-200 text-center font-bold text-sm text-gray-900 bg-gray-50/50"
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
    () =>[
      {
        key: "digitalizacion-comercial",
        title: "Digitalización Comercial",
        baseCost: "Base de costos: 17 representantes cuestan alrededor de 612M COP / Año",
        pctHeader: "% de base de ingresos",
        tag: { label: "Quick Win", tone: "quick" },
        rows:[
          {
            phase: "Fase 1: Proceso de cotización estándar para el área comercial",
            current: "Datos segregados a través de ERP, Informes de Excel y Word, con alta latencia en la digitalización de la información en la ERP, y en ocasiones perdidas de datos",
            opportunity: "Un formato de cotización adecuado puede permitir la automatización de ingesta de datos por parte de la ERP y una disponibilidad confiable de datos en tiempo real",
            initiative: "Subida automática de la información en cotizaciones a la ERP",
            basePct: "~70%",
            automation: "40–70%",
            impact: (
              <>
                +30% FTE,
                <br />
                70 – 120 M COP / Año
              </>
            ),
            impactRowSpan: 2,
          },
          {
            phase: "Fase 2: Separación del inventario por cotizaciones",
            current: "Logística de inventario no es consciente de los posibles pedidos, generando sobrecostos en transporte y deficiencias en la planeación del inventario",
            opportunity: "La planeación de inventario no posee indicadores que permitan la actuación y planeación óptima. Siendo un proceso sumamente reactivo.",
            initiative: "Separación del inventario disponible y sugerencia de stock de seguridad en función de las cotizaciones vigentes en tiempo real",
            basePct: "~70%",
            automation: "60–90%",
          },
        ],
        footnote: "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.",
      },
      {
        key: "diagnostico-clientes",
        title: "Diagnóstico de Clientes",
        baseCost: "Base de costos: Afectaciones y pérdidas causadas por no pagos de créditos",
        pctHeader: "% de base de Costos",
        tag: { label: "Quick Win", tone: "quick" },
        rows:[
          {
            phase: "Fase 1: Recopilación de Información financiera y relevante",
            current: "El proceso de recopilación de documentos financieros es lento, ineficiente, y provoca abandonos constantes. Falta de criterios para la aprobación de clientes.",
            opportunity: "Existen plataformas que recopilan gran parte de la información que solicitan manualmente",
            initiative: "Integración de plataformas externas + recopilación automática + diagnóstico sugerido (reglas/score).",
            basePct: "TBD",
            automation: "50–80%",
            impact: (
              <div className="space-y-2">
                <div>40–60% FTE</div>
                <div>5–8% Aumento de aprobaciones</div>
                <div>Reducción de pérdidas de 10–15%</div>
              </div>
            ),
            impactRowSpan: 2,
          },
          {
            phase: "Fase 2: Proceso de seguimiento y control de cobro",
            current: "Inatención de los plazos de pago de clientes morosos, y pérdidas en cobro de seguros",
            opportunity: "La revisión de los plazos de pago es automatizable",
            initiative: "Revisión automática de condiciones de pago. Sistema de alertas en caso de mora.",
            basePct: "Base afectada por créditos",
            automation: "50–90%",
          },
        ],
        footnote: "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.",
      },
      {
        key: "reingresos",
        title: "Automatización de Reingresos",
        baseCost: "Base de costos: 140–160 operativos representan un estimado de 5.040 – 5.760M COP / Año",
        pctHeader: "% de base de ingresos",
        tag: { label: "Big Swing", tone: "big" },
        rows:[
          {
            phase: "Fase 1: Automatización de reingresos de inventario",
            current: "Reintegros se cuantifican múltiples veces en formatos no estandarizados, manuales, y con alta latencia de digitalización",
            opportunity: "Es una actividad altamente automatizable",
            initiative: "Asistencia en el proceso de reintegro de inventario con una actualización de datos inmediata en ERP. Pre selección del inventario a ingresar por proyecto.",
            basePct: "~70%",
            automation: "40–75%",
            impact: (
              <>
                30–70% FTE Dedicado a esta tarea
                <br /><br />
                50 – 130M COP / Año
              </>
            ),
            impactRowSpan: 2,
          },
          {
            phase: "Fase 2: Conexión entre áreas mediante alertas y Dashboard",
            current: "Baja comunicación entre áreas sobre novedades de pedidos, inventario, requerimientos, etc.",
            opportunity: "La comunicación efectiva entre líderes, representativos, y otro personal, permitiría una mejor planeación logística, de inventario, y comercial",
            initiative: "Notificaciones de alertas de inventario, stock, mantenimiento, y otras métricas de interés, así como proyecciones.",
            basePct: "~70%",
            automation: "30–70%",
          },
        ],
        footnote: "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.",
      },
      {
        key: "forecasting",
        title: "Forecasting de Alquiler y Ventas",
        pctHeader: "% de base de ingresos",
        tag: { label: "Big Swing", tone: "big" },
        rows:[
          {
            phase: "Fase 1: Levantamiento de Información y Generación de ETL",
            current: "Información relevante para la planeación del Inventario, Insumos, y Logística, se encuentra fragmentada, inexistente, o es poco precisa.",
            opportunity: "El análisis de la información disponible, así como la unificación y recopilación de nuevos datos, permitirían un análisis y predicción más preciso y significativo",
            initiative: "Centralización de datos relevantes. Asignación de variables clave en la predicción. Generación de Pipeline de ETL. Creación de conjunto de datos.",
            basePct: "~70%",
            automation: "40–80%",
            impact: (
              <div className="space-y-2 text-left px-2">
                <div>• 5–20% FTE</div>
                <div>• 5–15% reducción problemas disponibilidad</div>
                <div>• 10–20% Reducción Logística de Emergencia</div>
                <div>• 5–10% Reducción Costos de Stock de Seguridad</div>
              </div>
            ),
            impactRowSpan: 4,
          },
          {
            phase: "Fase 2: Forecasting de alquiler y ventas (v1.0)",
            current: "Planeación reactiva, sin comunicación entre sedes. Análisis estadístico llevado a cabo, pero con información incompleta y/o fragmentada.",
            opportunity: "Un modelo de IA podría realizar un análisis basado en la información disponible y dar un estimado de alquiler y ventas.",
            initiative: "Pronóstico demanda por sede/familia con horizonte de 1–4 semanas.",
            basePct: "~70%",
            automation: "20–60%",
          },
          {
            phase: "Fase 3: Forecasting de Retornos probables",
            current: "Los retornos llegan de forma imprevista, generando desorganización en la planeación de personal y retraso en tareas de control de inventario",
            opportunity: "Un modelo probabilístico / ML puede analizar el comportamiento y anticipar la probabilidad de retorno",
            initiative: "Pronóstico de retornos de inventario por sede/familia.",
            basePct: "~70%",
            automation: "15–60%",
          },
          {
            phase: "Fase 4: Sistema de recomendación de traslado de Stock",
            current: "La comunicación entre sedes dificulta el proceso de optimización de inventario, generando stock estacionario que es necesitado en otras sedes.",
            opportunity: "Es posible asistir a la planeación logística de traslados mediante un análisis por IA, teniendo en cuenta la información de sedes.",
            initiative: "Alertas de stock de seguridad por sede, recomendaciones de traslado, agenda de traslado.",
            basePct: "~70%",
            automation: "20–40%",
          },
        ],
        footnote: "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.",
      },
      {
        key: "rendimiento-humano",
        title: "Medición de Rendimiento Humano",
        baseCost: "Base de costos: 140–160 operativos representan un estimado de 5.040 – 5.760M COP / Año",
        pctHeader: "% de base de ingresos",
        tag: { label: "Nice to Have", tone: "nice" },
        rows:[
          {
            phase: "Fase 1: Puntos de control",
            current: "Programación de tareas informal y reactiva, medición de rendimiento manual o inexistente; tiempos muertos no visibles.",
            opportunity: "Digitalizar un registro de actividades y tiempos habilita productividad real por hora-hombre.",
            initiative: "Interfaz que permita registrar inicio/fin de cada tarea de cargue y descargue.",
            basePct: "% FTE Cargue/Descargue",
            automation: "30–70% (Asistencia por lider)",
            impact: (
              <>
                5–20% Capacidad Efectiva
                <br /><br />
                54 – 216 M COP / Año
              </>
            ),
            impactRowSpan: 4,
          },
          {
            phase: "Fase 2: Correlación con Reingresos",
            current: "Labores de reingreso son manuales y no se realizan en conjunto con el análisis de rendimiento de los trabajadores.",
            opportunity: "Se puede realizar el proceso de reingresos durante el registro de actividades, cuantificando cargue/descargue de producto por hora.",
            initiative: "Cuantificar eficiencia por producto/familia cargado/descargado de forma automática.",
            basePct: "% FTE Digitalización",
            automation: "30–70% (Asistencia por lider)",
          },
          {
            phase: "Fase 3: Dashboard de productividad",
            current: "Sin KPIs comparables; es difícil mejorar y dimensionar capacidad. Imposibilita la toma de medidas.",
            opportunity: "Analítica permite redistribuir carga, reducir cuellos de botella y aumentar productividad.",
            initiative: "Dashboard de productividad, tiempos muertos, cumplimiento de plan de trabajo, causas de cambio.",
            basePct: "% FTE Cargue/Descargue",
            automation: "--",
          },
          {
            phase: "Fase 4: Incentivos variables",
            current: "Compensación desconectada de productividad real.",
            opportunity: "Métricas precisas permiten incentivos justos y formación focalizada.",
            initiative: "Modelo de incentivos por objetivo y productividad + alertas de seguridad.",
            basePct: "% FTE Cargue/Descargue",
            automation: "--",
          },
        ],
        footnote: "Sujeto a verificaciones posteriores mediante conversaciones de validación y solicitudes de datos pendientes.",
      },
    ],[]
  );

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700 font-sans pb-10">
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
          Iniciativas
        </h1>
        <p className="mt-3 text-lg text-gray-500 font-medium">
          Desglose detallado de oportunidades, fases e impacto esperado.
        </p>
      </div>

      <div className="space-y-12">
        {slides.map((s) => (
          <section 
            key={s.key} 
            className="relative bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col overflow-hidden"
          >
            {s.tag ? <CornerTag label={s.tag.label} tone={s.tag.tone} /> : null}

            <div className="pr-20 md:pr-32"> {/* Padding a la derecha para no chocar con el tag */}
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
                {s.title}
              </h2>

              {s.baseCost && (
                <div className="mt-3 inline-block bg-blue-50 text-[#1f5f9f] px-4 py-2 rounded-xl text-sm md:text-base font-bold">
                  {s.baseCost}
                </div>
              )}
            </div>

            <div className="mt-8 overflow-hidden">
              <SlideTable pctHeader={s.pctHeader} rows={s.rows} />
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-100 text-gray-500 px-5 py-4 rounded-xl text-xs md:text-sm font-medium flex items-center gap-3">
              <span className="text-lg">ℹ️</span>
              {s.footnote}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};


export default InitiativesPage;
