import { texasResources } from "./resources/texas";
import { alabamaResources } from "./resources/alabama";
import { alaskaResources } from "./resources/alaska";
import { arizonaResources } from "./resources/arizona";
import { arkansasResources } from "./resources/arkansas";
import { californiaResources } from "./resources/california";
import { coloradoResources } from "./resources/colorado";
import { connecticutResources } from "./resources/connecticut";
import { delawareResources } from "./resources/delaware";
import { floridaResources } from "./resources/florida";
import { georgiaResources } from "./resources/georgia";
import { hawaiiResources } from "./resources/hawaii";
import { idahoResources } from "./resources/idaho";
import { illinoisResources } from "./resources/illinois";
import { indianaResources } from "./resources/indiana";
import { iowaResources } from "./resources/iowa";
import { kansasResources } from "./resources/kansas";
import { kentuckyResources } from "./resources/kentucky";
import { louisianaResources } from "./resources/louisiana";
import { maineResources } from "./resources/maine";
import { marylandResources } from "./resources/maryland";
import { massachusettsResources } from "./resources/massachusetts";
import { michiganResources } from "./resources/michigan";
import { minnesotaResources } from "./resources/minnesota";
import { mississippiResources } from "./resources/mississippi";
import { missouriResources } from "./resources/missouri";
import { montanaResources } from "./resources/montana";
import { nebraskaResources } from "./resources/nebraska";
import { nevadaResources } from "./resources/nevada";
import { newHampshireResources } from "./resources/newhampshire";
import { newJerseyResources } from "./resources/newjersey";
import { newMexicoResources } from "./resources/newmexico";
import { newYorkResources } from "./resources/newyork";
import { northCarolinaResources } from "./resources/northcarolina";
import { northDakotaResources } from "./resources/northdakota";
import { ohioResources } from "./resources/ohio";
import { oklahomaResources } from "./resources/oklahoma";
import { oregonResources } from "./resources/oregon";
import { pennsylvaniaResources } from "./resources/pennsylvania";
import { rhodeIslandResources } from "./resources/rhodeisland";
import { southCarolinaResources } from "./resources/southcarolina";
import { southDakotaResources } from "./resources/southdakota";
import { tennesseeResources } from "./resources/tennessee";
import { utahResources } from "./resources/utah";
import { vermontResources } from "./resources/vermont";
import { virginiaResources } from "./resources/virginia";
import { washingtonResources } from "./resources/washington";
import { westVirginiaResources } from "./resources/westvirginia";
import { wisconsinResources } from "./resources/wisconsin";
import { wyomingResources } from "./resources/wyoming";


export type ConsultationResource = {
  name: string;
  description: string;
  url: string;
  focusAreas: string[];
  ageGroups: string[];
  states: string[];
};

