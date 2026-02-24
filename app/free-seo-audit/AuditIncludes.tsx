"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    icon: "⚙️",
    title: "Technical SEO",
    description: "Site speed, mobile usability, crawl errors, and indexing issues",
  },
  {
    icon: "📝",
    title: "On-Page SEO",
    description: "Title tags, meta descriptions, headings, and keyword targeting",
  },
  {
    icon: "✍️",
    title: "Content",
    description: "Quality, gaps, and cannibalisation issues holding you back",
  },
  {
    icon: "📍",
    title: "Local SEO",
    description: "Google Business Profile, citations, and map pack visibility",
  },
  {
    icon: "🔗",
    title: "Backlinks",
    description: "Link profile strength, toxic links, and opportunities",
  },
  {
    icon: "🏆",
    title: "Competitors",
    description: "Who's outranking you and why",
  },
];

export default function AuditIncludes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              What's Included
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold
                       leading-tight max-w-xl"
          >
            Your free audit covers{" "}
            <span className="text-orange-500">six critical areas</span>
          </motion.h2>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border
                                border-orange-500/20 flex items-center justify-center
                                text-lg shrink-0
                                group-hover:bg-orange-500/20 transition-colors duration-300">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1
                                 group-hover:text-orange-400 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          className="bg-white rounded-2xl p-7 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <div className="w-10 h-1 bg-orange-500 rounded-full mb-4" />
              <p className="text-gray-800 font-bold text-lg md:text-xl leading-relaxed">
                You'll receive a prioritised action plan with quick wins
                and clear next steps.
              </p>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              No jargon — just practical recommendations you can act on,
              whether you work with me or not.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}