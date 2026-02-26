import React, { useMemo } from "react";
import { PROJECTS } from "../../constants";

const ImpactEffortMatrix: React.FC = () => {
  // Corte típico de matriz 0–10: 5 separa bajo/alto
  const SPLIT = 5;

  const groups = useMemo(() => {
    const q = {
      quickWins: [] as typeof PROJECTS,
      bigSwings: [] as typeof PROJECTS,
      niceToHave: [] as typeof PROJECTS,
      deprioritize: [] as typeof PROJECTS,
    };

    PROJECTS.forEach((p) => {
      const lowEffort = p.effort <= SPLIT;
      const highEffort = p.effort > SPLIT;
      const highImpact = p.impact > SPLIT;
      const lowImpact = p.impact <= SPLIT;

      if (highImpact && lowEffort) q.quickWins.push(p);
      else if (highImpact && highEffort) q.bigSwings.push(p);
      else if (lowImpact && lowEffort) q.niceToHave.push(p);
      else q.deprioritize.push(p);
    });

    // ordena para que se vea “bonito”
    const sort = (a: any, b: any) => b.impact - a.impact || a.effort - b.effort;
    q.quickWins.sort(sort);
    q.bigSwings.sort(sort);
    q.niceToHave.sort(sort);
    q.deprioritize.sort(sort);

    return q;
  }, []);

  const List = ({
    items,
    textClass,
    bulletClass,
  }: {
    items: typeof PROJECTS;
    textClass: string;
    bulletClass: string;
  }) => (
    <ul className={`mt-8 space-y-3 ${textClass}`}>
      {items.length ? (
        items.map((p) => (
          <li key={p.id} className="flex items-start gap-3">
            <span className={`mt-[6px] text-[10px] ${bulletClass}`}>■</span>
            <span className="text-lg md:text-xl font-medium leading-tight">
              {p.name}
            </span>
          </li>
        ))
      ) : (
        <li className="opacity-70">—</li>
      )}
    </ul>
  );

  return (
    <div className="w-full bg-white rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 p-6 md:p-10 overflow-hidden">
      {/* Título */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
          Matriz Impacto–Esfuerzo
        </h3>
      </div>

      {/* Lienzo */}
      <div className="relative w-full h-[560px] md:h-[620px]">
        {/* Etiquetas de ejes */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 rotate-[-90deg] origin-left text-xl md:text-2xl font-medium text-gray-900">
          Impacto
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-xl md:text-2xl font-medium text-gray-900">
          Esfuerzo
        </div>

        {/* Matriz 2x2 */}
        <div className="absolute inset-0 pl-10 pr-4 pb-10 pt-4">
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full rounded-3xl overflow-hidden">
            {/* Quick Wins (arriba-izq) */}
            <div className="bg-[#0B3A63] p-8 md:p-10">
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold">Quick Wins</div>
                <div className="text-white/80 text-lg md:text-xl font-medium mt-1">
                  Alto Impacto, Bajo Esfuerzo:
                </div>
                <List
                  items={groups.quickWins}
                  textClass="text-white"
                  bulletClass="text-white"
                />
              </div>
            </div>

            {/* Big Swings (arriba-der) */}
            <div className="bg-[#1D5D8B] p-8 md:p-10">
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold">Big Swings</div>
                <div className="text-white/80 text-lg md:text-xl font-medium mt-1">
                  Alto Impacto, Alto Esfuerzo:
                </div>
                <List
                  items={groups.bigSwings}
                  textClass="text-white"
                  bulletClass="text-white"
                />
              </div>
            </div>

            {/* Nice to Have (abajo-izq) */}
            <div className="bg-[#2E86C1] p-8 md:p-10">
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold">Nice to Have</div>
                <div className="text-white/80 text-lg md:text-xl font-medium mt-1">
                  Bajo Impacto, Bajo Esfuerzo
                </div>
                <List
                  items={groups.niceToHave}
                  textClass="text-white"
                  bulletClass="text-white"
                />
              </div>
            </div>

            {/* Deprioritize (abajo-der) */}
            <div className="bg-[#9CC7E6] p-8 md:p-10">
              <div className="text-white">
                <div className="text-2xl md:text-3xl font-bold">Deprioritize</div>
                <div className="text-white/80 text-lg md:text-xl font-medium mt-1">
                  Bajo Impacto, Alto Esfuerzo:
                </div>
                <List
                  items={groups.deprioritize}
                  textClass="text-white"
                  bulletClass="text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flechas (opcional, muy sutil) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 right-4 top-1/2 h-[1px] bg-black/10" />
          <div className="absolute top-4 bottom-10 left-1/2 w-[1px] bg-black/10" />
        </div>
      </div>
    </div>
  );
};

export default ImpactEffortMatrix;
