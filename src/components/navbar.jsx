import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../utils/navbar";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/svg/law_marshal_logo.svg" alt="Logo" className="h-10" />
              <span className="font-bold text-2xl ml-2">Law Marshal</span>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-700 transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className="text-base font-medium hover:text-yellow-400 transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Join Now Button */}
          <Link
            to="/"
            className="hidden lg:inline-flex px-6 py-3 text-base font-semibold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all duration-200"
          >
            Join Now
          </Link>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg rounded-md mt-2"
        >
          <div className="flex flex-col space-y-2 p-4">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-yellow-400 transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;