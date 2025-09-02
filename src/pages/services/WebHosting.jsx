import React, { useState, useEffect } from "react";
import {
  FaServer,
  FaGlobe,
  FaShieldAlt,
  FaRocket,
  FaSync,
  FaDatabase,
  FaHeadset,
  FaLock,
  FaUpload,
  FaCogs,
  FaCloud,
} from "react-icons/fa";
import {
  SiAwslambda,
  SiGooglecloud,
  SiCpanel,
  SiWordpress,
  SiCloudflare,
} from "react-icons/si";
import { MdSpeed, MdSecurity, MdStorage, MdDns } from "react-icons/md";

const WebHosting = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Services data
  const services = [
    {
      title: "Shared Hosting",
      description:
        "Affordable hosting solutions perfect for small websites and blogs with easy-to-use control panels.",
      icon: <FaServer className="text-3xl text-purple-400" />,
      features: [
        "99.9% Uptime",
        "cPanel Access",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
      ],
    },
    {
      title: "VPS Hosting",
      description:
        "Virtual Private Server hosting with dedicated resources and full root access for more control.",
      icon: <FaCogs className="text-3xl text-purple-400" />,
      features: [
        "Scalable Resources",
        "Full Root Access",
        "SSD Storage",
        "Free Migration",
      ],
    },
    {
      title: "Dedicated Servers",
      description:
        "Powerful dedicated servers with maximum performance, security, and customization options.",
      icon: <FaDatabase className="text-3xl text-purple-400" />,
      features: [
        "Enterprise Hardware",
        "Full Administrator Access",
        "24/7 Monitoring",
        "DDoS Protection",
      ],
    },
    {
      title: "Cloud Hosting",
      description:
        "Scalable cloud hosting solutions that grow with your business needs and traffic demands.",
      icon: <FaCloud className="text-3xl text-purple-400" />,
      features: [
        "Auto Scaling",
        "Pay-as-you-go",
        "Global CDN",
        "High Availability",
      ],
    },
    {
      title: "WordPress Hosting",
      description:
        "Optimized hosting for WordPress with enhanced security, caching, and automatic updates.",
      icon: <SiWordpress className="text-3xl text-purple-400" />,
      features: [
        "WordPress Optimized",
        "Automatic Updates",
        "Staging Environment",
        "Expert Support",
      ],
    },
    {
      title: "Domain Registration",
      description:
        "Secure your online identity with domain registration and management services for all TLDs.",
      icon: <FaGlobe className="text-3xl text-purple-400" />,
      features: [
        ".com, .net, .org",
        "Free WHOIS Privacy",
        "Domain Lock",
        "Easy Management",
      ],
    },
  ];

  // Features data
  const features = [
    {
      title: "99.9% Uptime Guarantee",
      description:
        "Our robust infrastructure ensures your website remains online with a 99.9% uptime guarantee.",
      icon: <FaRocket className="text-2xl text-purple-400" />,
    },
    {
      title: "Free SSL Certificates",
      description:
        "All hosting plans include free SSL certificates to secure your website and boost SEO rankings.",
      icon: <FaLock className="text-2xl text-purple-400" />,
    },
    {
      title: "Daily Backups",
      description:
        "Automatic daily backups ensure your data is always safe and can be restored with a single click.",
      icon: <FaSync className="text-2xl text-purple-400" />,
    },
    {
      title: "24/7 Expert Support",
      description:
        "Our hosting experts are available 24/7 to assist you with any issues or questions you may have.",
      icon: <FaHeadset className="text-2xl text-purple-400" />,
    },
  ];

  // Platforms data
  const platforms = [
    {
      category: "Hosting Platforms",
      techs: [
        {
          name: "cPanel",
          icon: <SiCpanel className="text-4xl text-orange-500" />,
        },
        {
          name: "AWS",
          icon: <SiAwslambda className="text-4xl text-orange-400" />,
        },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud className="text-4xl text-blue-400" />,
        },
        {
          name: "Microsoft Azure",
          icon: <FaCloud className="text-4xl text-blue-600" />,
        },
      ],
    },
    {
      category: "Performance & Security",
      techs: [
        {
          name: "Cloudflare CDN",
          icon: <SiCloudflare className="text-4xl text-orange-500" />,
        },
        {
          name: "LiteSpeed",
          icon: <MdSpeed className="text-4xl text-blue-400" />,
        },
        {
          name: "Imunify360",
          icon: <MdSecurity className="text-4xl text-green-500" />,
        },
        {
          name: "Softaculous",
          icon: <FaUpload className="text-4xl text-purple-400" />,
        },
      ],
    },
  ];

  // Process data
  const processSteps = [
    {
      step: "01",
      title: "Choose Your Plan",
      description:
        "Select the perfect hosting plan or domain package based on your needs and budget.",
      icon: <FaServer className="text-2xl text-purple-400" />,
    },
    {
      step: "02",
      title: "Register Domain",
      description:
        "Search for and register your perfect domain name with free privacy protection included.",
      icon: <FaGlobe className="text-2xl text-purple-400" />,
    },
    {
      step: "03",
      title: "Configure Services",
      description:
        "Customize your hosting environment with one-click installs and preferred applications.",
      icon: <FaCogs className="text-2xl text-purple-400" />,
    },
    {
      step: "04",
      title: "Migrate Content",
      description:
        "Let our experts migrate your existing website for free with zero downtime guaranteed.",
      icon: <FaSync className="text-2xl text-purple-400" />,
    },
    {
      step: "05",
      title: "Go Live",
      description:
        "Launch your website with our optimized hosting environment and monitoring systems.",
      icon: <FaRocket className="text-2xl text-purple-400" />,
    },
    {
      step: "06",
      title: "Ongoing Support",
      description:
        "Receive 24/7 support and regular maintenance to keep your website running smoothly.",
      icon: <FaHeadset className="text-2xl text-purple-400" />,
    },
  ];

  // Pricing data
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2.99",
      period: "month",
      description: "Perfect for small websites and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL",
        "Free Domain",
      ],
      recommended: false,
    },
    {
      name: "Business",
      price: "$5.99",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL",
        "Free Domain",
        "Daily Backups",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$12.99",
      period: "month",
      description: "For high-traffic websites and stores",
      features: [
        "Unlimited Websites",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL",
        "Free Domain",
        "Daily Backups",
        "Free CDN",
        "Priority Support",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <head>
        <title>
          Web Hosting & Domain Registration | FNA Marketing Solutions
        </title>
        <meta
          name="description"
          content="Reliable web hosting and domain registration from FNA Marketing Solutions—secure, scalable, and optimized infrastructure with seamless support and backups."
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
          <div className="relative z-10 container mx-auto px-6 text-center mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 relative inline-block">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 animate-pulse-slow">
                  <FaServer className="text-5xl text-purple-400" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-up">
                <span className="block">Web Hosting</span>
                <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Fast, Secure & Reliable
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Premium hosting solutions with 99.9% uptime, free SSL
                certificates, and expert support to keep your website running
                smoothly.
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
                    <span className="mr-3">Get Started</span>
                    <FaRocket className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                <a
                  href="#plans"
                  className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">View Plans</span>
                  <FaServer className="ml-2 transform group-hover:translate-y-1 transition-transform inline-block" />
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
                Hosting & Domain{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We offer a comprehensive range of hosting solutions and domain
                services to meet your website's needs.
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
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Premium Hosting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Features
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our hosting infrastructure is designed for speed, security, and
                reliability with enterprise-grade hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl backdrop-blur-xl border border-white/10"
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

        {/* Platforms Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Technology
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Premium Hosting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Infrastructure
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We partner with industry leaders to provide cutting-edge hosting
                technology and performance.
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

        {/* Pricing Section */}
        <section id="plans" className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Pricing Plans
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Affordable Hosting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the perfect hosting plan for your website with our
                transparent, competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-b from-purple-900/20 to-blue-900/20 p-8 rounded-2xl backdrop-blur-xl border ${
                    plan.recommended
                      ? "border-purple-500/50"
                      : "border-white/10"
                  } relative`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-xs font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-light text-white mb-2 text-center">
                    {plan.name}
                  </h3>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-center mb-6">
                    {plan.description}
                  </p>
                  <ul className="text-gray-300 space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-medium ${
                      plan.recommended
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        : "bg-white/10 hover:bg-white/20"
                    } transition-all duration-300`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Getting Started Is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Easy
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our streamlined process makes it simple to get your website
                online with our hosting services.
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
                Launch
              </span>{" "}
              Your Website?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Get started with our reliable hosting solutions and domain
              services today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-3">Get Started Now</span>
              <FaRocket />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebHosting;
