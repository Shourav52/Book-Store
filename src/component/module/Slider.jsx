"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Discover Amazing Books",
    description: "Explore thousands of books from different categories.",
    image: "/books/book1.jpg",
  },
  {
    id: 2,
    title: "Build Your Library",
    description: "Save and manage your personal book collection.",
    image: "/books/book2.jpg",
  },
  {
    id: 3,
    title: "Read Anywhere",
    description: "Access your favorite books anytime, anywhere.",
    image: "/books/book3.jpg",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="w-full min-h-[400px] flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
      
      {/* TEXT */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          {slide.title}
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          {slide.description}
        </p>
      </div>

      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={slide.image}
          alt="Book"
          width={300}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
