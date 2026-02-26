"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  { icon: "🔎", title: "Discovery & Strategy", desc: "Understanding your business, goals, audience, and keyword opportunities before a single pixel is designed." },
  { icon: "🏗️", title: "Site Architecture Planning", desc: "URL structure, navigation, and page hierarchy designed for SEO — mapped out before design begins." },
  { icon: "🎨", title: "Custom Design", desc: "Clean, professional design tailored to your brand. No cookie-cutter templates — every site is built specifically for you." },
  { icon: "📱", title: "Mobile-Responsive Development", desc: "Fully functional and beautiful across all devices and screen sizes, from desktop to the smallest phones." },
  { icon: "⚡", title: "Speed Optimisation", desc: "Lightweight build, compressed images, caching, and fast hosting recommendations so your site loads in under 2 seconds." },
  { icon: "📝", title: "On-Page SEO Setup", desc: "Title tags, meta descriptions, headings, and content optimised for your target keywords from the moment you launch." },
  { icon: "🛠️", title: "Technical SEO Configuration", desc: "Schema markup, sitemaps, robots.txt, SSL, and indexing setup — all configured correctly before launch." },
  { icon: "📄", title: "Content Integration", desc: "Your copy and images implemented with SEO best practices — proper heading structure, alt text, and internal linking." },
  { icon: "📊", title: "Analytics & Search Console", desc: "Google Analytics and Search Console configured from day one so you can see how your site performs from launch." },
  { icon: "🎓", title: "Training & Handover", desc: "I show you how to manage and update your site confidently — no ongoing dependency on a developer for basic tasks." },
];

export default function WebDesignWhatsIncluded() {
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
            <span className="text-orange-500">Website Design Service</span>
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