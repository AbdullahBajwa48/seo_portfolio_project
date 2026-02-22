"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  { icon: "⚙️", label: "Technical Expertise" },
  { icon: "📝", label: "Smart Content Strategy" },
  { icon: "📈", label: "Consistent Execution" },
];

export default function CaseStudiesIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Light content panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-6 h-px bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                  The Approach
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                className="text-gray-900 text-2xl md:text-3xl font-extrabold
                           leading-snug mb-5"
              >
                Every business is different —{" "}
                <span className="text-orange-500">and so is every SEO strategy.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
                className="text-gray-500 text-base leading-relaxed"
              >
                These case studies show what's possible when you combine technical
                expertise, smart content strategy, and consistent execution. No
                vanity metrics. No inflated numbers. Just honest results from real
                Melbourne businesses.
              </motion.p>
            </div>

            {/* Right — pillars */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4 bg-gray-50">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                  className="group flex items-center gap-4 bg-white border border-gray-200
                             rounded-xl px-5 py-4 hover:border-orange-300
                             hover:shadow-sm transition-all duration-300"
                >
                  <span className="text-xl">{p.icon}</span>
                  <p className="text-gray-800 font-semibold text-sm
                                group-hover:text-orange-600 transition-colors duration-300 flex-1">
                    {p.label}
                  </p>
                  <span className="text-gray-300 group-hover:text-orange-400
                                   group-hover:translate-x-1 transition-all duration-300 text-sm">
                    →
                  </span>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="text-gray-400 text-xs leading-relaxed pt-1"
              >
                Results vary by industry and competition. Every figure reflects real data.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}