import type { ConsultationResource } from "../consultationResources";

export const kentuckyResources: ConsultationResource[] = [
  {
    name: "Kentucky Supports for Community Living Waiver",
    description:
      "Official Kentucky Medicaid information about the Supports for Community Living waiver for eligible people with intellectual or developmental disabilities who need community-based services and supports.",
    url: "https://www.chfs.ky.gov/agencies/dms/dca/Pages/scl-waiver.aspx",
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
    states: ["Kentucky"],
  },

  {
    name: "Kentucky Department of Education - ARC & IEP",
    description:
      "Official Kentucky guidance for Admissions and Release Committees and the development, implementation, and documentation of Individual Education Programs.",
    url: "https://www.education.ky.gov/specialed/excep/GuidanceResources/Pages/arciep.aspx",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Kentucky"],
  },

  {
    name: "Kentucky Adult Guardianship - Alternatives to Guardianship",
    description:
      "Official Kentucky guidance about adult guardianship and less restrictive alternatives including powers of attorney, representative payees, informal support networks, and supported decision-making.",
    url: "https://manuals-sp-chfs.ky.gov/A6/Pages/A6-3.aspx",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Kentucky"],
  },

  {
    name: "Kentucky Office of Vocational Rehabilitation",
    description:
      "Official Kentucky vocational rehabilitation services helping eligible people with disabilities prepare for employment, enter or re-enter the workforce, and pursue greater independence.",
    url: "https://kcc.ky.gov/Vocational-Rehabilitation/Pages/Kentucky-Office-of-Vocational-Rehabilitation.aspx",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Kentucky"],
  },
];
