"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OnPageSeoCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-orange-500/6 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-[#141414] border border-gray-800 rounded-2xl
                        p-10 md:p-16 text-center relative overflow-hidden">

          <div className="absolute top-0 left-0 w-24 h-24
                          bg-gradient-to-br from-orange-500/15 to-transparent rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24
                          bg-gradient-to-tl from-orange-500/10 to-transparent rounded-br-2xl" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4"
          >
            Free SEO Audit
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                       leading-tight mb-6"
          >
            Let&apos;s Optimise Your Pages{" "}
            <span className="text-orange-500">for Search</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-3"
          >
            Find out how well your pages are optimised — and what&apos;s holding them back.
            Get a free audit and I&apos;ll show you exactly where the opportunities are.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
            className="text-white font-semibold text-sm mb-10"
          >
            No obligations. No pressure. Just straight answers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="/free-seo-audit"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 active:scale-95
                         text-white font-bold px-8 py-3.5 rounded transition-all duration-300
                         text-sm inline-flex items-center justify-center gap-2 group"
            >
              Get Your Free SEO Audit
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto border border-gray-600 hover:border-orange-500
                         text-white hover:text-orange-400 font-semibold px-8 py-3.5 rounded
                         transition-all duration-300 text-sm active:scale-95
                         inline-flex items-center justify-center gap-2"
            >
              📞 Book a Call with Bhavleen
            </a>
            <a
              href="#"
              className="w-full sm:w-auto border border-gray-800 hover:border-gray-600
                         text-gray-400 hover:text-white font-semibold px-8 py-3.5 rounded
                         transition-all duration-300 text-sm active:scale-95
                         inline-flex items-center justify-center"
            >
              Get a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2
                       pt-8 border-t border-gray-800"
          >
            {["✓ No lock-in contracts", "✓ Free, honest audit", "✓ Direct access to Bhavleen", "✓ You own your data"].map((item) => (
              <span key={item} className="text-gray-600 text-xs">{item}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}