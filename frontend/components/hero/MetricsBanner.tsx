"use client";

import React from "react";
import { Package, Users, Truck, Building2, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function MetricsBanner() {
  const metrics = [
    {
      icon: Package,
      value: "10,000+",
      label: "Deliveries in Hyderabad",
    },
    {
      icon: Users,
      value: "500+",
      label: "Verified Drivers",
    },
    {
      icon: Truck,
      value: "Wide Vehicle Network",
      label: "Bike to 5-Ton Trucks",
    },
    {
      icon: Building2,
      value: "Business Trusted",
      label: "by 500+ Companies",
    },
    {
      icon: Leaf,
      value: "Lower emissions",
      label: "Greener Deliveries",
    },
  ];

  return (
    <div className="bg-[#25351F] text-[#F5F3EA] py-5 border-y border-[#34452A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 items-center">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-[#34452A] text-[#B5A477] shrink-0 border border-[#59663A]/40">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-none">
                    {item.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#D8CFB5]/80 mt-1 leading-tight">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
