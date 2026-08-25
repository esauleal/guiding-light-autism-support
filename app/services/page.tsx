import {
  Compass,
  FileText,
  Lightbulb,
  Languages,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Search,
  UsersRound,
} from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-sky-50 py-20 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Our Services
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          Guiding Light Autism Family Support provides compassionate
          guidance, trusted resources, personalized research, and practical
          support to help families confidently navigate every stage of the
          autism journey.
        </p>

      </section>


      {/* CORE SERVICES */}
      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* FAMILY NAVIGATION */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <Compass className="w-10 h-10 text-blue-700 mb-4" />

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Family Navigation & Advocacy
            </h2>

            <p className="text-gray-600 leading-8">
              Helping families understand available resources, programs,
              services, and next steps throughout their autism journey.
            </p>

          </div>


          {/* BENEFITS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <FileText className="w-10 h-10 text-blue-700 mb-4" />

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Benefits & Resource Guidance
            </h2>

            <p className="text-gray-600 leading-8">
              Guidance in identifying support options, community resources,
              and programs that may benefit your family.
            </p>

          </div>


          {/* SUPPORT PLANNING */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <Lightbulb className="w-10 h-10 text-blue-700 mb-4" />

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Personalized Support Planning
            </h2>

            <p className="text-gray-600 leading-8">
              Every family has a unique journey. We help create a
              personalized path based on your goals, priorities, and needs.
            </p>

          </div>


          {/* BILINGUAL */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <Languages className="w-10 h-10 text-blue-700 mb-4" />

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Bilingual Family Support
            </h2>

            <p className="text-gray-600 leading-8">
              Providing guidance in English and Spanish to help families
              access information and resources more easily.
            </p>

          </div>

        </div>

      </section>


      {/* WRAP-AROUND APPROACH */}
      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="flex justify-center mb-5">
              <UsersRound className="w-12 h-12 text-blue-700" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5">
              Our Wrap-Around Approach
            </h2>

            <p className="text-xl font-semibold text-gray-800">
              Supporting the whole family — not just one piece of the puzzle.
            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <div className="max-w-4xl mx-auto text-center">

              <p className="text-lg text-gray-600 leading-8 mb-6">
                At Guiding Light Autism Family Support, we take a wrap-around
                approach to family support. We recognize that families may
                need guidance across multiple areas of the autism journey,
                and those needs can change over time.
              </p>

              <p className="text-lg text-gray-600 leading-8 mb-6">
                Rather than focusing on just one challenge or one service, we
                look at the bigger picture. We listen to your family's
                priorities, help identify the pieces of support you may need,
                research available resources, and help organize the information
                so you can make informed decisions.
              </p>

              <p className="text-lg text-gray-600 leading-8">
                Our services are designed to work together based on your
                family's individual needs. Whether you need help navigating
                resources, understanding benefits, planning next steps,
                finding providers, or simply having someone who understands
                the journey, our goal is to help connect the pieces and create
                a clearer path forward.
              </p>

            </div>


            {/* WRAP-AROUND PRINCIPLES */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">

              {/* FAMILY CENTERED */}
              <div className="bg-sky-50 rounded-2xl p-7 text-center">

                <HeartHandshake className="w-10 h-10 text-blue-700 mx-auto mb-4" />

                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Family-Centered
                </h3>

                <p className="text-gray-600 leading-7">
                  Your family's goals, priorities, strengths, and circumstances
                  guide the support we provide.
                </p>

              </div>


              {/* CONNECTED SUPPORT */}
              <div className="bg-sky-50 rounded-2xl p-7 text-center">

                <Compass className="w-10 h-10 text-blue-700 mx-auto mb-4" />

                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Connected Support
                </h3>

                <p className="text-gray-600 leading-7">
                  We help bring together information, resources, services, and
                  practical next steps.
                </p>

              </div>


              {/* PERSONALIZED GUIDANCE */}
              <div className="bg-sky-50 rounded-2xl p-7 text-center">

                <Lightbulb className="w-10 h-10 text-blue-700 mx-auto mb-4" />

                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Personalized Guidance
                </h3>

                <p className="text-gray-600 leading-7">
                  There is no one-size-fits-all path. We tailor our support to
                  what your family actually needs.
                </p>

              </div>

            </div>


            {/* FINAL WRAP-AROUND MESSAGE */}
            <div className="mt-10 bg-blue-50 rounded-2xl p-7 text-center">

              <p className="text-xl font-bold text-blue-700">
                Your family is at the center of everything we do.
              </p>

              <p className="text-gray-600 mt-2">
                We help connect the pieces so you can move forward with greater
                clarity and confidence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FREE CONSULTATION */}
      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="flex items-center gap-3 mb-6">

            <Sparkles className="w-8 h-8 text-blue-700" />

            <h2 className="text-3xl font-bold text-blue-700">
              Free 30-Minute Consultation
            </h2>

          </div>

          <p className="text-lg text-gray-600 leading-9">
            Every family's autism journey is different. During your
            complimentary consultation, we'll take time to understand your
            family's unique situation, answer your initial questions, and
            discuss how Guiding Light may be able to help. If your needs
            require customized research, resource gathering, or additional
            planning after the consultation, we'll explain the available
            paid options before beginning that work.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700">

            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              Learn about your family's needs
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              Discuss available resources and services
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              Receive practical guidance
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              Discuss possible next steps and support options
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              No obligation — just compassionate support
            </li>

          </ul>


          <div className="mt-8 bg-blue-50 rounded-xl p-5">

            <p className="text-sm text-gray-700 leading-7">

              <span className="font-semibold text-blue-700">
                Please note:
              </span>{" "}

              The free consultation is intended for initial discussion,
              questions, and guidance. Customized research, detailed resource
              lists, resource comparisons, planning, or other work completed
              beyond the consultation may require a paid service.

            </p>

          </div>

        </div>

      </section>


      {/* RESEARCH & RESOURCE SUPPORT */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="flex justify-center mb-4">
              <Search className="w-12 h-12 text-blue-700" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5">
              Research & Resource Support
            </h2>

            <p className="text-xl font-semibold text-gray-800 mb-4">
              You tell us what you need. We do the research. You get the
              results.
            </p>

            <p className="text-lg text-gray-600 leading-8">
              Finding the right resources can take hours of searching,
              comparing, calling, and trying to figure out where to start.
              Guiding Light takes that research burden off your shoulders.
            </p>

          </div>


          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">

            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* LEFT */}
              <div>

                <h3 className="text-2xl font-bold text-blue-700 mb-5">
                  Let Us Do the Legwork
                </h3>

                <p className="text-gray-700 leading-8 mb-6">
                  Tell us what you're looking for and what matters most to
                  your family. We'll research relevant options based on your
                  needs, preferences, and location.
                </p>

                <p className="text-gray-700 leading-8">
                  We don't simply tell you where you can search.{" "}

                  <span className="font-semibold text-blue-700">
                    We do the research and present you with the findings.
                  </span>

                </p>

              </div>


              {/* RIGHT */}
              <div>

                <h3 className="text-2xl font-bold text-blue-700 mb-5">
                  What Can We Research?
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Daycares and childcare programs
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Therapists and therapy providers
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Autism centers and specialized programs
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Doctors and specialists
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Schools and educational programs
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Respite and caregiver resources
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Financial and community resources
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    Other resources specific to your family's needs
                  </li>

                </ul>

              </div>

            </div>


            {/* RESULTS */}
            <div className="mt-10 bg-white rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                What You Receive
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                Our findings are organized into a clear, personalized
                resource summary. Depending on the request, this may include
                the organization or provider name, services offered,
                location, contact information, website, eligibility
                information when available, and other relevant details.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />

                  <span className="text-gray-700">
                    Actual resources and options we found
                  </span>

                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />

                  <span className="text-gray-700">
                    Contact and website information
                  </span>

                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />

                  <span className="text-gray-700">
                    Relevant details about each option
                  </span>

                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 mt-1 shrink-0" />

                  <span className="text-gray-700">
                    A clearer place to start
                  </span>

                </div>

              </div>

            </div>


            {/* TAGLINE */}
            <div className="mt-10 text-center">

              <p className="text-2xl font-bold text-blue-700">
                Let us carry the research burden for you.
              </p>

              <p className="text-gray-600 mt-2">
                You focus on your family. We'll focus on finding the resources.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PRICING */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
            Transparent Pricing
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Choose the type of support that best fits your family's needs.
          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* FREE CONSULTATION */}
            <a
              href="https://calendly.com/esauleal1/free-30-minute-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >

              <div className="h-full bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  FREE
                </h3>

                <p className="text-lg font-semibold">
                  30-Minute Consultation
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  Ask questions, discuss your family's needs, and discover how
                  Guiding Light Autism Family Support can help.
                </p>

                <div className="mt-6 bg-blue-50 rounded-xl p-3">

                  <p className="font-semibold text-blue-700">
                    Schedule Consultation →
                  </p>

                </div>

              </div>

            </a>


            {/* PARENT-TO-PARENT COACHING */}
            <a
              href="https://calendly.com/esauleal1/parent-to-parent-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >

              <div className="h-full bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  $65 / Hour
                </h3>

                <div className="flex items-center justify-center gap-2 mb-4">

                  <HeartHandshake className="w-6 h-6 text-blue-700" />

                  <p className="text-lg font-semibold">
                    Parent-to-Parent Coaching
                  </p>

                </div>

                <p className="text-gray-600 leading-7">
                  Sometimes you simply need someone who understands. As
                  parents raising two adult children with autism, we provide a
                  safe, compassionate space to ask questions, share concerns,
                  receive encouragement, and talk with someone who has walked
                  a similar journey.
                </p>

                <div className="mt-6 bg-blue-50 rounded-xl p-3">

                  <p className="font-semibold text-blue-700">
                    Schedule Coaching →
                  </p>

                </div>

              </div>

            </a>


            {/* AUTISM FAMILY CONSULTING */}
            <a
              href="https://calendly.com/esauleal1/autism-family-consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >

              <div className="h-full bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  $175 / Hour
                </h3>

                <p className="text-lg font-semibold mb-4">
                  Autism Family Consulting
                </p>

                <p className="text-gray-600 leading-7">
                  One-on-one guidance tailored to your family's unique needs,
                  questions, resources, and next steps.
                </p>

                <div className="mt-6 bg-blue-50 rounded-xl p-4">

                  <p className="font-semibold text-blue-700">
                    Talk with us. Get guidance.
                  </p>

                </div>

                <div className="mt-4">

                  <p className="font-semibold text-blue-700">
                    Schedule Consulting →
                  </p>

                </div>

              </div>

            </a>


            {/* RESEARCH PACKAGE */}
            <a
              href="https://calendly.com/esauleal1/autism-resource-research-package"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >

              <div className="h-full bg-blue-700 text-white rounded-2xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                <Search className="w-8 h-8 mx-auto mb-4 text-white" />

                <h3 className="text-2xl font-bold mb-4">
                  $350
                </h3>

                <p className="text-lg font-semibold mb-4">
                  Research Package
                </p>

                <p className="text-blue-50 leading-7">
                  Up to 2 hours of customized research. Tell us what you need,
                  we'll do the legwork, and we'll present you with the results
                  we find.
                </p>

                <div className="mt-6 bg-white/10 rounded-xl p-4">

                  <p className="font-semibold">
                    You tell us what you need.
                  </p>

                  <p className="font-semibold">
                    We do the research.
                  </p>

                  <p className="font-semibold">
                    You get the results.
                  </p>

                </div>

                <p className="text-sm text-blue-100 mt-5">
                  Additional research beyond the included 2 hours is available
                  at $175/hour.
                </p>

                <div className="mt-6 bg-white/10 rounded-xl p-3">

                  <p className="font-semibold">
                    Schedule Research Package →
                  </p>

                </div>

              </div>

            </a>

          </div>


          {/* PARENT COACHING EXPLANATION */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              What is Parent-to-Parent Coaching?
            </h3>

            <p className="text-gray-600 leading-8">
              Parent-to-Parent Coaching provides encouragement, shared
              experiences, practical guidance, and emotional support from
              parents who have lived the autism journey themselves. These
              sessions are not counseling, therapy, or medical advice, but an
              opportunity to connect with someone who truly understands.
            </p>

          </div>

        </div>

      </section>


      {/* IMPORTANT NOTICE */}
      <section className="bg-gray-50 py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Important Information
          </h2>

          <p className="text-gray-600 leading-8">
            Guiding Light Autism Family Support provides guidance, education,
            resource navigation, research support, and advocacy support. We
            do not provide medical, legal, psychological, therapeutic, or
            clinical advice. Families are encouraged to consult licensed
            professionals regarding medical, educational, or legal decisions.
          </p>

          <p className="text-gray-500 text-sm leading-7 mt-5">
            Research results are based on information available at the time
            of the research. Guiding Light does not guarantee availability,
            eligibility, acceptance, quality, or suitability of any provider,
            program, organization, or resource identified through our
            research.
          </p>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Next Step?
        </h2>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Every family's journey is unique. Let us help you find resources,
          answers, and a clear path forward.
        </p>

        <a
          href="https://calendly.com/esauleal1/free-30-minute-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-4 rounded-lg font-semibold text-center leading-tight hover:bg-sky-50 transition-colors"
        >
          <span>
            Schedule Your Free
            <br className="sm:hidden" />
            <span className="sm:ml-1">Consultation</span>
          </span>
        </a>

      </section>

    </main>
  );
}

