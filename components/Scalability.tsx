import React from "react";
import { motion } from "framer-motion";

const Scalability: React.FC = () => {
  const ladder = [
    {
      step: "01",
      title: "Señal Comercial (Habilitador)",
      bullets: [
        "Cotización estándar (campos obligatorios)",
        "Trazabilidad cliente → pedido → proyecto",
        "KPIs: latencia, completitud",
      ],
      tag: "Habilitador",
    },
    {
      step: "02",
      title: "Disponibilidad Real (Habilitador)",
      bullets: [
        "Inventario comprometido por cotización",
        "Reglas: vencimiento, prioridades, sustitutos",
        "KPIs: OTIF, fill-rate, negocios perdidos",
      ],
      tag: "Habilitador",
    },
    {
      step: "03",
      title: "Cierre del Ciclo del Activo (Habilitador)",
      bullets: [
        "Reingresos digitales + update inmediato ERP",
        "Conexión inter-áreas (alertas + dashboard)",
        "KPIs: completitud, ciclo, reproceso",
      ],
      tag: "Habilitador",
    },
    {
      step: "04",
      title: "Forecasting (Resultado)",
      bullets: [
        "ETL + dataset confiable",
        "Demanda 1–4 semanas",
        "Retornos probables + recomendación traslados",
      ],
      tag: "Cumbre",
    },
  ];

  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in duration-700">
      <header className="max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">
            Escalabilidad
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Forecasting necesita <span className="text-xactus">habilitadores</span>
        </h2>
        <p className="mt-5 text-base md:text-lg font-medium text-gray-500 max-w-3xl">
          La ruta no es “comprar IA”. Es cerrar señal + dato operativo + ciclo del activo. Ahí sí, el forecast genera valor real.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {ladder.map((x, i) => (
          <motion.div
            key={x.step}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden bg-white border border-gray-100"
          >
            <div className="absolute top-0 right-0 p-8 text-xactus opacity-[0.04] font-black text-8xl pointer-events-none">
              {x.step}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
                  Paso
                </span>
                <span
                  className={[
                    "text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                    x.tag === "Cumbre"
                      ? "bg-xactus text-white border-xactus"
                      : "bg-blue-50 text-xactus border-blue-100",
                  ].join(" ")}
                >
                  {x.tag}
                </span>
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900">
                {x.title}
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 font-medium">
                {x.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-[7px] text-[10px] text-xactus">■</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-900 text-white p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl">
        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-xactus">
          Regla de oro
        </h4>
        <p className="mt-5 text-lg md:text-2xl font-medium opacity-85 max-w-4xl leading-relaxed">
          Si el dato llega tarde o incompleto, la IA solo automatiza la incertidumbre. Primero habilitamos captura + trazabilidad.
        </p>
      </div>
    </div>
  );
};

export default Scalability;
