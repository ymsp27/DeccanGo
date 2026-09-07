import { NextResponse } from "next/server";
import { calculateFare } from "@/lib/pricing";
import { bookingFormSchema } from "@/lib/validation";
import { MOCK_LIVE_ORDER } from "@/lib/mockData";
import { ShipmentOrder } from "@/types";

// In-memory order cache for realistic simulation
const ordersDatabase: Record<string, ShipmentOrder> = {
  "HYD10482": MOCK_LIVE_ORDER,
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: Object.values(ordersDatabase),
  });
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validated = bookingFormSchema.parse(rawBody);

    const trackingNumber = `HYD${Math.floor(10000 + Math.random() * 90000)}`;
    const pricing = calculateFare({
      vehicleType: validated.vehicleType,
      distanceKm: 14.5,
      weightKg: validated.weightKg,
      deliveryType: validated.deliveryType,
    });

    const newOrder: ShipmentOrder = {
      id: `ord-${Date.now()}`,
      trackingNumber,
      pickupLocation: validated.pickupLocation,
      dropLocation: validated.dropLocation,
      packageType: validated.packageType,
      weightKg: validated.weightKg,
      vehicleType: validated.vehicleType,
      deliveryType: validated.deliveryType,
      status: "CONFIRMED",
      estimatedFare: pricing.finalFare,
      driver: {
        name: "Arjun Reddy",
        phone: "+91 98495 11223",
        rating: 4.9,
        vehicleModel: "DeccanGo Electric Van",
        vehiclePlate: "TS09EV8841",
        currentLocation: validated.pickupLocation,
        etaMinutes: pricing.estimatedMinutes,
      },
      timeline: [
        {
          status: "PENDING",
          title: "Pickup requested",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          completed: true,
          active: false,
        },
        {
          status: "CONFIRMED",
          title: "Booking confirmed & assigned",
          timestamp: "Just now",
          completed: true,
          active: true,
        },
        {
          status: "PICKED_UP",
          title: "Package picked up",
          timestamp: "Pending",
          completed: false,
          active: false,
        },
        {
          status: "IN_TRANSIT",
          title: "In transit",
          timestamp: "Pending",
          completed: false,
          active: false,
        },
        {
          status: "DELIVERED",
          title: "Delivered",
          timestamp: "Pending",
          completed: false,
          active: false,
        },
      ],
      createdAt: new Date().toISOString(),
    };

    ordersDatabase[trackingNumber] = newOrder;

    return NextResponse.json({
      success: true,
      data: newOrder,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Invalid order details" },
      { status: 400 }
    );
  }
}
