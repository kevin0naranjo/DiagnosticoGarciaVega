// src/pages/ScalabilityPage.tsx
import React, { useMemo } from "react";

type Item = {
  title: string;
  months: string;
  tag: string; // Quick Win / Nice to Have / Big Swing
  position: "top" | "bottom";
};

const ScalabilityPage: React.FC = () => {
  const items = useMemo<Item[]>(
    () => [
      { title: "Digitalización de\nComercial", months: "2–3 meses", tag: "Quick Win", position: "top" },
      { title: "Diagnóstico de\nClientes", months: "2–3 meses", tag: "Quick Win", position: "bottom" },
      { title: "Automatización\nde Reingresos", months: "8–10 meses", tag: "Big Swing", position: "top" },
      { title: "Gestión de\nTalento Humano", months: "2–3 meses", tag: "Nice to Have", position: "bottom" },
      { title: "Forecasting de\nAlquiler y\nVentas", months: "8–10 meses", tag: "Big Swing", position: "top" },
    ],
    []
  );

  return (
    <div className="animate-in fade-in duration-700">
      {/* Title */}
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 mb-10">
        Road Map
      </h1>

      {/* Intro text */}
      <p className="max-w-6xl text-xl md:text-3xl text-gray-500 font-medium leading-relaxed mb-16">
        Las iniciativas IA están conectadas entre sí, en forma de Habilitadoras Tecnológicas, donde las
        bases de digitalización de iniciativas anteriores permiten el{" "}
        <span className="text-gray-900 font-bold">desarrollo y la escalabilidad</span> de proyectos
        posteriores. Por tal razón, se propone el siguiente <span className="italic">Road Map</span>:
      </p>

      {/* Roadmap Canvas */}
      <div className="relative w-full">
        {/* Arrow body */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
          {/* light gradient lane */}
          <div
            className="h-[220px] md:h-[260px] w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(240,244,248,1) 0%, rgba(214,231,247,1) 55%, rgba(172,208,239,1) 100%)",
            }}
          />
          {/* Arrow head */}
          <div
            className="absolute right-[-40px] top-0 h-full w-[180px]"
            style={{
              clipPath: "polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%)",
              background: "rgba(172,208,239,1)",
            }}
          />

          {/* Left faint wedge */}
          <div
            className="absolute left-[-46px] top-0 h-full w-[140px]"
            style={{
              clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
              background: "rgba(240,244,248,1)",
              opacity: 0.9,
            }}
          />

          {/* Squares */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl px-6 md:px-10 flex items-center justify-between">
              {items.map((it, idx) => {
                // colors approximating slide
                const base =
                  it.tag === "Quick Win"
                    ? "#183f73"
                    : it.tag === "Nice to Have"
                    ? "#4f97dc"
                    : "#1f5f9f";

                return (
                  <div key={idx} className="relative flex-1 flex justify-center">
                    <div
                      className="w-16 h-16 md:w-20 md:h-20"
                      style={{
                        background: base,
                        border:
                          it.tag === "Nice to Have" ? "3px solid rgba(255,255,255,0.9)" : "3px solid rgba(255,255,255,0.85)",
                        boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Labels TOP */}
        <div className="absolute left-0 right-0 top-[-10px]">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10 flex items-start justify-between">
            {items.map((it, idx) => (
              <div key={`top-${idx}`} className="flex-1">
                {it.position === "top" ? (
                  <div className="text-left">
                    <div className="text-2xl md:text-4xl font-black leading-tight text-gray-900 whitespace-pre-line">
                      {it.title}
                    </div>
                    <div className="mt-3 text-xl md:text-3xl font-medium text-gray-900">
                      {it.months}
                    </div>
                    <div className="mt-1 text-xl md:text-3xl font-medium text-gray-500">
                      {it.tag}
                    </div>
                  </div>
                ) : (
                  <div className="h-[1px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Labels BOTTOM */}
        <div className="mt-10">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10 flex items-start justify-between">
            {items.map((it, idx) => (
              <div key={`bottom-${idx}`} className="flex-1">
                {it.position === "bottom" ? (
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl font-black leading-tight text-gray-900 whitespace-pre-line">
                      {it.title}
                    </div>
                    <div className="mt-3 text-xl md:text-3xl font-medium text-gray-900">
                      {it.months}
                    </div>
                    <div className="mt-1 text-xl md:text-3xl font-medium text-gray-500">
                      {it.tag}
                    </div>
                  </div>
                ) : (
                  <div className="h-[1px]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalabilityPage;