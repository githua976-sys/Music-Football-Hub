import { FcGoogle } from "react-icons/fc";

import { Music, Trophy } from "lucide-react";

import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {

  const { googleSignIn } = useAuth();

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

            Welcome Back

          </h1>

          <p className="text-gray-400 mt-4">

            Login to Music Football Hub

          </p>

        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Email */}
          <div>

            <label className="text-sm text-gray-300">

              Email

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
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
              className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-green-500"
            />

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-xl text-white font-semibold"
          >

            Login

          </button>

        </form>

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
          onClick={googleSignIn}
          className="w-full bg-white text-black py-4 rounded-2xl flex items-center justify-center gap-4 font-semibold hover:scale-105 transition-all duration-300"
        >

          <FcGoogle size={28} />

          Continue with Google

        </button>

      </div>

    </div>

  );
};

export default LoginPage;