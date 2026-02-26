import React, { useMemo, useState } from "react";
import { ViewType } from "../types";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

type AgendaItem = {
  n: string;          // "1.1"
  id: ViewType;       // view id
  label: string;      // "Árbol del Problema"
};

type AgendaSection = {
  n: number;          // 1
  title: string;      // "Diagnóstico"
  id?: ViewType;      // solo si la sección es una página (ej: Disrupción)
  items?: AgendaItem[];
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Estructura EXACTA de la imagen (si algo no está aquí, NO se muestra)
  const agenda: AgendaSection[] = useMemo(
    () => [
      {
        n: 1,
        title: "Diagnóstico",
        items: [
          { n: "1.1", id: "problem-tree", label: "Árbol del Problema" },
          { n: "1.2", id: "digitalization", label: "Digitalización" },
          { n: "1.3", id: "process-mapping", label: "Mapa de Procesos" },
        ],
      },
      {
        n: 2,
        title: "Análisis Competitivo Digital",
        items: [
          { n: "2.1", id: "benchmark", label: "Benchmark" },
          { n: "2.2", id: "ai-types", label: "Tipos de IA aplicables" },
        ],
      },
      {
        n: 3,
        title: "Transformación Tecnológica",
        items: [
          { n: "3.1", id: "matrix", label: "Matriz Impacto–Esfuerzo" },
          { n: "3.2", id: "initiatives", label: "Iniciativas" },
          { n: "3.3", id: "deep-dives", label: "Deep-Dives" },
          { n: "3.4", id: "scalability", label: "Escalabilidad" },
        ],
      },
      {
        n: 4,
        title: "Siguientes Pasos",
        items: [
          { n: "4.1", id: "timeline", label: "Cronograma" },
          { n: "4.2", id: "budget", label: "Presupuesto" },
        ],
      },
      {
        n: 5,
        title: "Disrupción",
        id: "disruption",
      }
    ],
    []
  );

  // ✅ Guardrail: si por algún motivo te llega un view que no existe aquí, avisamos.
  const allowedViews = useMemo(() => {
    const all: ViewType[] = [];
    for (const s of agenda) {
      if (s.id) all.push(s.id);
      if (s.items?.length) all.push(...s.items.map((x) => x.id));
    }
    return new Set(all);
  }, [agenda]);

  React.useEffect(() => {
    if (!allowedViews.has(currentView)) {
      // No debería pasar si tu ViewType está bien, pero lo dejamos blindado.
      console.warn(
        `[Sidebar] currentView "${String(
          currentView
        )}" NO está en la agenda (imagen). Ocúltalo y elimínalo del proyecto.`
      );
    }
  }, [currentView, allowedViews]);

  const go = (view: ViewType) => {
    setView(view);
    setIsOpen(false);
  };

  const SectionHeader = ({ n, title, active }: { n: number; title: string; active?: boolean }) => (
    <div className="flex items-center gap-4 px-2">
      <div
        className={[
          "w-11 h-11 flex items-center justify-center",
          "bg-xactus text-white font-black",
          "rounded-none",
          active ? "ring-4 ring-blue-900/10" : "",
        ].join(" ")}
      >
        {n}
      </div>
      <div className="min-w-0">
        <div className="text-[16px] font-black text-gray-900 leading-tight">
          {title}
        </div>
      </div>
    </div>
  );

  const SubItem = ({ item }: { item: AgendaItem }) => {
    const active = currentView === item.id;

    return (
      <button
        key={item.id}
        onClick={() => go(item.id)}
        className={[
          "w-full text-left flex items-center gap-3",
          "px-3 py-2 rounded-xl transition-all duration-200",
          active ? "bg-blue-50 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
        ].join(" ")}
      >
        <span
          className={[
            "w-10 h-10 flex items-center justify-center",
            "bg-[#1f4f87] text-white font-black text-[11px]",
            "rounded-none shrink-0",
            active ? "shadow-md shadow-blue-900/15" : "",
          ].join(" ")}
        >
          {item.n}
        </span>
        <span className="text-[13px] font-semibold leading-tight">{item.label}</span>
      </button>
    );
  };

  const SectionBlock = ({ section }: { section: AgendaSection }) => {
    const isDirect = Boolean(section.id);
    const anyChildActive = Boolean(section.items?.some((x) => x.id === currentView));
    const isActive = (isDirect && section.id === currentView) || anyChildActive;

    return (
      <div className="space-y-3">
        {isDirect ? (
          <button
            onClick={() => section.id && go(section.id)}
            className={[
              "w-full text-left rounded-2xl p-2 transition-all",
              isActive ? "bg-blue-50" : "hover:bg-gray-50",
            ].join(" ")}
          >
            <SectionHeader n={section.n} title={section.title} active={isActive} />
          </button>
        ) : (
          <div className="p-2">
            <SectionHeader n={section.n} title={section.title} active={isActive} />
          </div>
        )}

        {section.items?.length ? (
          <div className="pl-[56px] space-y-1">
            {section.items.map((item) => (
              <SubItem key={item.id} item={item} />
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const NavContent = () => (
    <div className="p-6 md:p-8 flex flex-col h-full bg-white">
      <div className="mb-8">
        <img
          src="/images/xactuslogo.png"
          alt="Xactus Logo"
          className="h-10 md:h-12 w-auto mb-2"
        />
        <div className="h-1 w-12 bg-xactus mt-4"></div>
      </div>

      <nav className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {agenda.map((section) => (
          <SectionBlock key={section.n} section={section} />
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
