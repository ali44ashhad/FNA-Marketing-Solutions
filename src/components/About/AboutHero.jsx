import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "phosphor-react";

const AboutHero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/de3x5ekgh/video/upload/so_0/bajcxxxiot3ccjluqvnh.jpg"
        >
          <source
            src="https://res.cloudinary.com/de3x5ekgh/video/upload/bajcxxxiot3ccjluqvnh.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/de3x5ekgh/video/upload/bajcxxxiot3ccjluqvnh.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/de3x5ekgh/video/upload/sp_hd/bajcxxxiot3ccjluqvnh.m3u8"
            type="application/x-mpegURL"
          />
        </video>

        {/* Mobile fallback image */}
        <div className="absolute inset-0 w-full h-full lg:hidden">
          <img
            src="https://res.cloudinary.com/de3x5ekgh/video/upload/e_blur:1000,so_0/bajcxxxiot3ccjluqvnh.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-blue-900/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-600/20 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600/20 via-transparent to-purple-600/20 animate-gradient-shift-reverse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20 lg:pt-0">
        <div className="max-w-7xl mx-auto">
          {/* Animated Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 mb-8 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-400"></div>
            </div>
            <span className="text-sm font-light tracking-wider text-white/80 uppercase">
              Innovating Since Day One
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight text-white mb-8 leading-[0.9] tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 font-light">
              FNA Marketing Solutions
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-extralight text-white/70 max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where innovative marketing strategies meet cutting-edge technology
            to help businesses grow, engage, and succeed in the digital
            landscape.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "2015", label: "Founded" },
              { value: "500+", label: "Campaigns" },
              { value: "50+", label: "Team" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#our-story"
              className="group relative inline-flex items-center px-12 py-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full transition-all duration-500 group-hover:bg-white/20"></div>
              <div className="absolute inset-0 border border-white/20 rounded-full transition-all duration-500 group-hover:border-white/40"></div>
              <span className="relative text-white font-light tracking-wide flex items-center">
                Discover Our Story
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform inline-block" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
