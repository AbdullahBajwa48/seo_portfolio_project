"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WebDesignHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full
                      bg-orange-500/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24
                      bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30
                         rounded-full px-4 py-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
                Website Design — Melbourne
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            >
              Website Design Melbourne —{" "}
              <span className="text-orange-500">Built to Rank, Built to Convert</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-gray-300 text-base leading-relaxed mb-3 max-w-lg"
            >
              Most websites look good but fail at SEO. I design websites with search
              visibility and conversions baked in from day one — so you don&apos;t need
              to fix it later.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.27 }}
              className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg"
            >
              A beautiful website means nothing if no one finds it. I build websites that
              are fast, mobile-friendly, SEO-optimised, and designed to turn visitors
              into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#"
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white
                           font-bold px-7 py-3.5 rounded transition-all duration-300 text-sm
                           inline-flex items-center justify-center gap-2 group"
              >
                Get a Free Website Consultation
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="#"
                className="border border-gray-600 hover:border-orange-500 text-white
                           hover:text-orange-400 font-semibold px-7 py-3.5 rounded
                           transition-all duration-300 text-sm active:scale-95
                           inline-flex items-center justify-center"
              >
                📞 Book a Call
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {["✓ SEO built in from day one", "✓ Mobile-first design", "✓ Fast & lightweight", "✓ No lock-in contracts"].map((item) => (
                <span key={item} className="text-gray-600 text-xs">{item}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "<2s", label: "Average page load time" },
              { value: "100%", label: "Mobile responsive on all devices" },
              { value: "3–6", label: "Weeks from kickoff to launch" },
              { value: "Day 1", label: "SEO configured before launch" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#141414] border border-gray-800 rounded-2xl p-6
                           hover:border-orange-500/30 transition-colors duration-300"
              >
                <p className="text-orange-500 font-extrabold text-3xl mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}