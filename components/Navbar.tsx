// components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent px-8 py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="text-orange-500 text-2xl font-bold"> <span className="bg-white p-2 rounded-md">khalis</span> Marketing</div>

      {/* Menu Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li className="hover:text-orange-500 cursor-pointer transition">Home</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Services</li>
        <li className="hover:text-orange-500 cursor-pointer transition">About Me</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Portfolio</li>
        <li className="hover:text-orange-500 cursor-pointer transition">Contact Me</li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          Hire Me
        </button>
      </div>

      {/* Mobile menu placeholder (optional) */}
    </nav>
  );
}