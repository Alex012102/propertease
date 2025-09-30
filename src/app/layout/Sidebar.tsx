import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LoadingModal from "../../components/modals/LoadingModal";
import ProfilePhoto from "../../components/ui/ProfilePhoto";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logos/PropertEase-Logo-white_primary.png";

import type { BarTypes } from "../../types/PortalTypes";

const Sidebar: React.FC<BarTypes> = ({ isOpen, setIsOpen, children }) => {
  const navigate = useNavigate(); // Create the navigate function

  const { loading, user, signOut } = useAuth();

  if (loading) return <LoadingModal />;

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/auth");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-brand-charcoal-shade text-white transition-all duration-300
      ${isOpen ? "w-48" : "w-0 md:w-48"}
      overflow-hidden z-40 md:relative md:flex-shrink-0 flex flex-col`}
    >
      <div className="p-4 h-full flex flex-col items-center text-center">
        <button
          className="md:hidden text-white self-end"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <img
          src={logo}
          className="hidden md:flex w-[8.5rem] m-auto mt-5"
          alt="propertease"
        />
        <ProfilePhoto />
        {user && <p className="mt-2 font-semibold">{user.displayName}</p>}
        <Navbar />
        <div className="flex-grow" />
        <p
          className="items-baseline mb-4 cursor-pointer hover:text-red-500"
          onClick={handleSignOut}
        >
          Log Out
        </p>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
