import React, { useMemo, useState } from "react";

type DeepDive = {
  key: string;
  title: string;
  tag: "Quick Win" | "Big Swing" | "Nice to Have";
  left: {
    impactTitle: string;
    impactBody: string; // puede traer bullets con "\n• "
    ahorroTitle: string;
    ahorroBody: string;
    valorTitle: string;
    valorBullets: string[];
  };
  right: {
    kpisTitle: string;
    kpis: string[];
    reqFuncTitle: string;
    reqFunc: string[];
    reqTechTitle: string;
    reqTech: string[];
    disclaimer: string;
  };
};

const TAG_COLORS: Record<DeepDive["tag"], { bg: string; text: string }> = {
  "Quick Win": { bg: "bg-[#0F3B68]", text: "text-white" },
  "Big Swing": { bg: "bg-[#0F3B68]", text: "text-white" },
  "Nice to Have": { bg: "bg-[#5B9BD5]", text: "text-white" },
};

const CornerTag: React.FC<{ tag: DeepDive["tag"] }> = ({ tag }) => {
  const style = TAG_COLORS[tag];
  return (
    <div className="absolute -top-2 -right-2 w-36 h-36 pointer-events-none">
      <div className="absolute top-7 right-[-44px] rotate-45">
        <div className={`${style.bg} ${style.text} px-10 py-3 text-lg font-semibold shadow-md rounded-sm`}>
          {tag}
        </div>
      </div>
    </div>
  );
};

