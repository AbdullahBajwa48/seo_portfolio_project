"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ── Stat Card ── */
interface StatCardProps {
  value: string;
  label: string;
  delay: number;
  inView: boolean;
}

function StatCard({ value, label, delay, inView }: StatCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex-1 bg-[#1a1a1a] border border-gray-800 hover:border-orange-500/50
                 rounded-xl p-5 text-center transition-colors duration-300 group"
    >
      <p className="text-orange-500 text-3xl font-extrabold group-hover:scale-110 transition-transform duration-300">
        {value}
      </p>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </motion.div>
  );
}

/* ── Trust Pill ── */
function TrustPill({ text, delay, inView }: { text: string; delay: number; inView: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex items-center gap-2 bg-[#1a1a1a] border border-gray-800
                 rounded-full px-4 py-2 text-sm text-gray-300"
    >
      <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
      {text}
    </motion.div>
  );
}

/* ── Main Component ── */
export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Businesses Helped" },
    { value: "0", label: "Lock-in Contracts" },
  ];

  const pills = [
    "No hidden fees",
    "No dodgy tactics",
    "No confusing jargon",
    "Month-to-month service",
    "You own your data",
    "Direct communication",
  ];

  const paragraphs = [
    `Khalis means "pure" in Arabic — and that's exactly how we approach search engine optimisation. No hidden fees. No confusing jargon. No dodgy tactics that put your website at risk.`,
    `After a decade in digital marketing, working with businesses across retail, hospitality, medical, finance, and trades, we've seen how the SEO industry operates. Agencies that lock clients into 12-month contracts. Vague reports that say nothing. Promises of "#1 rankings" that never materialise.`,
    `We started Khalis Marketing to do things differently. You get month-to-month service — stay because it's working, not because you're trapped. You own your accounts, your data, and your content. You talk directly to the person doing the work, not a rotating door of account managers.`,
  ];

  return (
    <section
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]
                      rounded-full bg-orange-500/5 blur-[130px] pointer-events-none" />

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{ originY: 0 }}
        className="absolute left-6 md:left-16 lg:left-24 top-24 bottom-24
                   w-[2px] bg-gradient-to-b from-orange-500/0 via-orange-500/40 to-orange-500/0"
      />

      <div className="relative max-w-6xl mx-auto pl-6 md:pl-10">

        {/* ── Top Label ── */}
        <motion.p
          variants={fadeLeft}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3"
        >
          About Us
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          variants={fadeLeft}
          custom={0.15}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 max-w-2xl"
        >
          An SEO Agency Melbourne{" "}
          <span className="text-orange-500">Businesses Can Trust</span>
        </motion.h2>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Text Content */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={0.2 + i * 0.15}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-gray-400 text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Highlighted quote */}
            <motion.div
              variants={fadeUp}
              custom={0.65}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="border-l-2 border-orange-500 pl-4 mt-6"
            >
              <p className="text-white font-semibold text-lg italic">
                "That's SEO without the runaround."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              custom={0.75}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600
                           active:scale-95 text-white font-semibold px-7 py-3 rounded
                           transition-all duration-300 text-sm group"
              >
                Get a Free Quote
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Stats + Trust Pills */}
          <div className="flex flex-col gap-8">

            {/* Stats row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {stats.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={0.3 + i * 0.1}
                  inView={inView}
                />
              ))}
            </div>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              custom={0.5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="h-[1px] bg-gradient-to-r from-orange-500/30 via-gray-700 to-transparent"
            />

            {/* Trust pills */}
            <div>
              <motion.p
                variants={fadeUp}
                custom={0.55}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-gray-500 text-xs uppercase tracking-widest mb-4"
              >
                What makes us different
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {pills.map((pill, i) => (
                  <TrustPill
                    key={pill}
                    text={pill}
                    delay={0.6 + i * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* Bottom decorative card */}
            <motion.div
              variants={fadeUp}
              custom={0.9}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30
                              flex items-center justify-center shrink-0">
                <span className="text-orange-500 text-lg font-bold">K</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Khalis Marketing</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Melbourne's transparent SEO agency — no contracts, no runaround.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}