// File: src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden bg-gray-900"
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-purple-900/30"></div>

        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 md:p-16 shadow-xl text-center"
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8">
              Ready to Scale Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-300 mb-12">
              Let's create something extraordinary together. Your digital
              transformation starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
              >
                Start Your Project
              </a>
              <a
                href="tel:+1 (307) 443-4600"
                className="px-8 py-4 rounded-2xl border border-gray-400/30 text-gray-200 font-light hover:border-gray-300 transition-all"
              >
                📞 Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
