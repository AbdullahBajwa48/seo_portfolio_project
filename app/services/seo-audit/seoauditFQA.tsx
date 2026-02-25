"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does an SEO audit take?",
    a: "A comprehensive audit typically takes 5–7 business days depending on your website's size and complexity. You'll receive a full report plus a walkthrough call.",
  },
  {
    q: "Is the audit automated or manual?",
    a: "Both. I use professional tools to gather data, but every finding is manually reviewed and analysed. You're not getting a generic automated report — you're getting expert interpretation.",
  },
  {
    q: "What if I don't understand the technical stuff?",
    a: "I explain everything in plain English. The walkthrough call is specifically for answering questions and making sure you understand every recommendation.",
  },
  {
    q: "Can you implement the fixes too?",
    a: "Yes. You can use the audit as a standalone roadmap or engage me to implement the recommendations as part of ongoing SEO. Your choice.",
  },
  {
    q: "How is this different from free SEO audit tools?",
    a: "Free tools run surface-level automated checks. My audit goes deeper — manual content analysis, competitor research, strategic recommendations, and prioritisation based on your specific business goals.",
  },
  {
    q: "What do I need to provide?",
    a: "Access to Google Analytics, Google Search Console, and your website backend (if you want me to implement fixes). If you don't have these set up, I can help with that too.",
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

export default function SeoAuditFAQ() {
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
          SEO Audit —{" "}
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