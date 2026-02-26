"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "./ServiceCore";

const emergingServices = [
  {
    icon: "🤖",
    title: "LLM SEO (AI Search Optimisation)",
    tag: "Future-Ready",
    href: "/services/LLM-seo",
    description:
      "Search is evolving. Tools like ChatGPT, Perplexity, and Google's AI Overviews are changing how people find information. I help your brand get cited and recommended by AI-powered search engines — so you're visible wherever your customers are looking.",
  },
];

const webServices = [
  {
    icon: "🖥️",
    title: "Website Design",
    tag: "Full Package",
    href: "/services/Website_design",
    description:
      "A website built for search from day one. I design fast, mobile-friendly, SEO-ready websites that look professional and convert visitors into customers. No templates that tank your rankings — just clean, strategic design that works.",
  },
];

export default function EmergingAndWebServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Section label ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
        >
          More Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-16"
        >
          Emerging & <span className="text-orange-500">Specialised</span> Services
        </motion.h2>

        {/* ── Sub-group 1: Emerging SEO ── */}
        <div className="mb-14">

          {/* Sub-group label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-6 rounded-full bg-orange-500" />
            <p className="text-white font-bold text-lg">Emerging SEO</p>
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-[10px] font-bold uppercase tracking-widest
                             text-orange-500 bg-orange-500/10 border border-orange-500/20
                             px-2.5 py-1 rounded-full shrink-0">
              New
            </span>
          </motion.div>

          {/* LLM card — full width on mobile, half on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {emergingServices.map((service, i) => (
              <ServiceCard
                key={service.href}
                service={service}
                index={i}
                inView={inView}
              />
            ))}

            {/* Explainer card next to LLM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="bg-[#141414] border border-dashed border-orange-500/30
                         rounded-2xl p-6 flex flex-col justify-center gap-3"
            >
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">
                Why it matters
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Over <span className="text-white font-semibold">30% of searches</span> are
                already being influenced by AI tools. Businesses that get ahead of this shift
                now will have a significant advantage as AI-driven search becomes the norm.
              </p>
              <p className="text-gray-600 text-xs">
                AI search optimisation is no longer optional — it's the next frontier.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-orange-500/30 via-gray-800 to-transparent mb-14"
        />

        {/* ── Sub-group 2: Web Services ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-6 rounded-full bg-orange-500" />
            <p className="text-white font-bold text-lg">Web Services</p>
            <div className="flex-1 h-px bg-gray-800" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {webServices.map((service, i) => (
              <ServiceCard
                key={service.href}
                service={service}
                index={i}
                inView={inView}
                
              />
            ))}

            {/* Website CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-transparent
                         border border-orange-500/20 rounded-2xl p-6
                         flex flex-col justify-between gap-4"
            >
              <div>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
                  SEO + Design Together
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Most web designers don't think about SEO. Most SEO consultants don't
                  build websites. Getting both from one person means your site is built
                  right from day one — no retrofitting required.
                </p>
              </div>
              <a 
                href="/services/website-design"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600
                           active:scale-95 text-white font-bold px-5 py-2.5 rounded
                           text-xs transition-all duration-300 w-fit group"
              >
                Learn About Web Design
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}