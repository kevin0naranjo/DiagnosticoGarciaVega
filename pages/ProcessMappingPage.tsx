import React, { useMemo } from "react";

const ProcessMappingPage: React.FC = () => {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";

  const images = useMemo(
    () => [
      {
        src: `${baseUrl}images/procesos-inventario.png`,
        alt: "Mapa de procesos inventario / comercial / inter-sede",
      },
      {
        src: `${baseUrl}images/procesos-cartera.png`,
        alt: "Mapa de procesos cartera",
      },
      {
        src: `${baseUrl}images/procesos-talentohumano.png`,
        alt: "Mapa de procesos talento humano / operación",
      },
    ],
    [baseUrl]
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-auto block rounded-[1.5rem] border border-gray-100 bg-white"
        />
      ))}
    </div>
  );
};

export default ProcessMappingPage;