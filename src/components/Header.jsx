
// src/components/Header.jsx
import React, { useState } from "react";
import Logo from "../assets/img/Logo.png";
import MS from "../assets/img/MS.png";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-14 bg-gray-200 flex items-center px-4 sm:px-6">
      <div className="container mx-auto w-full">
        <div className="flex justify-between items-center gap-4 md:gap-20">

          {/* LOGO + HAMBURGER */}
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />

            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-black p-1 rounded-md hover:bg-gray-300"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* SEARCH (DESKTOP) */}
          <div className="hidden md:block flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* NOTIFICATION + PROFILE (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-1 hover:bg-gray-300 rounded-md">
              <FaBell className="text-black size-5" />
            </button>

            <img src={MS} alt="Profile" />
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="absolute top-14 left-0 right-0 bg-gray-200 shadow-lg md:hidden z-50">
              <div className="flex flex-col p-4 space-y-4">

                {/* SEARCH (MOBILE) */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* NOTIFICATIONS (MOBILE) */}
                <div className="flex items-center gap-3 p-2 hover:bg-gray-300 rounded-md">
                  <FaBell className="text-black size-5" />
                  <span className="text-black">Notifications</span>
                </div>

                {/* PROFILE (MOBILE) */}
                <img src={MS} alt="Profile" className="w-10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;





















