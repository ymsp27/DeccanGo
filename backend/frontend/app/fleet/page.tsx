"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FleetDashboard } from "@/components/dashboard/FleetDashboard";
import {
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function FleetPage() {
  const [returnTripMatched, setReturnTripMatched] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
              Fleet Operations Management
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight mt-2">
              Fleet Owner Control Panel
            </h1>
            <p className="text-xs sm:text-sm text-[#74776E]">
              Telemetry, driver allocation, and empty return-trip elimination across Greater Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold bg-white px-3 py-2 rounded-xl border border-[#D8CFB5] text-[#151713]">
              Active Fleet: <strong>6 Vehicles</strong>
            </span>
          </div>
        </div>

        {/* Fleet Table / Cards Component */}
        <FleetDashboard />

        {/* Return-Trip Matching & Idle Vehicle Marketplace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Section 29: Return-Trip Matching */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#151713]">
                      Zero-Empty Return Trip Matching
                    </h3>
                    <p className="text-xs text-[#74776E]">
                      Auto-match return cargo to eliminate deadhead mileage
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#34452A] text-white px-2.5 py-1 rounded-full">
                  AI Matcher
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#74776E]">Dispatched Route:</span>
                  <span className="font-bold text-[#151713]">
                    Kukatpally &rarr; Shamshabad Airport Cargo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#74776E]">Vehicle:</span>
                  <span className="font-bold text-[#34452A]">HY09CD4567 (Tata Ace)</span>
                </div>

                {!returnTripMatched ? (
                  <div className="pt-2">
                    <button
                      onClick={() => setReturnTripMatched(true)}
                      className="w-full py-2.5 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold flex items-center justify-center gap-2 hover:bg-[#34452A] transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-[#B5A477]" />
                      <span>Search Return Cargo from Shamshabad</span>
                    </button>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                    <div className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Compatible Return Load Found!
                    </div>
                    <div className="text-[11px]">
                      Shamshabad Airport &rarr; HITEC City Electronics Hub (620 kg Cartons)
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1 border-t border-emerald-200/60 font-bold">
                      <span>Additional Earning:</span>
                      <span className="text-emerald-800 text-sm">+{formatINR(850)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#74776E]">
              Over 2,400 empty vehicle kilometers saved in Hyderabad this month.
            </div>
          </div>

          {/* Idle Capacity Marketplace */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#151713]">
                      Idle Vehicle Marketplace
                    </h3>
                    <p className="text-xs text-[#74776E]">Publish idle trucks during non-peak windows</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                  Instant Hire
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { plate: "HY09AB1234", type: "Tata Ace EV", window: "2:00 PM – 6:00 PM", rate: "₹450/hr", hub: "Kukatpally" },
                  { plate: "TS08EF7890", type: "Auto Cargo", window: "Now Available", rate: "₹280/hr", hub: "Ameerpet" },
                ].map((item) => (
                  <div
                    key={item.plate}
                    className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-[#151713]">
                        {item.plate} &bull; {item.type}
                      </div>
                      <div className="text-[10px] text-[#74776E]">
                        Available at {item.hub} &bull; {item.window}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#34452A]">{item.rate}</div>
                      <button
                        onClick={() => alert(`Allocated ${item.plate} for instant spot hire!`)}
                        className="text-[10px] bg-[#25351F] text-white px-2 py-0.5 rounded-md font-bold mt-1"
                      >
                        Lease Out
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => alert("Opening Idle Vehicle Registration...")}
                className="w-full py-2.5 rounded-xl bg-[#FAF9F5] border border-[#D8CFB5] text-[#25351F] text-xs font-bold hover:bg-[#25351F] hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>+ List Another Idle Truck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
