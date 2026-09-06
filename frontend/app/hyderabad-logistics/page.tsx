import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CoverageMap } from "@/components/coverage/CoverageMap";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Building2, Navigation, Layers, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Hyderabad Logistics Operating System — DeccanGo",
  description:
    "Explore how DeccanGo powers modern city logistics across Hyderabad with EV fleets, multi-stop route optimization, and digital Proof of Delivery.",
};

export default function HyderabadLogisticsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Urban Logistics Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            The Logistics Operating System for Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#74776E]">
            Unifying merchants, enterprise distributors, fleet owners, and independent driver partners into a real-time dispatch and routing network.
          </p>
        </div>

        {/* Coverage Visualization */}
        <CoverageMap />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
