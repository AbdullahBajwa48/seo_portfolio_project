"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Types ── */
interface Service {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

/* ── Data ── */
const services: Service[] = [
  {
    icon: "📍",
    title: "Local SEO",
    tag: "Most Popular",
    description:
      "Get found by customers in your area. We optimise your Google Business Profile, build local citations, and help you rank in the map pack for searches that matter.",
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    tag: "Foundation",
    description:
      "Site speed, mobile performance, crawlability, indexing issues — we fix the backend problems holding your rankings back.",
  },
  {
    icon: "📝",
    title: "On-Page SEO",
    tag: "Content",
    description:
      "Strategic keyword research, optimised content, meta tags, and internal linking that tell Google exactly what your pages are about.",
  },
  {
    icon: "🔗",
    title: "Link Building",
    tag: "Authority",
    description:
      "Quality backlinks from relevant Australian websites. No spammy link farms. No PBNs. Just legitimate outreach that builds your domain authority.",
  },
  {
    icon: "🔍",
    title: "SEO Audits",
    tag: "Analysis",
    description:
      "A comprehensive analysis of your website's SEO health — technical issues, content gaps, competitor insights, and a clear action plan.",
  },
  {
    icon: "🖥️",
    title: "Website Design",
    tag: "Full Package",
    description:
      "SEO-ready websites built for speed, user experience, and conversions. Your online presence, done right from the start.",
  },
];

/* ── Service Card ── */
function ServiceCard({
  service,
  index,
  inView,
}: {
  service: Service;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1 + index * 0.1,
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative bg-[#141414] border border-gray-800 rounded-2xl p-6
                 hover:border-orange-500/50 transition-colors duration-300 cursor-pointer
                 flex flex-col gap-4 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
      />

      {/* Top row — icon + tag */}
      <div className="flex items-start justify-between relative z-10">
        <div
          className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700
                     group-hover:border-orange-500/40 transition-colors duration-300
                     flex items-center justify-center text-2xl"
        >
          {service.icon}
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-widest
                     text-orange-500 bg-orange-500/10 border border-orange-500/20
                     px-2.5 py-1 rounded-full"
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-white font-bold text-lg relative z-10
                   group-hover:text-orange-400 transition-colors duration-300"
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed relative z-10">
        {service.description}
      </p>

      {/* Bottom arrow */}
      <div className="mt-auto pt-2 relative z-10">
        <span
          className="inline-flex items-center gap-1 text-orange-500 text-xs font-semibold
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     translate-x-[-4px] group-hover:translate-x-0"
        >
          Learn more <span>→</span>
        </span>
      </div>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full
                   bg-gradient-to-r from-orange-500 to-orange-400
                   transition-all duration-500 ease-out"
      />
    </motion.div>
  );
}

/* ── Main Component ── */
export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]
                   rounded-full bg-orange-500/5 blur-[140px] pointer-events-none"
      />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto" ref={titleRef}>

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3 text-center"
        >
          What We Do
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold
                     text-center leading-tight mb-5"
        >
          SEO Services That Drive{" "}
          <span className="text-orange-500">Real Results</span>
        </motion.h2>

        {/* ── Intro ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray-400 text-base text-center max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          From local search domination to technical fixes and content that ranks,
          we offer complete search engine optimisation services tailored to
          Melbourne businesses.
        </motion.p>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-orange-500
                       text-orange-500 hover:bg-orange-500 hover:text-white
                       font-semibold px-8 py-3 rounded transition-all duration-300
                       text-sm active:scale-95 group"
          >
            View All Services
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}