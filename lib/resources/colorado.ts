import type { ConsultationResource } from "../consultationResources";

export const coloradoResources: ConsultationResource[] = [
  {
    name: "Colorado Health First Colorado - Disability Programs",
    description:
      "Official Colorado Medicaid information about programs and home and community-based services for people with physical, intellectual, or developmental disabilities.",
    url: "https://hcpf.colorado.gov/programs-individuals-physical-or-developmental-disabilities",
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
    states: ["Colorado"],
  },

  {
    name: "Colorado Department of Education - Individualized Education Program",
    description:
      "Official Colorado guidance about IEPs, special education services, evaluations, procedural safeguards, eligibility, goals, and supports for students with disabilities.",
    url: "https://ed.cde.state.co.us/cdesped/iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Colorado"],
  },

  {
    name: "Colorado Supported Decision-Making",
    description:
      "Official Colorado information about supported decision-making agreements, which allow adults with disabilities to receive help understanding and communicating decisions while retaining decision-making authority.",
    url: "https://www.leg.colorado.gov/bills/sb21-075",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Colorado"],
  },

  {
    name: "Colorado Division of Vocational Rehabilitation",
    description:
      "Colorado vocational rehabilitation services supporting people with disabilities as they prepare for employment, obtain jobs, and pursue greater independence.",
    url: "https://dvr.colorado.gov/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Colorado"],
  },
];
