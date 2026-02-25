"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const columns = [
  {
    icon: "🔗",
    tag: "Domain Authority",
    title: "Backlinks",
    subtitle: "Your Domain Authority",
    points: [
      "Tell Google your site is credible and worth ranking",
      "Pass link equity — ranking power for competitive keywords",
      "Built through genuine outreach to relevant Australian sites",
      "Guest posts, digital PR, resource link building",
      "No link farms, no private blog networks, no shortcuts",
    ],
    note: "Quality over quantity. One link from a trusted Australian publication beats hundreds of spammy links.",
  },
  {
    icon: "📋",
    tag: "Local Trust Signal",
    title: "Local Citations",
    subtitle: "Your Local Trust Signal",
    points: [
      "Reinforce your legitimacy to Google for local searches",
      "Consistent NAP (name, address, phone) builds trust",
      "Yellow Pages, TrueLocal, Yelp, industry directories",
      "Audit and fix inconsistent existing listings",
      "Strengthen map pack and local search rankings",
    ],
    note: "Inconsistent citations confuse Google and hurt local rankings. I audit, fix, and build from scratch.",
  },
];

export default function LinkBuildingWhyBothMatter() {
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
          The Full Picture
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          Backlinks + Local Citations ={" "}
          <span className="text-orange-500">Complete Authority</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-7
                         hover:border-orange-500/30 transition-colors duration-300 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex items-center justify-center text-2xl shrink-0">
                  {col.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2.5 py-1 rounded-full">
                  {col.tag}
                </span>
              </div>

              <h3 className="text-white font-extrabold text-xl mb-1
                             group-hover:text-orange-400 transition-colors duration-300">
                {col.title}
              </h3>
              <p className="text-gray-600 text-xs mb-5">{col.subtitle}</p>

              <ul className="space-y-3 flex-1 mb-5">
                {col.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="text-orange-500 text-xs mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-800/60 pt-5">
                <p className="text-gray-500 text-xs leading-relaxed italic">{col.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}