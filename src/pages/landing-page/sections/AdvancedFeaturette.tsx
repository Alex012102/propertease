import React from "react";

import PlaceHolderImage from "../../../assets/images/ImagePlaceHolder.jpg";

interface advancedFeatures {
  title: string;
  description: string;
  img: string;
}

const advancedFeatures = [
  {
    title: "Fund Administration",
    description:
      "Simplifies rent collection and financial management for landlords. This feature allows you to set a monthly budget that automatically distributes rental income based on your preferences—either by percentage or fixed dollar amounts—to designated accounts. Easily allocate funds for capital expenditures, taxes, repairs, acquisitions, or any other financial priorities, ensuring seamless and organized cash flow management.",
    img: PlaceHolderImage,
  },
  {
    title: "Collaborative Maintenance",
    description:
      "Streamline property upkeep with direct vendor coordination. This feature enables landlords to seamlessly assign work orders to preferred vendors, who can then schedule repairs directly with tenants—eliminating the need for landlord intervention. Once the job is complete, vendors can submit invoices directly, enhancing efficiency and freeing up valuable time for landlords.",
    img: PlaceHolderImage,
  },
  {
    title: "Property Valuation",
    description:
      "Gain real-time insights into the estimated value of your investment properties with our Property Valuation feature. Embedded directly into the platform, this tool analyzes market trends, rental income, and property data to provide accurate and up-to-date valuations. Stay informed and make data-driven investment decisions—all from one centralized dashboard.",
    img: PlaceHolderImage,
  },
];

const Block: React.FC<advancedFeatures> = ({ title, description, img }) => {
  return (
    <div className="flex items-center w-full justify-around">
      <img
        style={{ maxWidth: "10rem" }}
        src={img}
        alt=""
        className="rounded-3xl"
      />
      <div className="max-w-[41em] text-white">
        <h5 className="subheading font-bold">{title}</h5>
        <p className="body-text">{description}</p>
      </div>
    </div>
  );
};

const AdvancedFeaturette = () => {
  return (
    <div id="AdvancedFeaturette" className="bg-black rounded-t-3xl section">
      <h3 className="subtitle text-white mb-3">Focused on the Future.</h3>
      <div className="flex flex-col items-center justify-around pt-12 block-section">
        {advancedFeatures.map((feature, index) => (
          <Block
            key={index}
            title={feature.title}
            description={feature.description}
            img={feature.img}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvancedFeaturette;
