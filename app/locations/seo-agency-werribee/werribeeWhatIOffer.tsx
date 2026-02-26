"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "📍",
    title: "Google Business Profile Dominance",
    problem: "What it covers",
    issue:
      "Your GBP listing is often the first thing customers see. Most businesses leave it half-complete — losing clicks to competitors who've optimised theirs.",
    fix: "I optimise every element — categories, services, photos, posts, Q&A — to maximise your visibility in Maps and the local 3-pack results.",
  },
  {
    icon: "📝",
    title: "Werribee-Focused Content",
    problem: "What it covers",
    issue:
      "Generic content doesn&apos;t rank locally. If your pages say &ldquo;we serve Melbourne,&rdquo; you&apos;re not capturing the specific searches Werribee residents make.",
    fix: "I create pages targeting Werribee-specific searches — your services combined with suburbs, landmarks, and local intent keywords that residents actually use.",
  },
  {
    icon: "⭐",
    title: "Review & Reputation Building",
    problem: "What it covers",
    issue:
      "Reviews influence both Google rankings and customer decisions. Most businesses get reviews by accident — and lose to competitors who get them consistently.",
    fix: "I implement systems that generate consistent reviews from happy customers — building the social proof that converts searchers into buyers.",
  },
];

export default function WerribeeWhatIOffer() {
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
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          How I Help Werribee{" "}
          <span className="text-orange-500">Businesses Rank</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Three core areas that drive local rankings — each one built specifically
          around how Werribee customers search and decide.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden
                         flex flex-col"
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
                <h3 className="text-white font-bold text-sm leading-snug
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              <div className="mb-4 flex-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-gray-500 bg-gray-800/60 border border-gray-700
                                 px-2 py-0.5 rounded-full mb-2">
                  The Problem
                </span>
                <p className="text-gray-500 text-xs leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: item.issue }} />
              </div>

              <div className="border-t border-gray-800/60 pt-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full mb-2">
                  How I Fix It
                </span>
                <p className="text-gray-400 text-xs leading-relaxed">{item.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}