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
  // Ajusta estos valores a tu diagnóstico real (1–4)
  const dims: Dim[] = useMemo(
    () => [
      { label: "Governance", value: 1.0 },
      { label: "Assets & Data", value: 2.0 },
      { label: "Process\nDigitalization", value: 2.0 },
      { label: "Monitoring &\nAnalytics", value: 1.0 },
      { label: "Agility &\nImprovement", value: 1.0 },
    ],
    []
  );

  const score = 38.75;
  const scoreLabel = score < 50 ? "Baja Digitalización" : score < 75 ? "Media Digitalización" : "Alta Digitalización";

  return (
    <div className="animate-in fade-in duration-700">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-6">
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900">
          Digitalización
        </h1>

        <div className="text-right">
          <div className="text-2xl md:text-5xl font-black text-xactus tracking-tight">
            Score: {score.toFixed(2)} – {scoreLabel}
          </div>
          <div className="mt-3 text-sm md:text-lg text-gray-600 leading-snug max-w-xl">
            Este diagnóstico es basado en el NIST Cybersecurity Framework (CSF) 2.0{" "}
            <a
              href="https://doi.org/10.6028/NIST.CSWP.29"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline"
            >
              https://doi.org/10.6028/NIST.CSWP.29
            </a>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT: CHART + SCALE */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
            <div className="h-[340px] md:h-[430px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={dims}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="label" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis domain={[0, 4]} tickCount={5} />
                  <Radar
                    dataKey="value"
                    stroke="currentColor"
                    fill="currentColor"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="text-gray-800 text-lg md:text-2xl leading-relaxed">
            <div>1: <b>Parcial / Adhoc</b> – Manual, Reactivo, Fragmentado</div>
            <div>2: <b>Riesgos Informados</b> – Uso Inconsistente, Básico</div>
            <div>3: <b>Repetible</b> – Estandarizado, Procesos Integrados</div>
            <div>4: <b>Adaptativo</b> – Automatizado, Optimizado, <i>Data Driven</i></div>
          </div>
        </div>

        {/* RIGHT: QUESTIONS */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-10 shadow-sm">
          <ul className="space-y-10 text-xl md:text-3xl leading-snug text-gray-900">
            <li className="flex gap-4">
              <span className="text-gray-900">•</span>
              <span>
                <b>Gobernanza</b> – ¿Está la gobernanza digital definida formalmente y alineada con la estrategia?
              </span>
            </li>
            <li className="flex gap-4">
              <span>•</span>
              <span>
                <b>Activos y Datos</b> – ¿son los activos digitales y datos inventariados y administrados?
              </span>
            </li>
            <li className="flex gap-4">
              <span>•</span>
              <span>
                <b>Digitalización de Procesos</b> – ¿son los procesos principales soportados digitalmente y estandarizados?
              </span>
            </li>
            <li className="flex gap-4">
              <span>•</span>
              <span>
                <b>Monitoreo y Analítica</b> – ¿Existe monitoreo digital y analítica de datos?
              </span>
            </li>
            <li className="flex gap-4">
              <span>•</span>
              <span>
                <b>Agilidad y Mejora</b> – ¿La organización mejora continuamente utilizando datos?
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalizationPage;