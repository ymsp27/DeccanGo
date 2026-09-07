"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Navigation, MapPin, Sparkles, Box, Radio } from "lucide-react";

export function Hero() {
  const trustBadges = [
    { label: "Fast & Reliable", icon: Zap },
    { label: "Live 3D Tracking", icon: Navigation },
    { label: "Verified Drivers", icon: Shield },
    { label: "Hyderabad Wide", icon: MapPin },
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#EAE6D9]/50 via-[#F5F3EA]/80 to-[#FAF9F5]">
      {/* Background 3D Ambient Orbs with blur and transparency */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#B5A477]/30 to-[#59663A]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-gradient-to-tr from-[#34452A]/20 to-[#D8CFB5]/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headline & Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Translucent Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#34452A] animate-ping" />
              <span className="text-xs font-extrabold text-[#34452A] tracking-wider uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#B5A477]" />
                Hyderabad’s 3D Logistics Operating System
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-[#151713] tracking-tight leading-[1.1]">
              Move Anything. <br />
              <span className="bg-gradient-to-r from-[#25351F] via-[#34452A] to-[#59663A] bg-clip-text text-transparent">
                Anywhere in Hyderabad.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#74776E] max-w-2xl leading-relaxed font-normal">
              From documents and parcels to commercial goods — book the right vehicle,
              get an instant estimate, and track every delivery in real time across 17+ Hyderabad zones.
            </p>

            {/* Translucent Glass Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl glass-panel border border-white/80 shadow-2xs transition-all hover:scale-[1.03] hover:border-[#B5A477]/70"
                  >
                    <div className="p-1 rounded-lg bg-[#34452A]/10 text-[#34452A]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-[#151713]">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Hero Visual Column with 3D Float Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Hero Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 aspect-[16/11] card-3d specular-shine">
              <Image
                src="/images/hero-truck.jpg"
                alt="DeccanGo Electric Mini-Truck operating in Hyderabad with Charminar and skyline at dusk"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151713]/80 via-black/20 to-transparent" />

              {/* Translucent Glass Overlay Slabs */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white p-3.5 rounded-2xl glass-panel-dark border border-white/20 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#B5A477] text-[#25351F] flex items-center justify-center font-black text-sm shadow-md">
                    &gt;&gt;
                  </div>
                  <div>
                    <div className="text-xs font-extrabold leading-tight tracking-wide">
                      DeccanGo Smart Fleet
                    </div>
                    <div className="text-[10px] text-[#D8CFB5]">
                      Kukatpally &bull; HITEC City &bull; Charminar
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Active
                  </div>
                  <div className="text-[10px] text-gray-300 font-medium">
                    Avg. Pickup 14 min
                  </div>
                </div>
              </div>
            </div>

            {/* Floating 3D Isometric Mini-Badge (Positioned at top-left to avoid colliding with bottom overlay) */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 hidden sm:flex items-center gap-3 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-2xl animate-float-3d z-20"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-inner border border-[#B5A477]/40 bg-[#FAF9F5]">
                <Image
                  src="/images/3d-truck.jpg"
                  alt="3D isometric vehicle asset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pr-3 text-left">
                <div className="text-[10px] uppercase font-extrabold text-[#59663A] tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#B5A477]" /> 3D Telematics
                </div>
                <div className="text-xs font-black text-[#151713]">
                  Zero-Emission Fleet
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
