"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/books/${id}`)
      .then(res => res.ok ? res.json() : null)
      .then(data => setBook(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
   
    toast.success(`${book.title} added to cart!`);
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!book) return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold">Book Not Found</h2>
      <Link href="/allbooks" className="text-blue-500 underline mt-4 block">Back to Books</Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
            <h1 className="text-2xl font-bold mt-2">Title: {book.title}</h1>
          <p className="text-sm text-blue-600">Category: {book.category}</p>
          
          <p className="text-gray-500">Author: {book.author}</p>

          <p className="text-2xl font-bold text-blue-600 mt-6">
            ৳ {book.price}
          </p>

          <p className="mt-4 text-gray-700">{book.description}</p>

          <div className="flex gap-4 mt-8">
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
              Add to Cart
            </button>

            <Link
              href="/allbooks"
              className="border px-6 py-2 rounded-lg cursor-pointer"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
