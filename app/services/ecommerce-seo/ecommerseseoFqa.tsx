"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How is ecommerce SEO different from regular SEO?",
    a: "Ecommerce SEO deals with unique challenges — large numbers of product pages, complex site structures, duplicate content from filters and variations, and competition from major retailers. It requires specialist strategies for product and category page optimisation.",
  },
  {
    q: "How long until I see results from ecommerce SEO?",
    a: "Most stores see measurable improvements within 3–6 months. High-competition product categories may take longer. I focus on quick wins early while building toward larger ranking goals.",
  },
  {
    q: "Can you help if I have thousands of products?",
    a: "Yes. I prioritise your most important products and categories first, then scale the strategy across your catalog. Automation and templated optimisation help manage large inventories efficiently.",
  },
  {
    q: "Do you work with Shopify stores?",
    a: "Yes — Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. Each has its own SEO quirks, and I tailor the approach accordingly.",
  },
  {
    q: "Will SEO work if I'm competing against Amazon and big retailers?",
    a: "You won't outrank Amazon for generic terms like \"running shoes.\" But you can absolutely rank for long-tail, specific product searches where big retailers are weaker. That's where ecommerce SEO delivers the best ROI.",
  },
  {
    q: "How do you measure ecommerce SEO success?",
    a: "Revenue from organic search is the ultimate metric. I also track organic traffic, keyword rankings, product page visibility, and conversion rates. You'll see exactly how SEO contributes to your bottom line.",
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

export default function EcommerceSeoFAQ() {
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
          Ecommerce SEO —{" "}
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