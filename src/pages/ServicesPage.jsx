import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Stack,
  MagnifyingGlass,
  Envelope,
  Cloud,
  ArrowRight,
  CheckCircle,
  Rocket,
  Users,
  Palette,
  Cpu,
  ChartLine,
} from "phosphor-react";

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Website & Web Application Development",
      category: "development",
      icon: <Globe className="text-4xl text-purple-400" />,
      description:
        "Custom business websites, e-commerce stores, and web applications with dynamic and responsive designs.",
      features: [
        "Custom Web Development",
        "E-Commerce Solutions",
        "Responsive Design",
        "CMS Integration",
      ],
      price: "Starting at $1,499",
    },
    {
      id: 2,
      title: "Frontend Development",
      category: "development",
      icon: <Code className="text-4xl text-blue-400" />,
      description:
        "Interactive and user-friendly UI/UX design with smooth animations and engaging interfaces.",
      features: [
        "React/Next.js Development",
        "UI/UX Design",
        "Responsive Layouts",
        "Performance Optimization",
      ],
      price: "Starting at $999",
    },
    {
      id: 3,
      title: "Backend Development",
      category: "development",
      icon: <Stack className="text-4xl text-green-400" />,
      description:
        "Server-side programming, database management, and secure API development.",
      features: [
        "API Development",
        "Database Design",
        "Server Management",
        "Cloud Integration",
      ],
      price: "Starting at $1,299",
    },
    {
      id: 4,
      title: "SEO & Digital Marketing",
      category: "marketing",
      icon: <MagnifyingGlass className="text-4xl text-yellow-400" />,
      description:
        "Comprehensive SEO strategies and digital marketing campaigns to boost your online presence.",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "PPC Management",
        "Analytics & Reporting",
      ],
      price: "Starting at $499/month",
    },
    {
      id: 5,
      title: "Email Marketing",
      category: "marketing",
      icon: <Envelope className="text-4xl text-red-400" />,
      description:
        "Automated email campaigns, newsletters, and promotional emails with advanced segmentation.",
      features: [
        "Email Automation",
        "Newsletter Design",
        "Audience Segmentation",
        "Performance Analytics",
      ],
      price: "Starting at $299/month",
    },
    {
      id: 6,
      title: "Web Hosting & Domain Registration",
      category: "hosting",
      icon: <Cloud className="text-4xl text-indigo-400" />,
      description:
        "Reliable hosting solutions and domain management services with 99.9% uptime guarantee.",
      features: [
        "Shared Hosting",
        "VPS Hosting",
        "Domain Registration",
        "SSL Certificates",
      ],
      price: "Starting at $9.99/month",
    },
  ];

  const categories = [
    { id: "all", name: "All Services", icon: <Rocket className="w-5 h-5" /> },
    {
      id: "development",
      name: "Development",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: <ChartLine className="w-5 h-5" />,
    },
    { id: "hosting", name: "Hosting", icon: <Cpu className="w-5 h-5" /> },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
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
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 relative inline-block">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-purple-500/30 animate-pulse-slow">
                <Rocket className="text-5xl text-purple-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
              <span className="block">Our Services</span>
              <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Excellence in Digital Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12">
              Comprehensive digital solutions to grow your business, enhance
              your online presence, and drive measurable results with
              cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="luxury-cta group relative inline-flex items-center px-10 py-5 overflow-hidden rounded-full transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_100%] animate-gradient-x"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 animate-pulse-slow transition duration-500"></div>
                <span className="relative flex items-center text-white font-light tracking-wide z-10">
                  <span className="mr-3">Start Your Project</span>
                  <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#services"
                className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative">Explore Services</span>
                <ArrowRight className="ml-2 transform group-hover:translate-y-1 transition-transform inline-block" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section
        id="services"
        className="py-16 bg-gradient-to-b from-black to-purple-900/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
              Our Offerings
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
              Comprehensive Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Solutions
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="service-card group bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle
                          className="text-green-500 mr-2"
                          size={18}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <span className="text-xl font-semibold text-white">
                    {service.price}
                  </span>
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors flex items-center">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
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
              How We Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project's success
              from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={32} className="text-purple-400" />,
                title: "Consultation",
                desc: "We discuss your goals and requirements",
              },
              {
                icon: <Palette size={32} className="text-blue-400" />,
                title: "Design",
                desc: "We create mockups and prototypes",
              },
              {
                icon: <Code size={32} className="text-green-400" />,
                title: "Development",
                desc: "We build your solution with precision",
              },
              {
                icon: <Rocket size={32} className="text-pink-400" />,
                title: "Launch",
                desc: "We deploy and monitor your project",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
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
              Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Let's discuss your project and create a custom solution that drives
            results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-3">Start Your Project Today</span>
            <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
