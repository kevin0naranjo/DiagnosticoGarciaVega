import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos la interfaz
interface CriticalProcess {
  title: string;
  img: string;
  problem: string;
  impact: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState<CriticalProcess | null>(null);

  // Hook para detectar la tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProcess(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const criticalProcesses: CriticalProcess[] = [
    {
      title: "Inventario & Alquiler",
      img: "/images/inventario.jpg",
      problem: "Brecha crítica entre existencia y disponibilidad real. El sistema no captura el ciclo de alquiler completo (retornos parciales, mantenimiento), generando una 'disponibilidad aparente' que frena las ventas.",
      impact: "Alta Latencia",
      id: "INV-01"
    },
    {
      title: "Talento Humano",
      img: "/images/talento_humano.jpg",
      problem: "Gestión informal sin medición de productividad. La falta de un software de seguimiento de tareas genera tiempos muertos invisibles y una carga operativa desbalanceada por sede.",
      impact: "Capacidad Oculta",
      id: "HR-02"
    },
    {
      title: "Cartera & Aprobaciones",
      img: "/images/cartera.jpg",
      problem: "Procesos de aprobación manuales de 1 a 2 semanas. La falta de automatización en el análisis de riesgo expone financieramente a la empresa y ralentiza la rotación de activos.",
      impact: "Cuello de Botella",
      id: "FIN-03"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-20 animate-in fade-in duration-700 relative">
      
      {/* --- HEADER --- */}
      <header className="max-w-5xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-[2px] w-8 md:w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">Consultoría Estratégica</span>
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.85] uppercase mb-8 md:mb-12">
          GARCÍA VEGA S.A.S.<br className="hidden md:block"/>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="p-8 md:p-12 border-l-4 md:border-l-[12px] border-xactus bg-gray-50 rounded-r-[2rem] md:rounded-r-[4rem] shadow-sm flex-1">
            <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-700 italic">
              La agilidad comercial de García Vega hoy depende de la <span className="font-bold text-xactus text-xl md:text-3xl not-italic">Reactividad</span>. 
              El software y la IA son los pilares para transformar ese esfuerzo en un sistema escalable y predecible.
            </p>
          </div>
          <div className="md:w-64 space-y-4">
             <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">Elaborado por:</div>
             <img src="/images/xactuslogo.png" alt="Xactus" className="h-8 grayscale hover:grayscale-0 transition-all cursor-help" />
             <div className="text-[9px] font-bold text-gray-400 leading-tight">Expertos en Transformación Operativa e Inteligencia Artificial.</div>
          </div>
        </div>
      </header>

