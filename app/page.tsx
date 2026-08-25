"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  HeartHandshake,
  GraduationCap,
  Wallet,
  Accessibility,
  Download,
  Puzzle,
  BookOpen,
  Users,
  Lightbulb,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Link2,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Compass,
      title: "Navigate Services",
      description:
        "We help families understand available autism resources, benefits, and support systems so they can make informed decisions.",
    },

    {
      icon: BookOpen,
      title: "Access Resources",
      description:
        "Receive guidance connecting with educational, financial, medical, and community resources.",
    },

    {
      icon: Users,
      title: "Family Support",
      description:
        "Every family journey is unique. We provide compassionate guidance tailored to your specific needs.",
    },

    {
      icon: Lightbulb,
      title: "Find Your Path",
      description:
        "Turn confusion into clarity with practical steps and personalized support.",
    },
  ];

  const reasons = [
    "Personalized guidance for every family's unique situation",
    "Experience navigating autism support systems",
    "Compassionate support without judgment",
    "Resources designed for families in the United States and Mexico",
  ];

  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 lg:py-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-6">

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

                <Lightbulb size={18} />

                Autism Family Support & Guidance

              </span>

            </div>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">

              Helping Families Find{" "}

              <span className="text-blue-700">
                Guidance, Resources,
              </span>{" "}

              and Hope

            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">

              Navigating autism services can feel overwhelming. Guiding Light
              Autism Family Support helps families understand their options,
              access resources, and move forward with confidence.

            </p>


            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="https://calendly.com/esauleal1/free-30-minute-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
              >
                Schedule My Free Consultation
              </Link>


              <Link
                href="/about"
                className="rounded-full border-2 border-blue-700 px-8 py-4 text-lg font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Learn More
              </Link>

            </div>


            <div className="mt-8 flex items-center gap-3 text-gray-600">

              <ShieldCheck className="text-blue-700" />

              <p>
                Compassionate guidance built around your family's needs.
              </p>

            </div>

          </motion.div>


          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute -inset-4 rounded-3xl bg-blue-200 blur-2xl opacity-40" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/guiding-light-hero.png"
                alt="Sunlight shining through clouds"
                width={900}
                height={900}
                className="w-full h-[500px] object-cover"
                priority
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* WHERE ARE YOU ON YOUR JOURNEY? */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">

            Where Are You on Your Journey?

          </h2>

          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-14">

            Every family's journey is different. Choose the area where you need
            the most support, and we'll help guide you to the next step.

          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* DIAGNOSIS */}

            <Link
              href="/journey/diagnosis"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <Puzzle className="w-12 h-12 mx-auto text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold text-blue-700 mb-3">

                My Child Was Just Diagnosed

              </h3>

              <p className="text-gray-600">

                Learn the first steps to take after receiving an autism
                diagnosis.

              </p>

            </Link>


            {/* SCHOOL */}

            <Link
              href="/journey/education"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <GraduationCap className="w-12 h-12 mx-auto text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold text-blue-700 mb-3">

                I Need School & IEP Help

              </h3>

              <p className="text-gray-600">

                Understand educational services, ARD meetings, and IEP
                planning.

              </p>

            </Link>


            {/* BENEFITS */}

            <Link
              href="/journey/benefits"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <Wallet className="w-12 h-12 mx-auto text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold text-blue-700 mb-3">

                I Need Help With Benefits

              </h3>

              <p className="text-gray-600">

                Explore SSI, Medicaid, waiver programs, and financial
                resources.

              </p>

            </Link>


            {/* PARENT */}

            <Link
              href="/journey/parent-support"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <HeartHandshake className="w-12 h-12 mx-auto text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold text-blue-700 mb-3">

                I Need Parent Support

              </h3>

              <p className="text-gray-600">

                Encouragement, coaching, support groups, and guidance from
                parents who understand.

              </p>

            </Link>


            {/* ADULT */}

            <Link
              href="/journey/adult-transition"
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <Accessibility className="w-12 h-12 mx-auto text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold text-blue-700 mb-3">

                My Child Is Becoming an Adult

              </h3>

              <p className="text-gray-600">

                Learn about transition planning, guardianship, employment, and
                adult services.

              </p>

            </Link>


            {/* DOWNLOADS */}

            <Link
              href="/downloads"
              className="bg-blue-700 rounded-2xl shadow-xl p-8 text-center text-white hover:scale-105 transition-all duration-300"
            >

              <Download className="w-12 h-12 mx-auto mb-5" />

              <h3 className="text-2xl font-bold mb-3">

                Free Family Toolkit

              </h3>

              <p className="text-blue-100">

                Download checklists, planners, guides, and helpful resources
                created by parents, for parents.

              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* BRAND PROMISE */}

      <section className="py-20 bg-sky-50">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">

            Received an Autism Diagnosis?

          </h2>

          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">

            Not sure where to start?

          </h3>

          <p className="text-2xl font-bold text-blue-600 mb-8">

            We're here to help.

          </p>

          <p className="text-lg text-gray-600 leading-8 mb-10">

            Every autism journey begins with questions. Whether you've just
            received a diagnosis or you're searching for resources years later,
            Guiding Light Autism Family Support is here to provide compassionate
            guidance, trusted resources, and a clear path forward for your
            family.

          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition duration-300"
          >
            Schedule Your Free Consultation
          </a>

        </div>

      </section>


      {/* HOW WE HELP FAMILIES */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <h2 className="text-4xl font-bold text-gray-900">

              How We Help Families

            </h2>

            <p className="mt-4 text-lg text-gray-600">

              We provide practical support and guidance to help families
              understand autism resources and confidently navigate their journey.

            </p>

          </motion.div>


          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <motion.div
                  key={service.title}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-blue-50 p-8 shadow-md hover:shadow-xl transition"
                >

                  <div className="mb-5 inline-flex rounded-xl bg-white p-4 shadow">

                    <Icon className="text-blue-700" size={32} />

                  </div>

                  <h3 className="text-xl font-bold text-gray-900">

                    {service.title}

                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">

                    {service.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* OUR WRAP-AROUND APPROACH */}

      <section className="bg-sky-50 py-20">

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >

            <div className="flex justify-center mb-5">

              <Users className="w-12 h-12 text-blue-700" />

            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">

              Our Wrap-Around Approach

            </h2>

            <p className="text-xl font-semibold text-gray-800 mb-8">

              More Than One Need. More Than One Answer.

            </p>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

              <p className="text-lg text-gray-600 leading-8 mb-6">

                Autism can affect many parts of a family's life. That's why
                Guiding Light takes a wrap-around approach—looking at the whole
                family and helping connect the pieces of support that matter
                most.

              </p>

              <p className="text-lg text-gray-600 leading-8">

                From diagnosis and education to benefits, family support,
                adulthood, resources, and planning for the future, we're here
                to help families understand their options and find a clearer
                path forward.

              </p>

            </div>

          </motion.div>


          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {/* FAMILY-CENTERED */}

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 text-center shadow-md"
            >

              <HeartHandshake className="w-10 h-10 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">

                Family-Centered

              </h3>

              <p className="text-gray-600 leading-7">

                Your family's goals, priorities, strengths, and circumstances
                guide the support we provide.

              </p>

            </motion.div>


            {/* CONNECTED SUPPORT */}

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 text-center shadow-md"
            >

              <Link2 className="w-10 h-10 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">

                Connected Support

              </h3>

              <p className="text-gray-600 leading-7">

                We help bring together information, resources, services, and
                practical next steps.

              </p>

            </motion.div>


            {/* PERSONALIZED GUIDANCE */}

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-7 text-center shadow-md"
            >

              <Lightbulb className="w-10 h-10 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">

                Personalized Guidance

              </h3>

              <p className="text-gray-600 leading-7">

                There is no one-size-fits-all path. We help families identify
                the support and next steps that fit their individual needs.

              </p>

            </motion.div>

          </div>


          <div className="mt-8 text-center">

            <p className="text-xl font-bold text-blue-700">

              Your family is at the center of everything we do.

            </p>

          </div>

        </div>

      </section>


      {/* MISSION SECTION */}

      <section className="bg-gradient-to-b from-blue-50 to-white py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-blue-700 font-semibold uppercase tracking-wide">

              Our Mission

            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">

              Guiding Families Through Every Step of the Journey

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Our mission is to empower families affected by autism by
              providing clear guidance, meaningful resources, and compassionate
              support when they need it most.

            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">

              We believe families should not have to navigate complicated
              systems alone. Every family deserves access to information,
              encouragement, and a path forward.

            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >

            <HeartHandshake className="text-blue-700 mb-6" size={48} />

            <h3 className="text-2xl font-bold text-gray-900">

              Family-Centered Support

            </h3>

            <p className="mt-4 text-gray-600 leading-7">

              We focus on understanding your family's unique challenges and
              helping you identify practical solutions that fit your situation.

            </p>

          </motion.div>

        </div>

      </section>


      {/* NEED GUIDANCE CTA */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blue-700 px-8 py-14 text-center text-white shadow-2xl"
          >

            <h2 className="text-4xl font-bold">

              Need Guidance?

            </h2>

            <p className="mt-5 mx-auto max-w-3xl text-lg text-blue-100">

              If you are feeling overwhelmed by autism services, benefits,
              or resources, we are here to help you understand your options
              and create a plan.

            </p>

            <a
              href="https://calendly.com/esauleal1/free-30-minute-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
            >

              Schedule Your Free Consultation

            </a>

          </motion.div>

        </div>

      </section>


      {/* OUR STORY */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-bold text-gray-900">

              Our Story

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Guiding Light Autism Family Support was created from a passion
              for helping families who are searching for answers, resources,
              and support after an autism diagnosis.

            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">

              We understand that every family's journey is different. From
              finding resources to understanding available support systems,
              our goal is to help families move forward with confidence and
              hope.

            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">

              Through compassion, experience, and practical guidance, we walk
              alongside families as they discover the resources available to
              them.

            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-yellow-50 p-10"
          >

            <Lightbulb className="text-yellow-600 mb-6" size={50} />

            <h3 className="text-2xl font-bold text-gray-900">

              A Light When Things Feel Unclear

            </h3>

            <p className="mt-4 text-gray-600 leading-7">

              Our purpose is simple: provide families with knowledge,
              direction, and encouragement so they never feel alone in their
              journey.

            </p>

          </motion.div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="bg-gradient-to-b from-white to-blue-50 py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <h2 className="text-4xl font-bold text-gray-900">

              Why Choose Guiding Light?

            </h2>

            <p className="mt-5 text-lg text-gray-600">

              Families deserve more than information. They deserve guidance,
              understanding, and someone who can help them navigate the path
              ahead.

            </p>

          </motion.div>


          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {reasons.map((reason, index) => (

              <motion.div
                key={reason}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-md"
              >

                <ShieldCheck
                  className="mt-1 text-blue-700 flex-shrink-0"
                  size={26}
                />

                <p className="text-gray-700 text-lg">

                  {reason}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-900 p-12 text-center text-white shadow-2xl"
          >

            <h2 className="text-4xl md:text-5xl font-bold">

              You Don't Have To Navigate This Alone

            </h2>

            <p className="mt-6 mx-auto max-w-3xl text-lg text-blue-100">

              Take the first step toward understanding your options and
              finding the support your family deserves.

            </p>

            <a
              href="https://calendly.com/esauleal1/free-30-minute-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
            >

              Schedule Your Free Consultation

            </a>

          </motion.div>

        </div>

      </section>


    </main>
  );
}
