"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Discover Amazing Books",
    description: "Explore thousands of books from different categories.",
    image: "https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg",
  },
  {
    id: 2,
    title: "Build Your Library",
    description: "Save and manage your personal book collection.",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Read Anywhere",
    description: "Access your favorite books anytime, anywhere.",
    image: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen max-h-100 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={slide.image}
        alt="Book background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-200">
            {slide.description}
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition">
            Explore Books
          </button>
        </div>
      </div>
    </section>
  );
}
