import React, { useState } from "react";
import { ChevronLeft, Pencil, Save, X } from "lucide-react";
import IconButton from "../../ui/IconButton";
import PictureCarousel from "./components/PhotoCarousel";
import PropertyModalContent from "./components/PropertyModalContent";
import PropertyEditForm from "../../forms/PropertyEditForm";
import LoadingModal from "../LoadingModal";

import { usePropertyUnits } from "../../../api/hooks/usePropertyUnits";
import type { Property } from "../../../types/PropertyType";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [editMode, setEditMode] = useState(false);

  if (!property) return null;

  const { units, totals, loading } = usePropertyUnits(property.property_id);

  if (loading) return <LoadingModal />;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="flex flex-col overflow-auto hide-scrollbar bg-white h-full lg:w-[60vw] p-6 rounded-lg space-y-4 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between">
          <IconButton onClick={onClose}>
            <ChevronLeft />
          </IconButton>

          {!editMode ? (
            <IconButton onClick={() => setEditMode(true)}>
              <Pencil size={"19px"} />
            </IconButton>
          ) : (
            <div className="flex space-x-2">
              <IconButton onClick={() => setEditMode(false)}>
                <X size={"19px"} />
              </IconButton>
              <IconButton form="property-edit-form" type="submit">
                <Save size={"19px"} />
              </IconButton>
            </div>
          )}
        </div>

        {/* Content */}
        {editMode ? (
          <PropertyEditForm
            property={property}
            units={units}
            onCancel={() => setEditMode(false)}
            onSaved={() => setEditMode(false)} // refresh could also be added
          />
        ) : (
          <>
            <PictureCarousel images={property.photos ?? []} />
            <PropertyModalContent
              property={property}
              units={units}
              totals={totals}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyModal;
