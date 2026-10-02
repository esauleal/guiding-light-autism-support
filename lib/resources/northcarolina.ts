import type { ConsultationResource } from "../consultationResources";

export const northCarolinaResources: ConsultationResource[] = [
  {
    name: "North Carolina Innovations Waiver",
    description:
      "Official North Carolina Medicaid information about home and community-based services for children and adults with intellectual or developmental disabilities, including autism.",
    url: "https://medicaid.ncdhhs.gov/beneficiaries/nc-innovations-waiver",
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
    states: ["North Carolina"],
  },

  {
    name: "North Carolina DPI - Exceptional Children",
    description:
      "Official North Carolina special education information and resources supporting appropriate Individualized Education Programs, IDEA services, family participation, and transition planning.",
    url: "https://www.dpi.nc.gov/districts-schools/classroom-resources/exceptional-children",
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
    states: ["North Carolina"],
  },

  {
    name: "North Carolina Employment and Independence for People with Disabilities",
    description:
      "Official North Carolina vocational rehabilitation and employment services helping people with disabilities prepare for work, find employment, maintain employment, advance in their careers, and live more independently.",
    url: "https://www.ncdhhs.gov/divisions/employment-and-independence-people-disabilities",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["North Carolina"],
  },
];