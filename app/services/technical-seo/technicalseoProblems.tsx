"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: "⚡",
    problem: "Slow Website Speed",
    issue: "Your site takes too long to load. Visitors leave before the page even finishes. Google notices — and ranks faster competitors above you.",
    fix: "I analyse your core web vitals, optimise images, minify code, implement caching, and fix server-side issues. The result: a faster site that keeps visitors and ranks higher.",
  },
  {
    icon: "📱",
    problem: "Poor Mobile Experience",
    issue: "Your site looks broken on mobile — buttons too small, text unreadable, layout shifting. Google uses mobile-first indexing, so a bad mobile experience tanks your rankings.",
    fix: "I audit your mobile usability, fix responsive design issues, and ensure your site delivers a seamless experience on every device.",
  },
  {
    icon: "🕷️",
    problem: "Crawl Errors & Indexing Issues",
    issue: "Google can't find or access important pages. Maybe they're blocked by robots.txt, buried too deep in your site structure, or returning errors. If Google can't crawl it, it can't rank it.",
    fix: "I identify crawl errors in Google Search Console, fix broken links, improve site architecture, and ensure every important page is accessible and indexed.",
  },
  {
    icon: "📄",
    problem: "Duplicate Content",
    issue: "Multiple pages with the same or very similar content confuse Google. It doesn't know which version to rank — so it might rank none of them.",
    fix: "I identify duplicate content issues, implement canonical tags, consolidate thin pages, and create a clear content hierarchy that Google understands.",
  },
  {
    icon: "🏷️",
    problem: "Missing or Broken Schema Markup",
    issue: "Without structured data, Google has to guess what your content is about. You miss out on rich snippets — stars, FAQs, pricing — that make your listing stand out in search results.",
    fix: "I implement proper schema markup for your business type, services, reviews, FAQs, and more — giving Google the context it needs and improving your click-through rates.",
  },
  {
    icon: "🔒",
    problem: "Security Issues (HTTPS)",
    issue: "Your site isn't secure, or there are mixed content warnings. Google flags insecure sites, and visitors don't trust them. Rankings and conversions both suffer.",
    fix: "I ensure your SSL certificate is correctly installed, fix mixed content issues, and implement proper redirects from HTTP to HTTPS.",
  },
];

export default function TechnicalSeoProblems() {
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
          Common Problems
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Technical Problems That{" "}
          <span className="text-orange-500">Kill Your Rankings</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-2xl"
        >
          These are the issues I see again and again with Melbourne business websites —
          and exactly how I fix them.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4
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