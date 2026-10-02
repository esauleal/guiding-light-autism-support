import type { ConsultationResource } from "../consultationResources";

export const californiaResources: ConsultationResource[] = [
  {
    name: "California Department of Developmental Services - Regional Centers",
    description:
      "Official California network of regional centers that assess eligibility and coordinate services and supports for people with developmental disabilities and their families.",
    url: "https://www.dds.ca.gov/rc/",
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
    states: ["California"],
  },

  {
    name: "California HCBS Waiver for People with Developmental Disabilities",
    description:
      "Official California Medi-Cal information about home and community-based waiver services for eligible people with developmental disabilities.",
    url: "https://www.dhcs.ca.gov/services/medi-cal-resources/home-and-community-based-services-waiver-for-the-developmentally-disabled/",
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
    states: ["California"],
  },

  {
    name: "California Department of Education - Special Education",
    description:
      "Official California information and resources supporting special education programs and services for students with disabilities and their families.",
    url: "https://www.cde.ca.gov/sp/se/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["California"],
  },

  {
    name: "California DDS - Conservatorship & Alternatives",
    description:
      "Official California information about conservatorship and less restrictive alternatives including supported decision-making, powers of attorney, health care directives, representative payees, and authorized representatives.",
    url: "https://www.dds.ca.gov/individuals-and-families/conservatorship/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["California"],
  },

  {
    name: "California Department of Rehabilitation - Students & Youth",
    description:
      "Official California services helping students and youth with disabilities explore careers, prepare for employment, understand workplace supports, and plan for education after high school.",
    url: "https://dor.ca.gov/Home/StudentsandYouth",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["California"],
  },

  {
    name: "California Self-Determination Program",
    description:
      "Official California program that gives eligible regional center consumers greater flexibility, control, and responsibility in choosing services and supports through person-centered planning.",
    url: "https://www.dds.ca.gov/initiatives/sdp/",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["California"],
  },
];