import type { ConsultationResource } from "../consultationResources";

export const nevadaResources: ConsultationResource[] = [
  {
    name: "Nevada Developmental Services",
    description:
      "Official Nevada information about developmental disability eligibility, regional centers, service coordination, family supports, respite, supported living, employment services, and other community supports.",
    url: "https://adsd.nv.gov/programs/intellectual/intellectual/",
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
    states: ["Nevada"],
  },

  {
    name: "Nevada Department of Education - IEP Resources",
    description:
      "Official Nevada special education policies, procedures, eligibility resources, and Individualized Educational Program information for students with disabilities.",
    url: "https://doe.nv.gov/offices/office-of-comprehensive-student-services/policies-and-procedures/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Nevada"],
  },

  {
    name: "Nevada Courts - Guardianship & Supported Decision-Making",
    description:
      "Official Nevada court information explaining guardianship and less restrictive options, including supported decision-making agreements that allow adults with disabilities to retain control over their decisions.",
    url: "https://selfhelp.nvcourts.gov/self-help/guardianship/overview/purpose-and-types-of-a-guardianship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Nevada"],
  },

  {
    name: "Nevada Vocational Rehabilitation",
    description:
      "Official Nevada vocational rehabilitation services helping Nevadans with disabilities prepare for and pursue meaningful employment, including services for students and parents.",
    url: "https://vrnevada.nv.gov/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Nevada"],
  },
];
