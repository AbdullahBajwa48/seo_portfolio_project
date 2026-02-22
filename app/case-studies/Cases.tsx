"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CaseStudy {
  number: string;
  tag: string;
  location: string;
  resultHeadline: string;
  summary: string;
  results: string[];
  href: string;
  metric: string;
  metricLabel: string;
}

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    tag: "Plumbing",
    location: "South East Melbourne",
    resultHeadline: "312% Increase in Organic Traffic",
    metric: "312%",
    metricLabel: "Organic Traffic",
    summary:
      "A local plumbing company struggling to rank against established competitors. We rebuilt their local SEO foundation and created service-area content that now generates consistent leads.",
    results: [
      "312% increase in organic traffic",
      "45+ keywords on page 1",
      "3x more enquiries per month",
    ],
    href: "/case-studies/plumbing-seo-melbourne",
  },
  {
    number: "02",
    tag: "Electrical",
    location: "Northern Melbourne",
    resultHeadline: "From Invisible to Map Pack in 4 Months",
    metric: "187%",
    metricLabel: "Traffic Increase",
    summary:
      "An electrical contractor with a new website and zero Google visibility. We optimised their Google Business Profile and built local citations that put them in the map pack for high-intent keywords.",
    results: [
      "Ranking in map pack for 12 service keywords",
      "187% increase in website traffic",
      "28 new leads per month from organic search",
    ],
    href: "/case-studies/electrician-seo-melbourne",
  },
  {
    number: "03",
    tag: "Hospitality",
    location: "Melbourne CBD",
    resultHeadline: "147% More Bookings from Organic Search",
    metric: "147%",
    metricLabel: "More Bookings",
    summary:
      "A boutique Melbourne restaurant losing visibility to bigger competitors. We focused on local SEO, review strategy, and content that showcased their unique offerings — driving reservations without relying on paid ads.",
    results: [
      "147% increase in organic bookings",
      "4.8-star average across 200+ reviews",
      `Page 1 rankings for "best [cuisine] restaurant Melbourne"`,
    ],
    href: "/case-studies/restaurant-seo-melbourne",
  },
  {
    number: "04",
    tag: "Dental",
    location: "Western Melbourne",
    resultHeadline: "2x Patient Enquiries in 6 Months",
    metric: "2x",
    metricLabel: "Patient Enquiries",
    summary:
      "A dental clinic relying entirely on word-of-mouth. We built a local SEO strategy targeting suburb-specific keywords and optimised their site for patient conversions — doubling their monthly enquiries.",
    results: [
      "2x increase in new patient enquiries",
      "34 keywords ranking on page 1",
      "89% increase in Google Business Profile views",
    ],
    href: "/case-studies/dental-seo-melbourne",
  },
  {
    number: "05",
    tag: "Ecommerce",
    location: "Melbourne (Australia-wide)",
    resultHeadline: "$127K in Organic Revenue (6 Months)",
    metric: "$127K",
    metricLabel: "Organic Revenue",
    summary:
      "An online retailer spending heavily on ads but getting nothing from organic search. We restructured their site architecture, optimised product pages, and built quality backlinks — creating a sustainable revenue channel.",
    results: [
      "$127,000 in organic revenue over 6 months",
      "215% increase in organic traffic",
      "Reduced reliance on paid ads by 40%",
    ],
    href: "/case-studies/ecommerce-seo-melbourne",
  },
];

/* ── Card ── */
function CaseStudyCard({
  study,
  index,
  inView,
}: {
  study: CaseStudy;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#141414] border border-gray-800
                 rounded-2xl overflow-hidden hover:border-orange-500/30
                 transition-colors duration-300"
    >
      {/* Top sweep bar */}
      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r
                      from-orange-500 to-orange-400 transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* ── Dark left panel (3/5) ── */}
        <div className="lg:col-span-3 p-7 md:p-9 flex flex-col gap-6">

          {/* Top meta */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest
                               text-orange-500 bg-orange-500/10 border border-orange-500/20
                               px-3 py-1 rounded-full w-fit">
                {study.tag}
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <p className="text-gray-500 text-xs">{study.location}</p>
              </div>
            </div>
            <span className="text-5xl font-extrabold text-white/5 select-none
                             group-hover:text-white/10 transition-colors duration-500 leading-none">
              {study.number}
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-white font-extrabold text-xl md:text-2xl leading-snug
                         group-hover:text-orange-400 transition-colors duration-300">
            {study.resultHeadline}
          </h3>

          {/* Summary */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {study.summary}
          </p>

          {/* CTA */}
          <Link
            href={study.href}
            className="inline-flex items-center gap-2 text-orange-500 text-xs
                       font-bold uppercase tracking-wider w-fit
                       hover:gap-3 transition-all duration-300 group/link mt-auto"
          >
            Read Case Study
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* ── Light right panel (2/5) ── */}
        <div className="lg:col-span-2 bg-white p-7 md:p-9 flex flex-col
                        border-t lg:border-t-0 lg:border-l border-gray-100">

          {/* Big metric */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400
                           font-semibold mb-1">Key Metric</p>
            <p className="text-orange-500 font-extrabold text-4xl md:text-5xl leading-none">
              {study.metric}
            </p>
            <p className="text-gray-400 text-xs mt-1">{study.metricLabel}</p>
          </div>

          {/* Results list */}
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-widest text-gray-400
                           font-semibold mb-3">All Results</p>
            <ul className="space-y-3">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                  <span className="w-4 h-4 rounded-full bg-orange-500/10 border
                                   border-orange-500/30 flex items-center
                                   justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  </span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export default function CaseStudiesList() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-orange-500" />
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              All Case Studies
            </p>
          </div>
          <span className="text-gray-600 text-xs">{caseStudies.length} results</span>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {caseStudies.map((study, i) => (
            <CaseStudyCard
              key={study.number}
              study={study}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-700 text-xs text-center mt-10"
        >
          Results vary by industry, competition, and starting position. All figures reflect real client data.
        </motion.p>
      </div>
    </section>
  );
}