"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "312%", label: "Highest Traffic Growth" },
  { value: "5", label: "Industries Served" },
  { value: "$127K", label: "Organic Revenue Generated" },
];

export default function CaseStudiesHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col
                        justify-center overflow-hidden px-6 md:px-16 lg:px-24 pt-24 pb-16">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[500px] rounded-full bg-orange-500/5
                      blur-[140px] pointer-events-none" />

      {/* Diagonal stripe texture top-right */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg,#f97316 0,#f97316 1px,transparent 0,transparent 50%)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Orange grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Faded RESULTS background text */}
      <div className="absolute inset-0 flex items-center justify-end
                      pointer-events-none overflow-hidden pr-4">
        <span className="text-[130px] md:text-[200px] lg:text-[260px] font-extrabold
                         text-white/[0.03] select-none whitespace-nowrap leading-none
                         tracking-tight">
          RESULTS
        </span>
      </div>

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]
                      bg-gradient-to-b from-transparent via-orange-500/60 to-transparent" />

      <div className="relative z-10 max-w-5xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
            Case Studies
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     font-extrabold leading-tight mb-6"
        >
          SEO Results That{" "}
          <br className="hidden md:block" />
          <span className="relative inline-block text-orange-500">
            Speak for Themselves
            <motion.span
              initial={{ scaleX: 0 }}
              animate={visible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              style={{ originX: 0 }}
              className="absolute -bottom-1 left-0 right-0 h-[3px]
                         bg-orange-500 rounded-full"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-14"
        >
          Real strategies. Real businesses. Real growth. See how Melbourne
          businesses have increased their organic traffic, leads, and revenue
          through transparent, results-driven SEO.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap gap-0"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-5 bg-[#141414] border border-gray-800
                          hover:border-orange-500/30 transition-colors duration-300
                          ${i === 0 ? "rounded-l-xl" : ""}
                          ${i === stats.length - 1 ? "rounded-r-xl" : ""}
                          ${i !== 0 ? "border-l-0" : ""}`}
            >
              <p className="text-orange-500 font-extrabold text-2xl">{stat.value}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32
                      bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-orange-500/50 to-transparent"
        />
        <span className="text-gray-600 text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}