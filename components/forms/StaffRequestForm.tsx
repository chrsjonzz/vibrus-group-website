"use client";

import React, { useState } from "react";
import {
  FileCheck2,
  Clock,
  Upload,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  ShieldCheck
} from "lucide-react";
import { siteConfig } from "@/lib/config/site";

interface StaffRequestFormProps {
  initialDivision?: string;
  className?: string;
}

const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTS = [".pdf", ".docx", ".doc", ".txt"];

export function StaffRequestForm({ initialDivision, className = "" }: StaffRequestFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [useCustomRole, setUseCustomRole] = useState(false);

  const [formData, setFormData] = useState({
    facilityName: "",
    facilityType: initialDivision || "Healthcare Facility",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    city: "",
    county: "Macomb",
    positionNeeded: "Registered Nurse (RN)",
    customPosition: "",
    numberOfStaff: "1",
    shiftType: "Day Shift (12-hr)",
    urgency: "Immediate (Within 30 Mins)",
    notes: "",
  });

  const [file, setFile] = useState<File | null>(null);

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
        setErrorMessage(`Selected file is too large (${(selected.size / (1024 * 1024)).toFixed(2)} MB). Max limit is 5 MB.`);
        setFile(null);
        return;
      }
      const ext = selected.name.substring(selected.name.lastIndexOf(".")).toLowerCase();
      if (!ALLOWED_EXTS.includes(ext)) {
        setErrorMessage(`Unsupported file format (${ext}). Allowed formats: PDF, Word (.doc, .docx), and plain text (.txt).`);
        setFile(null);
        return;
      }
      setErrorMessage("");
      setFile(selected);
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

      if (useCustomRole && formData.customPosition) {
        data.set("positionNeeded", formData.customPosition);
      }

      if (file) {
        data.append("requisitionFile", file);
      }

      const res = await fetch("/api/request-staff", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit staffing request");
      }

      setTrackingId(result.trackingId || "REQ-LOCAL");
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please call (248) 443-5100 directly.");
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
        <h3 className="text-2xl font-bold text-slate-900">Staffing Requisition Intake Recorded</h3>
        <p className="text-xs font-mono text-slate-500">Tracking Reference: {trackingId}</p>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Your request for <span className="font-semibold text-slate-900">{useCustomRole ? formData.customPosition : formData.positionNeeded}</span> has been logged to the internal demo system.
        </p>
        
        {/* Clear Notification Status Box */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Demo Dispatch Status:</span>
          </div>
          <div className="space-y-1 text-slate-600">
            <div>• Active Demo Intake: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-700">sharon@vibrusgroup.com</code></div>
            <div>• Mode: Server-log recording (Actual email transport pending production integration)</div>
            <div>• Document Storage: Secure local non-public folder (No public URL)</div>
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>30-Minute Callback Commitment:</strong> Our operational team reviews shift orders around the clock.</span>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFile(null);
          }}
          className="mt-4 px-6 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          Submit Another Staffing Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-elevated ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            For Facilities & Employers
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Request Staff On-Demand (24/7)
          </h2>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-800">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>30-Min Callback Commitment</span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Facility Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="facilityNameInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Facility / Company Name *
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="facilityNameInput"
                type="text"
                name="facilityName"
                required
                value={formData.facilityName}
                onChange={handleInputChange}
                placeholder="e.g. Healthcare or Industrial Facility"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="facilityTypeSelect" className="block text-xs font-semibold text-slate-700 mb-1">
              Facility Category *
            </label>
            <select
              id="facilityTypeSelect"
              name="facilityType"
              value={formData.facilityType}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
            >
              <option value="Healthcare Facility">Healthcare Facility (Hospital, SNF, Clinic)</option>
              <option value="Industrial / Manufacturing">Industrial & Manufacturing Hub</option>
              <option value="Warehouse / Logistics">Warehouse & Distribution Center</option>
              <option value="Corporate / Office">Corporate Office / Commercial</option>
              <option value="Hospitality / Event">Hospitality / Venue</option>
              <option value="Other Industry">Other Industry</option>
            </select>
          </div>
        </div>

        {/* Position Needed — Supports ANY position */}
        <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Position or Specialty Needed *
            </label>
            <button
              type="button"
              onClick={() => setUseCustomRole(!useCustomRole)}
              className="text-xs font-semibold text-blue-700 hover:underline"
            >
              {useCustomRole ? "← Choose from standard list" : "+ Enter custom title"}
            </button>
          </div>

          {!useCustomRole ? (
            <select
              id="positionNeededSelect"
              aria-label="Standard Position or Specialty Needed"
              name="positionNeeded"
              value={formData.positionNeeded}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
            >
              <optgroup label="Clinical Healthcare">
                <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                <option value="Emergency Room (ER) RN">Emergency Room (ER) RN</option>
                <option value="ICU / CCU Nurse">Intensive Care (ICU / CCU) RN</option>
                <option value="Med/Surg Nurse">Medical / Surgical (Med/Surg) RN</option>
                <option value="Licensed Practical Nurse (LPN)">Licensed Practical Nurse (LPN)</option>
                <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
              </optgroup>
              <optgroup label="Rehab & Allied Health">
                <option value="Physical Therapist (PT)">Physical Therapist (PT / PTA)</option>
                <option value="Occupational Therapist (OT)">Occupational Therapist (OT / COTA)</option>
                <option value="Speech Language Pathologist">Speech Language Pathologist (SLP)</option>
                <option value="Respiratory Therapist">Respiratory Therapist (RT)</option>
                <option value="Medical Technologist / Phlebotomist">Med Tech / Phlebotomist</option>
              </optgroup>
              <optgroup label="Industrial & Logistics">
                <option value="Certified Forklift Operator">Certified Forklift Operator</option>
                <option value="Warehouse Associate">Warehouse Associate / Stocker</option>
                <option value="Machine Operator">General Machine Operator</option>
                <option value="Assembly Technician">Assembly & Production Worker</option>
                <option value="Certified Welder">Certified Welder / Fabricator</option>
              </optgroup>
              <optgroup label="Corporate, IT & Hospitality">
                <option value="Administrative Assistant">Administrative / Office Support</option>
                <option value="Medical Billing / HIM">Medical Billing / Health Information (HIM)</option>
                <option value="Call Center Representative">Call Center Representative</option>
                <option value="Software Engineer / IT">IT & Systems Specialist</option>
                <option value="Hospitality / Dietary Staff">Dietary Aide / Hospitality Staff</option>
              </optgroup>
            </select>
          ) : (
            <div>
              <input
                id="customPositionInput"
                type="text"
                name="customPosition"
                required={useCustomRole}
                value={formData.customPosition}
                onChange={handleInputChange}
                placeholder="Type any specific role, credential, or machinery certification"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-blue-400 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Vibrus Group fulfills custom clinical, industrial, and corporate requisitions.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div>
              <label htmlFor="staffQtyInput" className="block text-[11px] font-semibold text-slate-600 mb-1">Quantity Needed</label>
              <input
                id="staffQtyInput"
                type="number"
                min="1"
                max="50"
                name="numberOfStaff"
                value={formData.numberOfStaff}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none"
              />
            </div>
            <div>
              <label htmlFor="shiftScheduleSelect" className="block text-[11px] font-semibold text-slate-600 mb-1">Shift Schedule</label>
              <select
                id="shiftScheduleSelect"
                name="shiftType"
                value={formData.shiftType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 outline-none bg-white"
              >
                <option value="Day Shift (12-hr)">Day Shift (12-hr)</option>
                <option value="Night Shift (12-hr)">Night Shift (12-hr)</option>
                <option value="Evening Shift (8-hr)">Evening Shift (8-hr)</option>
                <option value="Weekend Coverage">Weekend Coverage</option>
                <option value="Per-Diem / PRN">Per-Diem / PRN</option>
                <option value="Contract (13-Week)">Contract (13-Week)</option>
                <option value="Temp-to-Hire">Temp-to-Hire</option>
                <option value="Direct Placement">Direct Placement</option>
              </select>
            </div>
            <div>
              <label htmlFor="urgencySelect" className="block text-[11px] font-semibold text-slate-600 mb-1">Urgency</label>
              <select
                id="urgencySelect"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 font-medium text-amber-700 bg-amber-50/50 outline-none"
              >
                <option value="Immediate (Within 30 Mins)">Immediate (Within 30 Mins)</option>
                <option value="Same-Day Dispatch">Same-Day Dispatch</option>
                <option value="Next 24-48 Hours">Next 24-48 Hours</option>
                <option value="Planned Next Week">Planned Next Week</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactNameInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Contact Person / Title *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="contactNameInput"
                type="text"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="e.g. Staffing Coordinator"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactPhoneInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Direct Phone (for 30-min callback) *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="contactPhoneInput"
                type="tel"
                name="contactPhone"
                required
                value={formData.contactPhone}
                onChange={handleInputChange}
                placeholder="(248) 555-0199"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactEmailInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Official Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                id="contactEmailInput"
                type="email"
                name="contactEmail"
                required
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="coordinator@facility.org"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="countySelectInput" className="block text-xs font-semibold text-slate-700 mb-1">
              Facility County / Region *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                id="countySelectInput"
                name="county"
                value={formData.county}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              >
                <option value="Macomb">Macomb County (Warren, Sterling Hts)</option>
                <option value="Oakland">Oakland County (Troy, Southfield, Pontiac)</option>
                <option value="Wayne">Wayne County (Detroit, Dearborn, Livonia)</option>
                <option value="Washtenaw">Washtenaw County (Ann Arbor)</option>
                <option value="Genesee">Genesee County (Flint)</option>
                <option value="Statewide Michigan">Other Michigan County</option>
                <option value="Out of State">Out of State Facility</option>
              </select>
            </div>
          </div>
        </div>

        {/* Requisition Document Upload (Secure Non-Public Storage) */}
        <div>
          <label htmlFor="requisitionFileInput" className="block text-xs font-semibold text-slate-700 mb-1">
            Attach Requisition, Schedule, or Job Order (Optional, Max 5 MB)
          </label>
          <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors">
            <input
              id="requisitionFileInput"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
            <label htmlFor="requisitionFileInput" className="cursor-pointer flex flex-col items-center gap-1.5">
              <Upload className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-semibold text-slate-800">
                {file ? file.name : "Click to attach document (PDF, Word, or TXT)"}
              </span>
              <span className="text-[11px] text-slate-400">
                {file ? `${(file.size / 1024).toFixed(1)} KB selected` : "Secure local demo upload (Max 5 MB)"}
              </span>
            </label>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Demo notice: Stored in an unserved private directory on this PC. Cloud storage requires management approval prior to launch.
          </span>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notesInput" className="block text-xs font-semibold text-slate-700 mb-1">
            Specific Requirements, Unit Details, or Shift Hours
          </label>
          <textarea
            id="notesInput"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="e.g. Unit orientation provided on arrival. Need RN with ventilator experience."
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 text-sm"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Logging Staff Requisition...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Tell Us What Support You Need — 30-Minute Callback</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-500">
          Inquiries in this demo are recorded for operations lead Sharon (<code>sharon@vibrusgroup.com</code>). For urgent staffing needs, call <strong>(248) 443-5100</strong>.
        </p>
      </div>
    </form>
  );
}
