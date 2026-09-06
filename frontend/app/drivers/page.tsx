"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DriverDashboard } from "@/components/dashboard/DriverDashboard";
import {
  ShieldCheck,
  Award,
  Wallet,
  Zap,
  ArrowRight,
  TrendingUp,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function DriversPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
              Driver Partner Console
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight mt-2">
              Driver Operations & Earnings
            </h1>
            <p className="text-xs sm:text-sm text-[#74776E]">
              Hyderabad intra-city dispatches, instant UPI payout settlements, and trip incentives.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>KYC Verified &bull; DL #TS0920210048</span>
            </span>
          </div>
        </div>

        {/* Core Driver Dashboard */}
        <DriverDashboard />

        {/* Driver Earnings Breakdown & Surge Heatmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Earnings & Wallet */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#151713]">
                    Weekly Earnings & Payouts
                  </h3>
                  <p className="text-xs text-[#74776E]">Automated daily direct UPI settlement</p>
                </div>
              </div>
              <button
                onClick={() => alert("Initiating instant UPI settlement of ₹1,250 to your linked account...")}
                className="px-3.5 py-1.5 rounded-xl bg-[#25351F] text-white text-xs font-bold hover:bg-[#34452A]"
              >
                Instant Withdraw
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
                <div className="text-gray-500">This Week</div>
                <div className="text-base sm:text-lg font-black text-[#151713] mt-0.5">
                  {formatINR(8450)}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
                <div className="text-gray-500">Incentives</div>
                <div className="text-base sm:text-lg font-black text-emerald-700 mt-0.5">
                  {formatINR(1200)}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
                <div className="text-gray-500">This Month</div>
                <div className="text-base sm:text-lg font-black text-[#34452A] mt-0.5">
                  {formatINR(34200)}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Complete 3 more trips today to earn ₹350 bonus!</span>
              </div>
              <span className="font-bold">5 / 8</span>
            </div>
          </div>

          {/* High-Demand Hotspots in Hyderabad */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#151713]">
                    Active Surge Demand Areas
                  </h3>
                  <p className="text-xs text-[#74776E]">Head towards these zones for faster dispatch allocations</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                1.3x Surge Active
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {[
                { area: "Kukatpally Industrial Corridor", surge: "1.3x", time: "< 2 min wait", trips: "42 active requests" },
                { area: "HITEC City / Madhapur 100ft Rd", surge: "1.25x", time: "< 3 min wait", trips: "35 active requests" },
                { area: "Banjara Hills & Jubilee Checkpost", surge: "1.2x", time: "< 4 min wait", trips: "28 active requests" },
                { area: "Secunderabad Station Cargo Hub", surge: "1.15x", time: "< 5 min wait", trips: "22 active requests" },
              ].map((spot) => (
                <div
                  key={spot.area}
                  className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#EAE6D9] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#34452A]" />
                    <span className="font-bold text-[#151713]">{spot.area}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#74776E]">{spot.time}</span>
                    <span className="font-extrabold text-[#34452A] bg-white px-2 py-0.5 rounded border border-[#D8CFB5]">
                      {spot.surge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
