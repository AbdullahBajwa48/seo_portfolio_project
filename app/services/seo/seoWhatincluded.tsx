"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  { icon: "🔍", title: "SEO Audit & Competitor Analysis", desc: "Understanding where you are and what you're up against" },
  { icon: "🗺️", title: "Custom SEO Strategy", desc: "A tailored roadmap built for your business goals" },
  { icon: "🎯", title: "Keyword Research", desc: "Targeting searches that drive leads, not just traffic" },
  { icon: "📝", title: "On-Page Optimisation", desc: "Title tags, meta descriptions, content, internal linking" },
  { icon: "⚙️", title: "Technical SEO Fixes", desc: "Site speed, mobile usability, crawl errors, indexing issues" },
  { icon: "✍️", title: "Content Strategy & Creation", desc: "Pages and posts that rank and convert" },
  { icon: "🔗", title: "Link Building", desc: "Quality backlinks from relevant, authoritative sites" },
  { icon: "📍", title: "Local SEO Integration", desc: "Google Business Profile and local search optimisation" },
  { icon: "📊", title: "Monthly Reporting", desc: "Clear, jargon-free updates on what's working" },
  { icon: "📞", title: "Direct Access to Me", desc: "No account managers, no runaround" },
];

export default function ServiceWhatsIncluded() {
  const ref = useRef<HTMLDivElement>(null);
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
          What&apos;s Included
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          What You Get With My{" "}
          <span className="text-orange-500">SEO Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {included.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.06 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1 group-hover:text-orange-400
                               transition-colors duration-300">
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