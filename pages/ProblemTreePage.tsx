import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImgItem = {
  id: string;
  title: string;
  src: string;
  alt: string;
};

type TreeTab = "problema" | "objetivos";

const ProblemTreePage: React.FC = () => {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";

  const causalImages: ImgItem[] = useMemo(
    () =>[
      {
        id: "CAUSAL-01",
        title: "Análisis Causal (1/3)",
        src: `${baseUrl}images/analisis-causal-1.png`,
        alt: "Análisis causal 1",
      },
      {
        id: "CAUSAL-02",
        title: "Análisis Causal (2/3)",
        src: `${baseUrl}images/analisis-causal-2.png`,
        alt: "Análisis causal 2",
      },
      {
        id: "CAUSAL-03",
        title: "Análisis Causal (3/3)",
        src: `${baseUrl}images/analisis-causal-3.png`,
        alt: "Análisis causal 3",
      },
    ],
    [baseUrl]
  );

  const problemTreeImg: ImgItem = {
    id: "ARB-PROBLEMA",
    title: "Árbol del Problema Central",
    src: `${baseUrl}images/arboldeproblema.png`,
    alt: "Árbol del problema",
  };

  const objectiveTreeImg: ImgItem = {
    id: "ARB-OBJETIVOS",
    title: "Árbol de Objetivos Estratégicos",
    src: `${baseUrl}images/arboldeobjetivos.png`,
    alt: "Árbol de objetivos",
  };

  const [activeTree, setActiveTree] = useState<TreeTab>("problema");
  const [selected, setSelected] = useState<ImgItem | null>(null);

  // Cerrar modal con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  },[]);

  // Tarjeta reutilizable para imágenes
  const ImageCard = ({
    img,
    featured = false,
    delay = 0,
  }: {
    img: ImgItem;
    featured?: boolean;
    delay?: number;
  }) => (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      onClick={() => setSelected(img)}
      className={`w-full bg-white overflow-hidden border border-gray-100 hover:border-xactus/40 shadow-sm hover:shadow-xl transition-all text-left group ${
        featured ? "rounded-[2.5rem]" : "rounded-[2rem]"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-4 border-b border-gray-100 ${
          featured ? "p-6 md:p-8" : "p-5 md:p-6"
        }`}
      >
        <div className="min-w-0">
          <div className="text-[11px] font-black uppercase tracking-widest text-xactus/70 mb-1">
            {img.id}
          </div>
          <div
            className={`font-black text-gray-900 tracking-tight truncate ${
              featured ? "text-xl md:text-3xl" : "text-base md:text-lg"
            }`}
          >
            {img.title}
          </div>
        </div>
        <span className="text-[10px] font-black uppercase bg-gray-50 text-gray-900 group-hover:bg-xactus group-hover:text-white transition-colors px-4 py-2.5 rounded-full shrink-0">
          Ampliar
        </span>
      </div>

      <div className="bg-gray-50 flex justify-center items-center overflow-hidden p-4">
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`object-contain transition-transform duration-700 group-hover:scale-[1.02] ${
            featured ? "w-full max-h-[500px]" : "w-full h-auto"
          }`}
        />
      </div>
    </motion.button>
  );

  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in duration-700 pb-20">
      
      {/* 1. SECCIÓN SUPERIOR: CAUSAS */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
            Análisis <span className="text-xactus">Causal</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl">
            Desglose detallado de las raíces del problema principal antes de visualizar la estructura general.
          </p>
        </div>

        {/* Grid de Causas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {causalImages.map((img, idx) => (
            <ImageCard key={img.id} img={img} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      {/* DIVISOR VISUAL */}
      <div className="flex items-center gap-4 py-4">
        <div className="h-px bg-gray-200 flex-1"></div>
        <div className="w-2 h-2 rounded-full bg-xactus/40"></div>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      {/* 2. SECCIÓN INFERIOR: CARRUSEL DE ÁRBOLES */}
      <section className="space-y-8 bg-gray-50/50 p-6 md:p-10 rounded-[3rem] border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
              Estructura del <span className="text-xactus">Árbol</span>
            </h3>
            <p className="text-gray-500 font-medium text-sm md:text-base mt-2">
              Alterna entre la vista del problema y la proyección de objetivos.
            </p>
          </div>

          {/* Toggle / Carrusel Control */}
          <div className="flex bg-white p-1.5 rounded-full w-full md:w-auto self-start relative shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTree("problema")}
              className={`relative px-6 py-3 text-xs md:text-sm font-black uppercase tracking-widest rounded-full z-10 transition-colors w-1/2 md:w-auto text-center ${
                activeTree === "problema" ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTree === "problema" && (
                <motion.div
                  layoutId="treeToggle"
                  className="absolute inset-0 bg-xactus rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Problema
            </button>
            <button
              onClick={() => setActiveTree("objetivos")}
              className={`relative px-6 py-3 text-xs md:text-sm font-black uppercase tracking-widest rounded-full z-10 transition-colors w-1/2 md:w-auto text-center ${
                activeTree === "objetivos" ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTree === "objetivos" && (
                <motion.div
                  layoutId="treeToggle"
                  className="absolute inset-0 bg-xactus rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Objetivos
            </button>
          </div>
        </div>

        {/* Contenedor del Carrusel Animado */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem]">
          <AnimatePresence mode="wait">
            {activeTree === "problema" ? (
              <motion.div
                key="problema"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ImageCard img={problemTreeImg} featured />
              </motion.div>
            ) : (
              <motion.div
                key="objetivos"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ImageCard img={objectiveTreeImg} featured />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL / LIGHTBOX (Intacto) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-7xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-full"
              initial={{ y: 20, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6 flex items-start justify-between gap-4 border-b border-gray-100 shrink-0">
                <div className="min-w-0">
                  <div className="text-[11px] font-black uppercase tracking-widest text-xactus">
                    {selected.id}
                  </div>
                  <div className="text-xl md:text-3xl font-black tracking-tight text-gray-900">
                    {selected.title}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white transition-colors px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shrink-0"
                >
                  Cerrar
                </button>
              </div>

              <div className="bg-[#f8f9fa] flex-1 flex items-center justify-center p-4 overflow-hidden relative">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-auto max-h-[75vh] object-contain block drop-shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemTreePage;