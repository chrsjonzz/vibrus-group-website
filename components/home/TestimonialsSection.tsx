import React from "react";
import Link from "next/link";
import { Quote, AlertCircle } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonialsData";

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Partner & Staff Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client & Staff Feedback Showcase
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Layout preview for partner endorsements and clinician reviews. Specific client quotes are undergoing management review prior to public launch.
          </p>
        </div>

        {/* Testimonials Grid (Sample Placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 p-7 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                    {item.status}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-300" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{item.quotePlaceholder}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{item.sector}</span>
                <span className="text-[11px] text-slate-400">Review Item</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Notice: Verbatim client testimonials and partner references will be published following executive review by Paddy and Achla.
        </div>

      </div>
    </section>
  );
}
