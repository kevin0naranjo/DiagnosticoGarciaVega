// components/AIEcosystem.tsx
import React from "react";
import { AI_APPLICATIONS } from "../../constants";

const AIEcosystem: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-16 animate-in fade-in duration-700">
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
        Ecosistema <span className="text-xactus">IA</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {AI_APPLICATIONS.map((app, i) => (
          <div
            key={i}
            className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]"
          >
            <div className="text-5xl md:text-7xl mb-6 md:mb-10">{app.icon}</div>

            <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 tracking-tighter mb-4 leading-none">
              {app.title}
            </h3>

            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6 md:mb-8">
              {app.description}
            </p>

            <span className="text-[9px] md:text-[10px] font-black text-xactus uppercase tracking-widest bg-blue-50 px-3 md:px-4 py-1 rounded-full">
              {app.impactArea}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIEcosystem;
