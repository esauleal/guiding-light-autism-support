import type { ConsultationResource } from "../consultationResources";

export const louisianaResources: ConsultationResource[] = [
  {
    name: "Louisiana OIDD - Developmental Disability Services & Waivers",
    description:
      "Official Louisiana information about developmental disability services, home and community-based Medicaid waivers, self-direction, family supports, and the state's tiered waiver system.",
    url: "https://www.ldh.la.gov/office-for-citizens-with-developmental-disabilities/ocdd-services-programs",
    focusAreas: [
      "SSI & Government Benefits",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Louisiana"],
  },

  {
    name: "Louisiana Children's Choice Waiver",
    description:
      "Official Louisiana Medicaid waiver information for eligible children and youth with developmental disabilities living at home with their families or foster families.",
    url: "https://www.ldh.la.gov/office-for-citizens-with-developmental-disabilities/childrens-choice-waiver",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Louisiana"],
  },

  {
    name: "Louisiana Rehabilitation Services - Vocational Rehabilitation",
    description:
      "Official Louisiana vocational rehabilitation services providing career counseling, training, assistive technology, job placement, and transition-from-school-to-work support.",
    url: "https://www.laworks.net/workforcedev/lrs/lrs_rehabilitation.asp",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Louisiana"],
  },

  {
    name: "Louisiana Supported Decision-Making Law",
    description:
      "Official Louisiana law recognizing supported decision-making arrangements that can help adults with disabilities receive assistance understanding, communicating, and making decisions.",
    url: "https://www.legis.la.gov/legis/Law.aspx?d=1147554",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Louisiana"],
  },
];
