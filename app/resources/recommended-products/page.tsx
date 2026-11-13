type RecommendedProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
};

const recommendedProducts: RecommendedProduct[] = [
  {
    id: "sensory-001",
    name: "Weighted Lap Pad",
    category: "Sensory & Comfort",
    description:
      "A weighted lap pad may provide comforting pressure for individuals who enjoy deep-pressure sensory input. Choose an appropriate size and weight based on individual preferences and safety needs.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "sensory-002",
    name: "Noise-Reducing Earmuffs",
    category: "Sensory & Comfort",
    description:
      "Hearing protection earmuffs may help reduce exposure to loud environmental sounds during activities such as travel, community outings, or crowded events. Comfort, fit, and noise-reduction ratings should be considered when selecting a product.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "sensory-003",
    name: "Sensory Fidget Toy Set",
    category: "Sensory & Comfort",
    description:
      "A collection of tactile fidget toys offering different textures, shapes, and movement options. These products may provide enjoyable sensory experiences for individuals who prefer hands-on activities. Select age-appropriate items and consider choking hazards, durability, and supervision needs.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "communication-001",
    name: "AAC Picture Communication Board",
    category: "Communication & Learning",
    description:
      "A picture-based communication board that allows individuals to express needs, preferences, and everyday choices using visual symbols. These tools may support communication at home, school, or in the community. Choose a format that matches the individual's communication needs and abilities.",
    imageUrl: "",
    amazonUrl: "",
  },
  // COMMUNICATION & LEARNING
  {
    id: "communication-002",
    name: "Visual Schedule Board",
    category: "Communication & Learning",
    description:
      "A visual schedule board that uses pictures or symbols to represent daily activities and routines. May help individuals understand upcoming activities, transitions, and everyday expectations.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "communication-003",
    name: "Visual Timer",
    category: "Communication & Learning",
    description:
      "A visual countdown timer that shows the passage of time without requiring someone to read a traditional clock. May be useful for daily routines, activity transitions, and learning environments.",
    imageUrl: "",
    amazonUrl: "",
  },

  // HOME & SAFETY
  {
    id: "safety-001",
    name: "Door and Window Alarm",
    category: "Home & Safety",
    description:
      "A door or window alarm that provides an audible alert when an entry point opens. May offer an additional layer of awareness for caregivers. These devices are not substitutes for supervision or a comprehensive home safety plan.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "safety-002",
    name: "Child Safety Cabinet Locks",
    category: "Home & Safety",
    description:
      "Cabinet safety locks designed to help restrict access to selected household storage areas. Consider the individual's abilities, installation requirements, and emergency accessibility when selecting locks.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "safety-003",
    name: "Personal GPS Location Tracker",
    category: "Home & Safety",
    description:
      "A wearable or portable location-tracking device that may help caregivers locate a family member when needed. Compare battery life, coverage, subscription costs, privacy features, and reliability. Tracking devices do not replace appropriate supervision.",
    imageUrl: "",
    amazonUrl: "",
  },

  // DAILY LIVING & INDEPENDENCE
  {
    id: "daily-001",
    name: "Visual Daily Routine Chart",
    category: "Daily Living & Independence",
    description:
      "A reusable visual routine chart that displays everyday activities such as getting dressed, brushing teeth, and preparing for bedtime. May support individuals who benefit from predictable routines and visual reminders.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "daily-002",
    name: "Adaptive Eating Utensils",
    category: "Daily Living & Independence",
    description:
      "Eating utensils with modified handles or grips designed for individuals who benefit from additional support during meals. Choose products based on individual comfort, coordination, and accessibility needs.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "daily-003",
    name: "Easy-Grip Adaptive Dressing Aids",
    category: "Daily Living & Independence",
    description:
      "Practical dressing tools, such as zipper pulls or button hooks, designed to make certain clothing tasks easier to manage. Product suitability depends on individual abilities and preferences.",
    imageUrl: "",
    amazonUrl: "",
  },

  // EDUCATIONAL RESOURCES & BOOKS
  {
    id: "education-001",
    name: "Autism Parenting Resource Book",
    category: "Educational Resources & Books",
    description:
      "An educational book offering information and practical perspectives on autism, family support, communication, and everyday experiences. Review the author's qualifications, publication date, and approach before selecting a specific title.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "education-002",
    name: "Social Skills Activity Workbook",
    category: "Educational Resources & Books",
    description:
      "An activity-based workbook featuring exercises related to communication, social understanding, and everyday interactions. Choose materials that are respectful, age-appropriate, and suited to the individual's interests and learning preferences.",
    imageUrl: "",
    amazonUrl: "",
  },
  {
    id: "education-003",
    name: "Sensory Activities and Learning Book",
    category: "Educational Resources & Books",
    description:
      "A resource book featuring sensory-friendly activities, creative learning ideas, and hands-on projects for families and caregivers. Activities should be selected according to individual preferences, developmental needs, and safety considerations.",
    imageUrl: "",
    amazonUrl: "",
  },

];

