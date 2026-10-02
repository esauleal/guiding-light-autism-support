import type { ConsultationResource } from "../consultationResources";

export const maineResources: ConsultationResource[] = [
  {
    name: "MaineCare Waiver Services for Adults with IDD or Autism",
    description:
      "Official Maine information about Section 21 and Section 29 Medicaid waiver services for eligible adults with intellectual disabilities or autism, including home, community, employment, transportation, and respite supports.",
    url: "https://www.maine.gov/dhhs/oads/get-support/adults-intellectual-disability-and-autism/waiver-services",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maine"],
  },

  {
    name: "Maine Department of Education - Special Education IEP Resources",
    description:
      "Official Maine resources for families and schools covering IEP documentation, procedural safeguards, special education forms, and related guidance.",
    url: "https://www.maine.gov/doe/learning/specialed/iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Maine"],
  },

  {
    name: "Maine Adult Guardianship and Alternatives",
    description:
      "Official Maine information about adult guardianship, supported decision-making, supportive services, technological assistance, and other less restrictive alternatives.",
    url: "https://www.maine.gov/dhhs/oads/get-support/aps/guardianship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maine"],
  },

  {
    name: "Maine Division of Vocational Rehabilitation",
    description:
      "Official Maine vocational rehabilitation program helping people with disabilities prepare for employment, obtain work, keep a job, and live more independently.",
    url: "https://www.maine.gov/rehab/dvr/index.shtml",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Maine"],
  },
];