const BluePanel: React.FC<{ dive: DeepDive }> = ({ dive }) => {
  return (
    <div className="bg-[#0F3B68] text-white p-8 md:p-10">
      <div className="text-3xl font-semibold">Impacto</div>
      <div className="mt-2 text-2xl md:text-3xl whitespace-pre-line">{dive.left.impactBody}</div>

      <div className="mt-10 text-3xl font-semibold">{dive.left.ahorroTitle}</div>
      <div className="mt-2 text-2xl md:text-3xl whitespace-pre-line opacity-95">{dive.left.ahorroBody}</div>

      <div className="mt-10 text-3xl font-semibold">{dive.left.valorTitle}</div>
      <ul className="mt-4 space-y-4 text-2xl md:text-3xl list-disc pl-6">
        {dive.left.valorBullets.map((b) => (
          <li key={b} className="opacity-95">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

const RightPanel: React.FC<{ dive: DeepDive }> = ({ dive }) => {
  return (
    <div className="p-8 md:p-10 bg-white">
      <div className="space-y-10">
        <div>
          <div className="text-3xl font-bold">{dive.right.kpisTitle}</div>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-2xl md:text-3xl text-gray-800">
            {dive.right.kpis.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-3xl font-bold">{dive.right.reqFuncTitle}</div>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-2xl md:text-3xl text-gray-800">
            {dive.right.reqFunc.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-3xl font-bold">{dive.right.reqTechTitle}</div>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-2xl md:text-3xl text-gray-800">
            {dive.right.reqTech.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 border border-gray-200 px-4 py-3 text-lg md:text-xl text-gray-600">
          {dive.right.disclaimer}
        </div>
      </div>
    </div>
  );
};

export const DeepDivesPage: React.FC = () => {
  const dives: DeepDive[] = useMemo(
    () => [
      {
        key: "digitalizacion",
        title: "Digitalización Comercial",
        tag: "Quick Win",
        left: {
          impactTitle: "Impacto",
          impactBody: "70 – 120 M Pesos Colombianos / Año",
          ahorroTitle: "Ahorro de Tiempo",
          ahorroBody:
            "La actualización de cotizaciones en ERP toma una porción alta del tiempo de cada representante comercial, proceso automatizable entre el 40–70%, reduciendo la latencia de la información drásticamente.",
          valorTitle: "Valor Añadido",
          valorBullets: [
            "La disponibilidad de la información de forma inmediata abre las puertas a una mejor planeación de inventario, movimientos inter-sede, y proporciona un insumo para un cálculo de stock de seguridad.",
            "Se prevé reducción de pérdidas en negocios perdidos, transportes de emergencia, y aumento de ventas, cuyo estimado no está incluido en el impacto inicial.",
          ],
        },
        right: {
          kpisTitle: "Otros KPI relevantes de Éxito",
          kpis: [
            "Latencia de Actualización.",
            "Porcentaje Campos Completos.",
            "OTIF (On Time in Full)",
            "Fill-Rate",
            "Porcentaje Transporte de Emergencia",
            "Negocios Perdidos por disponibilidad",
            "Ventas",
          ],
          reqFuncTitle: "Requerimientos Funcionales",
          reqFunc: [
            "Estandarización de procedimiento de cotización comercial en un formato único.",
            "Uso sostenido y consistente de las herramientas propuestas, incluyendo campos obligatorios por orden / cotización.",
          ],
          reqTechTitle: "Requerimientos Técnicos",
          reqTech: ["Acceso y documentación de API del ERP."],
          disclaimer: "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
        },
      },

      {
        key: "diagnostico",
        title: "Diagnóstico de Clientes",
        tag: "Quick Win",
        left: {
          impactTitle: "Impacto",
          impactBody:
            "• Se estima impacto importante en reducción de pérdidas por clientes morosos y siniestros de 10–15%.\n• También en aumento de aprobaciones de financiamiento de clientes por un 5–8%.",
          ahorroTitle: "Ahorro de Tiempo",
          ahorroBody:
            "El proceso de recopilación de documentación y aprobación de financiamiento es innecesariamente largo y manual. Se estima un ahorro significativo entre el 40–60% en este tiempo.",
          valorTitle: "Valor Añadido",
          valorBullets: [
            "Mejores criterios de selección y tiempos más rápidos permitirán un crecimiento de clientes de financiamiento.",
            "Un sistema de alertas de cobro oportuno permitirá tomar acciones minimizando las pérdidas.",
          ],
        },
        right: {
          kpisTitle: "Otros KPI relevantes de Éxito",
          kpis: [
            "Porcentaje de Siniestros",
            "Pérdidas por no pago",
            "Tiempo de aprobación",
            "Tiempo de Recopilación",
            "Porcentaje de clientes Aprobados",
          ],
          reqFuncTitle: "Requerimientos Funcionales",
          reqFunc: [
            "Lista de documentos y criterios actualmente utilizados en el proceso de evaluación.",
            "Estandarización de proceso de evaluación de clientes, incluyendo responsables y definición de campos mínimos.",
          ],
          reqTechTitle: "Requerimientos Técnicos",
          reqTech: [
            "Acceso y documentación de API del ERP.",
            "Datos relevantes para el seguimiento de cobros y clientes dentro del sistema.",
          ],
          disclaimer: "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
        },
      },

      {
        key: "reingresos",
        title: "Automatización de Reingresos",
        tag: "Big Swing",
        left: {
          impactTitle: "Impacto",
          impactBody: "50 – 130 M Pesos Colombianos / Año",
          ahorroTitle: "Ahorro de Tiempo",
          ahorroBody: "Operativos dedicados a múltiples recuentos y digitalización pueden ahorrar entre 30–70% de su tiempo.",
          valorTitle: "Valor Añadido",
          valorBullets: [
            "Actualización inmediata en ERP al momento del reintegro.",
            "Herramientas para mejor planeación de stock y disponibilidad.",
            "Mayor Trazabilidad: quién reintegró, qué, cuándo, en qué estado, y con evidencia.",
          ],
        },
        right: {
          kpisTitle: "Otros KPI Relevantes de Éxito",
          kpis: [
            "Porcentaje de datos completos",
            "Latencia de Actualización de datos",
            "OTIF (On Time in Full)",
            "Fill-Rate",
            "Porcentaje Traslados de Emergencia",
            "Porcentaje de Negocios Perdidos por disponibilidad",
          ],
          reqFuncTitle: "Requerimientos Funcionales",
          reqFunc: [
            "Estandarizar flujo de trabajo de reingresos para todas las sedes, incluyendo datos obligatorios de reintegro, responsables y estados.",
          ],
          reqTechTitle: "Requerimientos Técnicos",
          reqTech: [
            "Acceso y documentación API del ERP para actualizar movimientos.",
            "Datos relevantes de proyectos en curso para Integración a nivel nacional.",
          ],
          disclaimer: "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
        },
      },

      {
        key: "forecasting",
        title: "Forecasting de Alquiler y Ventas",
        tag: "Big Swing",
        left: {
          impactTitle: "Impacto",
          impactBody:
            "• 5–15% Reducción de Pérdidas por Disponibilidad\n• 10–20% Reducción de costos de Logística de Emergencia\n• 5–10% Reducción de costos de Stock Estacionario",
          ahorroTitle: "Ahorro de Tiempo",
          ahorroBody: "Ahorro sustancial de tiempo en el personal de planeación en un 5–20% FTE.",
          valorTitle: "Valor Añadido",
          valorBullets: ["Criterios para definir un Stock de Seguridad", "Optimización de traslados"],
        },
        right: {
          kpisTitle: "Otros KPI relevantes de Éxito",
          kpis: [
            "OTIF (On Time in Full), Fill-Rate",
            "Porcentaje de Inventario Estacionario",
            "Stock de Seguridad",
            "Latencia de Información",
            "Porcentaje de Datos Completos",
            "Porcentaje de Negocios Perdidos por Disponibilidad",
          ],
          reqFuncTitle: "Requerimientos Funcionales",
          reqFunc: ["Criterios y proceso actual de planeación de Stock de Seguridad, Predicción de demanda y alquiler."],
          reqTechTitle: "Requerimientos Técnicos",
          reqTech: [
            "Datos relevantes del ciclo de vida de los productos en ERP, movimientos de inventario, órdenes, e históricos de alquiler y venta.",
            "Catálogo de productos / Familias.",
          ],
          disclaimer: "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
        },
      },

      {
        key: "rendimiento",
        title: "Medición de Rendimiento Humano",
        tag: "Nice to Have",
        left: {
          impactTitle: "Impacto",
          impactBody: "54 – 216 M Pesos Colombianos / Año",
          ahorroTitle: "Ahorro de Tiempo",
          ahorroBody:
            "La optimización de labores en la zona de Cargue y Descargue permitiría un aumento de 5–15% en la Capacidad Efectiva",
          valorTitle: "Valor Añadido",
          valorBullets: [
            "Potencial mejora en la planeación de tareas y objetivos diarios en el área operativa.",
            "Mejora de cultura corporativa mediante incentivos económicos por individuo y equipo.",
          ],
        },
        right: {
          kpisTitle: "Otros KPI relevantes de Éxito",
          kpis: [
            "Porcentaje de Actividades Registradas",
            "Porcentaje de Datos Completos",
            "Tareas por Hora",
            "Promedio de Tareas por Hora",
            "Eficiencia",
          ],
          reqFuncTitle: "Requerimientos Funcionales",
          reqFunc: [
            "Definir campos obligatorios de tareas estándar",
            "Definir reglas de medición: pausas, tiempos improductivos, cambio de tarea, reasignaciones.",
            "Definir objetivos por turno (plan diario) y causas de desviación (motivos predefinidos).",
            "Criterios actuales para cálculo de eficiencia.",
          ],
          reqTechTitle: "Requerimientos Técnicos",
          reqTech: ["Datos operativos relevantes de los trabajadores, tareas,"],
          disclaimer: "Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.",
        },
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(dives[0]?.key ?? "digitalizacion");
  const active = useMemo(() => dives.find((d) => d.key === activeKey) ?? dives[0], [dives, activeKey]);

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Deep Dives</h1>

        {/* SELECTOR */}
        <div className="mt-8 flex flex-wrap gap-3">
          {dives.map((d) => {
            const isActive = d.key === activeKey;
            return (
              <button
                key={d.key}
                onClick={() => setActiveKey(d.key)}
                className={[
                  "px-4 py-2 rounded-md border text-lg md:text-xl transition",
                  isActive ? "bg-black text-white border-black" : "bg-white text-black border-gray-300 hover:border-black",
                ].join(" ")}
              >
                {d.title}
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="mt-10 relative border border-black bg-white">
          <CornerTag tag={active.tag} />

          <div className="p-6 md:p-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">{active.title}</h2>
          </div>

          {/* Two columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[42%_1px_58%]">
            <BluePanel dive={active} />

            {/* divider (desktop only) */}
            <div className="hidden lg:block bg-black" />

            <RightPanel dive={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepDivesPage;