"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Phone,
  MessageSquare,
  Truck,
  MapPin,
  Star,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { TrackingMap } from "./TrackingMap";
import { MOCK_LIVE_ORDER } from "@/lib/mockData";
import Link from "next/link";

export function LiveTracking() {
  const [currentStepIndex, setCurrentStepIndex] = useState(3); // 3 = In transit

  const steps = [
    { title: "Pickup requested", time: "10:22 AM" },
    { title: "Driver assigned", time: "10:26 AM" },
    { title: "Package picked up", time: "10:42 AM" },
    { title: "In transit", time: "Live now" },
    { title: "Delivered", time: "Est. 11:25 AM" },
  ];

  const handleNextStage = () => {
    setCurrentStepIndex((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
  };

  const getProgressPercent = () => {
    return Math.round((currentStepIndex / (steps.length - 1)) * 100);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Clean Header */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[#EAE6D9]/70">
          <div className="flex items-center gap-3">
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Live Tracking
            </h3>
            <span className="text-xs font-mono font-bold text-[#59663A] bg-white/80 border border-white/90 px-2.5 py-1 rounded-xl shadow-2xs">
              #{MOCK_LIVE_ORDER.trackingNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100/90 text-emerald-800 border border-emerald-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              {steps[currentStepIndex].title}
            </span>

            <button
              onClick={handleNextStage}
              title="Advance Dispatch Simulation"
              className="p-1.5 rounded-xl border border-white/90 bg-white/80 hover:bg-white text-[#34452A] transition-colors shadow-2xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Spacious 2-Column Layout (Left: Timeline & Driver, Right: Map & Action) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (5 of 12 cols): Timeline + Driver Info */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* Milestones Timeline with Connected Line */}
            <div className="relative pl-1 py-1">
              {/* Vertical connecting line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-[#EAE6D9] -z-0" />
              {/* Completed track line segment */}
              <div
                className="absolute left-[7px] top-3 w-0.5 bg-[#34452A] transition-all duration-500 -z-0"
                style={{
                  height: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
                }}
              />

              <div className="space-y-4">
                {steps.map((step, idx) => {
                  const isCompleted = idx < currentStepIndex;
                  const isActive = idx === currentStepIndex;

                  return (
                    <div key={step.title} className="relative z-10 flex items-center gap-3 text-xs">
                      <div className="flex items-center justify-center bg-[#FAF9F5] rounded-full">
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-[#34452A]" />
                        ) : isActive ? (
                          <div className="relative flex items-center justify-center w-4 h-4">
                            <span className="w-3 h-3 rounded-full bg-[#25351F]" />
                            <span className="absolute -inset-1 rounded-full bg-[#59663A] opacity-40 animate-ping" />
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 mx-px rounded-full border-2 border-[#D8CFB5] bg-white" />
                        )}
                      </div>

                      <div className="flex-1 flex items-center justify-between min-w-0">
                        <span
                          className={`truncate ${
                            isActive
                              ? "text-[#25351F] font-extrabold"
                              : isCompleted
                              ? "text-[#151713] font-medium"
                              : "text-[#74776E]/70"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[10px] text-[#74776E] font-medium pl-2 shrink-0">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compact Driver Bar */}
            <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-white/90 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#25351F] text-[#F5F3EA] flex items-center justify-center font-bold text-xs shadow-xs">
                    RK
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#151713] leading-tight">
                      {MOCK_LIVE_ORDER.driver?.name}
                    </div>
                    <div className="text-[10px] text-[#59663A] font-semibold flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-[#B5A477] text-[#B5A477]" />
                      <span>{MOCK_LIVE_ORDER.driver?.rating} (482 trips)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href="tel:+919849028412"
                    className="p-1.5 rounded-lg bg-[#FAF9F5] border border-[#D8CFB5]/60 text-[#25351F] hover:bg-[#34452A] hover:text-white transition-colors"
                    title="Call Driver"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => alert("Opening secure chat with driver...")}
                    className="p-1.5 rounded-lg bg-[#FAF9F5] border border-[#D8CFB5]/60 text-[#25351F] hover:bg-[#34452A] hover:text-white transition-colors"
                    title="Message Driver"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-[#EAE6D9]/60 flex items-center justify-between text-[10px] text-[#74776E]">
                <span>Vehicle: <strong className="text-[#151713]">{MOCK_LIVE_ORDER.driver?.vehiclePlate}</strong></span>
                <span className="text-[#59663A] font-bold">Near Madhapur Flyover</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 of 12 cols): Map & Quick Action */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-3">
            <div className="flex-1 min-h-[220px]">
              <TrackingMap
                progressPercent={getProgressPercent()}
                driverName={MOCK_LIVE_ORDER.driver?.name}
                vehiclePlate={MOCK_LIVE_ORDER.driver?.vehiclePlate}
                etaMinutes={Math.max(5, 35 - currentStepIndex * 7)}
              />
            </div>

            <Link
              href="/tracking?id=HYD10482"
              className="w-full py-2.5 rounded-xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-xs font-bold text-center block shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <span>Open Dedicated Tracking Console</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B5A477]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
