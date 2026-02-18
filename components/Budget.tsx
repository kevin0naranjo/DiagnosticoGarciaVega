import React, { useMemo } from "react";
import { PROJECTS } from "../constants";

type Range = { min: number; max: number | null; raw: string };

const parseBudget = (s: string): Range => {
  // "$100k+" -> min 100000, max null
  const plus = s.match(/\$([\d.]+)\s*k\+/i);
  if (plus) return { min: Number(plus[1]) * 1000, max: null, raw: s };

  const rng = s.match(/\$([\d.]+)\s*k\s*-\s*\$([\d.]+)\s*k/i);
  if (rng) return { min: Number(rng[1]) * 1000, max: Number(rng[2]) * 1000, raw: s };

  return { min: 0, max: null, raw: s };
};

const Budget: React.FC = () => {
  const split = 5;

  const buckets = useMemo(() => {
    const b = {
      quickWins: [] as typeof PROJECTS,
      bigSwings: [] as typeof PROJECTS,
      nice: [] as typeof PROJECTS,
      deprio: [] as typeof PROJECTS,
    };

    PROJECTS.forEach((p) => {
      const lowEffort = p.effort <= split;
      const highEffort = p.effort > split;
      const highImpact = p.impact > split;

      if (highImpact && lowEffort) b.quickWins.push(p);
      else if (highImpact && highEffort) b.bigSwings.push(p);
      else if (!highImpact && lowEffort) b.nice.push(p);
      else b.deprio.push(p);
    });

    const sum = (arr: typeof PROJECTS) => {
      let min = 0;
      let max: number | null = 0;
      let hasOpen = false;

      arr.forEach((p) => {
        const r = parseBudget(p.budget);
        min += r.min;
        if (r.max === null) hasOpen = true;
        else if (max !== null) max += r.max;
      });

      return { min, max: hasOpen ? null : max };
    };

    return {
      buckets: b,
      totals: {
        quickWins: sum(b.quickWins),
        bigSwings: sum(b.bigSwings),
        nice: sum(b.nice),
        deprio: sum(b.deprio),
      },
    };
  }, []);

  const fmt = (n: number) => `$${Math.round(n / 1000)}k`;

  const TotalCard = ({
    title,
    total,
    tone,
  }: {
    title: string;
    total: { min: number; max: number | null };
    tone: string;
  }) => (
    <div className={`rounded-[2rem] p-8 border ${tone}`}>
      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
        {title}
      </div>
      <div className="mt-3 text-3xl md:text-4xl font-black tracking-tighter text-gray-900">
        {fmt(total.min)}
        {total.max === null ? "+" : ` – ${fmt(total.max)}`}
      </div>
    </div>
  );

  return (
    <div className="space-y-10 md:space-y-16 animate-in fade-in duration-700">
      <header className="max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[2px] w-12 bg-xactus"></span>
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-xactus">
            Presupuesto
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
          Rangos por <span className="text-xactus">portafolio</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <TotalCard title="Quick Wins" total={buckets.totals.quickWins} tone="bg-white border-gray-100" />
        <TotalCard title="Big Swings" total={buckets.totals.bigSwings} tone="bg-white border-gray-100" />
        <TotalCard title="Nice to Have" total={buckets.totals.nice} tone="bg-white border-gray-100" />
        <TotalCard title="Deprioritize" total={buckets.totals.deprio} tone="bg-white border-gray-100" />
      </div>

      <div className="brutal-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 bg-white">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900">
          Presupuesto por iniciativa
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <div key={p.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                {p.category}
              </div>
              <div className="mt-2 font-black text-gray-900">{p.name}</div>
              <div className="mt-2 text-sm font-black text-xactus">{p.budget}</div>
              <div className="mt-1 text-xs font-medium text-gray-500">
                Timeline: {p.timeline} · Escalabilidad: {p.scalability}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
