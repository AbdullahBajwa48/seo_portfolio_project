"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: "📲",
    title: "Search Behaviour Is Shifting",
    desc: "More users are bypassing traditional search engines entirely. Instead of typing keywords into Google, they're asking AI assistants direct questions and expecting direct answers. This trend is accelerating — especially among younger users and early tech adopters.",
  },
  {
    icon: "🤖",
    title: "AI Answers Are Replacing Clicks",
    desc: "Google's AI Overviews now appear at the top of many search results, answering queries without users needing to click through to websites. If your business isn't part of that answer, you're losing visibility — even if you rank on page one.",
  },
  {
    icon: "🏁",
    title: "Early Movers Win",
    desc: "AEO is still new. Most businesses haven't optimised for it. That means there's a window of opportunity to establish your brand as a trusted source before competition catches up.",
  },
  {
    icon: "🔗",
    title: "It Compounds With Traditional SEO",
    desc: "AEO isn't a replacement for SEO — it builds on it. Strong E-E-A-T signals, quality content, authoritative backlinks, and structured data all feed into how AI systems evaluate and recommend sources. Good SEO makes good AEO possible.",
  },
];

export default function LlmSeoWhyMatters() {
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
          Why It Matters
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Why AEO Matters{" "}
          <span className="text-orange-500">Right Now</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          The window to get ahead of your competitors in AI search is open right now — but it won&apos;t stay open forever.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300
                         flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-2
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}