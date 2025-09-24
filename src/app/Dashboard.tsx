import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PropertEase | Dashboard";
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/auth"); // redirect to auth page after sign out
    } catch (err) {
      console.error("❌ Error signing out:", err);
    }
  };

  console.log(user);

  return (
    <div>
      <p>This is the dashboard.</p>
      <Button text="Sign Out" color="primary" onClick={handleSignOut} />
    </div>
  );
};

export default Dashboard;
