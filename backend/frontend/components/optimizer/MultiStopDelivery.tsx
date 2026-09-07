"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Plus,
  ArrowDown,
  Navigation,
  Clock,
  Gauge,
  Check,
  RotateCw,
} from "lucide-react";
import { MOCK_MULTI_STOP_ROUTE } from "@/lib/mockData";
import { RouteStop } from "@/types";
import { formatINR } from "@/lib/utils";

export function MultiStopDelivery() {
  const [stops, setStops] = useState<RouteStop[]>(MOCK_MULTI_STOP_ROUTE.stops);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isOptimized, setIsOptimized] = useState(true);
  const [autoOptimize, setAutoOptimize] = useState(true);

  // Statistics
  const [stats, setStats] = useState({
    distance: 54,
    duration: "3 hr 45 min",
    cost: 1850,
  });

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      // Re-order stops with animated shuffle
      const shuffled = [...stops];
      const first = shuffled[0];
      const rest = shuffled.slice(1);
      // Sort rest by sequence
      rest.reverse();
      const reordered = [first, ...rest].map((s, idx) => ({
        ...s,
        orderSequence: idx + 1,
      }));

      setStops(reordered);
      setStats({
        distance: 48,
        duration: "3 hr 15 min",
        cost: 1690,
      });
      setIsOptimized(true);
      setIsOptimizing(false);
    }, 600);
  };

  const handleAddStop = () => {
    const newStop: RouteStop = {
      id: String(Date.now()),
      name: "Jubilee Hills Checkpost",
      area: "Road No. 36 Commercial Drop",
      coordinates: [17.4319, 78.4073],
      type: "drop",
      orderSequence: stops.length + 1,
      status: "pending",
    };
    setStops([...stops, newStop]);
    setStats((prev) => ({
      distance: prev.distance + 6,
      duration: "4 hr 10 min",
      cost: prev.cost + 180,
    }));
  };

  return (
    <div id="multi-stop-section" className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header & Auto-Optimize Switch */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Multi-Stop Delivery
            </h3>
            <p className="text-xs text-[#74776E]">Optimize your Hyderabad route in 3D</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#151713]">
              Auto Optimize
            </span>
            <button
              type="button"
              onClick={() => setAutoOptimize(!autoOptimize)}
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                autoOptimize ? "bg-[#34452A]" : "bg-gray-300"
              }`}
            >
              <motion.div
                animate={{ x: autoOptimize ? 20 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-5 h-5 rounded-full bg-white shadow-sm"
              />
            </button>
          </div>
        </div>

        {/* 2-Column: Stops List & SVG Multi-Waypoints Map */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Stops List */}
          <div className="md:col-span-6 space-y-2 max-h-72 overflow-y-auto sleek-scrollbar pr-1.5">
            <AnimatePresence>
              {stops.map((stop, idx) => (
                <motion.div
                  key={stop.id}
                  layout
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 hover:border-[#B5A477] transition-all shadow-2xs hover:scale-[1.01]"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-xs ${
                      idx === 0
                        ? "bg-[#25351F] text-[#B5A477]"
                        : "bg-[#34452A] text-white"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[#151713] truncate">
                      {stop.name}
                    </div>
                    <div className="text-[10px] text-[#74776E] truncate">
                      {stop.area}
                    </div>
                  </div>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase ${
                      stop.type === "pickup"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {stop.type}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={handleAddStop}
              className="w-full py-2 rounded-2xl border border-dashed border-[#B5A477] text-xs font-bold text-[#34452A] hover:bg-white/80 flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Stop</span>
            </button>
          </div>

          {/* Map Waypoints Graphic */}
          <div className="md:col-span-6">
            <div className="relative w-full h-52 bg-gradient-to-br from-[#FAF9F5] to-[#F5F3EA] rounded-3xl border border-white/90 overflow-hidden flex items-center justify-center shadow-inner card-3d">
              {/* Waypoints SVG Map */}
              <svg className="w-full h-full p-4" viewBox="0 0 240 180">
                <defs>
                  <linearGradient id="multiStopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#25351F" />
                    <stop offset="60%" stopColor="#34452A" />
                    <stop offset="100%" stopColor="#B5A477" />
                  </linearGradient>
                </defs>

                {/* Background Grid */}
                <path d="M 0 45 L 240 45 M 0 90 L 240 90 M 0 135 L 240 135 M 60 0 L 60 180 M 120 0 L 120 180 M 180 0 L 180 180" stroke="#D8CFB5" strokeWidth="0.5" strokeDasharray="2 2" />
                
                {/* Connected 3D route path with glow */}
                <path
                  d="M 30 30 L 80 50 L 120 40 L 170 80 L 140 130 L 200 150"
                  fill="none"
                  stroke="rgba(37,53,31,0.15)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 30 30 L 80 50 L 120 40 L 170 80 L 140 130 L 200 150"
                  fill="none"
                  stroke="url(#multiStopGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Waypoint circles with numbers */}
                <circle cx="30" cy="30" r="10" fill="#25351F" stroke="#FFFFFF" strokeWidth="2" />
                <text x="30" y="34" textAnchor="middle" fill="#B5A477" fontSize="10" fontWeight="bold">1</text>

                <circle cx="80" cy="50" r="8" fill="#34452A" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="80" y="53" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>

                <circle cx="120" cy="40" r="8" fill="#34452A" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="120" y="43" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">3</text>

                <circle cx="170" cy="80" r="8" fill="#34452A" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="170" y="83" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">4</text>

                <circle cx="140" cy="130" r="8" fill="#34452A" stroke="#FFFFFF" strokeWidth="1.5" />
                <text x="140" y="133" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">5</text>

                <circle cx="200" cy="150" r="9" fill="#B5A477" stroke="#25351F" strokeWidth="2" />
                <text x="200" y="153" textAnchor="middle" fill="#25351F" fontSize="9" fontWeight="bold">6</text>
              </svg>

              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs text-[9px] font-extrabold text-[#34452A] shadow-2xs border border-white/80">
                Kukatpally &rarr; Financial District
              </div>
            </div>

            {/* Statistics Row with Translucent Cards */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
                <div className="text-[10px] text-[#74776E] flex items-center justify-center gap-1 font-semibold">
                  <Gauge className="w-3 h-3 text-[#34452A]" /> Dist.
                </div>
                <div className="text-xs sm:text-sm font-black text-[#151713]">
                  {stats.distance} km
                </div>
              </div>

              <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
                <div className="text-[10px] text-[#74776E] flex items-center justify-center gap-1 font-semibold">
                  <Clock className="w-3 h-3 text-[#B5A477]" /> Time
                </div>
                <div className="text-xs sm:text-sm font-black text-[#151713]">
                  {stats.duration}
                </div>
              </div>

              <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
                <div className="text-[10px] text-[#74776E] flex items-center justify-center gap-1 font-semibold">
                  <span className="text-[#34452A] font-bold">₹</span> Cost
                </div>
                <div className="text-xs sm:text-sm font-black text-[#34452A]">
                  {formatINR(stats.cost)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimize Route Button with 3D Elevation */}
      <div className="mt-4 pt-4 border-t border-[#EAE6D9]/70">
        <button
          onClick={handleOptimize}
          disabled={isOptimizing}
          className="w-full py-3.5 rounded-2xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
        >
          {isOptimizing ? (
            <>
              <RotateCw className="w-4 h-4 animate-spin text-[#B5A477]" />
              <span>Optimizing 3D Waypoints...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-[#B5A477]" />
              <span>Optimize Route (Save 18% Fuel)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
