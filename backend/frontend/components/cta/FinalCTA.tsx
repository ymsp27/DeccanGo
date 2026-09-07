"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, PhoneCall, Sparkles, X } from "lucide-react";

export function FinalCTA() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  return (
    <section className="py-12 sm:py-16 bg-[#FAF9F5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/80 shadow-[0_20px_50px_rgba(37,53,31,0.09)] flex flex-col md:flex-row items-center justify-between gap-8 card-3d">
          {/* Copy and Stats */}
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-white/90 text-xs font-black text-[#34452A] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B5A477]" />
              <span>Scale Intra-City Operations in 3D</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight leading-tight">
              Ready to move faster <br />
              <span className="bg-gradient-to-r from-[#25351F] via-[#34452A] to-[#59663A] bg-clip-text text-transparent">
                in Hyderabad?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#74776E] leading-relaxed">
              Join thousands of merchants, manufacturers, and individuals who rely on DeccanGo
              for verified drivers, transparent per-km billing, and digital Proof of Delivery.
            </p>

            {/* 3 Metrics with 3D Translucent Glass Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 text-center shadow-2xs card-3d">
                <div className="text-base sm:text-xl font-black text-[#151713]">
                  10,000+
                </div>
                <div className="text-[10px] text-[#74776E] font-medium">Happy Customers</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 text-center shadow-2xs card-3d">
                <div className="text-base sm:text-xl font-black text-[#34452A]">
                  500+
                </div>
                <div className="text-[10px] text-[#74776E] font-medium">Business Partners</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/85 text-center shadow-2xs card-3d">
                <div className="text-base sm:text-xl font-black text-[#59663A]">
                  95%
                </div>
                <div className="text-[10px] text-[#74776E] font-medium">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById("booking-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-sm font-extrabold shadow-lg shadow-[#25351F]/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Delivery</span>
              <ArrowRight className="w-4 h-4 text-[#B5A477]" />
            </button>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#34452A] text-[#34452A] hover:bg-white text-sm font-extrabold transition-all flex items-center justify-center gap-2 shadow-2xs hover:scale-[1.02]"
            >
              <Building2 className="w-4 h-4 text-[#59663A]" />
              <span>Get a Business Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Frosted Business Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/90 specular-shine">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
              <h4 className="font-bold text-base text-[#151713]">
                Hyderabad Enterprise Logistics Quote
              </h4>
              <button
                onClick={() => {
                  setQuoteModalOpen(false);
                  setFormSent(false);
                }}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!formSent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSent(true);
                }}
                className="mt-4 space-y-3 text-xs"
              >
                <div>
                  <label className="font-bold text-[#151713] block mb-1">Company / Store Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deccan Pharma Distribution"
                    className="w-full px-3.5 py-2.5 bg-white/80 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#151713] block mb-1">Estimated Monthly Shipments</label>
                  <select className="w-full px-3.5 py-2.5 bg-white/80 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A]">
                    <option>50 – 200 shipments/month</option>
                    <option>200 – 1,000 shipments/month</option>
                    <option>1,000 – 5,000 shipments/month</option>
                    <option>5,000+ shipments/month (Dedicated Fleet)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#151713] block mb-1">Contact Phone (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98490 XXXXX"
                    className="w-full px-3.5 py-2.5 bg-white/80 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A]"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold hover:bg-[#34452A] shadow-xs"
                  >
                    Request Dedicated SLA & Pricing
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h5 className="font-bold text-base text-[#151713]">Quote Request Received!</h5>
                <p className="text-xs text-[#74776E]">
                  A DeccanGo Hyderabad Key Account Manager will contact you within 30 minutes with custom per-km rates and API access keys.
                </p>
                <button
                  onClick={() => {
                    setQuoteModalOpen(false);
                    setFormSent(false);
                  }}
                  className="px-6 py-2 rounded-xl bg-[#25351F] text-white text-xs font-bold shadow-xs"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
