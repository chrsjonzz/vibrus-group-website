import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  FileText,
  Lock,
  Eye,
  CheckCircle2,
  HardDrive,
  Cookie,
  Accessibility,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Management Review Checklist — Vibrus Group LLC (Pre-Launch Hold)",
  description:
    "Required pre-launch checklist and placeholder documentation for management review by executive leadership (Paddy and Achla) and operations lead (Sharon) prior to live domain cutover.",
};

export default function ManagementReviewPage() {
  const reviewItems = [
    {
      id: "storage",
      title: "1. Production Cloud Data-Storage Selection",
      icon: HardDrive,
      status: "SECURE LOCAL DEMO STORAGE ACTIVE",
      summary:
        "In this demo build, uploaded resumes and requisitions are stored locally in a private non-public directory (secure_uploads/) using UUID filenames, a 5 MB cap, and no public web URL access. Before live production deployment on Vercel, management must select and approve a secure cloud object store (e.g., Vercel Blob, AWS S3 with KMS encryption, or Azure Blob Storage).",
      actionNeeded:
        "Management decision required: Approve production cloud storage provider and define automated file retention and deletion schedules."
    },
    {
      id: "privacy",
      title: "2. Official Privacy Policy (HIPAA / Candidate Data)",
      icon: Lock,
      status: "PLACEHOLDER PENDING REVIEW",
      summary:
        "The website must articulate how candidate personal identifiers, clinical credentials, Social Security numbers, drug screens, and client contact data are collected, processed, and safeguarded.",
      actionNeeded:
        "Management review required: Legal counsel sign-off on HIPAA compliance statement and candidate data privacy policy."
    },
    {
      id: "terms",
      title: "3. Terms of Use & Shift Booking Agreement",
      icon: FileText,
      status: "PLACEHOLDER PENDING REVIEW",
      summary:
        "Defines the legal scope of on-demand shift requests, cancellation windows, overtime billable rates, and candidate placement warranties.",
      actionNeeded:
        "Management review required: Align website booking terms with existing master service agreements (MSAs) and clinical rate cards."
    },
    {
      id: "accessibility",
      title: "4. Accessibility Statement (WCAG 2.1 AA Standards)",
      icon: Accessibility,
      status: "PLACEHOLDER PENDING REVIEW",
      summary:
        "Commitment to digital accessibility for individuals with disabilities, including screen reader navigation, keyboard controls, and color contrast compliance.",
      actionNeeded:
        "Management review required: Approve official contact procedure for users seeking accessibility accommodations."
    },
    {
      id: "cookies",
      title: "5. Cookie & Analytics Tracking Policy",
      icon: Cookie,
      status: "PLACEHOLDER PENDING REVIEW",
      summary:
        "Outlines the use of essential session cookies and performance telemetry (e.g. Google Analytics, Vercel Speed Insights) once configured for production.",
      actionNeeded:
        "Management review required: Approve analytics toolchain and cookie consent banner format if required."
    },
    {
      id: "recruiting",
      title: "6. Recruiting Disclosures & Pay Transparency",
      icon: Eye,
      status: "PLACEHOLDER PENDING REVIEW",
      summary:
        "Formal disclosures regarding equal opportunity hiring, right-to-work verification, background checks, and Michigan wage compliance.",
      actionNeeded:
        "Management review required: Confirm standard disclosure copy with human resources leads."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Management Pre-Launch Staging Hold</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
          Management Review Checklist
        </h1>
        <p className="text-sm text-slate-700 leading-relaxed">
          As instructed by Vibrus Group leadership, the following legal policies, disclosures, and production storage configurations are held as clearly marked placeholders. These items must be formally reviewed and signed off by executive leadership (<strong>Paddy and Achla</strong>) with operational input from <strong>Sharon</strong> before the live cutover to <strong>vibrusgroup.com</strong>.
        </p>
        <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-amber-900">
          <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">Stage: Internal Local Demo (Route & Form Validated)</span>
          <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">Domain: Staged (Pending Cutover)</span>
          <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">Active Recipient: {siteConfig.contacts.activeRecipients.join(", ")}</span>
        </div>
      </div>

      {/* Review Items List */}
      <div className="space-y-6">
        {reviewItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-mono">
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.summary}
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs space-y-1">
                <span className="font-bold text-slate-900 block">Required Management Action:</span>
                <p className="text-slate-600">{item.actionNeeded}</p>
              </div>

              <div className="text-[11px] text-slate-400 font-mono pt-1">
                Placeholder Tag: [MANAGEMENT REVIEW REQUIRED — {item.id.toUpperCase()}]
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="font-bold text-sm">Ready to return to the interactive website demo?</h3>
          <p className="text-xs text-slate-400">All features, forms, and pages are fully active for review.</p>
        </div>
        <Link
          href="/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
        >
          Return to Homepage →
        </Link>
      </div>

    </div>
  );
}
