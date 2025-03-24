import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { fixAxiosResponse } from "@/utils/common";
import User from "../../models/User";
import { connectToDatabase } from "../../lib/mongodb";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { to, subject, text, html, userType } = await req.json();

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      text,
      html,
    };

    const sendGridResponse = await sgMail.send(msg);
    const parsedResponse = fixAxiosResponse(sendGridResponse);

    if (parsedResponse.statusCode === 200 || parsedResponse.statusCode === 201 || parsedResponse.statusCode === 202) {
      try {
        await connectToDatabase();
        const user = await User.create({ userType, email: to });
        console.log("User created successfully:", user);
        return NextResponse.json({ message: "Email sent and user created successfully" }, { status: 200 });
      } catch (dbError) {
        console.error("Database Error:", dbError);
        // Still return success for email but indicate user creation failed
        return NextResponse.json({ 
          message: "Email sent successfully but failed to create user",
          error: dbError.message 
        }, { status: 200 });
      }
    } else {
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("SendGrid Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
