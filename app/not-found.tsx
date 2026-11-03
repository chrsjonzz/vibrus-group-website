import React from "react";
import Link from "next/link";
import {
  FileQuestion,
  Home,
  FileCheck2,
  Users2,
  PhoneCall,
  ArrowRight,
  Building2
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/40 via-white to-slate-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Error Badge */}
        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center shadow-soft-sm">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Error 404 • Page Not Located
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            We Can&apos;t Find That Page
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            The link you followed may be outdated, moved, or misspelled. Use the verified pathways below to find what you need.
          </p>
        </div>

        {/* Helpful Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
          <Link
            href="/employers"
            className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-card hover:border-blue-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-900 text-sm">
                  Facility Staff Request
                </h3>
                <p className="text-xs text-slate-500">
                  30-minute callback commitment
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/apply"
            className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-card hover:border-emerald-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-900 text-sm">
                  60-Second Express Apply
                </h3>
                <p className="text-xs text-slate-500">
                  Fast candidate career intake
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/divisions"
            className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-card hover:border-slate-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Workforce Divisions
                </h3>
                <p className="text-xs text-slate-500">
                  Healthcare, Industrial & Commercial
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-card hover:border-slate-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Warren Dispatch Desk
                </h3>
                <p className="text-xs text-slate-500">
                  Call {siteConfig.phone} (24/7)
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Primary Return Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
