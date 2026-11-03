export interface TestimonialItem {
  id: string;
  quotePlaceholder: string;
  category: "Healthcare Partner" | "Industrial Partner" | "Clinical Professional";
  sector: string;
  status: "PENDING CLIENT/STAFF APPROVAL";
}

// NOTE: Testimonials from the legacy site contained quote icons without verbatim text.
// The following entries serve as layout placeholders and require management/client approval before publication.
export const testimonialsData: TestimonialItem[] = [
  {
    id: "sample-01",
    quotePlaceholder: "Sample testimonial layout: Client feedback regarding rapid response times, dependable floor nursing coverage, and direct coordinator communication.",
    category: "Healthcare Partner",
    sector: "Post-Acute & Skilled Nursing",
    status: "PENDING CLIENT/STAFF APPROVAL"
  },
  {
    id: "sample-02",
    quotePlaceholder: "Sample testimonial layout: Partner feedback highlighting certified forklift operator placement, warehouse shift reliability, and rapid dispatch during peak logistics volume.",
    category: "Industrial Partner",
    sector: "Warehousing & Logistics Operations",
    status: "PENDING CLIENT/STAFF APPROVAL"
  },
  {
    id: "sample-03",
    quotePlaceholder: "Sample testimonial layout: Feedback regarding Vibrus Group's 30-minute callback commitment and personal human coordination rather than automated phone trees.",
    category: "Healthcare Partner",
    sector: "Clinical Operations",
    status: "PENDING CLIENT/STAFF APPROVAL"
  },
  {
    id: "sample-04",
    quotePlaceholder: "Sample testimonial layout: Candidate feedback regarding weekly payroll disbursements, assignment matching, and professional respect from placement coordinators.",
    category: "Clinical Professional",
    sector: "Credentialed Clinical Staff",
    status: "PENDING CLIENT/STAFF APPROVAL"
  }
];
