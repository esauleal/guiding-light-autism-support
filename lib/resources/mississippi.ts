import type { ConsultationResource } from "../consultationResources";

export const mississippiResources: ConsultationResource[] = [
  {
    name: "Mississippi Intellectual Disabilities/Developmental Disabilities Waiver",
    description:
      "Official Mississippi Medicaid information about the ID/DD Waiver, which provides home and community-based services and supports for eligible people with intellectual or developmental disabilities.",
    url: "https://medicaid.ms.gov/programs/intellectual-disabilitiesdevelopmental-disabilities-waiver/",
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
    states: ["Mississippi"],
  },

  {
    name: "Mississippi Department of Education - Special Education",
    description:
      "Official Mississippi special education information and family resources covering IDEA, educational services, district contacts, dispute resolution, and supports for students with disabilities.",
    url: "https://mdek12.org/specialeducation/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Mississippi"],
  },

  {
    name: "Mississippi Department of Mental Health - IDD Services",
    description:
      "Official Mississippi information about intellectual and developmental disability services, community supports, waiver services, supported employment, and pathways for accessing services.",
    url: "https://www.dmh.ms.gov/service-options/idd-services/",
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
    states: ["Mississippi"],
  },

  {
    name: "Mississippi Office of Vocational Rehabilitation",
    description:
      "Official Mississippi employment and transition services helping youth and adults with disabilities prepare for, obtain, and maintain competitive integrated employment.",
    url: "https://www.mdrs.ms.gov/vocational-rehabilitation",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Mississippi"],
  },
];