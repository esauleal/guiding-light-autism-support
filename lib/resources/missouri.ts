import type { ConsultationResource } from "../consultationResources";

export const missouriResources: ConsultationResource[] = [
  {
    name: "Missouri Developmental Disabilities HCBS Waivers",
    description:
      "Official Missouri information about Medicaid home and community-based waiver programs for eligible people with intellectual and developmental disabilities.",
    url: "https://dmh.mo.gov/dev-disabilities/programs/waiver/medicaid-hcb",
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
    states: ["Missouri"],
  },

  {
    name: "Missouri Department of Elementary and Secondary Education - IEP",
    description:
      "Official Missouri information and tools for Individualized Education Programs, including present levels, services, accommodations, placement, assessments, and postsecondary transition planning.",
    url: "https://dese.mo.gov/special-education/compliance/individualized-education-program-iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Missouri"],
  },

  {
    name: "Missouri Division of Developmental Disabilities - Supported Decision-Making",
    description:
      "Official Missouri developmental disability resources explaining supported decision-making and tools that can help people understand options, make choices, and maintain greater control over their decisions.",
    url: "https://dmh.mo.gov/dev-disabilities/webinar/previous",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Missouri"],
  },

  {
    name: "Missouri Vocational Rehabilitation",
    description:
      "Missouri vocational rehabilitation services helping eligible people with disabilities prepare for, obtain, maintain, and advance in employment.",
    url: "https://vr.dese.mo.gov/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Missouri"],
  },
];
