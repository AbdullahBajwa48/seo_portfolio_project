"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We talk about your business, goals, and challenges. I'll be honest about whether SEO is the right fit — and if it's not, I'll tell you.",
  },
  {
    number: "02",
    title: "SEO Audit",
    desc: "I analyse your website, competitors, and current rankings. This reveals exactly what's working, what's not, and what opportunities exist.",
  },
  {
    number: "03",
    title: "Custom Strategy",
    desc: "Based on the audit, I build a strategy tailored to your business — prioritised actions, target keywords, and a realistic timeline.",
  },
  {
    number: "04",
    title: "Execution",
    desc: "I implement the strategy — technical fixes, on-page optimisation, content, link building. You're kept informed every step of the way.",
  },
  {
    number: "05",
    title: "Report & Refine",
    desc: "Monthly reports show your progress in plain English. I continuously refine the strategy based on what's driving results.",
  },
];

export default function ServiceProcess() {
  const ref = useRef<HTMLDivElement>(null);
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
          How It <span className="text-orange-500">Works</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[28px] top-10 bottom-10 w-px
                          bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-transparent" />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                className="group flex items-start gap-6"
              >
                {/* Step number circle */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#141414] border border-gray-800
                                group-hover:border-orange-500/50 transition-colors duration-300
                                flex items-center justify-center relative z-10">
                  <span className="text-orange-500 font-extrabold text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className="bg-[#141414] border border-gray-800 rounded-xl p-5 flex-1
                                group-hover:border-orange-500/30 transition-colors duration-300">
                  <h3 className="text-white font-bold text-base mb-2
                                 group-hover:text-orange-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}