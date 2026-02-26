"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WordPressSeoHero() {
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
      <div className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full
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
                WordPress SEO — Melbourne
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-5"
            >
              WordPress SEO Melbourne —{" "}
              <span className="text-orange-500">Get More From the World&apos;s Most Popular CMS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-gray-300 text-base leading-relaxed mb-3 max-w-lg"
            >
              WordPress powers over 40% of the web — but most sites barely scratch the
              surface of its SEO potential. I help Melbourne businesses unlock what
              WordPress can really do for organic search.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.27 }}
              className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg"
            >
              WordPress is incredibly SEO-friendly when configured correctly. The
              problem is, most sites aren&apos;t. I optimise your WordPress website for
              speed, structure, and search visibility — turning a good platform into
              a ranking machine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="/free-seo-audit"
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white
                           font-bold px-7 py-3.5 rounded transition-all duration-300 text-sm
                           inline-flex items-center justify-center gap-2 group"
              >
                Get Your Free Wordpress SEO Audit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/contact"
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
              {["✓ All plugins supported", "✓ WooCommerce ready", "✓ Speed optimisation", "✓ No lock-in contracts"].map((item) => (
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
              { value: "40%", label: "Of the web runs on WordPress" },
              { value: "3–6", label: "Months to see meaningful results" },
              { value: "10+", label: "Optimisation areas covered" },
              { value: "6", label: "Common mistakes I fix" },
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