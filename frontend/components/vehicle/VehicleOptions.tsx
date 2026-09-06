"use client";

import React, { useState } from "react";
import { VehicleCard } from "./VehicleCard";
import { VEHICLES_DATA } from "@/lib/mockData";
import { VehicleSpec } from "@/types";

interface VehicleOptionsProps {
  onVehicleSelected?: (vehicle: VehicleSpec) => void;
}

export function VehicleOptions({ onVehicleSelected }: VehicleOptionsProps) {
  const [filter, setFilter] = useState<"popular" | "all">("popular");
  const [selectedId, setSelectedId] = useState<string>("bike");

  const displayedVehicles =
    filter === "popular"
      ? VEHICLES_DATA.filter((v) => v.popular)
      : VEHICLES_DATA;

  const handleSelect = (v: VehicleSpec) => {
    setSelectedId(v.id);
    if (onVehicleSelected) onVehicleSelected(v);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Vehicle Options
            </h3>
            <p className="text-xs text-[#74776E]">
              Choose the right vehicle for your delivery
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/80 backdrop-blur-xs border border-white/90 shadow-2xs self-start sm:self-auto">
            <button
              onClick={() => setFilter("popular")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                filter === "popular"
                  ? "bg-[#25351F] text-[#F5F3EA] shadow-xs"
                  : "text-[#74776E] hover:text-[#151713]"
              }`}
            >
              Most Popular
            </button>
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-[#25351F] text-[#F5F3EA] shadow-xs"
                  : "text-[#74776E] hover:text-[#151713]"
              }`}
            >
              All Vehicles
            </button>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isSelected={selectedId === vehicle.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
