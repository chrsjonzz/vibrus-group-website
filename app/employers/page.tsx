import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { StaffRequestForm } from "@/components/forms/StaffRequestForm";
import { Phone, Clock, ShieldCheck, Award, CheckCircle2, Building, Upload } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { generatePageMetadata } from "@/lib/config/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Request Staff On-Demand",
  description:
    "Request qualified healthcare and industrial personnel on-demand. Experience our 30-minute callback commitment for Michigan hospital and facility managers.",
  path: "/employers",
  image: "/images/healthcare-nurse-director-meeting.jpg",
  imageAlt: "Facility staffing coordinator discussing nurse staffing in modern conference room",
});

export default function EmployersPage({
  searchParams,
}: {
  searchParams: { division?: string; facility?: string; county?: string };
}) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Hero Header with Bright Luminous Editorial Design */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/80 text-blue-800 border border-blue-200 rounded-full text-xs font-bold shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>24/7/365 Live Dispatch Active</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Request Staff On-Demand
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Overcome critical shift vacancies, seasonal spikes, or planned leaves. Our Warren dispatch team coordinates coverage for <strong>any staffing position</strong> with our verified <strong>30-minute callback commitment</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Clinical, Industrial & Corporate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>30-Minute Callback Commitment</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 aspect-[4/3] group bg-white">
              <Image
                src="/images/employer-consultation.jpg"
                alt="Vibrus Group workforce coordinator consulting with facility administrator"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 text-slate-900 text-xs shadow-md">
                <span className="font-bold text-blue-800 block">Dedicated Workforce Consultation</span>
                <p className="text-[11px] text-slate-600 mt-0.5">Rapid operational support across Michigan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Facility Advantage Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form (Supports ANY Position + Requisition Upload) */}
        <div className="lg:col-span-8">
          <StaffRequestForm initialDivision={searchParams.division} />
        </div>

        {/* Right Column: Trust Signals & Dispatch Contacts */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Urgent Hotline Card */}
          <div className="bg-gradient-to-br from-vibrus-navy to-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-card space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Immediate Urgent Coverage
            </span>
            <h3 className="text-xl font-bold text-white">
              Have an immediate shift starting within 2 hours?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Skip the web form and call our live dispatch coordinators directly for rapid dispatch.
            </p>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch: {siteConfig.phone}</span>
            </a>
            <div className="text-[11px] text-slate-400 text-center font-mono">
              Operational 24 Hours / 7 Days / 365 Days
            </div>
          </div>

          {/* Verification & Compliance Guarantees */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">
              The Vibrus Guarantee
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>30-Minute Callback:</strong> Every submitted shift request receives confirmation from an operational lead within 30 minutes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Any Position Fulfilled:</strong> From ICU Registered Nurses to CNC Machinists and Medical Coders, we fulfill custom requisitions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>600+ Credentialed Roster:</strong> Pre-screened, 10-panel drug tested, background checked, and oriented to Michigan care standards.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Single-Source Staffing:</strong> Seamless onboarding, direct dispatch communication, and comprehensive compliance management.</span>
              </li>
            </ul>
          </div>

          {/* Contact Routing Notice */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <span className="font-bold text-slate-800 block">
              Operations Routing Notification:
            </span>
            <p className="text-[11px] text-slate-500">
              Demo intake submissions are designated for primary operations contact:
            </p>
            <div className="font-mono text-[11px] text-blue-700 bg-white p-2 rounded border border-slate-200">
              {siteConfig.contacts.activeRecipients.join(", ")}
            </div>
            <p className="text-[10px] text-slate-400">
              Sharon is the primary operational receiving contact. In demo mode, submissions are safely captured in server logs. Actual email transport is pending production email integration.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
