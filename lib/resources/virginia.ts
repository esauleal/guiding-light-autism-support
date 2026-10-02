import type { ConsultationResource } from "../consultationResources";

export const virginiaResources: ConsultationResource[] = [
  {
    name: "Virginia Developmental Disability Waivers",
    description:
      "Official Virginia Medicaid information about the Building Independence, Family and Individual Supports, and Community Living waivers for eligible people with developmental disabilities.",
    url: "https://dmas.virginia.gov/for-members/benefits-and-services/waivers/developmental-disability-dd-waivers/",
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
    states: ["Virginia"],
  },

  {
    name: "Virginia Department of Education - Individualized Education Program",
    description:
      "Official Virginia information about IEP development, educational goals, services, accommodations, modifications, family rights, and supports for students with disabilities.",
    url: "https://www.doe.virginia.gov/programs-services/special-education/iep-instruction/individualized-education-program-iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Virginia"],
  },

  {
    name: "Virginia Supported Decision-Making",
    description:
      "Official Virginia information, agreements, tools, and training that help adults with developmental disabilities use supported decision-making while retaining authority over their own decisions.",
    url: "https://dbhds.virginia.gov/supported-decision-making/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Virginia"],
  },

  {
    name: "Virginia Disability Employment Services",
    description:
      "Official Virginia employment resources connecting people with disabilities to vocational rehabilitation services that help them prepare for, find, and maintain employment.",
    url: "https://easyaccess.virginia.gov/employment",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Virginia"],
  },
];