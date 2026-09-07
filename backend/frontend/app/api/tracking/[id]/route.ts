import { NextResponse } from "next/server";
import { MOCK_LIVE_ORDER } from "@/lib/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return NextResponse.json({
    success: true,
    data: {
      ...MOCK_LIVE_ORDER,
      trackingNumber: id.toUpperCase(),
      currentGps: {
        latitude: 17.4483,
        longitude: 78.3915,
        heading: 142,
        speedKmph: 28,
      },
    },
  });
}
