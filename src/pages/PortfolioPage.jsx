
import { Helmet } from "react-helmet-async";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "phosphor-react";
import Contact from "../components/Home/Contact";
import fundzz from '../assets/portfolios/fundzz.png'
import wmv from "../assets/portfolios/worldMarketView.png";
import qbs from "../assets/portfolios/qbsacounting.png";
import KloudShark from '../assets/portfolios/kloudshark.png'
import fundRaiser from '../assets/portfolios/fundraiser.png'
import voraGlobal from '../assets/portfolios/voraglobal.png'
import mrsAdvisory from '../assets/portfolios/mrsadvisory.png'
import eduberator from '../assets/portfolios/eduberator.png'
import travelTenSandy from '../assets/portfolios/travel-to-asia.png'
import trangaPods from '../assets/portfolios/trangapods.png'



export const portfolioItems = [
  {
    name: "Fundzz",
    url: "https://fundzz.com/",
    image: fundzz,
  },
  {
    name: "World Market View",
    url: "https://worldmarketview.in/",
    image: wmv,
  },
  {
    name: "QBS Accounting",
    url: "https://qbsaccounting.us/",
    image: qbs,
  },
  {
    name: "Kloud Shark",
    url: "https://www.kloudshark.com/",
    image: KloudShark,
  },
  {
    name: "Fund Raiser",
    url: "https://fund-raiser-jw2v.vercel.app/",
    image: fundRaiser,
  },
  {
    name: "Vora Global",
    url: "https://www.voraglobal.ae/",
    image: voraGlobal,
  },
  {
    name: "MRS Advisory",
    url: "https://www.mrsadvisory.co/",
    image: mrsAdvisory,
  },
  {
    name: "German Consultancy",
    url: "https://german-consultancy-demo.vercel.app/",
    image: eduberator,
  },
  {
    name: "Travel Ten Sandy",
    url: "https://travel-ten-sandy.vercel.app/",
    image: travelTenSandy,
  },
  {
    name: "Tranga Pods",
    url: "https://www.trangapods.com/",
    image: trangaPods,
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
    <>
      <Helmet>
        <title>
          FNA Marketing Solutions – Portfolio of Our Digital Marketing Success
        </title>
        <meta
          name="description"
          content="Explore FNA Marketing Solutions’ portfolio showcasing impactful digital marketing, branding, and web development projects that drive growth and elevate brands."
        />
      </Helmet>
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
              innovation. We specialize in creating websites, SaaS platforms,
              and e-commerce solutions that deliver measurable results.
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
                href="/contact"
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
         <div className="grid  grid-cols-[repeat(auto-fit,minmax(0px,1fr)) w-auto h-auto sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {portfolioItems.map((item, idx) => (
    <motion.a
      key={idx}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
    >
      {/* === Card Wrapper (equal fixed ratio) === */}
      <div className="relative w-auto h-auto rounded-xl overflow-hidden bg-gray-900 border border-white/10 hover:border-white/20 transition-all duration-500 flex items-center justify-center">
        
        {/* === Image fills evenly === */}
        <img
          src={item.image}
          alt={item.name}
          className="w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* === Glow on hover === */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/8 group-hover:to-pink-500/10 transition-colors duration-500" />
      </div>
    </motion.a>
  ))}
</div>

          </div>
        </section>

        <Contact />
      </div>
    </>
  );
};

export default PortfolioPage;
