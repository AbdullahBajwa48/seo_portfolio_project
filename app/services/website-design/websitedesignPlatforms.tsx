"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const platforms = [
  {
    icon: "🌐",
    title: "WordPress",
    tag: "Most Popular",
    desc: "The most popular CMS in the world. Fully customisable, SEO-friendly when configured correctly, and easy for you to manage ongoing content updates.",
  },
  {
    icon: "🛍️",
    title: "Shopify",
    tag: "Ecommerce",
    desc: "For ecommerce businesses wanting a reliable, scalable online store. I optimise Shopify's SEO limitations while leveraging its powerful selling features.",
  },
  {
    icon: "🌀",
    title: "Webflow",
    tag: "Design-Led",
    desc: "A modern platform that combines design flexibility with clean code output. Great for businesses wanting a polished, high-performance site without WordPress complexity.",
  },
  {
    icon: "⚙️",
    title: "Custom Solutions",
    tag: "Bespoke",
    desc: "For specific requirements, I can recommend or work with developers on custom builds — always with SEO as a core consideration from the ground up.",
  },
];

export default function WebDesignPlatforms() {
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
          Platforms
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
          >
            Platforms I{" "}
            <span className="text-orange-500">Work With</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            I build on platforms that balance flexibility, performance, and ease of use — so you can manage your site long after launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex items-center justify-center text-2xl">
                  {p.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-2
                               group-hover:text-orange-400 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}