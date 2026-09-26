"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Languages } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigation = (href: string) => {
  const isSpanish = document.cookie.includes("googtrans=/en/es");

  if (isSpanish) {
    window.location.href = href;
  } else {
    router.push(href);
  }
};
const changeLanguage = (language: "en" | "es") => {
  const select = document.querySelector(
    ".goog-te-combo"
  ) as HTMLSelectElement | null;

  if (select) {
    select.value = language;
    select.dispatchEvent(new Event("change"));
  }
};
  

  const navLinkClass = (href: string) =>
    `transition-all duration-300 hover:text-blue-700 hover:-translate-y-1 ${
      pathname === href
        ? "text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
        : "text-gray-700"
    }`;

  return (
  <header className="bg-white shadow-sm">
    <GoogleTranslate />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/AutismFamilySupport_Logo1.png"
              alt="Guiding Light Autism Family Support Logo"
              width={95}
              height={95}
              className="cursor-pointer"
            />
          </Link>

          <div className="text-xl md:text-2xl font-bold text-blue-700">
            Guiding Light Autism Family Support
          </div>
        </div>

        {/* Navigation */}

        <div className="flex flex-col lg:flex-row items-center gap-5">

          <nav className="flex flex-wrap justify-center items-center gap-6 text-gray-700 font-medium">

  <button
    type="button"
    onClick={() => handleNavigation("/")}
    className={navLinkClass("/")}
  >
    Home
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/about")}
    className={navLinkClass("/about")}
  >
    About
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/services")}
    className={navLinkClass("/services")}
  >
    Services
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/resources")}
    className={navLinkClass("/resources")}
  >
    Resources
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/faq")}
    className={navLinkClass("/faq")}
  >
    FAQ
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/journey")}
    className={navLinkClass("/journey")}
  >
    Journey
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/downloads")}
    className={navLinkClass("/downloads")}
  >
    Downloads
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/ask-guiding-light")}
    className={navLinkClass("/ask-guiding-light")}
  >
    Ask Guiding Light
  </button>

  <button
    type="button"
    onClick={() => handleNavigation("/contact")}
    className={navLinkClass("/contact")}
  >
    Contact
  </button>

</nav>

 <div className="flex items-center gap-2 text-sm font-semibold">
  <Languages className="h-5 w-5 text-blue-700" />

  <button
  type="button"
  onClick={() => changeLanguage("en")}
  className="text-blue-700 hover:underline"
>
  English
</button>

  <span className="text-gray-400">|</span>

  <button
  type="button"
  onClick={() => changeLanguage("es")}
  className="text-gray-700 hover:text-blue-700 hover:underline"
>
  Español
</button>

</div>         

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:scale-105"
          >
            <CalendarDays className="w-5 h-5" />
            Schedule Consultation
          </a>

        </div>
      </div>
    </header>

  );
}
