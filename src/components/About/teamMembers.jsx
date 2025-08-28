import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jatin Jain",
    role: "Founder & CEO",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQF_b4WibeB9ug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732191220350?e=2147483647&v=beta&t=3WSPFEWJwpX_CFvnTt5npbbM0tRfHmA5dE88mClPhV4",
    linkedin: "https://www.linkedin.com/in/jatin-jain-62853b213/",
  },
  {
    name: "Madhav Bansal",
    role: "Chief Financial Officer",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQHY1lg7xw8Odg/profile-displayphoto-shrink_200_200/B4EZV0rFr8H0AY-/0/1741419208462?e=1759363200&v=beta&t=Rx_3MabucK87sqsKfxswzra8kIVUTPIHsVI1YCPZRLQ",
    linkedin: "https://www.linkedin.com/in/madhav-bansal-4a9114241/",
  },
  {
    name: "Ashhad Ali",
    role: "Senior Software Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFo-kQah0_xOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679675457132?e=1759363200&v=beta&t=d7IakgqOm8Fn35meGLI3HTbp3YOpYzRKQHJhCM9KgWw",
    linkedin: "https://www.linkedin.com/in/ashhad-ali-b37914234/",
  },
  {
    name: "Ritesh Pandey",
    role: "Senior Digital Marketer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE8XY3P20ijOg/profile-displayphoto-shrink_200_200/B56ZUhmdM4GUAY-/0/1740025486366?e=1759363200&v=beta&t=sR3J8v_EzzEYRr5xuVHlwnJYadJXKu7dKVhF2GZw8s8",
    linkedin: "https://www.linkedin.com/in/ritesh-pandey-15266a275/",
  },
];

const OurTeam = () => {
  return (
    <section className="py-32 relative bg-gray-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/50 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <span className="text-sm font-light tracking-wider text-white/80 uppercase">
              Our Experts
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-light">
              Team
            </span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-blue-500 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-4">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
