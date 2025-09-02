import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "phosphor-react";
import Contact from "../components/Home/Contact";
import fundzz from "../assets/fundzz.jpg";
import wmv from "../assets/wmv.jpg";
import qbs from "../assets/qbs.jpg";
import aroma from "../assets/aroma.jpg";
import glory from "../assets/glory.jpg";

const portfolioItems = [
  {
    name: "Fundzz",
    url: "https://fundzz.com/",
    image: fundzz,
    tags: ["Finance", "Mutual Funds", "Investment"],
    description:
      "Fundzz is a comprehensive mutual fund platform offering insights, charts, and investment tracking tools for retail investors.",
  },
  {
    name: "World Market View",
    url: "https://worldmarketview.in/",
    image: wmv,
    tags: ["Market Analysis", "Stocks", "Finance"],
    description:
      "World Market View provides real-time market analysis, stock trends, and global financial insights for professional traders.",
  },
  {
    name: "QBS Accounting",
    url: "https://qbsaccounting.us/",
    image: qbs,
    tags: ["Accounting", "SaaS", "Finance"],
    description:
      "QBS Accounting is a cloud-based accounting software that simplifies bookkeeping, invoicing, and financial reporting for businesses.",
  },
  {
    name: "Goldaroma Rice",
    url: "https://goldaromarice.com/",
    image: aroma,
    tags: ["E-commerce", "Food", "Retail"],
    description:
      "Goldaroma Rice is an e-commerce platform dedicated to premium rice products with an easy-to-navigate shopping experience.",
  },
  {
    name: "Glory Printers",
    url: "https://www.gloryprinters.com/",
    image: glory, // keep your imported image variable
    tags: [
      "Printing Solutions",
      "Custom Packaging",
      "Label Printing",
      "Commercial Printing",
      "+3 More",
    ],
    description:
      "Glory Printers delivers high-quality printing solutions, specializing in custom packaging, labels, and commercial printing services tailored for businesses of all sizes.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

// Star component for blinking stars
const Star = ({ size, x, y, delay }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{
      width: size,
      height: size,
      top: `${y}%`,
      left: `${x}%`,
      opacity: 0.8,
      zIndex: 0, // below content
    }}
    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
    transition={{
      repeat: Infinity,
      duration: 2 + Math.random() * 2,
      delay,
      ease: "easeInOut",
    }}
  />
);

const PortfolioPage = () => {
  // Generate random stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    size: `${Math.random() * 4 + 2}px`, // 2px to 6px
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative">
      {/* Stars in All Success Stories section */}
      {stars.map((star, idx) => (
        <Star key={idx} {...star} />
      ))}

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center relative py-32"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light mb-6 tracking-tight"
            variants={fadeUp}
            custom={0.1}
          >
            FNA Marketing Solutions <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-xl font-light text-gray-300 mb-8"
            variants={fadeUp}
            custom={0.2}
          >
            Crafting extraordinary digital experiences that drive growth and
            innovation. We specialize in creating websites, SaaS platforms, and
            e-commerce solutions that deliver measurable results.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeUp}
            custom={0.3}
          >
            <span className="bg-purple-700/40 px-4 py-2 rounded-full text-sm font-medium">
              Web Design
            </span>
            <span className="bg-pink-700/40 px-4 py-2 rounded-full text-sm font-medium">
              SaaS Platforms
            </span>
            <span className="bg-yellow-700/40 px-4 py-2 rounded-full text-sm font-medium">
              E-commerce
            </span>
            <span className="bg-green-700/40 px-4 py-2 rounded-full text-sm font-medium">
              Healthcare Tech
            </span>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            variants={fadeUp}
            custom={0.4}
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              Start Your Journey <ArrowRight />
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-gray-800/50 rounded-full shadow-lg font-medium flex items-center gap-2 hover:bg-gray-800/70 transition-colors duration-300"
            >
              Explore Services <Compass />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="py-32 relative bg-gray-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/50 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Compass className="text-blue-500" size={20} />
              <span className="text-sm font-light tracking-wider text-white/80 uppercase">
                Complete Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              All Success{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-light">
                Stories
              </span>
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative animate-fade-in-up rounded-3xl overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Animated Border Gradient */}
                  <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ padding: "1px" }}
                  >
                    <div className="absolute inset-[1px] bg-gray-900 rounded-3xl"></div>
                  </div>

                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-light text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                        {item.name}
                      </h3>
                      <p className="text-white/60 font-light text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">
                          {item.tags[0]}
                        </span>
                        <ArrowRight
                          className="text-white/40 group-hover:text-purple-400 transition-colors duration-300"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default PortfolioPage;
