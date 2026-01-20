"use client";

import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How can I order a book?",
      answer:
        "You can browse books from the All Books page, select your desired book, and click on the 'Add to Cart' or 'Buy Now' button.",
    },
    {
      question: "Do you offer cash on delivery?",
      answer:
        "Yes, we offer cash on delivery for selected locations. Availability will be shown during checkout.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 2–5 working days depending on your location.",
    },
    {
      question: "Can I return or exchange a book?",
      answer:
        "Yes, you can return or exchange a book within 7 days if it is damaged or incorrect.",
    },
    {
      question: "Do you sell original books?",
      answer:
        "Absolutely! All books available in our shop are 100% original and sourced from trusted publishers.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact us via the Contact page or email us at support@bookshop.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{faq.question}</h2>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
