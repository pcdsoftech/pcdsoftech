import React from "react";

// components
import AdSection from "../components/aboutus/HeroSection";
import SubscriptionSection from "../components/aboutus/SubscriptionSection";
import TeamSection from "../components/aboutus/TeamSection";
import PartnersSection from "../components/aboutus/PartnersSection";

const AboutUS: React.FC = () =>{
  return (
    <>
			<AdSection />
			<SubscriptionSection />
			<TeamSection />
			<PartnersSection />
    </>
  );
}

export default AboutUS;
