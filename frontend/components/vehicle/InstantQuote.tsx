"use client";

import React, { useState } from "react";
import { Check, Clock, Bike, CarFront, Truck, ArrowRight, Sparkles } from "lucide-react";
import { formatINR } from "@/lib/utils";

interface InstantQuoteProps {
  onVehicleSelected?: (vehicleId: string) => void;
}

export function InstantQuote({ onVehicleSelected }: InstantQuoteProps) {
  const [selected, setSelected] = useState<string>("bike");

  const quoteOptions = [
    {
      id: "bike",
      name: "Bike",
      tagline: "Fastest for small parcels",
      eta: "90 min",
      price: 99,
      icon: Bike,
    },
    {
      id: "auto",
      name: "Auto",
      tagline: "Great for medium goods",
      eta: "75 min",
      price: 149,
      icon: CarFront,
    },
    {
      id: "tata_ace",
      name: "Tata Ace",
      tagline: "Best for bulk goods",
      eta: "60 min",
      price: 399,
      icon: Truck,
    },
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onVehicleSelected) onVehicleSelected(id);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-black text-[#151713] tracking-tight">Instant Quote</h3>
            <p className="text-xs text-[#74776E]">Compare options and book</p>
          </div>
          <span className="text-[10px] bg-white/80 text-[#34452A] px-3 py-1 rounded-full font-bold border border-white/90 shadow-2xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#B5A477]" /> Live Rates
          </span>
        </div>

        <div className="space-y-3">
          {quoteOptions.map((opt) => {
            const Icon = opt.icon;
            const isChosen = selected === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`cursor-pointer p-3 sm:p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isChosen
                    ? "glass-panel border-[#34452A] ring-2 ring-[#34452A]/20 shadow-md scale-[1.01]"
                    : "bg-white/70 backdrop-blur-xs border-white/80 hover:border-[#B5A477] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl transition-all ${
                      isChosen
                        ? "bg-[#25351F] text-[#B5A477] shadow-xs"
                        : "bg-[#F5F3EA] text-[#34452A]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-[#151713]">{opt.name}</div>
                    <div className="text-[11px] text-[#74776E]">{opt.tagline}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div>
                    <div className="text-xs text-[#74776E] flex items-center gap-1 justify-end font-medium">
                      <Clock className="w-3 h-3 text-[#B5A477]" />
                      <span>{opt.eta}</span>
                    </div>
                    <div className="text-sm sm:text-base font-black text-[#151713]">
                      {formatINR(opt.price)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(opt.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isChosen
                        ? "bg-[#25351F] text-white shadow-xs"
                        : "bg-[#F5F3EA] text-[#151713] hover:bg-[#34452A] hover:text-white"
                    }`}
                  >
                    {isChosen ? (
                      <span className="flex items-center gap-1">
                        <Check className="w-3 h-3" /> Selected
                      </span>
                    ) : (
                      "Select"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-[#EAE6D9]/70">
        <button
          onClick={() => {
            const el = document.getElementById("booking-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full py-2.5 rounded-xl bg-white/80 border border-white/90 hover:bg-[#25351F] hover:text-white hover:border-[#25351F] text-[#25351F] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-2xs"
        >
          <span>Configure Custom Payload & Stops</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