export const consultationResources: ConsultationResource[] = [
    ...texasResources,
    ...alabamaResources,
    ...alaskaResources,
    ...arizonaResources,
    ...arkansasResources,
    ...californiaResources,
    ...coloradoResources,
    ...connecticutResources,
    ...delawareResources,
    ...floridaResources,
    ...georgiaResources,
    ...hawaiiResources,
    ...idahoResources,
    ...illinoisResources,
    ...indianaResources,
    ...iowaResources,
    ...kansasResources,
    ...kentuckyResources,
    ...louisianaResources,
    ...maineResources,
    ...marylandResources,
    ...massachusettsResources,
    ...michiganResources,
    ...minnesotaResources,
    ...mississippiResources,
    ...missouriResources,
    ...montanaResources,
    ...nebraskaResources,
    ...nevadaResources,
    ...newHampshireResources,
    ...newJerseyResources,
    ...newMexicoResources,
    ...newYorkResources,
    ...northCarolinaResources,
    ...northDakotaResources,
    ...ohioResources,
    ...oklahomaResources,
    ...oregonResources,
    ...pennsylvaniaResources,
    ...rhodeIslandResources,
    ...southCarolinaResources,
    ...southDakotaResources,
    ...tennesseeResources,
    ...utahResources,
    ...vermontResources,
    ...virginiaResources,
    ...washingtonResources,
    ...westVirginiaResources,
    ...wisconsinResources,
    ...wyomingResources,
    
  {
  name: "Social Security Administration - SSI",
  description:
    "Official information about Supplemental Security Income (SSI), including eligibility, applying for benefits, and support for children and adults with disabilities.",
  url: "https://www.ssa.gov/ssi",
  focusAreas: [
    "SSI & Government Benefits",
  ],
  ageGroups: [
    "Early Childhood (0-3)",
    "School Age (4-11)",
    "Pre-Teens (12-15)",
    "Transition Age (16-18)",
    "Adult (19+)",
  ],
  states: ["ALL"],
},

{
    name: "CDC — Autism Information and Family Resources",
    description:
      "CDC information about autism, developmental milestones, and resources that can help families better understand their child's needs. Useful for Guiding Light when preparing parent coaching consultations and identifying educational resources.",
    url: "https://www.cdc.gov/autism/",
    focusAreas: ["Parent Coaching"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

   {
    name: "Parent to Parent USA — Family Support Networks",
    description:
      "National network connecting families of individuals with disabilities and special healthcare needs to parent-to-parent support programs. Useful for Guiding Light when researching family support, peer mentoring, and parent coaching resources.",
    url: "https://www.p2pusa.org/",
    focusAreas: ["Parent Coaching"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

    {
    name: "ABLE National Resource Center — Disability Savings",
    description:
      "Educational resource about ABLE savings accounts, eligibility requirements, qualified disability expenses, and state ABLE programs. Useful for Guiding Light when researching financial planning options and preparing questions for families about long-term disability-related savings.",
    url: "https://www.ablenrc.org/",
    focusAreas: ["Financial Planning Guidance"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

    {
    name: "Special Needs Alliance — Trusts & Estate Planning",
    description:
      "National network of attorneys focused on special needs trusts, estate planning, public benefits, and long-term financial protection for individuals with disabilities. Useful for Guiding Light when researching legal planning resources and identifying qualified professionals for family referrals.",
    url: "https://www.specialneedsalliance.org/",
    focusAreas: ["Financial Planning Guidance"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

  {
    name: "Behavior Analyst Certification Board — Provider Verification",
    description:
      "Official organization responsible for certifying behavior analysts. Useful for Guiding Light when researching behavioral service providers, verifying professional credentials, and helping families identify qualified behavioral specialists.",
    url: "https://www.bacb.com/",
    focusAreas: ["Behavioral Services"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

  {
    name: "Association for Behavior Analysis International — Behavioral Research",
    description:
      "Professional organization providing information about behavior analysis, research, conferences, and professional development. Useful for Guiding Light when researching evidence-based behavioral approaches, understanding available services, and preparing questions for qualified behavioral professionals.",
    url: "https://www.abainternational.org/",
    focusAreas: ["Behavioral Services"],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

  {
    name: "211 — Community Assistance & Family Resources",
    description:
      "National information and referral network connecting individuals and families with local community assistance programs. Useful for Guiding Light when researching transportation, housing, food assistance, utility support, childcare, and other services based on a family's individual needs. Availability varies by location.",
    url: "https://www.211.org/",
    focusAreas: [
      "Other Resources Specific to Your Family's Needs",
    ],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

  {
    name: "The Arc — Disability & Family Support Resources",
    description:
      "National organization supporting individuals with intellectual and developmental disabilities and their families. Provides information about advocacy, community services, housing, employment, family support, and local chapters. Useful for Guiding Light when researching individualized services and identifying community resources.",
    url: "https://thearc.org/",
    focusAreas: [
      "Other Resources Specific to Your Family's Needs",
    ],
    ageGroups: [
      "Early Childhood (0-5)",
      "School Age (6-12)",
      "Pre-Teen (13-15)",
      "Transition Age (16-18)",
      "Adult (19+)",
    ],
    states: ["ALL"],
  },

];

export function getMatchingResources(
  state: string,
  childAge: string,
  focusAreas: string[]
) {
  return consultationResources.filter((resource) => {
    const stateMatch =
    resource.states.includes("ALL") || resource.states.includes(state);
    const ageMatch = resource.ageGroups.includes(childAge);
    const focusMatch = resource.focusAreas.some((area) =>
      focusAreas.includes(area)
    );

    return stateMatch && ageMatch && focusMatch;
  });
}

export type RoadmapStep = {
  title: string;
  description: string;
  focusArea: string;
};

export function getRoadmapSteps(focusAreas: string[]): RoadmapStep[] {
  const steps: RoadmapStep[] = [];
if (focusAreas.includes("SSI & Government Benefits")) {
  steps.push({
    title: "Explore SSI & Government Benefits",
    description:
      "Review potential eligibility for SSI and other government benefit programs. Gather important household, financial, medical, and disability-related information before beginning the application process.",
    focusArea: "SSI & Government Benefits",
  });

  steps.push({
  title: "Review SSI Eligibility Factors",
  description:
    "Review the major factors that may affect SSI eligibility, including the child's age, disability-related limitations, household or individual income, resources, and living arrangements. Identify questions or circumstances that GLAFS may need to research further before the consultation.",
  focusArea: "SSI & Government Benefits",
});

steps.push({
  title: "Gather Documents & Supporting Information",
  description:
    "Identify documents and information the family may need when exploring or applying for SSI, such as medical records, evaluations, school records, IEP documentation, provider information, financial records, and information about the child's daily support needs. Note any missing documentation the family may need help locating or organizing.",
  focusArea: "SSI & Government Benefits",
});

steps.push({
  title: "Understand the SSI Application & Review Process",
  description:
    "Review the general SSI application process, including how families can begin an application, what information may be requested, and what to expect during the eligibility review. Identify questions about the family's specific situation that may require additional research, and help the family prepare questions to ask the Social Security Administration.",
  focusArea: "SSI & Government Benefits",
});

steps.push({
  title: "Create a Family Benefits Action Plan",
  description:
    "Bring the family's SSI and government benefits priorities together into a clear action plan. Identify important next steps, documents that may still be needed, agencies to contact, questions the family should ask, and any areas where GLAFS can provide additional research or support.",
  focusArea: "SSI & Government Benefits",
});

}

if (focusAreas.includes("IEP & School Support")) {
  steps.push({
    title: "Review the Child's Current IEP & School Supports",
    description:
      "Review the child's current IEP, evaluations, accommodations, services, goals, and educational supports. Identify the family's primary concerns, areas that appear to be working well, and questions that may need further review before the consultation.",
    focusArea: "IEP & School Support",
  });
  steps.push({
  title: "Review IEP Goals, Services & Accommodations",
  description:
    "Review the child's current IEP goals, special education services, related services, accommodations, modifications, and supports. Identify areas the family may want to discuss with the school and questions GLAFS can help the family organize or research before the consultation.",
  focusArea: "IEP & School Support",
});

steps.push({
  title: "Review Evaluations & Educational Needs",
  description:
    "Review available school evaluations, assessments, progress reports, and other educational information to better understand the child's current needs. Identify areas where additional evaluation, clarification, or discussion with the school may be helpful and note questions GLAFS can research or review with the family.",
  focusArea: "IEP & School Support",
});

steps.push({
  title: "Prepare for School Meetings & Advocacy",
  description:
    "Help the family prepare for IEP, ARD, or other school meetings by identifying their priorities, concerns, questions, and requested supports. Organize important information the family may want to discuss with the school and identify areas where GLAFS can provide additional research, preparation, or family support.",
  focusArea: "IEP & School Support",
});

steps.push({
  title: "Create a Family School Support Action Plan",
  description:
    "Bring the family's education priorities together into a clear action plan. Identify important next steps, questions to ask the school, documents or records the family may need, upcoming meetings or follow-ups, and areas where GLAFS can provide additional research or support.",
  focusArea: "IEP & School Support",
});

}

if (focusAreas.includes("Guardianship & Alternatives")) {
  steps.push({
    title: "Explore Guardianship & Less Restrictive Alternatives",
    description:
      "Learn about guardianship and alternatives such as supported decision-making, powers of attorney, and other legal supports. Consider your child's abilities, support needs, and level of independence before deciding which option may be appropriate for your family.",
    focusArea: "Guardianship & Alternatives",
  });

  steps.push({
  title: "Review the Child's Decision-Making & Support Needs",
  description:
    "Review the child's current abilities, support needs, communication, daily living skills, safety needs, and level of independence. Identify areas where the child may be able to make decisions independently and areas where additional support may be needed as the family plans for adulthood.",
  focusArea: "Guardianship & Alternatives",
});

steps.push({
  title: "Compare Guardianship & Less Restrictive Alternatives",
  description:
    "Review guardianship alongside less restrictive options such as supported decision-making agreements, powers of attorney, representative payee arrangements, and other available supports. Discuss how the different options may relate to the child's abilities and support needs, and identify questions that may require additional legal or professional guidance.",
  focusArea: "Guardianship & Alternatives",
});

steps.push({
  title: "Identify Planning, Documentation & Professional Resources",
  description:
    "Identify information and documents the family may need as they explore guardianship or alternatives, including evaluations, medical or educational records, identification documents, and information about the child's support needs. Identify appropriate state resources and questions the family may want to discuss with an attorney or other qualified professional.",
  focusArea: "Guardianship & Alternatives",
});

steps.push({
  title: "Create a Family Decision-Support Action Plan",
  description:
    "Bring the family's priorities and concerns together into a clear action plan. Identify important next steps, resources to review, professionals or agencies to contact, documents to gather, questions that still need answers, and areas where GLAFS can provide additional research or support.",
  focusArea: "Guardianship & Alternatives",
});

}
if (focusAreas.includes("Adult Transition Planning")) {
  steps.push({
    title: "Plan for the Transition to Adulthood",
    description:
      "Begin planning for life after high school by reviewing education, employment, independent living, transportation, healthcare, and community support needs. Identify important services and supports your child may need as they move into adulthood.",
    focusArea: "Adult Transition Planning",
  });


steps.push({
  title: "Explore Education, Employment & Vocational Services",
  description:
    "Explore education, job training, vocational rehabilitation, and employment supports that may help your child prepare for adulthood. Identify programs that match your child's strengths, interests, abilities, and support needs.",
  focusArea: "Adult Transition Planning",
});

steps.push({
  title: "Review Independent Living & Daily Support Needs",
  description:
    "Review the child's current level of independence and support needs in areas such as communication, personal care, daily routines, transportation, money management, safety, and community participation. Identify areas the family would like to strengthen and supports that may need further research or planning.",
  focusArea: "Adult Transition Planning",
});

steps.push({
  title: "Prepare for Adult Benefits & Services",
  description:
    "Review benefits and services that may become important as the child approaches adulthood, including SSI, Medicaid, waiver programs, vocational services, and other community-based supports. Identify programs the family may want GLAFS to research further, including eligibility requirements, application timelines, and important next steps.",
  focusArea: "Adult Transition Planning",
});

steps.push({
  title: "Create a Family Transition Action Plan",
  description:
    "Bring the family's transition priorities together into a clear action plan. Identify the most important next steps, questions that still need answers, agencies or programs to contact, documents the family may need, and areas where GLAFS can provide additional research or support.",
  focusArea: "Adult Transition Planning",
});

}

if (focusAreas.includes("Parent Coaching")) {
    steps.push({
      title: "Identify Your Family's Coaching Priorities",
      description:
        "Identify the daily challenges, caregiving responsibilities, and family concerns where additional guidance would be most helpful. Consider what strategies have already been tried and what goals your family would like to achieve.",
      focusArea: "Parent Coaching",
    });

    steps.push({
      title: "Explore Parent Coaching and Family Support",
      description:
        "Explore parent coaching, educational resources, and family support programs that address your family's specific needs. Identify practical strategies and community resources that can help strengthen daily routines and family well-being.",
      focusArea: "Parent Coaching",
    });

    steps.push({
      title: "Create a Personalized Family Support Plan",
      description:
        "Work toward a practical plan that identifies your family's priorities, available support systems, and achievable next steps. Consider follow-up guidance and resources as your family's needs evolve.",
      focusArea: "Parent Coaching",
    });
  }

  if (focusAreas.includes("Financial Planning Guidance")) {
    steps.push({
      title: "Identify Your Family's Financial Planning Priorities",
      description:
        "Review your family's current financial concerns and long-term goals, including caregiving expenses, future housing needs, and financial security for your loved one with autism or another disability.",
      focusArea: "Financial Planning Guidance",
    });

    steps.push({
      title: "Explore Disability-Related Financial Resources",
      description:
        "Learn about ABLE accounts, special needs trusts, SSI, Medicaid, and other available financial assistance programs. Identify eligibility requirements and questions about how different financial arrangements may affect government benefits.",
      focusArea: "Financial Planning Guidance",
    });

    steps.push({
      title: "Connect With Qualified Planning Professionals",
      description:
        "Identify qualified financial planners, special needs planning attorneys, or benefits specialists who can provide individualized advice. Prepare questions about long-term financial protection, estate planning, and future caregiving arrangements.",
      focusArea: "Financial Planning Guidance",
    });
  }

  if (focusAreas.includes("Behavioral Services")) {
    steps.push({
      title: "Identify Behavioral Support Needs",
      description:
        "Identify the behaviors, communication challenges, or sensory concerns affecting your family's daily life. Document when challenges occur, possible triggers, and strategies that have already been attempted.",
      focusArea: "Behavioral Services",
    });

    steps.push({
      title: "Explore Behavioral Services and Therapy Options",
      description:
        "Research available behavioral support services, including qualified behavioral specialists, ABA providers, and other appropriate therapy programs. Consider the individual's needs, family preferences, provider qualifications, and insurance coverage.",
      focusArea: "Behavioral Services",
    });

    steps.push({
      title: "Develop a Behavioral Support Resource Plan",
      description:
        "Identify potential providers, referral requirements, and next steps for obtaining appropriate behavioral support. Prepare questions for qualified professionals about individualized assessments, family involvement, and ongoing services.",
      focusArea: "Behavioral Services",
    });
  }

   if (
    focusAreas.includes(
      "Other Resources Specific to Your Family's Needs"
    )
  ) {
    steps.push({
      title: "Identify Your Family's Unique Support Needs",
      description:
        "Describe the specific challenges, services, or resources your family is looking for. Identify your most urgent priorities, existing support systems, and any barriers to accessing assistance.",
      focusArea: "Other Resources Specific to Your Family's Needs",
    });

    steps.push({
      title: "Research Personalized Community Resources",
      description:
        "Explore programs and services based on your family's individual circumstances, location, and needs. These may include respite care, childcare, day programs, transportation, housing assistance, support groups, or specialized providers.",
      focusArea: "Other Resources Specific to Your Family's Needs",
    });

    steps.push({
      title: "Create an Individualized Resource Action Plan",
      description:
        "Organize relevant resources, contact information, eligibility requirements, and recommended next steps. Prioritize the most helpful options and identify opportunities for additional family guidance or resource navigation.",
      focusArea: "Other Resources Specific to Your Family's Needs",
    });
  }

  return steps;
}

export type ConsultationQuestion = {
  question: string;
  focusArea: string;
};

export function getConsultationQuestions(
  focusAreas: string[]
): ConsultationQuestion[] {
  const questions: ConsultationQuestion[] = [];

  if (focusAreas.includes("SSI & Government Benefits")) {
  questions.push(
    {
      question:
        "Has the child already applied for or received SSI, Medicaid, or other government benefits?",
      focusArea: "SSI & Government Benefits",
    },
    {
      question:
        "What questions or concerns does the family currently have about SSI eligibility, income, resources, or living arrangements?",
      focusArea: "SSI & Government Benefits",
    },
    {
      question:
        "What medical, school, or disability-related documentation does the family currently have available?",
      focusArea: "SSI & Government Benefits",
    },
    {
      question:
        "Has the family received any previous SSI decisions, notices, denials, or requests for additional information?",
      focusArea: "SSI & Government Benefits",
    },
    {
      question:
        "What benefits-related issue would the family most like help understanding or researching during this consultation?",
      focusArea: "SSI & Government Benefits",
    }
  );
}
if (focusAreas.includes("IEP & School Support")) {
  questions.push(
    {
      question:
        "What are the family's biggest concerns about the child's current IEP, services, accommodations, or school supports?",
      focusArea: "IEP & School Support",
    },
    {
      question:
        "When was the child's most recent ARD or IEP meeting, and were there any issues the family felt were not fully addressed?",
      focusArea: "IEP & School Support",
    },
    {
      question:
        "Does the family have a current copy of the IEP, recent evaluations, progress reports, and other relevant school documentation?",
      focusArea: "IEP & School Support",
    },
    {
      question:
        "Are the services and accommodations listed in the IEP currently being provided as the family understands them?",
      focusArea: "IEP & School Support",
    },
    {
      question:
        "What school-related issue would the family most like GLAFS to help them understand, organize, or research before their next meeting with the school?",
      focusArea: "IEP & School Support",
    }
  );
}

if (focusAreas.includes("Guardianship & Alternatives")) {
  questions.push(
    {
      question:
        "What decisions or areas of daily life does the family believe the child may need help managing as they approach adulthood?",
      focusArea: "Guardianship & Alternatives",
    },
    {
      question:
        "What decisions is the child currently able to make independently, and where does the family currently provide significant support?",
      focusArea: "Guardianship & Alternatives",
    },
    {
      question:
        "Has the family already explored guardianship, supported decision-making, powers of attorney, or other alternatives?",
      focusArea: "Guardianship & Alternatives",
    },
    {
      question:
        "Are there upcoming age-related deadlines, school transitions, medical decisions, financial matters, or benefit issues influencing the family's planning?",
      focusArea: "Guardianship & Alternatives",
    },
    {
      question:
        "What questions would the family like GLAFS to help research before they speak with an attorney or other appropriate professional?",
      focusArea: "Guardianship & Alternatives",
    }
  );
}

if (focusAreas.includes("Adult Transition Planning")) {
  questions.push(
    {
      question:
        "What are the family's biggest concerns about the child's transition from school into adulthood?",
      focusArea: "Adult Transition Planning",
    },
    {
      question:
        "What are the child's current strengths, interests, abilities, and areas where they need the most support?",
      focusArea: "Adult Transition Planning",
    },
    {
      question:
        "What plans are currently in place for education, employment, vocational training, or meaningful daytime activities after high school?",
      focusArea: "Adult Transition Planning",
    },
    {
      question:
        "What level of support does the child currently need with communication, personal care, transportation, money management, safety, daily routines, or community participation?",
      focusArea: "Adult Transition Planning",
    },
    {
      question:
        "What services, programs, benefits, or community supports has the family already explored, and what areas would they like GLAFS to research further?",
      focusArea: "Adult Transition Planning",
    }
  );
}

if (focusAreas.includes("Parent Coaching")) {
    questions.push(
      {
        question:
          "What are the biggest day-to-day challenges your family is currently experiencing?",
        focusArea: "Parent Coaching",
      },
      {
        question:
          "What parenting strategies or support services have you already tried, and how effective have they been?",
        focusArea: "Parent Coaching",
      },
      {
        question:
          "Are there specific routines, communication challenges, or caregiving responsibilities where you would like additional guidance?",
        focusArea: "Parent Coaching",
      },
      {
        question:
          "What goals would you like to accomplish through parent coaching and family support?",
        focusArea: "Parent Coaching",
      }
    );
  }

  if (focusAreas.includes("Financial Planning Guidance")) {
    questions.push(
      {
        question:
          "What are your family's biggest financial concerns regarding your loved one's current and future needs?",
        focusArea: "Financial Planning Guidance",
      },
      {
        question:
          "Does your loved one currently receive SSI, Medicaid, or other disability-related financial benefits?",
        focusArea: "Financial Planning Guidance",
      },
      {
        question:
          "Has your family explored ABLE accounts, special needs trusts, or other long-term financial planning options?",
        focusArea: "Financial Planning Guidance",
      },
      {
        question:
          "Would your family benefit from resources or referrals to qualified financial planners, special needs planning attorneys, or benefits specialists?",
        focusArea: "Financial Planning Guidance",
      }
    );
  }

  if (focusAreas.includes("Behavioral Services")) {
    questions.push(
      {
        question:
          "What specific behavioral challenges or concerns is your family currently experiencing?",
        focusArea: "Behavioral Services",
      },
      {
        question:
          "When and where do these behaviors typically occur, and have you noticed any patterns or triggers?",
        focusArea: "Behavioral Services",
      },
      {
        question:
          "Has your loved one received a behavioral assessment, participated in ABA therapy, or received other behavioral support services?",
        focusArea: "Behavioral Services",
      },
      {
        question:
          "What strategies or interventions have already been attempted, and how effective have they been?",
        focusArea: "Behavioral Services",
      },
      {
        question:
          "Would your family benefit from assistance locating qualified behavioral specialists, therapy providers, or other appropriate support services?",
        focusArea: "Behavioral Services",
      }
    );
  }

   if (
    focusAreas.includes(
      "Other Resources Specific to Your Family's Needs"
    )
  ) {
    questions.push(
      {
        question:
          "What specific services, programs, or resources is your family currently looking for?",
        focusArea: "Other Resources Specific to Your Family's Needs",
      },
      {
        question:
          "What are the biggest challenges preventing your family from accessing the support you need?",
        focusArea: "Other Resources Specific to Your Family's Needs",
      },
      {
        question:
          "Have you already contacted any providers, community organizations, or support programs?",
        focusArea: "Other Resources Specific to Your Family's Needs",
      },
      {
        question:
          "Are there specific concerns involving respite care, transportation, childcare, housing, or other family support services?",
        focusArea: "Other Resources Specific to Your Family's Needs",
      },
      {
        question:
          "What would be the most helpful outcome for your family from this consultation?",
        focusArea: "Other Resources Specific to Your Family's Needs",
      }
    );
  }

  return questions;
}
export function getConsultationChecklist(focusAreas: string[]): string[] {
    const checklist: string[] = [];

    checklist.push(
        "Review the family's submitted consultation information and selected focus areas."
    );
if (focusAreas.includes("IEP & School Support")) {
    checklist.push(
        "Obtain and review the child's current IEP.",
        "Review the child's most recent evaluations and progress reports.",
        "Identify the family's primary concerns about services, accommodations, goals, or school supports.",
        "Confirm the date of the most recent ARD or IEP meeting.",
        "Identify upcoming school meetings, evaluations, or important deadlines.",
        "Prepare questions or topics the family may want to discuss with the school."
    );
}

if (focusAreas.includes("Guardianship & Alternatives")) {
    checklist.push(
        "Review the child's current decision-making abilities and support needs.",
        "Identify areas where the child can make decisions independently and where significant support is needed.",
        "Determine whether the family has already explored guardianship or less restrictive alternatives.",
        "Review options such as supported decision-making, powers of attorney, representative payee arrangements, and other available supports.",
        "Identify upcoming age-related deadlines, medical decisions, financial matters, or benefit issues that may affect planning.",
        "Prepare questions that may require review with an attorney or other qualified professional."
    );
}

if (focusAreas.includes("Adult Transition Planning")) {
    checklist.push(
        "Review the child's current transition plan and goals for adulthood.",
        "Identify plans for education, employment, vocational training, or meaningful daytime activities.",
        "Review the child's current level of independence with communication, personal care, transportation, safety, and daily living skills.",
        "Identify services, programs, or community supports the family has already explored.",
        "Review adult benefits and services that may become important as the child approaches adulthood.",
        "Identify important transition deadlines, applications, evaluations, or documents the family may need.",
        "Prepare questions about education, employment, independent living, benefits, and long-term support needs."
    );
}

if (focusAreas.includes("SSI & Government Benefits")) {
    checklist.push(
        "Review the family's current benefits situation and determine which programs they are already receiving or exploring.",
        "Identify any previous SSI applications, decisions, denials, notices, or requests for additional information.",
        "Gather relevant benefit notices, eligibility letters, financial information, and supporting documentation.",
        "Identify upcoming deadlines, appeals, reviews, or benefit-related decisions that may require attention.",
        "Review other government programs or services that may be relevant to the family's situation.",
        "Prepare the family's highest-priority questions about eligibility, applications, documentation, or next steps."
    );
}

 if (focusAreas.includes("Parent Coaching")) {
    checklist.push(
      "Identify the biggest day-to-day challenges your family would like help addressing.",
      "Write down parenting strategies, routines, or support approaches you have already tried.",
      "Consider which family members or caregivers would benefit from additional guidance.",
      "List any communication, caregiving, or family support concerns you would like to discuss.",
      "Prepare two or three goals you would like to accomplish through parent coaching."
    );
  }

  if (focusAreas.includes("Financial Planning Guidance")) {
    checklist.push(
      "Identify your family's immediate financial concerns and long-term planning goals.",
      "List any disability-related benefits your loved one currently receives, such as SSI or Medicaid.",
      "Note whether your family has established an ABLE account, special needs trust, or other financial planning arrangements.",
      "Prepare a general overview of anticipated caregiving, housing, education, or support expenses.",
      "Write down questions about financial assistance programs, benefit eligibility, and available planning resources.",
      "Identify whether your family would benefit from referrals to qualified financial planners, attorneys, or benefits specialists."
    );
  }

  if (focusAreas.includes("Behavioral Services")) {
    checklist.push(
      "Identify the specific behavioral challenges or concerns your family would like assistance addressing.",
      "Write down when and where these behaviors typically occur, including any patterns or possible triggers.",
      "List any behavioral strategies, interventions, or support approaches your family has already tried.",
      "Gather any existing behavioral assessments, therapy recommendations, or support plans you are comfortable discussing.",
      "Identify current behavioral therapy providers or services and any concerns about their effectiveness or availability.",
      "Prepare questions about behavioral assessments, therapy options, insurance coverage, and qualified service providers."
    );
  }

   if (
    focusAreas.includes(
      "Other Resources Specific to Your Family's Needs"
    )
  ) {
    checklist.push(
      "Identify the specific services, programs, or resources your family is currently seeking.",
      "Write down your family's most urgent needs and the challenges you would like help addressing.",
      "List any providers, community organizations, or support programs you have already contacted.",
      "Identify barriers such as cost, transportation, eligibility, accessibility, or service availability.",
      "Prepare questions about local resources, respite care, childcare, day programs, housing, or other specialized support services.",
      "Consider what a successful outcome from your consultation would look like for your family."
    );
  }

    return checklist;
}

