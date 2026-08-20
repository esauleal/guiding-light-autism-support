"use client";

import Link from "next/link";
import {
  Download,
  FileText,
  ClipboardCheck,
  GraduationCap,
  Wallet,
  HeartHandshake,
  ShieldCheck,
  Accessibility,
} from "lucide-react";

export default function DownloadsPage() {
  const downloads = [
    {
      icon: ClipboardCheck,
      title: "Autism Diagnosis Checklist",
      description:
        "Know the first steps to take after receiving an autism diagnosis.",
    },
    {
      icon: GraduationCap,
      title: "Preparing for an ARD / IEP Meeting",
      description:
        "Helpful questions and documents to prepare before your next school meeting.",
    },
    {
      icon: Wallet,
      title: "SSI & Benefits Checklist",
      description:
        "A simple checklist to organize benefit applications and important documents.",
    },
    {
      icon: Accessibility,
      title: "Adult Transition Planning",
      description:
        "Planning ideas for adulthood, guardianship, employment, and housing.",
    },
    {
      icon: ShieldCheck,
      title: "Emergency Information Sheet",
      description:
        "Keep important medical, behavioral, and emergency information in one place.",
    },
    {
      icon: HeartHandshake,
      title: "Parent Self-Care Guide",
      description:
        "Simple reminders and strategies to help parents care for themselves while caring for others.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <Download className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Family Download Center
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Helpful printable guides, checklists, and planning tools designed
          to make your autism journey a little easier.
        </p>

      </section>

      {/* Downloads */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {downloads.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-700 mb-5" />

                  <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>

                  {index === 0 ? (
  <Link
    href="/downloads/guiding-light-family-toolkit-003.pdf"
    download
    className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-white font-semibold hover:bg-blue-800 transition"
  >
    <FileText className="w-5 h-5" />
    Download PDF
  </Link>
) : (
  <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-white font-semibold opacity-70 cursor-not-allowed">
    <FileText className="w-5 h-5" />
    Coming Soon
  </button>
)}


                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-6">

            Need Personalized Guidance?

          </h2>

          <p className="text-xl text-blue-100 mb-8">

            Every family is different.

            Schedule your free consultation and we'll help identify the
            resources that best fit your situation.

          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg hover:bg-yellow-300 transition"
          >

            Schedule Your Free Consultation

          </a>

        </div>

      </section>

    </main>
  );
}