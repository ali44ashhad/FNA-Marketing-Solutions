import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-24 md:py-30 bg-gray-900 min-h-screen relative">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            FNA Marketing Solutions is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your
            information.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-10">
          {/* Information Collection */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-2 leading-relaxed">
              We collect personal and non-personal information when you interact
              with our website, including:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Payment and billing information</li>
              <li>IP address, browser type, and usage data</li>
              <li>Cookies and tracking information</li>
            </ul>
          </div>

          {/* Use of Information */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              Your information helps us provide better services, improve our
              website, and communicate with you effectively. We may use it to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Provide and personalize our services</li>
              <li>Process transactions and payments</li>
              <li>Send updates, promotions, and important notices</li>
              <li>Monitor and analyze usage for improvement</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              3. Sharing of Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell your personal information. We may share information
              with trusted third parties for business purposes, such as:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Service providers helping with website operations</li>
              <li>Payment processors and financial institutions</li>
              <li>Legal or regulatory compliance if required</li>
            </ul>
          </div>

          {/* Security */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              4. Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement technical, administrative, and physical safeguards to
              protect your data. While we strive to protect your information, no
              system is completely secure.
            </p>
          </div>

          {/* Cookies */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              5. Cookies and Tracking
            </h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              We use cookies and similar technologies to enhance your
              experience, remember preferences, and analyze trends.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You can manage cookies via your browser settings.
            </p>
          </div>

          {/* Updates */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised date. Please review it
              periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
            <h2 className="text-2xl font-medium text-white mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Email: support@fnamarketingsolutions.com</li>
              <li>Phone: +91 98880 31436</li>
              <li>Address: 123 Marketing Lane, Mumbai, India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
