import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import IconButton from "../ui/IconButton";
import { X } from "lucide-react";
import Button from "../ui/Button";
import type { UserProfile } from "../../types/AuthTypes";
import supabase from "../../api/supabaseClient";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  if (!isOpen || !user) return null;

  const initialFormData: UserProfile = {
    id: user.id,
    email: user.email,
    displayName: user.displayName ?? "",
    bio: user.bio ?? "",
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    profilePicture: user.profilePicture ?? "",
  };

  const [formData, setFormData] = useState<UserProfile>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase
      .from("accounts")
      .update({
        display_name: formData.displayName,
        bio: formData.bio,
      })
      .eq("user_id", user.id);

    setIsSubmitting(false);

    if (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("Could not update profile. Please try again.");
      return;
    }

    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-end">
          <IconButton onClick={onClose}>
            <X size={19} />
          </IconButton>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-start">
          <div className="flex items-center mb-4">
            <img
              src={formData.profilePicture || "/placeholder.jpg"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover me-7"
            />
            <div className="space-x-2">
              <Button
                text="Change Image"
                color="secondary"
                onClick={() => console.log("Change image clicked")}
              />
              <Button
                text="Delete Image"
                color="subtle"
                onClick={
                  () => console.log("Delete Image Clicked")
                  // setFormData((prev) => ({ ...prev, profilePicture: "" }))
                }
              />
              <p className="text-gray-500 mt-3">{user.email}</p>
            </div>
          </div>

          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-black/60"
            >
              Display Name:
            </label>
            <input
              id="displayName"
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full border border-black/30 rounded p-2 text-black"
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-black/60"
            >
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full border border-black/30 rounded p-1 text-black text-sm"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <Button
            type="submit"
            text={isSubmitting ? "Saving..." : "Save Changes"}
            color="secondary"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
