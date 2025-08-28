import React from "react";
import {
  Lightbulb,
  Trophy,
  ShieldCheck,
  UsersThree,
  Sparkle,
  Heart,
} from "phosphor-react";
import { TrendingUp } from "lucide-react";
const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      desc: "Constantly pushing boundaries and embracing new technologies to deliver cutting-edge solutions that set our clients apart.",
      icon: <Lightbulb className="text-3xl text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Excellence",
      desc: "Setting the highest standards for ourselves and consistently delivering exceptional quality in every project.",
      icon: <Trophy className="text-3xl text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Integrity",
      desc: "Building trust through transparency, honesty, and ethical practices in every interaction and decision.",
      icon: <ShieldCheck className="text-3xl text-green-400" />,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Collaboration",
      desc: "Fostering teamwork and open communication to create an environment where great ideas flourish.",
      icon: <UsersThree className="text-3xl text-orange-400" />,
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      title: "Growth",
      desc: "Committed to continuous learning and development, both for our team and our clients' businesses.",
      icon: <TrendingUp className="text-3xl text-indigo-400" />,
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Impact",
      desc: "Creating meaningful change through technology that transforms businesses and improves lives.",
      icon: <Sparkle className="text-3xl text-pink-400" />,
      gradient: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <Heart className="text-red-500" />
              <span className="text-sm font-light tracking-wider text-white/80 uppercase">
                What Drives Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-light">
                Values
              </span>
            </h2>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`group relative animate-fade-in-up animation-delay-${
                  idx * 200
                }`}
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
