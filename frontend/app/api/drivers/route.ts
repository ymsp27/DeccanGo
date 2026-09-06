import { NextResponse } from "next/server";
import { MOCK_DRIVER_JOBS } from "@/lib/mockData";

let driverJobs = [...MOCK_DRIVER_JOBS];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: driverJobs,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobId, action } = body;

    if (action === "accept") {
      driverJobs = driverJobs.map((j) =>
        j.id === jobId ? { ...j, status: "accepted" as const } : j
      );
    } else if (action === "deliver") {
      driverJobs = driverJobs.map((j) =>
        j.id === jobId ? { ...j, status: "delivered" as const } : j
      );
    }

    return NextResponse.json({
      success: true,
      data: driverJobs,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Driver update failed" },
      { status: 400 }
    );
  }
}
