import type { ConsultationResource } from "../consultationResources";

export const hawaiiResources: ConsultationResource[] = [
  {
    name: "Hawaii Developmental Disabilities Division - Medicaid I/DD Waiver",
    description:
      "Official Hawaii information about the Medicaid I/DD Waiver, eligibility, person-centered planning, and home and community-based services for people with intellectual and developmental disabilities.",
    url: "https://health.hawaii.gov/ddd/participants-families/waiver/",
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
    states: ["Hawaii"],
  },

  {
    name: "Hawaii State Department of Education - Special Education",
    description:
      "Official Hawaii information about special education eligibility, evaluations, IEPs, services, parent participation, and transition planning for students with disabilities.",
    url: "https://hawaiipublicschools.org/school-services/what-is-special-education/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Hawaii"],
  },

  {
    name: "Hawaii Division of Vocational Rehabilitation",
    description:
      "Official Hawaii vocational rehabilitation services helping people with disabilities prepare for, obtain, maintain, and advance in competitive employment.",
    url: "https://humanservices.hawaii.gov/vr/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Hawaii"],
  },
];
