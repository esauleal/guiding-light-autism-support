import type { ConsultationResource } from "../consultationResources";

export const iowaResources: ConsultationResource[] = [
  {
    name: "Iowa Medicaid - Home and Community-Based Services",
    description:
      "Official Iowa Medicaid information about home and community-based services and waiver programs for eligible people with disabilities, including intellectual and developmental disability supports.",
    url: "https://hhs.iowa.gov/medicaid/services-care/home-and-community-based-services",
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
    states: ["Iowa"],
  },

  {
    name: "Iowa Department of Education - Special Education",
    description:
      "Official Iowa information about special education, IDEA services, parent resources, eligibility, evaluations, state guidance, and supports for students with disabilities.",
    url: "https://educate.iowa.gov/pk-12/special-education",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Iowa"],
  },

  {
    name: "Iowa Office of the Public Guardian",
    description:
      "Official Iowa information about guardianship, conservatorship, powers of attorney, representative payee arrangements, and less restrictive alternatives intended to preserve individual independence.",
    url: "https://hhs.iowa.gov/family-community/adult-protective-services/office-public-guardian",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Iowa"],
  },

  {
    name: "Iowa Vocational Rehabilitation Services",
    description:
      "Official Iowa vocational rehabilitation services helping people with disabilities prepare for, obtain, maintain, and advance in employment, including services for students.",
    url: "https://workforce.iowa.gov/vr",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Iowa"],
  },
];