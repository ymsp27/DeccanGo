"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BusinessDashboard } from "@/components/dashboard/BusinessDashboard";
import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  Banknote,
  Repeat,
  Layers,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { formatINR } from "@/lib/utils";

export default function BusinessPage() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [uploadCount, setUploadCount] = useState(0);

  const handleSimulateUpload = () => {
    setFileUploaded(true);
    setUploadCount(18);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#151713]">
      <Header />

      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#34452A] bg-[#F5F3EA] px-3 py-1 rounded-full border border-[#D8CFB5]/60">
              B2B Logistics Console
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#151713] tracking-tight mt-2">
              Business Deliveries & Analytics
            </h1>
            <p className="text-xs sm:text-sm text-[#74776E]">
              Bulk CSV order ingestion, automated batch optimization, and COD reconciliation across Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert("Generating monthly GST Tax Invoice PDF...")}
              className="px-4 py-2.5 rounded-xl border border-[#34452A] text-[#34452A] font-bold text-xs hover:bg-[#FAF9F5]"
            >
              Download GST Invoices
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("bulk-upload-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2.5 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold text-xs hover:bg-[#34452A] shadow-xs"
            >
              + Bulk CSV Upload
            </button>
          </div>
        </div>

        {/* Business Analytics Dashboard Preview */}
        <BusinessDashboard />

        {/* 2-Column Section: Bulk Order Upload & Recurring Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bulk CSV Order Ingestion */}
          <div
            id="bulk-upload-section"
            className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#151713]">
                      Bulk CSV Dispatch Upload
                    </h3>
                    <p className="text-xs text-[#74776E]">Upload up to 500 delivery addresses at once</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-[#FAF9F5] px-2.5 py-1 rounded-full text-[#74776E]">
                  .CSV / .XLSX
                </span>
              </div>

              {!fileUploaded ? (
                <div
                  onClick={handleSimulateUpload}
                  className="cursor-pointer border-2 border-dashed border-[#B5A477] hover:border-[#34452A] rounded-2xl p-6 text-center bg-[#FAF9F5]/70 hover:bg-[#FAF9F5] transition-all space-y-2"
                >
                  <FileSpreadsheet className="w-8 h-8 text-[#59663A] mx-auto" />
                  <div className="text-xs font-bold text-[#151713]">
                    Click to select CSV file or drag & drop here
                  </div>
                  <div className="text-[11px] text-[#74776E]">
                    Supported headers: Customer, Phone, Pickup, Drop, Weight, PackageType, COD
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25351F] text-[#F5F3EA] text-xs font-bold"
                  >
                    Simulate Upload (Sample 18 Orders)
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <span className="font-bold text-sm">
                      {uploadCount} Orders Validated Successfully!
                    </span>
                  </div>
                  <p className="text-xs text-emerald-800">
                    All Hyderabad addresses resolved across Kukatpally, Madhapur, and Secunderabad hubs.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert("Assigning 4 Tata Ace vehicles for bulk dispatch...")}
                      className="px-4 py-2 rounded-xl bg-[#25351F] text-white text-xs font-bold"
                    >
                      Dispatch Batched Fleet
                    </button>
                    <button
                      onClick={() => setFileUploaded(false)}
                      className="px-3 py-2 rounded-xl border border-gray-300 text-xs text-gray-700 bg-white"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#74776E]">
              <span>Sample template available</span>
              <button
                onClick={() => alert("Downloading DeccanGo_Bulk_Template.csv")}
                className="text-[#34452A] font-bold hover:underline"
              >
                Download Template.csv &rarr;
              </button>
            </div>
          </div>

          {/* Recurring Logistics Scheduler */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F5F3EA] text-[#34452A]">
                    <Repeat className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#151713]">
                      Recurring Logistics Schedules
                    </h3>
                    <p className="text-xs text-[#74776E]">Fixed daily routes for retail chain replenishment</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Automated
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#151713]">Kukatpally Warehouse &rarr; 15 Stores</span>
                  <span className="text-[10px] bg-[#34452A] text-white px-2 py-0.5 rounded font-semibold">
                    Mon – Sat (09:00 AM)
                  </span>
                </div>
                <div className="text-[11px] text-[#74776E]">
                  Vehicles: 2x Tata Ace EV &bull; Dedicated Driver allocation
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EAE6D9] text-center">
                  <div>
                    <span className="text-[10px] text-[#74776E]">Daily</span>
                    <div className="font-black text-[#151713]">₹2,400</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#74776E]">Weekly</span>
                    <div className="font-black text-[#151713]">₹14,400</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#74776E]">Monthly</span>
                    <div className="font-black text-[#34452A]">₹57,600</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => alert("Opening Recurring Route Wizard...")}
                className="w-full py-2.5 rounded-xl bg-[#FAF9F5] border border-[#D8CFB5] text-[#25351F] text-xs font-bold hover:bg-[#25351F] hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>+ Create New Recurring Route Contract</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* COD Management Slabs */}
        <div className="bg-white rounded-3xl p-6 border border-[#EAE6D9] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Banknote className="w-5 h-5 text-[#59663A]" />
              <h3 className="font-bold text-base text-[#151713]">
                Cash on Delivery (COD) Reconciliation
              </h3>
            </div>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
              Next Settlement: Tomorrow 11:00 AM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
              <div className="text-gray-500">COD Collected (This Week)</div>
              <div className="text-xl font-black text-[#151713] mt-1">{formatINR(142000)}</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
              <div className="text-gray-500">Pending Handover</div>
              <div className="text-xl font-black text-amber-700 mt-1">{formatINR(12400)}</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
              <div className="text-gray-500">Freight Deductions</div>
              <div className="text-xl font-black text-[#74776E] mt-1">{formatINR(18240)}</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6D9]">
              <div className="text-gray-500">Net Settled to Bank (HDFC)</div>
              <div className="text-xl font-black text-emerald-700 mt-1">{formatINR(111360)}</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
