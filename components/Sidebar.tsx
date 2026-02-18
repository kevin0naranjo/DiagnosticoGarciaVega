import React, { useState } from "react";
import { ViewType } from "../types";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Estructura tipo “deck” (1–12) + secciones como diapositivas
  const menuItems: { n: number; id: ViewType; label: string; section: string }[] =
    [
      { n: 1, id: "overview", label: "Resumen Ejecutivo", section: "MAIN" },

      { n: 2, id: "ai-ecosystem", label: "Tipos de IA Aplicables", section: "DIAGNÓSTICO" },
      { n: 3, id: "benchmark", label: "Benchmark", section: "DIAGNÓSTICO" },
      { n: 4, id: "process-mapping", label: "Mapa de Procesos", section: "DIAGNÓSTICO" },
      { n: 5, id: "digital-status", label: "Digitalización", section: "DIAGNÓSTICO" },

      { n: 6, id: "matrix", label: "Matriz Impacto–Esfuerzo", section: "PRIORIZACIÓN" },
      { n: 7, id: "projects-detail", label: "Iniciativas IA (Deep Dives)", section: "PRIORIZACIÓN" },

      { n: 8, id: "scalability", label: "Escalabilidad", section: "EJECUCIÓN" },
      { n: 9, id: "timeline", label: "Cronograma", section: "EJECUCIÓN" },
      { n: 10, id: "budget", label: "Presupuesto", section: "EJECUCIÓN" },
      { n: 11, id: "next-steps", label: "Siguientes Pasos", section: "EJECUCIÓN" },

      { n: 12, id: "forecasting", label: "Forecasting (Cumbre)", section: "VISIÓN 2026" },
    ];

  const sections = ["MAIN", "DIAGNÓSTICO", "PRIORIZACIÓN", "EJECUCIÓN", "VISIÓN 2026"];

  const NavContent = () => (
    <div className="p-6 md:p-10 flex flex-col h-full bg-white">
      <div className="mb-10">
        <img
          src="/images/xactuslogo.png"
          alt="Xactus Logo"
          className="h-10 md:h-12 w-auto mb-2"
        />
        <div className="h-1 w-12 bg-xactus mt-4"></div>
      </div>

      <nav className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {sections.map((section) => (
          <div key={section}>
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 px-2">
              {section}
            </h3>

            <div className="space-y-1">
              {menuItems
                .filter((i) => i.section === section)
                .map((item) => {
                  const active = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setView(item.id);
                        setIsOpen(false);
                      }}
                      className={[
                        "w-full text-left px-4 py-3 rounded-2xl transition-all duration-300",
                        "font-black text-[11px] uppercase tracking-wider flex items-center gap-3",
                        active
                          ? "sidebar-item-active shadow-lg shadow-blue-900/10"
                          : "text-gray-500 hover:text-xactus hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "w-9 h-9 rounded-2xl flex items-center justify-center",
                          "text-xs font-black",
                          active ? "bg-xactus text-white" : "bg-gray-100 text-gray-600",
                        ].join(" ")}
                      >
                        {item.n}
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      <div className="pt-6 border-t border-gray-100 mt-auto">
        <div className="bg-gray-50 p-4 rounded-2xl">
          <img
            src="/images/garciavegalogo.png"
            alt="Garcia Vega Logo"
            className="w-full h-auto max-w-20 grayscale opacity-40"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 border-r border-gray-100 h-screen fixed left-0 top-0 z-50 flex-col bg-white">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-[60] px-6 py-4 flex justify-between items-center shadow-sm">
        <img
          src="https://xactus.io/wp-content/uploads/2025/02/Logo.png"
          alt="Xactus"
          className="h-8"
        />
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xactus">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white z-[80] shadow-2xl"
            >
              <NavContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
