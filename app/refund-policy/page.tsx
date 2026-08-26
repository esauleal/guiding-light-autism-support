import {
  CalendarClock,
  CheckCircle2,
  HeartHandshake,
  Mail,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-sky-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">

          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl bg-blue-100 p-4">
              <ShieldCheck className="h-12 w-12 text-blue-700" />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Guiding Light Autism Family Support
          </p>

          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Refund & Cancellation Policy
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Our goal is to provide families with clear expectations,
            compassionate support, and a straightforward experience when
            scheduling services with Guiding Light.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: August 26, 2026
          </p>

        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm md:p-8">

          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-blue-700" />

            <div>
              <h2 className="mb-3 text-xl font-bold text-blue-700">
                Important Payment Information
              </h2>

              <p className="leading-8 text-gray-700">
                <strong>
                  Payments for Guiding Light's paid services are
                  nonrefundable once payment has been made.
                </strong>{" "}
                Eligible appointments may be rescheduled for a future date
                when proper notice is provided, subject to availability and
                the terms of this policy.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl space-y-10">

          {/* OUR COMMITMENT */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <HeartHandshake className="h-8 w-8 text-blue-700" />

              <h2 className="text-2xl font-bold text-blue-700 md:text-3xl">
                Our Commitment to Families
              </h2>
            </div>

            <p className="leading-8 text-gray-600">
              Guiding Light Autism Family Support is committed to providing
              compassionate, practical, and personalized support to the
              families we serve. We understand that circumstances can change,
              and we want our cancellation and rescheduling process to be
              clear and easy to understand.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              While payments are nonrefundable, we will make a good-faith
              effort to work with clients when unexpected circumstances
              arise and when concerns about a service are brought to our
              attention.
            </p>
          </section>

          {/* NO REFUNDS */}
          <section className="rounded-2xl bg-gray-50 p-8">

            <h2 className="mb-4 text-2xl font-bold text-blue-700 md:text-3xl">
              1. All Payments Are Nonrefundable
            </h2>

            <p className="leading-8 text-gray-600">
              Payments for Guiding Light's paid services are
              <strong className="text-gray-900">
                {" "}nonrefundable once payment has been made.
              </strong>
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              This policy applies to paid services including:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Parent-to-Parent Coaching
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Autism Family Consulting
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Research Packages
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Other paid personalized services offered by Guiding Light
              </li>
            </ul>

            <p className="mt-5 leading-8 text-gray-600">
              A change of mind, change in circumstances, or decision not to
              use a purchased service does not automatically create a right
              to a refund.
            </p>

          </section>

          {/* CANCELLATION */}
          <section>

            <div className="mb-4 flex items-center gap-3">
              <CalendarClock className="h-8 w-8 text-blue-700" />

              <h2 className="text-2xl font-bold text-blue-700 md:text-3xl">
                2. Cancellation & Rescheduling
              </h2>
            </div>

            <p className="leading-8 text-gray-600">
              We understand that life happens. If you need to cancel or
              change a scheduled appointment, please contact Guiding Light
              as soon as possible.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Clients who provide at least
              <strong className="text-gray-900">
                {" "}24 hours' notice
              </strong>
              may reschedule their appointment for a future date when they
              are ready, subject to Guiding Light's availability.
            </p>

            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
              <p className="font-semibold leading-7 text-blue-800">
                Rescheduling does not create a refund.
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                The original payment remains applied to the rescheduled
                service.
              </p>
            </div>

          </section>

          {/* LATE CANCELLATION */}
          <section>

            <h2 className="mb-4 text-2xl font-bold text-blue-700 md:text-3xl">
              3. Late Cancellations & Missed Appointments
            </h2>

            <p className="leading-8 text-gray-600">
              Appointments that are cancelled with less than 24 hours'
              notice or missed without notice may be considered used.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              In these circumstances, the payment remains nonrefundable and
              Guiding Light may not be able to provide a replacement
              appointment using the original payment.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We encourage clients to contact us as soon as possible if an
              unexpected emergency or circumstance prevents them from
              attending a scheduled appointment.
            </p>

          </section>

          {/* MAKING THINGS RIGHT */}
          <section className="rounded-2xl bg-sky-50 p-8">

            <div className="mb-4 flex items-center gap-3">
              <RefreshCcw className="h-8 w-8 text-blue-700" />

              <h2 className="text-2xl font-bold text-blue-700 md:text-3xl">
                4. If You Have a Concern About Your Service
              </h2>
            </div>

            <p className="leading-8 text-gray-700">
              We want every family to feel heard, respected, and supported.
              If you believe something went wrong with a service you
              received, please contact us and explain your concern.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Guiding Light will review the concern and make a good-faith
              effort to determine an appropriate resolution.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Depending on the circumstances, an appropriate resolution may
              include:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Clarifying information or recommendations
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Correcting an error
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Providing additional guidance when appropriate
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Rescheduling a service when appropriate
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                Another reasonable resolution determined by Guiding Light
              </li>
            </ul>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              Any resolution offered is determined by Guiding Light based
              on the circumstances and does not create an obligation to
              provide a refund.
            </p>

          </section>

          {/* SERVICE UNAVAILABLE */}
          <section>

            <h2 className="mb-4 text-2xl font-bold text-blue-700 md:text-3xl">
              5. If Guiding Light Cannot Provide a Paid Service
            </h2>

            <p className="leading-8 text-gray-600">
              If Guiding Light is unable to provide a paid service that has
              already been purchased, we will contact the client and work
              with them to reschedule the service or determine an
              appropriate resolution.
            </p>

          </section>

          {/* FREE CONSULTATION */}
          <section className="rounded-2xl bg-gray-50 p-8">

            <h2 className="mb-4 text-2xl font-bold text-blue-700 md:text-3xl">
              6. Free 30-Minute Consultation
            </h2>

            <p className="leading-8 text-gray-600">
              The initial 30-minute consultation offered by Guiding Light
              is provided at no charge. Because there is no payment
              associated with this consultation, the refund provisions of
              this policy do not apply.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Clients who need to change a scheduled free consultation are
              encouraged to contact Guiding Light as soon as possible so
              that the appointment can be rescheduled when appropriate.
            </p>

          </section>

          {/* LEGAL RIGHTS */}
          <section>

            <h2 className="mb-4 text-2xl font-bold text-blue-700 md:text-3xl">
              7. Rights Required by Law
            </h2>

            <p className="leading-8 text-gray-600">
              Nothing in this policy is intended to waive, restrict, or
              limit any rights or remedies that cannot legally be waived
              under applicable federal, state, or local law.
            </p>

          </section>

          {/* CONTACT */}
          <section className="rounded-2xl bg-blue-700 p-8 text-white md:p-10">

            <div className="flex items-start gap-4">

              <Mail className="mt-1 h-8 w-8 shrink-0" />

              <div>
                <h2 className="mb-3 text-2xl font-bold">
                  Questions About This Policy?
                </h2>

                <p className="leading-7 text-blue-100">
                  If you have questions about a cancellation, rescheduling
                  request, or concern regarding a service, please contact
                  Guiding Light Autism Family Support.
                </p>

                <a
                  href="mailto:info@guidinglightautismsupport.org"
                  className="mt-4 inline-block font-semibold text-white underline hover:text-blue-100"
                >
                  info@guidinglightautismsupport.org
                </a>
              </div>

            </div>

          </section>

        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm leading-7 text-gray-500">
            This Refund & Cancellation Policy applies to services purchased
            from Guiding Light Autism Family Support and should be reviewed
            before purchasing a paid service.
          </p>

        </div>
      </section>

    </main>
  );
}
