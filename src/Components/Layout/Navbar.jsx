import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/music">Music</Link>
      <Link to="/football">Football</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;