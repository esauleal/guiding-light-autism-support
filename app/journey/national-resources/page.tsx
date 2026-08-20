"use client";

import {
  Landmark,
  Globe,
  Building2,
  BookOpen,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function NationalResourcesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <Landmark className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          National Autism Resources
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          There are many trusted organizations and government agencies that
          provide information, advocacy, education, and support for autism
          families across the United States.
        </p>

      </section>

      {/* Cards */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Trusted National Organizations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Globe className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Autism Organizations
              </h3>

              <p className="text-gray-600">
                National organizations provide educational materials,
                advocacy, research updates, and family support resources.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Building2 className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Government Agencies
              </h3>

              <p className="text-gray-600">
                Federal and state agencies offer disability services,
                healthcare information, and educational guidance.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <BookOpen className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Educational Resources
              </h3>

              <p className="text-gray-600">
                Access reliable publications, webinars, training, and tools
                designed to help families make informed decisions.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <ShieldCheck className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Disability Rights
              </h3>

              <p className="text-gray-600">
                Learn about disability rights, legal protections, advocacy,
                and available support throughout the United States.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Finding Local Resources
              </h3>

              <p className="text-gray-600">
                National organizations often connect families with services,
                providers, and community programs within their own state.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Landmark className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Personalized Resource Navigation
              </h3>

              <p className="text-gray-600">
                We help families understand which organizations and programs
                may best fit their unique situation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Information */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            You Don't Have To Search Alone
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Finding trustworthy information can feel overwhelming. Our goal
            is to help simplify the process by pointing families toward
            reliable resources while helping them understand what may apply
            to their individual journey.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-5">
            Need Help Finding the Right Resources?
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation and let us help you identify trusted
            organizations and available support based on your family's needs.
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