export default function RecommendedProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-sky-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-blue-700 md:text-5xl">
            Recommended Products for Autism Families
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-8 text-gray-600">
            Explore thoughtfully selected products and resources
            that may support sensory comfort, communication,
            learning, safety, and everyday independence.
            Every family's needs are unique, and our goal is
            to help you discover options worth exploring.
          </p>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
<section className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="mb-4 text-center text-3xl font-bold text-blue-700">
    Explore Our Recommendations
  </h2>

  <p className="mx-auto mb-10 max-w-3xl text-center text-gray-600">
    Browse products by category to discover options that may
    support your family's everyday needs.
  </p>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Sensory & Comfort",
        description:
          "Explore items designed for sensory preferences, comfort, and relaxation.",
      },
      {
        title: "Communication & Learning",
        description:
          "Discover tools that may support communication, learning, and engagement.",
      },
      {
        title: "Home & Safety",
        description:
          "Browse practical products for creating a safer, more supportive home environment.",
      },
      {
        title: "Daily Living & Independence",
        description:
          "Find everyday tools that may help build routines and independent living skills.",
      },
      {
        title: "Educational Resources & Books",
        description:
          "Explore books and educational materials for individuals, parents, and caregivers.",
      },
    ].map((category) => (
      <div
        key={category.title}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h3 className="mb-3 text-xl font-semibold text-blue-700">
          {category.title}
        </h3>

        <p className="leading-7 text-gray-600">
          {category.description}
        </p>
      </div>
    ))}
  </div>
</section>
{/* RECOMMENDED AMAZON PRODUCTS */}
<section className="bg-gray-50 px-6 py-16">
  <div className="mx-auto max-w-6xl">
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-blue-700">
        Products Worth Exploring
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Browse practical products that may support comfort,
        communication, learning, safety, and everyday independence.
      </p>
    </div>

    <div
      id="recommended-product-list"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {recommendedProducts.map((product) => (
      <div
  key={product.id}
  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
>
  {product.imageUrl && (
  <div className="flex h-48 items-center justify-center overflow-hidden bg-blue-50">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="h-full w-full object-contain p-4"
    />
  </div>
)}

  <div className="p-6">
    <p className="mb-2 text-sm font-semibold text-blue-600">
      {product.category}
</p>

    <h3 className="mb-3 text-xl font-semibold text-gray-900">
      {product.name}

    </h3>

    <p className="mb-5 text-sm leading-6 text-gray-600">
       {product.description}
</p>

    {product.amazonUrl ? (
  <a
    href={product.amazonUrl}
    target="_blank"
    rel="sponsored noopener noreferrer"
    className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
  >
    View on Amazon
  </a>
) : (
  <span className="inline-block rounded-lg bg-gray-200 px-5 py-3 text-sm font-semibold text-gray-600">
    Amazon Link Coming Soon
  </span>
)}

  </div>
</div>
      ))}
    </div>
  </div>
<div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-5 text-center">
  <p className="text-sm leading-6 text-gray-700">
    <strong>Product Recommendation Notice:</strong> Guiding Light
Autism Family Support shares product recommendations to help
families explore tools and resources that may support their
individual needs. Product recommendations are provided for
informational purposes and do not replace professional guidance.
  </p>
</div>

</section>
    </main>
  );
}
