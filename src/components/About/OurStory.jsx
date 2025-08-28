import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  RocketLaunch,
  UsersThree,
  Trophy,
  Globe,
} from "phosphor-react";

const OurStory = () => {
  const milestones = [
    {
      icon: <RocketLaunch size={32} className="text-purple-400" />,
      year: "2015",
      text: "Founded FNA Marketing",
    },
    {
      icon: <UsersThree size={32} className="text-blue-400" />,
      year: "2017",
      text: "Team of 15+",
    },
    {
      icon: <Trophy size={32} className="text-indigo-400" />,
      year: "2020",
      text: "200+ Campaigns",
    },
    {
      icon: <Globe size={32} className="text-green-400" />,
      year: "2023",
      text: "Global Clients",
    },
  ];

  return (
    <section id="our-story" className="py-32 relative bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <BookOpen size={24} className="text-purple-500" />
              <span className="text-sm font-light tracking-wider text-white/80 uppercase">
                Our Journey
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              The Story of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-light">
                FNA Marketing Solutions
              </span>
            </h2>
          </motion.div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-light text-white mb-6">
                  Founded on Vision
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  FNA Marketing Solutions was created with a mission to empower
                  businesses through strategic digital marketing. Since our
                  inception, we’ve helped brands connect, grow, and thrive in
                  the digital world.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  From a small team of passionate marketers and designers, we’ve
                  grown into a full-service agency delivering innovative
                  campaigns that drive measurable results.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Today, we serve clients globally, transforming ideas into
                  impactful digital experiences. Our story is one of creativity,
                  strategy, and relentless pursuit of excellence.
                </p>
              </div>
            </motion.div>

            {/* Milestones Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center"
                  >
                    <div className="mb-4">{m.icon}</div>
                    <h4 className="text-lg font-light text-white mb-2">
                      {m.year}
                    </h4>
                    <p className="text-sm text-gray-400">{m.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
