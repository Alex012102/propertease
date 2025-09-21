import React, { useState } from "react";
import Featurette from "../components/Featurette";

import messagingImg from "../../../assets/images/Messaging.png";
import paymentsImg from "../../../assets/images/Payments Image.png";
import signingImg from "../../../assets/images/Signing.png";

const features = [
  {
    title: "Rent Collection & Payment Processing",
    description:
      "A streamlined system for tenants to pay rent online, with automated reminders, tracking, and direct deposit into the landlord’s account.",
    image: paymentsImg,
  },
  {
    title: "Tenant & Lease Management",
    description:
      "A centralized platform to store lease agreements, track lease expirations, manage tenant communications, and handle applications or renewals.",
    image: signingImg,
  },
  {
    title: "Maintenance Request Management",
    description:
      "A system for tenants to submit maintenance requests, allowing landlords to assign work orders to vendors and track progress efficiently.",
    image: messagingImg,
  },
];

const BasicFeaturette: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<any>(messagingImg);
  return (
    <div className="section">
      <h3 className="subtitle">Essential Features for Smart Landlords.</h3>
      <div className="flex items-center justify-around h-full max-h-[45rem]">
        {/* Dynamic Image */}
        <img
          src={currentImage}
          alt="feature"
          className="transition-all duration-300"
        />

        {/* Featurettes */}
        <div className="flex flex-col justify-around h-full">
          {features.map((feature, index) => (
            <Featurette
              key={index}
              title={feature.title}
              description={feature.description}
              onHover={() => setCurrentImage(feature.image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicFeaturette;
