"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ── Types ── */
interface FAQ {
  q: string;
  a: string;
}

/* ── Data ── */
const faqs: FAQ[] = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most Melbourne businesses start seeing measurable improvements in organic traffic and rankings within 3–6 months, depending on competition and your website's current state. We set realistic expectations upfront — no false promises.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. Khalis Marketing operates on a month-to-month basis. You stay because you're seeing results, not because you're stuck in a contract. We believe in earning your business every month.",
  },
  {
    q: "What's included in the free SEO audit?",
    a: "Our free audit covers technical SEO issues, on-page optimisation gaps, local SEO opportunities, competitor analysis, and a prioritised action plan. It's a genuine assessment — not a sales pitch disguised as an audit.",
  },
  {
    q: "Do I own my accounts and data?",
    a: "Absolutely. Your Google Analytics, Search Console, Google Business Profile, and any content we create — it's all yours. If you ever leave, everything stays with you.",
  },
  {
    q: "How is Khalis Marketing different from other SEO agencies?",
    a:"We're transparent about what we do and why. No jargon-filled reports. No mysterious &ldquo;proprietary methods.&rdquo; You get clear communication, honest timelines, and strategies that focus on leads and revenue — not just rankings.",
  },    
  {
    q: "Which industries do you work with?",
    a: "We work with Melbourne businesses across trades, retail, hospitality, medical, finance, and professional services. Our strategies are tailored to your industry, audience, and goals.",
  },
];

/* ── Single FAQ Item ── */
function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  inView,
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.08 }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left group flex items-start gap-4 p-5 md:p-6 rounded-xl
                   border transition-colors duration-300 cursor-pointer
                   ${isOpen
                     ? "bg-[#1a1a1a] border-orange-500/50"
                     : "bg-[#141414] border-gray-800 hover:border-gray-700"
                   }`}
      >
        {/* Index number */}
        <span
          className={`text-xs font-bold mt-1 shrink-0 transition-colors duration-300
                     ${isOpen ? "text-orange-500" : "text-gray-600 group-hover:text-gray-500"}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`flex-1 font-semibold text-base leading-snug transition-colors duration-300
                     ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}
        >
          {faq.q}
        </span>

        {/* Plus / Minus icon */}
        <span
          className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center
                     transition-all duration-300 mt-0.5
                     ${isOpen
                       ? "border-orange-500 bg-orange-500 text-white rotate-45"
                       : "border-gray-700 text-gray-500 group-hover:border-gray-500"
                     }`}
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pt-3 pb-5 pl-[52px]">
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px]
                      rounded-full bg-orange-500/5 blur-[130px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto" ref={ref}>

        {/* ── Visual FAQ badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30
                          rounded-full px-4 py-2">
            <span className="text-orange-500 text-lg">?</span>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              FAQ
            </span>
            <span className="text-orange-500 text-lg">?</span>
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-4"
        >
          Frequently Asked{" "}
          <span className="text-orange-500">Questions</span>
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="text-gray-500 text-sm text-center mb-12"
        >
          Can't find what you're looking for?{" "}
          <a href="#contact" className="text-orange-500 hover:underline transition-all">
            Get in touch →
          </a>
        </motion.p>

        {/* ── FAQ List ── */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              inView={inView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="mt-12 bg-[#141414] border border-gray-800 rounded-2xl p-7 text-center"
        >
          <p className="text-white font-semibold text-base mb-1">
            Still have questions?
          </p>
          <p className="text-gray-500 text-sm mb-5">
            We're happy to answer anything — no sales pressure, just straight answers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600
                       active:scale-95 text-white font-semibold px-7 py-3 rounded
                       transition-all duration-300 text-sm group"
          >
            Ask Us Anything
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}