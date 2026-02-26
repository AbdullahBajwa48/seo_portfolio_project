"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-orange-500/8 blur-[120px]" />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r
                      from-transparent via-orange-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center" ref={ref}>

        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Let's Get Started
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     leading-tight mb-6"
        >
          Ready to Grow Your Business with{" "}
          <span className="text-orange-500">SEO That Works?</span>
        </motion.h2>

        {/* ── Content ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Get a free, no-obligation SEO audit and see exactly where your website
          stands. No sales pressure. No lock-in contracts. Just honest insights
          from a Melbourne SEO agency that does things differently.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary */}
          <a
            href="/free-seo-audit"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 active:scale-95
                       text-white font-bold px-8 py-3.5 rounded transition-all duration-300
                       text-sm group inline-flex items-center justify-center gap-2"
          >
            Get Your Free SEO Audit
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          {/* Secondary */}
          <a
            href="/contact"
            className="w-full sm:w-auto border border-gray-600 hover:border-orange-500
                       text-white hover:text-orange-500 font-semibold px-8 py-3.5 rounded
                       transition-all duration-300 text-sm active:scale-95
                       inline-flex items-center justify-center gap-2"
          >
            📞 Book a Call
          </a>

          {/* Tertiary */}
          <a
            href="#"
            className="w-full sm:w-auto border border-gray-800 hover:border-gray-600
                       text-gray-400 hover:text-white font-semibold px-8 py-3.5 rounded
                       transition-all duration-300 text-sm active:scale-95
                       inline-flex items-center justify-center gap-2"
          >
            Get a Quote
          </a>
        </motion.div>

        {/* ── Trust strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-16"
        >
          {[
            "✓ No lock-in contracts",
            "✓ Free audit — no credit card",
            "✓ You own your data",
            "✓ Direct communication",
          ].map((item) => (
            <span key={item} className="text-gray-500 text-xs">
              {item}
            </span>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

        {/* ── Footer bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30
                            flex items-center justify-center">
              <span className="text-orange-500 font-bold text-sm">K</span>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Khalis Marketing</p>
              <p className="text-gray-600 text-xs">Melbourne SEO Agency</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-gray-500 text-xs">
            {["Services", "About", "Case Studies", "Free Audit", "Contact"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Khalis Marketing. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}