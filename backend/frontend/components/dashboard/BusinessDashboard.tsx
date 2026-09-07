"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Banknote,
  TrendingUp,
  Truck,
  Building2,
  Calendar,
  Sparkles,
  Layers,
} from "lucide-react";
import { MOCK_BUSINESS_ANALYTICS } from "@/lib/mockData";
import { formatINR } from "@/lib/utils";

export function BusinessDashboard() {
  const [timeframe, setTimeframe] = useState<"Today" | "This Week" | "This Month">("Today");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const metrics = [
    { label: "Today's Orders", val: 128, color: "text-[#151713]", icon: Building2 },
    { label: "Delivered", val: 96, color: "text-emerald-700", icon: CheckCircle2 },
    { label: "In Transit", val: 24, color: "text-[#34452A]", icon: Clock },
    { label: "Failed", val: 8, color: "text-rose-600", icon: AlertTriangle },
  ];

  const financialMetrics = [
    { label: "Total Distance", val: "487 km" },
    { label: "Delivery Cost", val: "₹18,240" },
    { label: "COD Collected", val: "₹1.42 lakh" },
    { label: "Success Rate", val: "94%" },
  ];

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header & Timeframe Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
                Business Dashboard
              </h3>
              <p className="text-xs text-[#74776E]">
                Run your Hyderabad deliveries from one 3D control hub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="bg-white/85 backdrop-blur-xs border border-white/90 shadow-2xs rounded-xl px-3 py-1.5 text-xs font-extrabold text-[#151713] focus:outline-none focus:ring-2 focus:ring-[#34452A]"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>
          </div>
        </div>

        {/* Primary Order Metrics Cards with 3D Depth */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="p-3 sm:p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/90 shadow-2xs flex flex-col justify-between hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#74776E]">
                  <Icon className="w-3.5 h-3.5 text-[#59663A]" />
                  <span>{m.label}</span>
                </div>
                <div className={`text-xl sm:text-2xl font-black mt-1 ${m.color}`}>
                  {m.val}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Financial & Performance Slabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-3 rounded-2xl bg-[#F5F3EA]/70 backdrop-blur-xs border border-white/80 text-center shadow-inner">
          {financialMetrics.map((fm) => (
            <div key={fm.label}>
              <div className="text-[10px] text-[#74776E] font-semibold">{fm.label}</div>
              <div className="text-xs sm:text-sm font-black text-[#151713] mt-0.5">
                {fm.val}
              </div>
            </div>
          ))}
        </div>

        {/* Recharts Data Visualization: Orders Trend & Vehicle Utilization */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
          {/* Bar Chart: Orders Trend */}
          <div className="md:col-span-7 bg-white/60 backdrop-blur-xs p-3.5 rounded-2xl border border-white/80 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-extrabold text-[#151713] tracking-tight">Orders Trend</h4>
              <div className="flex items-center gap-3 text-[10px] text-[#74776E] font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-[#34452A]" /> Orders
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-[#B5A477]" /> Delivered
                </span>
              </div>
            </div>

            <div className="h-44 w-full">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={MOCK_BUSINESS_ANALYTICS.ordersTrend}
                    margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
                  >
                    <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#74776E" }} />
                    <YAxis tick={{ fontSize: 10, fill: "#74776E" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#25351F",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "14px",
                        color: "#F5F3EA",
                        fontSize: "11px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                      }}
                    />
                    <Bar dataKey="orders" fill="#34452A" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="delivered" fill="#B5A477" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Donut Chart: Vehicle Utilization */}
          <div className="md:col-span-5 bg-white/60 backdrop-blur-xs p-3.5 rounded-2xl border border-white/80 shadow-2xs">
            <h4 className="text-xs font-extrabold text-[#151713] mb-2 tracking-tight">
              Vehicle Utilization
            </h4>
            <div className="h-44 w-full flex items-center justify-center">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={MOCK_BUSINESS_ANALYTICS.vehicleUtilization}
                      dataKey="percentage"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={36}
                      outerRadius={56}
                      paddingAngle={4}
                    >
                      {MOCK_BUSINESS_ANALYTICS.vehicleUtilization.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#25351F",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "14px",
                        color: "#F5F3EA",
                        fontSize: "11px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Custom Mini Legend */}
            <div className="grid grid-cols-2 gap-1 text-[10px] text-[#74776E] mt-1 font-medium">
              {MOCK_BUSINESS_ANALYTICS.vehicleUtilization.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 shadow-2xs"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="truncate">
                    {item.name}: {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
