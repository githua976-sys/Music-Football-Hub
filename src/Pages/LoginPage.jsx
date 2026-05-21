import { FcGoogle } from "react-icons/fc";

import { Music, Trophy } from "lucide-react";

import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {

  const { googleSignIn } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-gray-900 rounded-3xl p-10 shadow-2xl">

        {/* Icons */}
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

            Welcome Back

          </h1>

          <p className="text-gray-400 mt-4">

            Sign in to continue

          </p>

        </div>

        {/* Google Button */}
        <button
          onClick={googleSignIn}
          className="w-full mt-10 bg-white text-black py-4 rounded-2xl flex items-center justify-center gap-4 font-semibold hover:scale-105 transition-all duration-300"
        >

          <FcGoogle size={28} />

          Continue with Google

        </button>

      </div>

    </div>
  );
};

export default LoginPage;