import Image from "next/image";
import { HeartHandshake, Handshake, Languages, BookOpen } from "lucide-react";
export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-sky-50 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About Guiding Light Autism Family Support
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guiding Light Autism Family Support was created by a special needs family who understands 
          the challenges, questions, and uncertainty that come with navigating autism. 
          Our mission is to provide compassionate guidance, trusted resources, and practical support 
          so families can move forward with confidence and hope.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

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


    <div className="grid md:grid-cols-2 gap-8">


      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <div className="flex flex-col items-center text-center">

  <Image
  src="/images/irene-leal3.jpg"
  alt="Irene Leal"
  width={235}
  height={280}
  className="rounded-2xl shadow-lg mb-6 object-contain"
 />


  <h3 className="text-2xl font-bold text-blue-700">
    Irene Leal
  </h3>

  <p className="text-blue-600 font-semibold mb-6">
    Founder • Family Support Advocate
  </p>

</div>


        <p className="text-gray-600">
          Founder & Family Support Advocate
        </p>

        <p className="text-gray-600 mt-4">
          As a mother, advocate, and co-founder Irene brings lived experience from her own family's autism journey.
          She understands the challenges families face while navigating resources, services, education, and
          support systems. 
          As part of a special needs family raising children with autism, 
          she brings personal experience, compassion, 
          and a commitment to helping other families find guidance, resources, and hope.
          Irene also holds a Bachelor's degree in Family Studies, combining her education
          with the lived experience of raising children with autism to provide compassionate
          guidance and support for other families.
        </p>

      </div>


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

        <p className="text-gray-600">
          Co-Founder & Family Support Advocate
        </p>

        <p className="text-gray-600 mt-4">
          As a father, co-founder, and advocate in a special needs family, Esau understands the importance of finding reliable information, 
          organizing resources, and navigating complex systems. With a professional background in operations, 
          process improvement, and helping people work through challenging processes, he brings structure, 
          organization, and practical guidance to help families move forward with confidence.
          Esau holds a Bachelor of Science in Business Administration and a Master of Science in Information Systems.
          He combines his professional background with lived experience as a father in a special needs
          family to provide organized, practical, and compassionate guidance to families
          navigating the autism journey.
        </p>

      </div>


    </div>

{/* Our Family. Our Why. */}
      <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center">
  <Image
    src="/images/family-photo.jpg"
    alt="The Leal family"
    width={800}
    height={600}
    className="rounded-2xl shadow-lg w-full max-w-[600px] h-auto"
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

    <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-center">

      <h3 className="text-2xl font-bold text-blue-700 mb-4">
        Our Mission
      </h3>

      <p className="text-gray-600 text-lg">
        Together, we created Guiding Light Autism Family Support because we know how overwhelming the 
        journey can feel. Our mission is to help families feel informed, supported, and empowered 
        by providing guidance, resources, and direction from people who truly understand.
      </p>

    </div>


  </div>

</section>
{/* Our Journey */}
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
          Our journey began by living the autism experience as a special needs family. 
          Through challenges, questions, and discoveries, we learned how important 
          compassionate guidance and support truly are.
        </p>
      </div>


      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Understanding the Challenges
        </h3>

        <p className="text-gray-600">
          We experienced firsthand how overwhelming it can feel to find accurate
          information, navigate services, and understand the resources available to families.
        </p>
      </div>


      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Building Guiding Light
        </h3>

        <p className="text-gray-600">
          We created Guiding Light Autism Family Support to help families find
          direction, confidence, and hope from people who understand the journey.
        </p>
      </div>


      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Walking Alongside Families
        </h3>

        <p className="text-gray-600">
          Our mission is to provide compassionate guidance, trusted resources,
          and practical support so families never feel alone while navigating autism.

        </p>
      </div>


    </div>

  </div>

</section>

{/* Why Families Trust Guiding Light */}

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
          As a special needs family raising two adult children with autism,
          we understand the challenges, victories, and questions families
          experience because we've lived them ourselves.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <BookOpen className="w-12 h-12 text-blue-700 mx-auto mb-4" />

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          Professional & Educational Expertise
        </h3>

        <p className="text-gray-600">
          Our educational backgrounds and professional experience allow us
          to provide organized, trustworthy guidance while keeping families
          at the center of everything we do.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

        <Languages className="w-12 h-12 text-blue-700 mx-auto mb-4" />

        <h3 className="text-xl font-bold text-blue-700 mb-3">
          English & Spanish Support
        </h3>

        <p className="text-gray-600">
          We proudly serve families in both English and Spanish, helping
          more parents access the guidance, resources, and support they deserve.
        </p>

      </div>

    </div>

  </div>

</section>

{/* About Page Final CTA */}
<section className="bg-blue-700 text-white py-20 px-6">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      You Don’t Have to Navigate This Journey Alone
    </h2>

    <p className="text-lg text-blue-100 mb-8">
  As a special needs family ourselves, we understand the questions,
  challenges, and uncertainty that can come with the autism journey.
  Guiding Light Autism Family Support is here to provide compassionate
  guidance, trusted resources, and support to help your family move
  forward with confidence.
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
