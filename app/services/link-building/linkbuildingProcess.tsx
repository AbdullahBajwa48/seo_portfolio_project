"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Link Profile Audit",
    desc: "I analyse your current backlink profile and citations — what you have, what's helping, what's hurting, and what's missing.",
    time: "3–5 days",
  },
  {
    number: "02",
    title: "Competitor Analysis",
    desc: "I research where your competitors are getting their links. This reveals opportunities and benchmarks for your campaign.",
    time: "2–3 days",
  },
  {
    number: "03",
    title: "Strategy Development",
    desc: "Based on the audit, I create a link building plan — target sites for backlinks, priority directories for citations, and outreach approach.",
    time: "1 week",
  },
  {
    number: "04",
    title: "Outreach & Acquisition",
    desc: "I execute the campaign — reaching out to relevant sites, securing guest post placements, and building citations across directories.",
    time: "Ongoing",
  },
  {
    number: "05",
    title: "Monitoring & Reporting",
    desc: "You receive monthly reports showing links acquired, citations built, and authority growth. Full transparency on every single link.",
    time: "Monthly",
  },
];

export default function LinkBuildingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
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
          How I Build Links{" "}
          <span className="text-orange-500">for Your Business</span>
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