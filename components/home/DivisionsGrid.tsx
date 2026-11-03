import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    healthcare: <Stethoscope className="w-5 h-5 text-blue-600" />,
    industrial: <Truck className="w-5 h-5 text-amber-600" />,
    office: <Building2 className="w-5 h-5 text-slate-700" />,
    professional: <Briefcase className="w-5 h-5 text-indigo-600" />,
    "info-tech": <Cpu className="w-5 h-5 text-cyan-600" />,
    hospitality: <Utensils className="w-5 h-5 text-rose-600" />,
  };

  const divisionImages: Record<string, string> = {
    healthcare: "/images/clinical-healthcare-nursing.jpg",
    industrial: "/images/industrial-logistics-workplace.jpg",
    office: "/images/office-professional-collaboration.jpg",
    professional: "/images/professional-executive-consulting.jpg",
    "info-tech": "/images/technology-engineering-workspace.jpg",
    hospitality: "/images/hospitality-culinary-banquet.jpg",
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs">
            Comprehensive Staffing Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Specialized Industry Divisions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From clinical emergency rooms to high-output automotive manufacturing floors, Vibrus Group provides dedicated recruitment specialists who understand your operational realities.
          </p>
        </div>

        {/* Divisions Cards Grid with Photographic Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisionsData.map((division) => {
            const totalRoles = division.jobClassifications.reduce(
              (acc, cat) => acc + cat.roles.length,
              0
            );

            const imageSrc = divisionImages[division.id] || "/images/divisions-multi-industry.jpg";

            return (
              <div
                key={division.id}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-soft-xl hover:border-blue-400 hover:shadow-panel hover:-translate-y-2 transition-all duration-300"
              >
                {/* Visual Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={imageSrc}
                    alt={`${division.title} staffing showcase`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="p-2 bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-white/20">
                      {iconMap[division.id]}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-cyan-300 rounded-full border border-white/10">
                      {totalRoles}+ Positions
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      {division.heroBadge}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {division.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-blue-700 font-semibold">
                      {division.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {division.description}
                    </p>

                    {/* Sample Roles Tags */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Core Classifications:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {division.jobClassifications[0]?.roles.slice(0, 3).map((role, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-0.5 bg-slate-50 border border-slate-200/80 text-slate-700 rounded-md font-medium"
                          >
                            {role.split("(")[0].trim()}
                          </span>
                        ))}
                        {totalRoles > 3 && (
                          <span className="text-[11px] px-2 py-0.5 text-blue-700 font-bold">
                            +{totalRoles - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      href={`/divisions/${division.slug}`}
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Division</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/employers?division=${division.id}`}
                      className="text-xs font-bold px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg transition-colors"
                    >
                      Request Staff
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Divisions Overview CTA */}
        <div className="text-center pt-4">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <span>View All Staffing Classifications & Job Descriptions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
