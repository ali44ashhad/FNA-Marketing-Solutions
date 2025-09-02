import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaChartLine,
  FaHashtag,
  FaAd,
  FaBullseye,
  FaUsers,
  FaMobile,
  FaGlobe,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";
import {
  SiGoogleads,
  SiFacebook,
  SiInstagram,
  SiX,
  SiLinkedin,
  SiGoogleanalytics,
  SiGooglesearchconsole,
} from "react-icons/si";
import {
  MdAnalytics,
  MdTrendingUp,
  MdSpeed,
  MdDesignServices,
} from "react-icons/md";

const SEODigitalMarketing = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Services data
  const services = [
    {
      title: "Search Engine Optimization",
      description:
        "Comprehensive SEO strategies to improve your website's visibility and ranking on search engines like Google.",
      icon: <FaSearch className="text-3xl text-purple-400" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns to build brand awareness, engage audiences, and drive conversions.",
      icon: <FaHashtag className="text-3xl text-purple-400" />,
    },
    {
      title: "PPC Advertising",
      description:
        "Targeted pay-per-click campaigns on Google, Facebook, and other platforms to generate immediate traffic.",
      icon: <FaAd className="text-3xl text-purple-400" />,
    },
    {
      title: "Content Marketing",
      description:
        "Creating valuable, relevant content to attract and retain your target audience and drive profitable customer action.",
      icon: <FaFileAlt className="text-3xl text-purple-400" />,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Comprehensive tracking, analysis, and reporting to measure campaign performance and ROI.",
      icon: <MdAnalytics className="text-3xl text-purple-400" />,
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Improving website elements to increase the percentage of visitors who complete desired actions.",
      icon: <FaBullseye className="text-3xl text-purple-400" />,
    },
  ];

  // Platforms data
  const platforms = [
    {
      category: "Search Platforms",
      techs: [
        {
          name: "Google SEO",
          icon: <SiGoogleads className="text-4xl text-blue-500" />,
        },
        {
          name: "Google Ads",
          icon: <SiGoogleads className="text-4xl text-green-500" />,
        },
        {
          name: "Bing Ads",
          icon: <FaSearch className="text-4xl text-blue-400" />,
        },
        {
          name: "Google Analytics",
          icon: <SiGoogleanalytics className="text-4xl text-orange-400" />,
        },
      ],
    },
    {
      category: "Social Media",
      techs: [
        {
          name: "Facebook",
          icon: <SiFacebook className="text-4xl text-blue-600" />,
        },
        {
          name: "Instagram",
          icon: <SiInstagram className="text-4xl text-pink-500" />,
        },
        {
          name: "Twitter",
          icon: <SiX className="text-4xl text-blue-400" />,
        },
        {
          name: "LinkedIn",
          icon: <SiLinkedin className="text-4xl text-blue-700" />,
        },
      ],
    },
    {
      category: "Analytics Tools",
      techs: [
        {
          name: "Google Analytics",
          icon: <SiGoogleanalytics className="text-4xl text-orange-400" />,
        },
        {
          name: "Search Console",
          icon: <SiGooglesearchconsole className="text-4xl text-blue-400" />,
        },
        {
          name: "Hotjar",
          icon: <MdAnalytics className="text-4xl text-purple-500" />,
        },
        {
          name: "SEMrush",
          icon: <FaChartLine className="text-4xl text-red-400" />,
        },
      ],
    },
  ];

  // Process data
  const processSteps = [
    {
      step: "01",
      title: "Strategy & Planning",
      description:
        "We analyze your business goals, target audience, and competition to create a comprehensive digital marketing strategy.",
      icon: <FaBullseye className="text-2xl text-purple-400" />,
    },
    {
      step: "02",
      title: "Keyword Research",
      description:
        "In-depth keyword research to identify the most valuable search terms for your business.",
      icon: <FaSearch className="text-2xl text-purple-400" />,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execution of SEO techniques, content creation, and campaign setup across chosen platforms.",
      icon: <FaAd className="text-2xl text-purple-400" />,
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description:
        "Continuous monitoring of campaign performance with regular optimizations for better results.",
      icon: <MdTrendingUp className="text-2xl text-purple-400" />,
    },
    {
      step: "05",
      title: "Reporting & Analysis",
      description:
        "Detailed reporting with insights and recommendations for ongoing improvement.",
      icon: <MdAnalytics className="text-2xl text-purple-400" />,
    },
    {
      step: "06",
      title: "Scaling Success",
      description:
        "Expanding successful strategies and exploring new opportunities for growth.",
      icon: <FaChartLine className="text-2xl text-purple-400" />,
    },
  ];

  // SEO features
  const seoFeatures = [
    {
      title: "Technical SEO",
      description:
        "Website structure optimization, speed improvements, and technical fixes for better crawling and indexing.",
      icon: <MdSpeed className="text-2xl text-purple-400" />,
    },
    {
      title: "On-Page Optimization",
      description:
        "Content optimization, meta tags, heading structure, and internal linking for better relevance and rankings.",
      icon: <FaFileAlt className="text-2xl text-purple-400" />,
    },
    {
      title: "Off-Page SEO",
      description:
        "Link building, influencer outreach, and brand mentions to build authority and improve domain ranking.",
      icon: <FaGlobe className="text-2xl text-purple-400" />,
    },
    {
      title: "Local SEO",
      description:
        "Optimization for local search results, Google My Business, and local directory listings.",
      icon: <FaMobile className="text-2xl text-purple-400" />,
    },
  ];

  return (
    <>
      <head>
        <title>
          SEO & Digital Marketing Services | FNA Marketing Solutions
        </title>
        <meta
          name="description"
          content="Boost your online visibility with FNA Marketing Solutions’ SEO, PPC, social media, and analytics services—optimized strategies that drive traffic and conversions."
        />
      </head>

      <main className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
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
            {/* Mobile fallback */}
            <div className="absolute inset-0 w-full h-full lg:hidden">
              <img
                src="https://res.cloudinary.com/de3x5ekgh/video/upload/e_blur:1000,so_0/bajcxxxiot3ccjluqvnh.jpg"
                alt="Background"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center ">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 relative inline-block">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 animate-pulse-slow">
                  <FaChartLine className="text-5xl text-purple-400" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-up">
                <span className="block">Digital Marketing</span>
                <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Amplify Your Online Presence
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                We develop data-driven digital marketing strategies that
                increase visibility, drive traffic, and generate qualified leads
                for your business.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="/contact"
                  className="luxury-cta group relative inline-flex items-center px-10 py-5 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 animate-pulse-slow transition duration-500"></div>
                  <span className="relative flex items-center text-white font-light tracking-wide z-10">
                    <span className="mr-3">Boost Your Visibility</span>
                    <FaChartLine className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="#technologies"
                  className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Our Strategies</span>
                  <FaSearch className="ml-2 transform group-hover:translate-y-1 transition-transform inline-block" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                SEO & Digital Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We offer comprehensive digital marketing services designed to
                increase your online visibility, engage your audience, and drive
                conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section
          id="technologies"
          className="py-24 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Platforms
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Marketing Channels &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Tools
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We leverage industry-leading platforms and tools to execute
                data-driven marketing strategies that deliver measurable
                results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {platforms.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-xl border border-white/10"
                >
                  <h3 className="text-2xl font-light text-white mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-xl"
                      >
                        <div className="mb-3">{tech.icon}</div>
                        <span className="text-white text-sm text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Features Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                SEO Services
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Search Optimization
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our holistic approach to SEO ensures your website ranks higher,
                attracts more traffic, and converts visitors into customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Data-Driven Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Approach
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our structured marketing process ensures transparency,
                measurable results, and continuous optimization for your
                campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 relative"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Dominate
              </span>{" "}
              Search Results?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's develop a results-driven digital marketing strategy that
              increases your visibility, engages your audience, and grows your
              business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-3">Start Your Marketing Campaign</span>
              <FaChartLine />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default SEODigitalMarketing;
