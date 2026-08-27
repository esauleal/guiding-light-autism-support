"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinkClass = (href: string) =>
    `transition-all duration-300 hover:text-blue-700 hover:-translate-y-1 ${
      pathname === href
        ? "text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
        : "text-gray-700"
    }`;

  return (
    <header className="bg-white shadow-sm">
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

            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>

            <Link href="/services" className={navLinkClass("/services")}>
              Services
            </Link>

            <Link href="/resources" className={navLinkClass("/resources")}>
              Resources
            </Link>

            {/* FAQ */}
            <Link href="/faq" className={navLinkClass("/faq")}>
              FAQ
            </Link>

            <Link href="/journey" className={navLinkClass("/journey")}>
              Journey
            </Link>

            <Link href="/downloads" className={navLinkClass("/downloads")}>
              Downloads
            </Link>

            <Link
              href="/ask-guiding-light"
              className={navLinkClass("/ask-guiding-light")}
            >
              Ask Guiding Light
            </Link>

            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>

          </nav>

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
