"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, ArrowRight, Clock, Zap, Sparkles } from "lucide-react";
import { VEHICLES_DATA } from "@/lib/mockData";
import { formatINR } from "@/lib/utils";
import { VehicleCategory } from "@/types";

export function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("bike");

  const currentVehicle =
    VEHICLES_DATA.find((v) => v.id === selectedCategory) || VEHICLES_DATA[0];

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
            Pricing
          </h3>
          <p className="text-xs text-[#74776E]">
            Transparent and simple Hyderabad pricing in 3D
          </p>
        </div>

        {/* Vehicle Tabs with Translucent Glass Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-[#EAE6D9]/70">
          {VEHICLES_DATA.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedCategory(v.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === v.id
                  ? "bg-[#25351F] text-[#F5F3EA] shadow-xs scale-105"
                  : "bg-white/70 backdrop-blur-xs text-[#74776E] hover:text-[#151713] hover:bg-white border border-white/80"
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* Dynamic Pricing Feature Display */}
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-black text-[#151713]">
                {currentVehicle.name}
              </h4>
              <p className="text-xs text-[#74776E]">{currentVehicle.tagline}</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-white/90 text-[#34452A] shadow-2xs">
              Capacity: {currentVehicle.capacity}
            </span>
          </div>

          {/* 3D Pricing Metrics Slabs */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 shadow-2xs card-3d">
              <div className="text-[10px] text-[#74776E] font-medium">Base Fare</div>
              <div className="text-sm sm:text-base font-black text-[#151713] mt-0.5">
                {formatINR(currentVehicle.baseFare)}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 shadow-2xs card-3d">
              <div className="text-[10px] text-[#74776E] font-medium">Per km</div>
              <div className="text-sm sm:text-base font-black text-[#151713] mt-0.5">
                {formatINR(currentVehicle.perKmRate)}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 shadow-2xs card-3d">
              <div className="text-[10px] text-[#74776E] font-medium">Min. Fare</div>
              <div className="text-sm sm:text-base font-black text-[#34452A] mt-0.5">
                {formatINR(currentVehicle.minFare)}
              </div>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-[#59663A]">
            <span className="px-3 py-1 rounded-xl bg-white/70 backdrop-blur-xs border border-white/85 flex items-center gap-1.5 shadow-2xs">
              <Check className="w-3.5 h-3.5 text-[#34452A]" /> {currentVehicle.capacity}
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/70 backdrop-blur-xs border border-white/85 flex items-center gap-1.5 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-[#B5A477]" /> Express Delivery
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/70 backdrop-blur-xs border border-white/85 flex items-center gap-1.5 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#34452A]" /> ETA ~{currentVehicle.etaMinutes} min
            </span>
          </div>
        </div>
      </div>

      {/* Book Vehicle CTA */}
      <div className="pt-4 border-t border-[#EAE6D9]/70 mt-4">
        <button
          onClick={() => {
            const el = document.getElementById("booking-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full py-3.5 rounded-2xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-xs sm:text-sm font-extrabold shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 active:scale-98"
        >
          <span>Book {currentVehicle.name} Now</span>
          <ArrowRight className="w-4 h-4 text-[#B5A477]" />
        </button>
      </div>
    </div>
  );
}
