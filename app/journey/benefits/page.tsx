"use client";

import {
  Wallet,
  HeartPulse,
  Puzzle,
  Landmark,
  HeartHandshake,
  Compass,
  ArrowRight,
} from "lucide-react";


export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-sky-50 py-20 px-6 text-center">

        <Wallet className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Benefits & Financial Assistance
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Financial assistance and support programs can make a significant
          difference for families raising a child with autism.
          Understanding what is available is the first step toward building
          a stronger future.
        </p>

      </section>


      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Programs Every Family Should Know About
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <Wallet className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Supplemental Security Income (SSI)
  </h3>

  <p className="text-gray-600">
    SSI may provide monthly financial assistance for individuals with
    qualifying disabilities and limited income.
  </p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <HeartPulse className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Medicaid
  </h3>

  <p className="text-gray-600">
    Medicaid may provide healthcare coverage and access to medical,
    therapeutic, and long-term support services for eligible individuals.
  </p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <Puzzle className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Medicaid Waiver Programs
  </h3>

  <p className="text-gray-600">
    Waiver programs may provide long-term services that help individuals
    with autism receive support while remaining at home and in their communities.
  </p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <Landmark className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Government Assistance
  </h3>

  <p className="text-gray-600">
    Federal, state, and local agencies offer programs that may assist
    families with healthcare, education, transportation, and disability services.
  </p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Grants & Nonprofit Assistance
  </h3>

  <p className="text-gray-600">
    Many nonprofit organizations offer grants, scholarships,
    respite assistance, and financial support for autism families.
  </p>

</div>

<div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

  <Compass className="w-10 h-10 text-blue-700 mb-4" />

  <h3 className="text-2xl font-bold text-blue-700 mb-4">
    Personalized Benefit Planning
  </h3>

  <p className="text-gray-600">
    Every family's situation is unique.
    During a consultation we help identify possible next steps
    based on your family's individual needs.
  </p>

</div>

          </div>

        </div>

      </section>

      {/* CTA */}

<section className="py-20 px-6">

  <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

    <h2 className="text-4xl font-bold mb-5">
      Need Help Understanding Your Benefit Options?
    </h2>

    <p className="text-xl text-blue-100 mb-8">
      Every family's financial situation is unique. During your free consultation,
      we'll help you understand available programs and identify the next steps
      that may apply to your family.
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