import type { ConsultationResource } from "../consultationResources";

export const northDakotaResources: ConsultationResource[] = [
  {
    name: "North Dakota Medicaid Waivers",
    description:
      "Official North Dakota information about Medicaid waiver programs, including the traditional intellectual and developmental disabilities HCBS waiver and the Autism Spectrum Disorder Birth through Age 20 Waiver.",
    url: "https://www.hhs.nd.gov/healthcare/medicaid/medicaid-waivers",
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
    states: ["North Dakota"],
  },

  {
    name: "North Dakota Department of Public Instruction - Special Education",
    description:
      "Official North Dakota special education information covering IDEA, Individualized Education Programs, parental rights, procedural safeguards, assistive technology, and transition to further education, employment, and independent living.",
    url: "https://www.nd.gov/dpi/education-programs/special-education",
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
    states: ["North Dakota"],
  },

  {
    name: "North Dakota Courts - Adult Guardianship & Less Restrictive Options",
    description:
      "Official North Dakota court information about adult guardianship and less restrictive alternatives including supported decision-making, powers of attorney, health care directives, and representative payees.",
    url: "https://www.ndcourts.gov/legal-self-help/adult-guardianship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["North Dakota"],
  },

  {
    name: "North Dakota Vocational Rehabilitation",
    description:
      "Official North Dakota vocational rehabilitation services helping people with disabilities find, keep, or advance in employment and helping students build employment skills and independence.",
    url: "https://www.hhs.nd.gov/vr",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["North Dakota"],
  },
];