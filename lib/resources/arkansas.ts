import type { ConsultationResource } from "../consultationResources";

export const arkansasResources: ConsultationResource[] = [
  {
    name: "Arkansas Developmental Disabilities Services",
    description:
      "Official Arkansas information about services and supports for children and adults with developmental disabilities, including Medicaid-related disability programs and community supports.",
    url: "https://humanservices.arkansas.gov/divisions-shared-services/developmental-disabilities-services/",
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
    states: ["Arkansas"],
  },

  {
    name: "Arkansas Community and Employment Support Waiver",
    description:
      "Official Arkansas information about the CES Waiver, which provides home and community-based services for eligible people with intellectual or developmental disabilities.",
    url: "https://humanservices.arkansas.gov/divisions-shared-services/developmental-disabilities-services/ces-waiver/",
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
    states: ["Arkansas"],
  },

  {
    name: "Arkansas Department of Education - Standards-Based IEPs",
    description:
      "Official Arkansas special education resources including early childhood, school-age, and postsecondary transition IEP forms and guidance.",
    url: "https://dese.ade.arkansas.gov/Offices/special-education/curriculum-assessment/standards-based-ieps",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Arkansas"],
  },

  {
    name: "Arkansas Rehabilitation Services - Pre-Employment Transition Services",
    description:
      "Official Arkansas transition services that help students with disabilities prepare for postsecondary education, employment, workplace readiness, and life after high school.",
    url: "https://dws.arkansas.gov/ar-rehabilitation-services/field-services/preemployment-transition-services/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Arkansas"],
  },
];