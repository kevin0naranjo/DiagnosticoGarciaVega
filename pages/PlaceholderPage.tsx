import React from "react";

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="p-10 md:p-16 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm">
        <div className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
          Sección
        </div>
        <h2 className="mt-3 text-3xl md:text-6xl font-black tracking-tighter text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PlaceholderPage;