import type { ConsultationResource } from "../consultationResources";

export const marylandResources: ConsultationResource[] = [
  {
    name: "Maryland Developmental Disabilities Administration",
    description:
      "Official Maryland information about developmental disability eligibility, services, person-centered supports, employment, self-determination, family support, and community living.",
    url: "https://health.maryland.gov/dda/Pages/Home.aspx",
    focusAreas: [
      "SSI & Government Benefits",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maryland"],
  },

  {
    name: "Maryland DDA Medicaid Waiver Programs",
    description:
      "Official Maryland information about Medicaid home and community-based waiver services for eligible people with intellectual and developmental disabilities.",
    url: "https://health.maryland.gov/dda/Pages/Medicaid_Waiver_Programs.aspx",
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
    states: ["Maryland"],
  },

  {
    name: "Maryland Courts - Alternatives to Guardianship",
    description:
      "Official Maryland information about less restrictive alternatives to adult guardianship, including supported decision-making, powers of attorney, representative payees, advance directives, trusts, and other decision supports.",
    url: "https://www.mdcourts.gov/legalhelp/family/alternativestoguardianship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maryland"],
  },

  {
    name: "Maryland Division of Rehabilitation Services",
    description:
      "Official Maryland vocational rehabilitation services helping job seekers with disabilities prepare for work, obtain employment, access training and assistive technology, and remain employed.",
    url: "https://dors.maryland.gov/consumers/Pages/default.aspx",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maryland"],
  },
];