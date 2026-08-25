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
  Sparkles,
} from "lucide-react";

export default function DownloadsPage() {
  const downloads = [
    {
      icon: ClipboardCheck,
      title: "Autism Diagnosis Checklist",
      description:
        "Know the first steps to take after receiving an autism diagnosis and organize the information your family may need.",
      available: true,
    },
    {
      icon: GraduationCap,
      title: "Preparing for an ARD / IEP Meeting",
      description:
        "Helpful questions and documents to prepare before your next school meeting.",
      available: false,
    },
    {
      icon: Wallet,
      title: "SSI & Benefits Checklist",
      description:
        "A simple checklist to organize benefit applications and important documents.",
      available: false,
    },
    {
      icon: Accessibility,
      title: "Adult Transition Planning",
      description:
        "Planning ideas for adulthood, guardianship, employment, housing, and adult services.",
      available: false,
    },
    {
      icon: ShieldCheck,
      title: "Emergency Information Sheet",
      description:
        "Keep important medical, behavioral, and emergency information organized in one place.",
      available: false,
    },
    {
      icon: HeartHandshake,
      title: "Parent Self-Care Guide",
      description:
        "Simple reminders and strategies to help parents care for themselves while caring for others.",
      available: false,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-2xl bg-blue-100 p-4 mb-6">
            <Download className="w-12 h-12 text-blue-700" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
            Free Family Resources
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Family Download Center
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Helpful printable guides, checklists, and planning tools designed
            to make your autism journey a little easier.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span>Created with families in mind</span>
          </div>
        </div>
      </section>

      {/* RESOURCE LIBRARY */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Resources for Your Family
            </h2>

            <p className="mt-4 text-lg text-gray-600 leading-8">
              Start with the resources currently available and check back as
              we continue building tools to support families through every
              stage of the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 ${
                    item.available
                      ? "bg-blue-50 border-2 border-blue-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl"
                      : "bg-white border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-xl"
                  }`}
                >
                  {/* Available Badge */}
                  {item.available && (
                    <div className="absolute top-5 right-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-gray-900">
                      Available Now
                    </div>
                  )}

                  <div
                    className={`inline-flex rounded-xl p-4 mb-6 ${
                      item.available ? "bg-white shadow-sm" : "bg-blue-50"
                    }`}
                  >
                    <Icon className="w-9 h-9 text-blue-700" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-7 mb-7">
                    {item.description}
                  </p>

                  {item.available ? (
                    <Link
                      href="/downloads/guiding-light-family-toolkit-003.pdf"
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300"
                    >
                      <FileText className="w-5 h-5" />
                      Download PDF
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-gray-500 font-semibold">
                      <FileText className="w-5 h-5" />
                      Coming Soon
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESOURCE NOTE */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl bg-sky-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            More Resources Are Coming
          </h2>

          <p className="text-gray-600 leading-7">
            We are continuing to create practical tools designed to help
            families stay organized, understand their options, and feel more
            confident as they navigate their autism journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Guidance?
          </h2>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-8">
            Every family is different. Schedule your free consultation and
            we'll help identify the resources and next steps that best fit
            your situation.
          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg md:text-xl font-bold text-gray-900 shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}