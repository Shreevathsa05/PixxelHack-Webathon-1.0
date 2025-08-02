"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Category", path: "/category" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="flex justify-center px-2 sm:px-4">
      <nav className="w-full max-w-6xl lg:w-[70%] bg-black bg-opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-500 px-3 sm:px-4 rounded-3xl mx-2 sm:mx-4 mt-4 sm:mt-8">
        <div className="flex flex-wrap items-center justify-between px-2 sm:px-6 py-3 sm:py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
            <img src="/favicon.ico" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" alt="LootKart Logo" />
            <span className="self-center text-white text-lg sm:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              LootKart
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200 transition-colors duration-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:ml-auto">
            <ul className="font-medium flex flex-row space-x-4 lg:space-x-8">
              {navigationItems.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className={`block py-2 px-4 lg:px-6 rounded-full transition-all duration-200 ${
                      pathname === path
                        ? "text-white bg-cyan-500 bg-opacity-30 shadow-[0_0_15px_rgba(6,182,212,0.8)] border border-cyan-400 border-opacity-50"
                        : "text-gray-600 hover:text-white hover:bg-gray-800 hover:bg-opacity-50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:hidden border-t border-gray-700 border-opacity-50`}
        >
          <ul className="font-medium flex flex-col space-y-2 px-2 sm:px-6 py-4">
            {navigationItems.map(({ label, path }) => (
              <li key={label}>
                <Link
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                    pathname === path
                      ? "text-white bg-cyan-500 bg-opacity-30 shadow-[0_0_15px_rgba(6,182,212,0.8)] border border-cyan-400 border-opacity-50"
                      : "text-gray-600 hover:text-white hover:bg-gray-800 hover:bg-opacity-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}