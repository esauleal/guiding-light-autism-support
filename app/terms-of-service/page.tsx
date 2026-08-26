import {
  CheckCircle2,
  FileText,
  HeartHandshake,
  ShieldCheck,
  CreditCard,
  CalendarClock,
  AlertCircle,
  Mail,
  Scale,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-sky-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">

          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl bg-blue-100 p-4">
              <FileText className="h-12 w-12 text-blue-700" />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Guiding Light Autism Family Support
          </p>

          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Terms of Service
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            These Terms of Service explain the terms that apply when you use
            the Guiding Light Autism Family Support website or purchase or
            schedule services with us.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: August 26, 2026
          </p>

        </div>
      </section>


      {/* IMPORTANT NOTICE */}
      <section className="px-6 py-12">
        <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">

          <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-blue-700" />

          <div>
            <h2 className="mb-3 text-xl font-bold text-blue-700">
              Please Read These Terms
            </h2>

            <p className="leading-7 text-gray-700">
              By accessing or using the Guiding Light Autism Family Support
              website, scheduling a consultation, or purchasing a paid service,
              you acknowledge that you have read and understand these Terms of
              Service and agree to be bound by them.
            </p>
          </div>

        </div>
      </section>


      {/* 1 */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <HeartHandshake className="h-7 w-7" />
            1. About Guiding Light
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light Autism Family Support ("Guiding Light," "we,"
            "our," or "us") provides educational, informational, and
            family-support services intended to help families better understand
            autism-related resources, services, processes, and available
            options.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Our goal is to provide practical, compassionate, and personalized
            guidance to families as they navigate their individual
            circumstances.
          </p>

        </div>
      </section>


      {/* 2 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <AlertCircle className="h-7 w-7" />
            2. Not Medical, Legal, or Emergency Advice
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light Autism Family Support does not provide medical,
            psychological, psychiatric, behavioral-health, legal, financial,
            or emergency services.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Information and guidance provided through our website,
            consultations, coaching, resources, or other services are intended
            for educational and informational purposes and should not be
            considered a substitute for professional advice from a qualified
            medical, mental-health, legal, financial, educational, or other
            licensed professional.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Families should consult appropriate qualified professionals when
            a situation requires professional evaluation, diagnosis,
            treatment, legal advice, emergency assistance, or other specialized
            services.
          </p>

          <p className="mt-4 font-semibold leading-8 text-gray-800">
            If you or your child is experiencing an emergency or immediate
            safety concern, contact the appropriate emergency or crisis service
            in your area.
          </p>

        </div>
      </section>


      {/* 3 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            3. Eligibility and Responsible Use
          </h2>

          <p className="leading-8 text-gray-700">
            You agree to use the Guiding Light website and services for lawful
            purposes and in a manner that does not interfere with the operation
            of the website or the ability of others to use our services.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            You are responsible for providing accurate information when
            scheduling services or communicating with Guiding Light.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            You should not knowingly provide false, misleading, fraudulent, or
            unauthorized information.
          </p>

        </div>
      </section>


      {/* 4 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <CheckCircle2 className="h-7 w-7" />
            4. Services
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light may offer services such as parent-to-parent
            coaching, autism family consulting, research or resource packages,
            consultations, educational resources, and other personalized
            family-support services.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            The availability, description, pricing, duration, and scope of a
            particular service may change from time to time.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            We will make reasonable efforts to accurately describe the services
            offered and communicate any material changes before a client
            purchases a service.
          </p>

        </div>
      </section>


      {/* 5 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <CalendarClock className="h-7 w-7" />
            5. Scheduling and Appointments
          </h2>

          <p className="leading-8 text-gray-700">
            Appointments may be scheduled through Calendly or another
            scheduling platform designated by Guiding Light.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Clients are responsible for selecting an appointment time that
            works for them and for providing accurate contact information.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            If you need to cancel or reschedule an appointment, please contact
            Guiding Light as soon as possible.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Our cancellation and rescheduling rules are described in our
            <a
              href="/refund-policy"
              className="font-semibold text-blue-700 underline hover:text-blue-900"
            >
              {" "}Refund & Cancellation Policy
            </a>.
          </p>

        </div>
      </section>


      {/* 6 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <CreditCard className="h-7 w-7" />
            6. Payments and Nonrefundable Services
          </h2>

          <p className="leading-8 text-gray-700">
            Certain Guiding Light services require payment before the service
            is provided. Payments may currently be processed through PayPal or
            another payment provider made available by Guiding Light.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Unless otherwise required by applicable law or expressly stated by
            Guiding Light, payments for paid services are{" "}
            <strong>nonrefundable once payment has been made.</strong>
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Clients who need to change a scheduled paid appointment may request
            a rescheduling in accordance with the Refund & Cancellation Policy.
            Rescheduling does not create a refund and the original payment
            remains associated with the purchased service.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            We encourage clients to review the service description, pricing,
            scheduling information, and Refund & Cancellation Policy before
            submitting payment.
          </p>

        </div>
      </section>


      {/* 7 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            7. Free 30-Minute Consultation
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light may offer an initial 30-minute consultation at no
            charge. Because no payment is associated with the free consultation,
            the nonrefund provisions applicable to paid services do not apply
            to that consultation.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Availability of the free consultation is subject to scheduling
            availability and may be changed or discontinued at any time.
          </p>

        </div>
      </section>


      {/* 8 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            8. Client Responsibilities
          </h2>

          <p className="leading-8 text-gray-700">
            Clients are responsible for making their own decisions regarding
            their families, children, education, healthcare, services, and
            resources.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Guiding Light may provide information, suggestions, resources, or
            recommendations based on information provided by the client.
            Clients remain responsible for evaluating information and deciding
            whether a particular recommendation is appropriate for their
            individual circumstances.
          </p>

        </div>
      </section>


      {/* 9 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            9. No Guarantee of Results
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light cannot guarantee a particular outcome from the use of
            our services, information, resources, recommendations, or
            consultations.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Every family and individual situation is different. Outcomes may
            depend on circumstances, eligibility requirements, availability of
            services, decisions made by third parties, and factors outside of
            Guiding Light's control.
          </p>

        </div>
      </section>


      {/* 10 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            10. Third-Party Services and Resources
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light may provide links or references to third-party
            websites, organizations, agencies, programs, service providers, or
            other resources.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Third-party services are not controlled by Guiding Light. We do not
            guarantee the accuracy, availability, quality, eligibility
            requirements, policies, or results of any third-party service.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Clients are responsible for reviewing the terms, privacy practices,
            eligibility requirements, and other policies of third-party
            organizations before using their services.
          </p>

        </div>
      </section>


      {/* 11 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            11. Website Content and Intellectual Property
          </h2>

          <p className="leading-8 text-gray-700">
            Unless otherwise stated, the content appearing on the Guiding Light
            website, including text, graphics, logos, branding, original
            materials, and other website content, is owned by or used by
            Guiding Light with permission.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            You may view and use website content for your own personal,
            noncommercial purposes. You may not reproduce, distribute, modify,
            sell, or commercially exploit Guiding Light's original materials
            without prior written permission.
          </p>

        </div>
      </section>


      {/* 12 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            12. Privacy
          </h2>

          <p className="leading-8 text-gray-700">
            Your use of the Guiding Light website and services may involve the
            collection and use of personal information.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Please review our{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-blue-700 underline hover:text-blue-900"
            >
              Privacy Policy
            </a>{" "}
            to understand how Guiding Light handles information submitted
            through the website and in connection with our services.
          </p>

        </div>
      </section>


      {/* 13 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            13. Website Availability
          </h2>

          <p className="leading-8 text-gray-700">
            We make reasonable efforts to keep the website available and
            functioning, but we do not guarantee that the website will always
            be available, uninterrupted, secure, or free from errors.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Website availability may be affected by maintenance, technical
            problems, third-party services, internet connectivity, or
            circumstances outside our reasonable control.
          </p>

        </div>
      </section>


      {/* 14 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <Scale className="h-7 w-7" />
            14. Limitation of Liability
          </h2>

          <p className="leading-8 text-gray-700">
            To the fullest extent permitted by applicable law, Guiding Light
            Autism Family Support will not be responsible for indirect,
            incidental, consequential, special, or punitive damages arising
            from or related to the use of our website, resources, or services.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Nothing in these Terms is intended to exclude or limit liability
            that cannot legally be excluded or limited under applicable law.
          </p>

        </div>
      </section>


      {/* 15 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            15. Indemnification
          </h2>

          <p className="leading-8 text-gray-700">
            To the extent permitted by applicable law, you agree to be
            responsible for claims, losses, liabilities, or expenses arising
            from your misuse of the website or services, violation of these
            Terms, or violation of applicable law or the rights of another
            person.
          </p>

        </div>
      </section>


      {/* 16 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            16. Changes to These Terms
          </h2>

          <p className="leading-8 text-gray-700">
            Guiding Light may update these Terms of Service from time to time
            as our website, services, or business practices change.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            When changes are made, the updated version will be posted on this
            page along with the updated date.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Your continued use of the website after updated Terms are posted
            constitutes acceptance of the updated Terms to the extent permitted
            by applicable law.
          </p>

        </div>
      </section>


      {/* 17 */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-2xl font-bold text-blue-700">
            17. Governing Law
          </h2>

          <p className="leading-8 text-gray-700">
            These Terms will be interpreted and governed by the laws applicable
            to Guiding Light Autism Family Support, except to the extent that
            applicable federal or state law requires otherwise.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            Nothing in these Terms is intended to prevent a consumer from
            exercising rights or remedies that cannot legally be waived under
            applicable law.
          </p>

        </div>
      </section>


      {/* 18 */}
      <section className="bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-700">
            <Mail className="h-7 w-7" />
            18. Questions About These Terms
          </h2>

          <p className="leading-8 text-gray-700">
            If you have questions about these Terms of Service, our services,
            scheduling, payments, or other website policies, please contact
            Guiding Light Autism Family Support.
          </p>

        </div>
      </section>


      {/* CONTACT CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-600 p-8 text-white shadow-lg">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <h2 className="mb-2 text-2xl font-bold">
                Questions About These Terms?
              </h2>

              <p className="leading-7 text-blue-50">
                If you have questions about our Terms of Service or need help
                understanding a policy, please contact Guiding Light Autism
                Family Support.
              </p>
            </div>

            <a
              href="mailto:info@guidinglightautismsupport.org"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              <Mail className="h-5 w-5" />
              Contact Us
            </a>

          </div>

        </div>
      </section>


      {/* FINAL NOTICE */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm leading-7 text-gray-500">
            These Terms of Service are intended to explain the general terms
            governing use of the Guiding Light Autism Family Support website
            and services. They do not create or replace any professional
            medical, legal, financial, or other specialized relationship.
          </p>

        </div>
      </section>

    </main>
  );
}