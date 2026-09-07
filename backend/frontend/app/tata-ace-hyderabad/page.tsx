import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { Truck, Check, ShieldCheck, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Tata Ace Booking in Hyderabad — DeccanGo Logistics",
  description:
    "Hire Tata Ace mini trucks in Hyderabad starting at ₹399. 750 kg capacity, verified drivers, real-time GPS tracking across HITEC City, Kukatpally, Banjara Hills and Secunderabad.",
};

export default function TataAceHyderabadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Commercial Mini Truck Transport
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            Tata Ace Booking in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#74776E]">
            Book verified Tata Ace mini trucks in under 60 seconds. Ideal for warehouse cargo, retail store replenishment, shifting, and commercial wholesale distributions across Hyderabad.
          </p>
        </div>

        {/* Booking Widget pre-oriented */}
        <BookingWidget />

        {/* Specs and Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-3xl bg-white border border-[#EAE6D9] shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-[#FAF9F5] text-[#34452A] w-fit">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#151713]">750 kg Payload Capacity</h3>
            <p className="text-xs text-[#74776E] leading-relaxed">
              Standard 7.0 x 4.5 x 5.0 ft bed dimension for loading carton boxes, industrial spares, timber, furniture, and heavy wholesale cargo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#EAE6D9] shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-[#FAF9F5] text-[#34452A] w-fit">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#151713]">Average 18-min Pickup</h3>
            <p className="text-xs text-[#74776E] leading-relaxed">
              Over 180 Tata Ace vehicles on standby across Kukatpally, Sanathnagar, Balanagar, Cherlapally, and Jeedimetla industrial zones.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#EAE6D9] shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-[#FAF9F5] text-[#34452A] w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#151713]">Verified Commercial Drivers</h3>
            <p className="text-xs text-[#74776E] leading-relaxed">
              All DeccanGo drivers undergo background verification, police verification, and possess commercial driving licenses with digital POD capabilities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
