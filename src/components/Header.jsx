"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the menu
import { auth } from "@/auth";
import Logout from "@/components/SignOut";
import { getUsersByEmail } from "@/queries/users";

const Navbar = async () => {
  const session = await auth();
  const loggedInUser = session?.user;

  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!loggedInUser) {
    return (
      <header className="sticky top-0 z-50 bg-gray-800 text-gray-300 px-6 md:px-10 py-4 shadow-lg border-b border-gray-700">
        <div className="container mx-auto flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/engineer.png"
                alt="logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md"
              />
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">FIXIT</h1>
            </Link>
          </div>

          {/* Hamburger Menu Button for Small Screens */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={toggleMenu}
          >
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Navigation Links - Hidden on Small Screens */}
          <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row gap-3 md:gap-7 items-center text-center p-4 md:p-0">
              <li>
                <Link
                  href="/signin"
                  className="block text-lg md:text-xl font-medium py-2 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block text-lg md:text-xl font-medium py-2 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="block text-lg md:text-xl font-medium py-2 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  const user = await getUsersByEmail(loggedInUser.email);
  const profileLink = user?.service ? "/profile_em" : "/profile_cu";

  return (
    <header className="sticky top-0 z-50 custom-bg_text px-6 md:px-10 py-4 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/engineer.png"
              alt="logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">FIXIT</h1>
          </Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Profile & Logout Section - Hidden on Small Screens */}
        <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row gap-3 md:gap-5 items-center text-center p-4 md:p-0">
            <li>
              <Link
                href={profileLink}
                className="block transition-transform hover:scale-110 focus:scale-110"
                onClick={() => setMenuOpen(false)}
              >
                <img
                  src="/user.png"
                  alt="Profile"
                  className="h-10 w-10 rounded-full border-2 border-gray-400 bg-gray-700 object-cover shadow-md hover:border-gray-300 transition-all"
                />
              </Link>
            </li>
            <li>
              <Logout />
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-lg md:text-xl font-medium py-2 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
