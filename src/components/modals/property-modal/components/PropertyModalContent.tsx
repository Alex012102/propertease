import React, { useMemo } from "react";
import PropertyModalHeader from "./PropertyModalHeader";
import DataTable from "../../../ui/DataTable";

import type { Property } from "../../../../types/PropertyType";
import type { Unit } from "../../../../types/UnitTypes";
import type { PropertyTotals } from "../../../../utils/sumUnitTotals";

interface PropertyModalContentTypes {
  property: Property;
  units: Unit[];
  totals: PropertyTotals | null;
}

const PropertyModalContent: React.FC<PropertyModalContentTypes> = ({
  property,
  units,
  totals,
}) => {
  const totalUnits = useMemo(
    () => (units.length > 1 ? units.length : null),
    [units]
  );

  return (
    <div className="flex-1 space-y-15">
      <PropertyModalHeader
        totalUnits={totalUnits}
        property={property}
        propertyDetails={totals}
      />

      <div>
        <span className="text-lg font-medium">Description</span>
        <p className="px-4">{property.description}</p>
      </div>

      {units.length > 1 && (
        <DataTable
          rows={units}
          hiddenKeys={[
            "unit_id",
            "property_id",
            "photos",
            "lease_start_date",
            "lease_end_date",
            "amenities",
            "user_id",
          ]}
          columnOrder={[
            "unit_number",
            "beds",
            "baths",
            "sqft",
            "rent",
            "occupied",
          ]}
          formatValue={(key, value) => {
            if (typeof value === "boolean") return value ? "Yes" : "No";
            if (value === null) return "-";
            return value;
          }}
        />
      )}
    </div>
  );
};

export default PropertyModalContent;
