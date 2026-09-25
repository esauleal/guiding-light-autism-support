export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          {/* About */}

          <div>
            <h3 className="text-xl font-bold mb-3">
              Guiding Light Autism Family Support
            </h3>

            <p className="text-blue-100">
              Helping families navigate autism resources,
              services, and support options.
            </p>

            <p className="text-blue-100 mt-4">
              Built by a family, for families — providing guidance,
              resources, and support throughout the autism journey.
            </p>
          </div>


          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-blue-100">

              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/resources" className="hover:text-white">
                  Resources
                </a>
              </li>

              {/* FAQ */}
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* Legal */}

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Legal
            </h3>

            <ul className="space-y-2 text-blue-100">

              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="/refund-policy"
                  className="hover:text-white"
                >
                  Refund & Cancellation Policy
                </a>
              </li>

              <li>
                <a
                  href="/disclaimer"
                  className="hover:text-white"
                >
                  Disclaimer
                </a>
              </li>

              <li>
                <a
                  href="/accessibility"
                  className="hover:text-white"
                >
                  Accessibility Statement
                </a>
              </li>

              <li>
                <a
                  href="/contact-legal"
                  className="hover:text-white"
                >
                  Contact & Legal Information
                </a>
              </li>

            </ul>
          </div>


          {/* Languages & Social */}

<div>
  <p className="text-blue-100">
    Serving families in English and Spanish.
  </p>

  <p className="text-blue-100 mt-2">
    Apoyando a familias en inglés y español.
  </p>

  <div className="mt-6">
    <p className="mb-3 font-semibold text-white">
      Follow Guiding Light
    </p>

    <a
      href="https://www.facebook.com/profile.php?id=61594095654812"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Guiding Light Autism Family Support on Facebook"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <svg
  viewBox="0 0 24 24"
  className="h-6 w-6 fill-current"
  aria-hidden="true"
>
  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
</svg>

    </a>
  </div>
</div>

</div>

        {/* Copyright */}

        <div className="border-t border-blue-400 mt-8 pt-6 text-center text-blue-100">
          © {new Date().getFullYear()} Guiding Light Autism Family Support.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
