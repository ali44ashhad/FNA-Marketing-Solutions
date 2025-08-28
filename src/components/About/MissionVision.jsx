import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Compass } from "phosphor-react";

const MissionVision = () => {
  return (
    <section className="py-32 relative bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/50 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Compass className="text-blue-500 w-5 h-5" />
              <span className="text-sm font-light tracking-wider text-white/80 uppercase">
                Our Purpose
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              Mission &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-light">
                Vision
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-purple-500/30 transition-all duration-500 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="text-purple-400 w-10 h-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower businesses with innovative digital marketing
                  strategies that drive growth, enhance visibility, and deliver
                  measurable results. FNAMarketingSolutions bridges creativity
                  with data-driven solutions to help brands thrive online.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-blue-500/30 transition-all duration-500 h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="text-blue-400 w-10 h-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6">
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To be a globally recognized marketing solutions provider,
                  renowned for innovation, excellence, and delivering
                  transformative results. We envision a world where every brand
                  can reach its audience effectively and achieve sustainable
                  growth through digital mastery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
