export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  fax: string;
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  leadership: {
    publicExecutives: string[];
    operationsContact: string;
    heritageDescription: string;
  };
  badges: {
    wmbe: string;
    operationalHours: string;
    callbackTime: string;
    credentialedStaff: string;
    triCounty: string;
  };
  contacts: {
    primaryRecipient: string;
    activeRecipients: string[];
    futureConfigurableRecipients: string[];
    generalEmail: string;
    jobsEmail: string;
    deliveryMode: string;
  };
  externalLinks: {
    jobsoid: string;
    indeed: string;
  };
  navigation: {
    name: string;
    href: string;
    children?: { name: string; href: string; description?: string }[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Vibrus Group",
  legalName: "Vibrus Group LLC",
  tagline: "Single Source — Specialized Solutions",
  phone: "(248) 443-5100",
  phoneRaw: "2484435100",
  fax: "(248) 443-5115",
  address: {
    street: "31201 Chicago Road South",
    suite: "Suite B202",
    city: "Warren",
    state: "Michigan",
    zip: "48093",
    full: "31201 Chicago Road South, Suite B202, Warren, MI 48093",
  },
  leadership: {
    publicExecutives: ["Paddy", "Achla"],
    operationsContact: "Sharon (Operations Lead & Primary Intake Recipient)",
    heritageDescription: "Over 30 years of combined staffing and healthcare expertise among principals and staff.",
  },
  badges: {
    wmbe: "Women-Owned Minority Small Business Enterprise (WMBE)",
    operationalHours: "24/7 Operational Dispatch",
    callbackTime: "30-Minute Callback Commitment",
    credentialedStaff: "600+ Credentialed Staff",
    triCounty: "Oakland • Wayne • Macomb & Expanding Across Michigan and the US",
  },
  contacts: {
    primaryRecipient: "sharon@vibrusgroup.com",
    activeRecipients: ["sharon@vibrusgroup.com"],
    futureConfigurableRecipients: ["[Configurable upon management authorization]"],
    generalEmail: "sharon@vibrusgroup.com",
    jobsEmail: "sharon@vibrusgroup.com",
    deliveryMode: "Server-log recording (Demo mode — actual email transport pending production integration)",
  },
  externalLinks: {
    jobsoid: "https://vibrus.jobsoid.com/",
    indeed: "https://www.indeed.com/cmp/Vibrus-Group",
  },
  navigation: [
    { name: "Employers", href: "/employers" },
    {
      name: "Candidates",
      href: "/careers",
      children: [
        { name: "60-Second Express Apply", href: "/apply", description: "Rapid direct candidate intake application" },
        { name: "Healthcare Careers", href: "/careers/healthcare", description: "Clinical nursing, therapy & allied health opportunities" },
        { name: "General & Industrial Careers", href: "/careers/general", description: "Warehousing, machine trades, administration & IT roles" },
      ],
    },
    {
      name: "Divisions",
      href: "/divisions",
      children: [
        { name: "Healthcare Solutions", href: "/divisions/healthcare", description: "Clinical Nursing, Rehab Therapies, Allied Health & In-Home Support" },
        { name: "Industrial & Logistics", href: "/divisions/industrial", description: "Warehousing, Assembly, Forklift Operators & Machine Trades" },
        { name: "Office & Administrative", href: "/divisions/office", description: "Executive Support, Records Management & Call Center Specialists" },
        { name: "Professional & Executive", href: "/divisions/professional", description: "Direct Hire, HR, Accounting & Operations Management" },
        { name: "IT & Engineering", href: "/divisions/info-tech", description: "Cloud Architects, Software Engineers, DBAs & Security" },
        { name: "Hospitality", href: "/divisions/hospitality", description: "Banquets, Front of House, Culinary & Kitchen Staff" },
      ],
    },
    { name: "About Vibrus", href: "/about" },
    { name: "Michigan Coverage", href: "/coverage" },
    { name: "Contact", href: "/contact" },
  ],
};
