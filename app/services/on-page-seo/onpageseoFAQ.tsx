"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What's the difference between on-page and off-page SEO?",
    a: "On-page SEO is everything you control on your website — content, titles, headings, internal links. Off-page SEO refers to external factors like backlinks and brand mentions.",
  },
  {
    q: "How long does on-page optimisation take?",
    a: "It depends on your site size. A small business website can be fully optimised in 1–2 weeks. Larger sites with hundreds of pages take longer but are tackled in priority order.",
  },
  {
    q: "Will on-page SEO alone get me to page 1?",
    a: "It depends on competition. For less competitive keywords, strong on-page SEO can be enough. For competitive terms, you'll likely need technical SEO, content, and link building working together.",
  },
  {
    q: "Do you rewrite my content?",
    a: "If needed, yes. Sometimes existing content just needs tweaking. Other times, a full rewrite delivers better results. I'll recommend the right approach for each page.",
  },
  {
    q: "Can you optimise new pages before they go live?",
    a: "Absolutely. Optimising content before publishing gives you the best chance of ranking quickly. I can work from drafts or briefs.",
  },
  {
    q: "How do I know if my on-page SEO is working?",
    a: "Improved rankings, increased organic traffic, and more engagement on optimised pages. I track all of this and report on progress monthly.",
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

export default function OnPageSeoFAQ() {
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
          On-Page SEO —{" "}
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