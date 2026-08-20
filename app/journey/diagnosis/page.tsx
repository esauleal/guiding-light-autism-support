import {
  Puzzle,
  ClipboardList,
  HeartHandshake,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function DiagnosisPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-sky-50 py-20 px-6 text-center">
        <Puzzle className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Received an Autism Diagnosis?
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
          First, take a deep breath.
          You are not alone.
          Thousands of families have started exactly where you are today.
          This guide will help you understand your next steps.
        </p>
      </section>

      {/* First Steps */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
            Your First Steps
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <ClipboardList className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                Don't Panic
              </h3>

              <p className="text-gray-600">
                Receiving an autism diagnosis can bring many emotions.
                Give yourself time to process everything.
                There is no need to figure it all out today.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                You're Not Alone
              </h3>

              <p className="text-gray-600">
                Every autism journey is different.
                Connecting with experienced parents can provide reassurance,
                encouragement, and practical advice.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-700 text-white py-20 px-6 text-center">

        <CalendarDays className="w-14 h-14 mx-auto mb-6" />

        <h2 className="text-3xl font-bold mb-6">

          Need Someone to Talk To?

        </h2>

        <p className="text-lg max-w-3xl mx-auto mb-8">

          Schedule a free 30-minute consultation.
          We'll answer your questions and help you identify your next steps.

        </p>

        <a
          href="https://calendly.com/esauleal1/free-30-minute-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          Schedule Free Consultation
          <ArrowRight className="w-5 h-5" />
        </a>

      </section>

    </main>
  );
}