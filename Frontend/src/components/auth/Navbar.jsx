import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold">
        <Link to="/" className="hover:text-gray-400">MyShop</Link>
      </h2>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/myproducts" className="hover:text-gray-400" aria-label="My Products">
            My Products
          </Link>
        </li>
        <li>
          <Link to="/create-product" className="hover:text-gray-400" aria-label="Add Product">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-gray-400" aria-label="Cart">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-400" aria-label="Profile">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/my-orders" className="hover:text-gray-400" aria-label="My Orders">
            My Orders
          </Link>
        </li> {/* Add this */}
        <li>
          <Link to="/login" className="hover:text-gray-400" aria-label="Login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-gray-400" aria-label="Sign Up">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;