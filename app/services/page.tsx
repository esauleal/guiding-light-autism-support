import { Compass, FileText, Lightbulb, Languages, Sparkles, CheckCircle2, HeartHandshake } from "lucide-react";
export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-sky-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Our Services
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guiding Light Autism Family Support provides compassionate
          guidance, trusted resources, and personalized support to help 
          families confidently navigate every stage of the autism journey.
        </p>
      </section>


      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">


          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <Compass className="w-10 h-10 text-blue-700 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Family Navigation & Advocacy
            </h2>

            <p className="text-gray-600">
              Helping families understand available resources,
              programs, and next steps throughout their autism journey.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <FileText className="w-10 h-10 text-blue-700 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Benefits & Resource Guidance
            </h2>

            <p className="text-gray-600">
              Guidance in identifying support options, community
              resources, and programs that may benefit your family.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <Lightbulb className="w-10 h-10 text-blue-700 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Personalized Support Planning
            </h2>

            <p className="text-gray-600">
              Every family has a unique journey. We help create a
              personalized path based on your goals and needs.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <Languages className="w-10 h-10 text-blue-700 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Bilingual Family Support
            </h2>

            <p className="text-gray-600">
              Providing guidance in English and Spanish to help
              families access information more easily.
            </p>
          </div>


        </div>
      </section>
{/* Free Consultation */}

<section className="bg-sky-50 py-20 px-6">

  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

    <div className="flex items-center gap-3 mb-6">

  <Sparkles className="w-8 h-8 text-blue-700" />

  <h2 className="text-3xl font-bold text-blue-700">
    Free 30-Minute Consultation
  </h2>

</div>

    <p className="text-lg text-gray-600 leading-9">

      Every family's autism journey is different. During your complimentary consultation,
      we'll take time to understand your family's unique situation, answer your questions,
      and help identify resources and next steps tailored to your needs.

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
    Identify possible next steps
  </li>

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    No obligation — just compassionate support
  </li>

</ul>

  </div>

</section>

{/* Pricing */}

<section className="py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
      Transparent Pricing
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* FREE */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          FREE
        </h3>

        <p className="text-lg font-semibold">
          30-Minute Consultation
        </p>

        <p className="text-gray-600 mt-4">
          Ask questions, discuss your family's needs, and discover how
          Guiding Light Autism Family Support can help.
        </p>

      </div>

      {/* PARENT SUPPORT */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          $65 / Hour
        </h3>

        <div className="flex items-center justify-center gap-2 mb-4">

  <HeartHandshake className="w-6 h-6 text-blue-700" />

  <p className="text-lg font-semibold">
    Parent-to-Parent Coaching
  </p>

</div>

        <p className="text-gray-600">
          Sometimes you simply need someone who understands.
          As parents raising two adult children with autism, we provide
          a safe, compassionate space to ask questions, share concerns,
          receive encouragement, and talk with someone who has walked a
          similar journey.
        </p>

      </div>

      {/* CONSULTING */}

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          $175 / Hour
        </h3>

        <p className="text-lg font-semibold">
          Autism Family Consulting
        </p>

        <p className="text-gray-600 mt-4">
          One-on-one guidance tailored to your family's unique needs,
          resources, and next steps.
        </p>

      </div>


    </div>

    <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        What is a Parent-to-Parent Coaching?
      </h3>

      <p className="text-gray-600 leading-8">
        Parent-to-Parent Coaching provide encouragement, shared
        experiences, practical guidance, and emotional support from
        parents who have lived the autism journey themselves. These
        sessions are not counseling, therapy, or medical advice, but an
        opportunity to connect with someone who truly understands.
      </p>

    </div>

  </div>

</section>

{/* Important Notice */}

<section className="bg-gray-50 py-16 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-2xl font-bold text-blue-700 mb-6">
      Important Information
    </h2>

    <p className="text-gray-600 leading-8">
      Guiding Light Autism Family Support provides guidance, education,
      resource navigation, and advocacy support. We do not provide medical,
      legal, psychological, therapeutic, or clinical advice. Families are
      encouraged to consult licensed professionals regarding medical,
      educational, or legal decisions.
    </p>

  </div>

</section>

      <section className="bg-blue-700 text-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Next Step?
        </h2>

        <p className="text-lg mb-6">
          Every family's journey is unique. Let us help you find
          resources, answers, and a clear path forward.
        </p>

        <a
  href="https://calendly.com/esauleall/free-30-minute-consultation"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-4 rounded-lg font-semibold text-center leading-tight"
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