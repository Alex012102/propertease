import type { UserProfile } from "../../types/AuthTypes";
import supabase from "../supabaseClient";

// Fetch profile from Supabase "profiles" table
export const fetchProfile = async (
  userId: string,
  email: string
): Promise<UserProfile> => {
  const { data, error } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", userId)
    .single();

  console.log("Returned Data:", data);

  if (error) {
    console.error("Error loading profile:", error.message);
    return { id: userId, email };
  }

  return {
    id: userId,
    email,
    name: data?.first_name ?? undefined,
    profilePicture: data?.profile_picture ?? undefined,
  };
};
