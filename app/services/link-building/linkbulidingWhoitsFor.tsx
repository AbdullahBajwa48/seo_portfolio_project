"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
  { icon: "🚫", title: "Few or No Backlinks", desc: "Your site has little to no quality backlinks — you're invisible to Google's authority signals." },
  { icon: "📉", title: "Losing Despite Good Content", desc: "Competitors outrank you even though your content is just as good or better." },
  { icon: "📍", title: "Local Rankings Stalling", desc: "Your local rankings aren't improving despite on-page optimisation being in place." },
  { icon: "🗂️", title: "Inconsistent Citations", desc: "Your business details are inconsistent or missing across directories and platforms." },
  { icon: "😤", title: "SEO Without Results", desc: "You've been investing in SEO but the results just aren't showing up yet." },
  { icon: "🏙️", title: "Local Melbourne Businesses", desc: "Tradies, hospitality, medical, professional services — citations are what separate page one from page nowhere." },
];

export default function LinkBuildingWhoItsFor() {
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
          Who It&apos;s For
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight max-w-xl"
          >
            Who Needs{" "}
            <span className="text-orange-500">Link Building?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            For local Melbourne businesses, the combination of backlinks and citations
            is what separates page one from page nowhere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {s.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}