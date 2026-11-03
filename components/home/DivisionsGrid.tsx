import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Truck,
  Building2,
  Briefcase,
  Cpu,
  Utensils,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { divisionsData } from "@/lib/data/divisionsData";

export function DivisionsGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    healthcare: <Stethoscope className="w-6 h-6 text-blue-600" />,
    industrial: <Truck className="w-6 h-6 text-amber-600" />,
    office: <Building2 className="w-6 h-6 text-slate-700" />,
    professional: <Briefcase className="w-6 h-6 text-indigo-600" />,
    "info-tech": <Cpu className="w-6 h-6 text-cyan-600" />,
    hospitality: <Utensils className="w-6 h-6 text-rose-600" />,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs">
            Comprehensive Staffing Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Industry Divisions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From clinical emergency rooms to high-output automotive manufacturing floors, Vibrus Group provides dedicated recruitment specialists who understand your operational realities.
          </p>
        </div>

        {/* Divisions Cards Grid with 3D Depth Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisionsData.map((division) => {
            // Count total roles in this division
            const totalRoles = division.jobClassifications.reduce(
              (acc, cat) => acc + cat.roles.length,
              0
            );

            return (
              <div
                key={division.id}
                className="group bg-white rounded-3xl border border-slate-200/90 p-7 flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl group-hover:scale-105 group-hover:bg-blue-50 transition-all duration-300 shadow-xs">
                      {iconMap[division.id]}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {totalRoles}+ Roles
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-0.5">
                      {division.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {division.description}
                  </p>

                  {/* Sample Roles Tags */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      Key Classifications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {division.jobClassifications[0]?.roles.slice(0, 4).map((role, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 bg-slate-50 border border-slate-200/80 text-slate-700 rounded-lg font-medium"
                        >
                          {role.split("(")[0].trim()}
                        </span>
                      ))}
                      {totalRoles > 4 && (
                        <span className="text-[11px] px-2 py-0.5 text-blue-700 font-bold">
                          +{totalRoles - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <Link
                    href={`/divisions/${division.slug}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/employers?division=${division.id}`}
                    className="text-xs font-bold text-slate-600 hover:text-blue-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Request Staff
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Divisions Banner with 3D Depth */}
        <div className="p-7 bg-gradient-to-r from-slate-900 to-vibrus-navy text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl border border-slate-800">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold">
              Need a custom multi-department staffing program?
            </h4>
            <p className="text-xs text-slate-300">
              Vibrus Group designs managed workforce services (MSP) and vendor consolidation for health systems and industrial facilities.
            </p>
          </div>
          <Link
            href="/employers"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all active:scale-95"
          >
            Consult With Our Operations Team
          </Link>
        </div>

      </div>
    </section>
  );
}
