import {
  AlertTriangle,
  BookOpen,
  HeartHandshake,
  Mail,
  Scale,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export default function Disclaimer() {
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
            GUIDING LIGHT AUTISM FAMILY SUPPORT
          </p>

          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Disclaimer
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            The information and services provided by Guiding Light Autism
            Family Support are intended to provide educational, informational,
            and family-support guidance. They are not intended to replace
            professional medical, clinical, legal, financial, or emergency
            services.
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
            <AlertTriangle className="mt-1 h-7 w-7 shrink-0 text-blue-700" />

            <div>
              <h2 className="mb-3 text-xl font-bold text-blue-700">
                Important Notice
              </h2>

              <p className="leading-7 text-gray-700">
                Guiding Light Autism Family Support provides educational
                information, family guidance, resources, and support.
                Our services are not a substitute for individualized
                professional advice, evaluation, diagnosis, treatment, or
                emergency assistance.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                Families should seek assistance from appropriately qualified
                professionals whenever a situation requires medical,
                behavioral, mental-health, legal, financial, or emergency
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-12">

          {/* 1 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                1. Educational and Informational Purposes
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Information provided through the Guiding Light website,
              resources, articles, consultations, coaching, and other
              services is intended for general educational and informational
              purposes.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Information may help families better understand autism-related
              topics, resources, services, educational options, and possible
              next steps. However, individual circumstances vary, and
              information provided by Guiding Light should not be understood
              as a personalized professional determination.
            </p>
          </section>

          {/* 2 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Stethoscope className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                2. Not Medical or Clinical Advice
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light Autism Family Support does not provide medical
              diagnosis, medical treatment, clinical evaluation, or medical
              advice.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We do not diagnose autism or other medical conditions, prescribe
              medication, recommend specific medical treatments, or replace
              the role of a physician, psychologist, psychiatrist,
              occupational therapist, speech-language pathologist, behavior
              analyst, or other licensed healthcare professional.
            </p>

            <p className="mt-4 font-semibold leading-7 text-gray-700">
              Questions involving a child's health, diagnosis, treatment,
              medication, or other clinical concerns should be directed to an
              appropriately qualified healthcare professional.
            </p>
          </section>

          {/* 3 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <HeartHandshake className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                3. Family Support and Parent-to-Parent Guidance
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light may provide parent-to-parent coaching, family
              support, educational information, resource navigation, and
              general guidance based on experience and available information.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              These services are intended to help families better understand
              available options and navigate their individual circumstances.
              They are not intended to establish a clinical, therapeutic,
              medical, or professional counseling relationship.
            </p>
          </section>

          {/* 4 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                4. Not Legal or Financial Advice
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light may provide general information about educational
              systems, government programs, disability-related resources,
              benefits, organizations, or other services.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              This information should not be considered legal, financial,
              tax, benefits, or professional legal advice.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Families should consult an appropriately qualified attorney,
              financial professional, tax professional, benefits specialist,
              or other qualified professional when professional advice is
              necessary.
            </p>
          </section>

          {/* 5 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                5. No Diagnosis or Professional Evaluation
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light does not conduct psychological, behavioral,
              developmental, medical, or other professional evaluations for
              the purpose of establishing a diagnosis or treatment plan.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Information discussed during a consultation or coaching session
              should not be interpreted as a diagnosis, clinical assessment,
              or professional determination regarding a child or family
              member.
            </p>
          </section>

          {/* 6 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                6. No Emergency Services
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light does not provide emergency, crisis, suicide
              prevention, medical emergency, law-enforcement, or other
              immediate-response services.
            </p>

            <p className="mt-4 font-semibold leading-7 text-gray-700">
              If you or your child is experiencing an emergency, an immediate
              safety concern, or a situation requiring urgent assistance,
              contact 911 or the appropriate emergency or crisis service in
              your area.
            </p>
          </section>

          {/* 7 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                7. Parent and Caregiver Responsibility
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Parents, guardians, and caregivers remain responsible for making
              decisions regarding their children's healthcare, education,
              services, treatment, safety, and overall well-being.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Families should consider their individual circumstances and
              obtain professional advice when appropriate before making
              decisions that may affect a child's health, education, safety,
              legal rights, or financial situation.
            </p>
          </section>

          {/* 8 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <HeartHandshake className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                8. No Guarantee of Results
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light does not guarantee any particular outcome,
              improvement, result, service approval, educational placement,
              benefit determination, or other result from the use of our
              information, resources, coaching, consultations, or services.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Each family's circumstances are different, and outcomes may
              depend on factors outside of Guiding Light's control.
            </p>
          </section>

          {/* 9 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                9. Third-Party Information and Resources
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light may provide links, references, or information
              about third-party organizations, agencies, programs, websites,
              professionals, or service providers.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Guiding Light does not control third-party organizations or
              guarantee their accuracy, availability, eligibility
              requirements, policies, services, or results.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Families should independently review third-party information
              and determine whether a particular service or resource is
              appropriate for their circumstances.
            </p>
          </section>

          {/* 10 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                10. Accuracy and Changes to Information
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Guiding Light makes reasonable efforts to provide useful and
              accurate information. However, information may become outdated,
              incomplete, or inaccurate as laws, programs, policies,
              organizations, services, and circumstances change.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We may update, change, or remove website content and resources
              at any time.
            </p>
          </section>

          {/* 11 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                11. No Professional Relationship
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              Use of the Guiding Light website, resources, consultations,
              coaching, or other services does not by itself create a
              physician-patient, therapist-client, attorney-client,
              accountant-client, or other licensed professional relationship.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              The nature of any services provided by Guiding Light is limited
              to the services specifically described on our website or agreed
              upon with the client.
            </p>
          </section>

          {/* 12 */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-700" />
              <h2 className="text-2xl font-bold text-blue-700">
                12. Relationship to Other Policies
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              This Disclaimer should be read together with Guiding Light's
              Terms of Service, Privacy Policy, and Refund & Cancellation
              Policy.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              These policies are intended to explain the nature of our
              services, how information is handled, and the expectations that
              apply when using the Guiding Light website and services.
            </p>
          </section>

          {/* CTA */}
          <section className="pt-4">
            <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm md:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <Mail className="h-6 w-6" />
                    <h2 className="text-xl font-bold">
                      Questions About This Disclaimer?
                    </h2>
                  </div>

                  <p className="max-w-2xl leading-7 text-blue-50">
                    If you have questions about this Disclaimer or need help
                    understanding the nature of our services, please contact
                    Guiding Light Autism Family Support.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          {/* FINAL NOTE */}
          <div className="pt-2 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-500">
              This Disclaimer is intended to describe the general nature and
              limitations of Guiding Light Autism Family Support's website and
              services. It does not create or replace any professional
              medical, clinical, legal, financial, or other specialized
              relationship.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}