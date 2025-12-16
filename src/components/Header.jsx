import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ArrowRight } from "phosphor-react";

const Header = () => {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const services = [
    {
      title: "Website & Web Application Development",
      desc: "Custom business websites, e-commerce stores, and web applications. Dynamic and responsive designs using React, Node.js, MongoDB.",
      href: "/services/website-development",
    },
    {
      title: "Frontend Development",
      desc: "Interactive UI/UX design, responsive layouts, smooth animations, and engaging interfaces.",
      href: "/services/frontend-development",
    },
    {
      title: "Backend Development",
      desc: "Server-side programming, API integrations, user authentication, secure data handling, and scalable architecture.",
      href: "/services/backend-development",
    },
    {
      title: "SEO & Digital Marketing Services",
      desc: "SEO for better Google rankings, social media campaigns, PPC advertising, analytics & reporting.",
      href: "/services/seo-digital-marketing",
    },
    {
      title: "Email Marketing",
      desc: "Automated campaigns, newsletters, promotional emails, segmentation, and analytics.",
      href: "/services/email-marketing",
    },
    {
      title: "Web Hosting & Domain Registration",
      desc: "Reliable hosting solutions, domain management, secure and fast hosting with regular backups.",
      href: "/services/web-hosting",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              FNA
            </span>
            <span className="text-sm tracking-widest text-purple-200 font-light hidden sm:block">
              MARKETING SOLUTIONS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-white font-light transition-colors duration-300"
            >
              Home
            </a>
<a
              href="/about-us"
              className="text-gray-300 hover:text-white font-light transition-colors duration-300"
            >
              About
            </a>
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                className="flex items-center text-gray-300 hover:text-white font-light transition-colors duration-300"
                aria-expanded={desktopServicesOpen}
              >
                Our Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {desktopServicesOpen && (
                <div className="absolute left-0 mt-3 w-80 max-h-[500px] bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-y-auto transition-all duration-300">
                  <div className="p-5 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-t-2xl">
                    <h3 className="text-white font-medium text-lg mb-1">
                      Our Services
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Innovative solutions for a digital-first world
                    </p>
                  </div>
                  <div className="p-3 space-y-2">
                    {services.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.href}
                        className="flex items-start p-3 hover:bg-purple-600/10 rounded-xl transition-all duration-300 group"
                      >
                        <div className="flex-1">
                          <span className="block text-white font-light">
                            {service.title}
                          </span>
                          <span className="block text-gray-400 text-sm mt-1">
                            {service.desc}
                          </span>
                        </div>
                        <ArrowRight className="text-purple-400 w-5 h-5 mt-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/portfolio"
              className="text-gray-300 hover:text-white font-light transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="/pricing"
              className="text-gray-300 hover:text-white font-light transition-colors duration-300"
            >
              Pricing
            </a>
            
            <a
              href="/contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {!mobileOpen ? (
              <FiMenu className="w-6 h-6" aria-hidden="true" />
            ) : (
              <FiX className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl rounded-b-xl py-4 mt-2 space-y-2 transition-all duration-300">
            <a
              href="/"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Home
            </a>
                <a
              href="/about-us"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              About
            </a>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-white flex justify-between items-center"
              aria-expanded={mobileServicesOpen}
            >
              Our Services
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-6 space-y-2">
                {services.map((service, idx) => (
                  <a
                    key={idx}
                    href={service.href}
                    className="block text-gray-300 hover:text-white text-sm"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
            <a
              href="/portfolio"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Portfolio
            </a>
                <a
              href="/pricing"
              className="block px-4 py-2 text-gray-300 hover:text-white"
            >
              Pricing
            </a>
        
            <a
              href="/contact"
              className="block px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-center font-medium shadow-md hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
