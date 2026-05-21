import { FcGoogle } from "react-icons/fc";

import { Music, Trophy } from "lucide-react";

import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

const LoginPage = () => {

  const { googleSignIn } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log(isSignUp ? "Sign up" : "Login", { email, password });
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");
      await googleSignIn();
    } catch (err) {
      setError(err.message || "Google sign-in failed. Please try again.");
      console.error("Google sign-in error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-gray-900 rounded-3xl p-10 shadow-2xl">

        {/* Logo */}
        <div className="flex items-center justify-center gap-4">

          <Music
            className="text-green-400"
            size={40}
          />

          <Trophy
            className="text-blue-400"
            size={40}
          />

        </div>

        {/* Heading */}
        <div className="text-center mt-6">

          <h1 className="text-4xl font-bold text-white">

            {isSignUp ? "Join Us" : "Welcome Back"}

          </h1>

          <p className="text-gray-400 mt-4">

            {isSignUp ? "Create an account to Music Football Hub" : "Login to Music Football Hub"}

          </p>

        </div>

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email */}
          <div>

            <label className="text-sm text-gray-300">

              Email

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
              required
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-sm text-gray-300">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
              required
            />

          </div>

          {/* Confirm Password (Sign Up only) */}
          {isSignUp && (
            <div>

              <label className="text-sm text-gray-300">

                Confirm Password

              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
                required
              />

            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed transition py-3 rounded-xl text-white font-semibold"
          >

            {loading ? "Processing..." : (isSignUp ? "Sign Up" : "Login")}

          </button>

        </form>

        {/* Toggle Link */}
        <div className="text-center mt-6">

          <p className="text-gray-400 text-sm">

            {isSignUp ? "Already have an account?" : "Don't have an account?"}

            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setError("");
              }}
              type="button"
              className="text-green-400 ml-2 hover:underline font-semibold"
            >

              {isSignUp ? "Login" : "Sign Up"}

            </button>

          </p>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">

          <div className="flex-1 h-[1px] bg-gray-700"></div>

          <span className="text-gray-400 text-sm">

            OR

          </span>

          <div className="flex-1 h-[1px] bg-gray-700"></div>

        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          type="button"
          className="w-full bg-white text-black py-4 rounded-2xl flex items-center justify-center gap-4 font-semibold hover:scale-105 hover:bg-gray-100 disabled:hover:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
        >

          <FcGoogle size={28} />

          {loading ? "Signing in..." : "Continue with Google"}

        </button>

      </div>

    </div>

  );
};

export default LoginPage;