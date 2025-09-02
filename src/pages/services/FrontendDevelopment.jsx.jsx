import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { MdSpeed, MdDesignServices, MdSecurity } from "react-icons/md";
import { RiCustomerService2Line, RiTeamLine } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";

const FrontendDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Add Phosphor icons script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@phosphor-icons/web";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // Service data
  const services = [
    {
      title: "Responsive Web Development",
      description:
        "We create websites that adapt seamlessly to all devices using flexible grids, breakpoints, and responsive images.",
      icon: <DiResponsive size={32} className="text-purple-400" />,
    },
    {
      title: "Single Page Applications",
      description:
        "Fast, dynamic SPAs that provide app-like experiences without page reloads using React, Angular, or Vue.",
      icon: <FaReact size={32} className="text-purple-400" />,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Secure, high-performance online stores with seamless database integration and transaction processing.",
      icon: <RiCustomerService2Line size={32} className="text-purple-400" />,
    },
    {
      title: "Progressive Web Apps",
      description:
        "Web applications that function as mobile apps with offline capabilities and native device features.",
      icon: <MdDesignServices size={32} className="text-purple-400" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered designs that combine aesthetics with functionality for optimal user experiences.",
      icon: <HiLightBulb size={32} className="text-purple-400" />,
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize loading times and enhance overall website performance for better user experience and SEO.",
      icon: <MdSpeed size={32} className="text-purple-400" />,
    },
  ];

  // Technologies data
  const technologies = [
    {
      name: "React",
      description: "Component-based UI library",
      icon: <FaReact size={40} className="text-blue-400" />,
    },
    {
      name: "Vue.js",
      description: "Progressive JavaScript framework",
      icon: <FaVuejs size={40} className="text-green-500" />,
    },
    {
      name: "Angular",
      description: "Platform for building web applications",
      icon: <FaAngular size={40} className="text-red-500" />,
    },
    {
      name: "JavaScript",
      description: "Programming language for web interactivity",
      icon: <SiJavascript size={40} className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript",
      icon: <SiTypescript size={40} className="text-blue-500" />,
    },
    {
      name: "HTML5",
      description: "Markup language for web structure",
      icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
      name: "CSS3",
      description: "Styling language for web presentation",
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
    },
    {
      name: "SASS",
      description: "CSS preprocessor for efficient styling",
      icon: <FaSass size={40} className="text-pink-500" />,
    },
    {
      name: "Bootstrap",
      description: "Frontend framework for responsive design",
      icon: <FaBootstrap size={40} className="text-purple-600" />,
    },
    {
      name: "jQuery",
      description: "JavaScript library for DOM manipulation",
      icon: <SiJquery size={40} className="text-blue-500" />,
    },
    {
      name: "Next.js",
      description: "React framework for production",
      icon: <SiNextdotjs size={40} className="text-white" />,
    },
    {
      name: "Redux",
      description: "State management library for React",
      icon: <SiRedux size={40} className="text-purple-500" />,
    },
  ];

  // Framework benefits
  const frameworkBenefits = [
    {
      framework: "React",
      icon: <FaReact size={24} className="text-blue-400 mr-3" />,
      benefits: [
        "Virtual DOM for performance",
        "Component reusability",
        "Large ecosystem",
        "Strong community support",
      ],
    },
    {
      framework: "Angular",
      icon: <FaAngular size={24} className="text-red-500 mr-3" />,
      benefits: [
        "MVC architecture",
        "Dependency injection",
        "Two-way data binding",
        "Comprehensive framework",
      ],
    },
    {
      framework: "Vue.js",
      icon: <FaVuejs size={24} className="text-green-500 mr-3" />,
      benefits: [
        "Progressive framework",
        "Gentle learning curve",
        "Flexible structure",
        "Excellent documentation",
      ],
    },
  ];

  return (
    <>
      <head>
        <title>Frontend Development | FNA Marketing Solutions</title>
        <meta
          name="description"
          content="Expert frontend development by FNA Marketing Solutions — responsive, intuitive UI/UX built using modern technologies for seamless user interaction."
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
                  <i className="ph ph-code text-6xl text-purple-400"></i>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-up">
                <span className="block">Frontend Development</span>
                <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  That Defines Excellence
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                From concept to deployment, we craft digital experiences that
                captivate users and drive business growth using cutting-edge
                technologies and industry best practices.
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
                    <span className="mr-3">Start Your Project</span>
                    <i className="ph ph-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </a>

                <a
                  href="#technologies"
                  className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Explore Our Tech Stack</span>
                  <i className="ph ph-arrow-down ml-2 transform group-hover:translate-y-1 transition-transform inline-block"></i>
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
                Frontend Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We create engaging, responsive, and high-performance user
                interfaces that deliver exceptional user experiences across all
                devices and platforms.
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

        {/* Technology Stack Section */}
        <section
          id="technologies"
          className="py-24 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Technologies We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Master
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We leverage the most powerful and modern technologies to build
                scalable, performant, and future-proof web applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="tech-card group bg-white/5 p-6 rounded-2xl text-center backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-light text-white mb-2">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Framework Comparison */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-light text-white mb-8 text-center">
                Framework Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {frameworkBenefits.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-black/50 border border-white/10"
                  >
                    <h4 className="text-xl font-medium text-white mb-4 flex items-center">
                      {item.icon}
                      {item.framework}
                    </h4>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <i className="ph ph-check-circle text-green-400 mt-1 mr-2"></i>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
                Advantages of Professional{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Frontend Development
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                  <MdSpeed size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Improved Site Performance
                </h3>
                <p className="text-gray-400">
                  We optimize loading times, implement responsive designs, and
                  enhance overall website performance to improve user experience
                  and SEO rankings.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                  <RiTeamLine size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Cost-Effective Customization
                </h3>
                <p className="text-gray-400">
                  Our services provide affordable customization options,
                  allowing businesses to adapt to technological changes without
                  maintaining an in-house team.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-purple-500/10">
                  <MdSecurity size={32} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Increased Security & Brand Awareness
                </h3>
                <p className="text-gray-400">
                  Enhanced functionality and security lead to better user
                  experiences, driving sales and improving brand visibility
                  through optimized search engine rankings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                What We <span className="text-purple-400">Build</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From simple websites to complex enterprise applications, we
                deliver solutions that drive results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="mb-4">
                  <i className="ph ph-browser text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-light text-white mb-2">
                  Static Websites
                </h3>
                <p className="text-gray-400 text-sm">
                  Simple, fast-loading websites built with HTML and CSS for
                  businesses needing an online presence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="mb-4">
                  <i className="ph ph-arrows-left-right text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-light text-white mb-2">
                  Dynamic Web Applications
                </h3>
                <p className="text-gray-400 text-sm">
                  Interactive applications with real-time user-server
                  interactions and content management systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="mb-4">
                  <i className="ph ph-shopping-bag text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-light text-white mb-2">
                  E-Commerce Platforms
                </h3>
                <p className="text-gray-400 text-sm">
                  Secure online stores with inventory management, transaction
                  processing, and analytics capabilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="mb-4">
                  <i className="ph ph-cloud text-4xl text-purple-400"></i>
                </div>
                <h3 className="text-xl font-light text-white mb-2">
                  SaaS Applications
                </h3>
                <p className="text-gray-400 text-sm">
                  Cloud-based software solutions accessible from multiple
                  servers with distinct user data separation.
                </p>
              </div>
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
              Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let's collaborate to create stunning, responsive, and
              high-performance web experiences that captivate your audience and
              drive business growth.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-3">Get Started Today</span>
              <i className="ph ph-arrow-right"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default FrontendDevelopment;
