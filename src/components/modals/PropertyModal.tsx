import type React from "react";
import type { Property } from "../../types/PropertyType";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  console.log("Selected Property:", property)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg space-y-4 shadow-xl relative">
        {/* <PictureCarousel images={property.photo} /> */}
        <button
          className="mt-4 px-4 py-2 bg-brand-secondary-tint text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PropertyModal;