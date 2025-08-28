import React from "react";
import {
  LinkedinLogo,
  InstagramLogo,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";

const Footer = () => {
  const services = [
    {
      name: "Website & Web Application Development",
      href: "/services/website-development",
    },
    {
      name: "Frontend Development",
      href: "/services/frontend-development",
    },
    {
      name: "Backend Development",
      href: "/services/backend-development",
    },
    {
      name: "SEO & Digital Marketing Services",
      href: "/services/seo-digital-marketing",
    },
    {
      name: "Email Marketing",
      href: "/services/email-marketing",
    },
    {
      name: "Web Hosting & Domain Registration",
      href: "/services/web-hosting",
    },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  const contactInfo = [
    {
      type: "email",
      icon: <Envelope className="text-purple-400 text-xl mt-0.5" />,
      value: "info@fnamarketingsolutions.com",
      href: "mailto:info@fnamarketingsolutions.com",
    },
    {
      type: "phone",
      icon: <Phone className="text-purple-400 text-xl mt-0.5" />,
      values: [
        { value: "+1 (307) 443-4600", href: "tel:+13074434600" },
        { value: "+91-8847370741", href: "tel:+918847370741" },
      ],
    },
    {
      type: "address",
      icon: <MapPin className="text-purple-400 text-xl mt-0.5" />,
      values: [
        {
          label: "India",
          address:
            "First-floor, SCO 52, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140306",
          href: "https://www.google.com/maps?q=First-floor,+SCO+52,+Sector+82,+JLPL+Industrial+Area,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140306",
        },
        {
          label: "USA",
          address: "30 N Gould St Ste R. Sheridan, WY 82801",
          href: "https://www.google.com/maps?q=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801",
        },
      ],
    },
  ];

  return (
    <footer className="relative pt-24 pb-12 bg-gray-950 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-gray-900/60 to-black"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="items-center space-x-1">
                {/* Main Logo Text */}
                <span className="text-xl font-bold text-white tracking-wide">
                  FNA <span className="text-purple-400">Marketing</span>
                </span>

                {/* Tagline */}
                <span className="text-xs text-gray-400 tracking-widest">
                  SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Crafting extraordinary digital experiences that transcend
              boundaries and drive growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/FNAMarketingSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:border-purple-400 hover:bg-purple-600/20 transition-all duration-300"
              >
                <LinkedinLogo className="text-white" weight="light" />
              </a>
              <a
                href="https://www.instagram.com/FNAMarketingSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:border-pink-400 hover:bg-pink-600/20 transition-all duration-300"
              >
                <InstagramLogo className="text-white" weight="light" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-300 font-light transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 font-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-start space-x-3">
                {contactInfo[0].icon}
                <a
                  href={contactInfo[0].href}
                  className="text-gray-400 hover:text-purple-300 font-light transition-colors duration-300"
                >
                  {contactInfo[0].value}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start space-x-3">
                {contactInfo[1].icon}
                <div className="flex flex-col space-y-1">
                  {contactInfo[1].values.map((phone, idx) => (
                    <a
                      key={idx}
                      href={phone.href}
                      className="text-gray-400 hover:text-purple-300 font-light transition-colors duration-300"
                    >
                      {phone.value}
                    </a>
                  ))}
                </div>
              </li>

              {/* Addresses */}
              <li className="flex items-start space-x-3">
                {contactInfo[2].icon}
                <div className="text-gray-400 font-light space-y-2">
                  {contactInfo[2].values.map((addr, idx) => (
                    <div key={idx}>
                      <strong className="text-gray-300">{addr.label}:</strong>
                      <br />
                      <a
                        href={addr.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-300 transition-colors"
                      >
                        {addr.address}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-light">
              © 2025 FNA Marketing Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm font-light">
              Crafted with excellence by FNA Marketing Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
