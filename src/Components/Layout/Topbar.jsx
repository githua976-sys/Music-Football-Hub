import { Bell, Search, User, LogOut, Sun, Moon } from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../Context/AuthContext";
import { useTheme } from "../../Context/ThemeContext";

const Topbar = () => {

  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Logout Function
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleTopbarSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;

    const targetPath = location.pathname.startsWith("/football")
      ? "/football"
      : "/music";

    navigate(`${targetPath}?query=${encodeURIComponent(query)}`);
  };

  return (

    <header className="h-20 border-b theme-border theme-surface px-6 flex items-center justify-between">

      {/* Search Bar */}
      <form onSubmit={handleTopbarSearch} className="flex items-center theme-card rounded-xl px-4 py-3 w-[350px] border border-gray-800">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search songs, teams, players..."
          className="bg-transparent outline-none ml-3 text-sm text-white w-full theme-input"
        />

      </form>

      {/* Right Section */}
      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full bg-gray-800 p-2 text-gray-300 hover:bg-gray-700 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

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