import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Envelope, Phone, MapPin } from "phosphor-react";
import emailjs from "@emailjs/browser";
import { FaBolt, FaUsers, FaCogs, FaHandshake } from "react-icons/fa";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_s1zneya", // Your Gmail Service ID
        "template_zjr9xc5", // Your Template ID
        form.current,
        "CSgQWNECMUMG1ylRv" // Your Public Key
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          setStatus("error");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <>
      <section className="relative py-32 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black/50 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extralight text-white mb-6 tracking-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-light">
                Us
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to discuss a project? Reach out to our
              team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="hidden"
                  name="title"
                  value="Website Contact Form"
                />

                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                    className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <p className="text-green-400 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-2">
                    Error sending message. Please check your Gmail service
                    connection.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-start space-x-4">
                <Envelope size={32} className="text-blue-500 mt-1" />
                <div>
                  <h4 className="text-xl font-light text-white mb-1">Email</h4>
                  <a
                    href="mailto:info@fnamarketingsolutions.com"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    info@fnamarketingsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone size={32} className="text-blue-500 mt-1" />

                <div>
                  <h4 className="text-xl font-light text-white mb-1">Phone</h4>
                  <a href="tel:+1 (307) 443-4600" className="text-gray-400">
                    +1 (307) 443-4600
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin size={32} className="text-blue-500 mt-1" />
                <div>
                  <h4 className="text-xl font-light text-white mb-1">
                    Address
                  </h4>
                  <p className="text-gray-400">
                    30 N Gould St Ste R. Sheridan, WY 82801
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="FNA Marketing Location"
                  className="w-full h-full"
                  src="https://maps.google.com/maps?q=30%20N%20Gould%20St%20Ste%20R,%20Sheridan,%20WY%2082801&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white mb-4">
              Why Reach Out?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer unparalleled support, expertise, and innovative solutions
              for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Fast Response",
                iconColor: "from-blue-500 to-cyan-500",
                icon: <FaBolt size={28} />,
              },
              {
                title: "Expert Team",
                iconColor: "from-purple-500 to-pink-500",
                icon: <FaUsers size={28} />,
              },
              {
                title: "Customized Solutions",
                iconColor: "from-green-400 to-teal-400",
                icon: <FaCogs size={28} />,
              },
              {
                title: "Trusted Partner",
                iconColor: "from-yellow-400 to-orange-400",
                icon: <FaHandshake size={28} />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 text-center"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.iconColor} flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl text-white font-light">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How quickly will you respond?",
                answer:
                  "We typically respond within 24 hours during business days.",
              },
              {
                question: "Do you offer custom marketing plans?",
                answer:
                  "Yes, we create tailored strategies to fit your business needs.",
              },
              {
                question: "Can I request a quote?",
                answer:
                  "Absolutely! Fill out the contact form and our team will provide a detailed quote.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "We work with a wide range of industries including e-commerce, SaaS, and service businesses.",
              },
              {
                question: "Do you provide support after project completion?",
                answer:
                  "Yes, we offer ongoing support packages to ensure your success.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group"
              >
                <summary className="cursor-pointer text-white text-lg font-light">
                  {faq.question}
                </summary>
                <p className="text-gray-400 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
