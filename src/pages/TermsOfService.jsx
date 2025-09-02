import React from "react";

const TermsOfService = () => {
  return (
    <>
      <head>
        <title>Terms of Service | FNA Marketing Solutions</title>
        <meta
          name="description"
          content="Review the Terms of Service for FNA Marketing Solutions—your rights, responsibilities, and our commitment to transparent and fair usage of our services."
        />
      </head>

      <section className="py-24 md:py-30 bg-gray-900 min-h-screen relative">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              These Terms of Service (“Terms”) govern your use of the FNA
              Marketing Solutions website and services. By accessing or using
              our services, you agree to comply with these Terms.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-10">
            {/* Acceptance */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By using our website or services, you agree to these Terms. If
                you do not agree, please do not use our services.
              </p>
            </div>

            {/* Use of Services */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                2. Use of Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-2">
                You agree to use our services only for lawful purposes. You may
                not:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Engage in fraudulent or harmful activity</li>
                <li>Interfere with the website’s functionality or security</li>
              </ul>
            </div>

            {/* Account Responsibility */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                3. Account Responsibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you create an account with us, you are responsible for
                maintaining the confidentiality of your account credentials and
                all activities under your account.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All content, design, logos, and intellectual property on this
                website are owned by FNA Marketing Solutions or its licensors.
                You may not reproduce or distribute any materials without
                permission.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                FNA Marketing Solutions is not liable for any indirect,
                incidental, or consequential damages arising from the use of our
                services. Use at your own risk.
              </p>
            </div>

            {/* Termination */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                6. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate access to our
                services at any time for violations of these Terms or for other
                reasons deemed necessary.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. Updated Terms will
                be posted on this page. Your continued use of services indicates
                acceptance of the revised Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="card-glass p-8 rounded-3xl border border-gray-700 shadow-lg bg-zinc-900/60 backdrop-blur-md">
              <h2 className="text-2xl font-medium text-white mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For questions regarding these Terms of Service, please contact
                us:
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
    </>
  );
};

export default TermsOfService;
