"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sections = [
  {
    category: "Backlink Strategy & Outreach",
    categoryIcon: "🔗",
    items: [
      { icon: "🔍", title: "Competitor Backlink Analysis", desc: "Understanding exactly where your competitors' links come from." },
      { icon: "🎯", title: "Link Opportunity Identification", desc: "Finding relevant, high-authority sites in your industry." },
      { icon: "📨", title: "Outreach Campaigns", desc: "Genuine relationship-building with site owners — no automated blasts." },
      { icon: "✍️", title: "Guest Posting", desc: "Guest posts on relevant Australian and industry websites." },
      { icon: "📣", title: "Digital PR & Resource Links", desc: "Building links through digital PR and valuable resource pages." },
    ],
  },
  {
    category: "Local Citation Building",
    categoryIcon: "📋",
    items: [
      { icon: "🔎", title: "Citation Audit", desc: "Identifying existing listings and all inconsistencies across the web." },
      { icon: "✅", title: "NAP Consistency Fixes", desc: "Ensuring name, address, phone number match everywhere." },
      { icon: "🆕", title: "New Citation Creation", desc: "Listing your business on high-authority local and national directories." },
      { icon: "🏭", title: "Industry-Specific Directories", desc: "Trade associations, local business groups, niche platforms." },
      { icon: "👁️", title: "Ongoing Citation Monitoring", desc: "Keeping your listings accurate as directories update." },
    ],
  },
  {
    category: "Reporting & Transparency",
    categoryIcon: "📊",
    items: [
      { icon: "📈", title: "Monthly Link Reports", desc: "Every link acquired — where it came from and why it matters." },
      { icon: "📋", title: "Citation Audit Reports", desc: "Before/after status of all your directory listings." },
      { icon: "🏆", title: "Domain Authority Tracking", desc: "Watching your authority grow over time with hard data." },
    ],
  },
];

export default function LinkBuildingWhatsIncluded() {
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
          What&apos;s Included
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          What&apos;s Included in My{" "}
          <span className="text-orange-500">Link Building Service</span>
        </motion.h2>

        <div className="space-y-10">
          {sections.map((section, si) => (
            <div key={section.category}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + si * 0.1 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-1 h-6 rounded-full bg-orange-500" />
                <span className="text-lg mr-1">{section.categoryIcon}</span>
                <p className="text-white font-bold text-lg">{section.category}</p>
                <div className="flex-1 h-px bg-gray-800" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 + si * 0.1 + i * 0.05 }}
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
          ))}
        </div>
      </div>
    </section>
  );
}