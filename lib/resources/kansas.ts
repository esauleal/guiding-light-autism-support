import type { ConsultationResource } from "../consultationResources";

export const kansasResources: ConsultationResource[] = [
  {
    name: "Kansas I/DD Home and Community-Based Services Waiver",
    description:
      "Official Kansas information about the Medicaid I/DD waiver, eligibility, waiting list, community services, supported employment, residential supports, and self-directed services.",
    url: "https://www.kdads.ks.gov/services-programs/long-term-services-supports/home-and-community-based-services-hcbs/waiver-programs/intellectual-developmentally-disabled-i-dd",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Kansas"],
  },

  {
    name: "Kansas Community Support Waiver",
    description:
      "Official Kansas Medicaid waiver information for eligible people with intellectual and developmental disabilities who can live in the community without continuous 24-hour paid support.",
    url: "https://www.kdads.ks.gov/services-programs/long-term-services-supports/community-support-waiver",
    focusAreas: [
      "SSI & Government Benefits",
      "Guardianship & Alternatives",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Kansas"],
  },

  {
    name: "Kansas State Department of Education - Special Education",
    description:
      "Official Kansas special education information about IDEA, student rights, state requirements, educational supports, and resources for students with disabilities and their families.",
    url: "https://ksde.gov/student-success/special-education",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Kansas"],
  },

  {
    name: "Kansas Rehabilitation Services - Employment Services",
    description:
      "Official Kansas vocational rehabilitation and Pre-Employment Transition Services helping people with disabilities prepare for employment and pursue their employment goals.",
    url: "https://www.dcf.ks.gov/services/rs/Pages/employment-services.aspx",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Kansas"],
  },
];