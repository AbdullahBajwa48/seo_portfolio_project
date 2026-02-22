"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LocationsCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]
                      bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-24">

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

          {/* Left — headline + content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                Get Started
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                         leading-tight mb-6"
            >
              Ready to Rank in{" "}
              <span className="text-orange-500">Your Local Area?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-gray-400 text-base leading-relaxed max-w-lg"
            >
              Find out how visible your business is in local search. Get a free
              audit and I'll show you exactly where you stand — and what it
              takes to outrank your local competitors.
            </motion.p>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col gap-4">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white
                         font-bold px-8 py-4 rounded transition-all duration-300
                         text-sm inline-flex items-center justify-between gap-4 group"
            >
              Get Your Free Local SEO Audit
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">
                →
              </span>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="border border-gray-700 hover:border-orange-500 text-white
                         hover:text-orange-400 font-semibold px-8 py-4 rounded
                         transition-all duration-300 text-sm active:scale-95
                         inline-flex items-center justify-between gap-4 group"
            >
              Book a Call with Bhavleen
              <span className="text-gray-600 group-hover:text-orange-400
                               group-hover:translate-x-1 transition-all duration-300 text-lg">
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* Footer bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="flex flex-col md:flex-row items-center justify-between
                     gap-4 mt-20 pt-8 border-t border-gray-800/60 text-xs"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30
                            flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xs">K</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Khalis Marketing</p>
              <p className="text-gray-600 text-xs">Melbourne SEO Agency</p>
            </div>
          </div>

          {/* Suburb links */}
          <div className="flex items-center gap-5 text-gray-600">
            {["Werribee", "Hoppers Crossing", "Tarneit", "Melton"].map((s) => (
              <a key={s} href={`/locations/${s.toLowerCase().replace(" ", "-")}`}
                className="hover:text-orange-500 transition-colors duration-300">
                {s}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-700">
            © {new Date().getFullYear()} Khalis Marketing
          </p>
        </motion.div>
      </div>
    </section>
  );
}