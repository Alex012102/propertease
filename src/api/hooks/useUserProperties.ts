import { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import type { Property } from "../../types/PropertyType";

export function useUserProperties(userId?: string) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchProperties = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        setError(error);
      } else {
        setProperties(data as Property[]);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [userId]);

  return { properties, loading, error };
}
