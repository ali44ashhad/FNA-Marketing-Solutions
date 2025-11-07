// import React from "react";
// import AboutHero from "../components/About/AboutHero";
// import OurStory from "../components/About/OurStory";
// import MissionVision from "../components/About/MissionVision";
// import CoreValues from "../components/About/CoreValues";
// import OurCulture from "../components/About/OurCulture";
// import AwardsRecognition from "../components/About/AwardsRecognition";
// import CTASection from "../components/About/CTASection";
// import OurTeam from "../components/About/teamMembers";

// function AboutPage() {
//   return (
//     <div>
//       <AboutHero />
//       <OurStory />
//       <MissionVision />
//       <CoreValues />
//       <OurTeam />
//       <OurCulture />
//       <AwardsRecognition />
//       <CTASection />
//     </div>
//   );
// }

// export default AboutPage;

import React from "react";
import kalpana from "../assets/kalpana.jpeg";
import gurshan from "../assets/gurshan.jpeg";
import shivang from "../assets/shivang.jpeg";
import ashhadAli from '../assets/ashhadali.PNG'
import madhavBansal from '../assets/madhav-bansal.PNG'
import ritesh from '../assets/ritesh.PNG'
import keshav from '../assets/keshav.PNG'
import vandna from '../assets/vandna.PNG'
import dishant from '../assets/dishant.PNG'
import jatinJain from '../assets/jatinjain.PNG'
import linkedIn from '../assets/linkedin.png'
import portfolio from '../assets/portfolio.png'


