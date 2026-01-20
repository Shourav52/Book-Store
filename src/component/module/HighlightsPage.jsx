"use client";

export default function HighlightsPage() {
  const stats = [
    {
      title: "Books Available",
      value: "12,000+",
      description: "A wide collection of books across multiple genres",
    },
    {
      title: "Happy Readers",
      value: "8,500+",
      description: "Trusted by thousands of book lovers nationwide",
    },
    {
      title: "Categories",
      value: "45+",
      description: "Fiction, science, lifestyle, self-help & more",
    },
    {
      title: "Orders Delivered",
      value: "20,000+",
      description: "Fast and reliable delivery service",
    },
  ];

  const highlights = [
    {
      title: "Original & Authentic Books",
      description:
        "We provide 100% original books sourced directly from publishers.",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and safe delivery within 2–5 working days.",
    },
    {
      title: "Easy Returns",
      description:
        "7-day easy return policy for damaged or incorrect items.",
    },
    {
      title: "Secure Payment",
      description:
        "Multiple secure payment options including Cash on Delivery.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Statistics Section */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.value}
              </h3>
              <p className="font-semibold mt-2">{stat.title}</p>
              <p className="text-gray-600 text-sm mt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose Our Book Shop
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-6 bg-gray-50"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
