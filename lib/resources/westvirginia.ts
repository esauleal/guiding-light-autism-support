import type { ConsultationResource } from "../consultationResources";

export const westVirginiaResources: ConsultationResource[] = [
  {
    name: "West Virginia Intellectual/Developmental Disabilities Waiver",
    description:
      "Official West Virginia information about the IDDW program for eligible children and adults with intellectual or developmental disabilities who need home and community-based supports.",
    url: "https://iddwprogram.wv.gov/",
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
    states: ["West Virginia"],
  },

  {
    name: "West Virginia Department of Education - Individualized Education Program",
    description:
      "Official West Virginia information about standards-based IEPs, special education services, IDEA forms, family participation, educational needs, and student supports.",
    url: "https://wvde.us/academics/special-education/individualized-education-program-iep",
    focusAreas: [
      "IEP & School Support",
      "Adult Transition Planning",
    ],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["West Virginia"],
  },

  {
    name: "West Virginia Judiciary - Adult Guardianship",
    description:
      "Official West Virginia court information about adult guardianship, conservatorship, legal responsibilities, and the requirement to consider the protected person's independence and least restrictive supports.",
    url: "https://www.courtswv.gov/public-resources/mental-hygiene-and-guardian/mh-guardian-online-training",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["West Virginia"],
  },

  {
    name: "West Virginia Division of Rehabilitation Services",
    description:
      "Official West Virginia vocational rehabilitation services supporting youth and adults with disabilities in preparing for, obtaining, retaining, or advancing in employment.",
    url: "https://wvdrs.org/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["West Virginia"],
  },
];