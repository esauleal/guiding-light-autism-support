import type { ConsultationResource } from "../consultationResources";

export const rhodeIslandResources: ConsultationResource[] = [
  {
    name: "Rhode Island Division of Developmental Disabilities",
    description:
      "Official Rhode Island information about developmental disability eligibility, applications, Medicaid long-term services and supports, and transition into adult disability services.",
    url: "https://bhddh.ri.gov/developmental-disabilities/eligibility-and-application",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Rhode Island"],
  },

  {
    name: "Rhode Island Department of Education - Individualized Education Program",
    description:
      "Official Rhode Island IEP information, forms, guidebooks, transition resources, parent information, educational goals, services, and accommodations.",
    url: "https://ride.ri.gov/students-families/special-education/iep-individual-education-program",
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
    states: ["Rhode Island"],
  },

  {
    name: "Rhode Island Office of Rehabilitation Services",
    description:
      "Official Rhode Island vocational rehabilitation services helping people with disabilities prepare for, obtain, and maintain employment.",
    url: "https://ors.ri.gov/vocational-rehabilitation-program",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Rhode Island"],
  },

  {
    name: "Rhode Island Pre-Employment Transition Services",
    description:
      "Official Rhode Island transition services helping students with disabilities explore careers, develop workplace skills, prepare for postsecondary education, and transition from school to employment.",
    url: "https://ors.ri.gov/transition/pre-ets",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Rhode Island"],
  },
];