import type { ConsultationResource } from "../consultationResources";

export const massachusettsResources: ConsultationResource[] = [
  {
    name: "Massachusetts DDS Autism Waiver Program",
    description:
      "Official Massachusetts information about the Children's Autism Home and Community-Based Services Waiver Program, which provides intensive in-home supports to eligible young children with autism.",
    url: "https://www.mass.gov/info-details/dds-autism-waiver-service-program-overview",
    focusAreas: [
      "SSI & Government Benefits",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
    ],
    states: ["Massachusetts"],
  },

  {
    name: "Massachusetts DESE/DDS Program",
    description:
      "Official Massachusetts program supporting eligible students with developmental disabilities who receive special education services and need additional supports to remain at home and in their communities.",
    url: "https://www.mass.gov/info-details/desedds-frequently-asked-questions",
    focusAreas: [
      "IEP & School Support",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Massachusetts"],
  },

  {
    name: "Massachusetts - Alternatives to Guardianship and Conservatorship",
    description:
      "Official Massachusetts information about less restrictive alternatives including supported decision-making, powers of attorney, health care proxies, trusts, representative payees, and protective arrangements.",
    url: "https://www.mass.gov/info-details/alternatives-to-guardianship-and-conservatorship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Massachusetts"],
  },

  {
    name: "Massachusetts Vocational Rehabilitation - MassAbility",
    description:
      "Official Massachusetts vocational rehabilitation services helping people with disabilities explore careers, develop employment skills, obtain training, and prepare for or maintain employment.",
    url: "https://www.mass.gov/info-details/financial-assistance-for-people-with-disabilities",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Massachusetts"],
  },
];
