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
    imageUrl: "/product-images/weighted-lap-pad.png",
    amazonUrl: "https://link.amazon/B06ZWvDLd",
  },
  {
    id: "sensory-002",
    name: "Noise-Reducing Earmuffs",
    category: "Sensory & Comfort",
    description:
      "Hearing protection earmuffs may help reduce exposure to loud environmental sounds during activities such as travel, community outings, or crowded events. Comfort, fit, and noise-reduction ratings should be considered when selecting a product.",
    imageUrl: "/product-images/noise-reducing-earmuffs.png",
    amazonUrl: "https://link.amazon/B00MQ6ZFj",
  },
  {
    id: "sensory-003",
    name: "Sensory Fidget Toy Set",
    category: "Sensory & Comfort",
    description:
      "A collection of tactile fidget toys offering different textures, shapes, and movement options. These products may provide enjoyable sensory experiences for individuals who prefer hands-on activities. Select age-appropriate items and consider choking hazards, durability, and supervision needs.",
    imageUrl: "/product-images/sensory-fidget-toy-set.png",
    amazonUrl: "https://link.amazon/B0dtpPr8B",
  },
  {
    id: "communication-001",
    name: "AAC Picture Communication Board",
    category: "Communication & Learning",
    description:
      "A picture-based communication board that allows individuals to express needs, preferences, and everyday choices using visual symbols. These tools may support communication at home, school, or in the community. Choose a format that matches the individual's communication needs and abilities.",
    imageUrl: "/product-images/aac-picture-communication-board.png",
    amazonUrl: "https://link.amazon/B0h15swGi",
  },
  // COMMUNICATION & LEARNING
  {
    id: "communication-002",
    name: "Visual Schedule Board",
    category: "Communication & Learning",
    description:
      "A visual schedule board that uses pictures or symbols to represent daily activities and routines. May help individuals understand upcoming activities, transitions, and everyday expectations.",
    imageUrl: "/product-images/visual-schedule-board.png",
    amazonUrl: "https://link.amazon/B07vFcutn",
  },
  {
    id: "communication-003",
    name: "Visual Timer",
    category: "Communication & Learning",
    description:
      "A visual countdown timer that shows the passage of time without requiring someone to read a traditional clock. May be useful for daily routines, activity transitions, and learning environments.",
    imageUrl: "/product-images/visual-timer.png",
    amazonUrl: "https://link.amazon/B038HwlHA",
  },

  // HOME & SAFETY
  {
    id: "safety-001",
    name: "Door and Window Alarm",
    category: "Home & Safety",
    description:
      "A door or window alarm that provides an audible alert when an entry point opens. May offer an additional layer of awareness for caregivers. These devices are not substitutes for supervision or a comprehensive home safety plan.",
    imageUrl: "/product-images/door-window-alarm.png",
    amazonUrl: "https://link.amazon/B08KK0BEV",
  },
  {
    id: "safety-002",
    name: "Child Safety Cabinet Locks",
    category: "Home & Safety",
    description:
      "Cabinet safety locks designed to help restrict access to selected household storage areas. Consider the individual's abilities, installation requirements, and emergency accessibility when selecting locks.",
    imageUrl: "/product-images/child-safety-cabinet-locks.png",
    amazonUrl: "https://link.amazon/B0j66JenP",
  },
  {
    id: "safety-003",
    name: "AngelSense Personal GPS Watch",
    category: "Home & Safety",
    description:
      "A wearable GPS tracking watch designed to help caregivers monitor the location of loved ones who may wander. Features include real-time location tracking, two-way voice communication, and safety alerts. A monthly subscription is required. GPS tracking is an additional safety tool and does not replace caregiver supervision.",
    imageUrl: "/product-images/angelsense-gps-watch.png",
    amazonUrl: "https://link.amazon/B01iU4gYN",
  },

  // DAILY LIVING & INDEPENDENCE
  {
    id: "daily-001",
    name: "Now Next Later Visual Schedule Board",
    category: "Daily Living & Independence",
    description:
      "A visual schedule board designed to help individuals understand daily activities and transitions using Now, Next, and Later picture cards. It may support communication, predictability, and independence by making upcoming activities easier to understand. Includes visual communication cards that can be adapted to individual routines and needs.",
    imageUrl: "/product-images/now-next-later-visual-board.png",
    amazonUrl: "https://link.amazon/B0edoZXO8",
  },
  {
    id: "daily-002",
    name: "Adaptive Eating Utensil Set",
    category: "Daily Living & Independence",
    description:
      "A four-piece adaptive eating utensil set featuring stainless steel utensils with thick, textured, easy-grip handles. Designed for individuals who may have difficulty gripping standard utensils, these tools may help improve comfort, control, and independence during mealtimes. Suitable for individuals with varying motor coordination and grip-strength needs.",
    imageUrl: "/product-images/adaptive-eating-utensils.png",
    amazonUrl: "https://link.amazon/B01RhbInj",
  },
  {
    id: "daily-003",
    name: "Adaptive Button Hook and Zipper Pull Set",
    category: "Daily Living & Independence",
    description:
      "This two-piece adaptive dressing aid set features easy-grip, textured handles with button hooks and zipper pulls. Designed to help individuals who experience difficulty with fine motor movements, hand coordination, or gripping small objects. These tools may make buttoning clothing and operating zippers easier, supporting greater independence with daily dressing routines.",
    imageUrl: "/product-images/adaptive-button-hook-zipper-pull.png",
    amazonUrl: "https://link.amazon/B0dQZLyWR",
  },

  // EDUCATIONAL RESOURCES & BOOKS
  {
    id: "education-001",
    name: "An Early Start for Your Child with Autism",
    category: "Educational Resources & Books",
    description:
      "Written by Sally J. Rogers, Geraldine Dawson, and Laurie A. Vismara, this practical parenting resource offers everyday activities to help young children with autism develop communication, social interaction, and learning skills. The book provides parents and caregivers with strategies they can incorporate into daily routines to encourage connection, engagement, and early development.",
    imageUrl: "/product-images/autism-parenting-resource-book.png",
    amazonUrl: "https://link.amazon/B06U3E2k2",
  },
  {
    id: "education-002",
    name: "The Reason I Jump",
    category: "Educational Resources & Books",
    description:
      "Written by Naoki Higashida, The Reason I Jump offers a personal perspective on the experiences of a young autistic person. Through questions and reflections, the book explores communication, sensory experiences, emotions, and everyday challenges. This resource may help parents, caregivers, and educators develop a deeper understanding of autism and appreciate different ways individuals experience and interact with the world.",
    imageUrl: "/product-images/the-reason-i-jump-book.png",
    amazonUrl: "https://link.amazon/B0fNZGjuf",
  },
  {
    id: "education-003",
    name: "The Out-of-Sync Child Has Fun",
    category: "Educational Resources & Books",
    description:
      "Written by Carol Stock Kranowitz, this sensory activity book offers games and hands-on activities for children with sensory processing differences. It provides parents, caregivers, and educators with practical ideas for exploring movement, touch, coordination, and sensory play. Activities can be adapted to each child's individual abilities, preferences, and comfort level.",
    imageUrl: "/product-images/sensory-activities-learning-book.png",
    amazonUrl: "https://link.amazon/B0fAVJ7LD",
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
  <strong>Affiliate Disclosure:</strong> As an Amazon Associate
  I earn from qualifying purchases. Guiding Light Autism Family
  Support may earn a commission when you purchase through our
  Amazon affiliate links, at no additional cost to you.
  Product recommendations are provided for informational
  purposes and do not replace professional guidance.
</p>
</div>

</section>
    </main>
  );
}
