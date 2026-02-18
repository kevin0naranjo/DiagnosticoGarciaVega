import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MapItem = {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
};

const ProcessMap: React.FC = () => {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";

  const maps: MapItem[] = useMemo(
    () => [
      {
        id: "inventario",
        title: "Inventario / Comercial / Inter-sede",
        subtitle: "Flujo operativo y cuellos de botella (AS-IS)",
        src: `${baseUrl}images/procesos-inventario.png`,
        alt: "Mapa de procesos de inventario, comercial, logística inter-sede, ERP, ingeniería y planta",
      },
      {
        id: "cartera",
        title: "Cartera",
        subtitle: "Captura de documentación → aprobación → mora/siniestro",
        src: `${baseUrl}images/procesos-cartera.png`,
        alt: "Mapa de procesos de cartera con cuellos de botella en documentación y pagos",
      },
      {
        id: "talento",
        title: "Talento Humano / Operación",
        subtitle: "Rendimiento, patio, planta e ingeniería (cuellos de botella)",
        src: `${baseUrl}images/procesos-talentohumano.png`,
        alt: "Mapa de procesos de talento humano y operación con cuellos de botella",
      },
    ],
    [baseUrl]
  );

  const [openId, setOpenId] = useState<string | null>(null);
  const openMap = maps.find((m) => m.id === openId);

  return (
    <div className="space-y-12 animate-in slide-in-from-right duration-700">
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
        Mapeo de <span className="text-xactus">Procesos</span>
      </h2>

      <div className="relative p-6 md:p-12 brutal-card rounded-[2.5rem] md:rounded-[4.5rem]">
        <div className="hidden md:block absolute top-0 right-0 p-8 opacity-[0.03] font-black text-8xl -rotate-12 pointer-events-none uppercase">
          PROCESS MAPS
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {maps.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setOpenId(item.id)}
              className="text-left p-6 rounded-[2rem] border-2 border-gray-100 bg-white hover:border-xactus transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg md:text-xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs md:text-sm text-gray-500 font-medium">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase bg-gray-900 text-white px-3 py-2 rounded-full">
                  Ver
                </span>
              </div>

              <div className="rounded-[1.5rem] overflow-hidden border border-gray-200 bg-white">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>

              <p className="mt-4 text-[11px] text-gray-500 font-medium">
                Click para ampliar
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {openMap && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              className="w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border-2 border-gray-100"
              initial={{ y: 14, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.99, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 md:p-6 flex items-start justify-between gap-4 border-b border-gray-100">
                <div>
                  <div className="text-sm md:text-base font-black uppercase tracking-tighter text-gray-900">
                    {openMap.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                    {openMap.subtitle}
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase hover:opacity-90"
                  onClick={() => setOpenId(null)}
                >
                  Cerrar
                </button>
              </div>

              <div className="p-3 md:p-6">
                <div className="rounded-[1.5rem] overflow-hidden border border-gray-200">
                  <img
                    src={openMap.src}
                    alt={openMap.alt}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dejo esta sección igual (si la quieres quitar, dime y la removemos) */}
      <div className="p-8 md:p-16 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl md:text-8xl font-black -rotate-6 pointer-events-none">
          CAUSES
        </div>
        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-10 text-xactus relative z-10">
          Causas Raíz Transversales
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-sm md:text-lg opacity-80 font-medium relative z-10">
          <div className="space-y-4">
            <p className="flex gap-4">
              <span className="text-xactus">01</span> Fragmentación del dato y ausencia de trazabilidad E2E.
            </p>
            <p className="flex gap-4">
              <span className="text-xactus">02</span> Estandarización insuficiente por sede/persona.
            </p>
          </div>
          <div className="space-y-4">
            <p className="flex gap-4">
              <span className="text-xactus">03</span> Desalineación del ERP con el ciclo real de alquiler.
            </p>
            <p className="flex gap-4">
              <span className="text-xactus">04</span> Latencia operativa en captura (retornos/reingresos).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessMap;
