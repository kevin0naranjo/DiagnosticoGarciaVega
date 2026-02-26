import React, { useMemo } from "react";

type Item = {
  title: string;
  months: string;
  tag: "Quick Win" | "Nice to Have" | "Big Swing";
  position: "top" | "bottom";
};

const QUICK = "#183f73"; // Ajustado para hacer match con el azul principal
const BIG = "#1f5f9f";
const NICE = "#4f97dc";

const tagColor = (tag: Item["tag"]) => {
  if (tag === "Quick Win") return QUICK;
  if (tag === "Nice to Have") return NICE;
  return BIG;
};

const ScalabilityPage: React.FC = () => {
  const items = useMemo<Item[]>(
    () =>[
      { title: "Digitalización de\nComercial", months: "2–3 meses", tag: "Quick Win", position: "top" },
      { title: "Diagnóstico de\nClientes", months: "2–3 meses", tag: "Quick Win", position: "bottom" },
      { title: "Automatización\nde Reingresos", months: "8–10 meses", tag: "Big Swing", position: "top" },
      { title: "Gestión de\nTalento Humano", months: "2–3 meses", tag: "Nice to Have", position: "bottom" },
      { title: "Forecasting de\nAlquiler y\nVentas", months: "8–10 meses", tag: "Big Swing", position: "top" },
    ],[]
  );

  return (
    <div className="w-full animate-in fade-in duration-700 font-sans pb-10">
      
      {/* HEADER */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
        Road Map
      </h1>

      <p className="max-w-4xl text-base md:text-lg text-gray-600 leading-relaxed mb-12">
        Las iniciativas IA están conectadas entre sí en forma de habilitadoras tecnológicas: las bases de
        digitalización de iniciativas anteriores permiten el{" "}
        <span className="text-gray-900 font-bold">desarrollo y la escalabilidad</span> de proyectos
        posteriores. Por tal razón, se propone el siguiente <span className="italic">Road Map</span>.
      </p>

      {/* =========================================
          DESKTOP VIEW (Horizontal Arrow Timeline)
          ========================================= */}
      <div className="hidden lg:block relative w-full mt-10">
        
        {/* Labels TOP */}
        <div className="w-full grid grid-cols-5 gap-4 px-4">
          {items.map((it, idx) =>
            it.position === "top" ? (
              <LabelBlock key={`t-${idx}`} item={it} />
            ) : (
              <div key={`t-${idx}`} />
            )
          )}
        </div>

        {/* Arrow Lane */}
        <div className="my-6 w-full px-4">
          <div className="relative rounded-[2rem] overflow-visible shadow-sm">
            
            {/* Background Lane */}
            <div
              className="relative w-full h-[120px] rounded-[2rem] border border-gray-200 overflow-hidden"
              style={{
                background: "linear-gradient(90deg, #f8fafc 0%, #e0f2fe 55%, #bae6fd 100%)",
              }}
            >
              {/* Left indent (Chevron tail) */}
              <div
                className="absolute left-[-42px] top-0 h-full w-[120px]"
                style={{
                  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                  backgroundColor: "#ffffff", // Match background of the page
                }}
              />

              {/* Right Arrow Head */}
              <div
                className="absolute right-[-20px] top-0 h-full w-[100px]"
                style={{
                  clipPath: "polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%)",
                  backgroundColor: "#bae6fd",
                }}
              />

              {/* Squares/Nodes */}
              <div className="absolute inset-0 grid grid-cols-5">
                {items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-xl transition-transform hover:scale-110 duration-300"
                      style={{
                        backgroundColor: tagColor(it.tag),
                        border: "4px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Labels BOTTOM */}
        <div className="w-full grid grid-cols-5 gap-4 px-4">
          {items.map((it, idx) =>
            it.position === "bottom" ? (
              <LabelBlock key={`b-${idx}`} item={it} />
            ) : (
              <div key={`b-${idx}`} />
            )
          )}
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (Vertical Timeline)
          ========================================= */}
      <div className="lg:hidden relative mt-8">
        {/* Track Line */}
        <div className="absolute left-[28px] top-4 bottom-4 w-1 bg-gray-100 rounded-full" />

        <div className="space-y-6">
          {items.map((it, idx) => (
            <div key={idx} className="relative flex items-center gap-6">
              
              {/* Timeline Dot */}
              <div 
                className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center z-10"
                style={{
                  backgroundColor: tagColor(it.tag),
                  border: "4px solid white",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
              >
                <span className="text-white font-black text-lg">{idx + 1}</span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="text-lg font-black text-gray-900 leading-tight mb-2">
                  {/* Remove line breaks for mobile view so it flows naturally */}
                  {it.title.replace(/\n/g, " ")}
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-lg text-sm font-bold border border-gray-200">
                    ⏱ {it.months}
                  </span>
                  <span 
                    className="px-3 py-1 rounded-lg text-sm font-bold text-white"
                    style={{ backgroundColor: tagColor(it.tag) }}
                  >
                    {it.tag}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-12 md:mt-16">
        <div className="bg-gray-50 border border-gray-100 text-gray-500 px-5 py-4 rounded-xl text-sm md:text-base font-medium flex items-start gap-3">
          <span className="text-lg leading-none mt-0.5">ℹ️</span>
          <p>
            Los tiempos son estimaciones iniciales y pueden ajustarse según las validaciones y disponibilidad de datos durante la ejecución.
          </p>
        </div>
      </div>

    </div>
  );
};

// Componente auxiliar para los textos en Desktop (Centrados para alinear con las cajas)
function LabelBlock({ item }: { item: Item }) {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <div className="text-base lg:text-lg font-black leading-snug text-gray-900 whitespace-pre-line h-[54px] flex items-end justify-center pb-2">
        {item.title}
      </div>
      <div className="mt-2 text-sm lg:text-base font-bold text-gray-700">
        {item.months}
      </div>
      <div 
        className="mt-2 text-xs lg:text-sm font-bold text-white px-3 py-1 rounded-full inline-block"
        style={{ backgroundColor: tagColor(item.tag) }}
      >
        {item.tag}
      </div>
    </div>
  );
}

export default ScalabilityPage;