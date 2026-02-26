import React, { useMemo } from "react";

type Quadrant = {
  title: string;
  subtitle: string;
  items: string[];
  bg: string;
  text: string;
  align?: "left" | "right";
};

const MatrixPage: React.FC = () => {
  const data = useMemo(() => {
    const q: { tl: Quadrant; tr: Quadrant; bl: Quadrant; br: Quadrant } = {
      tl: {
        title: "Quick Wins",
        subtitle: "Alto Impacto, Bajo Esfuerzo:",
        items: ["Digitalización Comercial", "Diagnóstico de Clientes"],
        bg: "#183f73",
        text: "text-white",
        align: "left",
      },
      tr: {
        title: "Big Swings",
        subtitle: "Alto Impacto, Alto Esfuerzo:",
        items: ["Automatización de Reingresos", "Forecasting de Ventas / Alquileres"],
        bg: "#1f5f9f",
        text: "text-white",
        align: "left",
      },
      bl: {
        title: "Nice to Have",
        subtitle: "Bajo Impacto, Bajo Esfuerzo:",
        items: ["Medición de Rendimiento Humano"],
        bg: "#4f97dc",
        text: "text-white",
        align: "left",
      },
      br: {
        title: "Deprioritize",
        subtitle: "Bajo Impacto, Alto Esfuerzo:",
        items: ["Cambio de sistema ERP"],
        bg: "#93c1ea",
        text: "text-white",
        align: "left",
      },
    };
    return q;
  }, []);

  const Quad = ({ q }: { q: Quadrant }) => (
    <div
      className={[
        "h-full w-full p-10 md:p-12 flex flex-col justify-start",
        q.text,
      ].join(" ")}
      style={{ background: q.bg }}
    >
      <div className="text-3xl md:text-5xl font-black leading-none">{q.title}</div>
      <div className="mt-3 text-xl md:text-3xl font-medium opacity-95">{q.subtitle}</div>

      <ul className="mt-10 space-y-6 text-2xl md:text-4xl font-medium opacity-95">
        {q.items.map((it, i) => (
          <li key={i} className="flex gap-6">
            <span className="mt-2 text-2xl md:text-3xl">▪</span>
            <span className="leading-tight">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700">
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900">
        Matriz Impacto–Esfuerzo
      </h1>

      {/* Contenedor tipo “slide” */}
      <div className="relative">
        {/* Ejes */}
        <div className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] text-2xl md:text-4xl font-black text-gray-900">
          Impacto
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 md:-bottom-16 text-2xl md:text-4xl font-black text-gray-900">
          Esfuerzo
        </div>

        {/* Flechas (ejes) */}
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gray-900" />
        <div className="absolute left-0 top-0 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[22px] border-b-gray-900 -translate-x-[11px]" />

        <div className="absolute left-0 right-0 bottom-0 h-[6px] bg-gray-900" />
        <div className="absolute right-0 bottom-0 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-gray-900 translate-y-[11px]" />

        {/* Matriz */}
        <div className="border border-gray-100 rounded-[1.5rem] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="min-h-[420px]">
              <Quad q={data.tl} />
            </div>
            <div className="min-h-[420px]">
              <Quad q={data.tr} />
            </div>
            <div className="min-h-[420px]">
              <Quad q={data.bl} />
            </div>
            <div className="min-h-[420px]">
              <Quad q={data.br} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixPage;