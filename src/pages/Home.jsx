import React from "react";
import Contact from "../components/Home/Contact";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Quotes,
  Globe,
  Code,
  Stack,
  MagnifyingGlass,
  Envelope,
  Cloud,
} from "phosphor-react";

import fundzz from "../assets/fundzz.jpg";
import qbs from "../assets/qbs.jpg";
import wmv from "../assets/wmv.jpg";
const Home = () => {
  return (
    <>
      <head></head>
      <head>
        <title>
          FNA Marketing Solutions – Innovative Digital Marketing & Branding
        </title>
        <meta
          name="description"
          content="FNA Marketing Solutions delivers innovative digital marketing, branding, and advertising services to drive business growth and elevate your brand."
        />
      </head>

      <div className="bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
          {/* Background Shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"
          />

          {/* Main Content */}
          <div className="relative z-20 text-center max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-5 py-2 mb-6 rounded-full border border-pink-400/30 backdrop-blur-sm"
            >
              <span className="text-xs sm:text-sm text-pink-300 tracking-wide">
                INNOVATING THE FUTURE OF TECH
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
            >
              BUILD <span className="text-pink-600">SMART</span> SOLUTIONS
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              We craft{" "}
              <span className="text-white font-medium">
                cutting-edge technology
              </span>{" "}
              that empowers businesses, drives innovation, and creates
              meaningful experiences across the digital universe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2, delayChildren: 0.8 },
                },
              }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold tracking-wide shadow-lg shadow-pink-500/40"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-8 py-4 rounded-full border border-pink-500/40 text-white font-semibold tracking-wide hover:bg-pink-500/10 transition-colors"
              >
                Our Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  200+
                </div>
                <div className="text-gray-400 text-sm tracking-wide">
                  PROJECTS
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  99%
                </div>
                <div className="text-gray-400 text-sm tracking-wide">
                  SATISFACTION
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  10
                </div>
                <div className="text-gray-400 text-sm tracking-wide">YEARS</div>
              </div>
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], y: [0, -20, 0] }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-pink-500/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Extra Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/10 via-purple-600/10 to-transparent pointer-events-none"></div>
        </section>

        {/* Services Section */}
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
              {servicesData.map((service, idx) => {
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
                        <span className="mr-2">
                          Learn More about {service.title}{" "}
                        </span>
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

        {/* About Section */}
        <section
          id="about"
          className="py-16 md:py-24 relative overflow-hidden bg-gray-900"
        >
          {/* Gradient Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black opacity-50"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="text-blue-400 text-sm font-light tracking-widest uppercase">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4 mb-6">
                  Pioneers of Digital Excellence
                </h2>
                <p className="text-lg font-light text-gray-300 mb-10 leading-relaxed">
                  At{" "}
                  <span className="text-blue-400 font-medium">
                    FNA Marketing solutions
                  </span>
                  , we don't just build digital solutions – we architect digital
                  empires. Our team of visionaries combines cutting-edge
                  technology with artistic precision to create experiences that
                  captivate, convert, and conquer.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-5xl font-light bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      150+
                    </h3>
                    <p className="text-gray-400 font-light">
                      Projects Delivered
                    </p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-light bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      98%
                    </h3>
                    <p className="text-gray-400 font-light">
                      Client Satisfaction
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/about-us"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>

              {/* Visual / Right Column */}
              <div className="relative">
                <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-gray-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-blue-500/30 to-transparent rounded-2xl animate-pulse"></div>
                      <div className="h-48 bg-gradient-to-br from-purple-500/30 to-transparent rounded-2xl animate-pulse delay-100"></div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="h-48 bg-gradient-to-br from-pink-500/30 to-transparent rounded-2xl animate-pulse delay-200"></div>
                      <div className="h-32 bg-gradient-to-br from-green-500/30 to-transparent rounded-2xl animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="py-20 relative overflow-hidden bg-gray-900"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black opacity-60"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-light tracking-widest uppercase">
                Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4">
                Masterpieces We've Crafted
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              viewport={{ once: true }}
            >
              {portfolioItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden bg-zinc-900/60 backdrop-blur-md border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Image */}
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                      <ArrowUpRight className="text-white w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Floating Glow Orbs */}
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 right-10 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 md:py-24 relative overflow-hidden bg-gray-900"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black opacity-50"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-light tracking-widest uppercase">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4">
                Client Success Stories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              viewport={{ once: true }}
            >
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 flex flex-col"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Quote Icon */}
                  <div className="text-blue-400 mb-6">
                    <Quotes size={36} weight="light" className="opacity-70" />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-300 font-light italic mb-8 flex-grow">
                    "{t.feedback}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-md">
                      <span className="text-white text-lg font-light">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Glow Elements */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </section>
        <Contact />
      </div>
    </>
  );
};

// Data arrays
const servicesData = [
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

const portfolioItems = [
  {
    title: "Fundzz",
    description:
      "Simplifying Mutual Funds and Personal Finance for Smarter Investments",
    image: fundzz,
    link: "https://fundzz.com/",
  },
  {
    title: "World Market View",
    description:
      "Delivering Trusted News, Market Insights, and Global Financial Updates",
    image: wmv,
    link: "https://worldmarketview.in/",
  },
  {
    title: "QBS-Accounting",
    description:
      "Providing Reliable Accounting, Tax, and Bookkeeping Solutions for Businesses",
    image: qbs,
    link: "https://qbsaccounting.us/",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    position: "Finance Director",
    company: "BrightFuture Investments, New York",
    feedback:
      "Working with this team has been a game-changer. Their professionalism, timely delivery, and deep knowledge of financial solutions helped us streamline our operations.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "CEO",
    company: "Harbor Tech Solutions, London",
    feedback:
      "They built our platform exactly the way we envisioned. The attention to detail and customer-first approach really stood out. Highly recommended!",
  },
  {
    id: 3,
    name: "James Thompson",
    position: "Entrepreneur",
    company: "Thompson Ventures, California",
    feedback:
      "The experience was smooth, transparent, and efficient. Their guidance saved us a lot of time and helped scale our business faster.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Marketing Manager",
    company: "Skyline Media Group, Toronto",
    feedback:
      "Absolutely reliable team! They delivered high-quality results within our budget and supported us throughout the process.",
  },
  {
    id: 5,
    name: "David Brown",
    position: "Business Consultant",
    company: "Global Advisors LLC, Chicago",
    feedback:
      "Professional, dedicated, and results-driven. Their expertise in financial technology is impressive and trustworthy.",
  },
];

export default Home;
