import React from "react";
import "./landing.css";
import LandingHeader from "./sections/LandingHeader";
import LandingHero from "./sections/LandingHero";
import BasicFeaturette from "./sections/BasicFeaturette";
import AdvancedFeaturette from "./sections/AdvancedFeaturette";
import CustomerData from "./sections/CustomerData";
import TargetValue from "./sections/TargetValue";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-9">
      <LandingHeader />
      <LandingHero />
      <BasicFeaturette />
      <div>
        <AdvancedFeaturette />
        <CustomerData />
      </div>
      <TargetValue />
    </div>
  );
};

export default LandingPage;
