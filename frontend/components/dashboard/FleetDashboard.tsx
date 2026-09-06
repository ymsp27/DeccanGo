"use client";

import React, { useState } from "react";
import { Plus, Truck, User, BatteryCharging, Wrench, X, Check, Sparkles } from "lucide-react";
import { MOCK_FLEET_VEHICLES } from "@/lib/mockData";
import { FleetVehicle } from "@/types";

export function FleetDashboard() {
  const [vehicles, setVehicles] = useState<FleetVehicle[]>(MOCK_FLEET_VEHICLES);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newPlate, setNewPlate] = useState("");
  const [newType, setNewType] = useState("Tata Ace EV");
  const [newDriver, setNewDriver] = useState("");

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlate || !newDriver) return;

    const newEntry: FleetVehicle = {
      id: `v-${Date.now()}`,
      plateNumber: newPlate.toUpperCase(),
      vehicleType: newType,
      driverName: newDriver,
      status: "Available",
      todayTrips: 0,
      batteryOrFuel: "95% EV",
      lastLocation: "HITEC City Hub",
    };

    setVehicles([newEntry, ...vehicles]);
    setNewPlate("");
    setNewDriver("");
    setAddModalOpen(false);
  };

  const getStatusBadge = (status: FleetVehicle["status"]) => {
    switch (status) {
      case "Available":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-50/90 text-emerald-700 border border-emerald-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available
          </span>
        );
      case "Busy":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-amber-50/90 text-amber-700 border border-amber-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Busy
          </span>
        );
      case "Maintenance":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-rose-50/90 text-rose-700 border border-rose-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Maintenance
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-gray-100/90 text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            Offline
          </span>
        );
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_15px_35px_rgba(37,53,31,0.06)] flex flex-col justify-between h-full card-3d">
      <div>
        {/* Header with Add Vehicle Button */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#151713] tracking-tight">
              Fleet Owner
            </h3>
            <p className="text-xs text-[#74776E]">
              Manage your vehicles and maximize earnings
            </p>
          </div>

          <button
            onClick={() => setAddModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25351F] hover:bg-[#34452A] text-[#F5F3EA] text-xs font-bold transition-all shadow-xs hover:scale-[1.02]"
          >
            <Plus className="w-3.5 h-3.5 text-[#B5A477]" />
            <span>Add Vehicle</span>
          </button>
        </div>

        {/* Desktop View: Translucent Responsive Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#EAE6D9]/80 text-[#74776E] uppercase font-extrabold text-[10px] tracking-wider">
                <th className="py-2.5 px-2">Vehicle</th>
                <th className="py-2.5 px-2">Type</th>
                <th className="py-2.5 px-2">Driver</th>
                <th className="py-2.5 px-2">Status</th>
                <th className="py-2.5 px-2 text-right">Today's Trips</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/60">
              {vehicles.map((v) => (
                <tr key={v.id} className="hover:bg-white/70 transition-colors">
                  <td className="py-3.5 px-2 font-mono font-bold text-[#151713]">
                    {v.plateNumber}
                  </td>
                  <td className="py-3.5 px-2 text-[#74776E] font-medium">{v.vehicleType}</td>
                  <td className="py-3.5 px-2 font-semibold text-[#151713]">
                    {v.driverName}
                  </td>
                  <td className="py-3.5 px-2">{getStatusBadge(v.status)}</td>
                  <td className="py-3.5 px-2 text-right font-black text-[#151713]">
                    {v.todayTrips}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Responsive Translucent Cards */}
        <div className="md:hidden space-y-2.5">
          {vehicles.map((v) => (
            <div
              key={`m-${v.id}`}
              className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-xs border border-white/85 space-y-2 shadow-2xs card-3d"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-[#151713]">
                  {v.plateNumber}
                </span>
                {getStatusBadge(v.status)}
              </div>
              <div className="flex items-center justify-between text-xs text-[#74776E]">
                <span>Type: <strong className="text-[#151713]">{v.vehicleType}</strong></span>
                <span>Driver: <strong className="text-[#151713]">{v.driverName}</strong></span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#EAE6D9]/60">
                <span className="text-[11px] text-[#59663A] font-bold">{v.batteryOrFuel}</span>
                <span className="font-bold text-[#151713]">
                  {v.todayTrips} Trips Today
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Vehicle Frosted Modal */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="relative w-full max-w-sm glass-panel rounded-3xl p-6 shadow-2xl border border-white/90 specular-shine">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
              <h4 className="font-bold text-base text-[#151713]">
                Register New Vehicle
              </h4>
              <button
                onClick={() => setAddModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddVehicle} className="mt-4 space-y-3 text-xs">
              <div>
                <label className="font-bold text-[#151713] block mb-1">
                  Registration / Plate Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. TS09AZ9988"
                  value={newPlate}
                  onChange={(e) => setNewPlate(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A] font-mono uppercase bg-white/80"
                />
              </div>

              <div>
                <label className="font-bold text-[#151713] block mb-1">
                  Vehicle Type
                </label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A] bg-white/80"
                >
                  <option value="Tata Ace EV">Tata Ace EV (Electric)</option>
                  <option value="Tata Ace Diesel">Tata Ace Diesel</option>
                  <option value="Auto Cargo">Auto Cargo</option>
                  <option value="Electric Bike">Electric Bike</option>
                  <option value="1 Ton Truck">1 Ton Truck</option>
                  <option value="2-5 Ton Truck">2-5 Ton Truck</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#151713] block mb-1">
                  Assigned Driver Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammed Farooq"
                  value={newDriver}
                  onChange={(e) => setNewDriver(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D8CFB5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34452A] bg-white/80"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#25351F] text-[#F5F3EA] font-bold hover:bg-[#34452A] shadow-xs"
                >
                  Add to Active Fleet
                </button>
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
