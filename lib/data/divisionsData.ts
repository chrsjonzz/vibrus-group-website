export interface DivisionInfo {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroBadge: string;
  accentColor: string;
  iconName: string;
  serviceOverview: string[];
  subDivisions?: {
    title: string;
    description: string;
    roles?: string[];
    features?: string[];
  }[];
  jobClassifications: {
    category: string;
    roles: string[];
  }[];
  programs?: {
    name: string;
    tagline: string;
    description: string;
  }[];
}

export const divisionsData: DivisionInfo[] = [
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare Solutions",
    shortTitle: "Healthcare",
    tagline: "Reliable Clinical Staffing & Compassionate Care Solutions",
    description: "Delivering customized staffing and care solutions to Michigan hospitals, skilled nursing facilities, clinics, and private residences. Available 24/7 with dedicated dispatch support.",
    heroBadge: "Primary Division • 600+ Credentialed Clinicians",
    accentColor: "from-blue-600 to-cyan-600",
    iconName: "Stethoscope",
    serviceOverview: [
      "Per-Diem, Contract, Temp-to-Hire & Direct Clinical Placement",
      "Continuity of Care Program & Dedicated Facility Teams",
      "Private Duty 1-on-1 Skilled Nursing Care",
      "Non-Medical Living Assistance Services & ADLs",
      "Comprehensive Michigan State Licensing & Rigorous Credentialing Protocols",
      "Rapid Dispatch across Oakland, Wayne, Macomb & Statewide"
    ],
    programs: [
      {
        name: "Continuity of Care Program",
        tagline: "Consistent Clinical Coverage",
        description: "Provides recurring staffing coverage by clinicians already familiar with your facility's protocols, minimizing onboarding friction and elevating patient care."
      },
      {
        name: "Team Staff Program",
        tagline: "Dedicated On-Site Coordination",
        description: "A full cohort of medical professionals assigned with an on-site coordinator as a single point of contact for strategic long-term workforce stability."
      },
      {
        name: "Managed Services Program (MSP)",
        tagline: "Vendor Streamlining & Cost Containment",
        description: "Comprehensive vendor management to consolidate multiple staffing sources, streamline billing, and eliminate costly overtime leaks."
      },
      {
        name: "Recruitment Process Outsourcing (RPO)",
        tagline: "Strategic Talent Acquisition",
        description: "Customized end-to-end clinical recruitment solutions designed to meet both urgent census surges and long-term hiring goals."
      },
      {
        name: "International Nurse Recruitment",
        tagline: "Ethical Global Sourcing",
        description: "Proven, compliant immigration and recruitment framework addressing acute clinical shortages through ethical sponsorship."
      }
    ],
    subDivisions: [
      {
        title: "Medical Staffing Services",
        description: "Comprehensive per-diem and contract staffing for hospitals, skilled nursing centers, outpatient clinics, and rehabilitation facilities.",
        features: ["24/7/365 Dispatch", "Rapid Shift Response", "Pre-screened & Credentialed", "Shift Flexibility"]
      },
      {
        title: "Private Duty Services",
        description: "Personalized one-on-one skilled nursing care for patients in private homes, assisted living communities, or institutional settings.",
        features: ["Oakland, Wayne & Macomb Counties", "Single Point of Contact Liaison", "Full Case Management", "Respite Support for Families"]
      },
      {
        title: "Living Assistance Services",
        description: "Compassionate, non-medical daily living support allowing seniors and individuals to retain personal dignity and independence.",
        roles: ["Personal Care (Bathing, Grooming, Dressing)", "Light Housekeeping & Laundry", "Meal Preparation & Grocery Shopping", "Companionship & Recreational Activities", "Errands & Doctor Escort", "Medication Reminders & Management"]
      }
    ],
    jobClassifications: [
      {
        category: "Clinical Services",
        roles: [
          "Registered Nurses (RN)",
          "Emergency Room (ER) RN",
          "Operating Room (OR) RN",
          "Intensive Care Unit (ICU) RN",
          "Critical Care Unit (CCU) RN",
          "Labor & Delivery (L&D) RN",
          "Pediatrics RN",
          "Neonatal ICU (NICU) RN",
          "Ortho / Neuro RN",
          "Oncology RN",
          "Medical / Surgical (Med/Surg) RN",
          "Licensed Practical Nurses (LPN)",
          "Certified Nursing Assistants (CNA / Certified Aides)"
        ]
      },
      {
        category: "Rehabilitation Therapies",
        roles: [
          "Physical Therapists (PT)",
          "Physical Therapist Assistants (PTA)",
          "Physical Therapist Technicians (PTT)",
          "Occupational Therapists (OT)",
          "Certified Occupational Therapist Assistants (COTA)",
          "Speech & Language Pathologists (SLP)",
          "Respiratory Therapists (RT)"
        ]
      },
      {
        category: "Healthcare Management & Support",
        roles: [
          "Health Information Managers (HIM)",
          "Medical Office Managers",
          "Records Managers",
          "Quality & Compliance Managers",
          "Claims Processing Clerks",
          "Medical Coders (ICD-10 & CPT)",
          "Insurance Verification Clerks",
          "Health Unit Coordinators (HUC)",
          "Medical Billing Specialists"
        ]
      },
      {
        category: "Allied Health Services",
        roles: [
          "Medical Assistants (MA)",
          "Medical Technologists (Med Tech)",
          "Sterile Processing Technicians",
          "Phlebotomists",
          "Ultrasound Technologists",
          "Radiologic Technologists",
          "Radiation Therapy Technicians",
          "Nuclear Medicine Technologists",
          "CT / MRI Technologists",
          "Clinical Laboratory Technicians",
          "Staff Pharmacists",
          "Pharmacy Managers"
        ]
      }
    ]
  },
  {
    id: "industrial",
    slug: "industrial",
    title: "Industrial, Warehouse & Logistics",
    shortTitle: "Industrial & Logistics",
    tagline: "Dependable Workforce for Manufacturing, Warehousing & Supply Chains",
    description: "From certified equipment operators to dependable shift crews, Vibrus Group powers Michigan's manufacturing hubs and distribution centers with prompt, safety-trained talent.",
    heroBadge: "Industrial Staffing • Michigan Manufacturing Core",
    accentColor: "from-amber-600 to-yellow-600",
    iconName: "Truck",
    serviceOverview: [
      "Light Industrial & Heavy Manufacturing Staffing",
      "Warehouse Operations & Distribution Support",
      "Certified Forklift & Heavy Equipment Operators",
      "Skilled Trade Placements (Welders, Fabricators)",
      "High-Volume Seasonal & Peak Surge Staffing",
      "Safety-Conscious Pre-Employment Screening"
    ],
    jobClassifications: [
      {
        category: "Industrial, Warehouse & Skilled Trades",
        roles: [
          "Certified Forklift Operators (Sit-down & Stand-up)",
          "Commercial & Delivery Drivers",
          "General Machine Operators",
          "Warehouse Associates & Stockers",
          "Production & Assembly Workers",
          "Machine Operators & Feeders",
          "Retail & Merchandise Stockers",
          "Pick & Pack Specialists",
          "Quality Sorters & Inspectors",
          "Industrial Cleaners & Facility Sanitation",
          "General Labor Personnel",
          "Certified Welders (MIG, TIG, Arc)",
          "Metal Fabrication Specialists"
        ]
      }
    ]
  },
  {
    id: "office",
    slug: "office",
    title: "Office & Administrative",
    shortTitle: "Office & Admin",
    tagline: "Operational Excellence & Dedicated Corporate Support",
    description: "Connecting businesses with administrative professionals, records managers, and customer service teams who keep offices running smoothly and productively.",
    heroBadge: "Administrative Division • Core Business Support",
    accentColor: "from-slate-700 to-slate-900",
    iconName: "Building2",
    serviceOverview: [
      "Executive & Departmental Administrative Staffing",
      "High-Security Document & Records Management",
      "Full Call Center & Helpdesk Staffing",
      "Data Entry & Clerical Support",
      "Temporary, Temp-to-Hire & Direct Hire"
    ],
    jobClassifications: [
      {
        category: "Administrative & Clerical",
        roles: [
          "Executive Assistants",
          "Administrative Assistants",
          "Office Managers",
          "Receptionists & Front Desk Staff",
          "Secretaries & Word Processors",
          "Human Resources Support Staff",
          "Legal Administrative Support",
          "Data Entry Specialists",
          "File & General Office Clerks",
          "Mail Room Personnel",
          "Document Scanning Specialists"
        ]
      },
      {
        category: "Records Management",
        roles: [
          "Records Managers",
          "Records Clerks",
          "Compliance Archive Specialists",
          "Digital Document Converters"
        ]
      },
      {
        category: "Call Center & Customer Support",
        roles: [
          "Customer Service Representatives (CSR)",
          "Inbound Customer Care Specialists",
          "Outbound Support Reps",
          "Technical Support Helpdesk",
          "Billing & Collections Clerks",
          "Call Center Quality Monitors",
          "Team Supervisors & Leads"
        ]
      }
    ]
  },
  {
    id: "professional",
    slug: "professional",
    title: "Professional & Executive Search",
    shortTitle: "Professional Search",
    tagline: "Strategic Talent Acquisition for Leadership & Finance",
    description: "Precision executive search and specialized placements in finance, human resources, supply chain management, and corporate operations.",
    heroBadge: "Executive Search • Permanent & Contract Placement",
    accentColor: "from-blue-700 to-indigo-900",
    iconName: "Briefcase",
    serviceOverview: [
      "Direct Hire & Executive Search",
      "Interim Executive & Department Management",
      "Accounting & Corporate Finance Placements",
      "Supply Chain, Logistics & Procurement Talent",
      "Rigorous Vetting & Culture-Fit Interviews"
    ],
    jobClassifications: [
      {
        category: "Leadership & Corporate Disciplines",
        roles: [
          "Executive Management & Directors",
          "Operations & General Managers",
          "Directors of Nursing (DON)",
          "Human Resources Directors & Generalists",
          "Account Managers & Client Partners",
          "Purchasing Agents & Senior Buyers",
          "Certified Public Accountants (CPA)",
          "Senior & Staff Accountants",
          "Accounts Payable (AP) Supervisors",
          "Accounts Receivable (AR) Specialists",
          "Supply Chain & Logistics Coordinators"
        ]
      }
    ]
  },
  {
    id: "info-tech",
    slug: "info-tech",
    title: "Information Technology & Engineering",
    shortTitle: "IT & Engineering",
    tagline: "Technical Innovators Powering Modern Digital Infrastructure",
    description: "Sourcing certified software developers, cloud architects, DBAs, and systems engineers across healthcare, automotive, logistics, and enterprise domains.",
    heroBadge: "Technical Division • Modern Engineering Talent",
    accentColor: "from-cyan-600 to-blue-700",
    iconName: "Cpu",
    serviceOverview: [
      "Full-Lifecycle Software Development Placements",
      "Cloud Architecture & Database Engineering",
      "Healthcare IT (EMR/EHR Systems & Telehealth)",
      "Cybersecurity & Infrastructure Operations",
      "Agile Project Managers & Functional Analysts"
    ],
    jobClassifications: [
      {
        category: "Software, Cloud & Architecture",
        roles: [
          "Software Engineers (Full-Stack, Backend, Frontend)",
          "Cloud & Solutions Architects (AWS, Azure, GCP)",
          "Application Architects",
          "Database Administrators & DB Architects",
          "Data Warehouse & ETL Developers",
          "Web & Mobile Developers"
        ]
      },
      {
        category: "Infrastructure, Systems & Security",
        roles: [
          "Systems Engineers & Administrators",
          "Network Engineers & Architects",
          "Cybersecurity Engineers & Analysts",
          "Configuration & Release Managers",
          "Hardware Engineers",
          "Telecommunications Analysts"
        ]
      },
      {
        category: "Project Management & Analysis",
        roles: [
          "IT Project & Program Managers",
          "Technical Business Analysts",
          "CRM / ERP Functional & Technical Consultants",
          "Quality Assurance (QA) & Test Automation Engineers",
          "IT Helpdesk & Desktop Support Specialists",
          "Technical Writers & Documentation Specialists"
        ]
      }
    ]
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality Services",
    shortTitle: "Hospitality",
    tagline: "Impeccable Guest Experiences & Culinary Excellence",
    description: "Supplying polished, well-groomed hospitality professionals for healthcare dietary departments, corporate dining, convention centers, banquets, and resorts.",
    heroBadge: "Hospitality Division • Dietary & Event Staffing",
    accentColor: "from-rose-600 to-amber-700",
    iconName: "Utensils",
    serviceOverview: [
      "Healthcare Dietary & Food Service Staffing",
      "Banquet & Large-Scale Event Operations",
      "Front-of-House Guest Service Excellence",
      "Back-of-House Culinary & Kitchen Crews",
      "Food Safety & Hygiene Compliant Professionals"
    ],
    jobClassifications: [
      {
        category: "Front of the House",
        roles: [
          "Banquet Captains & Head Servers",
          "Banquet Setup & Tear-down Crews",
          "Bussers & Dining Room Attendants",
          "Front Desk Agents & Cashiers",
          "Coat Checkers",
          "Coffee Baristas & Attendants",
          "Hosts & Hostesses",
          "Buffet & Food Line Servers",
          "Food Station Attendants",
          "Waiters & Waitresses"
        ]
      },
      {
        category: "Back of the House & Culinary",
        roles: [
          "Executive & Sous Chefs",
          "Banquet Chefs & Line Cooks",
          "Grill & Display Cooks",
          "Pantry & Prep Cooks",
          "Pastry Chefs & Bakers",
          "Rounds Cooks",
          "Dietary Aides & Nutrition Assistants",
          "Dishwashers & Potwashers",
          "Kitchen Stewards & Sanitarians"
        ]
      }
    ]
  }
];
