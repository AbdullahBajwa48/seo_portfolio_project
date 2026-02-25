"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is local SEO and how is it different from regular SEO?",
    a: "Local SEO focuses on improving your visibility in Google's local search results and map pack. While regular SEO targets broader organic rankings, local SEO is specifically designed for businesses that serve customers in a geographic area — like Melbourne suburbs or specific service areas.",
  },
  {
    q: "How long does local SEO take to work?",
    a: "Most businesses see improvements in local rankings within 2–4 months, with stronger results building over 6+ months. Factors like competition, your current online presence, and review volume all affect the timeline.",
  },
  {
    q: "Do I need a physical address for local SEO?",
    a: "Not necessarily. Service-area businesses (like tradies who travel to customers) can hide their address on Google Business Profile while still ranking for local searches. I'll set up your profile correctly based on your business model.",
  },
  {
    q: "How important are Google reviews for local SEO?",
    a: "Very important. Reviews influence both your rankings and whether customers choose you over competitors. I'll help you build a system for generating consistent, genuine reviews.",
  },
  {
    q: "Can you help me rank in multiple suburbs?",
    a: "Yes. I create geo-targeted strategies for businesses that serve multiple areas — including location pages, suburb-specific content, and targeted keyword strategies.",
  },
  {
    q: "What if I already have a Google Business Profile?",
    a: "Great — we'll start by auditing and optimising it. Most GBPs are underutilised, with missing information, poor categories, no posts, and inconsistent details. There's almost always room for significant improvement.",
  },
];

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + index * 0.06 }}
      className="border border-gray-800 rounded-xl overflow-hidden
                 hover:border-orange-500/30 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 bg-[#141414] text-left group"
      >
        <span className="text-white font-semibold text-sm group-hover:text-orange-400
                         transition-colors duration-300">
          {faq.q}
        </span>
        <span className={`text-orange-500 text-xl font-light shrink-0 transition-transform
                          duration-300 ${open ? "rotate-45" : "rotate-0"}`}>
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-[#141414] border-t border-gray-800/60">
              <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LocalSeoFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 text-center"
        >
          FAQ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-14 text-center"
        >
          Local SEO —{" "}
          <span className="text-orange-500">Frequently Asked Questions</span>
        </motion.h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}