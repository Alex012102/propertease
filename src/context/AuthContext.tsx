// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, UserProfile } from "../types/AuthTypes";
import supabase from "../api/supabaseClient";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile from Supabase "profiles" table
  const fetchProfile = async (
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

  // Restore session and listen for changes
  useEffect(() => {
    console.log("Starting initialization");

    const initSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("Performed getSession:", session);

      if (session?.user) {
        const profile = await fetchProfile(
          session.user.id,
          session.user.email!
        );
        setUser(profile);
      }
      setLoading(false);
    };

    initSession();

    // Listen for login/logout events
    // const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    //   console.log("Auth event:", event);

    //   switch (event) {
    //     case "SIGNED_IN":
    //     case "USER_UPDATED":
    //       if (session?.user) {
    //         const profile = await fetchProfile(
    //           session.user.id,
    //           session.user.email!
    //         );
    //         setUser(profile);
    //       }
    //       break;

    //     case "SIGNED_OUT":
    //       setUser(null);
    //       break;

    //     case "TOKEN_REFRESHED":
    //       // Optional: refresh silently
    //       break;
    //   }
    // });

    // const subscription: Subscription = data.subscription;

    // return () => {
    //   subscription.unsubscribe();
    // };
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    if (data.user) {
      const profile = await fetchProfile(data.user.id, data.user.email!);
      setUser(profile);
    }
    setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
