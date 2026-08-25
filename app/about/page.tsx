import Image from "next/image";
import {
  HeartHandshake,
  Handshake,
  Languages,
  BookOpen,
  UsersRound,
  Compass,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-sky-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About Guiding Light Autism Family Support
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          Guiding Light Autism Family Support was created by a special needs
          family who understands the challenges, questions, and uncertainty
          that come with navigating autism. Our mission is to provide
          compassionate guidance, trusted resources, and practical support so
          families can move forward with confidence and hope.
        </p>
      </section>


      {/* OUR STORY / MISSION / VALUES */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* OUR STORY */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8">
              Guiding Light Autism Family Support was founded from a deeply
              personal understanding of the autism journey. We recognize that
              navigating diagnoses, available services, educational resources,
              and support systems can often feel overwhelming.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Our goal is to simplify that journey by providing clear,
              compassionate guidance so families can make informed decisions
              and move forward with confidence.
            </p>
          </div>


          {/* OUR MISSION */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              We believe no family should feel alone while navigating autism
              resources and services. Through personalized consulting, we help
              families better understand available options, connect with
              valuable resources, and build a practical path forward.
            </p>
          </div>


          {/* OUR VALUES */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Our Values
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-blue-700" />
                Compassion in every interaction
              </li>

              <li className="flex items-center gap-3">
                <Handshake className="w-5 h-5 text-blue-700" />
                Honest, trustworthy guidance
              </li>

              <li className="flex items-center gap-3">
                <Languages className="w-5 h-5 text-blue-700" />
                Support for English and Spanish-speaking families
              </li>

              <li className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-700" />
                Clear information that empowers confident decisions
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* OUR WRAPAROUND APPROACH */}
      <section className="bg-sky-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="flex justify-center mb-5">
              <UsersRound className="w-12 h-12 text-blue-700" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5">
              Our Wraparound Approach
            </h2>

            <p className="text-xl font-semibold text-gray-800">
              Supporting the whole family — not just one piece of the puzzle.
            </p>

          </div>


          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <div className="grid md:grid-cols-2 gap-10 items-start">

              {/* LEFT */}
              <div>

                <h3 className="text-2xl font-bold text-blue-700 mb-5">
                  Looking at the Whole Picture
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Guiding Light Autism Family Support takes a wraparound
                  approach to supporting families. Rather than focusing on
                  only one challenge or one service, we look at the bigger
                  picture of what a family may need.
                </p>

                <p className="text-gray-600 leading-8">
                  We work alongside families to understand their priorities,
                  identify their strengths, explore available resources, and
                  help bring greater clarity to the many pieces that can make
                  up an autism support system.
                </p>

              </div>


              {/* RIGHT */}
              <div>

                <h3 className="text-2xl font-bold text-blue-700 mb-5">
                  Connecting the Pieces
                </h3>

                <ul className="space-y-4 text-gray-600">

                  <li className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    <span>
                      Understanding your family's priorities, strengths, and
                      goals
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    <span>
                      Exploring education, healthcare, therapy, and community
                      resources
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    <span>
                      Identifying benefits, financial resources, respite, and
                      other supports
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-blue-700 mt-1 shrink-0" />
                    <span>
                      Helping families organize information and determine
                      practical next steps
                    </span>
                  </li>

                </ul>

              </div>

            </div>


            {/* FAMILY CENTERED MESSAGE */}
            <div className="mt-10 bg-blue-50 rounded-2xl p-8 text-center">

              <Sparkles className="w-8 h-8 text-blue-700 mx-auto mb-4" />

              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Your Family Is at the Center
              </h3>

              <p className="text-gray-600 leading-8 max-w-4xl mx-auto">
                There is no one-size-fits-all path through autism. Your
                family's priorities, circumstances, strengths, and goals
                matter. Our role is to help you understand your options,
                research resources, organize the information, and move
                forward with greater confidence.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Meet the Founders */}
<section className="bg-sky-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
      Meet the Family Behind Guiding Light
    </h2>

    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Guiding Light Autism Family Support was created from our own family's
      autism journey. We understand the questions, challenges, and uncertainty
      families face, and our mission is to provide compassionate guidance,
      trusted resources, and support to help families move forward with
      confidence and hope.
    </p>

    {/* Founder Columns */}
    <div className="grid md:grid-cols-2 gap-8 items-start">

      {/* ==================== IRENE ==================== */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="flex flex-col items-center text-center">

          <Image
            src="/images/irene-leal4.jpg"
            alt="Irene Leal"
            width={235}
            height={280}
            className="rounded-2xl shadow-lg mb-6 object-contain"
          />

          <h3 className="text-2xl font-bold text-blue-700">
            Irene Leal
          </h3>

          <p className="text-blue-600 font-semibold mb-6">
            Founder • Autism Coach & Family Support Advocate
          </p>

        </div>

        <h4 className="text-lg font-bold text-blue-700 mb-2">
          A Personal Journey Into Autism Support
        </h4>

        <p className="text-gray-600 leading-7">
          Irene Leal is an Autism Coach and Family Support Advocate whose
          passion for helping families was born from her own family's autism
          journey. As a mother raising two children with autism—one verbal
          and one non-verbal—she understands the questions, uncertainty, and
          emotional challenges that can come with an autism diagnosis.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          Early in her journey, Irene found herself struggling with the guilt
          and unanswered questions that many parents experience. Determined
          to find real answers and better understand how to support her
          children, she moved to Denton, Texas, and earned her Bachelor's
          degree in Family Studies from Texas Woman's University.
        </p>

        <h4 className="text-lg font-bold text-blue-700 mt-8 mb-2">
          Education & Clinical Experience
        </h4>

        <p className="text-gray-600 leading-7">
          Her education opened the door to an internship with an Applied
          Behavior Analysis (ABA) clinic, where she discovered both a passion
          and a capacity for helping children and families. Irene went on to
          spend years working as a Registered Behavior Technician (RBT),
          providing direct in-clinic services at Bright Mosaic in Denton and
          supporting individualized in-home programs for children from
          approximately 18 months through adolescence.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          Driven to deepen her understanding of ABA and behavioral support,
          Irene continued her education through graduate-level coursework in
          Applied Behavior Analysis at Ball State University. While she did
          not complete a master's degree, the coursework further developed
          her understanding of ABA principles and behavioral support.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          Irene later expanded her experience by working as a life-skills
          coach for adults with autism at 29 Acres, helping individuals
          develop greater independence and community participation.
        </p>

        <h4 className="text-lg font-bold text-blue-700 mt-8 mb-2">
          A Wrap-Around Approach to Family Support
        </h4>

        <p className="text-gray-600 leading-7">
          Today, with her own children now adults, Irene brings together her
          academic training, clinical experience, professional knowledge, and
          decades of lived experience. She understands that support cannot
          stop when childhood ends and that every family may need help in
          different areas of their journey.
        </p>

        <p className="text-gray-600 leading-7 mt-4">
          This is why Irene embraces a <strong>wrap-around approach</strong>
          to family support—looking at the whole family, understanding what
          matters most to them, helping identify the pieces of support they
          may need, and bringing greater clarity and direction to an often
          overwhelming journey.
        </p>

        <h4 className="text-lg font-bold text-blue-700 mt-8 mb-2">
          Faith, Hope & Purpose
        </h4>

        <p className="text-gray-600 leading-7">
          Irene's faith is also an important part of her story. Through years
          of uncertainty, therapies, challenges, and unanswered questions,
          she came to believe that God was the ultimate source of her
          family's strength, peace, and direction. She shares that faith as
          part of her personal journey while respecting each family's
          individual beliefs and circumstances.
        </p>

        <div className="mt-8 bg-sky-50 rounded-xl p-6 border-l-4 border-blue-700">
          <p className="text-blue-800 font-semibold leading-7">
            "You did not cause this. You are not alone. With the right tools,
            support, and guidance, your family can build a more peaceful and
            functional path forward."
          </p>
        </div>

      </div>


      {/* ==================== ESAU ==================== */}
      <div className="space-y-8">

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="flex flex-col items-center text-center">

            <Image
              src="/images/esau-leal3.jpg"
              alt="Esau Leal"
              width={250}
              height={250}
              className="rounded-2xl shadow-lg mb-6 object-cover"
            />

            <h3 className="text-2xl font-bold text-blue-700">
              Esau Leal
            </h3>

            <p className="text-blue-600 font-semibold mb-6">
              Co-Founder • Family Support Advocate
            </p>

          </div>

          <h4 className="text-lg font-bold text-blue-700 mb-2">
            Organization, Advocacy & Practical Guidance
          </h4>

          <p className="text-gray-600 leading-7">
            As a father, co-founder, and advocate in a special needs family,
            Esau understands the importance of finding reliable information,
            organizing resources, and navigating complex systems. His own
            family's autism journey has given him firsthand understanding of
            the questions and challenges families face.
          </p>

          <p className="text-gray-600 leading-7 mt-4">
            With a professional background in operations, process improvement,
            and helping people work through challenging processes, Esau brings
            structure, organization, and practical guidance to Guiding Light.
            His focus is helping families take complicated information and turn
            it into clear, manageable next steps.
          </p>

          <h4 className="text-lg font-bold text-blue-700 mt-8 mb-2">
            Education & Professional Experience
          </h4>

          <p className="text-gray-600 leading-7">
            Esau holds a Bachelor of Science in Business Administration and a
            Master of Science in Information Systems. He combines his
            professional experience in operations, process improvement, and
            organizational support with his lived experience as a father in a
            special needs family.
          </p>

          <p className="text-gray-600 leading-7 mt-4">
            At Guiding Light, Esau helps families organize information, identify
            resources, understand their options, and move forward with greater
            confidence and clarity.
          </p>

          <h4 className="text-lg font-bold text-blue-700 mt-8 mb-2">
            Supporting the Whole Family
          </h4>

          <p className="text-gray-600 leading-7">
            Esau shares Guiding Light's belief that families often need more
            than a single answer. By working alongside families and helping
            connect the different pieces of their journey, he supports the
            organization's wrap-around approach to family guidance.
          </p>

          <div className="mt-8 bg-sky-50 rounded-xl p-6 border-l-4 border-blue-700">
            <p className="text-blue-800 font-semibold leading-7">
              Guiding Light is about helping families move from feeling
              overwhelmed and uncertain to feeling informed, organized, and
              supported.
            </p>
          </div>

        </div>


        {/* ==================== OUR FAMILY ==================== */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex justify-center mb-8">

            <Image
              src="/images/family-photo.jpg"
              alt="The Leal family"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg w-full h-auto"
            />

          </div>

          <div>

            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Our Family. Our Why.
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Guiding Light Autism Family Support was born from our own
              family's journey.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              We are parents of two children with autism, and we know
              firsthand how overwhelming it can be when your child receives
              a diagnosis. We remember searching for answers, trying to
              figure out what to do next, how to do it, and where to find
              the resources and benefits our family needed.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Too often, finding the right information meant going in
              circles — searching online, making calls, asking questions,
              and trying to piece everything together on our own. We learned
              how difficult it can be for families to find clear, reliable
              information when they need it most.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Today, we want to use what we've learned to help families who
              are just beginning this journey. Our goal is to help parents
              spend less time searching for answers and more time focusing
              on their children and their families.
            </p>

            <p className="text-blue-700 font-semibold text-lg leading-relaxed">
              We created Guiding Light for our children — and for the
              families walking the same journey.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* Mission */}
    <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-center">

      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        Our Mission
      </h3>

      <p className="text-gray-600 text-lg">
        Together, we created Guiding Light Autism Family Support because we
        know how overwhelming the journey can feel. Our mission is to help
        families feel informed, supported, and empowered by providing
        guidance, resources, and direction from people who truly understand.
      </p>

    </div>

  </div>
</section>

      {/* OUR JOURNEY */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
            Our Journey
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Living the Journey
              </h3>

              <p className="text-gray-600">
                Our journey began by living the autism experience as a special
                needs family. Through challenges, questions, and discoveries,
                we learned how important compassionate guidance and support
                truly are.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Understanding the Challenges
              </h3>

              <p className="text-gray-600">
                We experienced firsthand how overwhelming it can feel to find
                accurate information, navigate services, and understand the
                resources available to families.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Building Guiding Light
              </h3>

              <p className="text-gray-600">
                We created Guiding Light Autism Family Support to help families
                find direction, confidence, and hope from people who understand
                the journey.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Walking Alongside Families
              </h3>

              <p className="text-gray-600">
                Our mission is to provide compassionate guidance, trusted
                resources, and practical support so families never feel alone
                while navigating autism.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* WHY FAMILIES TRUST GUIDING LIGHT */}
      <section className="bg-sky-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
            Why Families Trust Guiding Light
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <HeartHandshake className="w-12 h-12 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Lived Family Experience
              </h3>

              <p className="text-gray-600">
                As a special needs family raising two adult children with
                autism, we understand the challenges, victories, and questions
                families experience because we've lived them ourselves.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <BookOpen className="w-12 h-12 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Professional & Educational Expertise
              </h3>

              <p className="text-gray-600">
                Our educational backgrounds and professional experience allow
                us to provide organized, trustworthy guidance while keeping
                families at the center of everything we do.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <Languages className="w-12 h-12 text-blue-700 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                English & Spanish Support
              </h3>

              <p className="text-gray-600">
                We proudly serve families in both English and Spanish, helping
                more parents access the guidance, resources, and support they
                deserve.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ABOUT PAGE FINAL CTA */}
      <section className="bg-blue-700 text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Don’t Have to Navigate This Journey Alone
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            As a special needs family ourselves, we understand the questions,
            challenges, and uncertainty that can come with the autism journey.
            Guiding Light Autism Family Support is here to provide
            compassionate guidance, trusted resources, and support to help your
            family move forward with confidence.
          </p>

          <a
            href="https://calendly.com/esauleal1/free-30-minute-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto max-w-xs bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition text-center"
          >
            Schedule Your Free Consultation
          </a>

        </div>

      </section>

    </main>
  );
}
