import React, { useMemo } from "react";

type ColKey = "metric" | "gv" | "eq" | "mega" | "ce";

type Row = {
  metric: string;
  gv: string;
  eq: string;
  mega: string;
  ce: string;
};

const BenchmarkPage: React.FC = () => {
  const rows: Row[] = useMemo(
    () => [
      {
        metric: "Velocidad en Móvil (0-100)",
        gv: "41",
        eq: "61",
        mega: "39",
        ce: "57",
      },
      {
        metric: "Velocidad en Escritorio (0-100)",
        gv: "49",
        eq: "82",
        mega: "91",
        ce: "72",
      },
      {
        metric: "Autoridad de Dominio (DA) (0-100)",
        gv: "19",
        eq: "15",
        mega: "Sin Datos",
        ce: "14",
      },
      {
        metric: "Palabras Clave Posicionadas",
        gv: "14",
        eq: "3",
        mega: "Sin Datos",
        ce: "Sin Datos",
      },
      {
        metric: "Tráfico Orgánico Mensual",
        gv: "7.6K",
        eq: "2.6K",
        mega: "2.7K",
        ce: "8K",
      },
    ],
    []
  );

  const cols: { key: ColKey; label: string; align?: "left" | "center" }[] = useMemo(
    () => [
      { key: "metric", label: "Métrica", align: "left" },
      { key: "gv", label: "Garcia Vega", align: "center" },
      { key: "eq", label: "Equinorte", align: "center" },
      { key: "mega", label: "Megaequipos", align: "center" },
      { key: "ce", label: "CentralEquipos", align: "center" },
    ],
    []
  );

  return (
    <div className="space-y-14 md:space-y-20 animate-in fade-in duration-700">
      {/* SLIDE 1: Matriz SEO & Técnico */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900">
          Matriz de Rendimiento SEO &amp; Técnico
        </h1>

        <div className="text-xl md:text-3xl text-gray-700">
          Principal competidor: <span className="font-medium">Centralequipos</span>
        </div>

        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-[#183f73] text-white">
                  {cols.map((c) => (
                    <th
                      key={c.key}
                      className={[
                        "px-6 py-5 text-base md:text-lg font-black border border-black/20",
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
                    <td className="px-6 py-6 border border-black/20 font-semibold text-gray-900">
                      {r.metric}
                    </td>
                    <td className="px-6 py-6 border border-black/20 text-center text-xl md:text-2xl text-gray-900">
                      {r.gv}
                    </td>
                    <td className="px-6 py-6 border border-black/20 text-center text-xl md:text-2xl text-gray-900">
                      {r.eq}
                    </td>
                    <td className="px-6 py-6 border border-black/20 text-center text-xl md:text-2xl text-gray-900">
                      {r.mega}
                    </td>
                    <td className="px-6 py-6 border border-black/20 text-center text-xl md:text-2xl text-gray-900">
                      {r.ce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-6 text-gray-500 text-lg md:text-2xl">
            Fuente: Google PageSpeed Insights, Moz Domain, SimilarWeb
          </div>
        </div>
      </section>

      {/* SLIDE 2: Benchmark bullets */}
      <section className="space-y-10">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900">
          Benchmark
        </h2>

        <ul className="space-y-10 text-2xl md:text-5xl text-gray-900 leading-tight">
          <li className="flex gap-6">
            <span className="mt-2">•</span>
            <span>
              En líderes de alquiler, la ventaja no es “tener inventario”: es saber
              disponibilidad real en tiempo casi real.
            </span>
          </li>
          <li className="flex gap-6">
            <span className="mt-2">•</span>
            <span>
              La operación se gobierna con: estados estándar del activo + trazabilidad
              del pedido/retorno + señales comerciales.
            </span>
          </li>
          <li className="flex gap-6">
            <span className="mt-2">•</span>
            <span>
              La predicción (forecast) solo funciona cuando el ciclo “evento → dato” está cerrado.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BenchmarkPage;