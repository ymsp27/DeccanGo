import { NextResponse } from "next/server";
import { bulkOrderUploadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = bulkOrderUploadSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid CSV/Excel format or missing mandatory fields",
          details: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const createdBatches = validated.data.orders.map((o, idx) => ({
      orderId: `BLK-HYD-${Date.now()}-${idx + 1}`,
      ...o,
      status: "CONFIRMED",
      assignedHub: "Kukatpally Industrial Hub",
      estimatedDispatch: "Within 45 mins",
    }));

    return NextResponse.json({
      success: true,
      count: createdBatches.length,
      orders: createdBatches,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Bulk upload ingestion failed" },
      { status: 500 }
    );
  }
}
