import type { ConsultationResource } from "../consultationResources";

export const minnesotaResources: ConsultationResource[] = [
  {
    name: "Minnesota Developmental Disabilities Waiver",
    description:
      "Official Minnesota information about the DD Waiver, which provides home and community-based services to eligible children and adults with developmental disabilities or related conditions.",
    url: "https://mn.gov/dhs/disability-aging/home-and-community-services/programs-and-services/dd-waiver/",
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
    states: ["Minnesota"],
  },

  {
    name: "Minnesota Department of Education - Special Education",
    description:
      "Official Minnesota information for families about special education evaluations, Individualized Education Programs, specialized instruction, and services for students with disabilities.",
    url: "https://education.mn.gov/MDE/fam/sped/index.htm",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Minnesota"],
  },

  {
    name: "Minnesota Supported Decision-Making",
    description:
      "Official Minnesota information explaining supported decision-making as a less restrictive approach that allows a person to make their own decisions with help from trusted supporters.",
    url: "https://mn.gov/board-on-aging/connect-to-services/legal/advanced-care-planning/supported-decision-making/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Minnesota"],
  },

  {
    name: "Minnesota Vocational Rehabilitation Services",
    description:
      "Official Minnesota vocational rehabilitation services helping people with disabilities prepare for, find, and keep employment and increase independence in their communities.",
    url: "https://mn.gov/deed/job-seekers/disabilities/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Minnesota"],
  },
];
