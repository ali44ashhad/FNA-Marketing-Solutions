import React from "react";
import { Star, Coffee, GraduationCap, Scales } from "phosphor-react";

const OurCulture = () => {
  const cultures = [
    {
      title: "Collaborative Environment",
      desc: "Open spaces, creative zones, and collaborative areas designed to foster innovation and teamwork.",
      icon: <Coffee className="text-4xl text-yellow-400 mb-6" />,
    },
    {
      title: "Continuous Learning",
      desc: "Regular workshops, conferences, and training programs to keep our team at the cutting edge.",
      icon: <GraduationCap className="text-4xl text-green-400 mb-6" />,
    },
    {
      title: "Work-Life Balance",
      desc: "Flexible schedules, remote options, and wellness programs for a healthy, productive team.",
      icon: <Scales className="text-4xl text-blue-400 mb-6" />,
    },
  ];

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Star className="text-yellow-500" />
              <span className="text-sm font-light tracking-wider text-white/80 uppercase">
                Our Culture
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              Where Innovation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 font-light">
                Thrives
              </span>
            </h2>
          </div>

          {/* Culture Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {cultures.map((culture, idx) => (
              <div
                key={idx}
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 animate-fade-in-up ${
                  idx === 1
                    ? "animation-delay-200"
                    : idx === 2
                    ? "animation-delay-400"
                    : ""
                }`}
              >
                {culture.icon}
                <h3 className="text-2xl font-light text-white mb-4">
                  {culture.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{culture.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
