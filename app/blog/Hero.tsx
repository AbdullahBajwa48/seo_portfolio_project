"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] pt-32 pb-16 px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                      rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]
                      bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
            Blog
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold
                     leading-tight mb-4 max-w-2xl"
        >
          SEO Insights{" "}
          <span className="text-orange-500">&amp; Tips</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
          className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl"
        >
          Practical advice to help Melbourne businesses get found online. No
          fluff, no jargon — just actionable SEO strategies that work.
        </motion.p>
      </div>

      {/* Bottom fade into grid */}
      <div className="absolute bottom-0 left-0 right-0 h-16
                      bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}