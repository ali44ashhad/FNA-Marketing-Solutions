import React from "react";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Portfolio from "../components/Home/Portfolio";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
