// components/Navbar.tsx
"use client";
interface NavbarProps{
  theme?:"light" | "dark";
}

import React from "react";
import {useEffect,  useState } from "react";
import Link from "next/link";

export default function Navbar({theme = "dark"}: NavbarProps) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <nav className={`w-full fixed top-0 left-0 z-50 bg-transparent px-8 py-5 flex justify-between items-center ${scrolled ? "bg-black/40 backdrop-blur-md" : ""}`}>
      {/* Logo */}
      <div className="text-orange-500 text-2xl font-bold"> <span className="bg-white p-2 rounded-md">khalis</span> Marketing</div>

      {/* Menu Links */}

      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li className="hover:text-orange-500 transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/about">About Me</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/locations">Locations</Link>
        </li>
        <li className="hover:text-orange-500 transition">
          <Link href="/case-studies">Case Studies</Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          
          <Link href="/about">Hire Me</Link>
        </button>
      </div>

      {/* Mobile menu placeholder (optional) */}
    </nav>
  );
}