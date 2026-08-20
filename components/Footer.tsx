export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

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

  <li>
    <a href="/contact" className="hover:text-white">
      Contact
    </a>
  </li>
</ul>
          </div>


          <div>
            <p className="text-blue-100">
  Serving families in English and Spanish.
</p>

<p className="text-blue-100 mt-2">
  Apoyando a familias en inglés y español.
</p>

          </div>

        </div>


        <div className="border-t border-blue-400 mt-8 pt-6 text-center text-blue-100">
          © {new Date().getFullYear()} Guiding Light Autism Family Support.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}