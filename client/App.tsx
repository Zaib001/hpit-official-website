import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joinus from "./components/Joinus";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import ApplicationMigration from "./pages/ApplicationMigration";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import ApplicationTransformation from "./pages/ApplicationTransformation";
import ApplicationIntegration from "./pages/ApplicationIntegration";
import CloudOperation from "./pages/CloudOperation";
import CloudMigration from "./pages/CloudMigration";
import CloudManagement from "./pages/CloudManagement";
import CloudSupport from "./pages/CloudSupport";
import CloudTransformation from "./pages/CloudTransformation";
import CloudSecurity from "./pages/CloudSecurity";
import ZeroThrust from "./pages/ZeroTrust";
import CyberTransformation from "./pages/CyberTransformation";
import AdvanceThreat from "./pages/AdvanceThreat";
import ThreatIntelligence from "./pages/ThreatIntelligence";
import Quantumsecurity from "./pages/QuantumSecurity";
import CyberRegilliance from "./pages/CyberRegilliance";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import QuantumComputing from "./pages/QuantumComputing";
import DigitalTwinTechnology from "./pages/DigitalTwinTechnology";
import DigitalWorkplace from "./NewPages/DigitalWorkplace";
import WirelessAndMobilityServices from "./NewPages/WirelessAndMobilityServices";
import Temp from "./NewPages/temp";
import WhatWeDoSection from "./components/WhatWeDoSection";
import DigitalTransformation from "./pages/DigitalTransformation";
import DataAnalytics from "./pages/DataAnalytics";
import DigitalInfrastructure from "./pages/DigitalInfrastructure";
import ModrenItInfrastructure from "./pages/ModrenItInfrastructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Company />} />
              <Route path="/2" element={<ApplicationMigration />} />
              <Route path="/3" element={<ApplicationDevelopment />} />
              <Route path="/4" element={<ApplicationTransformation />} />
              <Route path="/5" element={<ApplicationIntegration />} />
              <Route path="/6" element={<CloudOperation />} />
              <Route path="/7" element={<CloudMigration />} />
              <Route path="/8" element={<CloudManagement />} />
              <Route path="/9" element={<CloudSupport />} />
              <Route path="/10" element={<CloudTransformation />} />
              <Route path="/11" element={<CloudSecurity />} />
              <Route path="/12" element={<ZeroThrust />} />
              <Route path="/13" element={<CyberTransformation />} />
              <Route path="/14" element={<AdvanceThreat />} />
              <Route path="/15" element={<ThreatIntelligence />} />
              <Route path="/16" element={<Quantumsecurity />} />
              <Route path="/17" element={<CyberRegilliance />} />
              <Route path="/18" element={<ArtificialIntelligence />} />
              <Route path="/19" element={<QuantumComputing />} />
              <Route path="/20" element={<DigitalTwinTechnology />} />
              <Route path="/29" element={<DigitalWorkplace />} />

              <Route path="/30" element={<WirelessAndMobilityServices />} />
              <Route path="/31" element={<DigitalTransformation />} />
              <Route path="/32" element={<DataAnalytics />} />
              <Route path="/33" element={<DigitalInfrastructure />} />
              <Route path="/35" element={<ModrenItInfrastructure />} />

              <Route path="/temp" element={<Temp />} />
              <Route
                path="/capabilities"
                element={
                  <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                      Capabilities Page - Coming Soon
                    </h1>
                  </div>
                }
              />
              <Route
                path="/industries"
                element={
                  <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                      Industries Page - Coming Soon
                    </h1>
                  </div>
                }
              />
              <Route
                path="/insight"
                element={
                  <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                      Insight Page - Coming Soon
                    </h1>
                  </div>
                }
              />
              <Route
                path="/career"
                element={
                  <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                      Career Page - Coming Soon
                    </h1>
                  </div>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Joinus />
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
