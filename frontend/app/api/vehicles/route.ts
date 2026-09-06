import { NextResponse } from "next/server";
import { MOCK_FLEET_VEHICLES } from "@/lib/mockData";
import { FleetVehicle } from "@/types";

let fleetVehicles = [...MOCK_FLEET_VEHICLES];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: fleetVehicles,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newVehicle: FleetVehicle = {
      id: `v-${Date.now()}`,
      plateNumber: body.plateNumber || "TS09XY" + Math.floor(1000 + Math.random() * 9000),
      vehicleType: body.vehicleType || "Tata Ace EV",
      driverName: body.driverName || "Assigned Driver",
      status: "Available",
      todayTrips: 0,
      batteryOrFuel: "100%",
      lastLocation: body.location || "Gachibowli Logistics Hub",
    };

    fleetVehicles = [newVehicle, ...fleetVehicles];

    return NextResponse.json({
      success: true,
      data: newVehicle,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to register vehicle" },
      { status: 400 }
    );
  }
}
