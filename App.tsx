// App.tsx
import React, { useState } from "react";
import { ViewType } from "./types";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ProcessMap from "./components/ProcessMap";
import ImpactEffortMatrix from "./components/ImpactEffortMatrix";
import Forecasting from "./components/Forecasting";
import Initiatives from "./components/Initiatives";
import Scalability from "./components/Scalability";
import Timeline from "./components/Timeline";
import Budget from "./components/Budget";
import NextSteps from "./components/NextSteps";

import AIEcosystem from "./components/AIEcosystem";
import Benchmark from "./components/Benchmark";
import DigitalStatus from "./components/DigitalStatus";

import { motion, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>("overview");

  const renderContent = () => {
    switch (view) {
      case "overview":
        return <Dashboard />;

      case "ai-ecosystem":
        return <AIEcosystem />;

      case "process-mapping":
        return <ProcessMap />;

      case "benchmark":
        return <Benchmark />;

      case "digital-status":
        return <DigitalStatus />;

      case "matrix":
        return <ImpactEffortMatrix />;

      case "projects-detail":
        return <Initiatives />;

      case "scalability":
        return <Scalability />;

      case "timeline":
        return <Timeline />;

      case "budget":
        return <Budget />;

      case "next-steps":
        return <NextSteps />;

      case "forecasting":
        return <Forecasting />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex selection:bg-xactus selection:text-white bg-white">
      <Sidebar currentView={view} setView={setView} />

      <main className="flex-1 lg:ml-80 pt-24 lg:pt-20 px-6 md:px-12 lg:px-20 pb-20 max-w-[1600px] bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-40 pt-16 md:pt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-gray-300 font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] mb-10 text-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/garciavegalogo.png"
              className="h-3 md:h-4 grayscale opacity-40"
              alt="García Vega"
            />
            <span>GARCÍA VEGA</span>
          </div>

          <div className="opacity-40">© XACTUS S.A.S.</div>
        </footer>
      </main>
    </div>
  );
};

export default App;
