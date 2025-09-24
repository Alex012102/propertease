import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // 👈 import context

interface Props {
  setMessage: Dispatch<SetStateAction<string>>;
}

const SignInForm: React.FC<Props> = ({ setMessage }) => {
  const navigate = useNavigate();
  const { signIn, user } = useAuth(); // 👈 get signIn from context

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (user) navigate("/app");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password); // 👈 delegate auth logic to context
      navigate("/app");
    } catch (error: any) {
      console.error("❌ Sign-in error:", error);
      setMessage(error.message || "Sign-in failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg">
      <input
        type="email"
        placeholder="Email"
        className="w-full text-white p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full text-white p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-brand-subtle text-black rounded-lg hover:bg-brand-subtle-dark transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
