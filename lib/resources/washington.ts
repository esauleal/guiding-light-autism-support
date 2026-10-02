import type { ConsultationResource } from "../consultationResources";

export const washingtonResources: ConsultationResource[] = [
  {
    name: "Washington DDA - Home and Community-Based Waivers",
    description:
      "Official Washington information about developmental disability Medicaid waivers that help eligible people live at home and participate in their communities.",
    url: "https://dshs.wa.gov/disability-services-and-support/developmental-disabilities-services/home-and-community-based-waivers",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Washington"],
  },

  {
    name: "Washington OSPI - Individualized Education Program",
    description:
      "Official Washington information for families about IEP development, required services, educational goals, accommodations, progress monitoring, placement, and transition planning.",
    url: "https://ospi.k12.wa.us/student-success/special-education/family-engagement-and-guidance/individualized-education-program-iep",
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
    states: ["Washington"],
  },

  {
    name: "Washington Courts - Guardianship & Less Restrictive Alternatives",
    description:
      "Official Washington court resources covering guardianship, conservatorship, supported decision-making, and other less restrictive alternatives.",
    url: "https://www.courts.wa.gov/guardianship/lgtk/forms-and-checklists.cfm",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Washington"],
  },

  {
    name: "Washington Division of Vocational Rehabilitation",
    description:
      "Official Washington vocational rehabilitation services helping people with disabilities prepare for, obtain, maintain, advance in, or regain employment.",
    url: "https://dshs.wa.gov/disability-services-and-support/division-vocational-rehabilitation",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Washington"],
  },
];