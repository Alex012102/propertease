import { useEffect, useState } from "react";
import supabase from "../../api/supabaseClient";
import { sumUnitTotals, type PropertyTotals } from "../../utils/sumUnitTotals";

export function usePropertyUnits(propertyId?: string) {
  const [totals, setTotals] = useState<PropertyTotals | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchUnits = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("units")
        .select("beds, baths, sqft")
        .eq("property_id", propertyId);

      if (error) {
        setError(error);
      } else {
        setTotals(sumUnitTotals(data));
      }
      setLoading(false);
    };

    fetchUnits();
  }, [propertyId]);

  return { totals, loading, error };
}
