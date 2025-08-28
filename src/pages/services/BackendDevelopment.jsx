import React, { useState, useEffect } from "react";
import {
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCode,
  FaSync,
  FaCloud,
  FaLock,
  FaRocket,
  FaNetworkWired,
  FaUserCheck,
  FaChartLine,
  FaJava,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiRubyonrails,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiAmazons3,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiApachekafka,
} from "react-icons/si";
import { MdSecurity, MdSpeed, MdStorage, MdApi } from "react-icons/md";

const BackendDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Services data
  const services = [
    {
      title: "Server-Side Programming",
      description:
        "Robust server-side logic development using modern programming languages and frameworks for high-performance applications.",
      icon: <FaServer className="text-3xl text-purple-400" />,
    },
    {
      title: "API Development & Integration",
      description:
        "RESTful and GraphQL API development with seamless third-party service integrations for extended functionality.",
      icon: <MdApi className="text-3xl text-purple-400" />,
    },
    {
      title: "Database Design & Management",
      description:
        "Efficient database architecture design, optimization, and management for structured and unstructured data.",
      icon: <FaDatabase className="text-3xl text-purple-400" />,
    },
    {
      title: "User Authentication & Authorization",
      description:
        "Secure authentication systems with role-based access control and OAuth integration.",
      icon: <FaUserCheck className="text-3xl text-purple-400" />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud infrastructure setup and management on AWS, Google Cloud, or Azure platforms.",
      icon: <FaCloud className="text-3xl text-purple-400" />,
    },
    {
      title: "DevOps & Deployment",
      description:
        "CI/CD pipeline setup, containerization with Docker, and orchestration with Kubernetes for seamless deployments.",
      icon: <SiDocker className="text-3xl text-purple-400" />,
    },
  ];

  // Technologies data
  const technologies = [
    {
      category: "Backend Languages",
      techs: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-4xl text-green-600" />,
        },
        {
          name: "Python",
          icon: <SiPython className="text-4xl text-blue-400" />,
        },
        { name: "Java", icon: <FaJava className="text-4xl text-red-500" /> },
        { name: "PHP", icon: <SiPhp className="text-4xl text-purple-500" /> },
        {
          name: "Ruby on Rails",
          icon: <SiRubyonrails className="text-4xl text-red-600" />,
        },
        { name: "Go", icon: <SiGo className="text-4xl text-blue-500" /> },
      ],
    },
    {
      category: "Databases",
      techs: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-4xl text-blue-500" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-4xl text-green-500" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-4xl text-orange-500" />,
        },
        { name: "Redis", icon: <SiRedis className="text-4xl text-red-500" /> },
      ],
    },
    {
      category: "Cloud Platforms",
      techs: [
        {
          name: "AWS",
          icon: <SiAmazons3 className="text-4xl text-orange-400" />,
        },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud className="text-4xl text-blue-400" />,
        },
        {
          name: "Azure",
          icon: <FaCloud className="text-4xl text-blue-600" />,
        },
      ],
    },
    {
      category: "DevOps & Tools",
      techs: [
        {
          name: "Docker",
          icon: <SiDocker className="text-4xl text-blue-400" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-4xl text-blue-500" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-4xl text-pink-500" />,
        },
        {
          name: "Apache Kafka",
          icon: <SiApachekafka className="text-4xl text-white" />,
        },
      ],
    },
  ];

  // Process data
  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "We analyze your business requirements to design the optimal backend architecture and technology stack.",
      icon: <FaCode className="text-2xl text-purple-400" />,
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Our architects design scalable, secure, and efficient system architecture tailored to your needs.",
      icon: <FaNetworkWired className="text-2xl text-purple-400" />,
    },
    {
      step: "03",
      title: "Development",
      description:
        "Our developers implement robust server-side logic, APIs, and database structures following best practices.",
      icon: <FaServer className="text-2xl text-purple-400" />,
    },
    {
      step: "04",
      title: "Security Implementation",
      description:
        "We implement comprehensive security measures including encryption, authentication, and authorization systems.",
      icon: <FaLock className="text-2xl text-purple-400" />,
    },
    {
      step: "05",
      title: "Testing & Optimization",
      description:
        "Rigorous testing for performance, security, and scalability with optimization for peak efficiency.",
      icon: <MdSpeed className="text-2xl text-purple-400" />,
    },
    {
      step: "06",
      title: "Deployment & Maintenance",
      description:
        "Seamless deployment to production environments with ongoing maintenance and support services.",
      icon: <FaRocket className="text-2xl text-purple-400" />,
    },
  ];

  // Security features
  const securityFeatures = [
    {
      title: "Data Encryption",
      description:
        "End-to-end encryption for data at rest and in transit using industry-standard protocols.",
      icon: <FaLock className="text-2xl text-purple-400" />,
    },
    {
      title: "Authentication Systems",
      description:
        "Secure authentication with multi-factor options, OAuth, and JWT token management.",
      icon: <FaUserCheck className="text-2xl text-purple-400" />,
    },
    {
      title: "API Security",
      description:
        "Protection against common vulnerabilities with rate limiting and input validation.",
      icon: <MdSecurity className="text-2xl text-purple-400" />,
    },
    {
      title: "Regular Audits",
      description:
        "Continuous security monitoring and regular penetration testing to identify vulnerabilities.",
      icon: <FaShieldAlt className="text-2xl text-purple-400" />,
    },
  ];

  return (
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
              <span className="block">Backend Development</span>
              <span className="text-3xl md:text-4xl lg:text-5xl block mt-4 font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Powering Your Digital Experience
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl font-light text-gray-200 max-w-4xl mx-auto mb-12 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              We build robust, scalable, and secure server-side systems that
              form the foundation of exceptional digital experiences.
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
                  <FaRocket className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#technologies"
                className="group px-10 py-5 text-lg font-light text-white border border-white/20 rounded-full hover:border-white/40 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative">Explore Technologies</span>
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
              Backend Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We build the engine that powers your digital presence with robust,
              scalable, and secure server-side systems.
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
              Our Tech Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
              Technologies We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Work With
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure,
              and high-performance backend systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {technologies.map((category, index) => (
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

      {/* Security Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-light tracking-widest uppercase mb-4 block">
              Security & Protection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-6">
              Enterprise-Grade{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Security
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We implement comprehensive security measures to protect your data
              and ensure regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
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
              How We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Robust Backends
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our structured development process ensures transparency, quality,
              and timely delivery of your backend systems.
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
              Power
            </span>{" "}
            Your Applications?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Let's build a robust, scalable backend that delivers exceptional
            performance and security for your applications.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 text-lg font-light text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-3">Start Your Project Today</span>
            <FaRocket />
          </a>
        </div>
      </section>
    </main>
  );
};

export default BackendDevelopment;
