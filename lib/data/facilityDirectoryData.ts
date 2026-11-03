export interface ServiceAreaListing {
  id: string;
  name: string;
  category: "Healthcare / Post-Acute" | "Hospital Support" | "Industrial / Manufacturing" | "Logistics & Distribution";
  city: string;
  county: "Macomb" | "Oakland" | "Wayne" | "Washtenaw" | "Genesee" | "Statewide Michigan";
  focusDescription: string;
  status: "Active Coverage" | "24/7 Dispatch Available";
}

// Illustrative regional service areas (specific partner facility list is held for management approval)
export const michiganFacilities: ServiceAreaListing[] = [
  // Macomb County (Headquarters Core)
  {
    id: "cov-01",
    name: "Warren Regional Medical & Post-Acute Corridor",
    category: "Healthcare / Post-Acute",
    city: "Warren",
    county: "Macomb",
    focusDescription: "Clinical floor coverage, RN / LPN medication nurses, and certified nursing assistants.",
    status: "24/7 Dispatch Available"
  },
  {
    id: "cov-02",
    name: "Sterling Heights Healthcare & Subacute Sector",
    category: "Healthcare / Post-Acute",
    city: "Sterling Heights",
    county: "Macomb",
    focusDescription: "Post-acute rehabilitation support, therapy staffing (PT, OT, SLP), and restorative care.",
    status: "Active Coverage"
  },
  {
    id: "cov-03",
    name: "Clinton Township Senior Care Service Area",
    category: "Healthcare / Post-Acute",
    city: "Clinton Township",
    county: "Macomb",
    focusDescription: "Long-term clinical staffing, living assistance, and dietary support.",
    status: "Active Coverage"
  },
  {
    id: "cov-04",
    name: "Warren Industrial Logistics & Tooling Zone",
    category: "Logistics & Distribution",
    city: "Warren",
    county: "Macomb",
    focusDescription: "Certified forklift operators, material handlers, shipping/receiving, and inventory staff.",
    status: "24/7 Dispatch Available"
  },
  {
    id: "cov-05",
    name: "Shelby Manufacturing & Stamping Sector",
    category: "Industrial / Manufacturing",
    city: "Shelby Township",
    county: "Macomb",
    focusDescription: "Machine operators, assembly crews, certified welders, and fabrication support.",
    status: "Active Coverage"
  },

  // Oakland County
  {
    id: "cov-06",
    name: "Troy Healthcare & Clinical Research Corridor",
    category: "Hospital Support",
    city: "Troy",
    county: "Oakland",
    focusDescription: "ICU, Med/Surg RNs, allied health technologists, and respiratory therapists.",
    status: "24/7 Dispatch Available"
  },
  {
    id: "cov-07",
    name: "Southfield Medical & Rehabilitation Sector",
    category: "Healthcare / Post-Acute",
    city: "Southfield",
    county: "Oakland",
    focusDescription: "Skilled nursing shifts, physical therapy support, and health information management.",
    status: "Active Coverage"
  },
  {
    id: "cov-08",
    name: "Farmington Hills Care & Wellness Sector",
    category: "Healthcare / Post-Acute",
    city: "Farmington Hills",
    county: "Oakland",
    focusDescription: "Clinical nursing coverage, CNA cohorts, and private duty nursing.",
    status: "Active Coverage"
  },
  {
    id: "cov-09",
    name: "Rochester Hills Distribution & Assembly Hub",
    category: "Logistics & Distribution",
    city: "Rochester Hills",
    county: "Oakland",
    focusDescription: "Warehouse associates, order pickers, and distribution line personnel.",
    status: "Active Coverage"
  },
  {
    id: "cov-10",
    name: "Auburn Hills Automotive Industrial Corridor",
    category: "Industrial / Manufacturing",
    city: "Auburn Hills",
    county: "Oakland",
    focusDescription: "Assembly machine operators, quality inspectors, and industrial maintenance personnel.",
    status: "24/7 Dispatch Available"
  },

  // Wayne County
  {
    id: "cov-11",
    name: "Detroit Metro Hospital & Trauma Network Area",
    category: "Hospital Support",
    city: "Detroit",
    county: "Wayne",
    focusDescription: "Critical care clinical staffing, phlebotomy, and sterile processing technicians.",
    status: "24/7 Dispatch Available"
  },
  {
    id: "cov-12",
    name: "Dearborn Post-Acute & Clinical Sector",
    category: "Healthcare / Post-Acute",
    city: "Dearborn",
    county: "Wayne",
    focusDescription: "Skilled nursing coverage, physical rehabilitation, and living assistance.",
    status: "Active Coverage"
  },
  {
    id: "cov-13",
    name: "Livonia Convalescent & Therapy Sector",
    category: "Healthcare / Post-Acute",
    city: "Livonia",
    county: "Wayne",
    focusDescription: "Long-term care nursing, wound care support, and occupational therapy.",
    status: "Active Coverage"
  },
  {
    id: "cov-14",
    name: "Romulus Logistics & Air Freight Hub",
    category: "Logistics & Distribution",
    city: "Romulus",
    county: "Wayne",
    focusDescription: "Forklift operators, cross-dock personnel, and high-volume freight handlers.",
    status: "24/7 Dispatch Available"
  },
  {
    id: "cov-15",
    name: "Downriver Manufacturing & Stamping Corridor",
    category: "Industrial / Manufacturing",
    city: "Taylor",
    county: "Wayne",
    focusDescription: "General labor, press operators, packaging specialists, and facility maintenance.",
    status: "Active Coverage"
  },

  // Statewide Michigan
  {
    id: "cov-16",
    name: "Ann Arbor Specialty Care & Regional Medical Sector",
    category: "Healthcare / Post-Acute",
    city: "Ann Arbor",
    county: "Washtenaw",
    focusDescription: "Specialized clinical staffing, nurse coordinators, and travel nurse assignments.",
    status: "Active Coverage"
  },
  {
    id: "cov-17",
    name: "Flint Regional Care Community",
    category: "Healthcare / Post-Acute",
    city: "Flint",
    county: "Genesee",
    focusDescription: "Long-term care nursing shifts, LPNs, and certified nursing assistants.",
    status: "Active Coverage"
  },
  {
    id: "cov-18",
    name: "Grand Rapids Regional Logistics Hub",
    category: "Logistics & Distribution",
    city: "Grand Rapids",
    county: "Statewide Michigan",
    focusDescription: "Distribution center staffing, packaging specialists, and material handling.",
    status: "Active Coverage"
  }
];

