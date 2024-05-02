// Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl p-3">Navbar</h1>
        <Link to="/">
        <h1 className="text-white text-xl bg-blue-600 rounded-lg p-3">Home</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
