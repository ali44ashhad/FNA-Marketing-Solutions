import React from "react";
import { motion } from "framer-motion";
import { Quotes } from "phosphor-react";

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

function Testimonials() {
  return (
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
                “{t.feedback}”
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white text-lg font-light">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
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
  );
}

export default Testimonials;
