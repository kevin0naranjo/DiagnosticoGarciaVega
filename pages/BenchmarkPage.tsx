import React, { useMemo } from "react";

type ColKey = "metric" | "gv" | "eq" | "mega" | "ce";

type CellData = {
  value: string;
  colorClass?: string;
};

type Row = {
  metric: string;
  gv: CellData;
  eq: CellData;
  mega: CellData;
  ce: CellData;
};

const BenchmarkPage: React.FC = () => {
  // Ajuste de colores copiando el comportamiento visual de la imagen proporcionada
  const rows: Row[] = useMemo(
    () =>[
      {
        metric: "Velocidad en Móvil (0-100)",
        gv: { value: "41", colorClass: "text-red-500" },
        eq: { value: "61", colorClass: "text-yellow-500" },
        mega: { value: "39", colorClass: "text-red-500" },
        ce: { value: "57", colorClass: "text-yellow-500" },
      },
      {
        metric: "Velocidad en Escritorio (0-100)",
        gv: { value: "49", colorClass: "text-red-500" },
        eq: { value: "82", colorClass: "text-green-500" },
        mega: { value: "91", colorClass: "text-green-500" },
        ce: { value: "72", colorClass: "text-yellow-500" },
      },
      {
        metric: "Autoridad de Dominio (DA) (0-100)",
        gv: { value: "19" },
        eq: { value: "15" },
        mega: { value: "Sin Datos" },
        ce: { value: "14" },
      },
      {
        metric: "Palabras Clave Posicionadas",
        gv: { value: "14" },
        eq: { value: "3" },
        mega: { value: "Sin Datos" },
        ce: { value: "Sin Datos" },
      },
      {
        metric: "Tráfico Orgánico Mensual",
        gv: { value: "7.6K" },
        eq: { value: "2.6K" },
        mega: { value: "2.7K" },
        ce: { value: "8K" },
      },
    ],[]
  );

  const cols: { key: ColKey; label: string; align?: "left" | "center" }[] = useMemo(
    () =>[
      { key: "metric", label: "Métrica", align: "left" },
      { key: "gv", label: "García Vega", align: "center" },
      { key: "eq", label: "Equinorte", align: "center" },
      { key: "mega", label: "Megaequipos", align: "center" },
      { key: "ce", label: "CentralEquipos", align: "center" },
    ],[]
  );

  return (
    <div className="space-y-16 md:space-y-20 animate-in fade-in duration-700 font-sans">
      
      {/* SECCIÓN 1: Matriz SEO & Técnico */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
          Matriz de Rendimiento SEO & Técnico
        </h1>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-8">
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full border-collapse">
              <thead>
                <tr className="bg-[#0e346a] text-white">
                  {cols.map((c) => (
                    <th
                      key={c.key}
                      className={[
                        "px-4 py-4 text-sm md:text-base font-bold border border-gray-700/50",
                        c.align === "left" ? "text-left" : "text-center",
                      ].join(" ")}
                    >
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={idx} className="bg-white">
                    <td className="px-4 py-4 border border-gray-200 font-bold text-gray-900 text-sm md:text-base">
                      {r.metric}
                    </td>
                    <td className={`px-4 py-4 border border-gray-200 text-center font-medium text-base md:text-lg ${r.gv.colorClass || 'text-gray-900'}`}>
                      {r.gv.value}
                    </td>
                    <td className={`px-4 py-4 border border-gray-200 text-center font-medium text-base md:text-lg ${r.eq.colorClass || 'text-gray-900'}`}>
                      {r.eq.value}
                    </td>
                    <td className={`px-4 py-4 border border-gray-200 text-center font-medium text-base md:text-lg ${r.mega.colorClass || 'text-gray-900'}`}>
                      {r.mega.value}
                    </td>
                    <td className={`px-4 py-4 border border-gray-200 text-center font-medium text-base md:text-lg ${r.ce.colorClass || 'text-gray-900'}`}>
                      {r.ce.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Fuente unificada con la tipografía de la tabla */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 font-sans text-sm md:text-base text-gray-500 font-medium">
            Fuente: Google PageSpeed Insights, Moz Domain, SimilarWeb
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Factores Clave & Oportunidades */}
      <section className="space-y-8 pt-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
          Factores Clave & Oportunidades
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col justify-center space-y-4 pr-0 md:pr-8">
            <div className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              Actualmente el Sitio Web tiene <br/>
              <span className="text-[#1f4f87]">~7.6K Visitas Mensuales.</span>
            </div>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Priorizar, Monitorizar y Capitalizar correctamente el mercado Web puede incrementar las ventas.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl flex flex-col justify-center space-y-4">
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">▪</span>
              <p className="text-base md:text-lg text-gray-800">
                <span className="font-bold">Principal competidor:</span> Centralequipos con 8k de visitas mensuales.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">▪</span>
              <p className="text-base md:text-lg text-gray-800">
                <span className="font-bold">Baja velocidad web:</span> Puede llevar a una caída de posición en Google, lo que se traduce a pérdida de clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <ul className="space-y-3 text-base md:text-lg text-gray-800 leading-relaxed pl-2">
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Mejor UX/UI permite capitalizar las visitas al sitio web.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Proceso de compra es muy largo y complejo comparado con la competencia.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Mejorar Rendimiento web y SEO interno permite aumentar posicionamiento de frases clave.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN 3: Re Enfoque Estratégico */}
      <section className="space-y-8 pt-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
          Re Enfoque Estratégico
        </h2>

        <p className="text-xl md:text-2xl font-bold text-gray-900 leading-snug max-w-4xl">
          García Vega no solo Alquila / Vende Equipos, sino que reduce Tiempos, Riesgos y Costos con Ingeniería y Herramientas Tecnológicas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start pt-4">
          <ul className="space-y-3 text-base md:text-lg text-gray-800 leading-relaxed pl-2">
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Redirección de titulares en el Home</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Re-Arquitectura de los menús</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Inclusión de nuevas páginas con servicios apoyados por tecnología</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Casos de éxito estructurados con resultados (KPIs)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Demostración de Capacidad Digital</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Recursos descargables que generen Leads</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold mt-1">▪</span>
              <span>Conversión y Operación mediante formularios inteligentes, Agenda Online, Contacto con rutas, y FAQ.</span>
            </li>
          </ul>

          <div className="bg-gray-100 p-6 md:p-8 rounded-2xl">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
              Línea de Negocio Digital:
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-800">
              <li className="flex gap-3">
                <span className="font-bold mt-1">▪</span>
                <span>Incluir BIM / 3D</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold mt-1">▪</span>
                <span>Cotizadores Automáticos</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold mt-1">▪</span>
                <span>Diseño de Soluciones</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BenchmarkPage;