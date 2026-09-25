"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSending(true);
  const form = event.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      helpType: formData.get("reason"),
      message: formData.get("message"),
    }),
  });

  if (!response.ok) {
  setSending(false);
  alert("We couldn't send your message. Please try again.");
  return;
}

  setSending(false);
  setSubmitted(true);
}

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-lg md:p-12">
        <CheckCircle2 className="mx-auto mb-5 h-14 w-14 text-green-600" />

        <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
          Thank You for Reaching Out
        </h3>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          We've received your message and will be in touch soon.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/resources"
            className="rounded-xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Explore Resources
          </a>

          <a
            href="/ask-guiding-light"
            className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800"
          >
            Ask Guiding Light
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-gray-800"
          >
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-semibold text-gray-800"
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-semibold text-gray-800"
          >
            Phone <span className="font-normal text-gray-500">(optional)</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-2 block font-semibold text-gray-800"
          >
            How can we help? *
          </label>

          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="General Question">General Question</option>
            <option value="Autism Resources">Autism Resources</option>
            <option value="Services & Consultations">Services & Consultations</option>
            <option value="Existing Client">Existing Client</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="mb-2 block font-semibold text-gray-800"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          placeholder="Tell us a little about how we can help..."
        />
      </div>

      <div className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-6 text-gray-700">
        <strong>Please note:</strong> For your privacy, please don't include
        sensitive medical, educational, financial, or other personal
        information in this form.
      </div>

      <button
       type="submit"
       disabled={sending}
       className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
>
     <Send className="h-5 w-5" />
     {sending ? "Sending..." : "Send Message"}
      </button>

      <p className="mt-4 text-sm text-gray-500">
        We typically respond within 1–2 business days.
      </p>
    </form>
  );
}
