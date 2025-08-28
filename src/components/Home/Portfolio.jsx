import React from "react";
import { ArrowUpRight } from "phosphor-react";
import { motion } from "framer-motion";
import fundzz from "../../assets/fundzz.png";
import wmv from "../../assets/wmv.png";
import qbs from "../../assets/qbs.png";

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

const Portfolio = () => {
  return (
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
            Masterpieces We’ve Crafted
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
                <h3 className="text-xl font-light text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
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
  );
};

export default Portfolio;
