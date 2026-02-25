"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  { icon: "🔍", title: "Ecommerce SEO Audit", desc: "Full analysis of your store — technical health, site structure, product pages, category pages, and competitor positioning. You'll see exactly what's holding your organic performance back." },
  { icon: "🏗️", title: "Site Architecture Optimisation", desc: "I optimise your category hierarchy, internal linking, and navigation to help Google discover and rank your most important pages." },
  { icon: "📦", title: "Product Page Optimisation", desc: "I optimise titles, descriptions, images, schema markup, and on-page elements to rank for product-specific searches and convert visitors into customers." },
  { icon: "🗂️", title: "Category Page SEO", desc: "Category pages often have the highest ranking potential. I optimise them for broader search terms and structure them to capture traffic at the research stage." },
  { icon: "🛠️", title: "Technical SEO for Ecommerce", desc: "Faceted navigation, duplicate content, pagination, site speed with large catalogs — I identify and fix technical issues that hurt your rankings." },
  { icon: "🎯", title: "Keyword Research for Products", desc: "High-intent product keywords your customers actually search for — not just high-volume terms, but phrases that indicate buying intent and drive conversions." },
  { icon: "✍️", title: "Content Strategy", desc: "Buying guides, comparison posts, and how-to articles capture customers earlier in their journey. I develop a content plan that supports your product SEO." },
  { icon: "🏷️", title: "Schema Markup for Products", desc: "Product schema helps Google display rich results — price, availability, reviews, ratings. I implement structured data across your store to improve click-through rates." },
  { icon: "🔗", title: "Link Building for Ecommerce", desc: "I acquire quality links through product reviews, resource mentions, digital PR, and relevant industry sites to build the authority your store needs to compete." },
];

export default function EcommerceSeoWhatsIncluded() {
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
          What&apos;s Included
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
          >
            What&apos;s Included in My{" "}
            <span className="text-orange-500">Ecommerce SEO Services</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-3 text-center"
          >
            <p className="text-orange-500 font-extrabold text-2xl">{included.length}</p>
            <p className="text-gray-500 text-xs mt-0.5">Deliverables</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {included.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.05 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}