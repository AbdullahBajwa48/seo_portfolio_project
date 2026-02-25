"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
  {
    icon: "📉",
    title: "Pages Not Ranking",
    desc: "Your pages aren't ranking for the keywords you're targeting — even though the content exists.",
  },
  {
    icon: "🚫",
    title: "Never Been Optimised",
    desc: "You have content that was written without any SEO strategy or keyword intent behind it.",
  },
  {
    icon: "🏗️",
    title: "Built Without SEO",
    desc: "Your website was built by a designer focused on looks, not a strategist focused on rankings.",
  },
  {
    icon: "🆕",
    title: "Creating New Pages",
    desc: "You're publishing new pages and want them properly optimised before they go live.",
  },
  {
    icon: "🏆",
    title: "Losing to Competitors",
    desc: "Competitors are outranking you for terms you should own — and you need to take them back.",
  },
  {
    icon: "🛒",
    title: "Any Size Business",
    desc: "From a local tradie with 5 pages to an ecommerce store with hundreds of products.",
  },
];

export default function OnPageSeoWhoItsFor() {
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
            <span className="text-orange-500">On-Page SEO?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            On-page optimisation ensures every page on your site is working as hard
            as it can — whether you have 5 pages or 500.
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