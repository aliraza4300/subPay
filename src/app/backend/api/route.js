import { connectToDatabase } from "../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const isConnected = db.connection.readyState === 1; // 1 = connected

    return NextResponse.json({
      status: isConnected ? "Connected" : "Not Connected",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "Error", message: error.message },
      { status: 500 }
    );
  }
}
