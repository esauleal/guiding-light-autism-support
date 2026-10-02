import type { ConsultationResource } from "../consultationResources";

export const connecticutResources: ConsultationResource[] = [
  {
    name: "Connecticut Department of Developmental Services",
    description:
      "Official Connecticut services and supports for eligible individuals with intellectual disabilities and their families, including community supports, employment, technology, and independence.",
    url: "https://portal.ct.gov/dds",
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
    states: ["Connecticut"],
  },

  {
    name: "Connecticut State Department of Education - IEP",
    description:
      "Official Connecticut IEP information, manuals, documents, and tools for special education planning and services.",
    url: "https://portal.ct.gov/sde/special-education/bureau-of-special-education/new-iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Connecticut"],
  },

  {
    name: "Connecticut - Understanding Decision-Making Options",
    description:
      "Official Connecticut transition resource explaining supported decision-making and other decision-making options for students approaching adulthood.",
    url: "https://portal.ct.gov/sde/special-education/secondary-transition/resources-for-students-and-families/understanding-decision-making-options",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Connecticut"],
  },

  {
    name: "Connecticut Vocational Rehabilitation Services",
    description:
      "Official Connecticut vocational rehabilitation services helping youth and adults with disabilities prepare for, find, and maintain employment.",
    url: "https://portal.ct.gov/ads/knowledge-base/articles/employment-services/for-job-seekers/access-and-supports-as-a-job-seeker-with-disabilities",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Connecticut"],
  },
];
