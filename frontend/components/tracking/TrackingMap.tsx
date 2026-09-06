"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Truck, Navigation, Clock } from "lucide-react";

interface TrackingMapProps {
  progressPercent?: number; // 0 to 100
  driverName?: string;
  vehiclePlate?: string;
  etaMinutes?: number;
}

export function TrackingMap({
  progressPercent = 55,
  driverName = "Ramesh Kumar",
  vehiclePlate = "TS09AB1234",
  etaMinutes = 18,
}: TrackingMapProps) {
  const [markerPos, setMarkerPos] = useState({ x: 190, y: 130 });

  // Smooth route coordinates across 360 x 240 canvas:
  // Origin: Kukatpally (70, 190) -> HITEC City (160, 140) -> Banjara Hills (290, 60)
  const pathD = "M 70 190 Q 150 170, 190 125 T 290 60";

  useEffect(() => {
    const factor = Math.min(1, Math.max(0, progressPercent / 100));
    // Interpolate marker along the curve
    const x = 70 + (290 - 70) * factor;
    // Parabolic curve height
    const y = 190 + (60 - 190) * factor - Math.sin(factor * Math.PI) * 20;

    setMarkerPos({ x, y });
  }, [progressPercent]);

  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[290px] bg-gradient-to-b from-[#FAF9F5] to-[#F2EFE7] rounded-2xl overflow-hidden border border-[#EAE6D9]">
      {/* Subtle Map Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="minimal-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#D8CFB5" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#minimal-grid)" />
      </svg>

      {/* SVG Route Visualization */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 360 240"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="routeLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25351F" />
            <stop offset="60%" stopColor="#34452A" />
            <stop offset="100%" stopColor="#B5A477" />
          </linearGradient>
        </defs>

        {/* Outer ambient glow path */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(52, 69, 42, 0.12)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Actual Route Polyline */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#routeLineGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="6 3"
        />

        {/* Origin Pin (Kukatpally) */}
        <circle cx="70" cy="190" r="7" fill="#25351F" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="70" cy="190" r="2.5" fill="#B5A477" />

        {/* Destination Pin (Banjara Hills) */}
        <circle cx="290" cy="60" r="7" fill="#B5A477" stroke="#25351F" strokeWidth="2" />
        <circle cx="290" cy="60" r="2.5" fill="#FFFFFF" />
      </svg>

      {/* Clean Landmark Labels (Positioned carefully with zero collision) */}
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs text-[10px] font-bold text-[#151713] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#25351F]" />
        <span>Kukatpally Hub</span>
      </div>

      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs text-[10px] font-bold text-[#34452A] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#B5A477]" />
        <span>Banjara Hills</span>
      </div>

      {/* Top Left Telemetry Status Pill */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/80 shadow-2xs text-[10px] font-bold text-emerald-800 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>Live Telemetry</span>
      </div>

      {/* Animated Moving Vehicle Marker */}
      <motion.div
        animate={{
          left: `${(markerPos.x / 360) * 100}%`,
          top: `${(markerPos.y / 240) * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-xl bg-[#25351F] text-white flex items-center justify-center shadow-lg border border-[#B5A477]">
            <Truck className="w-4 h-4 text-[#F5F3EA]" />
          </div>
          <span className="absolute -inset-1 rounded-xl bg-[#59663A] opacity-35 animate-ping" />
        </div>
        <div className="mt-1 px-2 py-0.5 rounded-md bg-[#25351F]/90 text-white text-[9px] font-bold tracking-tight shadow-sm whitespace-nowrap">
          {vehiclePlate}
        </div>
      </motion.div>

      {/* Bottom Right Floating ETA Card */}
      <div className="absolute bottom-3 right-3 bg-[#25351F] text-[#F5F3EA] px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-md border border-white/10 flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-[#B5A477]" />
        <span>ETA ~{etaMinutes} min</span>
      </div>
    </div>
  );
}
