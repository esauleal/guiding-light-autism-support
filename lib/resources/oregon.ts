import type { ConsultationResource } from "../consultationResources";

export const oregonResources: ConsultationResource[] = [
  {
    name: "Oregon Medicaid Waivers and K Plan for I/DD Services",
    description:
      "Official Oregon information about Medicaid waivers and Community First Choice services supporting children and adults with intellectual and developmental disabilities in home and community settings.",
    url: "https://www.oregon.gov/odhs/idd/pages/waivers.aspx",
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
    states: ["Oregon"],
  },

  {
    name: "Oregon I/DD Services and Eligibility",
    description:
      "Official Oregon information explaining eligibility, applications, and available supports for children and adults with intellectual and developmental disabilities.",
    url: "https://www.oregon.gov/odhs/idd/pages/eligibility.aspx",
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
    states: ["Oregon"],
  },

  {
    name: "Oregon Supported Decision-Making",
    description:
      "Official Oregon information and tools explaining supported decision-making as a less restrictive alternative that helps people with disabilities make their own choices with support from trusted people.",
    url: "https://www.oregon.gov/odhs/supported-decision-making/Pages/default.aspx",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Oregon"],
  },

  {
    name: "Oregon Vocational Rehabilitation",
    description:
      "Official Oregon vocational rehabilitation services helping people with disabilities find and maintain employment, including employment preparation services for youth.",
    url: "https://www.oregon.gov/odhs/vr/Pages/default.aspx",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Oregon"],
  },
];