// components/DigitalStatus.tsx
import React from "react";
import RadarChart from "./RadarChart";

type RadarDatum = { label: string; value: number };

const DigitalStatus: React.FC = () => {
  // Basado en la lámina: baja madurez (1–2) con más fuerza en Assets & Data y Process Digitalization
  const radarData: RadarDatum[] = [
    { label: "Governance", value: 1 },
    { label: "Assets & Data", value: 2.0 },
    { label: "Process\nDigitalization", value: 2.0 },
    { label: "Monitoring &\nAnalytics", value: 1 },
    { label: "Agility &\nImprovement", value: 1 },
  ];

  return (
    <div className="space-y-8 md:space-y-16 animate-in fade-in duration-700">
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Digitalización
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-gray-500 font-bold">
            Diagnóstico basado en NIST Cybersecurity Framework (CSF) 2.0 —{" "}
            <a
              className="text-xactus underline underline-offset-4"
              href="https://doi.org/10.6028/NIST.CSWP.29"
              target="_blank"
              rel="noreferrer"
            >
              https://doi.org/10.6028/NIST.CSWP.29
            </a>
          </div>

          <div className="inline-flex items-center gap-3">
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-gray-400">
              Score
            </span>
            <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">
              38.75
            </span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest bg-red-50 text-red-600 px-3 py-1 rounded-full">
              Baja Digitalización
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* Izquierda: Radar + tarjeta resumen */}
        <div className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-gray-400">
                Índice de Madurez Digital (DMI)
              </div>
              <div className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900">
                Radar de Capacidades
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Nivel
              </div>
              <div className="text-2xl md:text-3xl font-black text-xactus tracking-tighter">
                1–2
              </div>
            </div>
          </div>

          <div className="text-xactus">
            <RadarChart data={radarData} maxValue={4} size={420} />
          </div>

          <div className="mt-8 grid grid-cols-1">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="font-bold text-gray-800 leading-relaxed">
                La organización opera con digitalización parcial: hay señales de
                gestión de datos y procesos, pero la gobernanza, el monitoreo y
                la mejora continua aún son débiles.
              </p>
            </div>

          </div>
        </div>

        {/* Derecha: preguntas guía + niveles */}
        <div className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]">
          <h4 className="text-lg md:text-xl font-black text-gray-900 uppercase mb-6 tracking-tighter">
            Dimensiones evaluadas
          </h4>

          <ul className="space-y-5 text-gray-800 font-bold leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              <div>
                <span className="text-gray-900">Gobernanza</span> — ¿Está la
                gobernanza digital definida formalmente y alineada con la
                estrategia?
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              <div>
                <span className="text-gray-900">Activos y Datos</span> — ¿Son
                los activos digitales y datos inventariados y administrados?
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              <div>
                <span className="text-gray-900">
                  Digitalización de Procesos
                </span>{" "}
                — ¿Son los procesos principales soportados digitalmente y
                estandarizados?
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              <div>
                <span className="text-gray-900">Monitoreo y Analítica</span> —
                ¿Existe monitoreo digital y analítica de datos?
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gray-300 shrink-0" />
              <div>
                <span className="text-gray-900">Agilidad y Mejora</span> — ¿La
                organización mejora continuamente utilizando datos?
              </div>
            </li>
          </ul>

          <div className="mt-10 border-t border-gray-100 pt-8">
            <h5 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-gray-400 mb-4">
              Escala de madurez (1–4)
            </h5>

            <div className="space-y-3 text-gray-700 font-bold">
              <div>
                <span className="text-gray-900">1: Parcial / Adhoc</span> —{" "}
                <span className="text-gray-500">
                  Manual, Reactivo, Fragmentado
                </span>
              </div>
              <div>
                <span className="text-gray-900">2: Riesgos Informados</span> —{" "}
                <span className="text-gray-500">Uso Inconsistente, Básico</span>
              </div>
              <div>
                <span className="text-gray-900">3: Repetible</span> —{" "}
                <span className="text-gray-500">
                  Estandarizado, Procesos Integrados
                </span>
              </div>
              <div>
                <span className="text-gray-900">4: Adaptativo</span> —{" "}
                <span className="text-gray-500">
                  Automatizado, Optimizado, <i>Data Driven</i>
                </span>
              </div>
            </div>

            <div className="mt-8 bg-xactus text-white p-6 rounded-2xl">
              <div className="text-[10px] font-black uppercase tracking-[0.35em] opacity-80 mb-2">
                Recomendación inmediata
              </div>
              <div className="font-black text-xl md:text-2xl tracking-tighter">
                Priorizar estandarización + señal de datos + monitoreo
              </div>
              <p className="mt-2 font-bold opacity-90 leading-relaxed">
                Subir de 1–2 a 2–3 requiere: inventario de datos, procesos
                soportados digitalmente, y analítica operativa para decisiones
                rápidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStatus;
