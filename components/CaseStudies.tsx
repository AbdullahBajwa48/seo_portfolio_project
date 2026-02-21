"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Types ── */
interface Result {
  value: string;
  label: string;
}

interface CaseStudy {
  number: string;
  industry: string;
  suburb: string;
  challenge: string;
  solution: string[];
  results: Result[];
  tag: string;
}

/* ── Data ── */
const caseStudies: CaseStudy[] = [
  {
    number: "01",
    tag: "Local SEO",
    industry: "Industry",
    suburb: "Suburb",
    challenge:
      "The business had zero visibility in local search despite being established for over 5 years. Competitors were dominating the map pack and organic results.",
    solution: [
      "Local SEO strategy",
      "Google Business Profile optimisation",
      "Targeted content creation",
    ],
    results: [
      { value: "X%", label: "Organic Traffic" },
      { value: "X%", label: "More Leads" },
      { value: "X+", label: "Page 1 Keywords" },
    ],
  },
  {
    number: "02",
    tag: "Technical SEO",
    industry: "Industry",
    suburb: "Suburb",
    challenge:
      "A slow, poorly structured website was being crawled inefficiently. Critical pages were not indexed and mobile performance scores were below 40.",
    solution: [
      "Technical SEO fixes",
      "On-page optimisation",
      "Link building campaign",
    ],
    results: [
      { value: "X%", label: "Organic Traffic" },
      { value: "X%", label: "More Leads" },
      { value: "X+", label: "Page 1 Keywords" },
    ],
  },
];

/* ── Case Study Card ── */
function CaseStudyCard({
  study,
  index,
  inView,
}: {
  study: CaseStudy;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.15 }}
      className="group relative bg-[#141414] border border-gray-800 rounded-2xl
                 overflow-hidden hover:border-orange-500/40 transition-colors duration-300"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />

      <div className="p-7 md:p-9">

        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-6">
          <div>
            {/* Tag */}
            <span className="text-[10px] font-semibold uppercase tracking-widest
                             text-orange-500 bg-orange-500/10 border border-orange-500/20
                             px-2.5 py-1 rounded-full">
              {study.tag}
            </span>

            {/* Title */}
            <h3 className="text-white font-bold text-xl mt-3">
              {study.industry} Business
              <span className="text-orange-500"> —</span>
            </h3>
            <p className="text-gray-500 text-sm mt-0.5">
              {study.suburb}, Melbourne
            </p>
          </div>

          {/* Case number */}
          <span className="text-5xl font-extrabold text-gray-800 select-none
                           group-hover:text-orange-500/20 transition-colors duration-500">
            {study.number}
          </span>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gray-800 mb-6" />

        {/* ── Challenge + Solution ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
          {/* Challenge */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              Challenge
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
              Solution
            </p>
            <ul className="space-y-1.5">
              {study.solution.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-5 mb-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
            Results
          </p>
          <div className="grid grid-cols-3 gap-4">
            {study.results.map((result) => (
              <div key={result.label} className="text-center">
                <p className="text-orange-500 font-extrabold text-2xl">
                  {result.value}
                </p>
                <p className="text-gray-500 text-xs mt-1">{result.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold
                     hover:gap-3 transition-all duration-300 group/link"
        >
          Read Full Case Study
          <span className="group-hover/link:translate-x-1 transition-transform duration-300">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]
                      rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 text-center"
        >
          Proof of Work
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-5"
        >
          SEO Results for{" "}
          <span className="text-orange-500">Melbourne Businesses</span>
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="text-gray-500 text-sm text-center mb-14"
        >
          Real businesses. Real results. No exaggerated claims.
        </motion.p>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.number} study={study} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="text-center text-gray-600 text-xs mt-10"
        >
          Results vary by industry, competition, and starting position. We'll give you an honest
          projection during your free consultation.
        </motion.p>
      </div>
    </section>
  );
}