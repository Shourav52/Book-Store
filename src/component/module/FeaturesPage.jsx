"use client";

export default function FeaturesPage() {
  const features = [
    {
      title: "Wide Book Collection",
      description:
        "Explore thousands of books from various genres including fiction, science, lifestyle, and self-help.",
    },
    {
      title: "Easy Search & Filter",
      description:
        "Quickly find your favorite books using category-based filtering and search functionality.",
    },
    {
      title: "Secure Authentication",
      description:
        "User-friendly login and registration system with secure authentication.",
    },
    {
      title: "Fast & Reliable Delivery",
      description:
        "Get your books delivered safely within 2–5 working days.",
    },
    {
      title: "Cash on Delivery",
      description:
        "Pay after receiving your books with our Cash on Delivery option.",
    },
    {
      title: "User Reviews & Ratings",
      description:
        "Read reviews and ratings from other readers before making a purchase.",
    },
    {
      title: "Wishlist Support",
      description:
        "Save your favorite books to your wishlist and purchase them later.",
    },
    {
      title: "Responsive Design",
      description:
        "Enjoy a smooth experience on mobile, tablet, and desktop devices.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Platform Features
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
