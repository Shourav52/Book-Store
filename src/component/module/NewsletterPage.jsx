"use client";

import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error
  const [message, setMessage] = useState("");

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    // simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("🎉 You're subscribed! Welcome to our reader community.");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-3">
          Join Our Newsletter 📚
        </h1>

        <p className="text-gray-600 mb-8">
          Weekly book recommendations, exclusive deals, and reading tips —
          straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className={`border px-4 py-3 rounded-lg w-full sm:w-2/3 
              focus:outline-none focus:ring-2 transition
              ${
                status === "error"
                  ? "border-red-500 focus:ring-red-400"
                  : "focus:ring-blue-500"
              }`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
          />

          <button
            type="submit"
            disabled={status === "loading" || !email}
            className={`px-6 py-3 rounded-lg text-white font-medium transition
              ${
                status === "loading"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p
            className={`mt-6 font-medium ${
              status === "success"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Extra trust text */}
        <p className="mt-6 text-sm text-gray-500">
          🔒 No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
