import type React from "react";
import { Bath, BedDouble, Expand, House } from "lucide-react";
import PropertyPlaceHolderIMG from "../assets/images/property_placeholder.svg";
import type { Property } from "../types/PropertyType";
import type { PropertyTotals } from "../utils/sumUnitTotals";

interface PropertyCardProps {
  property: Property;
  units?: PropertyTotals | null;
  onClick: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  units,
  onClick,
}) => (
  <div
    onClick={() => onClick(property)}
    className="border border-gray-400 max-w-96 shadow transition-all duration-300 ease-in-out transform 
               hover:translate-x-2 hover:-translate-y-2 hover:bg-brand-subtle hover:shadow-md 
               rounded-xl cursor-pointer"
  >
    <img
      src={property.photos ? property.photos[0] : PropertyPlaceHolderIMG}
      alt={property.street_address}
      className="overflow-hidden h-7/10 rounded-t-xl"
    />
    <div className="p-3">
      <h3 className="font-medium">{property.street_address}</h3>
      <span className="text-gray-500">
        {property.city}, {property.state} {property.zip_code}
      </span>
      <hr className="border-1 border-gray-400 my-2" />
      <div className="flex w-full justify-between">
        <div className="flex w-full space-x-3 text-gray-700">
          <div className="flex items-center">
            <BedDouble className="me-1" size={"1.25rem"} />
            {units?.Beds ?? "-"}
          </div>
          <div className="flex items-center">
            <Bath className="me-1" size={"1.3rem"} />
            {units?.Baths ?? "-"}
          </div>
          <div className="flex items-center">
            <Expand className="me-1" size={"1.3rem"} />
            {units?.Sqft ?? "-"}
          </div>
        </div>
        <div className="flex items-center me-2">
          <House size={"1.30rem"} /> {property.unit_count}
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
