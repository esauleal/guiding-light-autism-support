import type { ConsultationResource } from "../consultationResources";

export const illinoisResources: ConsultationResource[] = [
  {
    name: "Illinois Support Waiver for Children and Young Adults with Developmental Disabilities",
    description:
      "Official Illinois Medicaid information about home and community-based supports for eligible children and young adults with intellectual or developmental disabilities who live with their families.",
    url: "https://hfs.illinois.gov/medicalclients/hcbs/support_cyadd.html",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Illinois"],
  },

  {
    name: "Illinois Adult Developmental Disabilities Waiver",
    description:
      "Official Illinois Medicaid information about home and community-based services and individualized supports for eligible adults with developmental disabilities.",
    url: "https://hfs.illinois.gov/medicalclients/hcbs/dd.html",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Illinois"],
  },

  {
    name: "Illinois Vocational Rehabilitation Services",
    description:
      "Official Illinois vocational rehabilitation services helping people with disabilities prepare for employment, find jobs, and obtain supports needed to maintain employment.",
    url: "https://www.illinois.gov/services/service.vocational-rehab-services.html",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Illinois"],
  },
];