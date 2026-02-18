// components/Benchmark.tsx
import React from "react";

const Benchmark: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-16 animate-in fade-in duration-700">
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
        Performance <span className="text-xactus">Bench</span>
      </h2>

      <div className="brutal-card rounded-[2rem] md:rounded-[3.5rem] overflow-hidden p-4 md:p-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-bold uppercase tracking-widest text-[9px] md:text-[11px] min-w-[500px]">
            <thead className="bg-gray-50 text-gray-400">
              <tr className="border-b border-gray-100">
                <th className="p-6 md:p-10">Métrica</th>
                <th className="p-6 md:p-10 text-xactus">García Vega</th>
                <th className="p-6 md:p-10">Sector Avg</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-base md:text-lg font-black text-gray-900">
              {[
                { l: "Digitalización", g: "38.75%", a: "45%" },
                { l: "Retornos Latencia", g: "Altos", a: "Baja" },
                { l: "Automatización", g: "Nivel 1", a: "Nivel 3" },
              ].map((r, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 md:p-10 tracking-tighter uppercase">
                    {r.l}
                  </td>
                  <td className="p-6 md:p-10 text-xactus text-xl md:text-2xl">
                    {r.g}
                  </td>
                  <td className="p-6 md:p-10 text-gray-400">{r.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Benchmark;
