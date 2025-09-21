import React from "react";

interface FeaturetteProps {
  title: string;
  description: string;
  onHover: any;
}

const Featurette: React.FC<FeaturetteProps> = ({
  title,
  description,
  onHover,
}) => {
  return (
    <div
      className="max-w-[41em] p-6 bg-transparent transition-all duration-300 ease-in-out transform 
                 hover:translate-x-2 hover:-translate-y-2 hover:bg-brand-subtle hover:shadow-md 
                 rounded-2xl cursor-pointer"
      onMouseEnter={onHover}
    >
      <h5 className="subheading font-bold">{title}</h5>
      <p className="body-text">{description}</p>
    </div>
  );
};

export default Featurette;
