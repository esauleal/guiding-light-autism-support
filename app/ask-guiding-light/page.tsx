"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Bot,
  Send,
  Heart,
  BookOpen,
  School,
  Wallet,
  DollarSign,
  Stethoscope,
  HeartHandshake,
  Puzzle,
} from "lucide-react";
import Link from "next/link";

export default function AskGuidingLightPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askGuidingLight = async () => {
    if (!question.trim()) {
      alert("Question is empty!");
      return;
    }

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/ask-guiding-light", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      setAnswer(
        data.answer ||
          "I'm sorry, I wasn't able to generate an answer right now. Please try again."
      );
    } catch (error) {
      console.error("Ask Guiding Light error:", error);

      setAnswer(
        "I'm sorry, Guiding Light wasn't able to respond right now. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  const exampleQuestions = [
    {
      icon: Heart,
      text: "My child was just diagnosed. What should I do first?",
    },
    {
      icon: School,
      text: "What is an IEP?",
    },
    {
      icon: DollarSign,
      text: "How do I apply for SSI?",
    },
    {
      icon: Stethoscope,
      text: "What therapies should I consider?",
    },
    {
      icon: BookOpen,
      text: "How do I prepare for an ARD meeting?",
    },
  ];

  const topicQuestions = [
    { icon: Puzzle, text: "Newly Diagnosed" },
    { icon: School, text: "School & IEP" },
    { icon: Wallet, text: "SSI & Benefits" },
    { icon: Stethoscope, text: "Therapies" },
    { icon: HeartHandshake, text: "Parent Support" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-700 to-sky-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Bot className="mx-auto w-16 h-16 mb-6 text-white" />

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ask Guiding Light
          </h1>

          <p className="text-2xl text-blue-100 font-medium mb-8">
            Compassionate AI guidance for your autism journey.
          </p>
        </div>
      </section>

      {/* Chat Box */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <div className="mb-8 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <HeartHandshake className="w-10 h-10 text-blue-700 mt-1 flex-shrink-0" />

              <div>
                <h2 className="text-2xl font-bold text-blue-700">
                  Let's take the next step together.
                </h2>

                <p className="mt-3 text-gray-700 leading-8">
                  Whether your child was diagnosed today or you've been
                  navigating autism for years, we're here to help.
                </p>

                <p className="mt-3 text-gray-700 leading-8">
                  Ask about autism, therapies, school services, IEPs, SSI,
                  Medicaid, behavior, or everyday parenting challenges.
                </p>
              </div>
            </div>
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={`Hi! 👋 How can we help you today?

Example:

"My child was diagnosed yesterday. What should I do first?"`}
            className="w-full h-40 rounded-xl border border-gray-300 p-5 text-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <div className="mt-8">
            <h3 className="mb-2 text-lg font-semibold text-gray-700">
              How can we help today?
            </h3>

            <p className="mb-6 text-gray-600">
              Choose a topic below or type your own question.
            </p>

            <div className="flex flex-wrap gap-4">
              {topicQuestions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setQuestion(item.text)}
                    className="
                      inline-flex items-center gap-3
                      rounded-full
                      border border-gray-200
                      bg-white
                      px-6 py-3
                      font-semibold
                      text-gray-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:bg-blue-50
                      hover:text-blue-700
                      hover:shadow-lg
                    "
                  >
                    <Icon className="h-5 w-5 text-blue-700" />

                    {item.text}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={askGuidingLight}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-4 text-xl font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-800 hover:shadow-lg active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="w-5 h-5" />

            {loading
              ? "Guiding Light is thinking..."
              : "Ask Guiding Light"}
          </button>

          {answer && (
            <div className="mt-10 rounded-2xl border border-blue-100 bg-white p-6 shadow-md sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✨
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    AI Guidance
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800">
                    Guiding Light's Answer
                  </h2>
                </div>
              </div>

              <div className="prose prose-blue max-w-none leading-8 text-gray-700 sm:prose-lg">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-blue-800 mt-6 mb-3">
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="text-lg font-bold text-blue-700 mt-5 mb-2">
                        {children}
                      </h3>
                    ),

                    p: ({ children }) => (
                      <p className="mb-4 leading-7 text-gray-700">
                        {children}
                      </p>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        {children}
                      </ul>
                    ),

                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-4 space-y-2">
                        {children}
                      </ol>
                    ),

                    li: ({ children }) => (
                      <li className="leading-7 text-gray-700">
                        {children}
                      </li>
                    ),

                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-900">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {answer}
                </ReactMarkdown>

                <Link
                  href="/consultation"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-800"
                >
                  Schedule a Consultation with Guiding Light
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Popular Questions */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Popular Questions
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {exampleQuestions.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setQuestion(item.text)}
                  className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition text-left"
                >
                  <Icon className="w-8 h-8 text-blue-700 flex-shrink-0" />

                  <span className="text-left text-lg font-medium text-gray-800">
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
