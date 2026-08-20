"use client";

import {
  HeartHandshake,
  Heart,
  UsersRound,
  Home,
  Coffee,
  Compass,
} from "lucide-react";

export default function ParentSupportPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-sky-50 py-20 px-6 text-center">

        <HeartHandshake className="w-16 h-16 text-blue-700 mx-auto mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Parent Support
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-8">
          Raising a child with autism can be rewarding, overwhelming,
          emotional, and exhausting. You don't have to carry the journey
          alone.
        </p>

      </section>

      {/* Cards */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Caring for Your Family Starts With Caring for Yourself
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Heart className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Caregiver Burnout
              </h3>

              <p className="text-gray-600">
                Caring for someone else begins with caring for yourself.
                Recognizing stress and seeking support is an important part
                of the journey.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <HeartHandshake className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Parent-to-Parent Coaching
              </h3>

              <p className="text-gray-600">
                Sometimes the most valuable conversation is with another
                parent who truly understands the autism journey.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <UsersRound className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Support Groups
              </h3>

              <p className="text-gray-600">
                Connecting with other families can provide encouragement,
                practical advice, and lasting friendships.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Home className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Family Relationships
              </h3>

              <p className="text-gray-600">
                Autism affects the entire family. Healthy communication and
                mutual support help families grow stronger together.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Coffee className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Self-Care
              </h3>

              <p className="text-gray-600">
                Taking time to recharge isn't selfish—it helps you continue
                being the best advocate and caregiver for your child.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Compass className="w-10 h-10 text-blue-700 mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Personalized Family Guidance
              </h3>

              <p className="text-gray-600">
                Every family's story is different. During a consultation we
                help you identify resources, encouragement, and practical
                next steps.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Blue Box */}

      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Sometimes You Simply Need Someone Who Understands
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            No handbook can fully prepare parents for this journey.
            Talking with someone who has lived through many of the same
            experiences can bring reassurance, perspective, and hope.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto rounded-3xl bg-blue-700 text-white text-center p-12 shadow-2xl">

          <h2 className="text-4xl font-bold mb-5">
            You Don't Have to Walk This Journey Alone
          </h2>

          <p className="text-xl text-blue-100 mb-8">
            Whether you need guidance, encouragement, or simply someone who
            understands, we're here for you.
          </p>

          <a
            href="https://calendly.com/esauleal1/parent-to-parent-coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-xl font-bold text-gray-900 shadow-lg transition hover:bg-yellow-300 hover:scale-105"
          >
            Schedule Parent-to-Parent Coaching
          </a>

        </div>

      </section>

      {/* Quote */}

      <section className="pb-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-2xl italic text-blue-700 font-semibold">
            "Hope grows stronger when families know they are not walking alone."
          </p>

        </div>

      </section>

    </main>
  );
}