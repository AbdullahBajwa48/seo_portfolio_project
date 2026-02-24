"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const challenges = [
  {
    icon: "🔗",
    title: "Rigid URL Structure",
    problem: "Shopify forces URLs into formats like /collections/ and /products/. You can't fully customise them like other platforms.",
    solution: "I optimise what you can control — handles, page titles, and site structure — while ensuring your URL hierarchy is as clean and logical as possible.",
  },
  {
    icon: "📄",
    title: "Duplicate Content Issues",
    problem: "Products in multiple collections, variant pages, and pagination can create duplicate content that confuses Google and splits ranking signals.",
    solution: "I implement canonical tags correctly, manage collection assignments strategically, and ensure Google indexes the right version of each page.",
  },
  {
    icon: "📝",
    title: "Limited Blogging Functionality",
    problem: "Shopify's built-in blog is basic compared to WordPress. Category structures, tagging, and formatting options are limited.",
    solution: "I work within Shopify's blog constraints to create SEO-optimised content, structure posts for maximum visibility, and build internal links that support product pages.",
  },
  {
    icon: "⚡",
    title: "Site Speed Challenges",
    problem: "Apps, large images, and theme bloat can slow your store down — hurting both rankings and conversions directly.",
    solution: "I audit your theme and apps, compress images, remove unnecessary scripts, and implement speed optimisations that work within Shopify's environment.",
  },
  {
    icon: "🗂️",
    title: "Auto-Generated Pages",
    problem: "Shopify creates pages for tags, vendors, and other elements that bloat your site and dilute crawl budget across unimportant pages.",
    solution: "I identify and noindex unnecessary auto-generated pages, keeping Google focused on the pages that actually matter for your business.",
  },
];

export default function ShopifySeoChallenges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          Platform Challenges
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Shopify&apos;s SEO Challenges —{" "}
          <span className="text-orange-500">And How I Solve Them</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          These are the issues baked into Shopify that hold most stores back — and exactly how I address each one.
        </motion.p>

        <div className="flex flex-col gap-4">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300
                         grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-5 items-start"
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 md:flex-col md:items-center md:text-center md:w-28">
                <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700
                                group-hover:border-orange-500/30 transition-colors duration-300
                                flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <p className="text-white font-bold text-sm md:text-xs md:mt-2 leading-snug
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </p>
              </div>

              {/* Problem */}
              <div className="md:border-l md:border-gray-800/60 md:pl-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-red-400 bg-red-400/10 border border-red-400/20
                                 px-2 py-0.5 rounded-full mb-2">
                  The Challenge
                </span>
                <p className="text-gray-500 text-sm leading-relaxed">{item.problem}</p>
              </div>

              {/* Solution */}
              <div className="md:border-l md:border-gray-800/60 md:pl-5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full mb-2">
                  How I Solve It
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}