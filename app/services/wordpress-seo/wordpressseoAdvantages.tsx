"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const advantages = [
  {
    icon: "🎛️",
    title: "Full Control Over On-Page Elements",
    desc: "Unlike locked-down platforms, WordPress gives you complete control over URLs, title tags, meta descriptions, headings, and content structure. Every page can be optimised exactly how you need it.",
  },
  {
    icon: "🔌",
    title: "Powerful SEO Plugins",
    desc: "Plugins like Yoast, Rank Math, and All in One SEO provide advanced optimisation features — schema markup, XML sitemaps, redirects, and more — without needing to touch code.",
  },
  {
    icon: "🏗️",
    title: "Flexible Site Architecture",
    desc: "WordPress lets you build logical site structures with categories, tags, custom post types, and hierarchical pages. This flexibility is essential for topical authority and internal linking.",
  },
  {
    icon: "⚡",
    title: "Speed Optimisation Options",
    desc: "With the right caching plugins, CDN integration, and optimisation tools, WordPress sites can be incredibly fast — a critical ranking factor that many platforms limit.",
  },
  {
    icon: "🌐",
    title: "Massive Ecosystem",
    desc: "Whatever you need, there's likely a theme, plugin, or developer who can build it. This flexibility means you're never stuck with SEO limitations imposed by your platform.",
  },
];

export default function WordPressSeoAdvantages() {
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
          The Platform
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          What Makes WordPress{" "}
          <span className="text-orange-500">Powerful for SEO</span>
        </motion.h2>

        {/* Featured top card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="group bg-[#141414] border border-orange-500/20 rounded-2xl p-7 mb-5
                     hover:border-orange-500/40 transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4 to-transparent pointer-events-none" />
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20
                            flex items-center justify-center text-2xl shrink-0">
              {advantages[0].icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2
                             group-hover:text-orange-400 transition-colors duration-300">
                {advantages[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{advantages[0].desc}</p>
            </div>
          </div>
        </motion.div>

        {/* Remaining grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {advantages.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.08 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
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