      {/* --- CRITICAL PROCESSES SECTION --- */}
      <section className="space-y-10 md:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 leading-none">Procesos <span className="text-xactus">Críticos</span></h2>
            <p className="text-gray-500 font-medium text-sm md:text-lg mt-4 italic">Haz clic en cada tarjeta para ver la evidencia completa.</p>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-gray-100 mx-10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {criticalProcesses.map((proc, i) => (
            <motion.div 
              key={i}
              layoutId={`card-${proc.id}`}
              onClick={() => setSelectedProcess(proc)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="brutal-card rounded-[2.5rem] overflow-hidden group flex flex-col h-full bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-xactus/20"
            >
              <div className="relative h-80 overflow-hidden bg-slate-900">
                {/* Nota: En la tarjeta pequeña usamos object-cover para rellenar, 
                    pero en el modal usaremos object-contain */}
                <motion.img 
                  layoutId={`img-${proc.id}`}
                  src={proc.img} 
                  alt={proc.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518173946687-a4c8a98039f5?auto=format&fit=crop&q=80&w=800&keyword=${proc.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-widest border border-white/20 px-2 py-1 rounded backdrop-blur-sm">{proc.id}</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="bg-amber-400 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block shadow-lg">Ver Detalle</span>
                  <h4 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tighter leading-tight">{proc.title}</h4>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="text-[10px] font-black text-xactus uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-xactus"></span> Problemática
                  </h5>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-medium line-clamp-3">
                    {proc.problem}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MODAL FULL SCREEN (EXPEDIENTE DETALLADO) --- */}
      <AnimatePresence>
        {selectedProcess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop Blur con cierre al hacer click fuera */}
            <div 
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm"
              onClick={() => setSelectedProcess(null)}
            ></div>

            {/* Modal Card */}
            <motion.div 
              layoutId={`card-${selectedProcess.id}`}
              className="bg-white w-full max-w-7xl h-full max-h-[95vh] overflow-hidden rounded-[2rem] shadow-2xl relative flex flex-col z-[101]"
            >
              
              {/* Botón cerrar */}
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProcess(null); }}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-xactus backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center transition-all font-bold text-lg border border-white/10"
              >
                ✕
              </button>
              <div className="absolute top-5 right-16 z-50 text-[10px] font-black text-white/50 uppercase tracking-widest pointer-events-none hidden md:block">
                Presiona ESC para cerrar
              </div>

              {/* CONTENEDOR DE IMAGEN (Parte Superior) 
                  Aquí aseguramos que la imagen NO se corte */}
              <div className="w-full flex-1 bg-gray-900 relative flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-[55vh]">
                <motion.img 
                  layoutId={`img-${selectedProcess.id}`}
                  src={selectedProcess.img} 
                  /* 
                     CLAVE: object-contain asegura que se vea TODA la imagen.
                     w-full y h-full obligan a usar todo el espacio disponible.
                  */
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518173946687-a4c8a98039f5?auto=format&fit=crop&q=80&w=800&keyword=${selectedProcess.title}`;
                  }}
                />
                
                {/* Overlay sutil solo en bordes para legibilidad si la imagen es blanca */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5"></div>
              </div>

              {/* CONTENEDOR DE TEXTO (Parte Inferior) */}
              <div className="w-full bg-white p-6 md:p-10 border-t-4 border-xactus flex-shrink-0 max-h-[50vh] overflow-y-auto">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                  
                  {/* Título y ID */}
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-2">
                        <span className="bg-xactus text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">ID: {selectedProcess.id}</span>
                        <span className="text-amber-500 text-[9px] font-black uppercase tracking-widest">Análisis de Caso</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
                        {selectedProcess.title}
                      </h2>
                  </div>

                  {/* Descripción del Problema */}
                  <div className="flex-[1.5]">
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Diagnóstico de la Problemática</h3>
                    <p className="text-base md:text-lg leading-relaxed font-medium text-gray-800 border-l-2 border-gray-200 pl-4">
                      {selectedProcess.problem}
                    </p>
                    
                    <div className="mt-6 flex gap-8 md:gap-16 pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Impacto</div>
                        <div className="text-xl font-black text-red-500">{selectedProcess.impact}</div>
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Solución</div>
                        <div className="text-sm font-bold text-gray-900">Digitalización + IA</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RESTO DEL DASHBOARD (Strategic Vision & Metrics) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-20">
        <motion.div 
          whileHover={{ y: -5 }}
          className="brutal-card p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] flex flex-col justify-between border-xactus/20 bg-white"
        >
          <div>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-10 text-xactus shadow-inner">🎯</div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-xactus leading-none">Oportunidad <br/>Digital</h3>
            <p className="text-gray-600 text-sm md:text-xl leading-relaxed font-medium">
              Eliminar la <span className="text-gray-900 font-bold">fragmentación del dato</span>. La actualización de cotizaciones en ERP toma una porción alta del tiempo de cada representativo comercial, reduciendo la latencia de la información drásticamente. <span className="text-xactus font-bold">proceso automatizable entre el 40-70%</span>.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="brutal-card p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-xactus text-white flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-10 text-white">⚙️</div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Hoja de Ruta <br/></h3>
            <div className="space-y-6">
              <p className="text-sm md:text-lg leading-relaxed font-medium opacity-90 border-l-2 border-white/30 pl-6">
                No podemos predecir si no podemos medir. El primer paso es la digitalización Comercial.
              </p>
              <div className="p-8 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-3">Recomendación Xactus:</p>
                <p className="text-sm md:text-lg font-bold">Tercerizar flota de transporte. Liberar al equipo de la gestión logística para enfocarse en el alto valor.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mt-12 pb-20">
        {[
          { label: 'Índice Madurez', val: '38.75%', desc: 'Criterio NIST CSF 2.0', color: 'text-gray-900' },
          { label: 'Proyectos Recomendados', val: '5', desc: 'Roadmap Xactus', color: 'text-xactus' },
          { label: 'Target Operativo', val: '5-25%', desc: 'capacidad efectiva adicional ', color: 'text-gray-900' }
        ].map((item, i) => (
          <div key={i} className="p-10 md:p-12 border border-gray-100 rounded-[2rem] md:rounded-[3.5rem] bg-white hover:border-xactus/30 transition-all shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">{item.label}</p>
            <div className={`text-4xl lg:text-6xl font-black mb-3 tracking-tighter ${item.color}`}>{item.val}</div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;