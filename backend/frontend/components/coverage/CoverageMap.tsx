"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Info, Users, Radio } from "lucide-react";
import { HYDERABAD_HUBS } from "@/lib/mockData";

export function CoverageMap() {
  const [selectedHub, setSelectedHub] = useState<string>("hitec");

  const popularHubs = HYDERABAD_HUBS.slice(0, 9);
  const activeHubDetails = HYDERABAD_HUBS.find((h) => h.id === selectedHub) || HYDERABAD_HUBS[0];

  // SVG coordinates for Hyderabad zones layout in a 400x300 canvas
  const mapNodes = [
    { id: "miyapur", name: "Miyapur", x: 90, y: 55, status: "Active" },
    { id: "kukatpally", name: "Kukatpally", x: 120, y: 75, status: "Active" },
    { id: "kondapur", name: "Kondapur", x: 100, y: 110, status: "Active" },
    { id: "hitec", name: "HITEC City", x: 130, y: 130, status: "Active" },
    { id: "madhapur", name: "Madhapur", x: 145, y: 145, status: "Active" },
    { id: "gachibowli", name: "Gachibowli", x: 115, y: 165, status: "Active" },
    { id: "ameerpet", name: "Ameerpet", x: 210, y: 120, status: "Active" },
    { id: "banjara-hills", name: "Banjara Hills", x: 200, y: 145, status: "Active" },
    { id: "secunderabad", name: "Secunderabad", x: 260, y: 100, status: "Active" },
    { id: "uppal", name: "Uppal", x: 330, y: 130, status: "Limited" },
    { id: "dilsukhnagar", name: "Dilsukhnagar", x: 290, y: 180, status: "Active" },
    { id: "lb-nagar", name: "LB Nagar", x: 320, y: 210, status: "Limited" },
    { id: "shamshabad", name: "Shamshabad", x: 180, y: 260, status: "Active" },
  ];

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header & Status Legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Hyderabad Coverage
            </h3>
            <p className="text-xs text-[#74776E]">We deliver across the entire city in 3D</p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-[10px] font-bold">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-xs" /> Active Service
            </span>
            <span className="flex items-center gap-1.5 text-amber-800">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs" /> Limited Service
            </span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-300 shadow-xs" /> Coming Soon
            </span>
          </div>
        </div>

        {/* 2-Column: Interactive SVG Hyderabad Map + Popular Hubs List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* SVG Map of Hyderabad */}
          <div className="md:col-span-7 relative bg-gradient-to-br from-[#FAF9F5] to-[#F5F3EA] rounded-3xl border border-white/90 p-3 h-64 sm:h-72 flex flex-col justify-between overflow-hidden shadow-inner card-3d">
            {/* Ambient Map Grid */}
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer Ring Road (ORR) simulated dashed loop with glow */}
              <ellipse
                cx="200"
                cy="150"
                rx="180"
                ry="125"
                fill="none"
                stroke="#D8CFB5"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />
              <text
                x="330"
                y="60"
                fill="#74776E"
                fontSize="8"
                fontWeight="bold"
                letterSpacing="1"
              >
                HYDERABAD ORR
              </text>

              {/* Connecting major arterial logistics corridors */}
              <path
                d="M 90 55 L 120 75 L 100 110 L 130 130 L 210 120 L 260 100 L 330 130"
                fill="none"
                stroke="#34452A"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <path
                d="M 130 130 L 145 145 L 200 145 L 290 180 L 320 210"
                fill="none"
                stroke="#34452A"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <path
                d="M 145 145 L 115 165 L 180 260"
                fill="none"
                stroke="#34452A"
                strokeWidth="1.5"
                opacity="0.3"
              />

              {/* Interactive Nodes */}
              {mapNodes.map((node) => {
                const isSelected = selectedHub === node.id;
                const isActive = node.status === "Active";

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedHub(node.id)}
                    className="cursor-pointer"
                  >
                    {/* Ripple on active selected */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="16"
                        fill="#59663A"
                        opacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer node circle with 3D depth */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 10 : 6.5}
                      fill={
                        isSelected
                          ? "#25351F"
                          : isActive
                          ? "#34452A"
                          : "#B5A477"
                      }
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />

                    {/* Inner core */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="2.5"
                      fill={isActive ? "#B5A477" : "#FFFFFF"}
                    />

                    {/* Node Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 11}
                      textAnchor="middle"
                      fill="#151713"
                      fontSize="9"
                      fontWeight={isSelected ? "900" : "600"}
                      className="select-none"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Selected Zone Pill on bottom (Translucent Glass) */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-2.5 rounded-2xl glass-panel border border-white/90 text-[11px] shadow-sm">
              <div>
                <span className="font-extrabold text-[#151713]">
                  {activeHubDetails.name} Hub
                </span>
                <span className="text-[#74776E] ml-1 font-medium">
                  ({activeHubDetails.zone} Zone)
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#34452A] font-bold">
                <Users className="w-3.5 h-3.5 text-[#59663A]" />
                <span>{activeHubDetails.activeDrivers} Active Fleet Vehicles</span>
              </div>
            </div>
          </div>

          {/* Popular Areas List with Glass Slabs */}
          <div className="md:col-span-5 space-y-1.5 max-h-72 overflow-y-auto pr-1">
            <div className="text-xs font-black text-[#151713] pb-1">
              Popular Areas
            </div>
            {popularHubs.map((hub) => {
              const isSelected = selectedHub === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`w-full p-2.5 rounded-2xl text-left text-xs flex items-center justify-between transition-all ${
                    isSelected
                      ? "glass-panel border-[#34452A] font-extrabold text-[#25351F] shadow-xs scale-[1.01]"
                      : "bg-white/70 backdrop-blur-xs border border-white/80 text-[#151713] hover:bg-white hover:border-[#B5A477]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full shadow-2xs ${
                        hub.status === "Active" ? "bg-emerald-600" : "bg-amber-500"
                      }`}
                    />
                    <span>{hub.name}</span>
                  </span>
                  <span className="text-[10px] text-[#74776E] font-medium">
                    {hub.activeDrivers} drivers
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
