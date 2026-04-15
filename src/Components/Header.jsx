import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "relative font-medium text-gray-800 hover:text-[#1e3a8a] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#1e3a8a] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-12 md:h-14" />
          <h1 className="hidden md:block font-semibold text-lg text-gray-800">
            Aditya Enterprises
          </h1>
        </div>

        {/* Nav */}
        <nav
              className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#f8fafc] md:bg-transparent flex-col md:flex-row md:flex gap-6 md:gap-8 p-5 md:p-0 ${
                menuOpen ? "flex" : "hidden"
              } md:flex`}
            >

              {/* Home */}
              <Link to="/" className={`flex items-center gap-2 ${navLink}`} onClick={() => setMenuOpen(false)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>
                </svg>
                Home
              </Link>

              {/* About */}
              <Link to="/about" className={`flex items-center gap-2 ${navLink}`} onClick={() => setMenuOpen(false)}>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        {/* Head */}
                        <circle cx="12" cy="8" r="3" />

                        {/* Body */}
                        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                      </svg>
                About Us
              </Link>

              {/* Products */}
              <Link to="/products" className={`flex items-center gap-2 ${navLink}`} onClick={() => setMenuOpen(false)}>
                <svg
  
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      {/* Box Top */}
                      <path
                        d="M3 7l9 5 9-5-9-5-9 5z"
                        fill="currentColor"
                        opacity="0.6"
                      />

                      {/* Box Left */}
                      <path
                        d="M3 7v10l9 5V12L3 7z"
                        fill="currentColor"
                        opacity="0.8"
                      />

                      {/* Box Right */}
                      <path
                        d="M21 7v10l-9 5V12l9-5z"
                        fill="currentColor"
                        opacity="1"
                      />
                    </svg>
                Products
              </Link>

              {/* Services */}
              <Link to="/services" className={`flex items-center gap-2 ${navLink}`} onClick={() => setMenuOpen(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    {/* Gear Outer */}
                    <circle cx="12" cy="12" r="3" />

                    {/* Teeth */}
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />

                    {/* Outer Ring */}
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                Services
              </Link>

              {/* Contact */}
              {/* Contact - Highlighted */}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 bg-[#ff6b4a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e55a3c] transition shadow-md"
                >
                  {/* Icon */}
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 7l9 6 9-6" />
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                </svg>

                  Contact
                </Link>

              {/* Mobile Store Locator */}
              <a
                href="https://www.google.com/maps?q=Mahaveer+Mandir+Pirari"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#162d6b] transition mt-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2.5"/>
                </svg>
                Get Directions
              </a>

            </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop Store Locator */}
          <a
            href="https://www.google.com/maps/place/ADITYA+ENTERPRISES/@25.8519751,84.9612428,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed4d36473e5e45:0xfd4d663faee9e7b0!8m2!3d25.8519751!4d84.9612428!16s%2Fg%2F11xf9x8107?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#162d6b] transition duration-300 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
              />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            Get Directions
          </a>

          {/* Hamburger */}
          <div
            className="md:hidden text-2xl cursor-pointer text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;