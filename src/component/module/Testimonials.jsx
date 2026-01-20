"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      feedback: "Amazing collection of books! I found everything I wanted.",
      image: "https://img.freepik.com/free-photo/delivery-man-with-box-studio-against-blue-background_93675-134711.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "David Smith",
      feedback: "Fast delivery and great service. Highly recommend BookShop!",
      image: "https://media.istockphoto.com/id/889684434/photo/indigenous-girl-from-tupi-guarani-tribe-in-manaus-brazil.jpg?s=612x612&w=0&k=20&c=AUEkBzOnfdInx663ZcB1LWrLoziNSdT5fhUgZ8y-plo=",
    },
    {
      id: 3,
      name: "Maria Garcia",
      feedback: "I love the variety of genres. The website is very easy to navigate.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPav9O84jMt8OSrWQK2l_wT89m43yIHl0dQ&s",
    },
    {
      id: 4,
      name: "John Doe",
      feedback: "Excellent customer support and quality books.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fcZpRVHhvjBWKzy-nF-maJILbFwsvGF8GQ&s",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">What Our Readers Say</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <p className="text-gray-700 mb-2">&quot;{t.feedback}&quot;</p>
            <h3 className="font-semibold">{t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
