import type React from "react";
import { useState, useEffect } from "react";
import type { Property } from "../../../types/PropertyType";
import type { Unit } from "../../../types/UnitTypes";
import PictureCarousel from "./components/PhotoCarousel";
import PropertyModalContent from "./components/PropertyModalContent";
import supabase from "../../../api/supabaseClient";
import LoadingModal from "../LoadingModal";

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  if (!property) return null;

  console.log("Selected Property:", property);

  useEffect(() => {
    const fetchUnits = async () => {
      const { data, error } = await supabase
        .from("units")
        .select("*")
        .eq("property_id", property.property_id);

      if (error) {
        console.error("Error fetching units:", error);
      } else {
        setUnits(data);
      }
      setLoading(false);
    };

    fetchUnits();
  }, [property?.property_id]);

  if (loading) return <LoadingModal />;

  console.log("Property Data:", property);
  console.log("Unit Data:", units);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="flex flex-col overflow-auto hide-scrollbar bg-white h-full lg:w-[60vw] p-6 rounded-lg space-y-4 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <PictureCarousel images={property.photos ?? []} />

        <PropertyModalContent property={property} units={units} />

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
