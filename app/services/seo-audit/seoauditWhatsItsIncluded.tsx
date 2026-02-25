"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const deliverables = [
  {
    icon: "📄",
    title: "Comprehensive Audit Report",
    desc: "A detailed document covering all six audit areas with findings and screenshots.",
  },
  {
    icon: "🎯",
    title: "Prioritised Action Plan",
    desc: "Issues ranked by impact so you know exactly what to tackle first for maximum results.",
  },
  {
    icon: "⚡",
    title: "Quick Wins Identified",
    desc: "Low-effort fixes that can deliver immediate improvements — so you see results fast.",
  },
  {
    icon: "✍️",
    title: "Content Recommendations",
    desc: "What to update, merge, create, or remove based on performance data.",
  },
  {
    icon: "🏆",
    title: "Competitor Insights",
    desc: "How you compare to competitors and where the real opportunities exist.",
  },
  {
    icon: "📞",
    title: "30-Min Walkthrough Call",
    desc: "A call to review findings, answer questions, and discuss next steps in plain English.",
  },
];

export default function SeoAuditWhatsIncluded() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          What You&apos;ll Receive
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
          >
            What You&apos;ll{" "}
            <span className="text-orange-500">Receive</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-2xl"
        >
          No jargon-filled PDF you won&apos;t understand. Everything is explained clearly
          with specific, actionable recommendations.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}