import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config/site";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    console.log("=== [VIBRUS GENERAL INQUIRY] ===");
    console.log(`From: ${name} (${email}, Phone: ${phone || "N/A"})`);
    console.log(`Subject: ${subject || "General Inquiry"}`);
    console.log(`Routing to: ${siteConfig.contacts.activeRecipients.join(", ")}`);
    console.log(`Mode: ${siteConfig.contacts.deliveryMode}`);
    console.log("================================");

    return NextResponse.json({
      success: true,
      message: "Message received. Our team will respond promptly.",
      recipients: siteConfig.contacts.activeRecipients,
      mode: siteConfig.contacts.deliveryMode,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to process inquiry: " + error.message },
      { status: 500 }
    );
  }
}
