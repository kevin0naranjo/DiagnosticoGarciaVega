// components/Initiatives.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PROJECTS } from "../../constants";
import { Project } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

const badgeClass =
  "text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full";

const Initiatives: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const sorted = useMemo(() => {
    return [...PROJECTS].sort((a, b) => {
      // Quick wins primero, luego por impacto desc y esfuerzo asc (interno, NO se muestra)
      if (a.isQuickWin !== b.isQuickWin) return a.isQuickWin ? -1 : 1;
      return b.impact - a.impact || a.effort - b.effort;
    });
  }, []);

  const close = () => setSelected(null);

  // UX/Accesibilidad modal: ESC para cerrar, bloquear scroll body, foco al botón cerrar
  useEffect(() => {
    if (!selected) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    // foco al abrir
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700">
      <header className="space-y-3">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Iniciativas <span className="text-xactus">IA</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-medium max-w-3xl">
          Haz clic en cualquier iniciativa para ver el deep dive (fases, KPIs, potencial e impacto).
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {sorted.map((p, idx) => (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => setSelected(p)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.03 }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.99 }}
            className="text-left brutal-card p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
            aria-haspopup="dialog"
            aria-expanded={Boolean(selected && selected.id === p.id)}
          >
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`${badgeClass} bg-blue-50 text-xactus border border-blue-100`}>
                  {p.category}
                </span>

                {p.isQuickWin ? (
                  <span className={`${badgeClass} bg-amber-50 text-amber-600 border border-amber-100`}>
                    Quick Win
                  </span>
                ) : (
                  <span className={`${badgeClass} bg-slate-50 text-slate-500 border border-slate-100`}>
                    Big Swing
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
                {p.name}
              </h3>

              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-8">
                {p.description}
              </p>

              {/* Chips: SIN escalabilidad, SIN impacto/esfuerzo */}
              <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span className="bg-white border border-gray-100 rounded-full px-4 py-2">
                  {p.timeline}
                </span>
                <span className="bg-white border border-gray-100 rounded-full px-4 py-2">
                  {p.budget}
                </span>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 text-xactus font-black uppercase tracking-widest text-[10px]">
                <span className="h-[2px] w-10 bg-xactus" />
                Ver Deep Dive
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay: clic aquí cierra (no crashea porque NO depende de stopPropagation raro) */}
            <motion.button
              type="button"
              aria-label="Cerrar modal"
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Dialog wrapper (no captura onClick global) */}
            <motion.div
              className="fixed z-[90] inset-0 flex items-center justify-center p-4 md:p-10"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Detalle de ${selected.name}`}
            >
              {/* Panel: stopPropagation SOLO aquí */}
              <div
                className="w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-10 border-b border-gray-100 flex items-start justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`${badgeClass} bg-blue-50 text-xactus border border-blue-100`}>
                        {selected.category}
                      </span>
                      {selected.isQuickWin && (
                        <span className={`${badgeClass} bg-amber-50 text-amber-600 border border-amber-100`}>
                          Quick Win
                        </span>
                      )}
                      {!selected.isQuickWin && (
                        <span className={`${badgeClass} bg-slate-50 text-slate-500 border border-slate-100`}>
                          Big Swing
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                      {selected.name}
                    </h3>

                    <p className="mt-4 text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-3xl">
                      {selected.description}
                    </p>

                    {/* Chips: SIN escalabilidad */}
                    <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <span className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
                        {selected.timeline}
                      </span>
                      <span className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
                        {selected.budget}
                      </span>
                    </div>
                  </div>

                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={close}
                    className="shrink-0 p-3 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-xactus"
                    aria-label="Cerrar"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Contenido scrolleable para que no “rompa” la usabilidad */}
                <div className="p-6 md:p-10 space-y-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
                  {/* Deep Dive */}
                  {selected.deepDive ? (
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 border-b-4 border-xactus pb-6">
                        <div>
                          <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900">
                            {selected.deepDive.title}
                          </h4>
                          <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-2">
                            {selected.deepDive.subtitle}
                          </p>
                        </div>

                        {selected.deepDive.baseInfo && (
                          <div className="text-[9px] md:text-[10px] font-black text-xactus uppercase tracking-widest bg-blue-50 px-5 py-3 rounded-2xl border border-blue-100">
                            {selected.deepDive.baseInfo}
                          </div>
                        )}
                      </div>

                      <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-100 bg-white shadow-sm">
                        <table className="w-full text-left text-[10px] md:text-[11px] font-bold uppercase tracking-tight min-w-[900px]">
                          <thead className="bg-gray-900 text-gray-400 border-b border-gray-800">
                            <tr>
                              <th className="p-6 md:p-8">Fase / Estado Actual</th>
                              <th className="p-6 md:p-8">Oportunidad / Iniciativa AI</th>
                              <th className="p-6 md:p-8">Potencial / Impacto</th>
                              <th className="p-6 md:p-8">KPIs Críticos</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {selected.deepDive.phases.map((row, i) => (
                              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-6 md:p-10 align-top w-1/3">
                                  <div className="text-xactus mb-3 text-sm md:text-base font-black tracking-tighter normal-case">
                                    {row.phase}
                                  </div>
                                  <div className="text-gray-400 normal-case font-medium leading-relaxed">
                                    {row.status}
                                  </div>
                                </td>
                                <td className="p-6 md:p-10 align-top w-1/3">
                                  <div className="text-gray-900 mb-3 text-sm md:text-base font-black tracking-tighter normal-case">
                                    {row.initiative}
                                  </div>
                                  <div className="text-gray-400 normal-case font-medium italic leading-relaxed">
                                    {row.opportunity}
                                  </div>
                                </td>
                                <td className="p-6 md:p-10 align-top">
                                  <div className="flex flex-col gap-2">
                                    <div className="bg-gray-100 p-3 rounded-xl">
                                      <div className="text-[8px] opacity-50 mb-1">Potencial</div>
                                      <div className="text-gray-900 normal-case">{row.automationPotential}</div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                                      <div className="text-[8px] text-green-600 opacity-60 uppercase mb-1">
                                        Impacto
                                      </div>
                                      <div className="text-green-700 normal-case">{row.impact}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-6 md:p-10 align-top">
                                  <div className="text-gray-500 normal-case font-medium italic leading-relaxed pt-2">
                                    {row.kpis}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {selected.deepDive.recommendation && (
                        <div className="p-8 md:p-12 bg-xactus text-white rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl font-black -rotate-6 pointer-events-none uppercase">
                            ACTION
                          </div>
                          <h5 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-none relative z-10">
                            {selected.deepDive.recommendation.title}
                          </h5>
                          <p className="text-base md:text-xl font-medium opacity-90 leading-relaxed max-w-4xl relative z-10">
                            {selected.deepDive.recommendation.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 md:p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                        Deep Dive no definido
                      </div>
                      <div className="text-gray-700 font-bold">
                        Este proyecto aún no tiene fases detalladas en <code>deepDive</code>.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Initiatives;
