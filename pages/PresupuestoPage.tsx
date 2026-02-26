// src/pages/PresupuestoPage.tsx
import React, { useMemo } from "react";

type Row = {
  desc: string;
  value: string;
  kind?: "normal" | "subtotal" | "discount" | "iva" | "total";
};

const NAVY = "#0F3B68";

export default function PresupuestoPage() {
  const rows: Row[] = useMemo(
    () => [
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
      { desc: "Descuento (10%)", value: "$ 4,091,051.00", kind: "discount" },
      { desc: "Subtotal con descuento", value: "$ 36,819,459.00", kind: "subtotal" },
      { desc: "IVA (19%)", value: "$ 6,995,697.21", kind: "iva" },
      { desc: "Total", value: "$43,815,156.21", kind: "total" },
    ],
    []
  );

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Presupuesto</h1>

        <div className="mt-8 overflow-x-auto">
          <div className="min-w-[780px] bg-white border border-black">
            {/* Header superior centrado */}
            <div className="grid grid-cols-2">
              <div
                className="col-span-2 text-center text-white font-semibold py-3 border-b border-black"
                style={{ background: NAVY }}
              >
                Digitalización Comercial
              </div>

              {/* Subheaders */}
              <div
                className="text-white font-semibold py-2 px-3 border-r border-black border-b border-black"
                style={{ background: NAVY }}
              >
                Descripción
              </div>
              <div
                className="text-white font-semibold py-2 px-3 border-b border-black"
                style={{ background: NAVY }}
              >
                Valor
              </div>
            </div>

            {/* Rows */}
            <div>
              {rows.map((r, idx) => {
                const isTotal = r.kind === "total";
                const leftBg = isTotal ? NAVY : "transparent";
                const leftColor = isTotal ? "#fff" : "#111827";

                return (
                  <div key={idx} className="grid grid-cols-2 border-b border-black last:border-b-0">
                    <div
                      className="py-2.5 px-3 border-r border-black whitespace-pre-line"
                      style={{ background: leftBg, color: leftColor }}
                    >
                      <div className={isTotal ? "font-bold text-lg" : "text-[16px]"}>{r.desc}</div>
                    </div>

                    <div className="py-2.5 px-3 flex items-center justify-between">
                      <span className={isTotal ? "font-black text-xl" : "text-[16px]"}>{r.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Nota opcional (si la quieres como en otras páginas) */}
        <div className="mt-6 bg-gray-100 border border-gray-200 px-4 py-3 text-gray-700">
          Valores sujetos a validación final y ajustes conforme al alcance definitivo.
        </div>
      </div>
    </div>
  );
}