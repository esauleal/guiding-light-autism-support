import {
  Mail,
  CalendarCheck,
  Languages,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-sky-50 to-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl bg-blue-100 p-4">
              <MessageCircle className="h-12 w-12 text-blue-700" />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            We're Here to Help
          </p>

          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Contact Guiding Light
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Have questions or want to learn more about how Guiding Light
            Autism Family Support can help your family? Reach out to us.
            Whether you know exactly what you need or simply don't know where
            to start, we're here to help you find your next step.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How Can We Help?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              Choose the option that works best for your family. We're
              committed to making it easy to take the next step.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* EMAIL */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-xl bg-white p-4 shadow-sm">
                <Mail className="h-9 w-9 text-blue-700" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-blue-700">
                Email Us
              </h2>

              <p className="mb-6 leading-7 text-gray-600">
                Have a question or want to tell us a little about what your
                family needs? Send us an email and we'll get back to you.
              </p>

              <a
                href="mailto:info@guidinglightautismsupport.org"
                className="break-words font-semibold text-blue-700 hover:text-blue-900 hover:underline"
              >
                info@guidinglightautismsupport.org
              </a>
            </div>

            {/* CONSULTATION */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-xl bg-white p-4 shadow-sm">
                <CalendarCheck className="h-9 w-9 text-blue-700" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-blue-700">
                Schedule a Consultation
              </h2>

              <p className="mb-6 leading-7 text-gray-600">
                Schedule a free 30-minute consultation to discuss your
                family's needs, questions, and possible next steps.
              </p>

              <a
                href="/consultation"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
              >
                Schedule Free Consultation
              </a>
            </div>

            {/* LANGUAGES */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-xl bg-white p-4 shadow-sm">
                <Languages className="h-9 w-9 text-blue-700" />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-blue-700">
                English & Spanish
              </h2>

              <p className="leading-7 text-gray-600">
                Services are available in both{" "}
                <strong className="text-gray-800">
                  English and Spanish
                </strong>
                , helping more families access guidance, resources, and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WRAP-AROUND APPROACH */}
      <section className="bg-sky-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
            <HeartHandshake className="mx-auto mb-6 h-12 w-12 text-blue-700" />

            <h2 className="mb-5 text-3xl font-bold text-blue-700 md:text-4xl">
              Support That Looks at the Whole Family
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
              Guiding Light uses a wrap-around approach to family support.
              That means we look beyond a single question or service and
              consider the bigger picture — your family's needs, goals,
              resources, challenges, and next steps.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              You don't have to know exactly what to ask before reaching out.
              Sometimes the first step is simply having someone help you
              understand where to begin.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            You Don't Have to Navigate This Alone
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you're newly navigating an autism diagnosis, looking for
            resources, preparing for adulthood, or simply unsure where to
            start, Guiding Light Autism Family Support is here to help you
            find your next step.
          </p>

          <a
            href="/consultation"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-center font-bold text-gray-900 shadow-lg transition hover:scale-105 hover:bg-yellow-300"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

