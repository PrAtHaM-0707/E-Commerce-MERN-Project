import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">MyShop</h2>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/myproducts" className="hover:text-gray-400">My Products</Link></li>
        <li><Link to="/create-product" className="hover:text-gray-400">Add Product</Link></li>
        <li><Link to="/cart" className="hover:text-gray-400">Cart</Link></li>
        <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
        <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
        <li><Link to="/signup" className="hover:text-gray-400">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;