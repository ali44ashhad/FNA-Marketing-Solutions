// File: src/pages/Services.jsx
import React from "react";
import {
  Globe,
  Code,
  Stack,
  MagnifyingGlass,
  Envelope,
  Cloud,
  ArrowRight,
} from "phosphor-react";

const services = [
  {
    title: "Website & Web Application Development",
    description: `Custom business websites, e-commerce stores, and web applications.
Dynamic and responsive designs that work seamlessly on all devices.
Modern web technologies like React, Node.js, MongoDB for robust solutions.`,
    icon: Globe,
    link: "/services/website-development",
  },
  {
    title: "Frontend Development",
    description: `Interactive and user-friendly UI/UX design.
Responsive layouts for mobile, tablet, and desktop.
Smooth animations, transitions, and engaging interfaces.`,
    icon: Code,
    link: "/services/frontend-development",
  },
  {
    title: "Backend Development",
    description: `Server-side programming and database management.
User authentication, API integrations, and secure data handling.
Scalable architecture for growing businesses.`,
    icon: Stack,
    link: "/services/backend-development",
  },
  {
    title: "SEO & Digital Marketing Services",
    description: `Search Engine Optimization (SEO) for better Google rankings.
Social media campaigns on Instagram, Facebook, LinkedIn.
Pay-per-click (PPC) advertising for targeted traffic.
Analytics & reporting to measure ROI and engagement.`,
    icon: MagnifyingGlass,
    link: "/services/seo-digital-marketing",
  },
  {
    title: "Email Marketing",
    description: `Automated email campaigns for customer engagement.
Newsletters, promotional offers, and transactional emails.
Segmentation and analytics to optimize marketing efforts.`,
    icon: Envelope,
    link: "/services/email-marketing",
  },
  {
    title: "Web Hosting & Domain Registration",
    description: `Reliable hosting solutions for websites and web apps.
Domain registration and management.
Secure, fast, and scalable hosting with regular backups.`,
    icon: Cloud,
    link: "/services/web-hosting",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-500 text-sm font-light tracking-widest uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mt-3">
            FNA Marketing Solutions
          </h2>
          <div className="mx-auto mt-6 border-t-2 w-24 border-blue-500"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-gray-700 p-8 h-full shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 group-hover:border-blue-400 transition-all duration-500">
                      <Icon
                        size={32}
                        className="text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-6 whitespace-pre-line">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-500 font-medium hover:underline transition-all duration-300"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transform transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
