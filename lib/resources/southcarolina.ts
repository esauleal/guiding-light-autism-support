import type { ConsultationResource } from "../consultationResources";

export const southCarolinaResources: ConsultationResource[] = [
  {
    name: "South Carolina Developmental Disabilities HCBS Waivers",
    description:
      "Official South Carolina information about the Intellectual Disability/Related Disabilities Waiver and Community Supports Waiver for eligible people with intellectual and related disabilities.",
    url: "https://ddsn.sc.gov/ddsn-divisions/intellectual-disability-and-related-disabilities/medicaid-hcbs-waiver-programs",
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
    states: ["South Carolina"],
  },

  {
    name: "South Carolina Office of Special Education Services",
    description:
      "Official South Carolina special education resources covering IDEA, special education processes, parent and family resources, postsecondary planning, regulations, and student supports.",
    url: "https://oses.ed.sc.gov/",
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
    states: ["South Carolina"],
  },

  {
    name: "South Carolina Vocational Rehabilitation Department",
    description:
      "Official South Carolina vocational rehabilitation services helping people with disabilities prepare for employment, develop job skills, obtain work, and maintain successful employment.",
    url: "https://www.scvrd.net/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["South Carolina"],
  },
];