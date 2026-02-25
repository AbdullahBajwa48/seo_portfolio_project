"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  {
    icon: "📊",
    title: "Google Business Profile Optimisation",
    desc: "Fully optimised profile — business info, categories, services, photos, posts, and Q&A — so you stand out in the map pack.",
  },
  {
    icon: "🎯",
    title: "Local Keyword Research",
    desc: "Suburb-specific and near me keywords mapped to a strategy targeting customers in your exact service area.",
  },
  {
    icon: "📋",
    title: "Local Citations & Directory Listings",
    desc: "Consistent business info across Yellow Pages, TrueLocal, Yelp, and industry sites — audited, fixed, and built.",
  },
  {
    icon: "📝",
    title: "On-Page Local Optimisation",
    desc: "Location pages, service area content, local schema markup, NAP consistency, and geo-targeted meta tags.",
  },
  {
    icon: "⭐",
    title: "Review Strategy & Management",
    desc: "A system for generating more positive reviews and responding in a way that builds trust with potential customers.",
  },
  {
    icon: "🔗",
    title: "Local Link Building",
    desc: "Genuine backlinks from local Melbourne websites, community organisations, and industry directories.",
  },
  {
    icon: "🗺️",
    title: "Google Maps Ranking",
    desc: "Strategies specifically designed to get your business into the top 3 local results that appear with a map.",
  },
  {
    icon: "📈",
    title: "Monthly Reporting",
    desc: "Clear reports showing local rankings, GBP performance, website traffic from local search, and leads generated.",
  },
];

export default function LocalSeoWhatsIncluded() {
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
            <span className="text-orange-500">Local SEO Services</span>
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