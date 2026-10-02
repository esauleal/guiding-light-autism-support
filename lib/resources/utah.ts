import type { ConsultationResource } from "../consultationResources";

export const utahResources: ConsultationResource[] = [
  {
    name: "Utah Medicaid - Community Supports Waiver",
    description:
      "Official Utah information about the Community Supports Waiver for eligible people with intellectual disabilities or related conditions who need services and supports to live in their homes or communities.",
    url: "https://medicaid.utah.gov/ltc-2/cs/",
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
    states: ["Utah"],
  },

  {
    name: "Utah State Board of Education - Special Education",
    description:
      "Official Utah special education information and resources supporting students with disabilities, families, educators, student rights, and transition planning.",
    url: "https://www.schools.utah.gov/specialeducation/",
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
    states: ["Utah"],
  },

  {
    name: "Utah DSPD - Supported Decision-Making Resources",
    description:
      "Official Utah developmental disability resources addressing supported decision-making agreements and guidance for people with disabilities and their support teams.",
    url: "https://dspd.utah.gov/providers/trainings/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Utah"],
  },

  {
    name: "Utah Vocational Rehabilitation",
    description:
      "Official Utah vocational rehabilitation services helping people with disabilities overcome barriers to employment, build careers, and gain greater independence.",
    url: "https://jobs.utah.gov/usor/vr/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Utah"],
  },
];