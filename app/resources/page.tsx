"use client";

import {
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  UsersRound,
  Accessibility,
  Landmark,
  Link2,
} from "lucide-react";

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">

          Resources for Every Stage of the Autism Journey

        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">

          Whether you've just received an autism diagnosis or you're preparing
          for adulthood, we've gathered trusted resources to help your family
          move forward with confidence.

        </p>

      </section>



      {/* LOOKING FOR SOMETHING SPECIFIC? */}

      <section className="py-12 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-4">

            Looking for Something Specific?

          </h2>

          <p className="text-lg text-gray-600 leading-8">

            We're continuously adding trusted resources to help families
            navigate every stage of the autism journey. If you don't see what
            you're looking for, don't worry—we're happy to help point you in
            the right direction.

          </p>

        </div>

      </section>



      {/* WRAP-AROUND APPROACH */}

      <section className="py-16 px-6 bg-sky-50">

        <div className="max-w-5xl mx-auto text-center">

          <div className="flex justify-center mb-4">

            <UsersRound className="w-12 h-12 text-blue-700" />

          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">

            Our Wrap-Around Approach

          </h2>

          <p className="text-lg font-semibold text-gray-700 mb-8">

            Supporting the whole family — not just one piece of the puzzle.

          </p>


          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

            <p className="text-gray-600 leading-8 mb-6">

              Autism support doesn't fit into one category. A family's needs
              can involve education, benefits, therapy, healthcare, employment,
              housing, finances, family support, and planning for the future.

            </p>

            <p className="text-gray-600 leading-8 mb-6">

              That's why Guiding Light looks at the bigger picture. We help
              families identify the areas where they may need support and
              connect those needs with appropriate resources and next steps.

            </p>

            <p className="text-gray-600 leading-8">

              The goal isn't to overwhelm you with information. It's to help
              you find the pieces that matter most to your family.

            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white rounded-2xl p-6 shadow-md">

              <HeartHandshake className="w-8 h-8 text-blue-700 mx-auto mb-3" />

              <h3 className="font-bold text-blue-700 mb-2">

                Family-Centered

              </h3>

              <p className="text-gray-600 text-sm leading-6">

                Your family's goals, priorities, strengths, and circumstances
                guide the support we provide.

              </p>

            </div>


            <div className="bg-white rounded-2xl p-6 shadow-md">

              <Link2 className="w-8 h-8 text-blue-700 mx-auto mb-3" />

              <h3 className="font-bold text-blue-700 mb-2">

                Connected Resources

              </h3>

              <p className="text-gray-600 text-sm leading-6">

                We help connect the different pieces of support families may
                need throughout their journey.

              </p>

            </div>


            <div className="bg-white rounded-2xl p-6 shadow-md">

              <Compass className="w-8 h-8 text-blue-700 mx-auto mb-3" />

              <h3 className="font-bold text-blue-700 mb-2">

                Clear Next Steps

              </h3>

              <p className="text-gray-600 text-sm leading-6">

                Our goal is to help families move from feeling overwhelmed
                and uncertain to feeling informed and supported.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* RESOURCE CATEGORIES */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">

            Explore Support Resources

          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* NEW AUTISM DIAGNOSIS */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                New Autism Diagnosis

              </h3>

              <p className="text-gray-600">

                Learn the first steps after diagnosis and how to begin
                organizing support for your family.

              </p>

            </div>


            {/* BENEFITS */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                Benefits & Financial Resources

              </h3>

              <p className="text-gray-600">

                Understand available programs, support services, and resources
                that may help your family. SSI, Medicaid, Waivers, Grants,
                Insurance, and financial assistance programs.

              </p>

            </div>


            {/* EDUCATION */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <GraduationCap className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                Education Support

              </h3>

              <p className="text-gray-600">

                Learn about school services, IEP support, ARD meetings, parent
                rights, educational planning, and 504 Plans.

              </p>

            </div>


            {/* FAMILY SUPPORT */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <UsersRound className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                Family Support

              </h3>

              <p className="text-gray-600">

                Connect with parent support groups, respite care, counseling
                services, and community organizations that can help your family
                feel supported throughout your autism journey.

              </p>

            </div>


            {/* ADULT AUTISM */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <Accessibility className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                Adult Autism Resources

              </h3>

              <p className="text-gray-600">

                Resources for transition planning, guardianship, employment,
                housing, SSI, independent living, and long-term planning for
                autistic individuals and their families.

              </p>

            </div>


            {/* NATIONAL RESOURCES */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <Landmark className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                National Resources

              </h3>

              <p className="text-gray-600">

                Explore nationwide autism resources, government programs,
                disability services, and trusted organizations available across
                the United States.

              </p>

            </div>


            {/* ESPAÑOL */}

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <Languages className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-xl font-semibold mb-3">

                Español Resources

              </h3>

              <p className="text-gray-600">

                Access bilingual support and resources for Spanish-speaking
                families.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* FEATURED RESOURCES */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">

            Featured Family Guides

          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Autism Diagnosis: First Steps

              </h3>

              <p className="text-gray-600">

                A helpful starting point for families organizing questions,
                appointments, and next steps after diagnosis.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Understanding the IEP Process

              </h3>

              <p className="text-gray-600">

                Learn about school support, educational planning, and preparing
                for conversations with your child's team.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Finding Support Services

              </h3>

              <p className="text-gray-600">

                Explore resources and programs that may help your family find
                additional support.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Recursos en Español

              </h3>

              <p className="text-gray-600">

                Bilingual information and guidance for Spanish-speaking families
                seeking autism resources.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* TRUSTED ORGANIZATIONS */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">

            Trusted Organizations & Resource Categories

          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">

            Connecting families with trusted organizations and information
            that can provide additional support throughout the autism journey.

          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Autism Information

              </h3>

              <p className="text-gray-600">

                Explore trusted sources for autism information, research,
                and family support resources.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Benefits & Assistance

              </h3>

              <p className="text-gray-600">

                Learn about programs, services, and resources that may help
                families navigate available support.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Education Support

              </h3>

              <p className="text-gray-600">

                Find information to help families prepare for school meetings,
                IEP discussions, and advocacy.

              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h3 className="text-xl font-semibold text-blue-700 mb-3">

                Community Resources

              </h3>

              <p className="text-gray-600">

                Discover organizations and community connections that support
                families along the way.

              </p>

            </div>


          </div>

        </div>

      </section>



      {/* RESOURCES CTA */}

      <section className="bg-blue-700 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">

            Can't Find What You're Looking For?

          </h2>

          <p className="text-lg text-blue-100 leading-8 mb-10">

            Every family's autism journey is unique. If you can't find what
            you're looking for, we're here to help you identify the right next
            step, understand your options, and find resources that fit your
            family's needs.

          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition duration-300"
          >

            Schedule Your Free Consultation

          </a>

        </div>

      </section>


    </main>
  );
}
