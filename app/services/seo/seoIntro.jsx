"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { icon: "🎯", text: "Built around your business" },
  { icon: "📊", text: "Results you can measure" },
  { icon: "🤝", text: "Month-to-month only" },
  { icon: "📞", text: "Direct access to Bhavleen" },
];

export default function ServicesIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* ── Top label ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest
                     uppercase mb-4 text-center"
        >
          Our Philosophy
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-10"
        >
          SEO That Works — <span className="text-orange-500">For a Change</span>
        </motion.h2>

        {/* ── Divider with icon ── */}
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

        {/* ── Content block ── */}
        <div className="max-w-3xl mx-auto space-y-5 mb-14">
          {/* First line — bold callout */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="text-white text-lg md:text-xl font-semibold
                       text-center border-l-2 border-orange-500 pl-4 ml-0 md:ml-8"
          >
            Let&apos;s be honest: the SEO industry has a trust problem.
          </motion.p>

          {/* Body paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            Agencies lock you into 12-month contracts, deliver recycled
            strategies, and hide behind jargon-filled reports. Months pass.
            Invoices pile up. And you&apos;re left wondering what you&apos;re actually
            paying for.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            I started Khalis Marketing because Melbourne businesses deserve
            better. SEO should be straightforward — a clear strategy, honest
            communication, and measurable results. That&apos;s exactly what I
            deliver.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.43 }}
            className="text-gray-400 text-base leading-relaxed text-center"
          >
            No long-term contracts. No disappearing after the sale. No{" "}
            <span className="text-white">secret methods</span> that
            conveniently can&apos;t be explained. Just SEO that works.
          </motion.p>
        </div>

        {/* ── Pillars strip ── */}
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
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.5 + i * 0.08,
              }}
              className="flex flex-col items-center gap-2 bg-[#1a1a1a]
                         border border-gray-800 rounded-xl px-4 py-5
                         hover:border-orange-500/40 transition-colors duration-300"
            >
              <span className="text-2xl">{p.icon}</span>
              <p className="text-gray-300 text-xs font-medium text-center leading-snug">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
