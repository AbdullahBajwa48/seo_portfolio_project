"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CaseStudiesCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-orange-500/8 blur-[120px]" />
      </div>

      {/* Large faded background text */}
      <div className="absolute inset-0 flex items-center justify-center
                      pointer-events-none overflow-hidden">
        <span className="text-[160px] md:text-[220px] font-extrabold text-white/[0.03]
                         select-none whitespace-nowrap leading-none">
          NEXT
        </span>
      </div>

      {/* Left black accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500/30" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
            Your Turn
          </span>
          <div className="w-8 h-px bg-orange-500" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     leading-tight mb-5"
        >
          Ready to Be the{" "}
          <span className="text-orange-500">Next Success Story?</span>
        </motion.h2>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          Every case study started with a conversation. Let's talk about your
          business, your goals, and how SEO can get you there.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600
                       active:scale-95 text-white font-bold px-8 py-3.5 rounded
                       transition-all duration-300 text-sm inline-flex items-center
                       justify-center gap-2 group"
          >
            Get Your Free SEO Audit
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto border border-gray-600 hover:border-orange-500
                       text-white hover:text-orange-400 font-semibold px-8 py-3.5
                       rounded transition-all duration-300 text-sm active:scale-95
                       inline-flex items-center justify-center gap-2"
          >
            📞 Book a Call with Bhavleen
          </a>
          <a
            href="#"
            className="w-full sm:w-auto border border-gray-700 hover:border-gray-500
                       text-gray-400 hover:text-white font-semibold px-8 py-3.5 rounded
                       transition-all duration-300 text-sm active:scale-95
                       inline-flex items-center justify-center"
          >
            Get a Quote
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2
                     pt-8 border-t border-gray-800"
        >
          {[
            "✓ No lock-in contracts",
            "✓ Free, honest audit",
            "✓ Direct access to Bhavleen",
            "✓ You own your data",
          ].map((item) => (
            <span key={item} className="text-gray-600 text-xs">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}