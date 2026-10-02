import type { ConsultationResource } from "../consultationResources";

export const newMexicoResources: ConsultationResource[] = [
  {
    name: "New Mexico Developmental Disabilities Supports Division",
    description:
      "Official New Mexico information about developmental disability services, Medicaid waiver supports, community-based services, and resources for people with intellectual and developmental disabilities.",
    url: "https://www.hca.nm.gov/about_the_department/developmental_disabilities_supports_division/",
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
    states: ["New Mexico"],
  },

  {
    name: "New Mexico Public Education Department - Special Education",
    description:
      "Official New Mexico special education resources including Individualized Education Program forms, parent and student rights, dispute resolution, and educational supports.",
    url: "https://web.ped.nm.gov/bureaus/special-education/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["New Mexico"],
  },

  {
    name: "New Mexico Division of Vocational Rehabilitation",
    description:
      "Official New Mexico vocational rehabilitation services helping people with disabilities pursue employment through counseling, training, job placement, technology, and Pre-Employment Transition Services.",
    url: "https://www.dvr.state.nm.us/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Mexico"],
  },
];