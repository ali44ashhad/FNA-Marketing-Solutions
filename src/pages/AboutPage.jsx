import React from "react";
import AboutHero from "../components/About/AboutHero";
import OurStory from "../components/About/OurStory";
import MissionVision from "../components/About/MissionVision";
import CoreValues from "../components/About/CoreValues";
import OurCulture from "../components/About/OurCulture";
import AwardsRecognition from "../components/About/AwardsRecognition";
import CTASection from "../components/About/CTASection";
import OurTeam from "../components/About/teamMembers";

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <OurTeam />
      <OurCulture />
      <AwardsRecognition />
      <CTASection />
    </div>
  );
}

export default AboutPage;
