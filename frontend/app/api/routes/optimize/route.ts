import { NextResponse } from "next/server";
import { optimizeStopsSequence } from "@/lib/routing";
import { RouteStop } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { stops } = body;

    if (!stops || !Array.isArray(stops) || stops.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid stops provided" },
        { status: 400 }
      );
    }

    const optimizationResult = optimizeStopsSequence(stops as RouteStop[]);

    return NextResponse.json({
      success: true,
      data: optimizationResult,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Route optimization failed" },
      { status: 500 }
    );
  }
}
