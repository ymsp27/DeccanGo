"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CoverageMap } from "@/components/coverage/CoverageMap";
import { HYDERABAD_HUBS } from "@/lib/mockData";
import { MapPin, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export default function CoveragePage() {
  const [selectedZone, setSelectedZone] = useState<string>("All");

  const zones = ["All", "West", "Central", "North", "South", "East"];

  const filteredHubs =
    selectedZone === "All"
      ? HYDERABAD_HUBS
      : HYDERABAD_HUBS.filter((h) => h.zone === selectedZone);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Intra-City Delivery Footprint
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            Hyderabad Service Coverage
          </h1>
          <p className="text-xs sm:text-sm text-[#74776E]">
            Operating across 17+ commercial, residential, tech park, and airport hubs with 15-minute driver arrival guarantee.
          </p>
        </div>

        {/* Coverage Map Component */}
        <CoverageMap />

        {/* Zone Filter & Hubs Directory */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6D9] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-[#151713]">
                Operational Hubs Directory
              </h3>
              <p className="text-xs text-[#74776E]">Select a city zone to view micro-depot network</p>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#FAF9F5] border border-[#EAE6D9]">
              {zones.map((z) => (
                <button
                  key={z}
                  onClick={() => setSelectedZone(z)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    selectedZone === z
                      ? "bg-[#25351F] text-[#F5F3EA] shadow-xs"
                      : "text-[#74776E] hover:text-[#151713]"
                  }`}
                >
                  {z}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredHubs.map((hub) => (
              <div
                key={hub.id}
                className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] hover:border-[#B5A477] transition-all flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#34452A]" />
                    <span className="font-bold text-xs text-[#151713]">{hub.name}</span>
                  </div>
                  <div className="text-[11px] text-[#74776E] mt-0.5">
                    {hub.zone} Zone &bull; {hub.hubType}
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      hub.status === "Active"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {hub.status}
                  </span>
                  <div className="text-[10px] text-[#59663A] font-semibold mt-1">
                    {hub.activeDrivers} Fleet Active
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
