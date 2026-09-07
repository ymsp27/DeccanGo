import { NextResponse } from "next/server";
import { calculateFare } from "@/lib/pricing";
import { VehicleCategory } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { vehicleType, distanceKm = 12, weightKg = 5, deliveryType = "standard", additionalStops = 0 } = body;

    const estimate = calculateFare({
      vehicleType: (vehicleType as VehicleCategory) || "bike",
      distanceKm: Number(distanceKm),
      weightKg: Number(weightKg),
      deliveryType,
      additionalStops: Number(additionalStops),
    });

    return NextResponse.json({
      success: true,
      data: estimate,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to calculate estimate" },
      { status: 400 }
    );
  }
}
