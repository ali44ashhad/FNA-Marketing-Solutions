import React from "react";

function About() {
  return (
    <div>
      <section
        id="about"
        className="py-16 md:py-24 relative overflow-hidden bg-gray-900"
      >
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-800/20 to-black opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-on-scroll">
              <span className="text-blue-400 text-sm font-light tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4 mb-6">
                Pioneers of Digital Excellence
              </h2>
              <p className="text-lg font-light text-gray-300 mb-10 leading-relaxed">
                At{" "}
                <span className="text-blue-400 font-medium">
                  FNA Marketing solutions
                </span>
                , we don't just build digital solutions – we architect digital
                empires. Our team of visionaries combines cutting-edge
                technology with artistic precision to create experiences that
                captivate, convert, and conquer.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="animate-on-scroll">
                  <h3 className="text-5xl font-light bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    150+
                  </h3>
                  <p className="text-gray-400 font-light">Projects Delivered</p>
                </div>
                <div className="animate-on-scroll">
                  <h3 className="text-5xl font-light bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    98%
                  </h3>
                  <p className="text-gray-400 font-light">
                    Client Satisfaction
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/about-us"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                <span>Discover Our Story</span>
                <i className="ph ph-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Visual / Right Column */}
            <div className="animate-on-scroll relative">
              <div className="bg-zinc-900/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 bg-gradient-to-br from-blue-500/30 to-transparent rounded-2xl animate-pulse"></div>
                    <div className="h-48 bg-gradient-to-br from-purple-500/30 to-transparent rounded-2xl animate-pulse delay-100"></div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-48 bg-gradient-to-br from-pink-500/30 to-transparent rounded-2xl animate-pulse delay-200"></div>
                    <div className="h-32 bg-gradient-to-br from-green-500/30 to-transparent rounded-2xl animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
