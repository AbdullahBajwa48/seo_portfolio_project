"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
  { icon: "🆕", title: "Never Had a Professional Audit", desc: "You've never had an expert review your website's SEO health — you're flying blind." },
  { icon: "📉", title: "Rankings or Traffic Dropped", desc: "Something changed and you don't know why. An audit pinpoints exactly what happened." },
  { icon: "😤", title: "Investing Without Results", desc: "You've been spending on content or links but your rankings aren't moving." },
  { icon: "🔄", title: "Recently Redesigned or Migrated", desc: "Site rebuilds often destroy SEO. An audit catches what broke in the transition." },
  { icon: "🔎", title: "Taking Over From an Agency", desc: "Need to assess what a previous agency did — or didn't do — before moving forward." },
  { icon: "🗺️", title: "Need a Roadmap First", desc: "You want a clear picture of your situation before committing to ongoing SEO." },
];

export default function SeoAuditWhoItsFor() {
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
            Who Needs an{" "}
            <span className="text-orange-500">SEO Audit?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            Whether you&apos;re a local tradie, ecommerce store, or professional services
            firm — an audit shows you exactly where you stand.
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