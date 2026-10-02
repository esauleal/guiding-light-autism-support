import type { ConsultationResource } from "../consultationResources";

export const tennesseeResources: ConsultationResource[] = [
  {
    name: "Tennessee Employment and Community First CHOICES",
    description:
      "Official Tennessee information about services and supports for people with intellectual and developmental disabilities that promote employment, independence, and community living.",
    url: "https://www.tn.gov/disability-and-aging/disability-aging-programs/ecf-choices.html",
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
    states: ["Tennessee"],
  },

  {
    name: "Tennessee Department of Education - Special Education",
    description:
      "Official Tennessee special education information covering IDEA, IEP requirements, state guidance, educational services, and supports for students with disabilities.",
    url: "https://www.tn.gov/education/families/student-support/special-education.html.html",
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
    states: ["Tennessee"],
  },

  {
    name: "Tennessee Supported Decision-Making",
    description:
      "Official Tennessee developmental disabilities resource helping people with disabilities and families understand supported decision-making and other decision-support options.",
    url: "https://www.tn.gov/cdd/current-priorities/supported-decision-making.html",
    focusAreas: ["Guardianship & Alternatives"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Tennessee"],
  },

  {
    name: "Tennessee Vocational Rehabilitation",
    description:
      "Official Tennessee vocational rehabilitation services helping people with disabilities prepare for the competitive job market, obtain employment, and advance in their careers.",
    url: "https://www.tn.gov/humanservices/ds/vocational-rehabilitation/vr-applying-for-services.html",
    focusAreas: ["Adult Transition Planning"],
    ageGroups: [
      "Pre-Teens (12-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["Tennessee"],
  },
];