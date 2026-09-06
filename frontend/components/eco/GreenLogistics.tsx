"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Zap, Wind, ShieldCheck, BatteryCharging, Sparkles } from "lucide-react";

export function GreenLogistics() {
  const ecoPoints = [
    { title: "EV Vehicles", desc: "100% electric bikes, autos and Tata Ace EV mini-trucks" },
    { title: "Lower Emissions", desc: "Reduces 2.4 kg CO2 on average per intra-city consignment" },
    { title: "Sustainable Logistics", desc: "Solar-backed micro-depots at Kukatpally & Financial District" },
    { title: "Cleaner Air", desc: "Committed to silent, zero tailpipe emissions across Hyderabad" },
  ];

  return (
    <div className="glass-panel-dark text-[#F5F3EA] rounded-3xl p-6 sm:p-8 border border-[#B5A477]/30 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden card-3d">
      {/* Background Ambience & Glow */}
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#59663A]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Copy & Badges */}
        <div className="md:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#34452A]/80 backdrop-blur-xs border border-[#59663A]/60 text-xs font-bold text-[#B5A477] shadow-xs">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sustainable Hyderabad Logistics</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Greener Deliveries. <br />
            <span className="text-[#B5A477]">For a Better Hyderabad.</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#D8CFB5]/85 leading-relaxed font-normal">
            We are transforming Telangana's logistics corridor with zero-emission electric vehicles,
            AI route batching to eliminate empty return trips, and clean renewable charging infrastructure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {ecoPoints.map((item) => (
              <div
                key={item.title}
                className="p-3 rounded-2xl bg-[#34452A]/50 backdrop-blur-xs border border-[#59663A]/40 space-y-1 hover:border-[#B5A477]/60 transition-all shadow-inner"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#B5A477]">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <div className="text-[11px] text-[#D8CFB5]/75 leading-tight">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eco Van Visual with Charminar Backdrop & 3D Depth */}
        <div className="md:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#59663A]/50 aspect-[4/3] card-3d specular-shine">
            <Image
              src="/images/eco-van.jpg"
              alt="DeccanGo Electric Van charging near Charminar illuminated at dusk"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/15 flex items-center justify-between text-[10px] shadow-lg">
              <span className="font-bold text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B5A477]" /> DeccanGo EV Hub 04
              </span>
              <span className="text-emerald-400 font-bold">100% Green Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
