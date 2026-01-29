import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#0c0c1d] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Maxzen" className="w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-white">Maxzen</h2>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            High-level flexibility and balanced structure enhance performance; 
            proper guidance strengthens the foundation.
          </p>
          <div className="flex gap-3">
            <a className="border border-gray-500 p-2 rounded-md hover:bg-blue-600 hover:border-blue-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="border border-gray-500 p-2 rounded-md hover:bg-blue-600 hover:border-blue-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="border border-gray-500 p-2 rounded-md hover:bg-blue-600 hover:border-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a className="border border-gray-500 p-2 rounded-md hover:bg-blue-600 hover:border-blue-600 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Our Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <ChevronRight size={16} /> IT Management
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <ChevronRight size={16} /> SEO Optimization
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <ChevronRight size={16} /> Web Development
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <ChevronRight size={16} /> Cyber Security
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <ChevronRight size={16} /> Data Security
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Sign up for news & updates.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full mb-4 p-3 rounded-md outline-none bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:border-blue-500"
          />
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition">
            SUBSCRIBE NOW
          </button>
        </div>

        {/* Policies Column */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Policies & Legal
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm">

            <li>
              <Link 
                to="/privacy-policy" 
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link 
                to="/cookie-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link 
                to="/terms-conditions"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link 
                to="/disclaimer"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Disclaimer
              </Link>
            </li>

            <li>
              <Link 
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                Contact Us
              </Link>
            </li>

          </ul>


        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 text-gray-400 text-sm">
        <p>© All Copyright 2024 by Maxzen</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition">Terms & Condition</a>
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
