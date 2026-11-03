import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import { siteConfig } from "@/lib/config/site";

const ALLOWED_EXTENSIONS = [".pdf", ".docx", ".doc", ".txt"];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const facilityName = (formData.get("facilityName") as string || "").trim();
    const facilityType = (formData.get("facilityType") as string || "").trim();
    const contactName = (formData.get("contactName") as string || "").trim();
    const contactPhone = (formData.get("contactPhone") as string || "").trim();
    const contactEmail = (formData.get("contactEmail") as string || "").trim();
    const positionNeeded = (formData.get("positionNeeded") as string || "").trim();
    const numberOfStaff = (formData.get("numberOfStaff") as string || "1").trim();
    const shiftType = (formData.get("shiftType") as string || "").trim();
    const urgency = (formData.get("urgency") as string || "").trim();
    const county = (formData.get("county") as string || "").trim();
    const notes = (formData.get("notes") as string || "").trim();

    // Required fields validation
    if (!facilityName || !contactName || !contactPhone || !contactEmail || !positionNeeded) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Facility Name, Contact Name, Phone, Email, and Position Needed)." },
        { status: 400 }
      );
    }

    const requisitionFile = formData.get("requisitionFile") as File | null;
    let fileWasAttached = false;
    let internalSecureFilename: string | null = null;

    if (requisitionFile && requisitionFile.size > 0) {
      // 1. File size check
      if (requisitionFile.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: `File size exceeds the 5 MB limit. Selected file is ${(requisitionFile.size / (1024 * 1024)).toFixed(2)} MB.` },
          { status: 400 }
        );
      }

      // 2. File extension validation
      const ext = path.extname(requisitionFile.name).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `Invalid file type (${ext}). Only PDF, Word (.doc, .docx), and plain text (.txt) documents are accepted.` },
          { status: 400 }
        );
      }

      // 3. Store in non-public secure_uploads folder with randomized UUID
      const bytes = await requisitionFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const secureId = crypto.randomUUID();
      internalSecureFilename = `req_${secureId}${ext}`;

      const secureDir = path.join(process.cwd(), "secure_uploads");
      const targetPath = path.join(secureDir, internalSecureFilename);

      await writeFile(targetPath, buffer);
      fileWasAttached = true;
    }

    const trackingId = `REQ-${Date.now().toString(36).toUpperCase()}`;

    // Server-log recording (Demo mode)
    console.log("=== [VIBRUS LOCAL DEMO DISPATCH LOG] ===");
    console.log(`Tracking ID: ${trackingId}`);
    console.log(`Facility: ${facilityName} (${contactName})`);
    console.log(`Position: ${positionNeeded} (Qty: ${numberOfStaff}) | Shift: ${shiftType}`);
    console.log(`Urgency: ${urgency} | County: ${county}`);
    console.log(`Active Demo Recipient: ${siteConfig.contacts.primaryRecipient}`);
    console.log(`Delivery Mode: ${siteConfig.contacts.deliveryMode}`);
    if (fileWasAttached) {
      console.log(`Attachment: Stored securely in local private directory (secure_uploads/${internalSecureFilename})`);
    } else {
      console.log("Attachment: None provided");
    }
    console.log("=========================================");

    // Note: Do NOT expose public web URLs to client
    return NextResponse.json({
      success: true,
      trackingId,
      message: "Staffing request recorded successfully.",
      callbackCommitment: "30 minutes",
      activeRecipient: siteConfig.contacts.primaryRecipient,
      recipients: siteConfig.contacts.activeRecipients,
      mode: siteConfig.contacts.deliveryMode,
      notificationStatus: "Recorded to local server log (Actual email transport pending production integration)",
      storedLocally: true,
      documentAttached: fileWasAttached,
      internalFileReference: fileWasAttached ? internalSecureFilename : null,
    });
  } catch (error: any) {
    console.error("Error processing staff request:", error);
    return NextResponse.json(
      { error: "Internal processing error. Please contact dispatch at (248) 443-5100." },
      { status: 500 }
    );
  }
}
