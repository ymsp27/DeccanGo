import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { InstantQuote } from "@/components/vehicle/InstantQuote";

export const metadata = {
  title: "Hyperlocal Delivery in Hyderabad — DeccanGo Bike & Auto Express",
  description:
    "Instant express parcel delivery in Hyderabad. Send documents, packages, and parcels via bikes and autos in 45-90 minutes across all Hyderabad areas.",
};

export default function HyperlocalDeliveryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Intra-City Express
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            Hyperlocal Delivery in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#74776E]">
            Doorstep pickup and express courier delivery across Hyderabad within 45 to 90 minutes. Starts at ₹99 with live GPS tracking.
          </p>
        </div>

        <BookingWidget />

        <div className="max-w-xl mx-auto">
          <InstantQuote />
        </div>
      </main>

      <Footer />
    </div>
  );
}
