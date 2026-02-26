"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🔍",
    title: "New Resident Targeting",
    problem: "The Challenge",
    issue:
      "People new to Tarneit search differently — they&apos;re discovering, not returning to trusted businesses. Generic local SEO misses this mindset entirely.",
    fix: "I build content targeting discovery searches: &ldquo;best [service] Tarneit,&rdquo; &ldquo;top rated,&rdquo; &ldquo;near me&rdquo; — the exact queries new residents use when they don&apos;t know who to call.",
  },
  {
    icon: "🏘️",
    title: "Estate-Level Visibility",
    problem: "The Challenge",
    issue:
      "Tarneit has distinct estates — Rothwell, Riverdale, Elements, Truganina border areas. Most businesses target the suburb broadly and miss hyper-local searches.",
    fix: "I target searches at the estate level where competition is even lower and relevance is higher — capturing customers before they&apos;ve even established suburb-wide habits.",
  },
  {
    icon: "📈",
    title: "Foundation Building",
    problem: "The Challenge",
    issue:
      "SEO takes time — businesses who start late in a growing suburb have to fight established rankings instead of building them from scratch in a clear field.",
    fix: "Rankings compound over time. The SEO work you do now creates an asset that grows more valuable as Tarneit&apos;s population increases. I build foundations that deliver returns for years.",
  },
];

export default function TarneitWhatIOffer() {
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
          How I Help Tarneit Businesses{" "}
          <span className="text-orange-500">Capture Growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Three strategies built specifically for a fast-growing suburb — targeting
          the unique way new residents search and decide.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300
                         relative overflow-hidden flex flex-col"
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
                                 text-red-400 bg-red-400/10 border border-red-400/20
                                 px-2 py-0.5 rounded-full mb-2">
                  {item.problem}
                </span>
                <p
                  className="text-gray-500 text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.issue }}
                />
              </div>

              <div className="border-t border-gray-800/60 pt-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full mb-2">
                  How I Help
                </span>
                <p
                  className="text-gray-400 text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.fix }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}