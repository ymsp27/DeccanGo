"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  Activity,
  AlertTriangle,
  Users,
  Truck,
  DollarSign,
  Radio,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { MOCK_LIVE_ORDER, MOCK_FLEET_VEHICLES } from "@/lib/mockData";
import { formatINR } from "@/lib/utils";

export default function AdminPage() {
  const [surgeMultiplier, setSurgeMultiplier] = useState(1.0);
  const [activeTab, setActiveTab] = useState<"orders" | "drivers" | "pricing">("orders");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Administrative Control Tower
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight mt-2">
              Hyderabad City Dispatch Operations
            </h1>
            <p className="text-xs sm:text-sm text-[#74776E]">
              Real-time telemetry, emergency driver re-allocation, and city-wide surge pricing controls.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-600" />
              <span>Tower Online &bull; 99.98% SLA</span>
            </span>
          </div>
        </div>

        {/* Operational Telemetry Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-3xl bg-white border border-[#EAE6D9] shadow-xs">
            <div className="text-xs text-[#74776E] flex items-center justify-between">
              <span>Active Shipments</span>
              <Activity className="w-4 h-4 text-[#34452A]" />
            </div>
            <div className="text-2xl font-black text-[#151713] mt-1">24</div>
            <div className="text-[10px] text-emerald-700 mt-0.5">All on schedule</div>
          </div>

          <div className="p-4 rounded-3xl bg-white border border-[#EAE6D9] shadow-xs">
            <div className="text-xs text-[#74776E] flex items-center justify-between">
              <span>Available Drivers</span>
              <Users className="w-4 h-4 text-[#59663A]" />
            </div>
            <div className="text-2xl font-black text-[#151713] mt-1">142</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Across 17 hubs</div>
          </div>

          <div className="p-4 rounded-3xl bg-white border border-[#EAE6D9] shadow-xs">
            <div className="text-xs text-[#74776E] flex items-center justify-between">
              <span>Delayed Alerts</span>
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-black text-amber-700 mt-1">1</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Road 36 Banjara traffic</div>
          </div>

          <div className="p-4 rounded-3xl bg-white border border-[#EAE6D9] shadow-xs">
            <div className="text-xs text-[#74776E] flex items-center justify-between">
              <span>Current Surge</span>
              <DollarSign className="w-4 h-4 text-[#B5A477]" />
            </div>
            <div className="text-2xl font-black text-[#34452A] mt-1">
              {surgeMultiplier}x
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Baseline standard</div>
          </div>
        </div>

        {/* Control Tower Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE6D9] shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#EAE6D9] pb-4">
            <div className="flex items-center gap-2">
              {["orders", "drivers", "pricing"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                    activeTab === t
                      ? "bg-[#25351F] text-white"
                      : "bg-[#FAF9F5] text-[#74776E] hover:text-[#151713]"
                  }`}
                >
                  {t} Management
                </button>
              ))}
            </div>

            {/* Surge Controller */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#74776E] font-medium">Surge Override:</span>
              <button
                onClick={() => setSurgeMultiplier(1.0)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  surgeMultiplier === 1.0 ? "bg-[#34452A] text-white" : "bg-gray-100"
                }`}
              >
                1.0x
              </button>
              <button
                onClick={() => setSurgeMultiplier(1.25)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  surgeMultiplier === 1.25 ? "bg-[#34452A] text-white" : "bg-gray-100"
                }`}
              >
                1.25x
              </button>
              <button
                onClick={() => setSurgeMultiplier(1.5)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                  surgeMultiplier === 1.5 ? "bg-[#34452A] text-white" : "bg-gray-100"
                }`}
              >
                1.5x (Rain)
              </button>
            </div>
          </div>

          {activeTab === "orders" && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#151713]">#HYD10482</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">
                      IN TRANSIT
                    </span>
                  </div>
                  <div className="text-[#74776E] mt-1">
                    Kukatpally &rarr; Banjara Hills &bull; Tata Ace (TS09AB1234) &bull; Driver: Ramesh Kumar
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert("Re-dispatching secondary backup driver...")}
                    className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-white text-xs font-semibold"
                  >
                    Re-assign Driver
                  </button>
                  <button
                    onClick={() => alert("Order marked verified delivered by Admin override.")}
                    className="px-3 py-1.5 rounded-lg bg-[#25351F] text-white text-xs font-bold hover:bg-[#34452A]"
                  >
                    Force Complete
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "drivers" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {MOCK_FLEET_VEHICLES.map((v) => (
                <div
                  key={v.id}
                  className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-[#151713]">{v.driverName}</div>
                    <div className="text-[11px] text-[#74776E]">
                      {v.vehicleType} &bull; {v.plateNumber}
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      v.status === "Available"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] text-xs space-y-3">
              <div className="font-bold text-sm text-[#151713]">
                Dynamic Base Pricing Configurations
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#D8CFB5]/60">
                  <span className="text-gray-500">Bike Base Fare:</span>
                  <div className="font-bold text-base mt-1">₹40</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#D8CFB5]/60">
                  <span className="text-gray-500">Auto Base Fare:</span>
                  <div className="font-bold text-base mt-1">₹60</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#D8CFB5]/60">
                  <span className="text-gray-500">Tata Ace Base:</span>
                  <div className="font-bold text-base mt-1">₹200</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
