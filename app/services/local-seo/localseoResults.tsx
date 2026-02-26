"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "We went from nowhere on Google Maps to the top 3 for our main keywords. The phone hasn&apos;t stopped ringing. Bhavleen knows local SEO inside out.",
    name: "Client Name",
    role: "Business Owner, Melbourne",
    initials: "CN",
    result: "Top 3 Map Pack",
  },
  {
    quote: "Finally, someone who actually explains what they&apos;re doing. Our Google Business Profile is performing better than ever and we&apos;re getting way more calls from local customers.",
    name: "Client Name",
    role: "Business Owner, Melbourne",
    initials: "CN",
    result: "More Local Calls",
  },
];

const caseStudies = [
  {
    icon: "🔧",
    business: "Plumbing Company",
    location: "South East Melbourne",
    stats: ["312% increase in organic traffic", "Ranking in map pack for 15+ keywords", "3x more enquiries"],
  },
  {
    icon: "⚡",
    business: "Electrician",
    location: "Northern Melbourne",
    stats: ["From invisible to map pack in 4 months", "187% traffic increase", "28 leads/month"],
  },
  {
    icon: "🦷",
    business: "Dental Clinic",
    location: "Western Melbourne",
    stats: ["2x patient enquiries", "34 keywords on page 1", "89% increase in GBP views"],
  },
];

export default function LocalSeoResults() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Case Studies */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          Case Studies
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14"
        >
          Local SEO Results in{" "}
          <span className="text-orange-500">Melbourne</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.business}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl mb-4">
                {cs.icon}
              </div>

              <h3 className="text-white font-bold text-base mb-1
                             group-hover:text-orange-400 transition-colors duration-300">
                {cs.business}
              </h3>
              <p className="text-gray-600 text-xs mb-4">{cs.location}</p>

              <ul className="space-y-2 flex-1 mb-5">
                {cs.stats.map((stat) => (
                  <li key={stat} className="flex items-start gap-2">
                    <span className="text-orange-500 text-xs mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-400 text-xs leading-relaxed">{stat}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-800/60 pt-4">
                <a href="/case-studies"
                  className="inline-flex items-center gap-1.5 text-orange-500 text-xs
                             font-bold uppercase tracking-wider hover:gap-3 transition-all duration-300">
                  Read Case Study
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.35 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-10"
        >
          What Melbourne Business{" "}
          <span className="text-orange-500">Owners Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + i * 0.1 }}
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