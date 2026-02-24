"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    number: "01",
    icon: "⚙️",
    title: "Technical SEO Audit",
    desc: "Your website's technical foundation determines whether Google can properly crawl and index your pages.",
    items: [
      "Site speed and core web vitals",
      "Mobile usability and responsiveness",
      "Crawl errors, broken links, and redirect chains",
      "Indexing issues and robots.txt configuration",
      "XML sitemap health",
      "HTTPS security and mixed content",
      "Structured data and schema markup",
    ],
    outcome: "You'll know exactly what technical issues exist and how to fix them.",
  },
  {
    number: "02",
    icon: "📝",
    title: "On-Page SEO Audit",
    desc: "On-page optimisation ensures each page is properly targeting the right keywords and sending clear signals to Google.",
    items: [
      "Title tags and meta descriptions",
      "Heading structure (H1–H6)",
      "Keyword targeting and placement",
      "Internal linking structure",
      "URL structure and hierarchy",
      "Image optimisation and alt text",
      "Duplicate content issues",
    ],
    outcome: "You'll see which pages are optimised, which are underperforming, and what changes will have the biggest impact.",
  },
  {
    number: "03",
    icon: "✍️",
    title: "Content Audit",
    desc: "Content is what ranks — but not all content helps your SEO. Some pages add value. Others drag your site down.",
    items: [
      "Content quality and depth",
      "Content gaps vs competitors",
      "Keyword cannibalisation issues",
      "Outdated content needing refresh",
      "Content performance data",
      "E-E-A-T signals assessment",
    ],
    outcome: "You'll get a clear picture of what content to keep, improve, merge, or remove — and what new content will fill gaps.",
  },
  {
    number: "04",
    icon: "📍",
    title: "Local SEO Audit",
    desc: "For businesses serving Melbourne customers, local search visibility is critical.",
    items: [
      "Google Business Profile completeness",
      "Local keyword targeting",
      "NAP consistency across citations",
      "Review quantity, quality, and recency",
      "Local competitor positioning",
      "Location page optimisation",
    ],
    outcome: "You'll understand how you stack up in local search and what's needed to improve your map pack visibility.",
  },
  {
    number: "05",
    icon: "🔗",
    title: "Backlink Audit",
    desc: "Your backlink profile directly impacts your domain authority and ability to rank for competitive terms.",
    items: [
      "Total backlinks and referring domains",
      "Link quality and relevance",
      "Toxic or spammy links",
      "Anchor text distribution",
      "Competitor backlink comparison",
      "Link building opportunities",
    ],
    outcome: "You'll see the strength of your link profile, any risks that need addressing, and where opportunities exist.",
  },
  {
    number: "06",
    icon: "🏆",
    title: "Competitor Analysis",
    desc: "Understanding what your competitors are doing right helps you identify gaps and opportunities.",
    items: [
      "Who's ranking for your target keywords",
      "Their content strategy and top pages",
      "Their backlink sources",
      "Technical and on-page strengths",
      "Where you can realistically outperform them",
    ],
    outcome: "You'll know exactly what you're up against — and how to compete.",
  },
];

export default function SeoAuditWhatsCovered() {
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
          The Audit
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
          >
            What My SEO Audit{" "}
            <span className="text-orange-500">Covers</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-3 text-center"
          >
            <p className="text-orange-500 font-extrabold text-2xl">6</p>
            <p className="text-gray-500 text-xs mt-0.5">Audit Areas</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-gray-700
                                  group-hover:border-orange-500/30 transition-colors duration-300
                                  flex items-center justify-center text-lg shrink-0">
                    {area.icon}
                  </div>
                  <h3 className="text-white font-bold text-base
                                 group-hover:text-orange-400 transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
                <span className="text-orange-500/40 font-extrabold text-xl shrink-0">{area.number}</span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>

              {/* Checklist */}
              <ul className="space-y-2 flex-1 mb-5">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange-500 text-xs mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div className="border-t border-gray-800/60 pt-4">
                <p className="text-gray-300 text-xs leading-relaxed italic">{area.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}