import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  ShieldCheck,
  Clock,
  Heart,
  Home,
  CheckCircle2,
  FileCheck2,
  Users2,
  ArrowRight,
  Activity,
  Award
} from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";
import { siteConfig } from "@/lib/config/site";
import { generatePageMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = generatePageMetadata({
  title: "Clinical Healthcare Staffing",
  description:
    "24/7 dispatch of credentialed Registered Nurses, LPNs, CNAs, and Allied Health specialists for Michigan acute care hospitals and long-term care facilities.",
  path: "/divisions/healthcare",
  image: "/images/careers-healthcare-nursing.jpg",
  imageAlt: "Registered nurses and healthcare coordinators collaborating in clinical facility",
});

export default function HealthcareDivisionPage() {
  const healthcare = divisionsData.find((d) => d.id === "healthcare")!;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <Breadcrumbs
        items={[
          { label: "Divisions", href: "/divisions" },
          { label: "Clinical Healthcare" },
        ]}
      />
      
      {/* Division Hero with Bright Editorial Design */}
      <section className="bg-gradient-to-br from-blue-50/90 via-white to-slate-50 text-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 border border-blue-100 shadow-soft-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100/80 text-blue-800 border border-blue-200 rounded-full text-xs font-bold shadow-2xs">
              <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
              <span>Primary Clinical Division • 600+ Credentialed Clinicians</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Healthcare Staffing & Clinical Care
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Delivering customized, patient-centered staffing and care solutions to Michigan hospitals, skilled nursing facilities, rehabilitation centers, and private residences. Available 24 hours a day with responsive operational dispatch.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/employers?division=healthcare"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Request Clinical Staff (24/7)</span>
              </Link>
              <Link
                href="/apply?role=Registered%20Nurse%20(RN)"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
              >
                <Users2 className="w-4 h-4" />
                <span>60-Sec Clinician Apply</span>
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="px-5 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl transition-all border border-slate-200 shadow-2xs"
              >
                Call: {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden shadow-soft-xl border border-slate-200/80 group-hover:scale-[1.02] transition-transform duration-500 bg-white">
              <Image
                src="/images/clinical-healthcare-nursing.jpg"
                alt="Compassionate, professional clinical nurse collaborating with medical staff in hospital setting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Primary-Source Credentialed</span>
                  </span>
                  <span className="text-blue-800 font-semibold text-[11px]">
                    24/7 Michiganwide Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Practice Lines: Medical Staffing, Private Duty, Living Assistance */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Three Specialized Clinical & Care Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Care Models Tailored to Every Need
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Medical Staffing Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 text-blue-700 rounded-xl w-fit">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Medical Staffing Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For Hospitals, Long-Term Care Facilities, Assisted Living Centers, and Clinics. Providing innovative, flexible solutions to redefine how healthcare staffing is delivered.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Per-diem, local contract & travel nurses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Comprehensive state licensing & credential verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>24/7 direct coordinator access</span>
                </li>
              </ul>
            </div>
            <Link
              href="/employers?division=healthcare&service=MedicalStaffing"
              className="text-xs font-bold text-blue-700 hover:underline pt-4 border-t border-slate-100 flex items-center justify-between"
            >
              <span>Order Facility Coverage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2. Private Duty Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-cyan-50 text-cyan-700 rounded-xl w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Private Duty Skilled Nursing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                One-on-one personalized skilled nursing care at home, assisted living centers, or hospitals in Oakland, Wayne, and Macomb counties.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Dedicated Patient Liaison single contact</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Complete clinical case management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Respite care for family caregivers</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?subject=PrivateDuty"
              className="text-xs font-bold text-cyan-700 hover:underline pt-4 border-t border-slate-100 flex items-center justify-between"
            >
              <span>Inquire for Family Care</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3. Living Assistance Services */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 text-amber-700 rounded-xl w-fit">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Living Assistance Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compassionate non-medical personal assistance to maintain dignity, independence, and enhance quality of life for seniors and disabled individuals.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Personal care (bathing, dressing, grooming)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Meal prep, light housekeeping, errands</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Bonded, insured certified aides & HHAs</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?subject=LivingAssistance"
              className="text-xs font-bold text-amber-700 hover:underline pt-4 border-t border-slate-100 flex items-center justify-between"
            >
              <span>Explore Non-Medical Care</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Strategic Healthcare Programs */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Enterprise Facility Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Strategic Healthcare Staffing Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthcare.programs?.map((prog, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                {prog.tagline}
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {prog.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Job Classifications Grid */}
      <section id="job-classifications" className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Complete Classification Index
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            All Clinical, Therapy, Allied & Health Support Titles
          </h2>
          <p className="text-xs text-slate-500">
            Vibrus Group fulfills any of the following classifications with pre-screened professionals. Modernized to ICD-10 & CPT compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {healthcare.jobClassifications.map((group, gIdx) => (
            <div key={gIdx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="text-xs font-medium text-slate-400">({group.roles.length} Roles)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {group.roles.map((role, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">Have a custom healthcare requisition?</h3>
          <p className="text-xs text-slate-400 mt-1">Our dispatchers coordinate shift coverage 24/7 across Oakland, Wayne, and Macomb counties.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/employers?division=healthcare"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors"
          >
            Request Shift Coverage Now
          </Link>
        </div>
      </section>

    </div>
  );
}
