"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  HeartHandshake,
  School,
  Wallet,
  CalendarCheck,
  ShieldCheck,
  Bot,
} from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Guiding Light Autism Family Support?",
        answer:
          "Guiding Light Autism Family Support provides educational information, family guidance, resource navigation, and parent-to-parent support for families navigating autism-related services and resources. Our goal is to help families understand their options, identify possible next steps, and feel more confident throughout their autism journey.",
      },
      {
        question: "Who is Guiding Light for?",
        answer:
          "Guiding Light is designed for parents, caregivers, and families navigating autism. Whether your child was recently diagnosed or your family has been navigating autism for years, we are here to provide guidance, resources, and support.",
      },
      {
        question:
          "My child was just diagnosed with autism. Where should I start?",
        answer:
          "Start with one step at a time. You may want to obtain a copy of the evaluation report, talk with your child's healthcare providers, learn about available services, contact your child's school or Early Intervention program when appropriate, and begin organizing important documents. Our Family Toolkit and Guiding Light resources can also help you identify practical next steps.",
      },
      {
        question: "Do I need a diagnosis before contacting Guiding Light?",
        answer:
          "No. You can contact Guiding Light with questions about navigating autism-related concerns, resources, services, or the evaluation process. If your family is seeking a diagnosis or clinical evaluation, we can help you understand what types of professional resources you may want to explore, but Guiding Light does not provide diagnostic evaluations.",
      },
    ],
  },

  {
    title: "Our Services",
    icon: HeartHandshake,
    questions: [
      {
        question: "What services does Guiding Light provide?",
        answer:
          "Depending on the service selected, Guiding Light may provide parent-to-parent coaching, educational guidance, resource navigation, consultations, and other family-support services described on our website.",
      },
      {
        question: "What does a consultation include?",
        answer:
          "A consultation provides an opportunity to discuss your family's situation, questions, concerns, and possible next steps. We can help you identify resources and areas to explore based on the information you share with us.",
      },
      {
        question: "What is Parent-to-Parent Coaching?",
        answer:
          "Parent-to-Parent Coaching provides family support and practical guidance from a parent perspective. The goal is to help families feel less overwhelmed, better understand their options, and navigate their next steps with greater confidence.",
      },
      {
        question: "Do you provide services in Spanish?",
        answer:
          "Yes. Guiding Light Autism Family Support provides services and family support in both English and Spanish.",
      },
    ],
  },

  {
    title: "School & IEP Support",
    icon: School,
    questions: [
      {
        question: "Can Guiding Light help me understand my child's IEP or ARD process?",
        answer:
          "We can provide general educational information and help parents prepare questions, organize information, and better understand terminology related to school services, IEPs, and ARD meetings. We do not provide legal advice or guarantee a particular educational outcome.",
      },
      {
        question: "Can you help me prepare for an ARD or IEP meeting?",
        answer:
          "Yes. We can help you organize questions, identify topics you may want to discuss, and prepare for a school meeting. Our goal is to help you feel more prepared and confident when communicating with your child's school team.",
      },
      {
        question: "Can Guiding Light attend my child's school meeting?",
        answer:
          "Whether Guiding Light can participate in a school meeting depends on the circumstances and the service being provided. Please contact us to discuss your family's needs and what type of support may be appropriate.",
      },
    ],
  },

  {
    title: "SSI, Benefits & Resources",
    icon: Wallet,
    questions: [
      {
        question: "Can Guiding Light help me understand SSI and other benefits?",
        answer:
          "We can provide general educational information and help families identify resources and questions to explore regarding programs such as SSI, Medicaid, and other disability-related benefits. We do not make eligibility decisions or provide legal, financial, tax, or benefits-law advice.",
      },
      {
        question: "Can you help me find autism resources?",
        answer:
          "Yes. Resource navigation is an important part of Guiding Light's family-support approach. We can help you identify types of resources to explore based on your family's situation, including educational, community, and benefit-related resources.",
      },
      {
        question: "Can Guiding Light guarantee that my family will receive benefits or services?",
        answer:
          "No. Eligibility, approval, availability, and outcomes are determined by the applicable agency, organization, provider, school, insurance company, or other decision-maker. Guiding Light cannot guarantee a particular result.",
      },
    ],
  },

  {
    title: "Ask Guiding Light",
    icon: Bot,
    questions: [
      {
        question: "What is Ask Guiding Light?",
        answer:
          "Ask Guiding Light is an AI-powered guidance feature designed to help families explore general questions about autism, services, school support, benefits, therapies, and everyday parenting challenges.",
      },
      {
        question: "Is Ask Guiding Light a replacement for a professional?",
        answer:
          "No. Ask Guiding Light provides general educational guidance and should not replace medical, clinical, legal, financial, or other professional advice. Families should consult appropriately qualified professionals when individualized professional advice is needed.",
      },
      {
        question: "Can Ask Guiding Light diagnose autism?",
        answer:
          "No. Ask Guiding Light does not diagnose autism or any other medical, developmental, psychological, or behavioral condition.",
      },
    ],
  },

  {
    title: "Scheduling & Payments",
    icon: CalendarCheck,
    questions: [
      {
        question: "How do I schedule a consultation?",
        answer:
          "You can schedule a consultation through the Schedule a Consultation buttons throughout the website. You will be directed to our scheduling system to select an available time.",
      },
      {
        question: "Can I reschedule my consultation?",
        answer:
          "Yes. If you need to change your appointment, please use the available scheduling options or contact Guiding Light for assistance. Rescheduling may be subject to the terms of our Refund & Cancellation Policy.",
      },
      {
        question: "Are consultation payments refundable?",
        answer:
          "Consultation payments are nonrefundable once payment has been made. Clients should cancel within 24 hours when possible. A consultation may be rescheduled for a future date according to our Refund & Cancellation Policy.",
      },
      {
        question: "What happens if I have a concern about my service?",
        answer:
          "We want families to feel supported. If you have a concern about a service you received, please contact us so we can understand the situation and determine how we may reasonably address your concern. Our Refund & Cancellation Policy explains our payment and cancellation terms.",
      },
    ],
  },

  {
    title: "Important Questions",
    icon: ShieldCheck,
    questions: [
      {
        question: "Does Guiding Light provide medical treatment?",
        answer:
          "No. Guiding Light does not provide medical treatment, medical diagnosis, clinical evaluation, or prescribe medication. Our services are focused on education, guidance, resource navigation, and family support.",
      },
      {
        question: "Does Guiding Light provide legal or financial advice?",
        answer:
          "No. We may provide general educational information about resources and programs, but we do not provide legal, financial, tax, or professional benefits advice. Families should consult qualified professionals when that type of advice is needed.",
      },
      {
        question: "What should I do in an emergency?",
        answer:
          "Guiding Light does not provide emergency or crisis services. If you or your child is experiencing an emergency, an immediate safety concern, or a situation requiring urgent assistance, contact 911 or the appropriate emergency or crisis service in your area.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-700 to-sky-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">

          <HelpCircle className="mx-auto mb-6 h-16 w-16" />

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            GUIDING LIGHT AUTISM FAMILY SUPPORT
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
            Have questions? You're not alone. Find answers to some of the
            questions families ask most often about Guiding Light, our
            services, and navigating the autism journey.
          </p>

        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-12">

          {faqCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <section key={category.title}>

                {/* Category Heading */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <CategoryIcon className="h-6 w-6" />
                  </div>

                  <h2 className="text-2xl font-bold text-blue-700 md:text-3xl">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">

                  {category.questions.map((item, index) => {
                    const id = `${category.title}-${index}`;
                    const isOpen = openItem === id;

                    return (
                      <div
                        key={id}
                        className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                      >

                        <button
                          type="button"
                          onClick={() => toggleQuestion(id)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 p-6 text-left"
                        >

                          <span className="text-lg font-semibold text-slate-800">
                            {item.question}
                          </span>

                          <ChevronDown
                            className={`h-6 w-6 shrink-0 text-blue-700 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />

                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-100 px-6 pb-6 pt-5">
                            <p className="leading-7 text-slate-600">
                              {item.answer}
                            </p>
                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>
              </section>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-700 p-10 text-center text-white shadow-xl md:p-14">

          <HeartHandshake className="mx-auto mb-5 h-12 w-12 text-blue-100" />

          <h2 className="text-3xl font-bold md:text-4xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            You don't have to figure everything out alone. If you have
            questions about your family's situation or want help identifying
            your next step, we're here to help.
          </p>

          <a
            href="/consultation"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300"
          >
            Schedule Your Free Consultation
          </a>

        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm leading-6 text-slate-500">
            The information provided in these FAQs is for general educational
            and informational purposes and is not a substitute for medical,
            clinical, legal, financial, or other professional advice. Please
            review our Disclaimer and Terms of Service for additional
            information.
          </p>

        </div>
      </section>

    </main>
  );
}
