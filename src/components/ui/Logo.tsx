import React from "react";
import logo from "../../assets/logos/propertease_dark_logo.png";

const Logo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="propertease"
      style={{ maxWidth: "160px", width: "9em" }}
    />
  );
};

export default Logo;
