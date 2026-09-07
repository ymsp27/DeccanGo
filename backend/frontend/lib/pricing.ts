import { VehicleCategory } from "@/types";

export interface PricingInput {
  vehicleType: VehicleCategory;
  distanceKm: number;
  weightKg?: number;
  deliveryType?: "standard" | "express" | "scheduled";
  additionalStops?: number;
}

export interface PricingBreakdown {
  vehicleType: VehicleCategory;
  baseFare: number;
  distanceCharge: number;
  weightSurcharge: number;
  stopsSurcharge: number;
  prioritySurcharge: number;
  subtotal: number;
  gst: number;
  finalFare: number;
  estimatedMinutes: number;
}

export const VEHICLE_RATES: Record<
  VehicleCategory,
  {
    name: string;
    baseFare: number;
    baseKm: number;
    perKmRate: number;
    minFare: number;
    speedKmph: number;
    maxWeightKg: number;
  }
> = {
  bike: {
    name: "Bike",
    baseFare: 40,
    baseKm: 2,
    perKmRate: 12,
    minFare: 99,
    speedKmph: 25,
    maxWeightKg: 20,
  },
  auto: {
    name: "Auto",
    baseFare: 60,
    baseKm: 2,
    perKmRate: 16,
    minFare: 149,
    speedKmph: 22,
    maxWeightKg: 100,
  },
  erickshaw: {
    name: "E-Rickshaw",
    baseFare: 70,
    baseKm: 2,
    perKmRate: 15,
    minFare: 199,
    speedKmph: 20,
    maxWeightKg: 250,
  },
  tata_ace: {
    name: "Tata Ace",
    baseFare: 200,
    baseKm: 3,
    perKmRate: 24,
    minFare: 399,
    speedKmph: 28,
    maxWeightKg: 750,
  },
  "1ton": {
    name: "1 Ton Truck",
    baseFare: 350,
    baseKm: 4,
    perKmRate: 32,
    minFare: 599,
    speedKmph: 25,
    maxWeightKg: 1200,
  },
  "2_5ton": {
    name: "2-5 Ton Truck",
    baseFare: 650,
    baseKm: 5,
    perKmRate: 48,
    minFare: 1199,
    speedKmph: 22,
    maxWeightKg: 4000,
  },
  refrigerated: {
    name: "Refrigerated Van",
    baseFare: 850,
    baseKm: 5,
    perKmRate: 55,
    minFare: 1499,
    speedKmph: 25,
    maxWeightKg: 1500,
  },
};

export function calculateFare(input: PricingInput): PricingBreakdown {
  const rate = VEHICLE_RATES[input.vehicleType] || VEHICLE_RATES.bike;
  const distance = Math.max(1, input.distanceKm);

  // Distance charge beyond base km
  const chargeableKm = Math.max(0, distance - rate.baseKm);
  const distanceCharge = Math.round(chargeableKm * rate.perKmRate);

  // Weight surcharge if exceeding normal weight slab
  const weight = input.weightKg || 5;
  const weightSurcharge =
    weight > 20 ? Math.round((weight - 20) * 1.5) : 0;

  // Additional stops surcharge (₹80 per extra stop)
  const stopsSurcharge = (input.additionalStops || 0) * 80;

  // Priority express surcharge (20% extra)
  let prioritySurcharge = 0;
  if (input.deliveryType === "express") {
    prioritySurcharge = Math.round((rate.baseFare + distanceCharge) * 0.2);
  }

  let subtotal =
    rate.baseFare + distanceCharge + weightSurcharge + stopsSurcharge + prioritySurcharge;

  // Minimum fare rule
  if (subtotal < rate.minFare) {
    subtotal = rate.minFare;
  }

  const gst = Math.round(subtotal * 0.05); // 5% GST for goods transport
  const finalFare = subtotal + gst;

  // ETA in minutes
  const trafficMultiplier = 1.35; // Hyderabad city traffic factor
  const driveMinutes = Math.round((distance / rate.speedKmph) * 60 * trafficMultiplier);
  const bufferMinutes = 15; // Pickup & handover buffer
  const estimatedMinutes = Math.max(25, driveMinutes + bufferMinutes);

  return {
    vehicleType: input.vehicleType,
    baseFare: rate.baseFare,
    distanceCharge,
    weightSurcharge,
    stopsSurcharge,
    prioritySurcharge,
    subtotal,
    gst,
    finalFare,
    estimatedMinutes,
  };
}
