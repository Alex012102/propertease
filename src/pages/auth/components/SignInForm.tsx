import { useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../../api/supabaseClient";

interface Props {
  setMessage: Dispatch<SetStateAction<string>>
}

const SignInForm: React.FC<Props> = ({ setMessage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("🚀 Attempting sign in...");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // console.log("🧾 Full sign-in response:", { data, error });

    if (error) {
      // console.error("❌ Sign-in error:", error.message);
      setMessage(error.message);
      return;
    }

    if (data?.session) {
      // console.log("✅ Session created:", data.session);
      navigate("/app/");
    } else {
      console.warn("⚠️ No session returned even though no error");
    }
  };

  supabase.auth.getSession().then(({ data, error }) => {
    console.log("🔍 Manual session check outside useEffect:", { data, error });
  });

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
