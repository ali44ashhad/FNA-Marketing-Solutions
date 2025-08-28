import React from "react";
import { ArrowRight } from "phosphor-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
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
          that empowers businesses, drives innovation, and creates meaningful
          experiences across the digital universe.
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
            <div className="text-gray-400 text-sm tracking-wide">PROJECTS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">99%</div>
            <div className="text-gray-400 text-sm tracking-wide">
              SATISFACTION
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10</div>
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
  );
};

export default Hero;
