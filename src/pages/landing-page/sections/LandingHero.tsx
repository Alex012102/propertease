import React from "react";
import Button from "../../../components/ui/Button";
import heroImage from "../../../assets/images/mock-dashboard-preview.png";

const HeroText = () => {
  return (
    <div className="text-white max-w-lg">
      <h2 className="title mb-3">
        Management for the
        <br />
        modern landlord.
      </h2>
      <p className="body-text max-w-md mb-4">
        Making managing your investments simple, and with ease. Control all
        parts of your business in one place, while keeping your important
        numbers visible.
      </p>
      <div
        className="flex items-center justify-between"
        style={{ width: "50%" }}
      >
        <Button text={"Request a demo"} color="primary" />
        <Button text={"Get Started"} color="gray" />
      </div>
    </div>
  );
};

const LandingHero: React.FC = () => {
  return (
    <div className="relative bg-brand-secondary mx-12 rounded-2xl flex items-center px-32 h-[85vh]">
      {/* Text Section */}
      <HeroText />

      {/* Image Section */}
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Dashboard Preview"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LandingHero;
