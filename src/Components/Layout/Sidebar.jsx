import React from 'react'
import { FaFutbol, FaHeart, FaHome, FaInfoCircle, FaMusic } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const links = [ { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/music", label: "Music", icon: <FaMusic /> },
    { to: "/football", label: "Football", icon: <FaFutbol /> },
    { to: "/favorites", label: "Favorites", icon: <FaHeart /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },];
  return (
    <aside>
         <h1 className="text-2xl font-bold text-green-500 mb-10">
                M&F Hub
            </h1>
        <nav className="space-y-3">
              {links.map((link) => (
                <NavLink
                key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-green-500 text-black"
                  : "hover:bg-gray-800"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
        </nav>
    </aside>
  );
};

export default Sidebar