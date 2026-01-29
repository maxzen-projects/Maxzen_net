import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black text-white transition-all duration-500 ${
          scrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-6">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">

          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-contain"
            />
            <span className="text-2xl font-bold tracking-wide">Maxzen</span>
          </div>
          </Link>

          {/* MAIN NAVIGATION */}
          <nav className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">

            <NavLink to="/about"
              className={
                location.pathname.startsWith("/about")
                  ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-400"
              }>
              ABOUT US
            </NavLink>

            {/* WHAT WE DO dropdown */}
            <div className="relative group">
              <button
                className={
                  location.pathname.startsWith("/what-we-do")
                    ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-400"
                }
              >
                WHAT WE DO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className={`w-3 h-3 ml-2 inline-block transform transition-transform duration-200 ${location.pathname.startsWith("/what-we-do") ? "rotate-180" : ""} group-hover:rotate-180`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-3 w-44 bg-[#0d0d0d] rounded shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                <NavLink to="/what-we-do/products" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  PRODUCTS
                </NavLink>
                <NavLink to="/what-we-do/solutions" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  SOLUTIONS
                </NavLink>
                <NavLink to="/what-we-do/services" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  SERVICES
                </NavLink>
              </div>
            </div>

            {/* WHO WE SERVE dropdown */}
            <div className="relative group">
              <button
                className={
                  location.pathname.startsWith("/who-we-serve")
                    ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-400"
                }
              >
                WHO WE SERVE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className={`w-3 h-3 ml-2 inline-block transform transition-transform duration-200 ${location.pathname.startsWith("/who-we-serve") ? "rotate-180" : ""} group-hover:rotate-180`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-3 w-56 bg-[#0d0d0d] rounded shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                <NavLink to="/who-we-serve/telecom" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  TELECOM
                </NavLink>
                <NavLink to="/who-we-serve/healthcare" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  HEALTHCARE
                </NavLink>
                <NavLink to="/who-we-serve/bfsi" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  BFSI
                </NavLink>
                <NavLink to="/who-we-serve/pharma" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  PHARMA
                </NavLink>
                <NavLink to="/who-we-serve/logistics" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  LOGISTICS
                </NavLink>
                <NavLink to="/who-we-serve/media" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  MEDIA
                </NavLink>
                <NavLink to="/who-we-serve/education" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  EDUCATION
                </NavLink>
              </div>
            </div>

            <NavLink to="/why-us"
              className={
                location.pathname.startsWith("/why-us")
                  ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-400"
              }>
              WHY US
            </NavLink>

            <NavLink to="/social-good"
              className={
                location.pathname.startsWith("/social-good")
                  ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-400"
              }>
              SOCIAL GOOD
            </NavLink>

            {/* RESOURCES dropdown */}
            <div className="relative group">
              <button
                className={
                  location.pathname.startsWith("/resources")
                    ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                    : "hover:text-blue-400"
                }
              >
                RESOURCES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className={`w-3 h-3 ml-2 inline-block transform transition-transform duration-200 ${location.pathname.startsWith("/resources") ? "rotate-180" : ""} group-hover:rotate-180`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-3 w-44 bg-[#0d0d0d] rounded shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                <NavLink to="/resources/Blogs" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  BLOGS
                </NavLink>
                <NavLink to="/resources/media-room" className={({isActive}) => isActive ? "block px-4 py-2 text-white" : "block px-4 py-2 text-gray-300 hover:text-white"}>
                  MEDIA ROOM
                </NavLink>
              </div>
            </div>

            <NavLink to="/career"
              className={
                location.pathname.startsWith("/careers")
                  ? "text-blue-400 border-b-2 border-blue-500 pb-1"
                  : "hover:text-blue-400"
              }>
              CAREERS
            </NavLink>

          </nav>

          {/* CONNECT BUTTON */}
          <button
            onClick={() => navigate("/connect")}
            className="border border-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            CONNECT
          </button>
        </div>

        
        {/* Sticky subheader removed — dropdowns used in main nav now */}

      </header>
    </>
  );
}