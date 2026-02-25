"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const opportunities = [
  {
    icon: "🏗️",
    area: "Rothwell Estate",
    example: '"dentist Rothwell Tarneit"',
    desc: "New families discovering estate-level services before they establish habits with existing providers.",
  },
  {
    icon: "🌊",
    area: "Riverdale",
    example: '"best café Riverdale Tarneit"',
    desc: "Residents in newer pockets actively searching for their go-to local spots — a prime early-mover opportunity.",
  },
  {
    icon: "🏡",
    area: "Elements Estate",
    example: '"plumber Elements Tarneit"',
    desc: "Brand new homeowners needing every trade service imaginable — and searching before they ask anyone.",
  },
  {
    icon: "🛒",
    area: "Tarneit Central",
    example: '"shops near Tarneit Central"',
    desc: "The growing shopping district draws suburb-wide searches as the precinct continues to take shape.",
  },
];

export default function TarneitLocalContext() {
  const ref = useRef(null);
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
          The Opportunity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          The Tarneit{" "}
          <span className="text-orange-500">Opportunity</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Most suburbs have entrenched competition. Tarneit is different — the market
          is still forming. Businesses that establish strong local rankings now will
          benefit for years as the population keeps growing.
        </motion.p>

        {/* Featured top card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="group bg-[#141414] border border-orange-500/20 rounded-2xl p-7 mb-5
                     hover:border-orange-500/40 transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4 to-transparent pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20
                            flex items-center justify-center text-2xl shrink-0">
              ⏳
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2
                             group-hover:text-orange-400 transition-colors duration-300">
                The Window Is Open — But It Won&apos;t Stay That Way
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                Many local businesses haven&apos;t invested in SEO yet — they&apos;re relying on
                word of mouth in a suburb where most residents are new and don&apos;t know
                anyone. This creates a window. Businesses that establish strong local
                rankings now will benefit for years as the population continues growing.
                Those who wait will face much stiffer competition later. The time to build
                your presence in Tarneit search results is before everyone else catches on.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Estate grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {opportunities.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.08 }}
              className="group bg-[#141414] border border-gray-800 rounded-xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3
                              to-transparent opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                   text-orange-500 bg-orange-500/10 border border-orange-500/20
                                   px-2 py-0.5 rounded-full mb-2">
                    {item.area}
                  </span>
                  <h3 className="text-white font-bold text-sm mb-1
                                 group-hover:text-orange-400 transition-colors duration-300">
                    {item.example}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}