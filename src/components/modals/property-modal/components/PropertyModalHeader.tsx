import React from "react";
import type { Property } from "../../../../types/PropertyType";
import type { PropertyTotals } from "../../../../utils/sumUnitTotals";

interface PropertyModalHeaderTypes {
  property: Property;
  propertyDetails: PropertyTotals | null;
  totalUnits: number | null;
}

const PropertyModalHeader: React.FC<PropertyModalHeaderTypes> = ({
  property,
  propertyDetails,
  totalUnits,
}) => {
  return (
    <div className="lg:flex w-full justify-between items-center">
      <div className="mb-10 lg:m-0">
        <h3 className="text-2xl md:text-3xl font-semibold">
          {property.street_address}
        </h3>
        <p>
          {property.city}, {property.state} {property.zip_code}
        </p>
      </div>

      <div className="flex space-x-10">
        {propertyDetails &&
          Object.entries(propertyDetails).map(([key, value]) => (
            <div key={key}>
              <span className="text-2xl">{value}</span>
              <p>{key}</p>
            </div>
          ))}
        {totalUnits && (
          <div>
            <span className="text-2xl">{totalUnits}</span>
            <p>Units</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyModalHeader;
