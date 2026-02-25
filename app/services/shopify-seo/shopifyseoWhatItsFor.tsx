"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const types = [
  { icon: "🆕", title: "New Shopify Stores", desc: "Getting SEO right from the start — building an organic foundation before scaling paid traffic." },
  { icon: "📊", title: "Established Stores", desc: "Breaking through traffic plateaus — finding the next level of organic growth for your store." },
  { icon: "💸", title: "Ad-Reliant Stores", desc: "Building an organic channel to reduce your dependency on Facebook and Google Ads spend." },
  { icon: "🔄", title: "Post-Migration Stores", desc: "Fixing SEO issues from moving to Shopify — recovering rankings lost in the transition." },
  { icon: "📦", title: "Dropshipping Businesses", desc: "Standing out in competitive niches where every other store is using the same supplier descriptions." },
  { icon: "🇦🇺", title: "Melbourne Brands Going National", desc: "Local businesses shipping Australia-wide who want organic visibility across the country." },
];

export default function ShopifySeoWhoItsFor() {
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
          Who It&apos;s For
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight max-w-xl"
          >
            Who Is{" "}
            <span className="text-orange-500">Shopify SEO</span> For?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            Whether you&apos;re just launching or looking to scale, I&apos;ll build an SEO
            strategy that fits your Shopify store.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
                {t.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {t.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}