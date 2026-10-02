import type { ConsultationResource } from "../consultationResources";

export const floridaResources: ConsultationResource[] = [
  {
    name: "Florida Agency for Persons with Disabilities - Medicaid Waiver Services",
    description:
      "Official Florida information about developmental disability services and home and community-based Medicaid programs, including the iBudget Florida waiver.",
    url: "https://apd.myflorida.com/services/medicaid.htm",
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
    states: ["Florida"],
  },

  {
    name: "Florida Department of Education - Exceptional Student Education",
    description:
      "Official Florida special education information and resources for students with disabilities, families, educators, and school districts.",
    url: "https://www.fldoe.org/academics/exceptional-student-edu/",
    focusAreas: ["IEP & School Support"],
    ageGroups: [
      "Early Childhood (0-3)",
      "School Age (4-11)",
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Florida"],
  },

  {
    name: "Florida Courts - Guardianship",
    description:
      "Official Florida Courts information explaining adult guardianship, limited guardianship, and the requirement to consider less restrictive alternatives when appropriate.",
    url: "https://www.flcourts.gov/Services/Family-Courts/domestic-relations-court-resources/Guardianship",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Florida"],
  },

  {
    name: "Florida Vocational Rehabilitation",
    description:
      "Official Florida vocational rehabilitation services helping people with disabilities prepare for employment, obtain work, maintain careers, and access transition services.",
    url: "https://www.rehabworks.org/",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Florida"],
  },

  {
    name: "Florida VR - Students and Youth",
    description:
      "Florida transition services helping students and youth with disabilities explore careers, prepare for employment, and continue education after high school.",
    url: "https://rehabworks.org/student-youth/student-steps.html",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
    ],
    states: ["Florida"],
  },
];