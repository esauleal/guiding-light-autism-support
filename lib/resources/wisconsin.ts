import type { ConsultationResource } from "../consultationResources";

export const wisconsinResources: ConsultationResource[] = [
  {
    name: "Wisconsin Children's Long-Term Support Program",
    description:
      "Official Wisconsin information about the CLTS Program, which provides Medicaid-funded supports and services to eligible children and youth with disabilities so they can live at home and participate in family and community life.",
    url: "https://www.dhs.wisconsin.gov/clts/family.htm",
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
    states: ["Wisconsin"],
  },

  {
    name: "Wisconsin Department of Public Instruction - Special Education",
    description:
      "Official Wisconsin special education information and resources supporting students with disabilities, families, IEP teams, educational services, and transition planning.",
    url: "https://dpi.wi.gov/sped",
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
    states: ["Wisconsin"],
  },

  {
    name: "Wisconsin Supported Decision-Making Agreement",
    description:
      "Official Wisconsin information and agreement forms allowing adults with disabilities to choose trusted supporters who can help them understand information, compare options, and communicate decisions without taking away their decision-making rights.",
    url: "https://www.dhs.wisconsin.gov/library/collection/f-02377",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Wisconsin"],
  },

  {
    name: "Wisconsin Division of Vocational Rehabilitation",
    description:
      "Official Wisconsin vocational rehabilitation services helping people with disabilities find employment, keep employment, advance in their careers, and access education and transition services.",
    url: "https://dwd.wisconsin.gov/dvr/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Wisconsin"],
  },
];