import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Compass,
  Trophy,
  Star,
  Medal,
  Crown,
  Lightbulb,
  ShieldCheck,
  UsersThree,
  Sparkle,
  Heart,
  BookOpen,
  RocketLaunch,
  Globe,
  Coffee,
  GraduationCap,
  Scales,
} from "phosphor-react";
import { Helmet } from "@dr.pogodin/react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us – FNA Marketing Solutions | Innovating Digital Excellence
        </title>
        <meta
          name="description"
          content="Meet the creative minds behind FNA Marketing Solutions—our mission: crafting innovative digital marketing, branding, and web development strategies to elevate brands and drive growth."
        />
      </Helmet>

      <div className="bg-black">
        {/* About Hero Section */}
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
                Where innovative marketing strategies meet cutting-edge
                technology to help businesses grow, engage, and succeed in the
                digital landscape.
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

        {/* Our Story Section */}
        <section
          id="our-story"
          className="py-32 relative bg-black overflow-hidden"
        >
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
                      FNA Marketing Solutions was created with a mission to
                      empower businesses through strategic digital marketing.
                      Since our inception, we've helped brands connect, grow,
                      and thrive in the digital world.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      From a small team of passionate marketers and designers,
                      we've grown into a full-service agency delivering
                      innovative campaigns that drive measurable results.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Today, we serve clients globally, transforming ideas into
                      impactful digital experiences. Our story is one of
                      creativity, strategy, and relentless pursuit of
                      excellence.
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
                    {[
                      {
                        icon: (
                          <RocketLaunch size={32} className="text-purple-400" />
                        ),
                        year: "2015",
                        text: "Founded FNA Marketing",
                      },
                      {
                        icon: (
                          <UsersThree size={32} className="text-blue-400" />
                        ),
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
                    ].map((m, i) => (
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

        {/* Mission & Vision Section */}
        <section className="py-32 relative bg-gray-900 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/50 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.05),transparent_50%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
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

              {/* Mission & Vision Cards */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Mission Card */}
                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <h3 className="text-3xl font-light text-white mb-6">
                    Our Mission
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    To empower businesses of all sizes with innovative digital
                    marketing solutions that drive growth, engagement, and
                    measurable results.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We combine cutting-edge technology with creative strategies
                    to help our clients succeed in the ever-evolving digital
                    landscape.
                  </p>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl"></div>
                  <h3 className="text-3xl font-light text-white mb-6">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    To be the leading digital marketing agency that transforms
                    how businesses connect with their audiences in the digital
                    age.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We envision a future where every business, regardless of
                    size, can leverage the power of digital marketing to achieve
                    their goals and make a lasting impact.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-32 relative bg-black overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
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
                {[
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
                    icon: <Sparkle className="text-3xl text-pink-400" />,
                    gradient: "from-pink-500/20 to-rose-500/20",
                  },
                  {
                    title: "Impact",
                    desc: "Creating meaningful change through technology that transforms businesses and improves lives.",
                    icon: <Sparkle className="text-3xl text-pink-400" />,
                    gradient: "from-pink-500/20 to-rose-500/20",
                  },
                ].map((value, idx) => (
                  <div key={idx} className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 h-full">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-light text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section
          className="py-32 relative bg-gray-900 overflow-hidden"
          aria-labelledby="team-heading"
        >
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
              <h2
                id="team-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-tight"
              >
                Meet the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-light">
                  Team
                </span>
              </h2>
            </motion.div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jatin Jain",
                  role: "Founder & CEO",
                  image: jatinJain,
                  portfolio: "https://jatin-portfolio-plum.vercel.app/",
                  linkedin: "https://www.linkedin.com/in/jatin-jain-62853b213/",
                 
                },
                {
                  name: "Madhav Bansal",
                  role: "Chief Financial Officer",
                  image:
                    madhavBansal,
                  linkedin:
                    "https://www.linkedin.com/in/madhav-bansal-4a9114241/",
                },
                {
                  name: "Ashhad Ali",
                  role: "Senior Software Developer",
                  image:
                    ashhadAli,
                    portfolio: "https://ashhad.pages.dev",
                  linkedin: "https://www.linkedin.com/in/ashhad-ali-b37914234/",
                },
                {
                  name: "Ritesh Pandey",
                  role: "Senior Digital Marketing Manager",
                  image:
                    ritesh,
                  linkedin:
                    "https://www.linkedin.com/in/ritesh-pandey-15266a275/",
                },
                {
                  name: "Kalpana ",
                  role: "Senior Analyst",
                  image: kalpana,
                  linkedin:
                    "https://www.linkedin.com/in/kalpana-tariyal-5b8996249",
                },
                {
                  name: "Gurshan",
                  role: "Junior Analyst",
                  image: gurshan,
                  linkedin: "#",
                },
                {
                  name: "Shivang ",
                  role: "Junior Analyst",
                  image: shivang,
                  linkedin:
                    "https://www.linkedin.com/in/shivang-saini-782630230 ",
                },

                {
                  name: "Dishant Sharma ",
                  role: "MERN Stack Developer",
                  image: dishant,
                  linkedin:
                    "https://www.linkedin.com/in/dishantsharma7 ",
                },
                {
                  name: "Vandana Shakya ",
                  role: "Frontend Developer",
                  image: vandna,
                  linkedin:
                    "https://www.linkedin.com/in/vandna-shakya-358187312",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  role="region"
                  aria-labelledby={`member-${idx}-name`}
                  aria-describedby={`member-${idx}-role`}
                >
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-blue-500 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3
                    id={`member-${idx}-name`}
                    className="text-xl font-semibold text-white mb-1"
                  >
                    {member.name}
                  </h3>
                  <p id={`member-${idx}-role`} className="text-gray-400 mb-4">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                     {member.portfolio && (
      <a 
        href={member.portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-5 cursor-pointer transition-transform duration-300 hover:scale-150"
        title="Portfolio"
      >
        <img src={portfolio} alt="Portfolio" className="h-6 w-6" />
      </a>
    )}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${member.name}'s LinkedIn profile`}
                      className="cursor-pointer transition-transform duration-300 hover:scale-150"
                    >
                      <img src={linkedIn} className="h-5 w-5" />
                      
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-32 relative bg-black overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
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
                {[
                  {
                    title: "Collaborative Environment",
                    desc: "Open spaces, creative zones, and collaborative areas designed to foster innovation and teamwork.",
                    icon: <Coffee className="text-4xl text-yellow-400 mb-6" />,
                  },
                  {
                    title: "Continuous Learning",
                    desc: "Regular workshops, conferences, and training programs to keep our team at the cutting edge.",
                    icon: (
                      <GraduationCap className="text-4xl text-green-400 mb-6" />
                    ),
                  },
                  {
                    title: "Work-Life Balance",
                    desc: "Flexible schedules, remote options, and wellness programs for a healthy, productive team.",
                    icon: <Scales className="text-4xl text-blue-400 mb-6" />,
                  },
                ].map((culture, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
                  >
                    {culture.icon}
                    <h3 className="text-2xl font-light text-white mb-4">
                      {culture.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {culture.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-24 relative bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                  Awards &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Recognition
                  </span>
                </h2>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
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
                ].map((award, idx) => (
                  <div key={idx} className="text-center">
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

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-950"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="container relative mx-auto px-6 text-center z-10">
            <div className="max-w-4xl mx-auto">
              <span className="text-gray-300 text-sm font-light tracking-widest uppercase opacity-80">
                Let's Create Something Extraordinary
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white mt-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Elevate
                </span>{" "}
                Your Digital Presence?
              </h2>
              <p className="text-xl font-light text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed">
                Transform your vision into reality with our expertise. Let's
                craft digital experiences that set new standards and drive
                unprecedented growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/50 text-white font-medium rounded-full shadow-lg hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <span>Explore Services</span>
                  <Compass className="ml-2 w-5 h-5" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto">
                {[
                  { label: "Satisfaction", value: "100%" },
                  { label: "Support", value: "24/7" },
                  { label: "Possibilities", value: "∞" },
                ].map((item, idx) => (
                  <div key={idx} className="">
                    <div className="text-3xl font-light text-white mb-2">
                      {item.value}
                    </div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
