import type { ConsultationResource } from "../consultationResources";

export const montanaResources: ConsultationResource[] = [
  {
    name: "Montana Developmental Disabilities Medicaid Waiver",
    description:
      "Official Montana information about the 0208 Comprehensive Medicaid HCBS Waiver, eligibility, waiting lists, and community-based services for people with intellectual and developmental disabilities.",
    url: "https://dphhs.mt.gov/BHDD/DisabilityServices/developmentaldisabilities/MedicaidDDP0208WaiverServices",
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
    states: ["Montana"],
  },

  {
    name: "Montana OPI - Special Education Family Resources",
    description:
      "Official Montana family resources covering the special education process, IEPs, procedural safeguards, secondary transition, dispute resolution, and educational supports.",
    url: "https://opi.mt.gov/Educators/School-Climate-Student-Wellness/Special-Education/Special-Education-Family-Resources",
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
    states: ["Montana"],
  },

  {
    name: "Montana Guardianship & Alternatives Resources",
    description:
      "Official Montana resources addressing guardianship, supported decision-making, and less restrictive alternatives to guardianship.",
    url: "https://dphhs.mt.gov/sltc/aging/legal/Training",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Montana"],
  },

  {
    name: "Montana Vocational Rehabilitation and Blind Services",
    description:
      "Official Montana vocational rehabilitation services supporting people with disabilities in pursuing competitive employment, careers, independence, and community participation.",
    url: "https://dphhs.mt.gov/detd/vocrehab/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Montana"],
  },
];
