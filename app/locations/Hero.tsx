"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const suburbs = [
  { name: "Werribee",         x: "28%", y: "62%", delay: 0.6,  size: "lg" as const },
  { name: "Hoppers Crossing", x: "38%", y: "45%", delay: 0.75, size: "md" as const },
  { name: "Tarneit",          x: "55%", y: "32%", delay: 0.9,  size: "md" as const },
  { name: "Melton",           x: "70%", y: "50%", delay: 1.05, size: "sm" as const },
];

/* ── Map Pin ── */
function MapPin({ x, y, label, delay, size }: {
  x: string; y: string; label: string; delay: number; size: "lg" | "md" | "sm";
}) {
  const dot  = size === "lg" ? "w-4 h-4" : size === "md" ? "w-3 h-3" : "w-2.5 h-2.5";
  const ring = size === "lg" ? "w-8 h-8"  : size === "md" ? "w-6 h-6"  : "w-5 h-5";
  const txt  = size === "lg" ? "text-sm font-bold" : "text-xs font-semibold";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      style={{ left: x, top: y }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
    >
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: delay + 0.15 }}
        className={`bg-[#1a1a1a] border border-gray-700 text-gray-200 ${txt}
                    px-2.5 py-1 rounded-lg whitespace-nowrap shadow-lg`}
      >
        {label}
      </motion.div>
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: delay + 0.3 }}
          className={`absolute ${ring} rounded-full bg-orange-500/30`}
        />
        <div className={`${dot} rounded-full bg-orange-500 z-10
                         shadow-[0_0_12px_rgba(249,115,22,0.8)]`} />
      </div>
      <div className="w-px h-4 bg-gradient-to-b from-orange-500/60 to-transparent" />
    </motion.div>
  );
}

/* ── SVG Connection Lines ── */
function ConnectionLines({ visible }: { visible: boolean }) {
  const points = [
    { cx: 134, cy: 261 },
    { cx: 182, cy: 189 },
    { cx: 264, cy: 134 },
    { cx: 336, cy: 210 },
  ];
  return (
    <svg viewBox="0 0 480 420" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
      {points.map((p, i) => {
        if (i === points.length - 1) return null;
        const next = points[i + 1];
        return (
          <motion.line
            key={i} x1={p.cx} y1={p.cy} x2={next.cx} y2={next.cy}
            stroke="#f97316" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={visible ? { pathLength: 1, opacity: 0.35 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 + i * 0.2 }}
          />
        );
      })}
      {points.map((p, i) => (
        <motion.circle key={`d-${i}`} cx={p.cx} cy={p.cy} r="3" fill="#f97316"
          initial={{ opacity: 0, scale: 0 }}
          animate={visible ? { opacity: 0.6, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}

/* ── Map Grid Background ── */
function MapGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#f97316 1px,transparent 1px),linear-gradient(90deg,#f97316 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" fill="none">
        {[0.2, 0.35, 0.5, 0.65, 0.8].map((t, i) => (
          <ellipse key={i} cx="60%" cy="50%" rx={`${15 + t * 35}%`} ry={`${10 + t * 25}%`}
            stroke="#f97316" strokeWidth="1" />
        ))}
      </svg>
      {/* Compass */}
      <div className="absolute bottom-5 right-5 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#f97316" strokeWidth="1" />
          <line x1="20" y1="2"  x2="20" y2="38" stroke="#f97316" strokeWidth="1" />
          <line x1="2"  y1="20" x2="38" y2="20" stroke="#f97316" strokeWidth="1" />
          <polygon points="20,4 17,14 20,12 23,14" fill="#f97316" />
          <text x="20" y="9" textAnchor="middle" fill="#f97316"
            fontSize="5" fontWeight="bold" fontFamily="sans-serif">N</text>
        </svg>
      </div>
      {/* Scale bar */}
      <div className="absolute bottom-5 left-4 flex items-center gap-1.5">
        <div className="flex items-end gap-0">
          <div className="w-8 h-px bg-gray-700" />
          <div className="w-px h-1.5 bg-gray-700" />
        </div>
        <span className="text-gray-700 text-[9px]">~10km</span>
      </div>
    </div>
  );
}

/* ── Hero ── */
export default function LocationsHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pt-24">

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px]
                      rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      {/* ── UNIQUE LAYOUT: Map takes top-full-width, text sits below-left ── */}
      <div className="relative z-10 flex flex-col h-full">

        {/* ── Top strip: label + H1 centered over the map ── */}
        <div className="px-6 md:px-16 lg:px-24 pt-8 pb-10 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              Melbourne SEO — Locations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            SEO Services Across{" "}
            <span className="text-orange-500">
              Melbourne's Western Suburbs
            </span>
          </motion.h1>
        </div>

        {/* ── Main body: map right, subheadline + suburb list left ── */}
        <div className="flex flex-col lg:flex-row flex-1 items-stretch">

          {/* Left column */}
          <div className="px-6 md:px-16 lg:px-24 pb-16 lg:pb-24 flex flex-col
                          justify-center gap-8 lg:w-[45%]">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Helping local businesses in Werribee, Hoppers Crossing, Tarneit,
              and Melton get found online.
            </motion.p>

            {/* Suburb list — vertical */}
            <div className="flex flex-col gap-2">
              {suburbs.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0
                                   group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 font-semibold text-base
                                   group-hover:text-orange-400 transition-colors duration-300">
                    {s.name}
                  </span>
                  <div className="flex-1 h-px bg-gray-800
                                  group-hover:bg-orange-500/30 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column — map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex flex-1 items-center justify-center
                       px-8 pb-16 lg:pb-24"
          >
            <div className="relative w-[480px] h-[420px]">
              <div className="absolute inset-0 bg-[#0f0f0f] rounded-2xl
                              border border-gray-800 overflow-hidden">
                <MapGrid />
              </div>
              <ConnectionLines visible={visible} />
              {suburbs.map((s) => (
                <MapPin key={s.name} x={s.x} y={s.y}
                  label={s.name} delay={s.delay} size={s.size} />
              ))}
              {/* CBD marker */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{ right: "10%", bottom: "16%" }}
                className="absolute flex items-center gap-1.5"
              >
                <div className="w-2 h-2 rounded-full bg-gray-600" />
                <span className="text-gray-600 text-[10px] font-medium">Melbourne CBD</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24
                      bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  );
}