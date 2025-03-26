import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Set the target date to March 28, 2025
    const targetDate = new Date("2025-03-28T23:59:59");
    const now = new Date();
    
    // Calculate remaining time
    const remainingTime = targetDate.getTime() - now.getTime();
    
    // Convert to hours, minutes, and seconds
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return NextResponse.json({
      success: true,
      data: {
        hours,
        minutes,
        seconds,
        totalMilliseconds: remainingTime
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to get timer data" },
      { status: 500 }
    );
  }
} 