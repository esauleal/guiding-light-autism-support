import type { ConsultationResource } from "../consultationResources";

export const southDakotaResources: ConsultationResource[] = [
  {
    name: "South Dakota Developmental Disabilities HCBS Services",
    description:
      "Official South Dakota information and resources concerning home and community-based services for people with intellectual and developmental disabilities.",
    url: "https://dhs.sd.gov/en/developmental-disabilities",
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
    states: ["South Dakota"],
  },

  {
    name: "South Dakota Department of Education - Individual Education Program",
    description:
      "Official South Dakota IEP guidance and resources covering eligibility, annual goals, services, accommodations, progress monitoring, transition, and related special education requirements.",
    url: "https://doe.sd.gov/sped/iep.aspx",
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
    states: ["South Dakota"],
  },

  {
    name: "South Dakota Division of Rehabilitation Services",
    description:
      "Official South Dakota rehabilitation services helping people with disabilities obtain or maintain employment and providing career preparation for students with disabilities.",
    url: "https://dhs.sd.gov/en/rehabilitation-services",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["South Dakota"],
  },
];