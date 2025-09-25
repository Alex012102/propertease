import React, { useState, useEffect } from "react";
import PropertyModalHeader from "./PropertyModalHeader";

import {
  sumUnitTotals,
  type PropertyTotals,
} from "../../../../utils/sumUnitTotals";

import type { Property } from "../../../../types/PropertyType";
import type { Unit } from "../../../../types/UnitTypes";

interface PropertyModalContentTypes {
  property: Property;
  units: Unit[];
}

const PropertyModalContent: React.FC<PropertyModalContentTypes> = ({
  property,
  units,
}) => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyTotals | null>(
    null
  );
  const [totalUnits, setTotalUnits] = useState<number | null>(null);

  console.log("Units:", units);

  useEffect(() => {
    if (units.length === 1) {
      const totals = sumUnitTotals(units);
      setPropertyDetails(totals);
      setTotalUnits(null);
    } else {
      const totals = sumUnitTotals(units);
      setPropertyDetails(totals);
      setTotalUnits(units.length);
    }
  }, [units]);

  console.log("totalUnits:", totalUnits);
  console.log("propertyDetails:", propertyDetails);

  return (
    <div className="flex-1">
      <PropertyModalHeader
        totalUnits={totalUnits}
        property={property}
        propertyDetails={propertyDetails}
      />
      <span className="text-lg font-medium">Description</span>
      <p>{property.description}</p>
      <div className="h-[100rem]"></div>
    </div>
  );
};

export default PropertyModalContent;
