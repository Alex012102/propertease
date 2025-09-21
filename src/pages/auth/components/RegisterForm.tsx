import type { Dispatch, SetStateAction } from "react";
import React, { useState } from "react";

import supabase from "../../../api/supabaseClient";

interface Props {
  setMessage: Dispatch<SetStateAction<string>>;
}

const RegisterForm: React.FC<Props> = ({ setMessage }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User account created!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg">
      <input
        type="email"
        placeholder="Email"
        className="w-full text-black p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full text-black p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-brand-subtle text-black rounded-lg hover:bg-brand-subtle-dark transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
