import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getMatchingResources,
  getRoadmapSteps,
  getConsultationQuestions,
  getConsultationChecklist,
} from "../../../lib/consultationResources";
import { getConcernMatches } from "../../../lib/consultationConcerns";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      childAge,
      focusAreas,
      parentName,
      emailAddress,
      stateOfResidence,
      biggestConcern,
    } = await request.json();
    const matchingResources = getMatchingResources(
  stateOfResidence,
  childAge,
  focusAreas
);
const concernMatches = getConcernMatches(biggestConcern, focusAreas);

const roadmapSteps = getRoadmapSteps(focusAreas);
const consultationChecklist = getConsultationChecklist(focusAreas);
const consultationQuestions = getConsultationQuestions(focusAreas);

    const { data, error } = await resend.emails.send({
      from: "Guiding Light Website <contact@guidinglightautismsupport.org>",
to: ["info@guidinglightautismsupport.org"],
      subject: `New Consultation Profile - ${parentName}`,
      html: `
        <h2>Family Snapshot</h2>

        <p><strong>Parent/Caregiver:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>State:</strong> ${stateOfResidence}</p>
        <p><strong>Child Age:</strong> ${childAge}</p>
        <p><strong>Biggest Concern:</strong> ${biggestConcern}</p>

        <p><strong>Focus Areas:</strong></p>
        <ul>
          ${focusAreas.map((area: string) => `<li>${area}</li>`).join("")}
        </ul>
        <hr />

<h3>Recommended Roadmap</h3>

<ol>
  ${roadmapSteps
    .map((step: { title: string; description: string; focusArea: string }) => `<li style="margin-bottom: 10px;"><strong>${step.title}</strong><br />${step.description}</li>`)
    .join("")}
</ol>

<hr />
<h3>GLAFS Consultation Preparation Checklist</h3>

<p>
  Review these items before or during the family's consultation.
</p>

<ul style="list-style-type: none; padding-left: 0;">
  ${consultationChecklist
    .map(
      (item: string) =>
        `<li style="margin-bottom: 8px;">☐ ${item}</li>`
    )
    .join("")}
</ul>

<hr />

<h3>GLAFS Consultation Review</h3>

<p>
  <strong>Primary Areas to Review:</strong> ${focusAreas.join(", ")}
</p>

<p>
  This roadmap is intended to help GLAFS prepare for the family's
  consultation. During the consultation, review the family's current
  situation, identify their highest-priority questions, and determine
  which roadmap items may require additional research or follow-up.
</p>

<hr />

<h3>Suggested Consultation Questions</h3>

<p>
  Use these questions as a discussion guide during the consultation.
  They are based on the focus areas selected by the family.
</p>

<ul>
  ${consultationQuestions
    .map(
      (item: { question: string; focusArea: string }) =>
        `<li style="margin-bottom: 10px;">
          <strong>${item.focusArea}:</strong> ${item.question}
        </li>`
    )
    .join("")}
</ul>

<hr />
<h3>Resources Related to the Family's Main Concern</h3>

${
  concernMatches.length > 0
    ? concernMatches
        .map(
          (match) => `
            <div style="margin-bottom: 20px;">
              <strong>${match.category}</strong><br />
              <em>Focus Area: ${match.focusArea}</em>

              <p><strong>Preparation Notes:</strong></p>
              <ul>
                ${match.preparationNotes
                  .map((note: string) => `<li>${note}</li>`)
                  .join("")}
              </ul>

              <p><strong>Suggested Questions:</strong></p>
              <ul>
                ${match.suggestedQuestions
                  .map((question: string) => `<li>${question}</li>`)
                  .join("")}
              </ul>
            </div>
          `
        )
        .join("")
    : `<p>No additional concern-specific guidance was identified.</p>`
}

<hr />

        <h3>Matched Resources for This Family</h3>

${
  matchingResources.length > 0
    ? matchingResources
        .map(
          (resource) => `
            <div style="margin-bottom: 16px;">
              <strong>${resource.name}</strong><br />
              ${resource.description}<br />
              <a href="${resource.url}">${resource.url}</a>
            </div>
          `
        )
        .join("")
    : "<p>No matching resources found yet.</p>"
}
      `,
    });
    
    console.log("RESEND DATA:", data);
    console.log("RESEND ERROR:", error);

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { success: false, error: "Unable to send consultation profile." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultation profile error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}