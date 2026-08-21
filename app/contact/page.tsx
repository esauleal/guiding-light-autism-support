import { Mail, CalendarCheck, Languages } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Contact Us
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            Have questions or want to learn more about how Guiding Light
            Autism Family Support can help your family? We’d love to hear
            from you.
          </p>

          {/* Contact Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Email */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <Mail className="mb-4 h-8 w-8 text-blue-700" />

              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Email Us
              </h2>

              <p className="mb-5 text-gray-600">
                Have a question? Send us an email and we’ll get back to you.
              </p>

              <a
                href="mailto:info@guidinglightautismsupport.org"
                className="break-words font-semibold text-blue-700 hover:text-blue-900 hover:underline"
              >
                info@guidinglightautismsupport.org
              </a>
            </div>

            {/* Consultation */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <CalendarCheck className="mb-4 h-8 w-8 text-blue-700" />

              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Consultations
              </h2>

              <p className="mb-6 text-gray-600">
                Schedule a free 30-minute consultation to discuss your
                family’s needs and next steps.
              </p>

              <a
                href="/consultation"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
              >
                Schedule a Free Consultation
              </a>
            </div>

            {/* Languages */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 shadow-sm">
              <Languages className="mb-4 h-8 w-8 text-blue-700" />

              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Languages
              </h2>

              <p className="leading-relaxed text-gray-600">
                Services are available in both{" "}
                <strong>English and Spanish</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            You Don’t Have to Navigate This Alone
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-100">
            Whether you’re newly navigating an autism diagnosis or looking
            for additional support, Guiding Light Autism Family Support is
            here to help you find your next step.
          </p>

          <a
            href="/consultation"
            className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-md transition hover:bg-blue-50"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
