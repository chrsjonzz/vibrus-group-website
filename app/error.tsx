"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for internal monitoring
    console.error("Application error boundary triggered:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-soft-xl">
        
        <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
            Something Didn&apos;t Load Properly
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our Warren technical team has logged this issue. You can try refreshing the page or connect directly with our 24/7 operations desk.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-all flex items-center gap-2 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Homepage</span>
          </Link>
          
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-all flex items-center gap-2 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>Dispatch: {siteConfig.phone}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
