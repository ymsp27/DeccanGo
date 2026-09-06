"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiveTracking } from "@/components/tracking/LiveTracking";
import { PODCard } from "@/components/pod/PODCard";
import { Search, ShieldCheck, HelpCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("HYD10482");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Breadcrumb & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34452A] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Overview
            </Link>
            <h1 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight">
              Live Shipment Tracking
            </h1>
            <p className="text-xs sm:text-sm text-[#74776E]">
              Real-time driver GPS telemetry & cryptographic Proof of Delivery across Hyderabad.
            </p>
          </div>

          {/* Quick Search */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#D8CFB5] shadow-xs max-w-sm w-full">
            <Search className="w-4 h-4 text-[#59663A] ml-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Consignment ID..."
              className="w-full text-xs font-bold uppercase tracking-wider text-[#151713] focus:outline-none"
            />
            <button
              onClick={() => alert(`Refreshed telemetry for #${searchQuery}`)}
              className="px-3 py-1.5 rounded-xl bg-[#25351F] text-[#F5F3EA] text-xs font-bold shrink-0"
            >
              Track
            </button>
          </div>
        </div>

        {/* Live Tracking Core Component */}
        <LiveTracking />

        {/* Proof of Delivery & Digital Receipt */}
        <div className="pt-4">
          <PODCard />
        </div>

        {/* Help & Support Banner */}
        <div className="p-4 sm:p-6 rounded-3xl bg-[#FAF9F5] border border-[#D8CFB5]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#34452A] text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#151713]">
                Need immediate dispatch assistance?
              </h4>
              <p className="text-xs text-[#74776E]">
                DeccanGo Central Hyderabad Dispatch Tower is available 24/7.
              </p>
            </div>
          </div>
          <a
            href="tel:+914023456789"
            className="px-5 py-2.5 rounded-xl bg-[#25351F] text-white text-xs font-bold hover:bg-[#34452A] transition-colors"
          >
            Call Dispatch Helpdesk
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
