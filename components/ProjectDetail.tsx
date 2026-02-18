// components/ProjectDetail.tsx
import React from "react";
import { PROJECTS, VIEW_PROJECT_IDS } from "../constants";

interface TableProps {
  title: string;
  subtitle: string;
  baseInfo?: string;
  phases: any[];
  recommendation?: { title: string; text: string };
}

const ProjectTable: React.FC<TableProps> = ({ title, subtitle, baseInfo, phases, recommendation }) => (
  <div className="space-y-12">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-4 border-xactus pb-8 gap-4">
      <div>
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 leading-none">
          {title}
        </h3>
        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-3">
          {subtitle}
        </p>
      </div>
      {baseInfo && (
        <div className="text-[9px] md:text-[10px] font-black text-xactus uppercase tracking-widest bg-blue-50 px-5 py-3 rounded-2xl border border-blue-100">
          {baseInfo}
        </div>
      )}
    </div>

    <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[3rem] border border-gray-100 shadow-xl bg-white custom-scrollbar">
      <table className="w-full text-left text-[10px] md:text-[11px] font-bold uppercase tracking-tight min-w-[800px]">
        <thead className="bg-gray-900 text-gray-400 border-b border-gray-800">
          <tr>
            <th className="p-6 md:p-8">Fase / Estado Actual</th>
            <th className="p-6 md:p-8">Oportunidad / Iniciativa AI</th>
            <th className="p-6 md:p-8">Potencial / Impacto</th>
            <th className="p-6 md:p-8">KPIs Críticos</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {phases.map((p, i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
              <td className="p-6 md:p-10 align-top w-1/3">
                <div className="text-xactus mb-3 text-sm md:text-base font-black tracking-tighter">
                  {p.phase}
                </div>
                <div className="text-gray-400 normal-case font-medium leading-relaxed">{p.status}</div>
              </td>
              <td className="p-6 md:p-10 align-top w-1/3">
                <div className="text-gray-900 mb-3 text-sm md:text-base font-black tracking-tighter">
                  {p.initiative}
                </div>
                <div className="text-gray-400 normal-case font-medium italic leading-relaxed">
                  {p.opportunity}
                </div>
              </td>
              <td className="p-6 md:p-10 align-top">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    <div className="text-[8px] opacity-50 mb-1">Potencial</div>
                    <div className="text-gray-900">{p.automationPotential}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                    <div className="text-[8px] text-green-600 opacity-60 uppercase mb-1">Impacto</div>
                    <div className="text-green-700">{p.impact}</div>
                  </div>
                </div>
              </td>
              <td className="p-6 md:p-10 align-top">
                <div className="text-gray-500 normal-case font-medium italic leading-relaxed pt-2">
                  {p.kpis}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {recommendation && (
      <div className="p-10 md:p-20 bg-xactus text-white rounded-[2.5rem] md:rounded-[5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 text-9xl font-black opacity-10 pointer-events-none uppercase">
          ACTION
        </div>
        <h4 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter leading-none relative z-10">
          {recommendation.title}
        </h4>
        <p className="font-medium text-lg md:text-2xl opacity-90 leading-relaxed max-w-4xl relative z-10">
          {recommendation.text}
        </p>
      </div>
    )}
  </div>
);

const ProjectDetail: React.FC<{ view: string }> = ({ view }) => {
  const ids = VIEW_PROJECT_IDS[view as any] || [];
  const selected = PROJECTS.filter((p) => ids.includes(p.id) && p.deepDive);

  return (
    <div className="space-y-16 md:space-y-32 animate-in fade-in duration-700 max-w-7xl mx-auto">
      {selected.map((p) => (
        <ProjectTable
          key={p.id}
          title={p.deepDive!.title}
          subtitle={p.deepDive!.subtitle}
          baseInfo={p.deepDive!.baseInfo}
          phases={p.deepDive!.phases}
          recommendation={p.deepDive!.recommendation}
        />
      ))}
    </div>
  );
};

export default ProjectDetail;
