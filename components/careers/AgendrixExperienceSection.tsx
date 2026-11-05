"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Bell,
  Clock,
  CheckCircle2,
  Smartphone,
  Repeat,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Info,
  CalendarDays,
  UserCheck
} from "lucide-react";

export interface AgendrixSectionProps {
  variant?: "full" | "compact";
  className?: string;
}

export function AgendrixExperienceSection({
  variant = "full",
  className = "",
}: AgendrixSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "view-schedule",
      stepNumber: "01",
      icon: Calendar,
      title: "View Your Schedule",
      shortLabel: "View Schedule",
      badge: "Mobile-First Access",
      headline: "Check Assigned Shifts Anywhere, Anytime",
      description:
        "Vibrus field staff can view confirmed shifts right from their mobile device. Check start times, unit assignments, and facility locations for the upcoming week or month with clear visual schedules.",
      bulletPoints: [
        "Day, week, and monthly schedule overviews",
        "Clear shift timing and reporting location details",
        "Fast synchronization with your personal mobile calendar"
      ],
      mockup: {
        screenTitle: "My Vibrus Schedule",
        screenSubtitle: "Week of Monday, Oct 14",
        statusChip: "Confirmed Shifts",
        statusColor: "emerald",
        primaryCard: {
          tag: "Sample Shift",
          role: "Clinical Floor Support",
          facility: "Example Facility • Warren Sector",
          time: "07:00 AM – 03:30 PM (8.0h)",
          status: "Confirmed",
          statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
        },
        secondaryCard: {
          tag: "Upcoming Assignment",
          role: "Per-Diem Shift",
          facility: "Example Healthcare Center • Detroit",
          time: "Tomorrow • 03:00 PM – 11:30 PM",
          status: "Scheduled",
          statusColor: "bg-blue-50 text-blue-700 border-blue-200"
        },
        footerTip: "Calendar updates sync automatically when confirmed by coordination."
      }
    },
    {
      id: "stay-updated",
      stepNumber: "02",
      icon: Bell,
      title: "Stay Updated",
      shortLabel: "Real-Time Alerts",
      badge: "Instant Notifications",
      headline: "Never Miss a Shift or Schedule Change",
      description:
        "Receive push notifications directly on your phone when new shifts are published, schedules are updated, or shift reminders are broadcast by your staffing coordinator.",
      bulletPoints: [
        "Push notifications for new shift assignments",
        "Real-time notifications if reporting times or units update",
        "Automated shift reminders prior to assignment start"
      ],
      mockup: {
        screenTitle: "Notifications & Alerts",
        screenSubtitle: "Recent Updates",
        statusChip: "3 New Alerts",
        statusColor: "amber",
        primaryCard: {
          tag: "Schedule Notice",
          role: "New Shift Assigned",
          facility: "Example Care Facility • Sterling Heights",
          time: "Friday, 07:00 AM – 03:30 PM",
          status: "Action Required: Tap to Acknowledge",
          statusColor: "bg-amber-50 text-amber-800 border-amber-200"
        },
        secondaryCard: {
          tag: "Reminder",
          role: "Upcoming Shift in 3 Hours",
          facility: "Example Logistics Hub • Warren",
          time: "Today • 07:00 PM Start",
          status: "Reminder",
          statusColor: "bg-slate-100 text-slate-700 border-slate-200"
        },
        footerTip: "Notification preferences can be managed directly in mobile settings."
      }
    },
    {
      id: "availability",
      stepNumber: "03",
      icon: Clock,
      title: "Share Availability & Time-Off",
      shortLabel: "Availability & Leave",
      badge: "Self-Service Requests",
      headline: "Submit Unavailability & Planned Time-Off",
      description:
        "Keep your coordinator updated with your weekly availability windows or submit time-off requests in advance. Approvals are managed systematically according to company guidelines.",
      bulletPoints: [
        "Submit recurring or custom weekly availability",
        "Request single-day or multi-day time-off in advance",
        "Monitor request status (Pending Review, Approved)"
      ],
      mockup: {
        screenTitle: "Availability & Time-Off",
        screenSubtitle: "Demo Request Submission",
        statusChip: "Pending Manager Review",
        statusColor: "amber",
        primaryCard: {
          tag: "Time-Off Request",
          role: "Personal Leave Window",
          facility: "Submitted to Vibrus Staffing Desk",
          time: "Oct 24 – Oct 26 (3 Days)",
          status: "Pending Manager Review",
          statusColor: "bg-amber-50 text-amber-800 border-amber-200"
        },
        secondaryCard: {
          tag: "Standard Availability",
          role: "Preferred Shift Blocks",
          facility: "Active Profile Setting",
          time: "Mon / Wed / Fri: Day Shifts Preferred",
          status: "Active Status",
          statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
        },
        footerTip: "Time-off requests are subject to company policy and coordinator approval."
      }
    },
    {
      id: "open-shifts",
      stepNumber: "04",
      icon: Sparkles,
      title: "Explore Open Shifts",
      shortLabel: "Open Shifts",
      badge: "PRN Opportunities",
      headline: "Claim Additional Hours When Openings Arise",
      description:
        "When facilities request urgent surge support or additional shifts open up, browse available openings matching your qualifications and express interest with a single tap.",
      bulletPoints: [
        "Browse open shifts across Michigan facilities",
        "View estimated shift duration, pay tier, and department",
        "Express interest or claim shifts based on account settings"
      ],
      mockup: {
        screenTitle: "Available Open Shifts",
        screenSubtitle: "Surge & PRN Opportunities",
        statusChip: "2 Open Shifts Today",
        statusColor: "emerald",
        primaryCard: {
          tag: "Urgent Floor Need",
          role: "Med/Surg Floor Nurse",
          facility: "Example Regional Hospital • Troy",
          time: "Saturday • 07:00 AM – 07:30 PM (12.0h)",
          status: "Open Shift Available",
          statusColor: "bg-blue-50 text-blue-700 border-blue-200"
        },
        secondaryCard: {
          tag: "Weekend Surge",
          role: "Forklift Operator / Material Handler",
          facility: "Example Manufacturing Plant • Warren",
          time: "Sunday • 06:00 AM – 02:30 PM (8.0h)",
          status: "Eligible to Claim",
          statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
        },
        footerTip: "Shift availability depends on active credentials, role, and facility clearance."
      }
    },
    {
      id: "shift-swaps",
      stepNumber: "05",
      icon: Repeat,
      title: "Request Shift Swaps & Coverage",
      shortLabel: "Shift Swaps",
      badge: "Team Flexibility",
      headline: "Offer Shifts or Request Peer Swaps",
      description:
        "If an unexpected commitment arises, propose a shift trade with qualified colleagues or offer your shift for team pickup, with final verification handled by your coordinator.",
      bulletPoints: [
        "Initiate shift trade proposals directly in the app",
        "Offer unassigned shifts to qualified peers on your roster",
        "Strict manager oversight prevents double-booking or compliance lapses"
      ],
      mockup: {
        screenTitle: "Shift Trade Manager",
        screenSubtitle: "Peer Swap Demonstration",
        statusChip: "Coordinator Verification",
        statusColor: "blue",
        primaryCard: {
          tag: "Swap Proposal",
          role: "Proposed Trade: Tuesday Day Shift",
          facility: "With Peer Clinician (Demo Schedule)",
          time: "Exchange for Thursday Evening Shift",
          status: "Awaiting Manager Approval",
          statusColor: "bg-blue-50 text-blue-700 border-blue-200"
        },
        secondaryCard: {
          tag: "Trade Protocol",
          role: "Compliance Check Passed",
          facility: "Vibrus Credential Verification Desk",
          time: "Both team members cleared for facility floor",
          status: "Audit Verified",
          statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
        },
        footerTip: "Shift swaps require mutual consent and staffing manager authorization."
      }
    },
    {
      id: "stay-connected",
      stepNumber: "06",
      icon: MessageSquare,
      title: "Stay Connected & Informed",
      shortLabel: "Team Updates",
      badge: "Internal Communications",
      headline: "Important Facility Briefings & Team News",
      description:
        "Access company announcements, seasonal policy memos, protocol revisions, and direct operational notices published by Vibrus Group staffing management.",
      bulletPoints: [
        "Company-wide notices, weather advisories & holiday guidelines",
        "Facility orientation packets and parking instructions",
        "Direct dispatch support contact information"
      ],
      mockup: {
        screenTitle: "Team News & Bulletins",
        screenSubtitle: "Vibrus Field Communications",
        statusChip: "Active Notice",
        statusColor: "emerald",
        primaryCard: {
          tag: "Facility Briefing",
          role: "Seasonal Healthcare Protocol",
          facility: "Michiganwide Facility Guidance",
          time: "Posted 2h ago by Coordination Desk",
          status: "Important Update",
          statusColor: "bg-cyan-50 text-cyan-800 border-cyan-200"
        },
        secondaryCard: {
          tag: "Holiday Schedule Notice",
          role: "Surge Shift Availability Published",
          facility: "Warren Operations Center",
          time: "Review active weekend incentives",
          status: "Read & Acknowledge",
          statusColor: "bg-slate-100 text-slate-700 border-slate-200"
        },
        footerTip: "Messaging and bulletin features are enabled based on organizational setup."
      }
    }
  ];

  const current = steps[activeStep];

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-soft-md ${className}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/80 text-blue-900 text-[11px] font-bold">
              <Smartphone className="w-3.5 h-3.5 text-blue-700" />
              <span>Agendrix Mobile Scheduling</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Manage Your Shifts On Your Phone With Agendrix
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vibrus healthcare and industrial talent use Agendrix for fast schedule visibility, shift notifications, availability updates, and open shift claims on iOS and Android.
            </p>
          </div>
          <Link
            href="/careers#agendrix-experience"
            className="shrink-0 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>Explore Agendrix Workflow</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section
      id="agendrix-experience"
      aria-label="Manage Your Schedule With Agendrix"
      className={`py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white rounded-3xl border border-slate-200/80 shadow-soft-lg overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-bold text-blue-800 shadow-2xs">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span>Mobile Scheduling Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Manage Your Schedule With Agendrix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vibrus Group professionals manage their shifts, stay informed of schedule changes, submit availability, and review open shifts seamlessly from the Agendrix mobile app.
          </p>
        </div>

        {/* Interactive Step Navigator (Pills/Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center px-1">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = idx === activeStep;
            return (
              <button
                key={s.id}
                id={`agendrix-step-${s.id}`}
                onClick={() => setActiveStep(idx)}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-700 shadow-md translate-y-[-1px]"
                    : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200 shadow-2xs"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-blue-600"}`} />
                <span>{s.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Interactive Showcase (Explanation + Phone Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
          
          {/* Left Column: Step Narrative & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center border border-blue-200">
                  {current.stepNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  {current.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {current.headline}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-1">
              {current.bulletPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Quick Step Switcher Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  activeStep === 0
                    ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                ← Previous Step
              </button>
              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  activeStep === steps.length - 1
                    ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200"
                    : "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100"
                }`}
              >
                Next Step →
              </button>
              <span className="text-[11px] text-slate-400 ml-auto font-mono">
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>
          </div>

          {/* Right Column: Custom Phone Mockup (Proprietary-Free, Pure UI Illustration) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-slate-900 p-3 sm:p-3.5 rounded-[40px] shadow-2xl border-4 border-slate-800 relative">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>

              {/* Inner Screen Surface */}
              <div className="bg-slate-50 rounded-[32px] overflow-hidden pt-8 pb-5 px-4 space-y-4 border border-slate-200 text-slate-900 min-h-[460px] flex flex-col justify-between">
                
                {/* Simulated Screen Top Header */}
                <div className="space-y-2 border-b border-slate-200/80 pb-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>9:41 AM</span>
                    <span className="text-[10px] font-mono text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md font-bold">
                      Vibrus • Agendrix
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                        {current.mockup.screenTitle}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {current.mockup.screenSubtitle}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      {current.mockup.statusChip}
                    </span>
                  </div>
                </div>

                {/* Simulated Interactive Cards */}
                <div className="space-y-3 flex-1">
                  {/* Primary Demonstration Card */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-blue-700 uppercase tracking-wider">
                        {current.mockup.primaryCard.tag}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] border ${current.mockup.primaryCard.statusColor}`}>
                        {current.mockup.primaryCard.status}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {current.mockup.primaryCard.role}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {current.mockup.primaryCard.facility}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{current.mockup.primaryCard.time}</span>
                    </div>
                  </div>

                  {/* Secondary Demonstration Card */}
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-slate-500 uppercase tracking-wider">
                        {current.mockup.secondaryCard.tag}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] border ${current.mockup.secondaryCard.statusColor}`}>
                        {current.mockup.secondaryCard.status}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {current.mockup.secondaryCard.role}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {current.mockup.secondaryCard.facility}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{current.mockup.secondaryCard.time}</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Screen Bottom Footer Note */}
                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-[10px] text-slate-500 text-center italic leading-tight">
                    {current.mockup.footerTip}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Policy & Account Note */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-slate-700 text-xs flex items-start gap-3 max-w-4xl mx-auto shadow-2xs">
          <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-blue-950 block">
              Agendrix Feature & Availability Notice:
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Available Agendrix features may depend on Vibrus account settings, role, location, and enabled modules. Shift allocations, availability windows, time-off requests, and peer swaps remain subject to staffing manager approval and Vibrus operational policies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
