"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Check } from "lucide-react";
import { VehicleSpec } from "@/types";
import { formatINR } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: VehicleSpec;
  isSelected?: boolean;
  onSelect?: (vehicle: VehicleSpec) => void;
}

export function VehicleCard({ vehicle, isSelected, onSelect }: VehicleCardProps) {
  const renderVehicleSvg = (id: string) => {
    switch (id) {
      case "bike":
        return (
          <svg className="w-14 h-14 text-[#34452A]" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="16" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="48" cy="46" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M16 46 L28 46 L38 28 L24 28 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M48 46 L38 28 L46 20 L40 18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <circle cx="28" cy="24" r="3" fill="#B5A477" />
          </svg>
        );
      case "auto":
        return (
          <svg className="w-14 h-14 text-[#59663A]" viewBox="0 0 64 64" fill="currentColor">
            <rect x="8" y="16" width="36" height="26" rx="6" fill="#F2EFE7" stroke="#34452A" strokeWidth="3" />
            <path d="M8 30 L44 30" stroke="#34452A" strokeWidth="2" />
            <path d="M44 26 L56 36 L56 42 L8 42" fill="#B5A477" opacity="0.3" />
            <circle cx="16" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
            <circle cx="48" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
          </svg>
        );
      case "erickshaw":
        return (
          <svg className="w-14 h-14 text-emerald-800" viewBox="0 0 64 64" fill="currentColor">
            <rect x="10" y="18" width="34" height="24" rx="4" fill="#EAF3EA" stroke="#25351F" strokeWidth="3" />
            <circle cx="16" cy="44" r="6" fill="none" stroke="#25351F" strokeWidth="4" />
            <circle cx="46" cy="44" r="6" fill="none" stroke="#25351F" strokeWidth="4" />
            <path d="M28 24 L22 34 L30 34 L24 44" fill="none" stroke="#59663A" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case "tata_ace":
        return (
          <svg className="w-14 h-14 text-[#34452A]" viewBox="0 0 64 64" fill="currentColor">
            <rect x="6" y="20" width="32" height="22" rx="2" fill="#D8CFB5" opacity="0.5" stroke="#25351F" strokeWidth="3" />
            <path d="M38 24 L48 24 L56 34 L56 42 L38 42 Z" fill="#F5F3EA" stroke="#25351F" strokeWidth="3" />
            <circle cx="16" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
            <circle cx="46" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
          </svg>
        );
      default:
        return (
          <svg className="w-14 h-14 text-[#25351F]" viewBox="0 0 64 64" fill="currentColor">
            <rect x="6" y="16" width="36" height="26" rx="2" fill="#D8CFB5" stroke="#25351F" strokeWidth="3" />
            <path d="M42 22 L52 22 L58 32 L58 42 L42 42 Z" fill="#F5F3EA" stroke="#25351F" strokeWidth="3" />
            <circle cx="18" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
            <circle cx="48" cy="44" r="7" fill="none" stroke="#25351F" strokeWidth="4" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect && onSelect(vehicle)}
      className={`cursor-pointer rounded-3xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between card-3d specular-shine ${
        isSelected
          ? "glass-panel border-[#34452A] shadow-xl shadow-[#34452A]/15 ring-2 ring-[#34452A]/25"
          : "bg-white/85 backdrop-blur-md border-white/90 hover:border-[#B5A477] shadow-sm hover:shadow-lg"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-2xl bg-[#FAF9F5]/90 border border-[#EAE6D9] shadow-inner">
            {renderVehicleSvg(vehicle.id)}
          </div>
          {vehicle.popular && (
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#25351F] text-[#F5F3EA] px-3 py-1 rounded-full shadow-2xs">
              Popular
            </span>
          )}
          {vehicle.evAvailable && !vehicle.popular && (
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1 shadow-2xs">
              <Zap className="w-3 h-3" /> EV
            </span>
          )}
        </div>

        <div className="mt-3.5">
          <h4 className="font-extrabold text-base text-[#151713] tracking-tight">{vehicle.name}</h4>
          <p className="text-xs text-[#74776E] mt-0.5 line-clamp-1">{vehicle.tagline}</p>
          <div className="text-[11px] text-[#59663A] font-bold mt-1.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5A477]" />
            {vehicle.capacity}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#EAE6D9]/70 flex items-center justify-between">
        <div>
          <span className="text-sm font-black text-[#151713]">
            {formatINR(vehicle.startingPrice)}
          </span>
          <span className="text-[10px] text-[#74776E] ml-1 font-medium">Onwards</span>
        </div>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? "bg-[#34452A] text-white shadow-sm"
              : "bg-[#F5F3EA] text-[#34452A] hover:bg-[#34452A] hover:text-white"
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}
