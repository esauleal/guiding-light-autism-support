"use client";

import {
  Accessibility,
  Briefcase,
  Home,
  Scale,
  Wallet,
  Compass,
} from "lucide-react";

export default function AdultTransitionPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <Accessibility className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Adult Transition Resources
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Preparing for adulthood begins long before graduation. Learn about
          important decisions, available resources, and planning for your
          loved one's future.
        </p>

      </section>

      {/* Cards */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Planning for the Next Chapter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Scale className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Guardianship
              </h3>

              <p className="text-gray-600">
                Some families may need to explore legal decision-making options
                once their child becomes an adult.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Briefcase className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Employment
              </h3>

              <p className="text-gray-600">
                Learn about vocational programs, supported employment,
                and workplace opportunities available for adults with autism.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Home className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Housing
              </h3>

              <p className="text-gray-600">
                Explore different living arrangements and support services
                available for adulthood.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Wallet className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                SSI & Adult Benefits
              </h3>

              <p className="text-gray-600">
                Adult benefit programs may change after age 18.
                Understanding these transitions is an important part of planning.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Accessibility className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Independent Living Skills
              </h3>

              <p className="text-gray-600">
                Developing daily living skills helps build confidence,
                independence, and long-term success.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Personalized Transition Planning
              </h3>

              <p className="text-gray-600">
                Every adult's journey is different.
                We help families understand available options and prepare
                for the future with confidence.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Information */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Planning Today Creates Opportunities Tomorrow
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Transition planning doesn't happen overnight. Understanding your
            options early can help your family make informed decisions while
            creating a roadmap for adulthood.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-5">
            Let's Build a Transition Plan Together
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            We'll help you understand available resources and prepare for the
            next stage of your family's journey.
          </p>

          <a
            href="https://calendly.com/esauleal1/autism-family-consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>

        </div>

      </section>

      {/* Quote */}

      <section className="pb-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-2xl italic text-blue-700 font-semibold">
            "Preparing for adulthood is about creating opportunities, not limitations."
          </p>

        </div>

      </section>

    </main>
  );
}