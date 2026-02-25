"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How is SaaS SEO different from regular SEO?",
    a: "SaaS SEO focuses on the full buyer journey — from problem-aware educational content to high-intent comparison and product pages. It's about driving signups and revenue, not just traffic.",
  },
  {
    q: "How long does SaaS SEO take to show results?",
    a: "SEO is a long game. Most SaaS companies see meaningful traffic growth within 4–6 months, with compounding results over 12–24 months. The earlier you start, the sooner you benefit.",
  },
  {
    q: "Should I do SEO or paid ads?",
    a: "Both have a place. Paid ads deliver immediate results but stop when you stop paying. SEO takes longer but builds a compounding asset. Most successful SaaS companies use both, with SEO reducing blended CAC over time.",
  },
  {
    q: "Can you help with international SEO?",
    a: "Yes. Many Melbourne SaaS companies target global markets. I can help with international keyword research, hreflang implementation, and content strategies for multiple regions.",
  },
  {
    q: "Do you write the content, or do we?",
    a: "Either way works. I can develop full content strategies and briefs for your team to write, or I can create the content directly. Most clients prefer a hybrid approach.",
  },
  {
    q: "How do you track SEO's impact on signups?",
    a: "I set up proper conversion tracking — connecting Google Analytics, Search Console, and your CRM or product analytics. You'll see exactly which keywords and pages drive signups and revenue.",
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

export default function SaasSeoFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
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
          SaaS SEO —{" "}
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