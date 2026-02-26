import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImgItem = {
  id: string;
  title: string;
  src: string;
  alt: string;
};

const ProblemTreePage: React.FC = () => {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";

  const images: ImgItem[] = useMemo(
    () => [
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
      {
        id: "ARB-PROBLEMA",
        title: "Árbol del Problema",
        src: `${baseUrl}images/arboldeproblema.png`,
        alt: "Árbol del problema",
      },
      {
        id: "ARB-OBJETIVOS",
        title: "Árbol de Objetivos",
        src: `${baseUrl}images/arboldeobjetivos.png`,
        alt: "Árbol de objetivos",
      },
    ],
    [baseUrl]
  );

  const [selected, setSelected] = useState<ImgItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700">
      <div className="flex items-center justify-between gap-6">
        <h2 className="text-3xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
          Árbol del <span className="text-xactus">Problema</span>
        </h2>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
            Click para ampliar
          </span>
          <span className="h-[2px] w-10 bg-xactus"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {images.map((img, idx) => (
          <motion.button
            key={img.id}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelected(img)}
            className="brutal-card bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-xactus/30 shadow-sm hover:shadow-md transition-all text-left"
          >
            <div className="p-5 md:p-6 flex items-center justify-between gap-4 border-b border-gray-100">
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  {img.id}
                </div>
                <div className="text-base md:text-lg font-black text-gray-900 tracking-tight truncate">
                  {img.title}
                </div>
              </div>
              <span className="text-[10px] font-black uppercase bg-gray-900 text-white px-3 py-2 rounded-full">
                Ver
              </span>
            </div>

            <div className="bg-gray-900">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-7xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
              initial={{ y: 14, scale: 0.985, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.99, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 md:p-6 flex items-start justify-between gap-4 border-b border-gray-100">
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {selected.id}
                  </div>
                  <div className="text-lg md:text-2xl font-black tracking-tight text-gray-900">
                    {selected.title}
                  </div>
                  <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mt-2">
                    Presiona ESC para cerrar
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase hover:opacity-90"
                >
                  Cerrar
                </button>
              </div>

              <div className="bg-gray-950 flex items-center justify-center">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-[78vh] object-contain block"
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