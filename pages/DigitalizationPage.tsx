import React, { useMemo } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type Dim = { label: string; value: number };

const DigitalizationPage: React.FC = () => {
  const dims: Dim[] = useMemo(
    () =>[
      { label: "Governance", value: 1.0 },
      { label: "Assets & Data", value: 2.0 },
      { label: "Process\nDigitalization", value: 2.0 },
      { label: "Monitoring &\nAnalytics", value: 1.0 },
      { label: "Agility &\nImprovement", value: 1.0 },
    ],[]
  );

  const score = 38.75;
  const scoreLabel = score < 50 ? "Baja Digitalización" : score < 75 ? "Media Digitalización" : "Alta Digitalización";

  return (
    <div className="animate-in fade-in duration-700 font-sans">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900">
          Digitalización
        </h1>

        <div className="text-left md:text-right">
          <div className="text-2xl md:text-3xl font-black text-xactus tracking-tight">
            Score: {score.toFixed(2)} – {scoreLabel}
          </div>
          <div className="mt-2 text-sm md:text-base text-gray-600 leading-snug max-w-lg">
            Diagnóstico basado en el NIST Cybersecurity Framework (CSF) 2.0{" "}
            <a
              href="https://doi.org/10.6028/NIST.CSWP.29"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline break-words"
            >
              https://doi.org/10.6028/NIST.CSWP.29
            </a>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* LEFT: CHART + SCALE */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-4 md:p-8 shadow-sm">
            <div className="h-[280px] md:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={dims} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="label" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis domain={[0, 4]} tickCount={5} />
                  <Radar
                    dataKey="value"
                    stroke="#1f4f87"
                    fill="#1f4f87"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="text-gray-800 text-sm md:text-base leading-relaxed bg-gray-50 p-6 rounded-3xl">
            <p className="mb-1">1: <b className="font-bold">Parcial / Adhoc</b> – Manual, Reactivo, Fragmentado</p>
            <p className="mb-1">2: <b className="font-bold">Riesgos Informados</b> – Uso Inconsistente, Básico</p>
            <p className="mb-1">3: <b className="font-bold">Repetible</b> – Estandarizado, Procesos Integrados</p>
            <p>4: <b className="font-bold">Adaptativo</b> – Automatizado, Optimizado, <i className="italic">Data Driven</i></p>
          </div>
        </div>

        {/* RIGHT: QUESTIONS */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm h-full">
          <ul className="space-y-6 text-base md:text-lg leading-relaxed text-gray-900">
            <li className="flex gap-4">
              <span className="text-xactus font-bold">•</span>
              <span>
                <b className="font-bold">Gobernanza</b> – ¿Está la gobernanza digital definida formalmente y alineada con la estrategia?
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-xactus font-bold">•</span>
              <span>
                <b className="font-bold">Activos y Datos</b> – ¿Son los activos digitales y datos inventariados y administrados?
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-xactus font-bold">•</span>
              <span>
                <b className="font-bold">Digitalización de Procesos</b> – ¿Son los procesos principales soportados digitalmente y estandarizados?
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-xactus font-bold">•</span>
              <span>
                <b className="font-bold">Monitoreo y Analítica</b> – ¿Existe monitoreo digital y analítica de datos?
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-xactus font-bold">•</span>
              <span>
                <b className="font-bold">Agilidad y Mejora</b> – ¿La organización mejora continuamente utilizando datos?
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalizationPage;