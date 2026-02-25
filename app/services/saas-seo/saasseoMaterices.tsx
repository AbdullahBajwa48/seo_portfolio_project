"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    icon: "✍️",
    metric: "Organic Signups & Trials",
    desc: "New users acquired through organic search — the most direct measure of SaaS SEO success.",
    primary: true,
  },
  {
    icon: "🎯",
    metric: "Demo Requests",
    desc: "High-intent conversions from SEO traffic — buyers who found you through search and want to see the product.",
    primary: true,
  },
  {
    icon: "💰",
    metric: "Organic MRR/ARR Contribution",
    desc: "Revenue attributable to organic channels — connecting SEO directly to your bottom line.",
    primary: true,
  },
  {
    icon: "🏆",
    metric: "Keyword Rankings",
    desc: "Visibility for high-intent commercial terms — tracking your position for the keywords that drive revenue.",
    primary: false,
  },
  {
    icon: "📈",
    metric: "Organic Traffic Growth",
    desc: "Overall traffic trends — always tied to conversion data so we know what actually matters.",
    primary: false,
  },
  {
    icon: "📉",
    metric: "Customer Acquisition Cost (CAC)",
    desc: "How SEO reduces your blended CAC over time — making every channel cheaper as organic scales.",
    primary: false,
  },
];

export default function SaasSeoMetrics() {
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
          What We Measure
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Measuring SaaS SEO{" "}
          <span className="text-orange-500">Success</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Vanity metrics don&apos;t pay the bills. I focus on metrics that matter for SaaS growth — you&apos;ll always know how SEO is contributing to your bottom line.
        </motion.p>

        {/* Primary metrics — highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {metrics.filter(m => m.primary).map((m, i) => (
            <motion.div
              key={m.metric}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="group bg-[#141414] border border-orange-500/20 hover:border-orange-500/40
                         rounded-2xl p-6 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20
                              flex items-center justify-center text-xl mb-4">
                {m.icon}
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                               text-orange-500 bg-orange-500/10 border border-orange-500/20
                               px-2 py-0.5 rounded-full mb-3">
                Primary KPI
              </span>
              <p className="text-white font-bold text-sm mb-2
                             group-hover:text-orange-400 transition-colors duration-300">
                {m.metric}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.filter(m => !m.primary).map((m, i) => (
            <motion.div
              key={m.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-lg shrink-0">
                {m.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {m.metric}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}