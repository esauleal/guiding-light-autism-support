import Link from "next/link";
import { Accessibility, ArrowRight } from "lucide-react";

export default function AdultAutismResources() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <div className="flex justify-center mb-6">
            <Accessibility className="w-12 h-12 text-blue-700" />
          </div>

          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Adult Autism Resources
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            Planning for Adulthood and Beyond
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Explore practical guidance for transition planning, guardianship,
            benefits, employment, housing, independent living, and other
            important parts of adulthood.
          </p>

        </div>
      </section>


      {/* ARTICLES */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Guides & Articles
          </h2>

          <p className="text-gray-600">
            Helpful information created to help families prepare for the
            transition into adult services and life after the school years.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* TRANSITION TO ADULTHOOD ARTICLE */}
          <Link
            href="/resources/guides/autism-transition-to-adulthood"
            className="group bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"
          >
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              Transition to Adulthood
            </p>

            <h3 className="text-2xl font-bold text-blue-700 mb-4 group-hover:text-blue-800">
              Autism Transition to Adulthood: A Parent&apos;s Guide to
              Preparing for What Comes Next
            </h3>

            <p className="text-gray-600 leading-7 mb-6">
              What we&apos;ve learned about preparing for adult services,
              benefits, guardianship, and life after the school years.
            </p>

            <span className="font-semibold text-blue-700 flex items-center gap-2 group-hover:underline">
              Read the Article
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

        </div>

      </section>

    </main>
  );
}
