import type { ConsultationResource } from "../consultationResources";

export const indianaResources: ConsultationResource[] = [
  {
    name: "Indiana Medicaid HCBS Waivers",
    description:
      "Official Indiana information about home and community-based Medicaid waivers, including waiver programs supporting children and adults with intellectual and developmental disabilities.",
    url: "https://www.in.gov/fssa/ddars/bds/medicaid-hcbs-waivers/",
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
    states: ["Indiana"],
  },

  {
    name: "Indiana Department of Education - Special Education",
    description:
      "Official Indiana special education information including parent resources, procedural safeguards, state special education rules, IEP resources, and supports for students with disabilities.",
    url: "https://www.in.gov/doe/students/special-education/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Indiana"],
  },

  {
    name: "Indiana Supreme Court - Adult Guardianship",
    description:
      "Official Indiana information and resources concerning adult guardianship, guardianship programs, responsibilities, and statewide guardianship initiatives.",
    url: "https://www.in.gov/courts/iocs/adult-guardianship/",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Indiana"],
  },

  {
    name: "Indiana Vocational Rehabilitation",
    description:
      "Official Indiana vocational rehabilitation services helping people with disabilities explore careers, obtain employment, access training and assistive technology, and advance in employment.",
    url: "https://www.in.gov/fssa/ddars/brs/vocational-rehabilitation-employment/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Indiana"],
  },
];