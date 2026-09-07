import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { VehicleOptions } from "@/components/vehicle/VehicleOptions";

export const metadata = {
  title: "Mini Truck Booking Hyderabad — Tata Ace, 1 Ton, 2-5 Ton Trucks",
  description:
    "Hire mini trucks online in Hyderabad for commercial goods, house shifting, and wholesale transport. Tata Ace, 1 Ton, and 2-5 Ton trucks at transparent per-km rates.",
};

export default function MiniTruckBookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Commercial Fleet Hire
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            Mini Truck Booking Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#74776E]">
            Verified mini trucks for every payload requirement: 750 kg Tata Ace, 1.2 Ton trucks, and 2-5 Ton commercial containers across Hyderabad.
          </p>
        </div>

        <BookingWidget />

        <VehicleOptions />
      </main>

      <Footer />
    </div>
  );
}
