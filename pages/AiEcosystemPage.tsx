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
    () => [
      {
        n: "1",
        title: "Captura y Estandarización",
        items: [
          { n: "1.1", label: "OCR Extraction" },
          { n: "1.2", label: "Entity Extraction" },
          { n: "1.3", label: "Smart Validation" },
        ],
      },
      {
        n: "2",
        title: "Predicción / Forecasting",
        items: [
          { n: "2.1", label: "Machine Learning" },
          { n: "2.2", label: "Deep Learning" },
        ],
      },
      {
        n: "3",
        title: "Optimización del Inventario",
        items: [
          { n: "3.1", label: "Planificación Multi Agente" },
          { n: "3.2", label: "Redes de Tareas Jerárquicas" },
        ],
      },
      {
        n: "4",
        title: "Análisis y Control",
        items: [
          { n: "4.1", label: "Unsupervised Learning" },
          { n: "4.2", label: "Clustering" },
        ],
      },
    ],
    []
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
        "flex items-center justify-center font-black text-white",
        small ? "w-14 h-14 text-sm rounded" : "w-20 h-20 text-2xl rounded",
        bordered ? "border border-white/70" : "",
      ].join(" ")}
      style={{ background: bordered ? SECONDARY : PRIMARY }}
    >
      {children}
    </div>
  );

  const BlockCard = ({ b }: { b: Block }) => (
    <div className="flex gap-10">
      <div className="pt-1">
        <NumBox>{b.n}</NumBox>
      </div>

      <div className="space-y-6">
        <div className="text-3xl md:text-4xl font-medium text-gray-900">{b.title}</div>

        <div className="space-y-5">
          {b.items.map((it) => (
            <div key={it.n} className="flex items-center gap-6">
              <NumBox small bordered>
                {it.n}
              </NumBox>
              <div className="text-2xl md:text-3xl text-gray-500 font-medium">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 mb-16">
        Tipos de IA Aplicables
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-20">
          {left.map((b) => (
            <BlockCard key={b.n} b={b} />
          ))}
        </div>

        <div className="space-y-20">
          {right.map((b) => (
            <BlockCard key={b.n} b={b} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiEcosystemPage;