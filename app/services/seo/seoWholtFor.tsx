"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
  { icon: "🔧", label: "Trades", desc: "Plumbers, electricians, builders, roofers, landscapers, HVAC" },
  { icon: "💼", label: "Professional Services", desc: "Lawyers, accountants, consultants, financial advisors" },
  { icon: "🏥", label: "Health & Medical", desc: "Dentists, physios, chiropractors, allied health" },
  { icon: "🍽️", label: "Hospitality", desc: "Restaurants, cafes, bars, venues" },
  { icon: "🛍️", label: "Retail & Ecommerce", desc: "Local retailers and online stores" },
  { icon: "💻", label: "SaaS & Tech", desc: "Software companies targeting Australian or global markets" },
];

export default function ServiceWhoItsFor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          Who I Work With
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight max-w-xl"
          >
            Built for <span className="text-orange-500">Melbourne</span> Businesses
            Across Every Industry
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            Whether agencies have burned you before or you&apos;re investing in SEO for the
            first time — I&apos;ll give you a straight answer about what&apos;s possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
                {ind.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1 group-hover:text-orange-400
                               transition-colors duration-300">
                  {ind.label}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}