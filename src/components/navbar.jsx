import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../utils/navbar";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-opacity duration-300 bg-black">
      <div className="">
        {/* <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/headers/3/coworking-space.jpg"
            alt
          />
        </div> */}

        <div className="bg-black" />
        <div className="px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link
                to="/"
                title
                className="flex gap-2 items-center justify-center"
              >
                <img
                  className="h-auto"
                  src="/svg/law_marshal_logo.svg"
                  alt="N/A"
                  width={35}
                />
                <span className="font-semibold text-xl">Law Marshal</span>
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {NavLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    title
                    className="text-base font-medium text-white"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            <Link
              to="/"
              title
              className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full lg:inline-flex hover:bg-yellow-500 focus:bg-yellow-500"
              role="button"
            >
              {" "}
              Join Now
            </Link>
          </nav>
        </div>
      </div>
      {/* xs to lg */}
    </header>
  );
};

export default Navbar;
