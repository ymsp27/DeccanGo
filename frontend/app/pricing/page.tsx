"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Check, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Starter",
      tag: "Ideal for small shops",
      monthlyPrice: 999,
      features: [
        "20 city deliveries included",
        "Live driver GPS tracking",
        "Digital Proof of Delivery (POD)",
        "Standard support",
      ],
      popular: false,
    },
    {
      name: "Business",
      tag: "For scaling Hyderabad merchants",
      monthlyPrice: 2999,
      features: [
        "75 city deliveries included",
        "Priority vehicle dispatch access",
        "Multi-stop route optimizer",
        "Full business analytics dashboard",
        "Automated COD management",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      tag: "High volume distributors",
      monthlyPrice: 7999,
      features: [
        "Unlimited / custom volume",
        "Dedicated EV mini-truck fleet",
        "Direct REST API & Webhooks",
        "Strict 30-min pickup SLA",
        "24/7 dedicated key account manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
            Transparent Logistics Economics
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#151713] tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xs sm:text-sm text-[#74776E]">
            No hidden surge fees. Pay per-kilometer transparent rates for bikes, autos, Tata Ace mini trucks, and commercial cargo.
          </p>
        </div>

        {/* Per-Vehicle Base Rate Section */}
        <PricingSection />

        {/* Subscription Business Plans (Section 51) */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-black text-[#151713]">
              Business Subscription Plans
            </h3>
            <p className="text-xs text-[#74776E]">
              Save up to 25% with bundled deliveries and dedicated fleet allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                  plan.popular
                    ? "bg-[#25351F] text-[#F5F3EA] border-[#34452A] shadow-xl relative"
                    : "bg-white text-[#151713] border-[#EAE6D9] shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B5A477] text-[#25351F] text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs">
                    Most Popular for Businesses
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-extrabold text-xl">{plan.name}</h4>
                      <p
                        className={`text-xs mt-1 ${
                          plan.popular ? "text-[#D8CFB5]" : "text-[#74776E]"
                        }`}
                      >
                        {plan.tag}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">
                      {formatINR(plan.monthlyPrice)}
                    </span>
                    <span
                      className={`text-xs ${
                        plan.popular ? "text-[#D8CFB5]" : "text-[#74776E]"
                      }`}
                    >
                      /month
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            plan.popular ? "text-[#B5A477]" : "text-[#34452A]"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    onClick={() =>
                      alert(`Selected ${plan.name} plan! Redirecting to setup...`)
                    }
                    className={`w-full py-3 rounded-2xl font-bold text-xs transition-all shadow-xs ${
                      plan.popular
                        ? "bg-[#B5A477] text-[#25351F] hover:bg-[#D8CFB5]"
                        : "bg-[#25351F] text-white hover:bg-[#34452A]"
                    }`}
                  >
                    Subscribe to {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
