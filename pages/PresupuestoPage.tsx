import React, { useMemo } from "react";

type RowKind = "normal" | "subtotal" | "discount" | "iva" | "total";

type Row = {
  desc: string;
  value: string;
  kind?: RowKind;
};

export default function PresupuestoPage() {
  const rows: Row[] = useMemo(
    () =>[
      {
        desc: "Diseño e implementación del sistema\nde digitalización comercial",
        value: "$ 40,653,360.00",
        kind: "normal",
      },
      {
        desc: "Costos de alojamiento del servidor",
        value: "$ 257,150.00",
        kind: "normal",
      },
      { desc: "Subtotal", value: "$ 40,910,510.00", kind: "subtotal" },
      { desc: "Descuento (10%)", value: "- $ 4,091,051.00", kind: "discount" },
      { desc: "Subtotal con descuento", value: "$ 36,819,459.00", kind: "subtotal" },
      { desc: "IVA (19%)", value: "$ 6,995,697.21", kind: "iva" },
      { desc: "Total", value: "$ 43,815,156.21", kind: "total" },
    ],[]
  );

  return (
    <div className="space-y-10 md:space-y-14 animate-in fade-in duration-700 font-sans pb-10">
      
      {/* HEADER */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          Presupuesto
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-500 font-medium max-w-3xl">
          Desglose de inversión estimada para la ejecución del proyecto de digitalización.
        </p>
      </div>

      {/* TABLA DE PRESUPUESTO */}
      <div className="max-w-4xl bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden">
        
        {/* Título de la Tabla */}
        <div className="bg-[#0e346a] text-white text-center font-black py-4 text-lg tracking-wide uppercase border-b border-white/20">
          Digitalización Comercial
        </div>

        {/* Cabeceras de Columnas */}
        <div className="grid grid-cols-2 bg-[#183f73] text-white text-sm md:text-base font-bold">
          <div className="py-3 px-6 border-r border-white/20">Descripción</div>
          <div className="py-3 px-6 text-right">Valor (COP)</div>
        </div>

        {/* Filas */}
        <div className="flex flex-col">
          {rows.map((r, idx) => {
            // Lógica de estilos por tipo de fila
            let rowBg = "bg-white";
            let textColorDesc = "text-gray-700";
            let textColorVal = "text-gray-900";
            let fontWeigth = "font-medium";
            let borderStyle = "border-b border-gray-100";

            if (r.kind === "subtotal") {
              rowBg = "bg-gray-50/80";
              textColorDesc = "text-gray-900";
              fontWeigth = "font-bold";
            } else if (r.kind === "discount") {
              textColorDesc = "text-red-500";
              textColorVal = "text-red-600 font-bold";
            } else if (r.kind === "iva") {
              textColorDesc = "text-gray-500";
              textColorVal = "text-gray-600";
            } else if (r.kind === "total") {
              rowBg = "bg-[#1f5f9f]";
              textColorDesc = "text-white";
              textColorVal = "text-white";
              fontWeigth = "font-black text-lg md:text-xl";
              borderStyle = ""; // Quitamos el borde inferior en el total
            }

            return (
              <div 
                key={idx} 
                className={`grid grid-cols-2 ${borderStyle} ${rowBg} transition-colors hover:bg-opacity-80`}
              >
                <div className={`py-4 px-6 border-r border-gray-100 whitespace-pre-line ${fontWeigth} ${textColorDesc} text-sm md:text-base leading-relaxed`}>
                  {r.desc}
                </div>
                <div className={`py-4 px-6 text-right flex items-center justify-end ${fontWeigth} ${textColorVal} text-sm md:text-lg tracking-tight`}>
                  {r.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="max-w-4xl mt-8 bg-gray-50 border border-gray-100 text-gray-500 px-5 py-4 rounded-xl text-sm md:text-base font-medium flex items-start gap-3">
        <span className="text-lg leading-none mt-0.5">ℹ️</span>
        <p>
          Valores sujetos a validación final y ajustes conforme al alcance definitivo y los requerimientos descubiertos durante las fases iniciales.
        </p>
      </div>

    </div>
  );
}