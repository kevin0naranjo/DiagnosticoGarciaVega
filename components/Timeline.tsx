import React from "react";

const Timeline: React.FC = () => {
  const blocks = [
    {
      w: "Sem 1–2",
      title: "Descubrimiento & Diseño TO-BE",
      bullets: [
        "Flujo cotización y reglas mínimas (campos obligatorios)",
        "Diccionario mínimo de datos + validaciones",
        "Definición KPIs y línea base (latencia, completitud, OTIF/fill-rate)",
      ],
    },
    {
      w: "Sem 3–5",
      title: "Construcción MVP Fase 1 (Cotización estándar → ERP)",
      bullets: [
        "Formato digital único + adjuntos/evidencias",
        "Ingesta automática a ERP (API/BD según acceso)",
        "Bitácora/auditoría (quién, qué, cuándo) + tablero básico",
      ],
    },
    {
      w: "Sem 6–8",
      title: "Piloto Fase 1",
      bullets: ["Capacitación + acompañamiento", "Ajustes por fricción real", "Medición: latencia y % campos completos"],
    },
    {
      w: "Sem 9–13",
      title: "Construcción Fase 2 (Inventario por cotizaciones)",
      bullets: [
        "Reserva / compromiso de inventario por cotización",
        "Reglas de vencimiento, prioridades y sustitutos (si aplica)",
        "Sugerencia de stock de seguridad + alertas",
      ],
    },
    {
      w: "Sem 14–16",
      title: "Piloto Fase 2 + Despliegue",
      bullets: [
        "Medición: OTIF, fill-rate, traslados de emergencia, negocios perdidos",
        "Despliegue por sedes + protocolo de gobierno del dato",
      ],
    },
  ];

  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700">
      <header className="max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">
            Cronograma
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Hoja de ruta <span className="text-xactus">16 semanas</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {blocks.map((b) => (
          <div
            key={b.w}
            className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                  {b.w}
                </div>
                <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tighter text-gray-900 uppercase">
                  {b.title}
                </h3>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest bg-blue-50 text-xactus px-4 py-2 rounded-full border border-blue-100 w-fit">
                Entregables
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 font-medium">
              {b.bullets.map((x, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[7px] text-[10px] text-xactus">■</span>
                  <span className="leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
