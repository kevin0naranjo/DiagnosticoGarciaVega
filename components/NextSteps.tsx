import React from "react";

const NextSteps: React.FC = () => {
  const steps = [
    {
      title: "Alinear habilitadores (TO-BE + dato mínimo)",
      bullets: [
        "Validar campos obligatorios por cotización (señal comercial)",
        "Definir dueños de datos y reglas de calidad",
        "Cerrar KPIs y línea base (latencia, completitud, OTIF/fill-rate)",
      ],
    },
    {
      title: "Asegurar acceso técnico",
      bullets: [
        "Definir acceso ERP (API/BD) y ambientes (dev/pilot)",
        "Bitácora / auditoría: quién, qué, cuándo",
        "Protocolo de despliegue por sedes",
      ],
    },
    {
      title: "Pilotos con medición dura",
      bullets: [
        "Fase 1 piloto: latencia + % campos completos",
        "Fase 2 piloto: OTIF, fill-rate, urgencias, negocios perdidos",
        "Decisión: escalar + gobierno del dato",
      ],
    },
  ];

  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700">
      <header className="max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">
            Siguientes Pasos
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Cerrar brecha del <span className="text-xactus">dato</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        {steps.map((s) => (
          <div
            key={s.title}
            className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-white"
          >
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-gray-900">
              {s.title}
            </h3>
            <ul className="mt-6 space-y-3 text-gray-600 font-medium">
              {s.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] text-[10px] text-xactus">■</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-xactus p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl">
        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
          Resultado esperado
        </h4>
        <p className="mt-5 text-lg md:text-2xl font-medium opacity-85 max-w-4xl leading-relaxed">
          Con señal comercial + inventario comprometido + reingresos digitalizados, el Forecasting se vuelve un motor real de decisión (no una hipótesis).
        </p>
      </div>
    </div>
  );
};

export default NextSteps;
