import React from "react";
import { Trophy, Star, Medal, Crown } from "phosphor-react";

const AwardsRecognition = () => {
  const awards = [
    {
      title: "Best Digital Agency",
      subtitle: "Tech Awards 2024",
      icon: <Trophy className="text-4xl text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      delay: "",
    },
    {
      title: "Top Rated",
      subtitle: "Clutch 2023-2024",
      icon: <Star className="text-4xl text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      delay: "animation-delay-200",
    },
    {
      title: "Innovation Leader",
      subtitle: "Digital Summit 2024",
      icon: <Medal className="text-4xl text-green-400" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      delay: "animation-delay-400",
    },
    {
      title: "Excellence in UX",
      subtitle: "Design Awards 2023",
      icon: <Crown className="text-4xl text-orange-400" />,
      gradient: "from-orange-500/20 to-amber-500/20",
      delay: "animation-delay-600",
    },
  ];

  return (
    <section className="py-24 relative bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Awards &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Recognition
              </span>
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className={`text-center animate-fade-in-up ${award.delay}`}
              >
                <div
                  className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${award.gradient} rounded-full flex items-center justify-center`}
                >
                  {award.icon}
                </div>
                <h3 className="text-lg font-light text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-sm">{award.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
