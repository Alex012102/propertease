import React, { useState, useEffect } from "react";
import type { Property } from "../types/PropertyType";
import supabase from "../api/supabaseClient";

import { useAuth } from "../context/AuthContext";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/modals/PropertyModal";
import LoadingModal from "../components/modals/LoadingModal";

const Properties: React.FC = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  console.log(user);

  useEffect(() => {
    if (!user?.id) return;

    const fetchProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching properties:", error);
      } else {
        setProperties(data);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [user]);

  if (loading) return <LoadingModal />;

  console.log("Property Data:", properties)

  return (
    <div className="flex">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard
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
    </div>
  );
};

export default Properties;
