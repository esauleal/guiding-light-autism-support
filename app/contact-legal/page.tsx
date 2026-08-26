import {
  Mail,
  ShieldCheck,
  FileText,
  Accessibility,
  AlertTriangle,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

export default function ContactLegal() {
  return (
    <main className="bg-white text-slate-800">

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <HeartHandshake size={28} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            GUIDING LIGHT AUTISM FAMILY SUPPORT
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-5xl">
            Contact & Legal Information
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Information about contacting Guiding Light Autism Family Support,
            our services, and the policies that govern your use of our website
            and services.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Last Updated: August 26, 2026
          </p>

        </div>
      </section>

      {/* Contact Card */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-blue-50 p-8 shadow-sm">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
              <Mail size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-800">
                Contact Guiding Light
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                If you have questions about our services, website,
                consultations, accessibility, policies, or resources, we
                welcome you to contact us.
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                We will make reasonable efforts to respond to inquiries as
                soon as reasonably possible.
              </p>

              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Us
                <ExternalLink size={17} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="text-blue-600" size={24} />

            <h2 className="text-2xl font-bold text-blue-800">
              1. About Guiding Light
            </h2>
          </div>

          <div className="space-y-5 leading-7 text-slate-600">

            <p>
              Guiding Light Autism Family Support provides educational
              information, family guidance, resource navigation, and
              parent-to-parent support for families navigating autism-related
              services and resources.
            </p>

            <p>
              Our goal is to help families better understand available
              resources, identify possible next steps, and feel more
              confident as they navigate their autism journey.
            </p>

            <p>
              Guiding Light Autism Family Support is not a medical,
              psychological, legal, financial, or emergency services
              provider.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 flex items-center gap-3">
            <HeartHandshake className="text-blue-600" size={24} />

            <h2 className="text-2xl font-bold text-blue-800">
              2. Our Services
            </h2>
          </div>

          <div className="space-y-5 leading-7 text-slate-600">

            <p>
              Depending on the service selected, Guiding Light may provide
              parent-to-parent coaching, educational guidance, resource
              navigation, consultation, and other family-support services
              described on our website.
            </p>

            <p>
              Services are intended to provide families with information,
              guidance, and support. They are not intended to replace
              individualized professional services when those services are
              needed.
            </p>

          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 flex items-center gap-3">
            <FileText className="text-blue-600" size={24} />

            <h2 className="text-2xl font-bold text-blue-800">
              3. Important Policies
            </h2>
          </div>

          <p className="mb-8 leading-7 text-slate-600">
            Our policies provide additional information about how Guiding
            Light operates and what families can expect when using our
            website and services.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">

            <a
              href="/terms-of-service"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Terms of Service
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                General terms governing use of our website and services.
              </p>
            </a>

            <a
              href="/privacy-policy"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Privacy Policy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Information about privacy and how information may be handled.
              </p>
            </a>

            <a
              href="/refund-policy"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Refund & Cancellation Policy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Information about cancellations, refunds, and related
                service policies.
              </p>
            </a>

            <a
              href="/disclaimer"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Disclaimer
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Important information about the nature and limitations of our
                services and information.
              </p>
            </a>

            <a
              href="/accessibility"
              className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <h3 className="font-bold text-blue-800">
                Accessibility Statement
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Information about our accessibility efforts and how to report
                accessibility concerns.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 p-8">

          <div className="flex gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <AlertTriangle size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Emergency Situations
              </h2>

              <p className="mt-3 leading-7 text-slate-700">
                Guiding Light Autism Family Support does not provide emergency,
                crisis, medical emergency, law-enforcement, or other
                immediate-response services.
              </p>

              <p className="mt-3 font-semibold leading-7 text-slate-800">
                If you or your child is experiencing an emergency or immediate
                safety concern, contact 911 or the appropriate emergency
                service in your area.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 flex items-center gap-3">
            <Accessibility className="text-blue-600" size={24} />

            <h2 className="text-2xl font-bold text-blue-800">
              Accessibility Questions
            </h2>
          </div>

          <p className="leading-7 text-slate-600">
            If you experience difficulty accessing information or using any
            part of our website, please contact us through our Contact page.
            We welcome feedback that may help us improve the accessibility
            and usability of our website.
          </p>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-blue-600 p-8 text-white sm:p-10">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a Question?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-blue-50">
            Whether you have a question about our services, policies,
            accessibility, or how Guiding Light may be able to support your
            family, we're here to help.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Contact Us
            <ExternalLink size={17} />
          </a>

        </div>
      </section>

      {/* Footer Note */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm leading-6 text-slate-500">
            This page is provided for general informational purposes and
            should be read together with Guiding Light Autism Family Support's
            applicable policies and service information.
          </p>

        </div>
      </section>

    </main>
  );
}

