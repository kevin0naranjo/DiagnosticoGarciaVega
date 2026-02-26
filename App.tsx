import React, { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import { ViewType } from "./types";

import ProblemTreePage from "./pages/ProblemTreePage";
import DigitalizationPage from "./pages/DigitalizationPage";
import ProcessMappingPage from "./pages/ProcessMappingPage";
import PlaceholderPage from "./pages/PlaceholderPage";

import BenchmarkPage from "./pages/BenchmarkPage";
import InitiativesPage from "./pages/InitiativesPage";
import ScalabilityPage from "./pages/ScalabilityPage";
import AiEcosystemPage from "./pages/AiEcosystemPage";
import MatrixPage from "./pages/MatrixPage";
import DeepDivesPage from "./pages/DeepDivesPage";
import CronogramaDigitalizacionComercialPage from "./pages/CronogramaDigitalizacionComercialPage";
import PresupuestoPage from "./pages/PresupuestoPage";
import DisrupcionPage from "./pages/DisrupcionPage";

const App: React.FC = () => {
  const[currentView, setView] = useState<ViewType>("problem-tree");

  const viewTitle = useMemo<Record<ViewType, string>>(
    () => ({
      "problem-tree": "Árbol del Problema",
      digitalization: "Digitalización",
      "process-mapping": "Mapa de Procesos",
      benchmark: "Benchmark",
      "ai-types": "Tipos de IA aplicables",
      matrix: "Matriz Impacto–Esfuerzo",
      initiatives: "Iniciativas",
      "deep-dives": "Deep-Dives",
      scalability: "Escalabilidad",
      timeline: "Cronograma",
      budget: "Presupuesto",
      disruption: "Disrupción",
      "annex-nist": "Test Digitalización NIST",
      "annex-issues": "Problemáticas",
    }),[]
  );

  const renderView = () => {
    switch (currentView) {
      case "problem-tree": return <ProblemTreePage />;
      case "digitalization": return <DigitalizationPage />;
      case "process-mapping": return <ProcessMappingPage />;
      case "benchmark": return <BenchmarkPage />;
      case "initiatives": return <InitiativesPage />;
      case "scalability": return <ScalabilityPage />;
      case "matrix": return <MatrixPage />;
      case "ai-types": return <AiEcosystemPage />;
      case "deep-dives": return <DeepDivesPage />;
      case "timeline": return <CronogramaDigitalizacionComercialPage />;
      case "budget": return <PresupuestoPage />;
      case "disruption": return <DisrupcionPage />;
      case "annex-nist":
      case "annex-issues":
        return <PlaceholderPage title={viewTitle[currentView]} />;
      default:
        return null;
    }
  };

  return (
    // Agregamos font-sans para forzar la misma familia tipográfica en todo el proyecto
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Sidebar currentView={currentView} setView={setView} />

      {/* Main content */}
      <main className="pt-20 lg:pt-0 lg:pl-80">
        <div className="px-6 md:px-10 py-10 md:py-14 max-w-[1400px] mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;