import type { ConsultationResource } from "../consultationResources";

export const newYorkResources: ConsultationResource[] = [
  {
    name: "New York OPWDD Home and Community-Based Services Waiver",
    description:
      "Official New York information about Medicaid home and community-based services for eligible children and adults with developmental disabilities through the Office for People With Developmental Disabilities.",
    url: "https://www.health.ny.gov/health_care/medicaid/program/longterm/omrdd.htm",
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
    states: ["New York"],
  },

  {
    name: "New York State Education Department - Individualized Education Program",
    description:
      "Official New York information about IEP development, required IEP components, special education services, accommodations, supports, and implementation.",
    url: "https://www.nysed.gov/special-education/individualized-education-program-iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["New York"],
  },

  {
    name: "New York Courts - Adult Guardianship",
    description:
      "Official New York court information about adult guardianship and the importance of considering other available tools, services, and less restrictive options before guardianship.",
    url: "https://www.nycourts.gov/guardianship-basics",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New York"],
  },

  {
    name: "New York ACCES-VR",
    description:
      "Official New York vocational rehabilitation services helping people with disabilities achieve employment and greater independence through counseling, education, training, rehabilitation, career development, and transition services.",
    url: "https://www.acces.nysed.gov/vr",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New York"],
  },
];