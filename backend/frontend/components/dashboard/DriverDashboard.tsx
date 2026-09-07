"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Check,
  Clock,
  ArrowRight,
  TrendingUp,
  Wallet,
  Compass,
} from "lucide-react";
import { MOCK_DRIVER_JOBS } from "@/lib/mockData";
import { formatINR } from "@/lib/utils";

export function DriverDashboard() {
  const [jobs, setJobs] = useState(MOCK_DRIVER_JOBS);
  const [earnings, setEarnings] = useState(1250);
  const [completedTrips, setCompletedTrips] = useState(5);

  const handleAction = (id: string, action: "accept" | "deliver") => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          if (action === "accept") {
            return { ...job, status: "accepted" as const };
          } else if (action === "deliver") {
            setEarnings((e) => e + job.earnings);
            setCompletedTrips((c) => c + 1);
            return { ...job, status: "delivered" as const };
          }
        }
        return job;
      })
    );
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header & Jobs Count */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Driver Partner
            </h3>
            <p className="text-xs text-[#74776E]">Today’s Dispatch Queue</p>
          </div>

          <span className="text-xs font-bold bg-white/80 backdrop-blur-xs text-[#34452A] px-3 py-1 rounded-full border border-white/90 shadow-2xs">
            {jobs.filter((j) => j.status !== "delivered").length} Jobs Available
          </span>
        </div>

        {/* Jobs List with Translucent Glass Slabs */}
        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`p-3.5 rounded-2xl border transition-all card-3d ${
                job.status === "delivered"
                  ? "bg-emerald-50/60 backdrop-blur-xs border-emerald-200/80 opacity-70"
                  : job.status === "accepted"
                  ? "glass-panel border-[#34452A] shadow-md ring-1 ring-[#34452A]/20"
                  : "bg-white/70 backdrop-blur-xs border-white/80 hover:border-[#B5A477] hover:bg-white shadow-2xs"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#34452A] shadow-xs" />
                    <span className="text-[#74776E] text-[10px] uppercase font-bold">
                      Pickup:
                    </span>
                    <span className="font-bold text-[#151713] truncate">
                      {job.pickup}
                    </span>
                    <span className="text-[10px] text-[#74776E] shrink-0 font-medium">
                      {job.pickupTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#B5A477] shadow-xs" />
                    <span className="text-[#74776E] text-[10px] uppercase font-bold">
                      Drop:
                    </span>
                    <span className="font-semibold text-[#151713] truncate">
                      {job.drop}
                    </span>
                    <span className="text-[10px] text-[#59663A] font-bold shrink-0">
                      ({job.distanceKm} km)
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-base font-black text-[#151713]">
                    {formatINR(job.earnings)}
                  </div>

                  {job.status === "available" && (
                    <button
                      onClick={() => handleAction(job.id, "accept")}
                      className="mt-1 px-3.5 py-1 rounded-xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-xs font-bold transition-all shadow-xs"
                    >
                      Accept
                    </button>
                  )}

                  {job.status === "accepted" && (
                    <div className="flex items-center gap-1 mt-1">
                      <button
                        onClick={() =>
                          alert(`Navigating to ${job.drop} via Hyderabad ORR...`)
                        }
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#34452A] text-[#34452A] text-[10px] font-bold shadow-2xs"
                      >
                        Navigate
                      </button>
                      <button
                        onClick={() => handleAction(job.id, "deliver")}
                        className="px-2.5 py-1 rounded-lg bg-emerald-700 text-white text-[10px] font-bold shadow-2xs hover:bg-emerald-800"
                      >
                        Delivered
                      </button>
                    </div>
                  )}

                  {job.status === "delivered" && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 mt-1">
                      <Check className="w-3 h-3" /> Paid
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Driver Statistics Footer Row with Glass Elevation */}
      <div className="mt-5 pt-4 border-t border-[#EAE6D9]/70">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
            <div className="text-[10px] text-[#74776E] font-medium">Today's Earnings</div>
            <div className="text-xs sm:text-sm font-black text-[#25351F] mt-0.5">
              {formatINR(earnings)}
            </div>
          </div>

          <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
            <div className="text-[10px] text-[#74776E] font-medium">Completed</div>
            <div className="text-xs sm:text-sm font-black text-[#151713] mt-0.5">
              {completedTrips}
            </div>
          </div>

          <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
            <div className="text-[10px] text-[#74776E] font-medium">Distance</div>
            <div className="text-xs sm:text-sm font-black text-[#151713] mt-0.5">
              62 km
            </div>
          </div>

          <div className="p-2 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs">
            <div className="text-[10px] text-[#74776E] font-medium">Avg./Trip</div>
            <div className="text-xs sm:text-sm font-black text-[#59663A] mt-0.5">
              ₹250
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
