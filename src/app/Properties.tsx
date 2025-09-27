import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUserProperties } from "../api/hooks/useUserProperties";

import type { Property } from "../types/PropertyType";
import PropertyCardContainer from "../components/PropertyCardContainer";
import PropertyModal from "../components/modals/property-modal/PropertyModal";
import LoadingModal from "../components/modals/LoadingModal";

const Properties: React.FC = () => {
  const { user } = useAuth();
  const { properties, loading, error } = useUserProperties(user?.id);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  if (loading) return <LoadingModal />;
  if (error) return <p className="text-red-500">Failed to load properties.</p>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {properties.map((property: Property) => (
        <PropertyCardContainer
          key={property.property_id}
          property={property}
          onClick={setSelectedProperty}
        />
      ))}

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default Properties;
