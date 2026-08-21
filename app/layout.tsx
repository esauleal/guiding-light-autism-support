import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guiding Light Autism Family Support",
  description:
    "Helping families navigate autism resources, benefits, and support in English and Spanish.",
  verification: {
    google: "EvMJyNVQakUcid4noUs2rEKz3jejZx5yQsN9DfnWUVQ",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
  <Header />
  {children}

<Footer />
</body>
    </html>
  );
}
