"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const options = [
  {
    icon: "📋",
    tag: "One-Time",
    title: "Standalone Audit",
    desc: "You receive the audit and action plan, then implement it yourself or with your developer.",
    ideal: "Ideal if you have in-house resources or just want clarity on your current situation.",
    points: [
      "Complete 6-area audit report",
      "Prioritised action plan",
      "30-min walkthrough call",
      "Quick wins identified",
      "You implement at your own pace",
    ],
  },
  {
    icon: "🚀",
    tag: "Most Popular",
    title: "Part of Ongoing SEO",
    desc: "The audit becomes the foundation for a full SEO engagement where I implement the recommendations, track progress, and continuously optimise.",
    ideal: "Ideal if you want hands-off execution with someone accountable for results.",
    points: [
      "Everything in standalone audit",
      "I implement all recommendations",
      "Monthly progress tracking",
      "Continuous optimisation",
      "Full accountability for results",
    ],
    highlight: true,
  },
];

export default function SeoAuditStandaloneVsOngoing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          Your Options
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Standalone Audit{" "}
          <span className="text-orange-500">or Ongoing SEO?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Either way, the audit gives you complete clarity on your website&apos;s SEO health.
          The difference is who implements it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {options.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
              className={`group rounded-2xl p-7 flex flex-col border transition-colors duration-300
                ${opt.highlight
                  ? "bg-[#1a1208] border-orange-500/40 hover:border-orange-500/70"
                  : "bg-[#141414] border-gray-800 hover:border-orange-500/30"
                }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0
                                 border transition-colors duration-300
                                 ${opt.highlight
                                   ? "bg-orange-500/10 border-orange-500/30"
                                   : "bg-[#1e1e1e] border-gray-700 group-hover:border-orange-500/30"
                                 }`}>
                  {opt.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                  ${opt.highlight
                    ? "text-orange-500 bg-orange-500/15 border border-orange-500/30"
                    : "text-gray-500 bg-gray-800/50 border border-gray-700"
                  }`}>
                  {opt.tag}
                </span>
              </div>

              <h3 className={`font-extrabold text-xl mb-2 transition-colors duration-300
                ${opt.highlight ? "text-orange-400" : "text-white group-hover:text-orange-400"}`}>
                {opt.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-2">{opt.desc}</p>
              <p className="text-gray-600 text-xs leading-relaxed mb-5 italic">{opt.ideal}</p>

              <ul className="space-y-2.5 flex-1 mb-6">
                {opt.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="text-orange-500 text-xs mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-400 text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/free-seo-audit"
                className={`inline-flex items-center justify-center gap-2 font-bold text-sm
                            px-6 py-3 rounded transition-all duration-300 active:scale-95 group/btn
                  ${opt.highlight
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border border-gray-700 hover:border-orange-500 text-white hover:text-orange-400"
                  }`}
              >
                Get Started
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}