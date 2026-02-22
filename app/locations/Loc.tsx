"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

const locations = [
  {
    name: "Werribee",
    number: "01",
    href: "/locations/werribee",
    description:
      "Werribee's growing population means more customers searching locally. I help Werribee businesses dominate local search results and Google Maps.",
    stat: { value: "↑", label: "Growing Population" },
    color: "from-orange-500/20",
  },
  {
    name: "Hoppers Crossing",
    number: "02",
    href: "/locations/hoppers-crossing",
    description:
      "One of Melbourne's busiest western suburbs. Stand out from competitors with SEO that puts your business in front of local customers actively searching.",
    stat: { value: "🏙️", label: "Busiest Western Suburb" },
    color: "from-orange-400/20",
  },
  {
    name: "Tarneit",
    number: "03",
    href: "/locations/tarneit",
    description:
      "One of Australia's fastest-growing suburbs. Get in front of new residents searching for local services before your competitors do.",
    stat: { value: "#1", label: "Fastest Growing in AU" },
    color: "from-orange-600/20",
  },
  {
    name: "Melton",
    number: "04",
    href: "/locations/melton",
    description:
      "A rapidly expanding area with increasing demand for local services. I help Melton businesses capture local search traffic and grow their customer base.",
    stat: { value: "↗", label: "Rapidly Expanding" },
    color: "from-orange-500/20",
  },
];

/* ── Animated suburb graphic ── */
function SuburbGraphic({ active, number }: { active: boolean; number: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      {/* Concentric rings */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={active ? {
            scale: [1, 1 + i * 0.15],
            opacity: [0.4, 0],
          } : { scale: 1, opacity: 0.08 }}
          transition={{
            repeat: active ? Infinity : 0,
            duration: 2,
            delay: i * 0.4,
            ease: "easeOut",
          }}
          className="absolute rounded-full border border-orange-500"
          style={{
            width: `${i * 20 + 20}%`,
            height: `${i * 20 + 20}%`,
          }}
        />
      ))}

      {/* Static base ring */}
      <div className="absolute w-20 h-20 rounded-full border border-orange-500/30" />
      <div className="absolute w-32 h-32 rounded-full border border-orange-500/15" />
      <div className="absolute w-44 h-44 rounded-full border border-orange-500/08" />

      {/* Center pin */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <motion.div
          animate={active ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ repeat: active ? Infinity : 0, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-5 rounded-full bg-orange-500
                     shadow-[0_0_20px_rgba(249,115,22,0.8)]"
        />
        <div className="w-px h-5 bg-gradient-to-b from-orange-500/60 to-transparent" />
      </div>

      {/* Number watermark */}
      <span className="absolute text-[80px] font-extrabold text-white/[0.04]
                       select-none leading-none">
        {number}
      </span>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

/* ── Location Card ── */
function LocationCard({
  loc,
  index,
  inView,
}: {
  loc: typeof locations[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#141414] border border-gray-800
                 rounded-2xl overflow-hidden hover:border-orange-500/40
                 transition-colors duration-300 flex flex-col"
    >
      {/* Top sweep */}
      <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r
                      from-orange-500 to-orange-400 transition-all duration-500" />

      {/* Graphic area */}
      <div className={`relative h-44 bg-gradient-to-b ${loc.color} to-transparent`}>
        <SuburbGraphic active={hovered} number={loc.number} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">

        {/* Header row */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold text-orange-500 uppercase
                             tracking-widest block mb-1">
              Western Melbourne
            </span>
            <h3 className="text-white font-extrabold text-xl
                           group-hover:text-orange-400 transition-colors duration-300">
              {loc.name}
            </h3>
          </div>
          <span className="text-2xl font-extrabold text-white/10 select-none
                           group-hover:text-white/20 transition-colors duration-500">
            {loc.number}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {loc.description}
        </p>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-800/60">
          <Link
            href={loc.href}
            className="inline-flex items-center gap-2 text-orange-500 text-xs
                       font-bold uppercase tracking-wider hover:gap-3
                       transition-all duration-300 group/link"
          >
            SEO Services {loc.name}
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function LocationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              Locations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight"
          >
            Areas I <span className="text-orange-500">Serve</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc, i) => (
            <LocationCard key={loc.name} loc={loc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}