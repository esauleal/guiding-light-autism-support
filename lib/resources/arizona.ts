import type { ConsultationResource } from "../consultationResources";

export const arizonaResources: ConsultationResource[] = [
  {
    name: "Arizona Division of Developmental Disabilities",
    description:
      "Official Arizona services and supports for eligible individuals with developmental disabilities and their families.",
    url: "https://des.az.gov/ddd/",
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
    states: ["Arizona"],
  },

  {
    name: "Arizona Department of Education - Special Education",
    description:
      "Official Arizona special education information for families and schools, including IDEA requirements, family resources, evaluations, IEPs, and student supports.",
    url: "https://www.azed.gov/specialeducation",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Arizona"],
  },

  {
    name: "Arizona Department of Education - IEP Information",
    description:
      "Official Arizona guidance explaining Individualized Education Programs, required IEP components, goals, services, accommodations, and the IEP process.",
    url: "https://www.azed.gov/specialeducation/iep",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Arizona"],
  },

  {
    name: "Arizona Vocational Rehabilitation",
    description:
      "Official Arizona vocational rehabilitation services that help people with disabilities prepare for work, obtain employment, and maintain employment.",
    url: "https://des.az.gov/services/employment/rehabilitation-services/vocational-rehabilitation-vr",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Arizona"],
  },

  {
    name: "Arizona Pre-Employment Transition Services",
    description:
      "Arizona career exploration, work-based learning, postsecondary counseling, workplace readiness, and self-advocacy services for students with disabilities.",
    url: "https://des.az.gov/services/employment/working-disability/vocational-rehabilitation/pre-ets",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Arizona"],
  },
];