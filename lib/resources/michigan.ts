import type { ConsultationResource } from "../consultationResources";

export const michiganResources: ConsultationResource[] = [
  {
    name: "Michigan Habilitation Supports Waiver",
    description:
      "Official Michigan Medicaid information about waiver services for eligible people with intellectual or developmental disabilities who require an institutional level of care.",
    url: "https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/mentalhealth/medwaivers/habilitation-supports-waiver",
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
    states: ["Michigan"],
  },

  {
    name: "Michigan Department of Education - Individualized Education Program",
    description:
      "Official Michigan information about IEP development, implementation, educational goals, accommodations, programs, services, and parent-friendly special education resources.",
    url: "https://www.michigan.gov/mde/services/special-education/evaluations-ieps/ieps",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Michigan"],
  },

  {
    name: "Michigan Supported Decision-Making",
    description:
      "Official Michigan information and tools explaining supported decision-making as an alternative to guardianship that helps people with disabilities receive support while retaining authority over their own decisions.",
    url: "https://www.michigan.gov/mdhhs/keep-mi-healthy/mentalhealth/developmentaldisability/supported-decision-making",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Michigan"],
  },

  {
    name: "Michigan Rehabilitation Services",
    description:
      "Official Michigan vocational rehabilitation services helping eligible people with disabilities prepare for, obtain, maintain, and advance in employment.",
    url: "https://www.michigan.gov/leo/bureaus-agencies/mrs/individuals/application-process",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Michigan"],
  },
];
