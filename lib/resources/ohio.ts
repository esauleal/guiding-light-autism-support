import type { ConsultationResource } from "../consultationResources";

export const ohioResources: ConsultationResource[] = [
  {
    name: "Ohio Developmental Disabilities HCBS Waivers",
    description:
      "Official Ohio information about Medicaid home and community-based waiver programs for people with developmental disabilities, including Individual Options, Level One, and SELF waivers.",
    url: "https://medicaid.ohio.gov/families-and-individuals/citizen-programs-and-initiatives/hcbs/waivers",
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
    states: ["Ohio"],
  },

  {
    name: "Ohio Department of Education and Workforce - Special Education",
    description:
      "Official Ohio special education information and family resources covering evaluations, IEPs, required forms, educational supports, procedural protections, and services for students with disabilities.",
    url: "https://education.ohio.gov/Topics/Special-Education",
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
    states: ["Ohio"],
  },

  {
    name: "Ohio Opportunities for Ohioans with Disabilities",
    description:
      "Official Ohio vocational rehabilitation services helping people with disabilities prepare for employment, obtain jobs, maintain employment, and pursue greater independence.",
    url: "https://ood.ohio.gov/information-for-individuals/services/vocational-rehabilitation",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Ohio"],
  },
];