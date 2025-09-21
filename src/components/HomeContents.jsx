import React from "react";
import HeroContent from "./HeroContent";
import ServicesContent from "./ServicesContent";
import AboutContents from "./AboutContents";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseUs from "./WhyChooseUs";
import PricePlanContents from "./PricePlanContents";
import FooterContents from "./FooterContents";
import NewHeroContent from "./NewHeroContent";

const HomeContents = () => {
  return (
    <>
      {/* <HeroContent /> */}
      <NewHeroContent />
      <AboutContents />
      <WhyChooseUs />
      <ServicesContent />
      <HowItWorksSection />
      <PricePlanContents />
      <FooterContents />
    </>
  );
};

export default HomeContents;
