
import React from 'react';
import { motion } from 'framer-motion';

const Forecasting: React.FC = () => {
  const phases = [
    {
      id: "01",
      title: "ETL & Pipeline",
      desc: "Información fragmentada. Generación de conjunto de datos único.",
      initiative: "Centralización de variables clave + Pipeline ETL automático.",
      impact: "Cimentación para predicción real."
    },
    {
      id: "02",
      title: "Forecast v1.0",
      desc: "Análisis estadístico incompleto hoy. Pronóstico demanda 1-4 semanas.",
      initiative: "Modelo IA de demanda por sede/familia.",
      impact: "10-20% Reducción Logística Emergencia."
    },
    {
      id: "03",
      title: "Retornos Probables",
      desc: "Llegada imprevista de inventario. Desorganización en patio.",
      initiative: "Modelo probabilístico de retorno por proyecto.",
      impact: "5-10% Reducción Costos Stock."
    },
    {
      id: "04",
      title: "Recomendación Traslado",
      desc: "Comunicación intersede deficiente genera stock estacionario.",
      initiative: "Sugerencia automática de agenda de traslados x IA.",
      impact: "Optimización total de red de activos."
    }
  ];

  return (
    <div className="space-y-12 md:space-y-20 animate-in slide-in-from-bottom duration-1000">
      <header className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">Visión 2026</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-gray-900 uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
          LA CUMBRE: <br/> <span className="text-xactus">FORECASTING</span>
        </h2>
        <p className="text-xl md:text-3xl font-medium text-gray-500 leading-tight max-w-3xl">
          Controlar toda la operación García Vega desde la <span className="text-gray-900 font-bold">predicción</span> y no desde la reacción.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {phases.map((phase, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="brutal-card p-10 md:p-14 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group bg-white shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 text-xactus opacity-[0.03] font-black text-9xl group-hover:opacity-10 transition-all duration-700 pointer-events-none">
              {phase.id}
            </div>
            
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Hito Evolutivo</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-6 leading-none">{phase.title}</h3>
              <p className="text-sm md:text-base text-gray-500 font-medium mb-10 normal-case leading-relaxed">{phase.desc}</p>
              
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 mb-8">
                <h5 className="text-[10px] font-black text-xactus uppercase tracking-widest mb-3">Motor de Inteligencia</h5>
                <p className="text-sm md:text-base font-bold text-gray-800 leading-snug">{phase.initiative}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-[11px] md:text-[12px] font-black text-green-600 uppercase tracking-widest">Target: {phase.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-xactus p-10 md:p-24 rounded-[3rem] md:rounded-[6rem] text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-black -rotate-12 pointer-events-none uppercase">FUTURE</div>
        <div className="max-w-4xl relative z-10 mx-auto text-center">
          <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">EL CAMBIO ES <br/>ESTRUCTURAL</h3>
          <p className="text-lg md:text-2xl opacity-80 font-medium leading-relaxed mb-16">
            Llegar al forecast es posible solo si cerramos hoy la brecha del dato operativo. Un García Vega automatizado es un García Vega con 0% de inventario estacionario.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { l: 'OTIF Target', v: '95%+' },
              { l: 'Fill-Rate', v: '98%' },
              { l: 'Eficiencia', v: '+20%' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-50">{stat.l}</div>
                <div className="text-3xl md:text-5xl font-black tracking-tighter">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;
