import React from "react";
import { ArrowRight, Compass } from "phosphor-react";

const CTASection = () => {
  const trustIndicators = [
    { label: "Satisfaction", value: "100%" },
    { label: "Support", value: "24/7" },
    { label: "Possibilities", value: "∞" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-950"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <span className="text-gray-300 text-sm font-light tracking-widest uppercase opacity-80">
            Let's Create Something Extraordinary
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white mt-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Elevate
            </span>{" "}
            Your Digital Presence?
          </h2>
          <p className="text-xl font-light text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with our expertise. Let's craft
            digital experiences that set new standards and drive unprecedented
            growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/50 text-white font-medium rounded-full shadow-lg hover:bg-gray-800/70 transition-colors duration-300"
            >
              <span>Explore Services</span>
              <Compass className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto">
            {trustIndicators.map((item, idx) => (
              <div key={idx} className="animate-fade-in-up">
                <div className="text-3xl font-light text-white mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
