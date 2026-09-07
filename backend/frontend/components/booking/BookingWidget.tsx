"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  Package,
  Weight,
  Truck,
  Zap,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  Info,
  Layers,
} from "lucide-react";
import confetti from "canvas-confetti";
import { bookingFormSchema, BookingFormData } from "@/lib/validation";
import { HYDERABAD_HUBS, VEHICLES_DATA } from "@/lib/mockData";
import { calculateFare, PricingBreakdown } from "@/lib/pricing";
import { formatINR } from "@/lib/utils";

export function BookingWidget() {
  const [activeTab, setActiveTab] = useState<"parcel" | "vehicle" | "multi_stop" | "business">("parcel");
  const [quoteResult, setQuoteResult] = useState<PricingBreakdown | null>(null);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tab: "parcel",
      pickupLocation: "HITEC City, Cyber Towers",
      dropLocation: "Banjara Hills, Road No. 12",
      packageType: "Parcel",
      weightKg: 10,
      vehicleType: "bike",
      deliveryType: "express",
    },
  });

  const selectedVehicle = watch("vehicleType");
  const currentPickup = watch("pickupLocation");
  const currentDrop = watch("dropLocation");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // Calculate dynamic fare through server-side pricing engine logic
      const fareBreakdown = calculateFare({
        vehicleType: data.vehicleType,
        distanceKm: 14.2,
        weightKg: Number(data.weightKg),
        deliveryType: data.deliveryType,
      });

      setQuoteResult(fareBreakdown);
    } catch (err) {
      console.error("Failed to calculate fare", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmOrder = () => {
    const generatedId = `HYD${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmedOrderId(generatedId);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#25351F", "#34452A", "#B5A477", "#59663A"],
    });
  };

  return (
    <section id="booking-section" className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(37,53,31,0.08)] border border-white/80 card-3d">
        {/* Widget Navigation Tabs with 3D Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#EAE6D9]/70">
          {[
            { id: "parcel", label: "Send a Parcel", vehicle: "bike" },
            { id: "vehicle", label: "Book a Vehicle", vehicle: "tata_ace" },
            { id: "multi_stop", label: "Multi-Stop", vehicle: "tata_ace" },
            { id: "business", label: "Business Login", vehicle: "1ton" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                const t = tab.id as "parcel" | "vehicle" | "multi_stop" | "business";
                setActiveTab(t);
                setValue("tab", t);
                if (tab.id === "vehicle") setValue("vehicleType", "tata_ace");
                if (tab.id === "parcel") setValue("vehicleType", "bike");
                if (tab.id === "multi_stop") {
                  const el = document.getElementById("multi-stop-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
                if (tab.id === "business") {
                  window.location.href = "/business";
                }
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#25351F] text-[#F5F3EA] shadow-md shadow-[#25351F]/20 scale-105"
                  : "bg-white/70 text-[#151713]/80 hover:bg-white hover:text-[#25351F] border border-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Booking Form with Translucent Glass Controls */}
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pickup Location */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#34452A]" />
                Pickup Location
              </label>
              <div className="relative">
                <select
                  {...register("pickupLocation")}
                  className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
                >
                  {HYDERABAD_HUBS.map((hub) => (
                    <option key={`pick-${hub.id}`} value={`${hub.name}, Hyderabad`}>
                      {hub.name} ({hub.zone} Zone)
                    </option>
                  ))}
                </select>
              </div>
              {errors.pickupLocation && (
                <p className="text-[11px] text-red-600 font-medium">{errors.pickupLocation.message}</p>
              )}
            </div>

            {/* Drop Location */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-[#B5A477]" />
                Drop Location
              </label>
              <div className="relative">
                <select
                  {...register("dropLocation")}
                  className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
                >
                  {HYDERABAD_HUBS.slice()
                    .reverse()
                    .map((hub) => (
                      <option key={`drop-${hub.id}`} value={`${hub.name}, Hyderabad`}>
                        {hub.name} ({hub.zone} Zone)
                      </option>
                    ))}
                </select>
              </div>
              {errors.dropLocation && (
                <p className="text-[11px] text-red-600 font-medium">{errors.dropLocation.message}</p>
              )}
            </div>

            {/* What are you moving? */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <Package className="w-3.5 h-3.5 text-[#59663A]" />
                What are you moving?
              </label>
              <select
                {...register("packageType")}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
              >
                <option value="Parcel">Parcel & Commercial Boxes</option>
                <option value="Documents">Legal Documents & Cheques</option>
                <option value="Electronics">Electronics & Hardware</option>
                <option value="Machinery">Industrial Machinery & Spares</option>
                <option value="Furniture">Furniture & Household Goods</option>
                <option value="FMCG">FMCG & Food Goods</option>
              </select>
            </div>

            {/* Weight */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <Weight className="w-3.5 h-3.5 text-[#74776E]" />
                Weight (Approx)
              </label>
              <select
                {...register("weightKg", { valueAsNumber: true })}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
              >
                <option value={5}>Up to 5 kg (Documents / Small)</option>
                <option value={10}>Up to 10 kg</option>
                <option value={50}>Up to 50 kg (Boxes / Auto)</option>
                <option value={100}>Up to 100 kg</option>
                <option value={450}>Up to 450 kg (Tata Ace load)</option>
                <option value={750}>Up to 750 kg (Tata Ace Max)</option>
                <option value={1200}>Up to 1.2 Ton (1 Ton Truck)</option>
                <option value={3500}>Up to 3.5 Ton (Commercial)</option>
              </select>
            </div>
          </div>

          {/* Vehicle Type & Delivery Type Selection Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end pt-2">
            {/* Vehicle Type */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5 text-[#25351F]" />
                Vehicle Type
              </label>
              <select
                {...register("vehicleType")}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
              >
                {VEHICLES_DATA.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} &bull; {v.capacity} (Starts ₹{v.startingPrice})
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Type */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#151713] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#B5A477]" />
                Delivery Speed
              </label>
              <select
                {...register("deliveryType")}
                className="w-full glass-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#151713] focus:outline-none transition-all"
              >
                <option value="express">Express (Driver Assigned in 3 min)</option>
                <option value="standard">Standard Same-Day</option>
                <option value="scheduled">Scheduled Tomorrow Morning</option>
              </select>
            </div>

            {/* Submit Action Button with 3D Pop */}
            <div className="lg:col-span-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25351F]/25 hover:shadow-xl hover:scale-[1.01] transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <span>{isSubmitting ? "Calculating 3D Route..." : "Get Estimate"}</span>
                <ArrowRight className="w-4 h-4 text-[#B5A477]" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Instant Quote Breakdown Modal (Translucent Frosted Glass) */}
      <AnimatePresence>
        {quoteResult && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuoteResult(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-white/80 specular-shine"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE6D9]/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#25351F] text-[#B5A477] shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#151713]">
                      Instant Logistics Estimate
                    </h3>
                    <p className="text-xs text-[#74776E]">
                      Validated by DeccanGo Hyderabad Pricing Engine
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setQuoteResult(null);
                    setConfirmedOrderId(null);
                  }}
                  className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!confirmedOrderId ? (
                <div className="mt-5 space-y-4">
                  {/* Route Overview in Frosted Container */}
                  <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-white/90 text-xs space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#74776E]">Route:</span>
                      <span className="font-bold text-[#151713]">
                        {currentPickup} &rarr; {currentDrop}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#74776E]">Vehicle & Speed:</span>
                      <span className="font-bold text-[#34452A] capitalize">
                        {quoteResult.vehicleType.replace("_", " ")} &bull; ETA {quoteResult.estimatedMinutes} min
                      </span>
                    </div>
                  </div>

                  {/* Fare Breakdown Table */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-gray-200/60 text-[#74776E]">
                      <span>Base Fare (First 2-3 km)</span>
                      <span className="font-medium text-[#151713]">{formatINR(quoteResult.baseFare)}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-200/60 text-[#74776E]">
                      <span>Distance Charge (~14.2 km)</span>
                      <span className="font-medium text-[#151713]">{formatINR(quoteResult.distanceCharge)}</span>
                    </div>
                    {quoteResult.weightSurcharge > 0 && (
                      <div className="flex justify-between py-1 border-b border-gray-200/60 text-[#74776E]">
                        <span>Weight Surcharge</span>
                        <span className="font-medium text-[#151713]">{formatINR(quoteResult.weightSurcharge)}</span>
                      </div>
                    )}
                    {quoteResult.prioritySurcharge > 0 && (
                      <div className="flex justify-between py-1 border-b border-gray-200/60 text-[#74776E]">
                        <span>Express Priority Allocation</span>
                        <span className="font-medium text-[#151713]">{formatINR(quoteResult.prioritySurcharge)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 border-b border-gray-200/60 text-[#74776E]">
                      <span>Goods Transport GST (5%)</span>
                      <span className="font-medium text-[#151713]">{formatINR(quoteResult.gst)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-sm font-bold text-[#151713]">
                      <span>Total Estimated Fare</span>
                      <span className="text-xl text-[#34452A] font-black">{formatINR(quoteResult.finalFare)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    className="w-full mt-4 py-3.5 rounded-2xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25351F]/30 hover:scale-[1.01] transition-all"
                  >
                    <span>Confirm & Assign Hyderabad Driver</span>
                    <ArrowRight className="w-4 h-4 text-[#B5A477]" />
                  </button>
                </div>
              ) : (
                /* Confirmed Success State */
                <div className="mt-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#151713]">
                      Delivery Booked Successfully!
                    </h4>
                    <p className="text-xs text-[#74776E] mt-1">
                      Order assigned to DeccanGo Driver Network in Hyderabad.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 border border-white/90 text-xs text-left space-y-1.5 shadow-2xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tracking Number:</span>
                      <span className="font-bold text-[#34452A] font-mono">{confirmedOrderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-bold text-emerald-700">Driver En Route</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">ETA:</span>
                      <span className="font-bold text-[#151713]">~18 mins</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      onClick={() => {
                        window.location.href = `/tracking?id=${confirmedOrderId}`;
                      }}
                      className="flex-1 py-3 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold text-xs shadow-md hover:bg-[#34452A]"
                    >
                      Track Live on Hyderabad Map &rarr;
                    </button>
                    <button
                      onClick={() => {
                        setQuoteResult(null);
                        setConfirmedOrderId(null);
                      }}
                      className="px-4 py-3 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
