import type { ConsultationResource } from "../consultationResources";

export const vermontResources: ConsultationResource[] = [
  {
    name: "Vermont Developmental Disabilities Services",
    description:
      "Official Vermont information about developmental disability services, Medicaid home and community-based supports, eligibility, applications, family supports, employment services, and person-centered planning.",
    url: "https://ddsd.vermont.gov/services-providers/services",
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
    states: ["Vermont"],
  },

  {
    name: "Vermont Agency of Education - Special Education",
    description:
      "Official Vermont special education information and family resources covering student rights, IEPs, evaluations, services, state requirements, and educational supports.",
    url: "https://education.vermont.gov/special-education",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Vermont"],
  },

  {
    name: "Vermont Supported Decision-Making",
    description:
      "Official Vermont information explaining supported decision-making as a way for people with disabilities to receive help making and communicating decisions while remaining their primary decision-maker.",
    url: "https://ddsd.vermont.gov/supported-decision-making",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Vermont"],
  },

  {
    name: "Vermont Vocational Rehabilitation",
    description:
      "Vermont vocational rehabilitation services helping people with disabilities prepare for employment through counseling, assistive technology, benefits counseling, training, and employment supports.",
    url: "https://labor.vermont.gov/vt-retain/individuals/resources",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Vermont"],
  },
];