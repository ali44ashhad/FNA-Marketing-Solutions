import React, { useState, useRef} from "react";
import { motion } from "framer-motion";
import pricingBack from '../assets/pricingback.png'
import { Check } from "lucide-react";
import serve1 from '../assets/pricing/serve1.jpg'
import serve2 from '../assets/pricing/serve2.webp'
import serve3 from '../assets/pricing/serve3.webp'
import serve4 from '../assets/pricing/serve4.png'
import serve5 from '../assets/pricing/serve5.png'
import serve6 from '../assets/pricing/serve6.webp'
import serve7 from '../assets/pricing/serve7.png'
 import emailjs from "@emailjs/browser";
 




const pricingData = [
    {
      title: "Basic Package",
      price: "$300",
      priceNote: "",
      features: [
        "Domain Name & Web Hosting (1 year)",
        "Up to 5 pages (Home, About, Services, Contact)",
        "Responsive and mobile-friendly design",
        "Basic SEO optimization",
        "Ideal for startups and small businesses",
        "Contact form integration",
        "90 Days Free Support",
      ],
      isCustom: false,
    },
    {
      title: "Standard Package",
      price: "$450",
      priceNote: "",
      features: [
        "Domain Name & Web Hosting (1 year)",
        "Custom design with enhanced visuals",
        "Fully responsive layout",
        "Advanced SEO optimization",
        "Social media integration",
        "Google Analytics setup",
        "120 Days Free Support",
      ],
      isCustom: false,
    },
    {
      title: "E-commerce Website",
      price: "$700",
      priceNote: "",
      features: [
        "Domain Name + Hosting (1 year)",
        "Fully customized UI design",
        "Mobile-friendly & responsive",
        "E-commerce functionality",
        "Advanced SEO & performance optimization",
        "120 Days Support",
      ],
      isCustom: false,
    },
    {
      title: "Custom Website",
      price: "15 USD",
      priceNote: "/ Per Hour",
      features: [
        "Domain Name + Hosting (1 year)",
        "Fully customized responsive design",
        "Advanced SEO optimization",
        "Third-party API integrations",
        "Ongoing maintenance & support",
      ],
      isCustom: true,
    },
  ];

  
const industries = [
  { title: "Business", img: serve1 },
  { title: "Industry & Manufacturing", img: serve2 },
  { title: "Consulting", img: serve3},
  { title: "Banks & Insurance", img: serve4 },
  { title: "Healthcare", img: serve5},
  { title: "Transportation & Logistics", img: serve6 },
  { title: "Media & Entertainment", img: serve7 },
];

