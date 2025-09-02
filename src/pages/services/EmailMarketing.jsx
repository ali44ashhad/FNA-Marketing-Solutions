import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaChartLine,
  FaUsers,
  FaCog,
  FaRocket,
  FaMoneyBillWave,
  FaSync,
  FaFilter,
  FaBell,
} from "react-icons/fa";
import { SiMailchimp, SiHubspot, SiCampaignmonitor } from "react-icons/si";
import {
  MdAnalytics,
  MdAutorenew,
  MdDesignServices,
  MdTrendingUp,
} from "react-icons/md";

const EmailMarketing = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Services data
  const services = [
    {
      title: "Automated Campaigns",
      description:
        "Set up automated email sequences that trigger based on user behavior, saving time while delivering personalized content.",
      icon: <MdAutorenew className="text-3xl text-purple-400" />,
    },
    {
      title: "Newsletter Design",
      description:
        "Beautifully designed newsletters that engage your audience and keep them informed about your latest updates and offerings.",
      icon: <FaEnvelope className="text-3xl text-purple-400" />,
    },
    {
      title: "Promotional Emails",
      description:
        "Compelling promotional campaigns that drive sales, conversions, and customer engagement with your brand.",
      icon: <FaMoneyBillWave className="text-3xl text-purple-400" />,
    },
    {
      title: "Audience Segmentation",
      description:
        "Divide your email list into targeted segments based on demographics, behavior, and preferences for higher engagement.",
      icon: <FaFilter className="text-3xl text-purple-400" />,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Comprehensive tracking and analysis of email performance with actionable insights for optimization.",
      icon: <MdAnalytics className="text-3xl text-purple-400" />,
    },
    {
      title: "A/B Testing",
      description:
        "Test different subject lines, content, and designs to determine what resonates best with your audience.",
      icon: <FaSync className="text-3xl text-purple-400" />,
    },
  ];

  // Platforms data
  const platforms = [
    {
      category: "Email Marketing Platforms",
      techs: [
        {
          name: "Mailchimp",
          icon: <SiMailchimp className="text-4xl text-yellow-400" />,
        },
        {
          name: "Sendinblue",
          icon: <SiMailchimp className="text-4xl text-blue-500" />,
        },
        {
          name: "HubSpot",
          icon: <SiHubspot className="text-4xl text-orange-500" />,
        },
        {
          name: "ConvertKit",
          icon: <SiCampaignmonitor className="text-4xl text-blue-400" />,
        },
      ],
    },
    {
      category: "Automation Features",
      techs: [
        {
          name: "Welcome Series",
          icon: <FaBell className="text-4xl text-purple-400" />,
        },
        {
          name: "Behavioral Triggers",
          icon: <FaCog className="text-4xl text-green-400" />,
        },
        {
          name: "Drip Campaigns",
          icon: <MdAutorenew className="text-4xl text-blue-400" />,
        },
        {
          name: "Re-engagement",
          icon: <FaUsers className="text-4xl text-red-400" />,
        },
      ],
    },
  ];

  // Process data
  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description:
        "We analyze your business goals and audience to create a comprehensive email marketing strategy.",
      icon: <MdTrendingUp className="text-2xl text-purple-400" />,
    },
    {
      step: "02",
      title: "List Building & Segmentation",
      description:
        "We help grow your email list and segment it for targeted, personalized communication.",
      icon: <FaFilter className="text-2xl text-purple-400" />,
    },
    {
      step: "03",
      title: "Template Design",
      description:
        "Creation of responsive, brand-consistent email templates that work across all devices and clients.",
      icon: <MdDesignServices className="text-2xl text-purple-400" />,
    },
    {
      step: "04",
      title: "Automation Setup",
      description:
        "Implementation of automated email sequences based on user actions and behaviors.",
      icon: <MdAutorenew className="text-2xl text-purple-400" />,
    },
    {
      step: "05",
      title: "Campaign Execution",
      description:
        "Strategic deployment of campaigns with optimal timing and frequency for maximum impact.",
      icon: <FaEnvelope className="text-2xl text-purple-400" />,
    },
    {
      step: "06",
      title: "Analysis & Optimization",
      description:
        "Continuous monitoring of performance metrics with data-driven optimizations for better results.",
      icon: <MdAnalytics className="text-2xl text-purple-400" />,
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: "High ROI",
      description:
        "Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the most effective marketing channels.",
      icon: <FaMoneyBillWave className="text-2xl text-purple-400" />,
    },
    {
      title: "Direct Communication",
      description:
        "Reach your audience directly in their inbox, with personalized messages that drive engagement and conversions.",
      icon: <FaEnvelope className="text-2xl text-purple-400" />,
    },
    {
      title: "Automation Efficiency",
      description:
        "Save time and resources with automated campaigns that nurture leads and customers without constant manual effort.",
      icon: <FaCog className="text-2xl text-purple-400" />,
    },
    {
      title: "Measurable Results",
      description:
        "Track opens, clicks, conversions, and more to understand what works and continuously improve your strategy.",
      icon: <FaChartLine className="text-2xl text-purple-400" />,
    },
  ];

  return (
    <>
      <head>
        <title>Email Marketing Services | FNA Marketing Solutions</title>
        <meta
          name="description"
          content="Engage and convert with targeted email marketing campaigns by FNA Marketing Solutions—newsletters, promos, and automation designed to optimize customer engagement."
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
                  <FaEnvelope className="text-5xl text-purple-400" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-up">
                <span className="block">Email Marketing</span>
                <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Connect & Convert
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                We create targeted email campaigns that nurture relationships,
                drive engagement, and generate measurable ROI for your business.
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
                    <span className="mr-3">Launch Your Campaign</span>
                    <FaRocket className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="#technologies"
                  className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Our Strategies</span>
                  <FaChartLine className="ml-2 transform group-hover:translate-y-1 transition-transform inline-block" />
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
                Email Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We develop comprehensive email marketing strategies that build
                relationships, drive engagement, and increase conversions.
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
                Tools &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We leverage industry-leading email marketing platforms and
                automation tools to create effective campaigns that deliver
                results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
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

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Why Email Marketing
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Key{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Email marketing remains one of the most effective digital
                marketing channels with impressive ROI and engagement rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
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
                Strategic Email{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Marketing Approach
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our structured email marketing process ensures targeted
                messaging, optimal timing, and measurable results for your
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
                Elevate
              </span>{" "}
              Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's create targeted email campaigns that nurture relationships,
              drive engagement, and generate measurable ROI for your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-3">Launch Your Campaign</span>
              <FaRocket />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default EmailMarketing;
