import type { ConsultationResource } from "../consultationResources";

export const alaskaResources: ConsultationResource[] = [
  {
    name: "Alaska Medicaid - Home and Community-Based Services Waivers",
    description:
      "Official Alaska information about Medicaid home and community-based waiver programs for people with disabilities who may need long-term services and supports.",
    url: "https://health.alaska.gov/en/services/hcbs-waivers/",
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
    states: ["Alaska"],
  },

  {
    name: "Alaska Intellectual & Developmental Disabilities Unit",
    description:
      "Official Alaska information about developmental disability eligibility, the DD Registry, Individualized Supports Waiver, IDD Waiver, and related disability services.",
    url: "https://health.alaska.gov/en/senior-and-disabilities-services/developmental-disabilities/",
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
    states: ["Alaska"],
  },

  {
    name: "Alaska Department of Education - Special Education",
    description:
      "Official Alaska special education information and parent resources covering IEPs, parental rights, special education services, and related supports.",
    url: "https://education.alaska.gov/sped",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Alaska"],
  },

  {
    name: "Alaska Supported Decision-Making Agreements",
    description:
      "Official Alaska information about supported decision-making agreements and alternatives to guardianship that can help people with disabilities retain decision-making authority while receiving support.",
    url: "https://health.alaska.gov/en/senior-and-disabilities-services/governors-council-on-disabilities/supported-decision-making/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Alaska"],
  },

  {
    name: "Alaska Division of Vocational Rehabilitation",
    description:
      "Official Alaska vocational rehabilitation services that help people with disabilities prepare for, obtain, and maintain employment.",
    url: "https://labor.alaska.gov/dvr/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Alaska"],
  },
];