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
        id: "Proceso Critico 1",
        title: "Gestión de Cartera",
        src: `${baseUrl}images/analisis-causal-1.png`,
        alt: "Análisis causal 1",
      },
      {
        id: "Proceso Critico 2",
        title: "Gestión Talento Humano",
        src: `${baseUrl}images/analisis-causal-2.png`,
        alt: "Análisis causal 2",
      },
      {
        id: "Proceso Critico 3",
        title: "Gestión de Inventario",
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

  // Tarjeta reutilizable para imágenes (Mejorada y Responsive)
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
      className={`w-full bg-white overflow-hidden border border-gray-200 hover:border-[#183f73]/40 shadow-sm hover:shadow-lg transition-all text-left group flex flex-col ${
        featured ? "rounded-[2rem]" : "rounded-2xl"
      }`}
    >
      <div
        className={`flex items-start md:items-center justify-between gap-4 border-b border-gray-100 w-full bg-white z-10 ${
          featured ? "p-5 md:p-6" : "p-4 md:p-5"
        }`}
      >
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-[#1f5f9f] mb-1">
            {img.id}
          </div>
          <div
            className={`font-black text-gray-900 tracking-tight leading-snug truncate ${
              featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            }`}
          >
            {img.title}
          </div>
        </div>
        <span className="hidden md:inline-block text-xs font-bold uppercase bg-gray-50 text-gray-600 group-hover:bg-[#183f73] group-hover:text-white transition-colors px-4 py-2 rounded-xl shrink-0 border border-gray-200 group-hover:border-[#183f73]">
          Ampliar
        </span>
      </div>

      <div className="bg-gray-50/50 flex-1 w-full flex justify-center items-center overflow-hidden p-4 relative">
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`object-contain transition-transform duration-700 group-hover:scale-[1.03] ${
            featured ? "w-full max-h-[400px] md:max-h-[500px]" : "w-full h-auto"
          }`}
        />
      </div>
    </motion.button>
  );

  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in duration-700 font-sans pb-10">
      
      {/* 1. SECCIÓN SUPERIOR: CAUSAS */}
      <section className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Análisis Causal
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-3xl">
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
      <div className="flex items-center gap-4 py-2 opacity-50">
        <div className="h-px bg-gray-300 flex-1"></div>
        <div className="w-2 h-2 rounded-full bg-[#183f73]"></div>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>

      {/* 2. SECCIÓN INFERIOR: CARRUSEL DE ÁRBOLES */}
      <section className="space-y-8 bg-gray-50/50 p-6 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-sm">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
              Estructura del Árbol
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base mt-2 max-w-lg">
              Alterna entre la vista del problema y la proyección de objetivos estratégicos.
            </p>
          </div>

          {/* Toggle / Carrusel Control Modernizado */}
          <div className="flex bg-gray-200/60 p-1.5 rounded-2xl w-full md:w-auto self-start relative border border-gray-300/50">
            <button
              onClick={() => setActiveTree("problema")}
              className={`relative px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-xl z-10 transition-colors w-1/2 md:w-auto text-center ${
                activeTree === "problema" ? "text-white" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {activeTree === "problema" && (
                <motion.div
                  layoutId="treeToggle"
                  className="absolute inset-0 bg-[#183f73] rounded-xl -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Problema
            </button>
            <button
              onClick={() => setActiveTree("objetivos")}
              className={`relative px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-xl z-10 transition-colors w-1/2 md:w-auto text-center ${
                activeTree === "objetivos" ? "text-white" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {activeTree === "objetivos" && (
                <motion.div
                  layoutId="treeToggle"
                  className="absolute inset-0 bg-[#1f5f9f] rounded-xl -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              Objetivos
            </button>
          </div>
        </div>

        {/* Contenedor del Carrusel Animado */}
        <div className="relative w-full overflow-hidden rounded-[2rem]">
          <AnimatePresence mode="wait">
            {activeTree === "problema" ? (
              <motion.div
                key="problema"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ImageCard img={problemTreeImg} featured />
              </motion.div>
            ) : (
              <motion.div
                key="objetivos"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ImageCard img={objectiveTreeImg} featured />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] bg-gray-900/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-7xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[95vh] md:max-h-[90vh]"
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del Modal */}
              <div className="p-4 md:p-6 flex items-center justify-between gap-4 border-b border-gray-100 bg-white shrink-0">
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#1f5f9f] mb-1">
                    {selected.id}
                  </div>
                  <div className="text-lg md:text-2xl font-black tracking-tight text-gray-900 truncate">
                    {selected.title}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 border border-transparent hover:border-red-200 transition-colors px-4 py-2.5 md:px-6 md:py-3 rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest shrink-0"
                >
                  Cerrar
                </button>
              </div>

              {/* Contenido del Modal */}
              <div className="bg-gray-100/50 flex-1 flex items-center justify-center p-4 md:p-8 overflow-auto relative custom-scrollbar">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-auto max-h-[70vh] md:max-h-[75vh] object-contain drop-shadow-md rounded-lg"
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