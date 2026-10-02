import type { ConsultationResource } from "../consultationResources";

export const wyomingResources: ConsultationResource[] = [
  {
    name: "Wyoming Developmental Disability Waivers",
    description:
      "Official Wyoming information about the Supports and Comprehensive Medicaid HCBS waivers for eligible people with intellectual or developmental disabilities and acquired brain injuries.",
    url: "https://health.wyo.gov/healthcarefin/hcbs/",
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
    states: ["Wyoming"],
  },

  {
    name: "Wyoming Department of Education - Special Education",
    description:
      "Official Wyoming special education information and resources covering IDEA, parent resources, student supports, transition, and services for students with disabilities.",
    url: "https://edu.wyoming.gov/parents/special-education/",
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
    states: ["Wyoming"],
  },

  {
    name: "Wyoming Vocational Rehabilitation",
    description:
      "Official Wyoming vocational rehabilitation services helping people with disabilities prepare for, find, and keep employment, including Pre-Employment Transition Services for students.",
    url: "https://dws.wyo.gov/dws-division/vocational-rehabilitation/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Wyoming"],
  },
];