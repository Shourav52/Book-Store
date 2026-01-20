"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-library-backend-pi.vercel.app/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map(book => (
          <div key={book._id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-52 relative">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-blue-600 font-bold mt-2">৳ {book.price}</p>
              <Link
                href={`/allbooks/${book._id}`}
                className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
