"use client";

import {
  ClipboardList,
  FolderOpen,
  HeartHandshake,
  School,
  Wallet,
  UsersRound,
  Compass,
} from "lucide-react";

export default function FirstStepsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <ClipboardList className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          First Steps After an Autism Diagnosis
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Receiving an autism diagnosis can feel overwhelming. The good news?
          You don't have to figure everything out today. Focus on one step at
          a time.
        </p>

      </section>

      {/* Cards */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            A Simple Roadmap to Get Started
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <FolderOpen className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Stay Organized
              </h3>

              <p className="text-gray-600">
                Create a folder or binder for evaluations, medical records,
                school paperwork, insurance documents, and important contacts.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <School className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Learn About School Services
              </h3>

              <p className="text-gray-600">
                Begin learning about Early Intervention, school evaluations,
                and educational support available in your area.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Wallet className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Explore Available Benefits
              </h3>

              <p className="text-gray-600">
                Some benefit programs have waiting lists. Learning what may
                be available early can make a significant difference later.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Build Your Support Team
              </h3>

              <p className="text-gray-600">
                You don't need all the answers today. Finding trusted people
                who can support your family makes the journey easier.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <UsersRound className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Connect With Other Parents
              </h3>

              <p className="text-gray-600">
                Talking with families who have walked this road often provides
                encouragement, hope, and practical advice.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Create Your Family's Plan
              </h3>

              <p className="text-gray-600">
                Every autism journey is different. Focus on what your child
                needs today while planning for tomorrow.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Encouragement */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            You Don't Have to Know Everything Today
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            One of the biggest mistakes families make is believing they must
            figure everything out immediately. Give yourself permission to
            learn one step at a time.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-5">
            Need Help Knowing Where to Start?
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            During your free consultation we'll help you identify the next
            steps that make the most sense for your family's situation.
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

    </main>
  );
}