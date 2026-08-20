"use client";

import {
  GraduationCap,
  ClipboardList,
  Scale,
  BookOpen,
  UsersRound,
  Compass,
} from "lucide-react";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <GraduationCap className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          School & IEP Support
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Understanding your child's educational rights can help you become
          a stronger advocate. Learn the basics of IEPs, 504 Plans, ARD
          meetings, and educational support services.
        </p>

      </section>

      {/* Cards */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Educational Resources Every Parent Should Know
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <GraduationCap className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Individualized Education Program (IEP)
              </h3>

              <p className="text-gray-600">
                An IEP is a personalized educational plan created to provide
                specialized instruction and support based on your child's
                unique needs.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <ClipboardList className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                ARD Meetings
              </h3>

              <p className="text-gray-600">
                ARD meetings bring parents and school staff together to
                review progress, discuss services, and develop educational
                goals.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Scale className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Parent Rights
              </h3>

              <p className="text-gray-600">
                Parents have important rights throughout the educational
                planning process and play a critical role in advocating for
                their child.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <BookOpen className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                504 Plans
              </h3>

              <p className="text-gray-600">
                Some students qualify for classroom accommodations through a
                Section 504 Plan to support equal access to education.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <UsersRound className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Working With Your School Team
              </h3>

              <p className="text-gray-600">
                Positive communication with teachers, therapists, and school
                administrators helps create the best support system for your
                child.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Educational Planning
              </h3>

              <p className="text-gray-600">
                Every child learns differently. We help families understand
                educational options and prepare for important school
                conversations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Information */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            What if I disagree with the school?
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Every educational decision depends on your child's individual
            needs, evaluations, and goals. Understanding your options before
            an ARD or IEP meeting can help you feel more prepared and
            confident during important conversations.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-5">
            Need Help Preparing for an ARD or IEP Meeting?
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            We can help you understand available educational resources,
            organize your questions, and prepare with confidence.
          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
          >
            Schedule Your Free Consultation
          </a>

        </div>

      </section>

      {/* Quote */}

      <section className="pb-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-2xl italic text-blue-700 font-semibold">
            "Strong advocacy begins with understanding your child's educational rights."
          </p>

        </div>

      </section>

    </main>
  );
}