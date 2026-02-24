"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Types ── */
interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  href: string;
  tag?: string;
}

/* ── Data ── */
const coreServices: ServiceItem[] = [
  {
    icon: "🔎",
    title: "Search Engine Optimisation",
    tag: "Foundation",
    href: "/services/seo",
    description:
      "Comprehensive SEO strategies that improve your visibility across Google search. From keyword research and content optimisation to technical improvements and link building — everything works together to move your site up the rankings and bring in qualified traffic.",
  },
  {
    icon: "📍",
    title: "Local SEO",
    tag: "Most Popular",
    href: "/services/local-seo",
    description:
      "Get found by customers in your area. I optimise your Google Business Profile, build local citations, and target location-based keywords so you show up in the map pack and local search results. Essential for trades, hospitality, medical, and service-based businesses across Melbourne.",
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    tag: "Essential",
    href: "/services/technical-seo",
    description:
      "Your website might look great — but if Google can't crawl it properly, you won't rank. I fix site speed issues, mobile usability problems, crawl errors, indexing issues, and core web vitals. A strong technical foundation is where sustainable rankings start.",
  },
  {
    icon: "📝",
    title: "On-Page SEO",
    tag: "Content",
    href: "/services/on-page-seo",
    description:
      "Strategic optimisation of your website's content, meta tags, headings, internal links, and keyword placement. I make sure every page communicates clearly to both users and search engines — so Google knows exactly what you offer and who you serve.",
  },
  {
    icon: "🔗",
    title: "Link Building",
    tag: "Authority",
    href: "/services/link-building",
    description:
      "Quality backlinks remain one of the strongest ranking signals. I build links through genuine outreach to relevant Australian websites — no spammy directories, no private blog networks, no shortcuts that put your site at risk. Just legitimate authority-building.",
  },
  {
    icon: "🩺",
    title: "SEO Audit",
    tag: "Analysis",
    href: "/services/seo-audit",
    description:
      "A complete health check for your website's search performance. I analyse technical issues, on-page gaps, backlink profile, competitor positioning, and content opportunities — then deliver a prioritised action plan you can actually use.",
  },
];

/* ── Reusable Service Card ── */
export function ServiceCard({
  service,
  index,
  inView,
}: {
  service: ServiceItem;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.08 }}
      className="group relative bg-[#141414] border border-gray-800 rounded-2xl
                 overflow-hidden hover:border-orange-500/40 transition-colors
                 duration-300 flex flex-col"
    >
      {/* Top orange accent bar — grows on hover */}
      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r
                      from-orange-500 to-orange-400 transition-all duration-500 ease-out" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5
                      to-transparent opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 pointer-events-none" />

      <div className="p-6 flex flex-col flex-1 relative z-10">

        {/* Icon + tag row */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                          group-hover:border-orange-500/30 transition-colors duration-300
                          flex items-center justify-center text-xl shrink-0">
            {service.icon}
          </div>
          {service.tag && (
            <span className="text-[10px] font-bold uppercase tracking-widest
                             text-orange-500 bg-orange-500/10 border border-orange-500/20
                             px-2.5 py-1 rounded-full">
              {service.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base mb-3
                       group-hover:text-orange-400 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className="mt-5 pt-4 border-t border-gray-800/60">
          <Link
            href={service.href}
            
            className="inline-flex items-center gap-1.5 text-orange-500 text-xs
                       font-bold uppercase tracking-wider hover:gap-3
                       transition-all duration-300"
          >
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Reusable Section Wrapper ── */
export function ServiceSection({
  label,
  headline,
  accentWord,
  description,
  services,
  bgColor = "bg-[#0a0a0a]",
  children,
}: {
  label: string;
  headline: string;
  accentWord: string;
  description?: string;
  services: ServiceItem[];
  bgColor?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Split headline to highlight accentWord
  const parts = headline.split(accentWord);

  return (
    <section className={`${bgColor} py-24 px-6 md:px-16 lg:px-24`}>
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between
                        gap-4 mb-14">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3"
            >
              {label}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
            >
              {parts[0]}
              <span className="text-orange-500">{accentWord}</span>
              {parts[1]}
            </motion.h2>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
                className="text-gray-500 text-sm leading-relaxed mt-3"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Service count badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 bg-[#1a1a1a] border border-gray-800 rounded-xl
                       px-5 py-3 text-center"
          >
            <p className="text-orange-500 font-extrabold text-2xl">
              {services.length}
            </p>
            <p className="text-gray-500 text-xs mt-0.5">Services</p>
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}

/* ── Core SEO Section Export ── */
export default function CoreSEOServices() {
  return (
    <ServiceSection
      label="Core SEO Services"
      headline="Core SEO Services"
      accentWord="SEO"
      description="The fundamental services that form the backbone of any successful search strategy — built for Melbourne businesses that want sustainable, long-term growth."
      services={coreServices}
      bgColor="bg-[#0a0a0a]"
    />
  );
}