"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const issues = [
  {
    icon: "🐌",
    problem: "Bloated, Slow Themes",
    issue: "Many themes look great but are packed with unnecessary code that kills page speed — a direct Google ranking factor.",
    fix: "I identify whether your theme is helping or hurting, and recommend lightweight alternatives or targeted optimisations.",
  },
  {
    icon: "🔌",
    problem: "Plugin Overload",
    issue: "Too many plugins slow your site, create conflicts, and introduce security risks that Google penalises.",
    fix: "I audit your plugins and streamline to only what you actually need — keeping your site lean, secure, and fast.",
  },
  {
    icon: "🔗",
    problem: "Poor Permalink Structure",
    issue: "Default WordPress URLs aren't SEO-friendly. They confuse Google and miss keyword opportunities.",
    fix: "I configure clean, keyword-relevant URL structures that help Google understand your content hierarchy.",
  },
  {
    icon: "⚙️",
    problem: "Misconfigured SEO Plugin",
    issue: "Having Yoast or Rank Math installed doesn't mean it's set up correctly. Most installs miss critical settings.",
    fix: "I configure your SEO plugin properly — sitemaps, schema, redirects, and all the settings most people overlook.",
  },
  {
    icon: "🚀",
    problem: "No Caching or CDN",
    issue: "Without caching, your server rebuilds every page for every visitor — making your site painfully slow.",
    fix: "I implement caching solutions and CDN integration to dramatically improve load times and Core Web Vitals.",
  },
  {
    icon: "📄",
    problem: "Duplicate Content From Archives",
    issue: "WordPress creates duplicate content through tags, date archives, and author pages — confusing Google.",
    fix: "I configure proper indexing rules to keep Google focused on your important pages and eliminate duplication.",
  },
];

export default function WordPressSeoCommonIssues() {
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
          Common Problems
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Common WordPress SEO Mistakes{" "}
          <span className="text-orange-500">I Fix</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          These are the issues I see on almost every WordPress site I audit — and exactly how I fix them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {issues.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/3
                              to-transparent opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-gray-700
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.problem}
                </h3>
              </div>

              <div className="mb-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-red-400 bg-red-400/10 border border-red-400/20
                                 px-2 py-0.5 rounded-full mb-2">
                  The Problem
                </span>
                <p className="text-gray-500 text-sm leading-relaxed">{item.issue}</p>
              </div>

              <div className="border-t border-gray-800/60 pt-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full mb-2">
                  How I Fix It
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}