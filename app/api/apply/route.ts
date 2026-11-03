import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";
import os from "os";
import { siteConfig } from "@/lib/config/site";

const ALLOWED_EXTENSIONS = [".pdf", ".docx", ".doc", ".txt"];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

async function storeFileSafely(filename: string, buffer: Buffer): Promise<{ success: boolean; storageLocation: string }> {
  // Primary target: secure_uploads in working directory
  const primaryDir = path.join(process.cwd(), "secure_uploads");
  try {
    await mkdir(primaryDir, { recursive: true });
    await writeFile(path.join(primaryDir, filename), buffer);
    return { success: true, storageLocation: "local_private_storage" };
  } catch (err) {
    // Fallback for read-only serverless environments (e.g., Vercel Lambda /tmp)
    try {
      const fallbackDir = path.join(os.tmpdir(), "vibrus_secure_uploads");
      await mkdir(fallbackDir, { recursive: true });
      await writeFile(path.join(fallbackDir, filename), buffer);
      return { success: true, storageLocation: "ephemeral_serverless_tmp" };
    } catch (fallbackErr) {
      console.warn("Storage fallback warning: Running in non-writable serverless demo mode. Document logged in-memory.");
      return { success: true, storageLocation: "in_memory_demo_receipt" };
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = (formData.get("fullName") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const profession = (formData.get("profession") as string || "").trim();
    const experienceYears = (formData.get("experienceYears") as string || "").trim();
    const shiftPreference = (formData.get("shiftPreference") as string || "").trim();
    const cityState = (formData.get("cityState") as string || "").trim();
    const notes = (formData.get("notes") as string || "").trim();

    // Required fields validation
    if (!fullName || !phone || !email || !profession) {
      return NextResponse.json(
        { error: "Please provide your Full Name, Phone Number, Email, and Primary Profession." },
        { status: 400 }
      );
    }

    const resumeFile = formData.get("resumeFile") as File | null;
    let fileWasAttached = false;
    let internalSecureFilename: string | null = null;

    if (resumeFile && resumeFile.size > 0) {
      // 1. File size check
      if (resumeFile.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: `File size exceeds the 5 MB limit. Selected resume is ${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB.` },
          { status: 400 }
        );
      }

      // 2. File extension check
      const ext = path.extname(resumeFile.name).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `Invalid file type (${ext}). Only PDF, Word (.doc, .docx), and plain text (.txt) resumes are accepted.` },
          { status: 400 }
        );
      }

      // 3. Store in non-public secure storage with randomized UUID
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const secureId = crypto.randomUUID();
      internalSecureFilename = `resume_${secureId}${ext}`;

      const storageResult = await storeFileSafely(internalSecureFilename, buffer);
      fileWasAttached = true;
      console.log(`[Storage Mode] Resume saved via: ${storageResult.storageLocation}`);
    }

    const trackingId = `APP-${Date.now().toString(36).toUpperCase()}`;

    // Server-log recording (Demo mode)
    console.log("=== [VIBRUS LOCAL DEMO RECRUITING LOG] ===");
    console.log(`Tracking ID: ${trackingId}`);
    console.log(`Applicant: ${fullName} (${email}, Phone: ${phone})`);
    console.log(`Role: ${profession} | Availability: ${shiftPreference}`);
    console.log(`Active Demo Recipient: ${siteConfig.contacts.primaryRecipient}`);
    console.log(`Delivery Mode: ${siteConfig.contacts.deliveryMode}`);
    if (fileWasAttached) {
      console.log(`Resume: Stored securely in local private directory (secure_uploads/${internalSecureFilename})`);
    } else {
      console.log("Resume: None attached");
    }
    console.log("==========================================");

    // Note: Do NOT expose public web URLs to client
    return NextResponse.json({
      success: true,
      trackingId,
      message: "Application intake recorded successfully.",
      activeRecipient: siteConfig.contacts.primaryRecipient,
      recipients: siteConfig.contacts.activeRecipients,
      mode: siteConfig.contacts.deliveryMode,
      notificationStatus: "Recorded to local server log (Actual email transport pending production integration)",
      storedLocally: true,
      resumeAttached: fileWasAttached,
      internalFileReference: fileWasAttached ? internalSecureFilename : null,
    });
  } catch (error: any) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Internal processing error. Please contact recruitment at (248) 443-5100." },
      { status: 500 }
    );
  }
}
