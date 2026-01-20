"use client";

import { useState } from "react";

export default function CTAPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    // simulate API call
    setTimeout(() => {
      setStatus("success");
      setFeedback("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Get in Touch With Us 📞
          </h1>
          <p className="text-gray-600 mb-6">
            Have questions about books, orders, or delivery?  
            Send us a message and our team will get back to you shortly.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>📧 Email: support@bookshop.com</li>
            <li>📍 Location: Dhaka, Bangladesh</li>
            <li>⏰ Support Hours: 9 AM – 8 PM</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-3 rounded-lg text-white font-medium transition
                ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback */}
            {feedback && (
              <p
                className={`text-sm mt-2 ${
                  status === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
