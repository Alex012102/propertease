import type React from "react";
import { Bath, BedDouble, Expand } from "lucide-react";
import PropertyPlaceHolderIMG from "../assets/images/property_placeholder.svg"
import type { Property } from "../types/PropertyType";

// Add vacancy status and rent value, dynamic values, link to property page.

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <div
      onClick={() => onClick(property)}
      className="flex flex-col w-[20rem] border border-gray-400 shadow transition-all duration-300 ease-in-out transform 
                 hover:translate-x-2 hover:-translate-y-2 hover:bg-brand-subtle hover:shadow-md 
                 rounded-xl cursor-pointer"
    >
      <img
        src={property.photo ? property.photo : PropertyPlaceHolderIMG}
        alt={property.street_address}
        className="h-[15rem] overflow-hidden rounded-t-xl"
      />
      <div className="p-3">
        <h3 className="font-medium">{property.street_address}</h3>
        <span className="text-gray-500">
          {property.city}, {property.state} {property.zip_code}
        </span>
        <hr className="border-1 border-gray-400 my-2" />
        <div className="flex w-full space-x-3 text-gray-700">
          <div className="flex items-center justify-between max-w-[2rem] space-x-1">
            <BedDouble size={"1.30rem"} />
            <p>3</p>
          </div>
          <div className="flex items-center justify-between max-w-[2rem] space-x-1">
            <Bath size={"1.30rem"} />
            <p>2</p>
          </div>
          <div className="flex items-center justify-between space-x-1">
            <Expand size={"1.25rem"} />
            <p>1,328</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
