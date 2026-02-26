export type ViewType =
  | "problem-tree"
  | "digitalization"
  | "process-mapping"
  | "benchmark"
  | "ai-types"
  | "matrix"
  | "initiatives"
  | "deep-dives"
  | "scalability"
  | "timeline"
  | "budget"
  | "disruption"
  | "annex-nist"
  | "annex-issues";

export interface AIApp {
  title: string;
  description: string;
  impactArea: string;
  icon: string;
}


export interface DeepDivePhase {
  phase: string;
  status: string;
  opportunity: string;
  initiative: string;
  automationPotential: string;
  impact: string;
  kpis: string;
}

export interface DeepDive {
  title: string;
  subtitle?: string;
  baseInfo?: string;
  phases: DeepDivePhase[];
  recommendation?: {
    title: string;
    text: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  impact: number;
  effort: number;
  category: string;
  budget: string;
  timeline: string;
  scalability: string;
  isQuickWin: boolean;
  deepDive?: DeepDive;
}

export interface ProjectPhase {
  phase: string;
  status: string;
  opportunity: string;
  initiative: string;
  baseAffected: string;
  automationPotential: string;
  impact: string;
  kpis: string;
}