const Pricing = () => {


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
     <section className="relative w-full h-[80vh] flex items-center overflow-hidden bg-[#430969]">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={pricingBack}
        alt="Background pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#301652]/70 to-[#03060D]/70" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.2,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col items-start pt-20 sm:pt-24 lg:pt-0 lg:-translate-y-6"
            initial="hidden"
            animate="visible"
          >
            {/* About Tag */}
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <span className="text-red-500 text-xl">✶</span>
              <span className="uppercase tracking-widest text-sm text-white">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-white font-thin leading-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                whitespace-normal lg:whitespace-nowrap text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
            >
              WEB DESIGN AND DEVELOPMENT
            </motion.h1>

            {/* Scroll Icon */}
            <motion.div
              className="mt-8 lg:mt-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
                delay: 0.8,
              }}
              whileHover={{
                y: [0, -6, 0],
                transition: { duration: 0.6, repeat: Infinity },
              }}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-purple-400 flex items-center justify-center">
                <span className="text-xl lg:text-2xl text-black">↓</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="text-gray-400 text-base sm:text-lg max-w-full lg:max-w-xl
              mt-6 lg:mt-70 lg:translate-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
          >
            <p className="leading-relaxed">
              Unlock custom strategies that boost your brand visibility, increase
              user engagement, and deliver real online results. Unlock custom
              strategies that boost your brand visibility, increase user
              engagement, and deliver real online results.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>



   <section className="min-h-screen bg-[#0b0f1a] py-16 md:py-24">

      {/* ================= TITLE ================= */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl
        font-extrabold uppercase tracking-widest mb-4
        bg-gradient-to-r from-[#9B18F7] to-[#ee0093]
        bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        Choose Your Plan
      </motion.h2>

      {/* ================= DESCRIPTION ================= */}
      <motion.p
        className="max-w-3xl mx-auto text-center
        text-gray-400 text-sm sm:text-base md:text-lg
        leading-relaxed mb-14 px-4"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
      >
        Select a pricing plan that perfectly fits your business goals.
        Our flexible packages are designed to scale with your growth,
        deliver real value, and maximize your digital presence.
      </motion.p>

      {/* ================= GRID ================= */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-[#141a2b] rounded-2xl
              p-6 sm:p-8 lg:p-10 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              {/* PLAN TITLE */}
              <span className="inline-block mb-5 text-xs uppercase tracking-widest
              bg-purple-600 text-white px-4 py-1 rounded-full w-fit">
                {plan.title}
              </span>

              {/* PRICE */}
              <div className="flex items-end mb-6">
                <h3
                  className={`text-4xl md:text-5xl font-bold ${
                    plan.isCustom ? "text-pink-500" : "text-white"
                  }`}
                >
                  {plan.price}
                </h3>
                <span className="ml-2 text-gray-400 text-lg">
                  {plan.priceNote}
                </span>
              </div>

              {/* FEATURES */}
              <ul className="flex-1 space-y-3 text-gray-300 mb-8">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check
                      className="w-5 h-5 text-purple-400 mt-1 shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="mt-auto w-full py-3 rounded-lg
                bg-gradient-to-r from-pink-500 to-purple-600
                text-white font-bold uppercase tracking-widest
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40"
              >
                Buy Now
              </button>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>


<section className="bg-[#170E2D] py-20 px-4">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <div className="flex items-center justify-center gap-3 mb-14">
      <span className="w-3 h-3 rounded-full bg-[#9D1BF5]" />
      <h2 className="text-white text-sm tracking-widest font-semibold">
        INDUSTRIES WE SERVE
      </h2>
    </div>

    {/* Pills */}
    <div className="flex flex-wrap justify-center gap-4">
      {industries.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}          // 👈 translateY on hover
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex items-center gap-3 
            bg-[#301653] 
            hover:bg-gradient-to-r hover:from-[#9D1BF5] hover:to-[#EB37A6]
            transition-colors duration-300
            rounded-full px-6 py-3 cursor-pointer"
        >
          {/* Image Block */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
            {item.title}
          </span>
        </motion.div>
      ))}
    </div>

  </div>
</section>



    {/* form */}
  <section className="bg-[#170E2D] py-12">
  <div className="w-[95%] sm:w-[70%] mx-auto rounded-3xl overflow-hidden shadow-2xl">

    {/* SINGLE GRID – NO GAP */}
    <div className="grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT FORM */}
      <div className="flex items-center justify-center bg-[#170E2D]">
       <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full h-full bg-white/5 backdrop-blur-xl 
             rounded-none lg:rounded-l-3xl
             p-4 sm:p-6 md:p-12"
>
  <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
    <input type="hidden" name="title" value="Website Contact Form" />

    {/* Name */}
    <div>
      <label className="block text-gray-300 mb-2">Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-gray-300 mb-2">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-gray-300 mb-2">Phone</label>
      <input
        type="tel"
        name="phone"
        required
        className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
      />
    </div>

    {/* Message */}
    <div>
      <label className="block text-gray-300 mb-2">Message</label>
      <textarea
        name="message"
        rows={5}
        required
        className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={status === "sending"}
      className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition-transform duration-300 disabled:opacity-50"
    >
      {status === "sending" ? "Sending..." : "Send Message"}
    </button>

    {/* Status Messages */}
    {status === "success" && (
      <p className="text-green-400 mt-2">Message sent successfully!</p>
    )}
    {status === "error" && (
      <p className="text-red-400 mt-2">
        Error sending message. Please check your Gmail service connection.
      </p>
    )}
  </form>
</motion.div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full min-h-[300px] lg:min-h-full">
        <img
          src={serve1}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#170E2D]/40 to-[#170E2D]/80" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-base sm:text-lg">
            Reach out to us today and discover how we can help your business grow.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



    </>
  );
};

export default Pricing;
