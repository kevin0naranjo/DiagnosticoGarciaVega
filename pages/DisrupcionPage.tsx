import React, { useMemo, useState } from "react";

type Item = {
  id: string;
  num: number;
  shortTitle: string;
  title: string;
  description: string[];
  extraBullets?: string[];
  techTitle?: string;
  techDesc: string;
  monetization: string;
  impact: string;
  risk: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
};

export default function DisrupcionPage() {
  const items: Item[] = useMemo(
    () =>[
      {
        id: "pricing-dinamico",
        num: 1,
        shortTitle: "Pricing Dinámico",
        title: "Pricing Dinámico para Alquiler",
        description:[
          "Implementación de un modelo algorítmico que ajuste precios en función de ocupación histórica, escasez por sede, urgencia del cliente y comportamiento de demanda.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Modelos predictivos básicos y reglas inteligentes integradas al sistema comercial.",
        monetization: "Optimización de margen por línea crítica sin modificar estructura de costos.",
        impact: "Incremento estimado de margen entre 3% y 8% en líneas de alta rotación.",
        risk: "Bajo – Extensión del modelo actual sin cambio estructural.",
      },
      {
        id: "torre-control",
        num: 2,
        shortTitle: "Torre de Control Digital",
        title: "Torre de Control Digital para Clientes Estratégicos",
        description:[
          "Desarrollo de un dashboard externo para clientes clave con visibilidad en tiempo real de inventario alquilado, consumo por obra y proyección de devoluciones.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Integración de datos operativos y analítica descriptiva.",
        monetization: "Mayor retención, aumento del share of wallet y diferenciación competitiva.",
        impact: "Reducción del riesgo de pérdida de clientes estratégicos y expansión comercial.",
        risk: "Bajo a Medio – Requiere adopción del cliente pero no altera el core operativo.",
      },
      {
        id: "iaas",
        num: 3,
        shortTitle: "Inventory as a Service",
        title: "Inventory as a Service (IaaS)",
        description:[
          "Modelo contractual basado en tarifa mensual por disponibilidad garantizada, en lugar de facturación exclusivamente por día.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Forecast predictivo y modelos de reposición inteligente.",
        monetization: "Ingresos recurrentes y mayor previsibilidad de flujo de caja.",
        impact: "Mejora en estabilidad financiera y fidelización de cuentas grandes.",
        risk: "Medio – Requiere precisión en forecast y control operativo.",
      },
      {
        id: "plataforma-b2b",
        num: 4,
        shortTitle: "Plataforma B2B",
        title: "Plataforma B2B para Alquiler/Reserva en Tiempo Real",
        description:[
          "Portal digital donde clientes pueden consultar disponibilidad real y reservar inventario anticipadamente.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Integración de inventario en tiempo real y motor de validación automática.",
        monetization: "Precio dinámico, reservas anticipadas y membresías corporativas.",
        impact: "Posicionamiento como operador digital líder en alquiler industrial regional.",
        risk: "Medio – Depende de madurez en calidad de datos.",
      },
      {
        id: "centro-inteligencia",
        num: 5,
        shortTitle: "Centro de Inteligencia",
        title: "Centro de Inteligencia de Obras y Demanda Sectorial",
        description:[
          "Creación de una unidad que consolide datos propios y fuentes externas para generar reportes predictivos del sector.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Analítica avanzada, scraping de datos públicos y modelos de proyección sectorial.",
        monetization: "Venta de reportes premium y alertas estratégicas.",
        impact: "Posicionamiento como referente informacional del sector.",
        risk: "Alto – Nuevo modelo de negocio informacional.",
      },
      {
        id: "disenador-estructural",
        num: 6,
        shortTitle: "Diseñador Estructural",
        title: "Proyectos en Acero mediante Diseñador Estructural",
        description:[
          "Solución de construcción en acero que facilita flujos de trabajo de construcción mediante una plataforma de diseño estructural en acero automatizada que permite múltiples configuraciones:",
          "▪ Diferentes tamaños (m²)\n▪ Niveles\n▪ Configuraciones Estructurales\n▪ Restricciones de Presupuesto",
        ],
        extraBullets:[
          "Estructuras en acero son un 5-10% más eficientes en términos de manejo de personal.",
          "Desperdicios de material para construcción en concreto pueden llegar a ser del 5-10%, mientras que en acero son del 2%.",
          "El montaje de estructuras de acero se realiza un 40% más rápido.",
          "Costos de administración, como vigilancia, seguros, y servicios, se reducen un 20% por la reducción de tiempo de obra.",
          "Existe ahorro potencial en interés bancario al terminar los proyectos antes.",
        ],
        techTitle: "Tecnología Habilitadora",
        techDesc: "Engine de diseño estructural, Integración de BIM y procesamiento de modelado, Modelo de costos y materiales, Interfaz de simulación de escenarios.",
        monetization: "Aceleración de demanda y ventas de acero estructural, renta de equipos, servicios especializados de ingeniería.",
        impact: "Diferenciador como innovador tecnológico en construcción y diseño de estructuras en acero. Posicionamiento a largo plazo como una plataforma de construcción basada en tecnología.",
        risk: "Alto – Extensión del modelo actual sin cambio estructural, pero con alta complejidad tecnológica y requisitos de inversión.",
        mediaType: "video",
        mediaSrc: "/images/disrupcion/disenador-acero.mp4",
      },
      {
        id: "habitat-gv",
        num: 7,
        shortTitle: "Hábitat GV",
        title: "Hábitat GV: Disrupción Modular",
        description:[
          "Solución de paquetización integral que consiste en:",
          "Diseño BIM/BEM + Fabricación + Instalación - \"Llave en Mano\"",
        ],
        techTitle: "Desestacionalización",
        techDesc: "Crea una línea de ingresos que no depende exclusivamente del ciclo de las grandes constructoras nacionales.",
        monetization: "El diseño y la marca \"vivienda premium\" permiten márgenes significativamente superiores a la fabricación de estructuras estándar.",
        impact: "Estos módulos pueden ser exportados (aprovechando la visión de internacionalización hacia USA/Canadá), vendiéndose como kits de ensamblaje rápido en mercados con mano de obra costosa.",
        risk: "Alto",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/modular.png",
      },
    ],
    []
  );

  const[activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className="space-y-10 md:space-y-12 animate-in fade-in duration-700 font-sans pb-10">
      
      {/* HEADER MARCO ESTRATÉGICO */}
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-tight">
          Marco Estratégico
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 font-bold max-w-5xl leading-snug">
          Capturar mayor valor del negocio mediante modelos de ingresos inteligentes, optimización de margen, y monetización de información.
        </p>
      </div>

      {/* SELECTOR (Pills Navigation) */}
      <div className="flex flex-wrap gap-3">
        {items.map((it) => {
          const isActive = it.id === activeId;
          return (
            <button
              key={it.id}
              onClick={() => setActiveId(it.id)}
              className={[
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all duration-300",
                isActive
                  ? "bg-[#183f73] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300",
              ].join(" ")}
            >
              <span className={[
                "w-7 h-7 flex items-center justify-center rounded-lg text-xs",
                isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              ].join(" ")}>
                {it.num}
              </span>
              {it.shortTitle}
            </button>
          );
        })}
      </div>

      {/* CONTENIDO DEL PROYECTO */}
      <div key={active.id} className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-6 items-stretch animate-in fade-in zoom-in-95 duration-500">
        
        {/* LADO IZQUIERDO: Contexto y Media */}
        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm flex flex-col">
          <div className="bg-[#0e346a] px-6 py-5 text-white flex justify-between items-center gap-4">
            <h2 className="text-xl md:text-2xl font-black leading-tight">
              {active.title}
            </h2>
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-xl font-black text-xl">
              {active.num}
            </div>
          </div>

          <div className="flex flex-col flex-1 p-6 md:p-8 bg-gray-50/50">
            {/* Si existe media, lo renderizamos arriba */}
            {active.mediaSrc && (
              <div className="mb-6 w-full">
                {active.mediaType === "image" ? (
                  <img
                    src={active.mediaSrc}
                    alt={active.title}
                    className="w-full h-auto rounded-xl border border-gray-200 shadow-sm object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={active.mediaSrc}
                    controls
                    className="w-full rounded-xl border border-gray-200 shadow-sm"
                    preload="metadata"
                  />
                )}
              </div>
            )}

            {/* Descripción */}
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed font-medium whitespace-pre-line">
              {active.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Bullets Adicionales (Ej: Diseñador Estructural) */}
            {active.extraBullets && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <ul className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  {active.extraBullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#183f73] font-black mt-0.5">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* LADO DERECHO: Detalles Estratégicos (Paneles Oscuro y Claro) */}
        <div className="flex flex-col sm:flex-row bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
          
          {/* Panel Oscuro (Impacto y Riesgo) */}
          <div className="w-full sm:w-1/2 bg-[#1f4f87] p-6 md:p-8 text-white flex flex-col gap-10">
            <div>
              <SectionTitleLight>Impacto Estratégico</SectionTitleLight>
              <p className="mt-4 text-base md:text-[18px] text-blue-50 leading-relaxed font-medium">
                {active.impact}
              </p>
            </div>

            <div>
              <SectionTitleLight>Nivel de Riesgo</SectionTitleLight>
              <p className="mt-4 text-base md:text-[18px] text-blue-50 leading-relaxed font-medium">
                {active.risk}
              </p>
            </div>
          </div>

          {/* Panel Claro (Tecnología y Monetización) */}
          <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col gap-10 bg-white">
            <div>
              <SectionTitleDark>{active.techTitle || "Tecnología Habilitadora"}</SectionTitleDark>
              <p className="mt-4 text-base md:text-[18px] text-gray-600 leading-relaxed font-medium">
                {active.techDesc}
              </p>
            </div>

            <div>
              <SectionTitleDark>Modelo de Monetización</SectionTitleDark>
              <p className="mt-4 text-base md:text-[18px] text-gray-600 leading-relaxed font-medium">
                {active.monetization}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Componentes auxiliares para títulos de sección (Adaptados a los de tus diapositivas)
function SectionTitleLight({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl md:text-2xl font-black tracking-tight text-white border-b-2 border-white/20 pb-3">
      {children}
    </h3>
  );
}

function SectionTitleDark({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 border-b-2 border-gray-200 pb-3">
      {children}
    </h3>
  );
}
