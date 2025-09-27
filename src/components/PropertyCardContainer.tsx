import React from "react";
import type { Property } from "../types/PropertyType";
import { usePropertyUnits } from "../api/hooks/usePropertyUnits";
import PropertyCard from "./PropertyCard";

interface PropertyCardContainerProps {
  property: Property;
  onClick: (property: Property) => void;
}

const PropertyCardContainer: React.FC<PropertyCardContainerProps> = ({
  property,
  onClick,
}) => {
  const { totals } = usePropertyUnits(property.property_id);

  return <PropertyCard property={property} units={totals} onClick={onClick} />;
};

export default PropertyCardContainer;
