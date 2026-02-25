"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "After two agencies that delivered nothing, I was sceptical. Bhavleen was different from the first call — honest, clear, no BS. Six months in and our leads have tripled.",
    name: "Client Name",
    role: "Business Owner, Melbourne",
    initials: "CN",
  },
  {
    quote:
      "I finally understand what's happening with my SEO. The reports make sense, the results are real, and I'm not locked into anything. Exactly what I was looking for.",
    name: "Client Name",
    role: "Business Owner, Melbourne",
    initials: "CN",
  },
];

export default function ServiceTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 text-center"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14 text-center"
        >
          What Melbourne Business{" "}
          <span className="text-orange-500">Owners Say</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-8
                         hover:border-orange-500/30 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-orange-500/10 text-8xl font-serif
                              leading-none select-none pointer-events-none">
                
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-orange-500 text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
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