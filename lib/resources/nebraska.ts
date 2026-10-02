import type { ConsultationResource } from "../consultationResources";

export const nebraskaResources: ConsultationResource[] = [
  {
    name: "Nebraska Developmental Disabilities Waivers",
    description:
      "Official Nebraska information about Medicaid developmental disability waivers, eligibility, applications, service coordination, and community-based supports.",
    url: "https://dhhs.ne.gov/Pages/HCBS-Waiver-Eligibility.aspx",
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
    states: ["Nebraska"],
  },

  {
    name: "Nebraska Department of Education - Special Education",
    description:
      "Official Nebraska special education information and resources supporting students with disabilities, families, schools, IDEA implementation, and transition to adult life.",
    url: "https://www.education.ne.gov/sped/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Nebraska"],
  },

  {
    name: "Nebraska HCBS - Guardianship & Supported Decision-Making",
    description:
      "Official Nebraska resources explaining guardianship and supported decision-making, including alternatives that can help people receive support without requiring guardianship.",
    url: "https://dhhs.ne.gov/Pages/HCBS-Participant-Planning.aspx",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Nebraska"],
  },

  {
    name: "Nebraska Vocational Rehabilitation",
    description:
      "Official Nebraska vocational rehabilitation services helping people with disabilities prepare for, find, and keep employment and helping students prepare for the world of work.",
    url: "https://www.vr.nebraska.gov/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Nebraska"],
  },
];