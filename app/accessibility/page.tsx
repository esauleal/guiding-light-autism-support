import {
  Accessibility,
  CheckCircle2,
  Globe2,
  MessageSquareText,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700">

      {/* Hero */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Accessibility size={30} />
            </div>
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            GUIDING LIGHT AUTISM FAMILY SUPPORT
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-blue-700 sm:text-5xl">
            Accessibility Statement
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Guiding Light Autism Family Support is committed to making our
            website and digital resources accessible and usable for as many
            people as reasonably possible, including individuals with
            disabilities.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Last Updated: August 26, 2026
          </p>

        </div>
      </section>

      {/* Commitment Box */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-6 shadow-sm">

            <div className="flex gap-4">

              <div className="mt-1 shrink-0 text-blue-600">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-blue-700">
                  Our Commitment to Accessibility
                </h2>

                <p className="mt-2 leading-7 text-slate-700">
                  We strive to provide a website experience that is clear,
                  understandable, and accessible. We continue to review our
                  website and make reasonable improvements as we identify
                  opportunities to improve accessibility and usability.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-10">

          {/* 1 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <CheckCircle2 className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                1. Accessibility Efforts
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              Guiding Light makes reasonable efforts to improve the
              accessibility and usability of its website. Our efforts may
              include providing clear navigation, readable text, organized
              headings, descriptive links, appropriate color contrast, and
              alternative text for images where appropriate.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Accessibility features and website functionality may vary
              depending on the device, browser, operating system, assistive
              technology, or other technology used to access the website.
            </p>
          </section>

          {/* 2 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <Accessibility className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                2. Accessibility and Usability
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              We aim to make our website understandable and easy to navigate.
              This includes using consistent page layouts, clear headings,
              readable content, and straightforward navigation wherever
              reasonably possible.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              If you experience difficulty accessing information or using a
              feature of our website, please let us know so we can better
              understand the issue and determine how we may assist.
            </p>
          </section>

          {/* 3 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <Globe2 className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                3. Third-Party Content and Services
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              Some portions of the Guiding Light website may include links,
              services, scheduling tools, payment services, embedded content,
              or other resources provided by third parties.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Guiding Light does not control the accessibility features or
              accessibility practices of third-party websites and services.
              If you encounter an accessibility issue with a third-party
              service, you may also need to contact that provider directly.
            </p>
          </section>

          {/* 4 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <RefreshCw className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                4. Ongoing Improvements
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              Website accessibility is an ongoing effort. Guiding Light may
              update, modify, or improve website content, design, features,
              and functionality over time.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              As the website evolves, we may continue to identify opportunities
              to improve accessibility and usability.
            </p>
          </section>

          {/* 5 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <MessageSquareText className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                5. Accessibility Feedback
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              We welcome feedback from visitors who experience difficulty
              accessing or using any part of our website.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              When contacting us, please describe the page or feature you were
              attempting to use and, if possible, describe the accessibility
              difficulty you encountered. This information can help us better
              understand and address the issue.
            </p>
          </section>

          {/* 6 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <MessageSquareText className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                6. Contact Us
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              If you have questions about accessibility or need assistance
              accessing information on our website, please contact Guiding
              Light Autism Family Support through our Contact page.
            </p>
          </section>

          {/* 7 */}
          <section>
            <div className="mb-3 flex items-center gap-3">
              <RefreshCw className="text-blue-600" size={22} />
              <h2 className="text-xl font-bold text-blue-700">
                7. Changes to This Statement
              </h2>
            </div>

            <p className="leading-7 text-slate-600">
              Guiding Light may update this Accessibility Statement from time
              to time as our website, services, or accessibility practices
              change.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Any updated version will be posted on this page along with the
              updated date.
            </p>
          </section>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-xl bg-blue-600 p-7 shadow-md sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-xl font-bold text-white">
                  Having Trouble Accessing Something?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50">
                  If you encounter an accessibility barrier or have difficulty
                  using any part of our website, please contact us. We welcome
                  your feedback and will make reasonable efforts to assist.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Contact Us
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* Legal Note */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-6 text-slate-500">
            This Accessibility Statement is intended to describe Guiding
            Light's general accessibility efforts and does not guarantee that
            every part of the website will be accessible to every person or
            compatible with every assistive technology.
          </p>
        </div>
      </section>

    </main>
  );
}
