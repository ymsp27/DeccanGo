"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Download,
  MapPin,
  Clock,
  FileCheck,
  ShieldCheck,
  X,
  Printer,
  Sparkles,
} from "lucide-react";
import { MOCK_LIVE_ORDER } from "@/lib/mockData";

export function PODCard() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const pod = MOCK_LIVE_ORDER.proofOfDelivery!;

  const handleDownload = () => {
    setDownloadModalOpen(true);
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header & Status Badge */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              POD (Proof of Delivery)
            </h3>
            <p className="text-xs text-[#74776E]">Delivery confirmed & verified in 3D</p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Delivered</span>
          </span>
        </div>

        {/* 4 Proof Slabs Grid with Translucent Glass */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {/* 1. Delivery Photo */}
          <div className="p-2.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 flex flex-col items-center justify-center text-center group shadow-2xs card-3d">
            <div className="relative w-full h-20 sm:h-22 rounded-xl overflow-hidden mb-2 border border-[#D8CFB5]/60 shadow-inner">
              <Image
                src="/images/pod-box.jpg"
                alt="Delivered package photograph"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-[10px] font-extrabold text-[#151713]">Delivery Photo</span>
            <span className="text-[9px] text-emerald-700 font-bold">Verified</span>
          </div>

          {/* 2. Recipient Signature */}
          <div className="p-2.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 flex flex-col items-center justify-center text-center shadow-2xs card-3d">
            <div className="w-full h-20 sm:h-22 rounded-xl bg-white/90 border border-[#D8CFB5]/60 flex items-center justify-center p-2 mb-2 shadow-inner">
              <svg className="w-24 h-12 text-[#34452A]" viewBox="0 0 140 60">
                <path
                  d="M10 42 Q 25 10, 45 35 T 80 20 T 115 40 T 130 25"
                  stroke="#34452A"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-[10px] font-extrabold text-[#151713]">Recipient Signature</span>
            <span className="text-[9px] text-[#74776E] font-medium">Venkatesh Rao</span>
          </div>

          {/* 3. GPS Coordinates */}
          <div className="p-2.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 flex flex-col items-center justify-center text-center shadow-2xs card-3d">
            <div className="w-full h-20 sm:h-22 rounded-xl bg-white/90 border border-[#D8CFB5]/60 flex flex-col items-center justify-center p-2 mb-2 text-[#25351F] shadow-inner">
              <div className="w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#B5A477] flex items-center justify-center mb-1 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#34452A]" />
              </div>
              <span className="text-[9px] font-mono text-[#59663A] font-bold leading-tight">
                17.4325° N<br />78.4071° E
              </span>
            </div>
            <span className="text-[10px] font-extrabold text-[#151713]">GPS Location</span>
            <span className="text-[9px] text-[#74776E] font-medium">Kondapur / Banjara</span>
          </div>

          {/* 4. Timestamp */}
          <div className="p-2.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 flex flex-col items-center justify-center text-center shadow-2xs card-3d">
            <div className="w-full h-20 sm:h-22 rounded-xl bg-white/90 border border-[#D8CFB5]/60 flex flex-col items-center justify-center p-2 mb-2 text-[#25351F] shadow-inner">
              <Clock className="w-5 h-5 text-[#B5A477] mb-1" />
              <span className="text-[10px] font-black text-[#151713]">10 Mar 2025</span>
              <span className="text-[9px] text-[#74776E] font-medium">04:22 PM</span>
            </div>
            <span className="text-[10px] font-extrabold text-[#151713]">Timestamp</span>
            <span className="text-[9px] text-emerald-700 font-bold">OTP Confirmed</span>
          </div>
        </div>

        {/* Verification Summary Strip */}
        <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-white/90 shadow-2xs space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-[#151713]">Tamper-Evident Seal Verified</span>
            </div>
            <span className="text-[10px] font-mono text-[#59663A] font-bold bg-[#FAF9F5] px-2 py-0.5 rounded-md border border-[#D8CFB5]/60">
              HASH: 8F2A...E419
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE6D9]/60 text-[11px] text-[#74776E]">
            <div>
              Consignee: <strong className="text-[#151713]">Venkatesh Rao</strong>
            </div>
            <div className="text-right">
              OTP Verified: <strong className="text-emerald-700 font-bold">Yes (4-digit)</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Download POD Action Button */}
      <div className="pt-2 border-t border-[#EAE6D9]/70">
        <button
          onClick={handleDownload}
          className="w-full py-3.5 rounded-2xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-xs sm:text-sm font-extrabold shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 active:scale-98"
        >
          <Download className="w-4 h-4 text-[#B5A477]" />
          <span>Download Verified POD Certificate</span>
        </button>
      </div>

      {/* Frosted Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/90 specular-shine">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#25351F] text-[#B5A477] flex items-center justify-center font-black text-sm shadow-sm">
                  &gt;&gt;
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#151713]">
                    Official Proof of Delivery (POD)
                  </h4>
                  <p className="text-[11px] text-[#74776E]">Certificate #POD-{MOCK_LIVE_ORDER.trackingNumber}</p>
                </div>
              </div>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-white/90 space-y-1.5 shadow-2xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Consignment ID:</span>
                  <span className="font-mono font-bold text-[#151713]">#{MOCK_LIVE_ORDER.trackingNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivered To:</span>
                  <span className="font-semibold text-[#151713]">{pod.recipientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery Address:</span>
                  <span className="font-semibold text-[#151713]">{MOCK_LIVE_ORDER.dropLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time & Date:</span>
                  <span className="font-semibold text-[#151713]">{pod.deliveredAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">GPS Coordinates:</span>
                  <span className="font-semibold text-emerald-700 font-mono">{pod.gpsCoordinates}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-800">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-[11px]">
                  Tamper-proof digital seal verified with 6-digit one-time passcode and driver biometric geolocation lock.
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    alert("Printing official DeccanGo Proof of Delivery Certificate...");
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold flex items-center justify-center gap-2 hover:bg-[#34452A] shadow-xs"
                >
                  <Printer className="w-4 h-4 text-[#B5A477]" />
                  <span>Print Certificate</span>
                </button>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
