// src/pages/ScalabilityPage.tsx
import React, { useMemo } from "react";

type Item = {
  title: string;
  months: string;
  tag: "Quick Win" | "Nice to Have" | "Big Swing";
  position: "top" | "bottom";
};

const NAVY = "#0F3B68";
const QUICK = "#163E72";
const BIG = "#1F5F9F";
const NICE = "#4F97DC";

const tagColor = (tag: Item["tag"]) => {
  if (tag === "Quick Win") return QUICK;
  if (tag === "Nice to Have") return NICE;
  return BIG;
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
    <div className="w-full animate-in fade-in duration-500">
      {/* Title */}
      <h1 className="text-[44px] md:text-[64px] font-black tracking-tight text-gray-900 mb-6">
        Road Map
      </h1>

      {/* Intro */}
      <p className="max-w-5xl text-[15px] md:text-[18px] text-gray-600 leading-relaxed mb-10">
        Las iniciativas IA están conectadas entre sí, en forma de habilitadoras tecnológicas: las bases de
        digitalización de iniciativas anteriores permiten el{" "}
        <span className="text-gray-900 font-semibold">desarrollo y la escalabilidad</span> de proyectos
        posteriores. Por tal razón, se propone el siguiente <span className="italic">Road Map</span>.
      </p>

      {/* Canvas */}
      <div className="relative w-full">
        {/* Labels TOP */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-5 gap-3">
          {items.map((it, idx) =>
            it.position === "top" ? (
              <LabelBlock key={`t-${idx}`} align="left" item={it} />
            ) : (
              <div key={`t-${idx}`} />
            )
          )}
        </div>

        {/* Arrow lane */}
        <div className="mt-4 w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="relative rounded-[28px] overflow-visible">
            {/* Lane */}
            <div
              className="relative w-full h-[120px] md:h-[140px] rounded-[28px] border border-black/10 shadow-sm overflow-hidden"
              style={{
                background:
                  "linear-gradient(90deg, rgba(240,244,248,1) 0%, rgba(214,231,247,1) 55%, rgba(172,208,239,1) 100%)",
              }}
            >
              {/* Left wedge (faint) */}
              <div
                className="absolute left-[-42px] top-0 h-full w-[120px]"
                style={{
                  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                  background: "rgba(240,244,248,1)",
                  opacity: 0.95,
                }}
              />

              {/* Arrow head */}
              <div
                className="absolute right-[-48px] top-0 h-full w-[170px]"
                style={{
                  clipPath: "polygon(0 0, 55% 0, 100% 50%, 55% 100%, 0 100%)",
                  background: "rgba(172,208,239,1)",
                }}
              />

              {/* Squares */}
              <div className="absolute inset-0 grid grid-cols-5">
                {items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <div
                      className="w-[46px] h-[46px] md:w-[54px] md:h-[54px]"
                      style={{
                        background: tagColor(it.tag),
                        border: "3px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Labels BOTTOM */}
        <div className="mt-6 w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-5 gap-3">
          {items.map((it, idx) =>
            it.position === "bottom" ? (
              <LabelBlock key={`b-${idx}`} align="center" item={it} />
            ) : (
              <div key={`b-${idx}`} />
            )
          )}
        </div>

        {/* Small foot note (optional, same feel as deck) */}
        <div className="mt-8 max-w-6xl mx-auto px-4 md:px-8">
          <div className="h-[2px] bg-black/80 w-[2px] md:w-[2px] hidden" />
          <div className="text-[12px] md:text-[13px] text-gray-500">
            * Los tiempos son estimaciones iniciales y pueden ajustarse según validaciones y disponibilidad de datos.
          </div>
        </div>
      </div>

      {/* Mobile fallback (stack) */}
      <div className="mt-10 md:hidden">
        <div className="text-sm font-semibold text-gray-900 mb-3">Vista móvil</div>
        <div className="space-y-3">
          {items.map((it) => (
            <div key={it.title} className="border border-black/10 rounded-xl overflow-hidden">
              <div className="px-4 py-3 text-white font-semibold" style={{ background: NAVY }}>
                {it.title.replaceAll("\n", " ")}
              </div>
              <div className="px-4 py-3 text-[14px] text-gray-700 flex items-center justify-between">
                <span className="font-medium">{it.months}</span>
                <span className="text-gray-500">{it.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScalabilityPage;

function LabelBlock({
  item,
  align,
}: {
  item: Item;
  align: "left" | "center" | "right";
}) {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={alignClass}>
      <div className="text-[16px] md:text-[20px] font-extrabold leading-snug text-gray-900 whitespace-pre-line">
        {item.title}
      </div>
      <div className="mt-1 text-[14px] md:text-[16px] font-medium text-gray-900">{item.months}</div>
      <div className="text-[13px] md:text-[15px] font-medium text-gray-500">{item.tag}</div>
    </div>
  );
}