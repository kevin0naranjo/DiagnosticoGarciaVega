import React, { useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  bullets: string[];
  outcome: string[];
  kpis: string[];
  reqFunc: string[];
  reqTech: string[];
};

export default function DisrupcionPage() {
  const items: Item[] = useMemo(
    () =>[
      {
        id: "estaciones-carga",
        title: "Estructuras Modulares para Estaciones de Carga",
        subtitle: "Infraestructura escalable y rápida de desplegar",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/estaciones-carga.png",
        bullets:[
          "Sistema modular para cubrir múltiples configuraciones de cargadores (AC/DC) y potencias.",
          "Diseño pensado para montaje rápido, mantenimiento sencillo y expansión por etapas.",
          "Estandarización de piezas para reducir costos, tiempos de fabricación y logística.",
        ],
        outcome:[
          "Disminución del tiempo de instalación por estación.",
          "Catálogo de módulos estandarizados (bases, columnas, cubiertas, canalización, protecciones).",
          "Diseños listos para fabricación con variantes por clima/entorno (interior/exterior).",
        ],
        kpis:[
          "Tiempo de instalación (días/horas por estación)",
          "Costo por punto de carga",
          "Tasa de mantenimiento (MTTR)",
          "Disponibilidad del punto de carga (uptime)",
        ],
        reqFunc:[
          "Definir catálogo de módulos y configuraciones soportadas.",
          "Guías de montaje, inspección y mantenimiento.",
          "Criterios de seguridad/operación para entornos públicos y privados.",
        ],
        reqTech:[
          "Normas aplicables (seguridad eléctrica, viento, corrosión, anclajes).",
          "Planos y especificaciones de fabricación (acero, recubrimientos, tornillería).",
          "Interfaz con proveedores de cargadores (dimensiones, peso, disipación).",
        ],
      },
      {
        id: "smart-pole",
        title: "Smart Pole",
        subtitle: "Poste inteligente: energía + sensórica + conectividad",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/smart-pole.png",
        bullets:[
          "Integración de iluminación, cámaras, sensores ambientales, Wi-Fi y cargadores en un solo poste.",
          "Arquitectura modular para incluir o remover componentes según el caso de uso.",
          "Gestión centralizada: monitoreo, alertas y mantenimiento preventivo.",
        ],
        outcome:[
          "Prototipo funcional con módulos intercambiables.",
          "Especificación del BOM (lista de materiales) y variantes por ciudad/cliente.",
          "Base para licitar con entidades y constructoras (estandarización + escalabilidad).",
        ],
        kpis:[
          "Consumo energético por poste",
          "Disponibilidad de conectividad",
          "Eventos/alertas atendidas a tiempo",
          "Costo total de propiedad (TCO)",
        ],
        reqFunc:[
          "Definir casos de uso por segmento (seguridad, movilidad, parques, zonas comerciales).",
          "Panel de gestión: inventario de postes, módulos activos y estado.",
          "Flujo de mantenimiento: tickets, SLA y reposición de módulos.",
        ],
        reqTech:[
          "Diseño estructural y eléctrico del poste (canalizaciones, compartimientos, seguridad).",
          "Integración IoT (protocolos, gateway, firmware).",
          "Backend y tablero (telemetría, logs, alertas).",
        ],
      },
      {
        id: "disenador-acero",
        title: "Diseñador Estructural en Acero",
        subtitle: "Asistente/Plataforma para diseño y documentación técnica",
        mediaType: "video",
        mediaSrc: "/images/disrupcion/disenador-acero.mp4",
        bullets:[
          "Motor/Asistente para generar diseños preliminares, memorias y listas de corte.",
          "Plantillas para entregar planos y documentación de forma consistente.",
          "Estandariza criterios y reduce retrabajo en proyectos repetitivos.",
        ],
        outcome:[
          "Reducción de tiempos en prediseño y documentación.",
          "Mayor consistencia (normas, formatos, checklist).",
          "Base para una “fábrica de diseños” escalable con QA técnico.",
        ],
        kpis:[
          "Tiempo de prediseño (horas por proyecto)",
          "Retrabajos por observaciones",
          "Cumplimiento de checklist técnico",
          "Tiempo de entrega de planos",
        ],
        reqFunc:[
          "Definir entradas mínimas (cargas, luces, restricciones, normas aplicables).",
          "Flujo de aprobación: revisión técnica + sellado/entrega.",
          "Biblioteca de soluciones tipo (perfiles, conexiones, placas, uniones).",
        ],
        reqTech:[
          "Repositorio de plantillas (DWG/DXF/PDF) y generación automática de documentos.",
          "Reglas de cálculo / compatibilidad con software existente (si aplica).",
          "Trazabilidad: versión de diseño, cambios y responsables.",
        ],
      },
      {
        id: "marketplace",
        title: "Marketplace Dinámico",
        subtitle: "Optimización de tarifas según demanda, disponibilidad y operación",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/marketplace.png",
        bullets:[
          "Marketplace para publicar activos/servicios con disponibilidad real y reglas de negocio.",
          "Pricing dinámico por temporada, escasez, lead time, ubicación y uso histórico.",
          "Automatización de cotización → reserva → despacho → retorno → facturación.",
        ],
        outcome:[
          "Incremento de utilización de activos (más rotación rentable).",
          "Menor pérdida por disponibilidad falsa o demoras de respuesta.",
          "Información consolidada para forecast y planificación de inventario.",
        ],
        kpis:[
          "Utilización de activos (%)",
          "Conversión cotización → orden",
          "Tiempo de respuesta comercial",
          "Margen por orden / por activo",
        ],
        reqFunc:[
          "Gestión de catálogo + reglas de disponibilidad por sede.",
          "Motor de pricing: reglas + modelos + aprobaciones.",
          "Flujos de reserva, pagos, logística y devoluciones.",
        ],
        reqTech:[
          "Integración con ERP/CRM (clientes, inventario, órdenes, facturación).",
          "Auditoría de precios y trazabilidad de decisiones del motor.",
          "Infra de datos para forecast, elasticidad y A/B tests (si aplica).",
        ],
      },
      {
        id: "viviendas-modulares",
        title: "Viviendas Modulares en Acero",
        subtitle: "Industrialización de vivienda: diseño, fabricación y montaje",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/viviendas-modulares.png",
        bullets:[
          "Sistema modular para vivienda: crecimiento por módulos (1–N) y variantes de acabados.",
          "Estandarización de estructura, conexiones y rutas MEP (eléctrico/hidráulico).",
          "Modelo de costos y tiempos optimizado para producción repetible.",
        ],
        outcome:[
          "Catálogo de modelos (fichas técnicas, planos, renders y BOM).",
          "Reducción del tiempo total obra (fabricación + montaje).",
          "Base para escalar: alianzas, licitaciones y ventas B2B/B2C.",
        ],
        kpis:[
          "Tiempo de fabricación por módulo",
          "Tiempo de montaje en sitio",
          "Costo por m²",
          "Defectos / retrabajos post-montaje",
        ],
        reqFunc:[
          "Definir portafolio (tipologías, tamaños, acabados, opciones).",
          "Proceso comercial: cotización, personalización y contrato.",
          "Checklist de instalación y postventa.",
        ],
        reqTech:[
          "Diseño estructural + especificación de materiales (corrosión, clima).",
          "Planos de fabricación y control de calidad.",
          "Integración CAD/BOM con compras y producción (si aplica).",
        ],
      },
    ],[]
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700 font-sans pb-10">
      
      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          Disrupción
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-3xl">
          Proyectos con enfoque de producto, escalabilidad y repetibilidad técnica.
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
                "px-5 py-2.5 rounded-xl text-sm md:text-base font-bold transition-all duration-300",
                isActive
                  ? "bg-[#183f73] text-white shadow-md shadow-blue-900/20 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300",
              ].join(" ")}
            >
              {it.title}
            </button>
          );
        })}
      </div>

      {/* CONTENIDO DEL PROYECTO (Con animacion key para forzar re-render) */}
      <div key={active.id} className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start animate-in fade-in zoom-in-95 duration-500">
        
        {/* LADO IZQUIERDO: Media & Intro */}
        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm flex flex-col">
          <div className="bg-[#0e346a] px-6 py-5 text-white">
            <h2 className="text-xl md:text-2xl font-black leading-tight">
              {active.title}
            </h2>
            {active.subtitle && (
              <p className="mt-2 text-blue-100 font-medium text-sm md:text-base leading-snug">
                {active.subtitle}
              </p>
            )}
          </div>

          <div className="p-6 bg-gray-50/50">
            {active.mediaType === "image" ? (
              <div className="w-full">
                <img
                  src={active.mediaSrc}
                  alt={active.title}
                  className="w-full h-auto rounded-xl border border-gray-200 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-full">
                <video
                  src={active.mediaSrc}
                  controls
                  className="w-full rounded-xl border border-gray-200 shadow-sm"
                  preload="metadata"
                />
              </div>
            )}
          </div>
        </div>

        {/* LADO DERECHO: Detalles (Panel Dual) */}
        <div className="flex flex-col sm:flex-row bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
          
          {/* Panel Oscuro (Resumen y Resultados) */}
          <div className="w-full sm:w-1/2 bg-[#183f73] p-6 md:p-8 text-white flex flex-col gap-8">
            <div>
              <SectionTitleLight>Resumen</SectionTitleLight>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-blue-50 leading-relaxed">
                {active.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-blue-300 font-black mt-0.5">▪</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitleLight>Resultados Esperados</SectionTitleLight>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-blue-50 leading-relaxed">
                {active.outcome.map((b, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-blue-300 font-black mt-0.5">▪</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel Claro (KPIs y Requerimientos) */}
          <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col gap-8 bg-white">
            <div>
              <SectionTitleDark>KPIs de Éxito</SectionTitleDark>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
                {active.kpis.map((k, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[#1f5f9f] font-black mt-0.5">▪</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitleDark>Req. Funcionales</SectionTitleDark>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
                {active.reqFunc.map((k, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[#1f5f9f] font-black mt-0.5">▪</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitleDark>Req. Técnicos</SectionTitleDark>
              <ul className="mt-4 space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
                {active.reqTech.map((k, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[#1f5f9f] font-black mt-0.5">▪</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTNOTE GENERAL */}
      <div className="mt-8 bg-gray-50 border border-gray-100 text-gray-500 px-5 py-4 rounded-xl text-sm md:text-base font-medium flex items-start gap-3">
        <span className="text-lg leading-none mt-0.5">ℹ️</span>
        <p>
          Los requisitos y KPIs expuestos representan un caso de negocio preliminar y están sujetos a cambios conforme a iteraciones de diseño y validación técnica.
        </p>
      </div>

    </div>
  );
}

// Componentes auxiliares para títulos
function SectionTitleLight({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black tracking-wide text-white border-b border-white/20 pb-2">{children}</h3>;
}

function SectionTitleDark({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black tracking-wide text-gray-900 border-b border-gray-200 pb-2">{children}</h3>;
}