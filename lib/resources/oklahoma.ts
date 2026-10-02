import type { ConsultationResource } from "../consultationResources";

export const oklahomaResources: ConsultationResource[] = [
  {
    name: "Oklahoma Developmental Disabilities Services",
    description:
      "Official Oklahoma information about developmental disability services, Medicaid waiver programs, eligibility, community supports, employment services, respite, and self-directed services.",
    url: "https://oklahoma.gov/okdhs/services/dds.html",
    focusAreas: [
      "SSI & Government Benefits",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Oklahoma"],
  },

  {
    name: "Oklahoma State Department of Education - Special Education",
    description:
      "Official Oklahoma special education information covering IDEA, parent rights, educational supports, secondary transition, accommodations, and resources for children with disabilities.",
    url: "https://oklahoma.gov/education/services/special-education.html",
    focusAreas: [
      "IEP & School Support",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Oklahoma"],
  },

  {
    name: "Oklahoma Department of Rehabilitation Services - Vocational Rehabilitation",
    description:
      "Official Oklahoma vocational rehabilitation services helping people with disabilities prepare for, obtain, maintain, or return to employment, including school-to-work transition services.",
    url: "https://oklahoma.gov/okdrs/job-seekers/vr.html",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Oklahoma"],
  },
];