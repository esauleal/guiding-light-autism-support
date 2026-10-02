import type { ConsultationResource } from "../consultationResources";

export const idahoResources: ConsultationResource[] = [
  {
    name: "Idaho Children's Developmental Disabilities Program",
    description:
      "Official Idaho information for families about developmental disability services, Medicaid eligibility, support planning, and resources for children transitioning toward adult services.",
    url: "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/resources-parents-and-caregivers",
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
    states: ["Idaho"],
  },

  {
    name: "Idaho Adult Developmental Disabilities Services",
    description:
      "Official Idaho information about adult developmental disability eligibility, Medicaid DD waiver services, self-directed supports, and transition from children's services.",
    url: "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/apply-adult-developmental-disabilities-programs",
    focusAreas: [
      "SSI & Government Benefits",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Idaho"],
  },

  {
    name: "Idaho Department of Education - Special Education",
    description:
      "Official Idaho special education guidance and resources supporting implementation of IDEA and services for students with disabilities and their families.",
    url: "https://www.sde.idaho.gov/about-us/departments/special-education/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Idaho"],
  },

  {
    name: "Idaho Division of Vocational Rehabilitation",
    description:
      "Official Idaho vocational rehabilitation services helping people with disabilities prepare for, find, maintain, and advance in employment, including transition support for students.",
    url: "https://vr.idaho.gov/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Idaho"],
  },

  {
    name: "Idaho Self-Directed Developmental Disability Services",
    description:
      "Official Idaho information about self-directed DD waiver services that give eligible participants greater choice and control over their supports and service budget.",
    url: "https://healthandwelfare.idaho.gov/services-programs/medicaid-health/self-directed-services",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Idaho"],
  },
];