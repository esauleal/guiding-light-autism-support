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
} from "lucide-react";

export default function Journey() {
  const steps = [
    {
      icon: Puzzle,
      title: "Received a Diagnosis",
      description:
        "Learn what to expect after an autism diagnosis and where to begin.",
    },
    {
      icon: ClipboardList,
      title: "First Steps",
      description:
        "Create a plan and understand the most important next actions.",
    },
    {
      icon: Wallet,
      title: "Benefits & Financial Assistance",
      description:
        "Explore SSI, Medicaid, Waivers, Grants, and Insurance resources.",
    },
    {
      icon: GraduationCap,
      title: "School & IEP Support",
      description:
        "Learn about ARDs, IEPs, 504 Plans, and educational advocacy.",
    },
    {
      icon: HeartHandshake,
      title: "Parent Support",
      description:
        "Connect with resources, support groups, and encouragement.",
    },
    {
      icon: Accessibility,
      title: "Adult Transition",
      description:
        "Explore guardianship, employment, housing, and adult services.",
    },
    {
      icon: Landmark,
      title: "National Resources",
      description:
        "Access trusted autism organizations and government programs.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-sky-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Autism Journey Roadmap
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Received an autism diagnosis? Don't know where to begin?
          We’ll walk this journey with you — one step at a time.
        </p>
      </section>

      {/* Journey Steps */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
  <div key={index}>

    <Link
  href={
  index === 0
    ? "/journey/diagnosis"
    : index === 1
    ? "/journey/first-steps"
    : index === 2
    ? "/journey/benefits"
    : index === 3
    ? "/journey/education"
    : index === 4
    ? "/journey/parent-support"
    : index === 5
    ? "/journey/adult-transition"
    : index === 6
    ? "/journey/national-resources"
    : "#"
}
>
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">

        <Icon className="w-12 h-12 mx-auto text-blue-700 mb-4" />

        <h2 className="text-2xl font-bold text-blue-700 mb-3">
          {step.title}
        </h2>

        <p className="text-gray-600">
          {step.description}
        </p>

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
    </main>
  );
}
