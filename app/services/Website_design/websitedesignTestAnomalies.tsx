"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Our old website was beautiful but invisible on Google. Bhavleen rebuilt it with SEO in mind — now we're ranking and getting enquiries we never got before.",
    name: "Client Name",
    role: "Business Type, Melbourne",
    initials: "CN",
    result: "Ranking & Getting Enquiries",
  },
  {
    quote: "Fast, professional, and actually understands SEO. Our new site loads in under two seconds and we're already seeing organic traffic grow.",
    name: "Client Name",
    role: "Business Type, Melbourne",
    initials: "CN",
    result: "Under 2s Load Time",
  },
];

const stats = [
  { value: "<2s", label: "Average page load time" },
  { value: "100%", label: "Mobile responsive" },
  { value: "3–6", label: "Weeks to launch" },
  { value: "Day 1", label: "SEO ready from launch" },
];

export default function WebDesignResults() {
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
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          What{" "}
          <span className="text-orange-500">Clients Say</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#141414] border border-gray-800 rounded-xl p-5 text-center
                         hover:border-orange-500/30 transition-colors duration-300"
            >
              <p className="text-orange-500 font-extrabold text-3xl mb-1">{s.value}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + i * 0.1 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-7
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-orange-500/8 text-8xl font-serif
                              leading-none select-none">&quot;</div>

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                               text-orange-500 bg-orange-500/10 border border-orange-500/20
                               px-2.5 py-1 rounded-full mb-4">
                {t.result}
              </span>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-orange-500 text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-3 border-t border-gray-800/60 pt-5">
                <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30
                                flex items-center justify-center shrink-0">
                  <span className="text-orange-400 text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}