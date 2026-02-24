"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  theme?: "dark" | "light";
}

const navLinks = [
  { label: "Home",         href: "/"             },
  { label: "Services",     href: "/services"     },
  { label: "About Me",     href: "/about"        },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Locations",    href: "/locations"    },
  { label: "Blog",         href: "/blog"    },
  { label: "contact",      href: "/contact"    },
  { label: "Free Audit",      href: "/contact"    },

];

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isLight = theme === "light";

  const navBg = scrolled
    ? isLight
      ? "backdrop-blur-md bg-white/80 border-b border-gray-200"
      : "backdrop-blur-md bg-black/50 border-b border-white/5"
    : "bg-transparent";

  const linkColor = isLight
    ? "text-gray-800 hover:text-orange-500"
    : "text-gray-300 hover:text-orange-400";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="mx-auto px-6 md:px-16 lg:px-24
                        flex items-center justify-between w-full h-16 md:h-20">

          {/* Logo */}
          <Link href="/"
            className="text-orange-500 font-extrabold text-xl tracking-tight shrink-0">
            <span className="bg-white p-2 rounded-md">Khalis</span> Marketing
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            {/* Hire Me — always visible */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600
                         active:scale-95 text-white font-semibold px-5 py-2
                         rounded text-sm transition-all duration-300"
            >
              Hire Me
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center
                         w-9 h-9 gap-1.5 rounded focus:outline-none"
            >
              <motion.span
                animate={menuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-orange-500 rounded-full origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-orange-500 rounded-full"
              />
              <motion.span
                animate={menuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-0.5 bg-orange-500 rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden
                         bg-[#0f0f0f] border-b border-gray-800"
            >
              <div className="px-6 py-6 flex flex-col gap-1">

                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3.5
                                 border-b border-gray-800/60 last:border-0
                                 text-gray-200 hover:text-orange-400
                                 font-medium text-base transition-colors duration-300 group"
                    >
                      {link.label}
                      <span className="text-gray-700 group-hover:text-orange-400
                                       group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.06 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full bg-orange-500 hover:bg-orange-600
                               text-white font-bold py-3.5 rounded text-center
                               text-sm transition-all duration-300 active:scale-95"
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}