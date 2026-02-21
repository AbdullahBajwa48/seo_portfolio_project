"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ── Types ── */
interface Testimonial {
  quote: string;
  name: string;
  business: string;
  initial: string;
}

/* ── Data ── */
const testimonials: Testimonial[] = [
  {
    quote:
      "Finally, an SEO agency that explains what they're actually doing. No contracts, clear reports, and real results. Our leads have doubled in six months.",
    name: "Client Name",
    business: "Business Type, Melbourne",
    initial: "C",
  },
  {
    quote:
      "We'd been burned by two agencies before finding Khalis. The difference is night and day. They're responsive, honest, and our Google rankings have never been better.",
    name: "Client Name",
    business: "Business Type, Melbourne",
    initial: "C",
  },
  {
    quote:
      "Straight-up communication, no BS. They told us what was realistic, delivered on it, and we've stayed because it works — not because we're locked in.",
    name: "Client Name",
    business: "Business Type, Melbourne",
    initial: "C",
  },
];

/* ── Star Rating ── */
function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-orange-500 fill-orange-500"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px]
                      rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      {/* Large faded quote mark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-16 text-[200px] leading-none
                      font-serif text-orange-500/5 select-none pointer-events-none">
        "
      </div>

      <div className="relative max-w-4xl mx-auto">

        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 text-center"
        >
          Testimonials
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-16"
        >
          What Melbourne{" "}
          <span className="text-orange-500">Business Owners</span> Say
        </motion.h2>

        {/* ── Testimonial Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative bg-[#141414] border border-gray-800 rounded-2xl
                          p-8 md:p-12 overflow-hidden">

            {/* Orange corner accent */}
            <div className="absolute top-0 left-0 w-20 h-20
                            bg-gradient-to-br from-orange-500/20 to-transparent rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20
                            bg-gradient-to-tl from-orange-500/10 to-transparent rounded-br-2xl" />

            {/* Stars */}
            <div className="flex justify-center mb-6">
              <Stars />
            </div>

            {/* Animated quote text */}
            <div className="relative min-h-[120px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-gray-200 text-lg md:text-xl leading-relaxed
                             text-center italic font-light max-w-2xl mx-auto"
                >
                  "{testimonials[active].quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-orange-500 mx-auto my-6" />

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center gap-3"
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40
                                flex items-center justify-center text-orange-500 font-bold text-sm">
                  {testimonials[active].initial}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">
                    {testimonials[active].name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonials[active].business}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-700 hover:border-orange-500
                         text-gray-400 hover:text-orange-500 flex items-center justify-center
                         transition-colors duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
                  style={{ width: active === i ? "28px" : "8px" }}
                >
                  <span className="absolute inset-0 bg-gray-700 rounded-full" />
                  {active === i && (
                    <motion.span
                      layoutId="dot"
                      className="absolute inset-0 bg-orange-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-700 hover:border-orange-500
                         text-gray-400 hover:text-orange-500 flex items-center justify-center
                         transition-colors duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* ── Bottom trust bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
        >
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "4.9★", label: "Average Rating" },
            { value: "100%", label: "Month-to-Month" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-orange-500 font-extrabold text-xl">{item.value}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}