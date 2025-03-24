import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching users", error }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     const { userType, email } = await req.json();
//     await connectToDatabase();
//     const user = await User.create({ userType, email });
//     return NextResponse.json(user, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error creating user", error }, { status: 500 });
//   }
// }
