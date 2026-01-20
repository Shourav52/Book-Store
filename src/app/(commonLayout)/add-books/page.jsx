"use client";

import { useState } from "react";

export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    rating: "",
    publishedYear: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (res.ok) {
        alert("✅ Book added successfully");
        setBook({
          title: "",
          author: "",
          category: "",
          price: "",
          rating: "",
          publishedYear: "",
          stock: "",
          image: "",
          description: "",
        });
      } else {
        alert("❌ Failed to add book");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Network error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="input"
        />
        <input
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="input"
        />
        <input
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          className="input"
        />
        <input
          name="image"
          placeholder="Image URL"
          value={book.image}
          onChange={handleChange}
          className="input"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={book.price}
            onChange={handleChange}
            className="input"
          />
          <input
            name="rating"
            placeholder="Rating"
            type="number"
            step="0.1"
            value={book.rating}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="publishedYear"
            placeholder="Published Year"
            value={book.publishedYear}
            onChange={handleChange}
            className="input"
          />
          <input
            name="stock"
            placeholder="Stock"
            type="number"
            value={book.stock}
            onChange={handleChange}
            className="input"
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={book.description}
          onChange={handleChange}
          className="input"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Add Book
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
