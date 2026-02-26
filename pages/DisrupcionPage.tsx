// src/pages/DisrupcionPage.tsx
import React, { useMemo, useState } from "react";

type Item = {
  id: string;
  title: string;
  subtitle?: string;
  mediaType: "image" | "video";
  mediaSrc: string; // rutas tipo /images/disrupcion/xxx.png  o /images/disrupcion/xxx.mp4
  bullets: string[];
  outcome: string[];
  kpis: string[];
  reqFunc: string[];
  reqTech: string[];
};

const NAVY = "#0F3B68";

/**
 * Coloca tus archivos así:
 *  - public/images/disrupcion/estaciones-carga.png
 *  - public/images/disrupcion/smart-pole.png
 *  - public/images/disrupcion/disenador-acero.mp4   (video)
 *  - public/images/disrupcion/marketplace.png
 *  - public/images/disrupcion/viviendas-modulares.png
 *
 * En el caso del diseñador, si quieres solo cambiar a otra ruta, reemplaza mediaSrc.
 */
export default function DisrupcionPage() {
  const items: Item[] = useMemo(
    () => [
      {
        id: "estaciones-carga",
        title: "Estructuras Modulares para Estaciones de Carga Eléctrica",
        subtitle: "Infraestructura escalable y rápida de desplegar",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/estaciones-carga.png",
        bullets: [
          "Sistema modular para cubrir múltiples configuraciones de cargadores (AC/DC) y potencias.",
          "Diseño pensado para montaje rápido, mantenimiento sencillo y expansión por etapas.",
          "Estandarización de piezas para reducir costos, tiempos de fabricación y logística.",
        ],
        outcome: [
          "Disminución del tiempo de instalación por estación.",
          "Catálogo de módulos estandarizados (bases, columnas, cubiertas, canalización, protecciones).",
          "Diseños listos para fabricación con variantes por clima/entorno (interior/exterior).",
        ],
        kpis: [
          "Tiempo de instalación (días/horas por estación)",
          "Costo por punto de carga",
          "Tasa de mantenimiento (MTTR)",
          "Disponibilidad del punto de carga (uptime)",
        ],
        reqFunc: [
          "Definir catálogo de módulos y configuraciones soportadas.",
          "Guías de montaje, inspección y mantenimiento.",
          "Criterios de seguridad/operación para entornos públicos y privados.",
        ],
        reqTech: [
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
        bullets: [
          "Integración de iluminación, cámaras, sensores ambientales, Wi-Fi y cargadores en un solo poste.",
          "Arquitectura modular para incluir o remover componentes según el caso de uso.",
          "Gestión centralizada: monitoreo, alertas y mantenimiento preventivo.",
        ],
        outcome: [
          "Prototipo funcional con módulos intercambiables.",
          "Especificación del BOM (lista de materiales) y variantes por ciudad/cliente.",
          "Base para licitar con entidades y constructoras (estandarización + escalabilidad).",
        ],
        kpis: [
          "Consumo energético por poste",
          "Disponibilidad de conectividad",
          "Eventos/alertas atendidas a tiempo",
          "Costo total de propiedad (TCO)",
        ],
        reqFunc: [
          "Definir casos de uso por segmento (seguridad, movilidad, parques, zonas comerciales).",
          "Panel de gestión: inventario de postes, módulos activos y estado.",
          "Flujo de mantenimiento: tickets, SLA y reposición de módulos.",
        ],
        reqTech: [
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
        bullets: [
          "Motor/Asistente para generar diseños preliminares, memorias y listas de corte.",
          "Plantillas para entregar planos y documentación de forma consistente.",
          "Estandariza criterios y reduce retrabajo en proyectos repetitivos.",
        ],
        outcome: [
          "Reducción de tiempos en prediseño y documentación.",
          "Mayor consistencia (normas, formatos, checklist).",
          "Base para una “fábrica de diseños” escalable con QA técnico.",
        ],
        kpis: [
          "Tiempo de prediseño (horas por proyecto)",
          "Retrabajos por observaciones",
          "Cumplimiento de checklist técnico",
          "Tiempo de entrega de planos",
        ],
        reqFunc: [
          "Definir entradas mínimas (cargas, luces, restricciones, normas aplicables).",
          "Flujo de aprobación: revisión técnica + sellado/entrega.",
          "Biblioteca de soluciones tipo (perfiles, conexiones, placas, uniones).",
        ],
        reqTech: [
          "Repositorio de plantillas (DWG/DXF/PDF) y generación automática de documentos.",
          "Reglas de cálculo / compatibilidad con software existente (si aplica).",
          "Trazabilidad: versión de diseño, cambios y responsables.",
        ],
      },
      {
        id: "marketplace",
        title: "Plataforma de Alquiler/Marketplace con Pricing Dinámico",
        subtitle: "Optimización de tarifas según demanda, disponibilidad y operación",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/marketplace.png",
        bullets: [
          "Marketplace para publicar activos/servicios con disponibilidad real y reglas de negocio.",
          "Pricing dinámico por temporada, escasez, lead time, ubicación y uso histórico.",
          "Automatización de cotización → reserva → despacho → retorno → facturación.",
        ],
        outcome: [
          "Incremento de utilización de activos (más rotación rentable).",
          "Menor pérdida por disponibilidad falsa o demoras de respuesta.",
          "Información consolidada para forecast y planificación de inventario.",
        ],
        kpis: [
          "Utilización de activos (%)",
          "Conversión cotización → orden",
          "Tiempo de respuesta comercial",
          "Margen por orden / por activo",
        ],
        reqFunc: [
          "Gestión de catálogo + reglas de disponibilidad por sede.",
          "Motor de pricing: reglas + modelos + aprobaciones.",
          "Flujos de reserva, pagos, logística y devoluciones.",
        ],
        reqTech: [
          "Integración con ERP/CRM (clientes, inventario, órdenes, facturación).",
          "Auditoría de precios y trazabilidad de decisiones del motor.",
          "Infra de datos para forecast, elasticidad y A/B tests (si aplica).",
        ],
      },
      {
        id: "viviendas-modulares",
        title: "Línea de Viviendas Modulares en Acero",
        subtitle: "Industrialización de vivienda: diseño, fabricación y montaje",
        mediaType: "image",
        mediaSrc: "/images/disrupcion/viviendas-modulares.png",
        bullets: [
          "Sistema modular para vivienda: crecimiento por módulos (1–N) y variantes de acabados.",
          "Estandarización de estructura, conexiones y rutas MEP (eléctrico/hidráulico).",
          "Modelo de costos y tiempos optimizado para producción repetible.",
        ],
        outcome: [
          "Catálogo de modelos (fichas técnicas, planos, renders y BOM).",
          "Reducción del tiempo total obra (fabricación + montaje).",
          "Base para escalar: alianzas, licitaciones y ventas B2B/B2C.",
        ],
        kpis: [
          "Tiempo de fabricación por módulo",
          "Tiempo de montaje en sitio",
          "Costo por m²",
          "Defectos / retrabajos post-montaje",
        ],
        reqFunc: [
          "Definir portafolio (tipologías, tamaños, acabados, opciones).",
          "Proceso comercial: cotización, personalización y contrato.",
          "Checklist de instalación y postventa.",
        ],
        reqTech: [
          "Diseño estructural + especificación de materiales (corrosión, clima).",
          "Planos de fabricación y control de calidad.",
          "Integración CAD/BOM con compras y producción (si aplica).",
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Disrupción</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Proyectos con enfoque de producto, escalabilidad y repetibilidad (módulos, estándares y operación medible).
        </p>

        {/* Selector */}
        <div className="mt-8 flex flex-wrap gap-2">
          {items.map((it) => {
            const isActive = it.id === activeId;
            return (
              <button
                key={it.id}
                onClick={() => setActiveId(it.id)}
                className={[
                  "px-3 py-2 rounded-full border text-sm md:text-[14px] transition",
                  isActive ? "text-white" : "bg-white text-gray-900 hover:bg-gray-50",
                ].join(" ")}
                style={{
                  borderColor: isActive ? NAVY : "#111827",
                  background: isActive ? NAVY : undefined,
                }}
              >
                {it.title}
              </button>
            );
          })}
        </div>

        {/* Contenido */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Media */}
          <div className="w-full">
            <div className="bg-white border border-black overflow-hidden">
              <div
                className="px-4 py-3 text-white font-semibold border-b border-black"
                style={{ background: NAVY }}
              >
                {active.title}
              </div>

              <div className="p-4">
                {active.subtitle && <div className="text-gray-700 mb-4">{active.subtitle}</div>}

                {active.mediaType === "image" ? (
                  <div className="w-full">
                    <img
                      src={active.mediaSrc}
                      alt={active.title}
                      className="w-full h-auto border border-black"
                      loading="lazy"
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      Archivo: <span className="font-mono">{active.mediaSrc}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <video
                      src={active.mediaSrc}
                      controls
                      className="w-full border border-black"
                      preload="metadata"
                    />
                    <div className="mt-2 text-xs text-gray-500">
                      Video: <span className="font-mono">{active.mediaSrc}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Texto estilo “Impacto / Ahorro / Valor + KPIs + Reqs” */}
          <div className="w-full">
            <div className="bg-white border border-black overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left panel (navy) */}
                <div className="p-6 text-white border-b md:border-b-0 md:border-r border-black" style={{ background: NAVY }}>
                  <SectionTitleLight>Resumen</SectionTitleLight>
                  <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                    {active.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <SectionTitleLight>Resultados esperados</SectionTitleLight>
                    <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                      {active.outcome.map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right panel */}
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <SectionTitleDark>Otros KPI relevantes de éxito</SectionTitleDark>
                      <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                        {active.kpis.map((k, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1">▪</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <SectionTitleDark>Requerimientos Funcionales</SectionTitleDark>
                      <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                        {active.reqFunc.map((k, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1">▪</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <SectionTitleDark>Requerimientos Técnicos</SectionTitleDark>
                      <ul className="mt-3 space-y-2 text-[15px] leading-snug">
                        {active.reqTech.map((k, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1">▪</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 bg-gray-100 border border-gray-200 px-4 py-3 text-gray-700">
                    Los requisitos y KPIs expuestos están sujetos a cambios y ajustes conforme posteriores reuniones y validaciones.
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitleLight({ children }: { children: React.ReactNode }) {
  return <div className="text-xl font-bold">{children}</div>;
}

function SectionTitleDark({ children }: { children: React.ReactNode }) {
  return <div className="text-xl font-bold text-gray-900">{children}</div>;
}