import { NextResponse } from "next/server";
import { MOCK_LIVE_ORDER } from "@/lib/mockData";
import { OrderStatus } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (id.toUpperCase() === "HYD10482" || id === "ord-hyd-10482") {
    return NextResponse.json({
      success: true,
      data: MOCK_LIVE_ORDER,
    });
  }

  return NextResponse.json({
    success: true,
    data: {
      ...MOCK_LIVE_ORDER,
      trackingNumber: id.toUpperCase(),
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    const validStatuses: OrderStatus[] = [
      "PENDING",
      "CONFIRMED",
      "DRIVER_ASSIGNED",
      "DRIVER_ARRIVING",
      "ARRIVED_AT_PICKUP",
      "PICKED_UP",
      "IN_TRANSIT",
      "ARRIVING",
      "DELIVERED",
      "CANCELLED",
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid order status transition" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        orderId: id,
        status,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update order" },
      { status: 500 }
    );
  }
}
