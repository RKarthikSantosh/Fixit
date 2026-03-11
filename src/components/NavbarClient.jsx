"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logout from "@/components/SignOut";

const NavbarClient = ({ loggedInUser, profileLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-gray-300 px-6 md:px-10 py-4 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/engineer.png" alt="logo" className="h-10 w-10 md:h-12 md:w-12 object-contain drop-shadow-md" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">FIXIT</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-7 items-center p-4 md:p-0">
            {!loggedInUser ? (
              <>
                <li>
                  <Link href="/signin" className="font-medium text-xl py-2 px-3 rounded-md hover:bg-gray-700">Sign In</Link>
                </li>
                <li>
                  <Link href="/signup" className="font-medium text-xl py-2 px-3 rounded-md hover:bg-gray-700">Sign Up</Link>
                </li>
                <li>
                  <Link href="/contact" className="font-medium text-xl py-2 px-3 rounded-md hover:bg-gray-700">About Us</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    href="/aboutUs" 
                    className="block text-lg md:text-xl font-medium py-2 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={profileLink} className="transition-transform hover:scale-110">
                    <img src="/user.png" alt="Profile" className="h-10 w-10 rounded-full border-2 border-gray-400 bg-gray-700 object-cover shadow-md" />
                  </Link>
                </li>
                <li>
                  <Logout />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarClient;
