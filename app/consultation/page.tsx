"use client"

import { motion } from "framer-motion";
import { ClipboardList, HeartHandshake, CheckCircle2 } from "lucide-react";
export default function Consultation() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-sky-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Schedule a Consultation
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          You don't have to navigate the autism journey alone. Whether you've recently received
          a diagnosis or you're looking for guidance, we're here to answer questions,
          provide trusted resources, and help you take the next step with confidence.

        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          <motion.div
  initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
  className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <ClipboardList className="w-10 h-10 text-blue-700 mb-4" />
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              What We Can Help With
            </h2>

            <ul className="space-y-3 text-gray-600">

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    Understanding autism resources and services
  </li>

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    Navigating available programs and support options
  </li>

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    Organizing your next steps
  </li>

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    Answering questions in a private consultation
  </li>

  <li className="flex items-center gap-3">
    <CheckCircle2 className="w-5 h-5 text-blue-700" />
    English and Spanish consultations available
  </li>

</ul>
          </motion.div>

          <motion.div
  initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 1, y: 0 }}
>

  <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
    Consultation Options
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Free Consultation */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-2xl font-bold text-blue-700 mb-3">
        FREE
      </h3>

      <p className="text-lg font-semibold mb-4">
        30-Minute Consultation
      </p>

      <p className="text-gray-600 mb-6">
        Ask questions, discuss your family's needs, and learn how Guiding
        Light Autism Family Support can help.
      </p>

      <a
        href="https://calendly.com/esauleal1/free-30-minute-consultation"
  target="_blank"
  rel="noopener noreferrer"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Schedule Free Consultation
      </a>

    </div>

    {/* Parent Support */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-2xl font-bold text-blue-700 mb-3">
        $65 / Hour
      </h3>

      <div className="flex items-center justify-center gap-2 mb-4">

  <HeartHandshake className="w-6 h-6 text-blue-700" />

  <p className="text-lg font-semibold">
    Parent-to-Parent Coaching
  </p>

</div>

      <p className="text-gray-600 mb-6">
        Sometimes you simply need another parent who understands.
        Share your questions, concerns, victories, and frustrations with
        parents who have walked a similar journey.
      </p>

      <a
         href="https://calendly.com/esauleal1/parent-to-parent-coaching"
  target="_blank"
  rel="noopener noreferrer"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Schedule Support Session
      </a>

    </div>

    {/* Consulting */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-2xl font-bold text-blue-700 mb-3">
        $175 / Hour
      </h3>

      <p className="text-lg font-semibold mb-4">
        Autism Family Consulting
      </p>

      <p className="text-gray-600 mb-6">
        Personalized consulting tailored to your family's unique needs,
        including resource navigation, education planning, benefits,
        transition planning, and next steps.
      </p>

      <a
         href="https://calendly.com/esauleal1/autism-family-consulting"
  target="_blank"
  rel="noopener noreferrer"
        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Book Consulting Session
      </a>

    </div>

  </div>

</motion.div>

<div className="bg-sky-50 rounded-2xl p-8 shadow-lg">

  <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
    What to Expect
  </h2>


  <div className="grid md:grid-cols-3 gap-6">


    <div className="bg-white rounded-xl p-6 text-center shadow hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
  1
</div>

      <h3 className="font-semibold text-lg mb-2">
        Start the Conversation
      </h3>

      <p className="text-gray-600">
        Schedule your free introductory call and share your family's needs,
        questions, and goals.
      </p>

    </div>


    <div className="bg-white rounded-xl p-6 text-center shadow hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
  2
</div>

      <h3 className="font-semibold text-lg mb-2">
        Identify Your Needs
      </h3>

      <p className="text-gray-600">
        We will discuss your situation and help identify resources,
        options, and next steps.
      </p>

    </div>


    <div className="bg-white rounded-xl p-6 text-center shadow hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
  3
</div>

      <h3 className="font-semibold text-lg mb-2">
        Build Your Plan
      </h3>

      <p className="text-gray-600">
        Receive personalized guidance to help your family move forward
        with confidence.
      </p>

    </div>


  </div>

</div>

          <motion.div
  initial={{ opacity: 1, scale: 1 }}
  animate={{ opacity: 1, scale: 1 }}
  className="bg-blue-700 text-white rounded-2xl p-10 text-center"
>

            <h2 className="text-3xl font-bold mb-4">
              Ready to Take the Next Step?
            </h2>

            <p className="mb-6 text-lg">
              You don't have to navigate this journey alone.
            </p>

            <a
               href="https://calendly.com/esauleal1/free-30-minute-consultation"
  target="_blank"
  rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request a Consultation
            </a>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
