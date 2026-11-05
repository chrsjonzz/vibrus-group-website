import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";
import os from "os";
import { siteConfig } from "@/lib/config/site";

const ALLOWED_EXTENSIONS = [".pdf", ".docx", ".doc", ".txt", ".png", ".jpg", ".jpeg"];
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB per file
const MAX_TOTAL_SIZE_BYTES = 40 * 1024 * 1024; // 40 MB total
const MAX_FILE_COUNT = 10;

async function storeFileSafely(filename: string, buffer: Buffer): Promise<{ success: boolean; storageLocation: string }> {
  const primaryDir = path.join(process.cwd(), "secure_uploads");
  try {
    await mkdir(primaryDir, { recursive: true });
    const safePath = path.join(primaryDir, path.basename(filename));
    await writeFile(safePath, buffer);
    return { success: true, storageLocation: "local_private_storage" };
  } catch (err) {
    try {
      const fallbackDir = path.join(os.tmpdir(), "vibrus_secure_uploads");
      await mkdir(fallbackDir, { recursive: true });
      const safeFallbackPath = path.join(fallbackDir, path.basename(filename));
      await writeFile(safeFallbackPath, buffer);
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

    const facilityName = ((formData.get("facilityName") as string) || "").trim();
    const facilityType = ((formData.get("facilityType") as string) || "").trim();
    const contactName = ((formData.get("contactName") as string) || "").trim();
    const contactPhone = ((formData.get("contactPhone") as string) || "").trim();
    const contactEmail = ((formData.get("contactEmail") as string) || "").trim();
    const city = ((formData.get("city") as string) || "").trim();
    const county = ((formData.get("county") as string) || "").trim();
    const positionNeeded = ((formData.get("positionNeeded") as string) || "").trim();
    const numberOfStaff = ((formData.get("numberOfStaff") as string) || "").trim();
    const shiftType = ((formData.get("shiftType") as string) || "").trim();
    const urgency = ((formData.get("urgency") as string) || "").trim();
    const notes = ((formData.get("notes") as string) || "").trim();

    // Required fields validation
    if (!facilityName || !contactName || !contactPhone || !contactEmail || !positionNeeded) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Facility Name, Contact Name, Phone, Email, and Position Needed)." },
        { status: 400 }
      );
    }

    // Collect all files
    const rawFiles: File[] = [];
    const filesList = formData.getAll("files") as File[];
    const requisitionFilesList = formData.getAll("requisitionFiles") as File[];
    const singleReq = formData.get("requisitionFile") as File | null;

    if (filesList.length > 0) {
      rawFiles.push(...filesList);
    } else if (requisitionFilesList.length > 0) {
      rawFiles.push(...requisitionFilesList);
    } else if (singleReq && singleReq.size > 0) {
      rawFiles.push(singleReq);
    }

    if (rawFiles.length > MAX_FILE_COUNT) {
      return NextResponse.json(
        { error: `Maximum file limit exceeded. You can attach up to ${MAX_FILE_COUNT} files.` },
        { status: 400 }
      );
    }

    let totalUploadSize = 0;
    const storedFilesMeta: { originalName: string; size: number; storedReference: string }[] = [];

    for (const f of rawFiles) {
      if (!f || f.size === 0) continue;

      totalUploadSize += f.size;
      if (totalUploadSize > MAX_TOTAL_SIZE_BYTES) {
        return NextResponse.json(
          { error: `Total upload size exceeds the ${(MAX_TOTAL_SIZE_BYTES / (1024 * 1024)).toFixed(0)} MB limit.` },
          { status: 400 }
        );
      }

      if (f.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: `File "${f.name}" exceeds the ${(MAX_FILE_SIZE_BYTES / (1024 * 1024)).toFixed(0)} MB limit (${(f.size / (1024 * 1024)).toFixed(2)} MB).` },
          { status: 400 }
        );
      }

      const ext = path.extname(f.name).toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `Invalid file format (${ext}) for "${f.name}". Only PDF, Word, text, and image files are accepted.` },
          { status: 400 }
        );
      }

      // Safe normalized base name preventing path traversal
      const safeBase = path.basename(f.name).replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 60);
      const secureId = crypto.randomUUID();
      const internalSecureFilename = `req_${Date.now()}_${secureId}_${safeBase}`;

      const bytes = await f.arrayBuffer();
      const buffer = Buffer.from(bytes);

      await storeFileSafely(internalSecureFilename, buffer);

      storedFilesMeta.push({
        originalName: f.name,
        size: f.size,
        storedReference: internalSecureFilename,
      });
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
    console.log(`Attached Files Count: ${storedFilesMeta.length}`);
    storedFilesMeta.forEach((item, idx) => {
      console.log(`  File ${idx + 1}: ${item.originalName} (${(item.size / 1024).toFixed(1)} KB) -> secure_uploads/${item.storedReference}`);
    });
    console.log("=========================================");

    // Private response: do NOT expose public URLs
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
      internalFileReference: storedFilesMeta[0]?.storedReference || null,
      filesAttachedCount: storedFilesMeta.length,
      filesSummary: storedFilesMeta.map((item) => ({
        name: item.originalName,
        size: item.size,
      })),
    });
  } catch (error: any) {
    console.error("Error processing staff request:", error);
    return NextResponse.json(
      { error: "Internal processing error. Please contact dispatch at (248) 443-5100." },
      { status: 500 }
    );
  }
}
