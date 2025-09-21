import React from "react";
import { Link } from "react-router-dom";

const LandingNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[20rem]">
      <Link to="/dashboard" className="hover:font-bold">
        Home
      </Link>
      <Link to="/properties" className="hover:font-bold">
        Features
      </Link>
      <Link to="#review-card" className="hover:font-bold">
        Pricing
      </Link>
    </nav>
  );
};

export default LandingNav;
