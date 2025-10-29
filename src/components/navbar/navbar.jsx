// ...existing code...
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500 to-violet-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-lg font-semibold px-3 py-2 rounded-md hover:opacity-90 focus:outline-none transition-opacity duration-150 inline-flex items-center"
            aria-label="Home"
          >
            <i className="fa-solid fa-house mr-2" aria-hidden="true"></i>
            CEFR English Test Platform
          </Link>

          <ul className="hidden md:flex items-center space-x-2">
            <li>
              <Link
                to="/about"
                className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-150 inline-flex items-center"
              >
                <i className="fa-solid fa-house-chimney mr-2" aria-hidden="true"></i>
                Home
              </Link>
            </li>

            {/* Tests with hover dropdown (desktop) */}
            <li className="relative group">
              <Link
                to="/tests"
                className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-150 inline-flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
              >
                <i className="fa-solid fa-list mr-2" aria-hidden="true"></i>
                Tests
                <span className="ml-1 text-xs">▾</span>
              </Link>

              {/* Dropdown window: visible on hover or focus-within */}
              <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transform scale-95 group-hover:scale-100 group-focus-within:scale-100 transition-all duration-150 z-50">
                <Link
                  to="/tests/all"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i className="fa-solid fa-list-check mr-2" aria-hidden="true"></i>
                  All Tests
                </Link>
                <Link
                  to="/tests/reading"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i className="fa-solid fa-book mr-2" aria-hidden="true"></i>
                  Reading
                </Link>
                <Link
                  to="/tests/listening"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i className="fa-solid fa-headphones mr-2" aria-hidden="true"></i>
                  Listening
                </Link>
                <Link
                  to="/tests/writing"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i className="fa-solid fa-pen mr-2" aria-hidden="true"></i>
                  Writing
                </Link>
                <Link
                  to="/tests/speaking"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                >
                  <i className="fa-solid fa-microphone mr-2" aria-hidden="true"></i>
                  Speaking
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/results"
                className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-150 inline-flex items-center"
              >
                <i className="fa-solid fa-chart-line mr-2" aria-hidden="true"></i>
                Results
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-150 inline-flex items-center"
              >
                <i className="fa-solid fa-circle-info mr-2" aria-hidden="true"></i>
                About
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden text-gray-300 hover:text-white hover:bg-white/10 px-2 py-2 rounded-md focus:outline-none transition-colors duration-150"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-colors duration-150 focus:outline-none inline-flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <i className="fa-solid fa-house-chimney mr-2" aria-hidden="true"></i>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-colors duration-150 focus:outline-none inline-flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <i className="fa-solid fa-briefcase mr-2" aria-hidden="true"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-gray-300 font-medium hover:text-white hover:bg-white/10 transition-colors duration-150 focus:outline-none inline-flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <i className="fa-solid fa-envelope mr-2" aria-hidden="true"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
// ...existing code...