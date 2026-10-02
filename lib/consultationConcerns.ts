export type ConcernMatch = {
  category: string;
  focusArea: string;
  keywords: string[];
  preparationNotes: string[];
  suggestedQuestions: string[];
};

export const concernMatches: ConcernMatch[] = [
  {
    category: "School Behavior & Discipline",
    focusArea: "IEP & School Support",

    keywords: [
      "behavior",
      "behaviour",
      "meltdown",
      "meltdowns",
      "aggressive",
      "aggression",
      "hitting",
      "biting",
      "kicking",
      "suspension",
      "suspended",
      "discipline",
      "sent home",
      "sending home",
      "removed from class",
      "classroom behavior",
    ],

    preparationNotes: [
      "Review whether behavior is interfering with the child's learning or access to instruction.",
      "Gather behavior reports, disciplinary notices, incident reports, and relevant school communication.",
      "Review whether the child's IEP currently includes behavioral goals, accommodations, or supports.",
      "Determine whether the school has conducted or discussed a Functional Behavioral Assessment (FBA) or Behavior Intervention Plan (BIP).",
    ],

    suggestedQuestions: [
      "How often is the child being removed from class, disciplined, suspended, or sent home because of behavior?",
      "Has the school conducted a Functional Behavioral Assessment (FBA)?",
      "Does the child currently have a Behavior Intervention Plan (BIP)?",
      "What behavioral supports, accommodations, or strategies are currently included in the child's IEP?",
    ],
  },
   {
    category: "IEP Services & Accommodations Not Being Provided",
    focusArea: "IEP & School Support",

    keywords: [
      "not following iep",
      "not following the iep",
      "not providing services",
      "services not provided",
      "not receiving services",
      "not getting services",
      "accommodations not provided",
      "not providing accommodations",
      "not receiving accommodations",
      "not following accommodations",
      "missing services",
      "iep not being followed",
      "school not following",
      "service minutes",
      "missed services",
    ],

    preparationNotes: [
      "Review the child's current IEP and identify the specific services, accommodations, or supports the family believes are not being provided.",
      "Gather school communication, progress reports, service records, schedules, and other documentation related to the family's concern.",
      "Identify when the family first noticed the issue and whether they have already raised the concern with the school.",
      "Compare the family's concern with the services, accommodations, frequency, duration, and location described in the current IEP.",
    ],

    suggestedQuestions: [
      "Which specific IEP services, accommodations, or supports does the family believe are not being provided?",
      "How long has the family been concerned that these services or accommodations are not being provided?",
      "Has the family already discussed the concern with the teacher, case manager, special education department, or school administration?",
      "What documentation or communication does the family have regarding missed services or accommodations?",
    ],
  },
    {
    category: "School Evaluation & Testing Concerns",
    focusArea: "IEP & School Support",

    keywords: [
      "evaluation",
      "evaluations",
      "reevaluation",
      "re-evaluation",
      "testing",
      "tested",
      "school won't test",
      "school will not test",
      "won't evaluate",
      "will not evaluate",
      "refused evaluation",
      "denied evaluation",
      "denied testing",
      "requested evaluation",
      "request evaluation",
      "needs evaluation",
      "need another evaluation",
      "new evaluation",
      "additional testing",
      "full individual evaluation",
      "fie",
    ],

    preparationNotes: [
      "Review the child's most recent school evaluations, assessments, eligibility information, and current IEP.",
      "Identify the specific areas the family believes require additional evaluation or clarification.",
      "Determine whether the family has already requested an evaluation or reevaluation and gather any related written communication.",
      "Identify relevant dates, previous evaluation results, school responses, and upcoming meetings that may affect the family's next steps.",
    ],

    suggestedQuestions: [
      "When was the child's most recent school evaluation or reevaluation?",
      "What areas does the family believe need additional evaluation or testing?",
      "Has the family already requested an evaluation or reevaluation from the school?",
      "If a request was made, how did the school respond and does the family have that response in writing?",
      "Are there new academic, behavioral, communication, developmental, or functional concerns that were not addressed in the previous evaluation?",
    ],
  },
    {
    category: "SSI Application or Denial",
    focusArea: "SSI & Government Benefits",

    keywords: [
      "ssi",
      "social security",
      "disability benefits",
      "apply for ssi",
      "applying for ssi",
      "ssi application",
      "ssi denied",
      "denied ssi",
      "ssi denial",
      "denied benefits",
      "benefits denied",
      "appeal ssi",
      "ssi appeal",
      "social security denied",
      "social security denial",
    ],

    preparationNotes: [
      "Determine whether the family is exploring SSI for the first time, currently applying, or responding to a decision from the Social Security Administration.",
      "Gather any SSI application records, Social Security notices, denial letters, requests for information, or other correspondence the family has received.",
      "Review what medical, educational, disability-related, financial, and household information the family currently has available.",
      "Identify any dates or deadlines shown on Social Security notices that the family may need to address.",
      "Separate questions GLAFS can help research and organize from issues that may require guidance directly from the Social Security Administration or a qualified professional.",
    ],

    suggestedQuestions: [
      "Has the family already submitted an SSI application for the child or adult with a disability?",
      "Has Social Security issued a decision, denial, or request for additional information?",
      "What reason, if any, was provided in the notice the family received?",
      "Are there any dates or deadlines listed on the Social Security notice?",
      "What medical, school, disability-related, financial, or household documentation does the family currently have available?",
    ],
  },
    {
    category: "Guardianship vs. Alternatives",
    focusArea: "Guardianship & Alternatives",

    keywords: [
      "guardianship",
      "guardian",
      "legal guardian",
      "need guardianship",
      "get guardianship",
      "apply for guardianship",
      "supported decision making",
      "supported decision-making",
      "power of attorney",
      "powers of attorney",
      "poa",
      "turning 18",
      "turns 18",
      "age 18",
      "adult rights",
      "make decisions",
      "decision making",
      "decision-making",
    ],

    preparationNotes: [
      "Review the individual's current decision-making abilities, communication needs, daily living skills, safety needs, and level of independence.",
      "Identify the specific decisions or areas of life where the family believes additional support may be needed after adulthood.",
      "Determine whether the family has already explored guardianship, supported decision-making, powers of attorney, representative payee arrangements, or other less restrictive supports.",
      "Identify any upcoming age-related deadlines, medical decisions, educational transitions, financial matters, or benefit issues influencing the family's planning.",
      "Prepare state-specific guardianship and alternatives resources while distinguishing general family support from legal advice that should come from a qualified attorney or other professional.",
    ],

    suggestedQuestions: [
      "What decisions can the individual currently make independently, and where do they need significant support?",
      "What specific concerns are causing the family to consider guardianship or another decision-support arrangement?",
      "Has the family explored supported decision-making or other less restrictive alternatives to guardianship?",
      "Is the individual approaching an important age or transition, such as turning 18 or leaving high school?",
      "Has the family already spoken with an attorney or another qualified professional about their state's options and requirements?",
    ],
  },
{
    category: "Life After High School",
    focusArea: "Adult Transition Planning",

    keywords: [
      "after high school",
      "after graduation",
      "graduating",
      "graduates",
      "graduation",
      "leaving high school",
      "finish school",
      "finishes school",
      "turning 18",
      "turns 18",
      "transition to adulthood",
      "transitioning to adulthood",
      "adult services",
      "what happens next",
      "what comes next",
      "future planning",
      "life after school",
      "after school",
    ],

    preparationNotes: [
      "Review the family's current plans and concerns for the individual's transition from school into adulthood.",
      "Identify existing transition goals and services included in the individual's IEP or transition plan, when applicable.",
      "Review plans for education, employment, vocational training, meaningful daytime activities, transportation, independent living, and community participation.",
      "Identify adult agencies, benefits, waiver programs, vocational rehabilitation services, or community supports the family has already contacted or applied for.",
      "Identify important applications, eligibility processes, waiting lists, documents, or age-related deadlines the family may need to address.",
    ],

    suggestedQuestions: [
      "What is the family's biggest concern about what will happen after high school?",
      "What does the individual currently want to do after leaving school?",
      "What plans are currently in place for education, employment, vocational training, or meaningful daytime activities?",
      "What adult services, benefits, waiver programs, or vocational services has the family already explored or applied for?",
      "What areas of daily life will the individual likely continue to need support with as they move into adulthood?",
    ],
  },
  {
  category: "IEP/ARD Disagreement & School Conflict",
  focusArea: "IEP & School Support",

  keywords: [
    "disagree with iep",
    "disagree with the iep",
    "don't agree with iep",
    "do not agree with iep",
    "iep disagreement",
    "ard disagreement",
    "ard meeting",
    "iep meeting",
    "school won't listen",
    "school will not listen",
    "school refuses",
    "school refused",
    "school denied",
    "denied my request",
    "refused my request",
    "school won't help",
    "school will not help",
    "disagree with placement",
    "disagree with services",
    "disagree with goals",
    "change placement",
    "change the iep",
  ],

  preparationNotes: [
    "Identify the specific IEP, ARD, placement, service, accommodation, goal, or school decision the family disagrees with.",
    "Gather the current IEP, meeting notices, prior written notices, evaluations, progress reports, emails, and other relevant school communication.",
    "Determine what the family requested, how the school responded, and whether the school's response was provided in writing.",
    "Identify upcoming IEP or ARD meetings, evaluation dates, deadlines, or other time-sensitive school matters.",
    "Separate issues GLAFS can help the family understand and organize from matters that may require assistance from an advocate, attorney, or other qualified professional.",
  ],

  suggestedQuestions: [
    "What specific school decision, IEP provision, service, placement, accommodation, or goal does the family disagree with?",
    "What change or outcome has the family asked the school to consider?",
    "How has the school responded to the family's request or concern?",
    "Does the family have the school's response or decision in writing?",
    "Is there an upcoming IEP or ARD meeting or another important school deadline?",
  ],
},
{
  category: "Medicaid Waivers & Disability Services",
  focusArea: "SSI & Government Benefits",

  keywords: [
    "medicaid waiver",
    "medicaid waivers",
    "waiver",
    "waivers",
    "waiver program",
    "waiver services",
    "waiting list",
    "waitlist",
    "interest list",
    "hcbs",
    "home and community based services",
    "home and community-based services",
    "developmental disability services",
    "disability services",
    "state services",
    "caregiver services",
    "caregiver hours",
    "attendant services",
    "personal attendant",
    "respite",
    "respite care",
    "in home services",
    "in-home services",
    "service coordinator",
    "case manager",
  ],

  preparationNotes: [
    "Identify which Medicaid waiver, developmental disability program, or state service the family is currently exploring or receiving.",
    "Determine whether the individual has already applied, joined a waiting or interest list, completed an eligibility process, or begun receiving services.",
    "Gather application records, eligibility notices, service plans, correspondence, and other documents the family has received from the state or service agency.",
    "Identify the specific support the family is seeking, such as respite, attendant care, in-home support, community services, employment support, or other disability-related services.",
    "Review state-specific program information and identify application steps, eligibility requirements, waiting lists, and agencies that may be relevant to the family's situation.",
  ],

  suggestedQuestions: [
    "Is the individual currently enrolled in a Medicaid waiver or other state disability-services program?",
    "Has the family already applied for services or joined a waiting or interest list?",
    "Which services or supports does the family currently receive?",
    "What additional services or supports is the family trying to obtain?",
    "Has the family received any eligibility decision, service plan, denial, reduction, or other notice from the state or service agency?",
  ],
},
{
  category: "Bullying & School Safety",
  focusArea: "IEP & School Support",

  keywords: [
    "bullying",
    "bullied",
    "bully",
    "being picked on",
    "picked on",
    "harassment",
    "harassed",
    "school safety",
    "not safe at school",
    "unsafe at school",
    "hurt at school",
    "attacked at school",
    "threatened at school",
    "restraint",
    "restrained",
    "seclusion",
    "secluded",
    "elopement",
    "eloping",
    "ran away from school",
    "left the classroom",
    "left campus",
    "wandering",
  ],

  preparationNotes: [
    "Identify the specific safety, bullying, harassment, restraint, seclusion, or elopement concern affecting the child at school.",
    "Gather incident reports, disciplinary records, emails, school notices, medical documentation, and other communication related to the concern.",
    "Review whether the child's disability, IEP, behavior plan, accommodations, supervision needs, or communication needs may be relevant to the situation.",
    "Determine what the family has already reported to the school and what actions the school has taken in response.",
    "Identify whether there are continuing or immediate safety concerns that may require the family to contact appropriate school personnel or other qualified professionals.",
  ],

  suggestedQuestions: [
    "What specifically has been happening at school, and how often has it occurred?",
    "When did the family first become aware of the safety or bullying concern?",
    "Who at the school has the family notified, and how did the school respond?",
    "Does the family have incident reports, emails, photographs, medical records, or other documentation related to what occurred?",
    "Does the child's current IEP or support plan address supervision, behavior, communication, elopement, or other safety-related needs?",
  ],
},
{
  category: "Employment & Vocational Rehabilitation",
  focusArea: "Adult Transition Planning",

  keywords: [
    "job",
    "jobs",
    "employment",
    "work after high school",
    "working after high school",
    "find a job",
    "get a job",
    "job training",
    "job coach",
    "job coaching",
    "supported employment",
    "vocational rehabilitation",
    "vocational rehab",
    "vocational services",
    "vr services",
    "work program",
    "employment program",
    "career training",
    "career planning",
    "work skills",
    "workplace support",
    "work accommodations",
  ],

  preparationNotes: [
    "Identify the individual's current employment goals, interests, strengths, support needs, and previous work or volunteer experience.",
    "Review any employment or vocational goals currently included in the individual's transition plan or IEP, when applicable.",
    "Determine whether the family has already contacted vocational rehabilitation, supported employment providers, job-training programs, or other disability employment services.",
    "Identify areas where the individual may need support, such as job searching, applications, interviews, transportation, job coaching, workplace communication, or accommodations.",
    "Review state-specific vocational rehabilitation and disability employment resources that may help the family identify appropriate next steps.",
  ],

  suggestedQuestions: [
    "What type of work or employment is the individual interested in?",
    "Has the individual previously worked, volunteered, participated in job training, or completed a school-based work program?",
    "Has the family already contacted vocational rehabilitation or another employment-support agency?",
    "What support would the individual likely need to obtain and maintain employment?",
    "Are transportation, communication, behavior, independent living skills, or workplace accommodations affecting the family's employment planning?",
  ],
},

];
export function getConcernMatches(
  concernText: string,
  focusAreas: string[]
): ConcernMatch[] {
  const normalizedText = concernText.toLowerCase().trim();

  if (!normalizedText) {
    return [];
  }

  return concernMatches.filter((concern) => {
    const focusAreaMatch = focusAreas.includes(concern.focusArea);

    const keywordMatch = concern.keywords.some((keyword) =>
      normalizedText.includes(keyword.toLowerCase())
    );

    return focusAreaMatch && keywordMatch;
  });
}
