"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  User,
  ChevronRight,
  ShieldCheck,
  Building2,
  Truck,
  Car,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Personal", href: "/" },
    { name: "Business", href: "/business" },
    { name: "Drivers", href: "/drivers" },
    { name: "Fleet", href: "/fleet" },
    { name: "Pricing", href: "/pricing" },
    { name: "Coverage", href: "/coverage" },
    { name: "Tracking", href: "/tracking" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#D8CFB5]/60 py-3"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34452A] rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-[#25351F] flex items-center justify-center text-[#F5F3EA] shadow-md group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-lg tracking-tighter text-[#B5A477]">
                  &gt;&gt;
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tight text-[#151713] flex items-center">
                  DECCAN<span className="text-[#34452A]">GO</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#74776E] -mt-1 font-semibold hidden sm:inline">
                  Hyderabad City Logistics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#34452A] text-[#F5F3EA]"
                        : "text-[#151713]/85 hover:text-[#25351F] hover:bg-[#D8CFB5]/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search orders or service hubs"
                className="p-2 rounded-full text-[#151713]/80 hover:bg-[#D8CFB5]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34452A]"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setLoginModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-[#25351F] border border-[#B5A477]/60 hover:bg-[#FAF9F5] transition-all"
              >
                <User className="w-4 h-4 text-[#59663A]" />
                <span>Login</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenBooking) {
                    onOpenBooking();
                  } else {
                    const el = document.getElementById("booking-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-1.5 bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <span>Book a Delivery</span>
                <ChevronRight className="w-4 h-4 text-[#B5A477]" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 rounded-xl text-[#25351F] hover:bg-[#D8CFB5]/40 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Smooth Spring Animation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF9F5] z-50 lg:hidden shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#D8CFB5]/60">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#25351F] flex items-center justify-center text-[#B5A477] font-bold">
                      &gt;&gt;
                    </div>
                    <span className="font-extrabold text-xl text-[#151713]">
                      DECCANGO
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1 rounded-full text-[#74776E] hover:bg-[#D8CFB5]/40"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                        pathname === link.href
                          ? "bg-[#34452A] text-[#F5F3EA]"
                          : "text-[#151713] hover:bg-[#D8CFB5]/30"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#D8CFB5]/60 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setLoginModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#34452A] text-[#34452A] font-semibold text-sm"
                  >
                    <User className="w-4 h-4" />
                    Sign In / Register
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      const el = document.getElementById("booking-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3 rounded-xl bg-[#25351F] text-[#F5F3EA] font-semibold text-sm text-center shadow-md"
                  >
                    Book a Delivery Now
                  </button>
                </div>
              </div>

              <div className="text-xs text-[#74776E] text-center pt-6 border-t border-[#D8CFB5]/40">
                Operating across 17+ Hyderabad zones • 24/7 Dispatch
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Role-Based Login Modal */}
      <AnimatePresence>
        {loginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginModalOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-[#D8CFB5]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#25351F] text-[#B5A477] flex items-center justify-center font-bold text-sm">
                    &gt;&gt;
                  </div>
                  <h3 className="text-lg font-bold text-[#151713]">
                    Access DeccanGo Portal
                  </h3>
                </div>
                <button
                  onClick={() => setLoginModalOpen(false)}
                  className="p-1 rounded-full text-[#74776E] hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-[#74776E] mb-6">
                Select your account role to access your dedicated Hyderabad operations console:
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  {
                    role: "Customer & Personal",
                    desc: "Track shipments, instant quotes, past invoices",
                    href: "/tracking",
                    icon: User,
                  },
                  {
                    role: "Business & Enterprise",
                    desc: "Bulk CSV upload, route optimization, COD settlements",
                    href: "/business",
                    icon: Building2,
                  },
                  {
                    role: "Driver Partner",
                    desc: "Daily job dispatch, route navigation, instant earnings",
                    href: "/drivers",
                    icon: Truck,
                  },
                  {
                    role: "Fleet Owner",
                    desc: "Vehicle telemetry, driver allocation, fleet uptime",
                    href: "/fleet",
                    icon: Car,
                  },
                  {
                    role: "Admin & Control Tower",
                    desc: "Real-time dispatch, city-wide surge rates, dispute resolution",
                    href: "/admin",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.role}
                      href={item.href}
                      onClick={() => setLoginModalOpen(false)}
                      className="flex items-start gap-3.5 p-3 rounded-2xl border border-[#D8CFB5]/60 hover:border-[#34452A] hover:bg-[#FAF9F5] transition-all text-left group"
                    >
                      <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A] group-hover:bg-[#34452A] group-hover:text-[#F5F3EA] transition-colors mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#151713] flex items-center gap-1">
                          <span>{item.role}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#B5A477] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-xs text-[#74776E]">{item.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl p-5 shadow-2xl z-10 border border-[#D8CFB5]"
            >
              <div className="flex items-center gap-3 border-b border-[#D8CFB5]/60 pb-3">
                <Search className="w-5 h-5 text-[#59663A]" />
                <input
                  type="text"
                  placeholder="Enter tracking ID (e.g. HYD10482) or Hyderabad area..."
                  className="w-full text-sm font-medium focus:outline-none text-[#151713]"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      window.location.href = `/tracking?id=HYD10482`;
                    }
                  }}
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500"
                >
                  ESC
                </button>
              </div>
              <div className="mt-3 text-xs text-[#74776E] flex justify-between items-center">
                <span>Quick match: Order #HYD10482</span>
                <Link
                  href="/tracking?id=HYD10482"
                  onClick={() => setSearchOpen(false)}
                  className="text-[#34452A] font-semibold hover:underline"
                >
                  Track Now &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
