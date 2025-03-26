// import { connectToDatabase } from "../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const db = await connectToDatabase();
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ message: "Error connecting to DB", error }, { status: 500 });
  }
}
