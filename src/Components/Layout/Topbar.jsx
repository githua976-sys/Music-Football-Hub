import { Bell, Search } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

const Topbar = () => {

  const {
    logout,
    user,
  } = useAuth();

  const navigate = useNavigate();

  // Logout Function
  const handleLogout = async () => {

    await logout();

    navigate("/login");

  };

  return (

    <header className="h-20 border-b border-gray-800 bg-gray-950 px-6 flex items-center justify-between">

      {/* Search Bar */}
      <div className="flex items-center bg-gray-900 rounded-xl px-4 py-3 w-[350px]">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search songs, teams, players..."
          className="bg-transparent outline-none ml-3 text-sm text-white w-full"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative">

          <Bell
            size={22}
            className="text-gray-300 hover:text-white transition"
          />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>

        </button>

        {/* User Info */}
        <div className="text-right">

          <h3 className="text-sm font-semibold text-white">

            {user?.displayName || "Guest User"}

          </h3>

          <p className="text-xs text-gray-400">

            Logged In

          </p>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl text-white text-sm font-medium"
        >

          Logout

        </button>

        {/* Profile Avatar */}
        <img
          src={
            user?.photoURL ||
            "https://i.pravatar.cc/40"
          }
          alt="profile"
          className="w-10 h-10 rounded-full border border-gray-700"
        />

      </div>

    </header>

  );
};

export default Topbar;