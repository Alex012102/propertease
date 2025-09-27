import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { sumUnitTotals, type PropertyTotals } from "../../utils/sumUnitTotals";
import type { Unit } from "../../types/UnitTypes";

export function usePropertyUnits(propertyId?: number, limit?: number) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [totals, setTotals] = useState<PropertyTotals | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchUnits = async () => {
      setLoading(true);
      const query = supabase
        .from("units")
        .select("*")
        .eq("property_id", propertyId);
      if (limit) query.range(0, limit);

      const { data, error } = await query;

      if (error) setError(error);
      else {
        setUnits(data as Unit[]);
        setTotals(sumUnitTotals(data));
      }
      setLoading(false);
    };

    fetchUnits();
  }, [propertyId, limit]);

  return { units, totals, loading, error };
}
