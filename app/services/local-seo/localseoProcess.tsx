"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Local SEO Audit",
    desc: "I analyse your current local presence — Google Business Profile, citations, website, reviews, and competitors. This reveals exactly where you stand and what's holding you back.",
    time: "3–5 days",
  },
  {
    number: "02",
    title: "Strategy & Keyword Mapping",
    desc: "Based on the audit, I build a local SEO strategy targeting the suburbs and service areas that matter most to your business.",
    time: "1 week",
  },
  {
    number: "03",
    title: "Google Business Profile Optimisation",
    desc: "I fully optimise your GBP — the single most important factor for map pack rankings.",
    time: "1–2 days",
  },
  {
    number: "04",
    title: "Citations & On-Page Work",
    desc: "I fix citation inconsistencies, build new directory listings, and optimise your website for local search.",
    time: "2–3 weeks",
  },
  {
    number: "05",
    title: "Reviews & Local Link Building",
    desc: "I help you generate more reviews and build local backlinks that boost your authority in your target area.",
    time: "Ongoing",
  },
  {
    number: "06",
    title: "Monitor & Improve",
    desc: "I track rankings, traffic, and leads — continuously refining the strategy to improve results month over month.",
    time: "Monthly",
  },
];

export default function LocalSeoProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          The Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          How Local SEO Works —{" "}
          <span className="text-orange-500">Step by Step</span>
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-10 bottom-10 w-px
                          bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />

          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.09 }}
                className="group flex items-start gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#141414] border border-gray-800
                                group-hover:border-orange-500/50 transition-colors duration-300
                                flex items-center justify-center relative z-10">
                  <span className="text-orange-500 font-extrabold text-sm">{step.number}</span>
                </div>

                <div className="flex-1 bg-[#141414] border border-gray-800 rounded-xl p-5
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-white font-bold text-base mb-2
                                   group-hover:text-orange-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest
                                   text-orange-500 bg-orange-500/10 border border-orange-500/20
                                   px-2.5 py-1 rounded-full h-fit">
                    {step.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}