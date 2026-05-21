import { Bell, Search, User, LogOut } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../Context/AuthContext";

const Topbar = () => {

  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

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

        {/* Account / Avatar */}
        <div className="relative">

          <button
            onClick={() => setShowMenu((s) => !s)}
            aria-haspopup="true"
            aria-expanded={showMenu}
            className="flex items-center gap-3 bg-gray-800 px-3 py-2 rounded-xl hover:bg-gray-700 transition"
          >

            <User size={18} className="text-gray-200" />

            <img
              src={user?.photoURL || "https://i.pravatar.cc/40"}
              alt="profile"
              className="w-8 h-8 rounded-full border border-gray-700"
            />

          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg py-2 z-50">

              <button
                onClick={() => {
                  setShowMenu(false);
                  handleLogout();
                }}
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 flex items-center gap-2"
              >
                <LogOut size={16} /> Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </header>

  );
};

export default Topbar;