import React from "react";
import Logo from "../../../components/ui/Logo";
import LandingNav from "../components/LandingNav";
import Button from "../../../components/ui/Button";

const LandingHeader: React.FC = () => {
  return (
    <div className="flex justify-between m-5">
      <Logo />
      <LandingNav />
      <Button text={"Log In"} color="secondary" to="/auth" />
    </div>
  );
};

export default LandingHeader;
