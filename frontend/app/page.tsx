import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { MetricsBanner } from "@/components/hero/MetricsBanner";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { VehicleOptions } from "@/components/vehicle/VehicleOptions";
import { InstantQuote } from "@/components/vehicle/InstantQuote";
import { LiveTracking } from "@/components/tracking/LiveTracking";
import { MultiStopDelivery } from "@/components/optimizer/MultiStopDelivery";
import { BusinessDashboard } from "@/components/dashboard/BusinessDashboard";
import { DriverDashboard } from "@/components/dashboard/DriverDashboard";
import { FleetDashboard } from "@/components/dashboard/FleetDashboard";
import { PODCard } from "@/components/pod/PODCard";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CoverageMap } from "@/components/coverage/CoverageMap";
import { MobileAppPreview } from "@/components/mobile/MobileAppPreview";
import { GreenLogistics } from "@/components/eco/GreenLogistics";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata = {
  title: "DeccanGo — Hyderabad City Logistics & Delivery",
  description:
    "Move anything, anywhere in Hyderabad. Book bikes, autos, Tata Ace mini trucks, and commercial vehicles. Track live shipments, manage multi-stop dispatch, and optimize fleet logistics.",
  keywords: [
    "Hyderabad logistics",
    "Tata Ace booking Hyderabad",
    "mini truck delivery Hyderabad",
    "hyperlocal courier Hyderabad",
    "HITEC City delivery",
    "B2B logistics Hyderabad",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      {/* Sticky Adaptive Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Floating Booking Widget */}
        <BookingWidget />

        {/* Trust Metrics Strip */}
        <div className="mt-8 sm:mt-12">
          <MetricsBanner />
        </div>

        {/* Operational Intelligence & Services Grid */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Row 1: Vehicle Options & Instant Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8">
              <VehicleOptions />
            </div>
            <div className="lg:col-span-4">
              <InstantQuote />
            </div>
          </div>

          {/* Row 2: Live Tracking & Multi-Stop Delivery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <LiveTracking />
            </div>
            <div className="lg:col-span-6">
              <MultiStopDelivery />
            </div>
          </div>

          {/* Row 3: Business Dashboard & Driver Partner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <BusinessDashboard />
            </div>
            <div className="lg:col-span-6">
              <DriverDashboard />
            </div>
          </div>

          {/* Row 4: Fleet Owner & POD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <FleetDashboard />
            </div>
            <div className="lg:col-span-6">
              <PODCard />
            </div>
          </div>

          {/* Row 5: Transparent Pricing & Hyderabad Coverage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <PricingSection />
            </div>
            <div className="lg:col-span-6">
              <CoverageMap />
            </div>
          </div>

          {/* Row 6: Mobile App Preview & Green Logistics Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6">
              <MobileAppPreview />
            </div>
            <div className="lg:col-span-6">
              <GreenLogistics />
            </div>
          </div>
        </section>

        {/* Final Conversion CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