export const countyCoverageStats = [
  {
    county: "Macomb County",
    role: "Headquarters & Primary Dispatch Core",
    coverage: "Warren (HQ), Sterling Heights, Clinton Twp, Shelby Twp, St. Clair Shores",
    dispatchSpeed: "24/7 Live Dispatch",
    note: "Primary operating hub with 24/7 live dispatch"
  },
  {
    county: "Oakland County",
    role: "Clinical & Industrial Corridor",
    coverage: "Troy, Southfield, Farmington Hills, Rochester Hills, Auburn Hills",
    dispatchSpeed: "24/7 Live Dispatch",
    note: "Comprehensive healthcare and automotive staffing coverage"
  },
  {
    county: "Wayne County",
    role: "Metro Detroit Healthcare & Logistics Network",
    coverage: "Detroit, Dearborn, Livonia, Canton, Romulus, Downriver",
    dispatchSpeed: "24/7 Live Dispatch",
    note: "Hospital clinical shifts and high-volume logistics support"
  },
  {
    county: "Statewide Michigan & United States",
    role: "Regional & National Expansion",
    coverage: "Washtenaw, Genesee, Kent, Ingham & nationwide placements",
    dispatchSpeed: "24/7 Operations",
    note: "Contract and travel workforce solutions"
  }
];
