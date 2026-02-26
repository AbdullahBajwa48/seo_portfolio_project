"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differences = [
  {
    icon: "⚡",
    title: "Speed-First Development",
    desc: "Page speed affects rankings and conversions. I build lightweight, fast-loading websites — no bloated themes, no unnecessary scripts, no waiting five seconds for your homepage to load.",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    desc: "Google uses mobile-first indexing. If your site doesn't work perfectly on phones, you're hurting your rankings. Every site I build is fully responsive and optimised for mobile users.",
  },
  {
    icon: "🏗️",
    title: "SEO-Ready Structure",
    desc: "Site architecture matters. I plan your URL structure, navigation, internal linking, and page hierarchy before design begins — so Google can crawl and understand your site from day one.",
  },
  {
    icon: "🎯",
    title: "Conversion-Focused Layout",
    desc: "Traffic without conversions is pointless. I design with clear calls-to-action, logical user flows, and layouts that guide visitors toward enquiries, calls, or purchases.",
  },
  {
    icon: "🧹",
    title: "Clean, Semantic Code",
    desc: "Messy code confuses search engines. I build with clean HTML, proper heading structures, and semantic markup that Google can easily parse and index.",
  },
  {
    icon: "🛠️",
    title: "Technical SEO Built In",
    desc: "Schema markup, XML sitemaps, robots.txt, canonical tags, image optimisation — all the technical elements are configured correctly from launch. No retrofitting required.",
  },
];

export default function WebDesignDifferences() {
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
          The Difference
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          What Makes an{" "}
          <span className="text-orange-500">SEO-Focused Website Different</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Every decision I make during design and development is filtered through one question: will this help the site rank and convert?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
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
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}