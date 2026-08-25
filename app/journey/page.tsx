import Link from "next/link";

import {
  Puzzle,
  ClipboardList,
  Wallet,
  GraduationCap,
  HeartHandshake,
  Accessibility,
  Landmark,
  ArrowDown,
  Lightbulb,
} from "lucide-react";

export default function Journey() {
  const steps = [
    {
      icon: Puzzle,
      title: "Received a Diagnosis",
      description:
        "Learn what to expect after an autism diagnosis and where to begin.",
      href: "/journey/diagnosis",
    },
    {
      icon: ClipboardList,
      title: "First Steps",
      description:
        "Create a plan and understand the most important next actions.",
      href: "/journey/first-steps",
    },
    {
      icon: Wallet,
      title: "Benefits & Financial Assistance",
      description:
        "Explore SSI, Medicaid, Waivers, Grants, and Insurance resources.",
      href: "/journey/benefits",
    },
    {
      icon: GraduationCap,
      title: "School & IEP Support",
      description:
        "Learn about ARDs, IEPs, 504 Plans, and educational advocacy.",
      href: "/journey/education",
    },
    {
      icon: HeartHandshake,
      title: "Parent Support",
      description:
        "Connect with resources, support groups, and encouragement.",
      href: "/journey/parent-support",
    },
    {
      icon: Accessibility,
      title: "Adult Transition",
      description:
        "Explore guardianship, employment, housing, and adult services.",
      href: "/journey/adult-transition",
    },
    {
      icon: Landmark,
      title: "National Resources",
      description:
        "Access trusted autism organizations and government programs.",
      href: "/journey/national-resources",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <div className="flex justify-center mb-5">
            <div className="rounded-full bg-blue-100 p-4">
              <Lightbulb className="w-10 h-10 text-blue-700" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Autism Journey Roadmap
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Received an autism diagnosis? Don't know where to begin?
            We'll walk this journey with you — one step at a time.
          </p>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="py-16 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Start Where You Are
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            There is no single path through the autism journey. Some families
            may need help immediately after diagnosis, while others may be
            looking for educational support, financial resources, parent
            support, or planning for adulthood.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-8">
            Choose the area that best fits your family's needs, and we'll
            help you take the next step.
          </p>

        </div>

      </section>


      {/* JOURNEY STEPS */}
      <section className="py-20 px-6 bg-sky-50">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-14">
            Your Family's Journey
          </h2>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>

                <Link href={step.href}>

                  <div
                    className="
                      bg-white
                      rounded-2xl
                      shadow-lg
                      p-8
                      text-center
                      hover:-translate-y-2
                      hover:shadow-2xl
                      transition-all
                      duration-300
                      cursor-pointer
                      border
                      border-transparent
                      hover:border-blue-100
                    "
                  >

                    <div className="flex justify-center mb-5">

                      <div className="rounded-full bg-blue-50 p-4">

                        <Icon className="w-10 h-10 text-blue-700" />

                      </div>

                    </div>

                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      STEP {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold text-blue-700 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-7 max-w-2xl mx-auto">
                      {step.description}
                    </p>

                    <div className="mt-5 text-blue-700 font-semibold">
                      Explore This Step →
                    </div>

                  </div>

                </Link>


                {index < steps.length - 1 && (

                  <div className="flex justify-center py-6">

                    <ArrowDown className="w-8 h-8 text-blue-700" />

                  </div>

                )}

              </div>
            );
          })}

        </div>

      </section>


      {/* WRAP-AROUND MESSAGE */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <div className="rounded-3xl bg-blue-50 p-10 shadow-lg">

            <Lightbulb className="w-12 h-12 text-blue-700 mx-auto mb-5" />

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5">
              You Don't Have to Figure It Out Alone
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Your family's needs may change over time. Whether you're
              beginning the journey, navigating school services, exploring
              benefits, or planning for adulthood, Guiding Light is here to
              help you understand your options and find the next step.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-blue-700 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Not Sure Where to Start?
          </h2>

          <p className="text-lg text-blue-100 leading-8 mb-10">
            Every family's situation is different. If you're unsure which
            resources or next steps are right for your family, we're here to
            help point you in the right direction.
          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-yellow-400
              text-gray-900
              font-bold
              px-8
              py-4
              rounded-full
              shadow-lg
              hover:bg-yellow-300
              hover:scale-105
              transition
              duration-300
            "
          >
            Schedule Your Free Consultation
          </a>

        </div>

      </section>

    </main>
  );
}
