import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";
import { fixAxiosResponse } from "@/utils/common";
// import User from "../../models/User";
// import { connectToDatabase } from "../../lib/mongodb";
import { getUserCountry } from "@/utils/common";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { to, subject, userType } = await req.json();
    
    // Get IP address from various headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const cfConnectingIp = req.headers.get('cf-connecting-ip');
    
    // Try to get the real IP address
    let ipAddress = '';
    if (forwardedFor) {
      // Get the first IP in the list (client's original IP)
      ipAddress = forwardedFor.split(',')[0].trim();
    } else if (realIp) {
      ipAddress = realIp;
    } else if (cfConnectingIp) {
      ipAddress = cfConnectingIp;
    }

    const country = await getUserCountry();

    // First request: Send email using template
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      templateId: 'd-aa56a3bb69824088b271dfe487d8c3a5',
      dynamicTemplateData: {
        userType: userType,
        email: to,
      }
    };

    // Second request: Send email
    const emailResponse = await sgMail.send(msg);

    // Third operation: Save to MongoDB (commented out)
    // await connectToDatabase();
    // const user = new User({
    //   email: to,
    //   userType: userType,
    //   country: country,
    //   ipAddress: ipAddress
    // });
    // await user.save();

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in send-email route:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
