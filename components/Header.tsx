"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Languages, ChevronDown } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [moreOpen, setMoreOpen] = useState(false);
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
      <div className="max-w-[1500px] mx-auto px-4 lg:px-6 flex flex-col xl:flex-row items-center justify-between gap-4">

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

        <div className="flex flex-col lg:flex-row items-center gap-4">

          <nav className="flex flex-nowrap justify-center items-center gap-5 text-gray-700 font-medium whitespace-nowrap">

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

  <div className="relative">
  <button
    type="button"
    onClick={() => setMoreOpen(!moreOpen)}
    className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-blue-700"
  >
    More
    <ChevronDown
      className={`h-4 w-4 transition-transform ${
        moreOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {moreOpen && (
    <div className="absolute left-0 top-full z-50 mt-3 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
      {[
        ["FAQ", "/faq"],
        ["Journey", "/journey"],
        ["Downloads", "/downloads"],
        ["Ask Guiding Light", "/ask-guiding-light"],
        ["Contact", "/contact"],
      ].map(([label, href]) => (
        <button
          key={href}
          type="button"
          onClick={() => {
            setMoreOpen(false);
            handleNavigation(href);
          }}
          className="block w-full rounded-lg px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          {label}
        </button>
      ))}
    </div>
  )}
</div>

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
  href="/get-started"
  className="inline-flex items-center whitespace-nowrap rounded-xl border border-blue-700 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
>
  Build My Profile
</a>
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
