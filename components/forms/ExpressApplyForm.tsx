"use client";

import React, { useState } from "react";
import {
  Users2,
  CheckCircle2,
  Upload,
  AlertCircle,
  ExternalLink,
  Send,
  Loader2,
  Briefcase,
  Phone,
  Mail,
  User,
  ShieldCheck
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

interface ExpressApplyFormProps {
  initialRole?: string;
  className?: string;
}

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTS = [".pdf", ".docx", ".doc", ".txt"];

export function ExpressApplyForm({ initialRole, className = "" }: ExpressApplyFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    profession: initialRole || "Registered Nurse (RN)",
    experienceYears: "2-5 Years",
    shiftPreference: "Flexible / Any Shift",
    cityState: "Warren, MI",
    notes: "",
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.size > MAX_SIZE_BYTES) {
        setErrorMessage(`Resume exceeds the 5 MB limit (${(selected.size / (1024 * 1024)).toFixed(2)} MB).`);
        setResumeFile(null);
        return;
      }
      const ext = selected.name.substring(selected.name.lastIndexOf(".")).toLowerCase();
      if (!ALLOWED_EXTS.includes(ext)) {
        setErrorMessage(`Unsupported resume format (${ext}). Allowed formats: PDF, Word (.doc, .docx), and plain text (.txt).`);
        setResumeFile(null);
        return;
      }
      setErrorMessage("");
      setResumeFile(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (resumeFile) {
        data.append("resumeFile", resumeFile);
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setTrackingId(result.trackingId || "APP-LOCAL");
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit application. Please contact dispatch at (248) 443-5100.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-elevated text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Application Intake Recorded</h3>
        <p className="text-xs font-mono text-slate-500">Tracking Reference: {trackingId}</p>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your candidate profile for <span className="font-semibold text-blue-700">{formData.profession}</span> has been logged to the internal demo system.
        </p>

        {/* Clear Notification Status Box */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Demo Intake Status:</span>
          </div>
          <div className="space-y-1 text-slate-600">
            <div>• Active Demo Intake: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-700">sharon@vibrusgroup.com</code></div>
            <div>• Mode: Server-log recording (Actual email transport pending production integration)</div>
            <div>• Resume Storage: Secure local non-public folder (No public URL)</div>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setResumeFile(null);
          }}
          className="mt-4 px-6 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-elevated ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            For Candidates & Professionals
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            60-Second Express Application
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Quick, mobile-friendly intake. Per-diem, contract, and direct placement opportunities.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Local Demo Intake</span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="applicantNameInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Legal Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="applicantNameInput"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Applicant Name"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="applicantPhoneInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Mobile Phone *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="applicantPhoneInput"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(248) 555-0144"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Email & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="applicantEmailInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="applicantEmailInput"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="applicantCityInput" className="block text-xs font-semibold text-slate-700 mb-1">
              City / County in Michigan *
            </label>
            <input
              id="applicantCityInput"
              type="text"
              name="cityState"
              required
              value={formData.cityState}
              onChange={handleInputChange}
              placeholder="e.g. Warren, MI (Macomb County)"
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
            />
          </div>
        </div>

        {/* Profession & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="professionSelectInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Primary Role / Discipline *
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                id="professionSelectInput"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
              >
                <optgroup label="Clinical Healthcare">
                  <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                  <option value="Licensed Practical Nurse (LPN)">Licensed Practical Nurse (LPN)</option>
                  <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
                  <option value="Home Health Aide (HHA)">Home Health Aide (HHA)</option>
                  <option value="Physical Therapist (PT/PTA)">Physical Therapist (PT / PTA)</option>
                  <option value="Occupational Therapist (OT/COTA)">Occupational Therapist (OT / COTA)</option>
                  <option value="Respiratory Therapist (RT)">Respiratory Therapist (RT)</option>
                  <option value="Allied Health">Allied Health Professional</option>
                </optgroup>
                <optgroup label="Industrial & Logistics">
                  <option value="Certified Forklift Operator">Forklift Operator (Sit-down / Stand-up)</option>
                  <option value="Warehouse Associate">Warehouse Associate / Pick & Pack</option>
                  <option value="General Machine Operator">General Machine Operator</option>
                  <option value="Certified Welder / Fabricator">Certified Welder / Fabricator</option>
                  <option value="Assembly & Production Worker">Assembly & Production Crew</option>
                </optgroup>
                <optgroup label="Corporate, IT & Hospitality">
                  <option value="Administrative / Office Specialist">Administrative Assistant</option>
                  <option value="Medical Billing / HIM Coder">Medical Records / ICD-10 Billing</option>
                  <option value="Customer Service / Call Center">Customer Service Rep (CSR)</option>
                  <option value="Information Technology / Software">Software Engineer / IT Professional</option>
                  <option value="Hospitality / Dietary Assistant">Food Service / Dietary Aide</option>
                  <option value="Other Discipline">Other Discipline</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="shiftPrefSelectInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Availability
            </label>
            <select
              id="shiftPrefSelectInput"
              name="shiftPreference"
              value={formData.shiftPreference}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
            >
              <option value="Flexible / Any Shift">Flexible (Any Shift)</option>
              <option value="Day Shifts Only">Day Shifts Only</option>
              <option value="Night Shifts Only">Night Shifts Only</option>
              <option value="Weekends Only">Weekends Only</option>
              <option value="Part-Time / Per-Diem">Part-Time / Per-Diem</option>
              <option value="Full-Time Contract">Full-Time Contract</option>
            </select>
          </div>
        </div>

        {/* Resume Upload (Non-Public Secure Storage) */}
        <div>
          <label htmlFor="resumeFileInput" className="block text-xs font-semibold text-slate-700 mb-1">
            Attach Resume (Optional, Max 5 MB)
          </label>
          <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors">
            <input
              id="resumeFileInput"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
            <label htmlFor="resumeFileInput" className="cursor-pointer flex flex-col items-center gap-1.5">
              <Upload className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-semibold text-slate-800">
                {resumeFile ? resumeFile.name : "Click to upload Resume (PDF, Word, or TXT)"}
              </span>
              <span className="text-[11px] text-slate-400">
                {resumeFile ? `${(resumeFile.size / 1024).toFixed(1)} KB selected` : "Secure local demo upload (Max 5 MB)"}
              </span>
            </label>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Demo notice: Stored in an unserved private directory on this PC. Cloud storage requires management approval prior to launch.
          </span>
        </div>

        {/* Brief Notes */}
        <div>
          <label htmlFor="candidateNotesInput" className="block text-xs font-semibold text-slate-700 mb-1">
            Certifications, Desired Shift Hours, or Preferred Locations
          </label>
          <textarea
            id="candidateNotesInput"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="e.g. CPR certified. Available for night shifts in Warren or Troy."
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 text-sm"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Logging Profile Intake...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Start Your 60-Second Application</span>
            </>
          )}
        </button>

        {/* External Portals Links */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>External job portals:</span>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.externalLinks.jobsoid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:underline"
            >
              <span>Vibrus Jobsoid Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={siteConfig.externalLinks.indeed}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:underline"
            >
              <span>Indeed Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
