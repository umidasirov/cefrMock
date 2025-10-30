import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "./data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500 to-violet-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-lg font-semibold inline-flex items-center"
          >
            <i className="fa-solid fa-house mr-2" />
            CEFR English Test Platform
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative group">
                  <Link
                    to={link.path}
                    className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 inline-flex items-center"
                  >
                    <i className={`fa-solid ${link.icon} mr-2`} />
                    {link.label} ▾
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 inline-flex items-center"
                      >
                        <i className={`fa-solid ${item.icon} mr-2`} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-300 px-3 py-2 rounded-md font-medium hover:text-white hover:bg-white/10 inline-flex items-center"
                  >
                    <i className={`fa-solid ${link.icon} mr-2`} />
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md"
            onClick={() => setOpen(!open)}
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 inline-flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      <i className={`fa-solid ${item.icon} mr-2`} />
                      {item.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 inline-flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <i className={`fa-solid ${link.icon} mr-2`} />
                    {link.label}
                  </Link>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
