"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { icon: "📝", text: "Content optimisation" },
  { icon: "🏷️", text: "Title & meta tags" },
  { icon: "🔗", text: "Internal linking" },
  { icon: "📐", text: "Heading structure" },
];

export default function OnPageSeoIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4 text-center"
        >
          What Is It
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-10"
        >
          What Is{" "}
          <span className="text-orange-500">On-Page SEO?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/40" />
          <span className="text-orange-500 text-xl">◆</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/40" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5 mb-14">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="text-white text-lg md:text-xl font-semibold
                       text-center border-l-2 border-orange-500 pl-4 ml-0 md:ml-8"
          >
            On-page SEO is about making sure each page tells Google exactly what it&apos;s about.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            On-page SEO refers to everything you can optimise directly on your website
            to improve search rankings. This includes the words on your pages, how
            they&apos;re structured, and the signals they send to Google about relevance
            and quality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            Unlike technical SEO — which focuses on how your site functions — or link
            building — which focuses on external signals — on-page SEO is about making
            sure each page is properly optimised for the keywords you want to rank for.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.43 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            When done right, on-page optimisation helps Google understand your content,
            match it to relevant searches, and rank it above competitors. It also
            improves user experience — making visitors more likely to stay, engage,
            and convert.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + i * 0.08 }}
              className="flex flex-col items-center gap-2 bg-[#1a1a1a] border border-gray-800
                         rounded-xl px-4 py-5 hover:border-orange-500/40 transition-colors duration-300"
            >
              <span className="text-2xl">{p.icon}</span>
              <p className="text-gray-300 text-xs font-medium text-center leading-snug">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}