import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const awb = searchParams.get('awb');

  if (!awb) {
    return NextResponse.json({ error: "AWB is required" }, { status: 400 });
  }

  // Sample AWB
  if (awb.toUpperCase() === "APX-2025-001234") {
    return NextResponse.json({
      awb: "APX-2025-001234",
      status: "In Transit",
      origin: "Delhi",
      destination: "Mumbai",
      estimatedDelivery: "05 May 2025",
      events: [
        { timestamp: "03 May 2025 10:00 AM", location: "Delhi Hub", status: "Picked Up", completed: true },
        { timestamp: "03 May 2025 6:00 PM", location: "Mathura Checkpoint", status: "In Transit", completed: true },
        { timestamp: "04 May 2025 4:30 AM", location: "Nagpur Hub", status: "In Transit", completed: true },
        { timestamp: "04 May 2025 10:00 AM", location: "Mumbai", status: "Out for Delivery", completed: false },
      ]
    });
  }

  return NextResponse.json(
    { error: "AWB not found. Please check your tracking number." },
    { status: 404 }
  );
}
