import {
  CheckCircle2,
  Cookie,
  Database,
  FileText,
  HeartHandshake,
  Lock,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600">
            Your privacy matters to us. This Privacy Policy explains what
            information Guiding Light Autism Family Support may collect, how
            we use it, and how we work to protect your information.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: August 26, 2026
          </p>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
            <div className="flex items-start gap-4">

              <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-blue-700" />

              <div>
                <h2 className="mb-3 text-xl font-bold text-blue-700">
                  Our Commitment to Privacy
                </h2>

                <p className="leading-7 text-gray-700">
                  Guiding Light Autism Family Support ("Guiding Light,"
                  "we," "our," or "us") respects the privacy of the families,
                  parents, caregivers, and visitors who use our website and
                  services. We strive to collect only the information we need
                  to communicate with you, provide our services, schedule
                  appointments, process transactions, and improve your
                  experience.
                </p>

                <p className="mt-4 leading-7 text-gray-700">
                  By using our website or voluntarily providing information to
                  us, you acknowledge the practices described in this Privacy
                  Policy.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 1. INFORMATION WE COLLECT */}
      <section className="px-6 py-6">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Database className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              1. Information We Collect
            </h2>
          </div>

          <p className="mb-6 leading-7 text-gray-700">
            Depending on how you interact with Guiding Light, we may collect
            information that you voluntarily provide to us or information
            necessary to operate our website and provide requested services.
          </p>

          <div className="space-y-4">

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="mb-2 font-bold text-gray-800">
                Contact Information
              </h3>

              <p className="leading-7 text-gray-600">
                This may include your name, email address, telephone number,
                and other contact information you choose to provide.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="mb-2 font-bold text-gray-800">
                Scheduling Information
              </h3>

              <p className="leading-7 text-gray-600">
                When you schedule an appointment through Calendly, information
                necessary to schedule and manage your appointment may be
                collected, such as your name, email address, phone number,
                appointment details, and information you choose to provide
                through the scheduling process.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="mb-2 font-bold text-gray-800">
                Service-Related Information
              </h3>

              <p className="leading-7 text-gray-600">
                If you contact us about our services, you may voluntarily
                provide information about your family's circumstances, needs,
                questions, or goals. Please provide only information that is
                reasonably necessary for us to understand and respond to your
                request.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="mb-2 font-bold text-gray-800">
                Payment Information
              </h3>

              <p className="leading-7 text-gray-600">
                Payments for services may be processed through PayPal. Payment
                information submitted through PayPal is handled according to
                PayPal's privacy policies and terms. Guiding Light does not
                request or intentionally store your full credit card or bank
                account information through this website.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="mb-2 font-bold text-gray-800">
                Website and Technical Information
              </h3>

              <p className="leading-7 text-gray-600">
                Like many websites, our website or service providers may
                receive certain technical information such as IP address,
                browser type, device information, pages visited, and general
                website usage information.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 2. HOW WE USE INFORMATION */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              2. How We Use Your Information
            </h2>
          </div>

          <p className="mb-4 leading-7 text-gray-700">
            We may use information we collect for purposes such as:
          </p>

          <ul className="space-y-3">
            {[
              "Responding to questions, requests, and inquiries.",
              "Providing and coordinating Guiding Light services.",
              "Scheduling, rescheduling, and managing appointments.",
              "Processing and documenting payments and transactions.",
              "Communicating with you about appointments or services.",
              "Improving our website, services, and customer experience.",
              "Maintaining business records and complying with applicable legal obligations.",
              "Protecting the security and integrity of our website and services.",
              "Preventing fraud, misuse, or unauthorized activity.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <span className="leading-7 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>


      {/* 3. CALENDLY */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              3. Calendly and Appointment Scheduling
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Guiding Light uses Calendly to help visitors schedule
            consultations and other appointments. When you use our Calendly
            scheduling page, information you provide through that process may
            be processed by Calendly on our behalf for scheduling and related
            purposes.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Calendly maintains its own privacy practices and policies. For
            additional information about how Calendly handles personal
            information, please review Calendly's Privacy Notice.
          </p>

          <a
            href="https://calendly.com/legal/privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 underline hover:text-blue-900"
          >
            View Calendly's Privacy Notice
          </a>

        </div>
      </section>


      {/* 4. PAYPAL */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Lock className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              4. PayPal and Payments
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Guiding Light uses PayPal to process certain payments for our
            services. When you make a payment through PayPal, PayPal may
            collect and process personal and financial information necessary
            to complete the transaction, prevent fraud, and provide its
            services.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Guiding Light does not intentionally collect or store your full
            credit card number, debit card number, bank account number, or
            PayPal login credentials through our website.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            PayPal's own privacy practices apply to information that PayPal
            processes. You may review PayPal's privacy information directly
            through PayPal.
          </p>

          <a
            href="https://www.paypal.com/us/privacy-center/privacy-merchant"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-700 underline hover:text-blue-900"
          >
            View PayPal's Privacy Information
          </a>

        </div>
      </section>


      {/* 5. INFORMATION SHARING */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Users className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              5. When We Share Information
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            We do not sell your personal information. We may share information
            when reasonably necessary to operate our business, provide
            requested services, process payments, schedule appointments,
            maintain our website, or comply with legal obligations.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            This may include sharing information with service providers such
            as scheduling, payment, website hosting, communications, or
            technology providers that help us operate Guiding Light.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We may also disclose information when required or permitted by
            applicable law, legal process, court order, or governmental
            request, or when necessary to protect the rights, safety, or
            property of Guiding Light, our clients, or others.
          </p>

        </div>
      </section>


      {/* 6. SENSITIVE INFORMATION */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

            <div className="mb-4 flex items-center gap-3">
              <HeartHandshake className="h-7 w-7 text-amber-700" />
              <h2 className="text-2xl font-bold text-amber-800">
                6. Information About Children and Families
              </h2>
            </div>

            <p className="leading-7 text-gray-700">
              Guiding Light serves families and caregivers seeking autism
              support and guidance. We understand that information families
              voluntarily share with us may sometimes be personal or sensitive.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Please do not submit Social Security numbers, financial account
              numbers, medical records, passwords, or other highly sensitive
              information through general website forms or ordinary email
              unless specifically requested through an appropriate secure
              process.
            </p>

            <p className="mt-4 leading-7 text-gray-700">
              Our website is intended primarily for parents, caregivers, and
              adults seeking information and support. We do not knowingly
              request personal information directly from children under 13
              through the website.
            </p>

          </div>

        </div>
      </section>


      {/* 7. COOKIES */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Cookie className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              7. Cookies and Website Technologies
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Our website and third-party service providers may use cookies,
            analytics tools, or similar technologies to support website
            functionality, understand general website usage, improve
            performance, and provide a better user experience.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            The specific technologies used may change as our website and
            services develop. Third-party services may have their own
            privacy and cookie policies.
          </p>

        </div>
      </section>


      {/* 8. DATA SECURITY */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Lock className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              8. Data Security
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            We take reasonable steps designed to protect personal information
            from unauthorized access, use, alteration, or disclosure.
            However, no website, electronic transmission, or storage system can
            be guaranteed to be completely secure.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            For that reason, we encourage you to use reasonable care when
            submitting information online and to avoid sending unnecessary
            sensitive information through ordinary email or website forms.
          </p>

        </div>
      </section>


      {/* 9. DATA RETENTION */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <Database className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              9. How Long We Keep Information
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            We retain personal information for as long as reasonably necessary
            to provide our services, maintain business and transaction
            records, communicate with clients, resolve disputes, protect our
            business, and satisfy applicable legal, tax, accounting, or other
            obligations.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            When information is no longer reasonably necessary for these
            purposes, we may securely delete, destroy, or de-identify it when
            appropriate.
          </p>

        </div>
      </section>


      {/* 10. YOUR RIGHTS */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              10. Your Privacy Choices and Rights
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Depending on where you live and applicable law, you may have
            certain rights concerning your personal information. These may
            include requesting access to, correction of, or deletion of
            certain information we maintain about you.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            If you would like to make a privacy-related request, please contact
            us using the information provided below. We may need to verify your
            identity before completing certain requests.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Some information may need to be retained when required or permitted
            by law or when necessary for legitimate business purposes.
          </p>

        </div>
      </section>


      {/* 11. THIRD-PARTY LINKS */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              11. Third-Party Websites and Services
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            Our website may contain links to third-party websites or services.
            Those websites are not controlled by Guiding Light and may have
            their own privacy policies and practices.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We encourage you to review the privacy policies of any third-party
            website before providing personal information.
          </p>

        </div>
      </section>


      {/* 12. POLICY CHANGES */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">

          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-7 w-7 text-blue-700" />
            <h2 className="text-2xl font-bold text-blue-700">
              12. Changes to This Privacy Policy
            </h2>
          </div>

          <p className="leading-7 text-gray-700">
            We may update this Privacy Policy from time to time as our
            services, website, business practices, or legal requirements
            change. When we make changes, we will update the "Last Updated"
            date at the beginning of this policy.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            We encourage you to review this page periodically so you remain
            informed about how we handle personal information.
          </p>

        </div>
      </section>


      {/* 13. CONTACT */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg">

            <div className="flex items-start gap-4">

              <Mail className="mt-1 h-7 w-7 shrink-0" />

              <div>

                <h2 className="mb-3 text-2xl font-bold">
                  Questions About This Privacy Policy?
                </h2>

                <p className="leading-7 text-blue-50">
                  If you have questions about this Privacy Policy or would
                  like to make a privacy-related request, please contact
                  Guiding Light Autism Family Support.
                </p>

                <a
                  href="mailto:info@guidinglightautismsupport.org"
                  className="mt-5 inline-block font-semibold underline hover:text-blue-100"
                >
                  info@guidinglightautismsupport.org
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* LEGAL NOTICE */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-5xl">

          <p className="text-center text-sm leading-6 text-gray-500">
            This Privacy Policy is intended to describe Guiding Light Autism
            Family Support's general privacy practices. It does not create
            rights or obligations beyond those required by applicable law.
          </p>

        </div>
      </section>

    </main>
  );
}