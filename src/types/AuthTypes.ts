// export interface UserProfile {
//   account_id: number;
//   user_id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone?: number;
//   date_created: string;
//   account_type: string;
//   status: string;
//   profile_picture: string;
//   bio?: string;
// }

export interface UserProfile {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  profilePicture?: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}
