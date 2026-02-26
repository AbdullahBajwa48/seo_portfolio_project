"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const searchExamples = [
  {
    icon: "🍽️",
    area: "City Centre",
    example: '"dinner Werribee"',
    desc: "Restaurants near the city centre compete for dining searches from locals and visitors.",
  },
  {
    icon: "🔧",
    area: "Werribee South",
    example: '"emergency plumber Werribee South"',
    desc: "Tradies targeting established riverside and southern suburb residents.",
  },
  {
    icon: "🛍️",
    area: "Pacific Werribee",
    example: '"shops open near Pacific Werribee"',
    desc: "Retailers capturing shoppers searching before they visit the precinct.",
  },
  {
    icon: "🏠",
    area: "Wyndham Vale",
    example: '"builder near Werribee"',
    desc: "New estate residents searching for services in the fast-growing western corridor.",
  },
];

export default function WerribeeLocalContext() {
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
          Local Intelligence
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Understanding Werribee&apos;s{" "}
          <span className="text-orange-500">Search Landscape</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Werribee isn&apos;t one market — it&apos;s several. I analyse where your customers
          search from and what they&apos;re searching for, then build a strategy that
          captures the right traffic for your specific business.
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
              🗺️
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2
                             group-hover:text-orange-400 transition-colors duration-300">
                Not One Market — Multiple Micro-Markets
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                The established areas around Werribee South and the river precinct attract
                different customers than the retail hub around Pacific Werribee or the newer
                estates toward Wyndham Vale. Each zone has its own search behaviour — and
                your SEO strategy needs to reflect that.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search example grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {searchExamples.map((item, i) => (
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