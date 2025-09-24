import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import ProfileModal from "../modals/ProfileModal";

const ProfilePhoto = () => {
  const { user } = useAuth();
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!user) return null;

  return (
    <>
      <div
        // onClick={() => setIsOpen(true)}
        className="hidden md:flex m-auto mt-6 w-[6rem] p-[.15em] bg-white shadow rounded-full cursor-pointer"
      >
        <img
          src={user.profilePicture}
          className="w-[6em] aspect-square rounded-full object-cover"
          alt="Profile"
        />
      </div>

      {/* <ProfileModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </>
  );
};

export default ProfilePhoto;