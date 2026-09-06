"use client";

import React from "react";
import Image from "next/image";
import {
  Smartphone,
  Navigation,
  Package,
  Truck,
  Layers,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

export function MobileAppPreview() {
  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Smartphone Mockup with 3D Perspective Tilt & Specular Shine */}
        <div className="sm:col-span-6 flex justify-center">
          <div className="relative w-56 sm:w-64 h-[440px] rounded-[38px] bg-gradient-to-b from-[#20241D] to-[#151713] p-3.5 shadow-2xl border-4 border-[#34452A] flex flex-col justify-between card-3d specular-shine hover:scale-105 transition-transform duration-500">
            {/* Top Speaker & Dynamic Island Camera */}
            <div className="w-24 h-4 bg-[#25351F] rounded-full mx-auto mb-2 flex items-center justify-center border border-white/10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-black/90 shadow-2xs" />
            </div>

            {/* Mobile Screen App UI with Frosted Glass Components */}
            <div className="flex-1 bg-gradient-to-b from-[#FAF9F5] to-[#F5F3EA] rounded-[26px] p-3.5 flex flex-col justify-between overflow-hidden border border-white/40 text-[#151713] shadow-inner">
              <div>
                {/* Header in app */}
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE6D9]/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-[#25351F] text-[#B5A477] flex items-center justify-center font-black text-[9px] shadow-2xs">
                      &gt;&gt;
                    </div>
                    <span className="text-xs font-black tracking-tight">DECCANGO</span>
                  </div>
                  <span className="text-[9px] text-[#59663A] font-extrabold bg-white/80 px-1.5 py-0.5 rounded-full border border-white/90">
                    3D LIVE
                  </span>
                </div>

                <div className="mt-3">
                  <div className="text-[10px] text-[#74776E] font-medium">Good Morning</div>
                  <div className="text-xs font-black text-[#151713]">Let's deliver, Hyderabad</div>
                </div>

                {/* 4 Quick Actions in App */}
                <div className="grid grid-cols-4 gap-1.5 mt-3 text-center">
                  {[
                    { label: "Parcel", icon: Package },
                    { label: "Truck", icon: Truck },
                    { label: "Track", icon: Navigation },
                    { label: "Multi", icon: Layers },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="p-1.5 rounded-xl bg-white/80 backdrop-blur-xs border border-white/90 flex flex-col items-center shadow-2xs hover:scale-105 transition-transform"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#34452A]" />
                        <span className="text-[8px] font-bold mt-0.5">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Active Tracking Glass Card in App */}
                <div className="mt-3 p-2.5 rounded-2xl bg-[#25351F]/90 backdrop-blur-xs text-[#F5F3EA] text-[10px] space-y-1 shadow-md border border-white/10">
                  <div className="flex justify-between items-center text-[#B5A477] font-extrabold">
                    <span>Active: HYD10482</span>
                    <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full">In Transit</span>
                  </div>
                  <div className="text-[9px] text-[#D8CFB5] truncate">Tata Ace &bull; Ramesh Kumar</div>
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-1">
                    <div className="w-3/4 bg-gradient-to-r from-[#B5A477] to-emerald-400 h-full" />
                  </div>
                </div>
              </div>

              {/* Bottom Nav inside phone */}
              <div className="pt-2 border-t border-[#EAE6D9]/80 flex justify-around text-[9px] text-[#74776E] font-semibold">
                <span className="text-[#34452A] font-black">Home</span>
                <span>Orders</span>
                <span>Wallet</span>
                <span>Account</span>
              </div>
            </div>

            {/* Bottom Indicator Bar */}
            <div className="w-20 h-1 bg-[#74776E]/60 rounded-full mx-auto mt-2" />
          </div>
        </div>

        {/* Copy & Store Badges */}
        <div className="sm:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34452A] uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full border border-white/90 shadow-2xs">
            <Smartphone className="w-4 h-4 text-[#59663A]" />
            Native Mobile iOS & Android
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#151713] tracking-tight leading-tight">
            Hyderabad in Your Pocket.
          </h3>

          <p className="text-xs sm:text-sm text-[#74776E] leading-relaxed">
            Book, track and manage your deliveries on the go with 3D GPS navigation, driver telematics, OTP verification, instant quote estimation, and multi-stop dispatch.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => alert("DeccanGo for iOS is available on App Store")}
              className="px-4 py-2.5 rounded-2xl bg-[#151713] hover:bg-[#25351F] text-white text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Download on iOS</span>
            </button>
            <button
              onClick={() => alert("DeccanGo for Android is available on Google Play")}
              className="px-4 py-2.5 rounded-2xl bg-[#34452A] hover:bg-[#25351F] text-white text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Get on Android</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
