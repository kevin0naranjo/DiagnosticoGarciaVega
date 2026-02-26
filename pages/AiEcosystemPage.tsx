import React, { useMemo } from "react";

type SubItem = { n: string; label: string };
type Block = {
  n: string;
  title: string;
  items: SubItem[];
};

const PRIMARY = "#183f73";
const SECONDARY = "#1f5f9f";

const AiEcosystemPage: React.FC = () => {
  const blocks = useMemo<Block[]>(
    () =>[
      {
        n: "1",
        title: "Captura y Estandarización",
        items:[
          { n: "1.1", label: "OCR Extraction" },
          { n: "1.2", label: "Entity Extraction" },
          { n: "1.3", label: "Smart Validation" },
        ],
      },
      {
        n: "2",
        title: "Predicción / Forecasting",
        items:[
          { n: "2.1", label: "Machine Learning" },
          { n: "2.2", label: "Deep Learning" },
        ],
      },
      {
        n: "3",
        title: "Optimización del Inventario",
        items:[
          { n: "3.1", label: "Planificación Multi Agente" },
          { n: "3.2", label: "Redes de Tareas Jerárquicas" },
        ],
      },
      {
        n: "4",
        title: "Análisis y Control",
        items:[
          { n: "4.1", label: "Unsupervised Learning" },
          { n: "4.2", label: "Clustering" },
        ],
      },
    ],[]
  );

  const left = blocks.filter((b) => b.n === "1" || b.n === "2");
  const right = blocks.filter((b) => b.n === "3" || b.n === "4");

  const NumBox = ({
    children,
    small,
    bordered,
  }: {
    children: React.ReactNode;
    small?: boolean;
    bordered?: boolean;
  }) => (
    <div
      className={[
        "flex items-center justify-center font-bold text-white shrink-0",
        small
          ? "w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm rounded-lg"
          : "w-12 h-12 md:w-14 md:h-14 text-lg md:text-xl rounded-xl",
        bordered ? "border border-white/40 shadow-sm" : "shadow-md",
      ].join(" ")}
      style={{ backgroundColor: bordered ? SECONDARY : PRIMARY }}
    >
      {children}
    </div>
  );

  const BlockCard = ({ b }: { b: Block }) => (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 bg-white p-5 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 md:block md:pt-1">
        <NumBox>{b.n}</NumBox>
        <div className="text-xl md:hidden font-black text-gray-900 leading-tight">
          {b.title}
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 w-full mt-2 md:mt-0">
        <div className="hidden md:block text-2xl font-black text-gray-900 leading-tight">
          {b.title}
        </div>

        <div className="space-y-3">
          {b.items.map((it) => (
            <div
              key={it.n}
              className="flex items-center gap-3 md:gap-4 bg-gray-50 p-2 md:p-3 rounded-2xl"
            >
              <NumBox small bordered>
                {it.n}
              </NumBox>
              <div className="text-sm md:text-base text-gray-700 font-semibold">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700 font-sans">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-8 md:mb-12">
        Tipos de IA Aplicables
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <div className="space-y-6 lg:space-y-10">
          {left.map((b) => (
            <BlockCard key={b.n} b={b} />
          ))}
        </div>

        <div className="space-y-6 lg:space-y-10">
          {right.map((b) => (
            <BlockCard key={b.n} b={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiEcosystemPage;