import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";
import { fixAxiosResponse } from "@/utils/common";
import User from "../../models/User";
import { connectToDatabase } from "../../lib/mongodb";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { to, subject, userType } = await req.json();

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

    const sendGridResponse = await sgMail.send(msg);
    const parsedResponse = fixAxiosResponse(sendGridResponse);

    if (parsedResponse.statusCode === 200 || parsedResponse.statusCode === 201 || parsedResponse.statusCode === 202) {
      try {
        // Second request: Add contact to SendGrid contact list
        const contactData = {
          list_ids: [process.env.SENDGRID_CONTACT_LIST_ID],
          contacts: [
            {
              email: to,
              user_type: userType
            }
          ]
        };

        const contactRequest = {
          url: `/v3/marketing/contacts`,
          method: 'PUT',
          body: contactData
        };

        await sgClient.request(contactRequest);

        // Third operation: Save to MongoDB
        await connectToDatabase();
        const user = await User.create({ userType, email: to });
        console.log("User created successfully:", user);
        return NextResponse.json({ message: "Email sent, contact added to list, and user created successfully" }, { status: 200 });
      } catch (dbError) {
        console.error("Database or SendGrid Contact List Error:", dbError);
        // Still return success for email but indicate other operations failed
        return NextResponse.json({ 
          message: "Email sent successfully but failed to create user or add to contact list",
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
