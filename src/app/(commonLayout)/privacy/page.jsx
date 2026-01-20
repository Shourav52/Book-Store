"use client";

export default function Privacy() {
  const cards = [
    {
      title: "Data Security",
      description:
        "We use industry-standard security measures to protect your personal information. All sensitive data, including payment details, is encrypted and securely stored. Our team continuously monitors security protocols to prevent unauthorized access."
    },
    {
      title: "Cookies & Tracking",
      description:
        "We use cookies and similar technologies to enhance your browsing experience, analyze site usage, and deliver personalized recommendations. You can manage your cookie preferences at any time through your browser settings."
    },
    {
      title: "User Rights",
      description:
        "You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications and control how your data is used on our platform."
    },
    {
      title: "Third-Party Services",
      description:
        "We may share certain information with trusted third-party partners to improve our services, handle payments, or deliver orders. All third-party partners are obligated to comply with strict privacy standards."
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        {/* Main Paragraph */}
        <p className="text-gray-700 text-lg leading-8 mb-10">
          At Book Haven, protecting your privacy is one of our highest priorities. We understand that when you shop online, you trust us with your personal information. This Privacy Policy explains how we collect, use, and protect your data when you browse our website, make purchases, or subscribe to our services.  
          <br /><br />
          We collect information such as your name, email address, phone number, and payment details when you create an account or place an order. Additionally, non-personal information such as device type, IP address, and browsing behavior is gathered to improve our platform and provide a personalized experience.  
          <br /><br />
          Your information is never sold to third parties. It is used solely for purposes of processing orders, improving services, sending updates, and enhancing your overall experience. We implement advanced security measures to ensure that your personal data is encrypted and stored safely.  
          <br /><br />
          Cookies and similar tracking technologies help us understand user preferences and site usage. This allows us to provide tailored recommendations and improve our services. You may adjust your browser settings to manage cookies, but some features may not work properly without them.  
          <br /><br />
          By using our platform, you acknowledge and agree to our policies regarding information collection and usage. You retain the right to review, update, or delete your personal information at any time. You can also opt out of promotional communications with a simple unsubscribe process.  
          <br /><br />
          Thank you for trusting Book Haven with your reading journey. We are committed to providing a secure, transparent, and enjoyable experience for all our readers.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
