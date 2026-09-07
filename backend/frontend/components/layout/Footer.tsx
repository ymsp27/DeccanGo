import React from "react";
import Link from "next/link";
import { Leaf, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#25351F] text-[#F5F3EA] pt-16 pb-12 border-t border-[#34452A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#34452A]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#B5A477] text-[#25351F] flex items-center justify-center font-bold text-base shadow-sm">
                &gt;&gt;
              </div>
              <span className="text-2xl font-black tracking-tight text-[#FFFFFF]">
                DECCAN<span className="text-[#B5A477]">GO</span>
              </span>
            </div>
            <p className="text-sm text-[#D8CFB5]/80 max-w-sm leading-relaxed">
              Hyderabad’s city logistics operating system. Unifying hyperlocal dispatch,
              commercial mini-trucks, and multi-stop fleet intelligence across 17+ urban clusters.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#34452A] border border-[#59663A]/40 text-xs text-[#D8CFB5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Dispatch Engine Active • Hyderabad Wide</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5A477] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CFB5]/85">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About DeccanGo
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Careers</span>
                  <span className="text-[10px] bg-[#B5A477]/30 text-[#B5A477] px-1.5 py-0.5 rounded font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/hyderabad-logistics" className="hover:text-white transition-colors">
                  Hyderabad Logistics Tech
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & SEO Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5A477] mb-4">
              Vehicles & Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CFB5]/85">
              <li>
                <Link href="/tata-ace-hyderabad" className="hover:text-white transition-colors">
                  Tata Ace Booking Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/mini-truck-booking-hyderabad" className="hover:text-white transition-colors">
                  Mini Truck Transport
                </Link>
              </li>
              <li>
                <Link href="/hyperlocal-delivery-hyderabad" className="hover:text-white transition-colors">
                  Hyperlocal Bike & Auto
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent Rate Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Dashboards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5A477] mb-4">
              Operating Portals
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CFB5]/85">
              <li>
                <Link href="/business" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Business Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A477]" />
                </Link>
              </li>
              <li>
                <Link href="/drivers" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Driver Partner Console</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A477]" />
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Fleet Management</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A477]" />
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Live Shipment Tracker</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A477]" />
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Admin Control Tower</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B5A477]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D8CFB5]/70">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} DeccanGo Logistics Technologies Pvt Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Carriage
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy & GPS Policy
            </Link>
            <div className="flex items-center gap-1.5 text-[#B5A477]">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>From bike to mini-truck — for a cleaner Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
