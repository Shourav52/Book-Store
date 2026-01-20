"use client";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      description:
        "At Book Haven, our mission is to foster a love of reading among people of all ages. We believe books have the power to inspire, educate, and transform lives. Through our carefully curated collection, we aim to provide readers with the best selection of genres and titles that cater to every interest.",
    },
    {
      title: "Why Choose Us",
      description:
        "We are committed to quality and authenticity. Every book in our collection is sourced from trusted publishers to ensure you receive original and high-quality content. Additionally, our user-friendly platform, fast delivery, and secure payment options make your shopping experience seamless and enjoyable.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become a trusted destination for readers around the globe. We aspire to build a community where book lovers can explore, discover, and share their favorite reads. With an emphasis on personalized recommendations and excellent customer service, we strive to make every reading journey memorable.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Book Haven
      </h1>

      {/* Main Paragraph */}
      <p className="text-gray-700 text-lg leading-8 mb-12">
        Welcome to Book Haven, your ultimate destination for books of all kinds. 
        Our platform has been designed with readers in mind, offering a seamless experience from browsing to delivery. Whether you're searching for timeless classics, contemporary novels, self-help guides, or educational resources, we have something for everyone.  
        <br /><br />
        Our dedicated team works tirelessly to curate a collection that represents quality, authenticity, and diversity. We collaborate with leading publishers to ensure that every book you purchase meets our high standards. Beyond just selling books, we strive to create a community where knowledge, imagination, and creativity flourish.  
        <br /><br />
        At Book Haven, we understand that reading is more than just a hobby—it’s a journey. That’s why our platform is built for convenience and enjoyment. Fast delivery, easy returns, secure payment methods, and personalized recommendations ensure that your reading experience is smooth and delightful.  
        <br /><br />
        We also value feedback from our readers. Your suggestions help us improve our collection, services, and features. By fostering a community-driven approach, we ensure that every reader feels heard, appreciated, and inspired.  
        <br /><br />
        Thank you for choosing Book Haven. Join us in celebrating the joy of reading and explore a world of stories, knowledge, and adventure. Your next favorite book is just a click away!
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
