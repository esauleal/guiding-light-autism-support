"use client";

import { useState } from "react";

const ageOptions = [
  "Early Childhood (0-3)",
  "School Age (4-11)",
  "Pre-Teens (12-15)",
  "Transition Age (16-18)",
  "Adult (19+)",
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function GetStartedPage() {
  const [selectedAge, setSelectedAge] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [parentName, setParentName] = useState("");
const [email, setEmail] = useState("");
const [state, setState] = useState("");
const [biggestConcern, setBiggestConcern] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const consultationProfile = {
  childAge: selectedAge,
  focusAreas: selectedFocus,
  parentName: parentName,
  emailAddress: email,
  stateOfResidence: state,
  biggestConcern: biggestConcern,
};
const resourceMatch = {
  state: state.trim().toLowerCase(),
  ageGroup: selectedAge,
  focusAreas: selectedFocus,
};

const submitConsultationProfile = async () => {
  try {
    const response = await fetch("/api/consultation-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(consultationProfile),
    });

    const result = await response.json();

    if (!response.ok) {
  console.error("Profile submission failed:", result);
  return false;
}

console.log("Consultation profile emailed successfully:", result);
return true;
  } catch (error) {
  console.error("Profile submission error:", error);
  return false;
}
};

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">

        {/* Page introduction */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
            Guiding Light Autism Family Support
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Consultation Roadmap Builder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Answer a few quick questions so we can better understand your
            family&apos;s needs and prepare for your consultation.
          </p>
        </div>

        {/* Main card */}
        <section
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
          aria-labelledby="age-question"
        >
          {/* Progress area */}
          <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-sky-700">
                Step {currentStep} of 4
              </span>

              <span className="text-sm text-slate-500">
                {currentStep * 25}% complete
              </span>
            </div>

            <div
              className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Consultation roadmap progress"
            >
              <div
  className="h-full rounded-full bg-sky-600 transition-all duration-500"
  style={{ width: `${currentStep * 25}%` }}
/>
            </div>
          </div>

          {/* Question */}
          <div className="p-6 sm:p-8">
            {currentStep === 1 && (
  <>

            <p className="mb-2 text-sm font-medium text-slate-500">
              Let&apos;s start with your family.
            </p>

            <h2
              id="age-question"
              className="text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              How old is your child?
            </h2>

            <p className="mt-3 text-slate-600">
              Select the age range that best applies.
            </p>

            {/* Age options */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {ageOptions.map((option) => {
                const isSelected = selectedAge === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedAge(option)}
                    aria-pressed={isSelected}
                    className={`group flex min-h-20 w-full items-center justify-between rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-100 ${
                      isSelected
                        ? "border-sky-600 bg-sky-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/50"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        isSelected
                          ? "text-sky-900"
                          : "text-slate-800"
                      }`}
                    >
                      {option}
                    </span>

                    <span
                      className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-sky-600 bg-sky-600 text-white"
                          : "border-slate-300"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42.004L3.3 9.188a1 1 0 1 1 1.4-1.426l4.08 4.006 6.49-6.472a1 1 0 0 1 1.434-.006Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Continue button - intentionally inactive for Step 1 */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                disabled={!selectedAge}
                className="w-full rounded-xl bg-sky-700 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto sm:min-w-40"
              >
                Continue
              </button>
            </div>
            </>
)}

{currentStep === 2 && (
  <div>
    <p className="mb-2 text-sm font-medium text-slate-500">
      Now let&apos;s focus on what matters most.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
      What would you like help with today?
    </h2>

    <p className="mt-3 text-slate-600">
      Select all that apply to your family.
    </p>

    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {[
  "IEP & School Support",
  "Guardianship & Alternatives",
  "Adult Transition Planning",
  "SSI & Government Benefits",
].map((option) => {
  const isSelected = selectedFocus.includes(option);

  return (
    <button
      key={option}
      type="button"
      onClick={() =>
  setSelectedFocus((previous) =>
    previous.includes(option)
      ? previous.filter((item) => item !== option)
      : [...previous, option]
  )
}
      aria-pressed={isSelected}
      className={`flex min-h-20 w-full items-center justify-between rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-100 ${
        isSelected
          ? "border-sky-600 bg-sky-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/50"
      }`}
    >
      <span
        className={`font-semibold ${
          isSelected ? "text-sky-900" : "text-slate-800"
        }`}
      >
        {option}
      </span>

      <span
        className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          isSelected
            ? "border-sky-600 bg-sky-600 text-white"
            : "border-slate-300"
        }`}
        aria-hidden="true"
      >
        {isSelected && (
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42.004L3.3 9.188a1 1 0 1 1 1.4-1.426l4.08 4.006 6.49-6.472a1 1 0 0 1 1.434-.006Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  );
})}

    </div>

    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
  <button
    type="button"
    onClick={() => setCurrentStep(1)}
    className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
  >
    Back
  </button>

  <button
    type="button"
    onClick={() => setCurrentStep(3)}
    disabled={selectedFocus.length === 0}
    className="rounded-xl bg-sky-700 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:min-w-40"
  >
    Continue
  </button>
</div>

  </div>
)}
{currentStep === 3 && (
  <div>
    <p className="mb-2 text-sm font-medium text-slate-500">
      Almost there.
    </p>

    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
      Tell us a bit about your situation.
    </h2>

    <p className="mt-3 text-slate-600">
      This helps us prepare guidance that is relevant to your family and
      location.
    </p>

    <div className="mt-7 space-y-5">
      {/* Parent Name */}
      <div>
        <label
          htmlFor="parentName"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          Parent or Caregiver Name
        </label>

        <input
          id="parentName"
          type="text"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
        />
      </div>

      {/* State */}
      <div>
        <label
          htmlFor="state"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          State of Residence
        </label>

        <select
  id="state"
  value={state}
  onChange={(e) => setState(e.target.value)}
  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900"
>
  <option value="">Select your state</option>
  {states.map((stateName) => (
    <option key={stateName} value={stateName}>
      {stateName}
    </option>
  ))}
</select>
      </div>
      {/* Biggest Concern */}
<div>
  <label
    htmlFor="biggestConcern"
    className="mb-2 block text-sm font-semibold text-slate-800"
  >
    What is your biggest concern right now? *
  </label>

  <textarea
    id="biggestConcern"
    required
    value={biggestConcern}
    onChange={(e) => setBiggestConcern(e.target.value)}
    placeholder="Tell us briefly what you need the most help with."
    rows={4}
    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900"
  />
</div>

    </div>

    {/* Navigation */}
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={() => setCurrentStep(2)}
        className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Back
      </button>

      <button
  type="button"
  onClick={async () => {
    if (!biggestConcern.trim()) {
      alert("Please tell us your biggest concern before building your profile.");
      return;
    }

    setIsSubmitting(true);

    const success = await submitConsultationProfile();

    setIsSubmitting(false);

    if (success) {
      setCurrentStep(4);
    }
  }}

  disabled={
  isSubmitting ||
  !parentName.trim() ||
  !email.trim() ||
  !state.trim()
  
}
  className="rounded-xl bg-sky-700 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:min-w-40"
>
  {isSubmitting ? "Building Your Profile..." : "Build My Profile"}
</button>

    </div>
  </div>
)}

{currentStep === 4 && (
  <div className="py-4 text-center sm:py-6">
    {/* Success icon */}
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-9 w-9 text-sky-700"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42.004L3.3 9.188a1 1 0 1 1 1.4-1.426l4.08 4.006 6.49-6.472a1 1 0 0 1 1.434-.006Z"
          clipRule="evenodd"
        />
      </svg>
    </div>

    <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-sky-700">
      Profile Complete
    </p>

    <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      Your Custom Family Support Profile is Ready!
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
      We have securely logged your details. Because autism resources vary
      heavily by age and state guidelines, we have mapped out a tailored
      framework for your family. To review your profile, build your actionable
      roadmap, and unlock your specialized toolkit downloads, secure your
      comprehensive 1-on-1 strategy consultation below.
    </p>

    {/* Price */}
    <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-sky-200 bg-sky-50 px-6 py-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
        Comprehensive Strategy Session
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
        $175.00
      </p>

      <p className="mt-1 font-semibold text-slate-700">
        1-Hour Deep Dive Consultation
      </p>
    </div>

    {/* What they unlock */}
    <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 text-left">
      <p className="font-bold text-slate-900">
        Your consultation includes:
      </p>

      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        <li className="flex gap-3">
          <span className="font-bold text-sky-700">✓</span>
          Review of your family&apos;s support profile
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-sky-700">✓</span>
          Personalized next-step roadmap
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-sky-700">✓</span>
          Guidance based on your selected support areas
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-sky-700">✓</span>
          Access to relevant Guiding Light toolkit downloads
        </li>
      </ul>
    </div>

    {/* Booking button */}
    <a
    href={`https://calendly.com/esauleal1/autism-family-consulting?name=${encodeURIComponent(parentName)}&email=${encodeURIComponent(email)}`}
target="_blank"
rel="noopener noreferrer"
      className="mt-8 w-full block text-center rounded-xl bg-sky-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800 sm:w-auto sm:min-w-80"
    >
      Book &amp; Unlock Your Custom Roadmap
    </a>

    <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">
      Your roadmap will be reviewed with you during your Guiding Light
      consultation.
    </p>
  </div>
)}
          </div>
          
        </section>

        <p className="mt-6 text-center text-sm text-slate-500">
          Your information is used only to help prepare your Guiding Light
          consultation.
        </p>
      </div>
    </main>
  );
}
