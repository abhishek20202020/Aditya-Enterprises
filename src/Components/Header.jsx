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
          <Link to="/" className={navLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={navLink} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/products" className={navLink} onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/categories" className={navLink} onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/contact" className={navLink} onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Mobile Store Locator */}
          <a
            href="https://www.google.com/maps?rlz=1C1ONGR_enIN1187IN1187&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyEAgCEC4YxwEYsQMY0QMYgAQyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg0MDM0ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUVePkc2Te05MbDn6a4_Zk39&daddr=Mahaveer+Mandir,+Pirari+Near+Pirari+Pul,+Bihar+841222"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#162d6b] transition duration-300 mt-4"
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
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop Store Locator */}
          <a
            href="https://www.google.com/maps?rlz=1C1ONGR_enIN1187IN1187&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyEAgCEC4YxwEYsQMY0QMYgAQyCggDEC4YsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg0MDM0ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUVePkc2Te05MbDn6a4_Zk39&daddr=Mahaveer+Mandir,+Pirari+Near+Pirari+Pul,+Bihar+841222"
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