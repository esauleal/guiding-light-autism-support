import type { ConsultationResource } from "../consultationResources";

export const newJerseyResources: ConsultationResource[] = [
  {
    name: "New Jersey Division of Developmental Disabilities - Programs & Services",
    description:
      "Official New Jersey information about developmental disability services and Medicaid community programs, including the Supports Program and Community Care Program.",
    url: "https://nj.gov/humanservices/ddd/programs-and-services/index.shtml",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Jersey"],
  },

  {
    name: "New Jersey Office of Special Education",
    description:
      "Official New Jersey special education information, parent resources, IEP guidance, procedural protections, transition resources, and supports for students with disabilities.",
    url: "https://nj.gov/education/specialed/",
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
    states: ["New Jersey"],
  },

  {
    name: "New Jersey DDD - Guardianship and Alternatives",
    description:
      "Official New Jersey information about guardianship and alternatives, including supported decision-making and advance directives that may help preserve a person's decision-making authority.",
    url: "https://www.nj.gov/humanservices/ddd/individuals/guardianship/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Jersey"],
  },

  {
    name: "New Jersey Vocational Rehabilitation Services",
    description:
      "Official New Jersey vocational rehabilitation services helping youth and adults with disabilities develop work readiness, pursue career pathways, obtain training, and achieve employment.",
    url: "https://nj.gov/labor/career-services/special-services/individuals-with-disabilities/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Jersey"],
  },
];