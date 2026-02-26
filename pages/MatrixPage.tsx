import React, { useMemo } from "react";

type Quadrant = {
  title: string;
  subtitle: string;
  items: string[];
  bg: string;
  text: string;
};

const MatrixPage: React.FC = () => {
  const data = useMemo(() => {
    return {
      tl: {
        title: "Quick Wins",
        subtitle: "Alto Impacto, Bajo Esfuerzo",
        items:["Digitalización Comercial", "Diagnóstico de Clientes"],
        bg: "#183f73",
        text: "text-white",
      },
      tr: {
        title: "Big Swings",
        subtitle: "Alto Impacto, Alto Esfuerzo",
        items:["Automatización de Reingresos", "Forecasting de Ventas / Alquileres"],
        bg: "#1f5f9f",
        text: "text-white",
      },
      bl: {
        title: "Nice to Have",
        subtitle: "Bajo Impacto, Bajo Esfuerzo",
        items: ["Medición de Rendimiento Humano"],
        bg: "#4f97dc",
        text: "text-white",
      },
      br: {
        title: "Deprioritize",
        subtitle: "Bajo Impacto, Alto Esfuerzo",
        items:["Cambio de sistema ERP"],
        bg: "#93c1ea",
        text: "text-white",
      },
    };
  },[]);

  const Quad = ({ q }: { q: Quadrant }) => (
    <div
      className={[
        "h-full w-full p-6 md:p-10 flex flex-col justify-start transition-all duration-300",
        q.text,
      ].join(" ")}
      style={{ backgroundColor: q.bg }}
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
        {q.title}
      </div>
      <div className="mt-2 text-sm md:text-base font-semibold opacity-80 uppercase tracking-wide">
        {q.subtitle}
      </div>

      <ul className="mt-6 md:mt-8 space-y-4 text-base md:text-lg font-medium opacity-95">
        {q.items.map((it, i) => (
          <li key={i} className="flex gap-3 md:gap-4 items-start">
            <span className="mt-1 text-white/70 text-sm md:text-base">▪</span>
            <span className="leading-snug">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700 font-sans">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
        Matriz Impacto–Esfuerzo
      </h1>

      {/* 
        Contenedor Principal de la Matriz.
        Usamos pl (padding-left) y pb (padding-bottom) para hacerle espacio a los ejes 
        sin que se monten sobre la tabla de cuadrantes.
      */}
      <div className="relative pl-12 pb-12 md:pl-20 md:pb-16 mt-8 md:mt-12">
        
        {/* EJE Y (IMPACTO) */}
        <div className="absolute left-2 md:left-6 top-0 bottom-12 md:bottom-16 w-[4px] bg-gray-900 rounded-full">
          {/* Flecha Arriba */}
          <div className="absolute -top-3 -left-[6px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-gray-900" />
          
          {/* Label Eje Y */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[4.5rem] md:-translate-x-[5.5rem] -rotate-90 origin-center text-sm md:text-lg font-black tracking-widest text-gray-900 uppercase">
            Impacto
          </div>
        </div>

        {/* EJE X (ESFUERZO) */}
        <div className="absolute left-2 md:left-6 bottom-4 md:bottom-6 right-0 h-[4px] bg-gray-900 rounded-full">
          {/* Flecha Derecha */}
          <div className="absolute -right-3 -top-[6px] w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-gray-900" />
          
          {/* Label Eje X */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-4 md:translate-y-6 text-sm md:text-lg font-black tracking-widest text-gray-900 uppercase">
            Esfuerzo
          </div>
        </div>

        {/* CONTENEDOR DE CUADRANTES (MATRIZ) */}
        <div className="border-[3px] border-white/50 rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* 
              Usamos min-h para asegurar que haya suficiente espacio en las tarjetas 
              sin que el texto se comprima bruscamente.
            */}
            <div className="min-h-[220px] md:min-h-[300px] border-b md:border-b-0 md:border-r border-white/20">
              <Quad q={data.tl} />
            </div>
            <div className="min-h-[220px] md:min-h-[300px] border-b border-white/20">
              <Quad q={data.tr} />
            </div>
            <div className="min-h-[220px] md:min-h-[300px] border-b md:border-b-0 md:border-r border-white/20">
              <Quad q={data.bl} />
            </div>
            <div className="min-h-[220px] md:min-h-[300px]">
              <Quad q={data.br} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MatrixPage;