import type { ConsultationResource } from "../consultationResources";

export const newHampshireResources: ConsultationResource[] = [
  {
    name: "New Hampshire Developmental Disabilities Waiver",
    description:
      "Official New Hampshire information about Medicaid home and community-based services for people with developmental disabilities, including supports promoting independence, community participation, employment, and informed decision-making.",
    url: "https://www.dhhs.nh.gov/sites/g/files/ehbemt476/files/documents2/dltssddwavtrainov122021.pdf",
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
    states: ["New Hampshire"],
  },

  {
    name: "New Hampshire Supported Decision-Making",
    description:
      "Official New Hampshire law recognizing supported decision-making as a less restrictive alternative to guardianship for adults with disabilities who want assistance while retaining their legal rights.",
    url: "https://gc.nh.gov/rsa/html/XLIV/464-D/464-D-mrg.htm",
    focusAreas: [
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Hampshire"],
  },

  {
    name: "New Hampshire DOE - Supported Decision-Making for IEP Teams",
    description:
      "Official New Hampshire education resource helping students, families, and IEP teams understand supported decision-making and alternatives to guardianship during transition to adulthood.",
    url: "https://www.education.nh.gov/sites/g/files/ehbemt326/files/inline-documents/sonh/supported-decision-making-nhdoe-resource-for-iep-teams_0.pdf",
    focusAreas: [
      "IEP & School Support",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["New Hampshire"],
  },

  {
    name: "New Hampshire Vocational Rehabilitation",
    description:
      "Official New Hampshire vocational rehabilitation program helping eligible people with disabilities prepare for and achieve competitive integrated employment.",
    url: "https://www.education.nh.gov/who-we-are/division-of-workforce-innovation/vocational-rehabilitation",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["New Hampshire"],
  },
];