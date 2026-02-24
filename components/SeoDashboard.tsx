"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ── Animated rank bar ── */
function RankBar({ label, rank, maxRank = 10, delay }: {
  label: string; rank: number; maxRank?: number; delay: number;
}) {
  const pct = ((maxRank - rank + 1) / maxRank) * 100;
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-[10px] w-24 truncate shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          className={`h-full rounded-full ${rank <= 3 ? "bg-orange-500" : "bg-gray-600"}`}
        />
      </div>
      <span className={`text-[10px] font-bold w-6 text-right shrink-0
                        ${rank <= 3 ? "text-orange-400" : "text-gray-500"}`}>
        #{rank}
      </span>
    </div>
  );
}

/* ── Mini sparkline ── */
function Sparkline({ values, color = "#f97316" }: { values: number[]; color?: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 80; const h = 28;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * h * 0.85 - 2;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <polyline points={pts} stroke={color} strokeWidth="1.5"
        strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={`0,${h} ${pts} ${w},${h}`}
        fill={color} opacity="0.1" />
    </svg>
  );
}

/* ── Main Component ── */
export default function SEODashboard() {
  const [tick, setTick] = useState(0);

  /* Simulate live traffic counter */
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const trafficBase = 2847;
  const traffic = trafficBase + tick * 3;

  return (
    <div className="w-full h-[480px] md:h-[540px] flex items-center justify-center">
      <div className="relative w-full max-w-[460px]">

        {/* ── Glow behind panel ── */}
        <div className="absolute inset-0 bg-orange-500/8 rounded-3xl blur-2xl" />

        {/* ── Main panel ── */}
        <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-2xl
                        overflow-hidden shadow-2xl">

          {/* Window bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-800/60
                          bg-[#141414]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="text-gray-600 text-[10px] ml-3 font-mono">
              seo-dashboard.khalis.com.au
            </span>
            <div className="ml-auto flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-[9px] font-bold">LIVE</span>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-4">

            {/* ── Top stats row ── */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Organic Traffic", value: traffic.toLocaleString(), delta: "+312%", up: true },
                { label: "Keywords #1–3", value: "45", delta: "+28", up: true },
                { label: "Domain Rating", value: "38", delta: "+12", up: true },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3"
                >
                  <p className="text-gray-600 text-[9px] uppercase tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p className="text-white font-extrabold text-base leading-none mb-1">
                    {stat.value}
                  </p>
                  <span className="text-green-400 text-[10px] font-semibold">
                    ↑ {stat.delta}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ── Traffic chart ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-400 text-xs font-semibold">Organic Traffic</p>
                <span className="text-orange-500 text-[10px] font-bold">Last 6 months</span>
              </div>
              {/* Bar chart */}
              <div className="flex items-end gap-1.5 h-14">
                {[18, 24, 32, 45, 62, 88, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 + i * 0.07 }}
                    className={`flex-1 rounded-sm ${i === 6
                      ? "bg-orange-500"
                      : "bg-orange-500/30"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                  <span key={m} className="text-gray-700 text-[9px]">{m}</span>
                ))}
              </div>
            </motion.div>

            {/* ── Rankings ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-400 text-xs font-semibold">Keyword Rankings</p>
                <span className="text-orange-500 text-[10px] font-bold">Melbourne</span>
              </div>
              <div className="flex flex-col gap-2">
                <RankBar label="plumber melbourne"     rank={1} delay={0.8} />
                <RankBar label="electrician werribee"  rank={2} delay={0.9} />
                <RankBar label="dentist hoppers crossing" rank={3} delay={1.0} />
                <RankBar label="restaurant tarneit"    rank={5} delay={1.1} />
              </div>
            </motion.div>

            {/* ── Bottom row: Health + Activity ── */}
            <div className="grid grid-cols-2 gap-3">

              {/* Site health */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3"
              >
                <p className="text-gray-600 text-[9px] uppercase tracking-widest mb-2">
                  Site Health
                </p>
                {/* Donut */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none"
                        stroke="#1e1e1e" strokeWidth="4" />
                      <motion.circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#f97316" strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="87.96"
                        initial={{ strokeDashoffset: 87.96 }}
                        animate={{ strokeDashoffset: 87.96 * 0.08 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center
                                     text-[10px] font-extrabold text-orange-400">
                      92
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs">92/100</p>
                    <p className="text-green-400 text-[10px]">Excellent</p>
                  </div>
                </div>
              </motion.div>

              {/* Recent activity */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-3"
              >
                <p className="text-gray-600 text-[9px] uppercase tracking-widest mb-2">
                  Backlinks
                </p>
                <Sparkline values={[12, 15, 14, 18, 22, 25, 31, 38]} />
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white font-extrabold text-sm">238</span>
                  <span className="text-green-400 text-[10px] font-semibold">↑ +38</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Floating badge top-right ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          className="absolute -top-4 -right-4 bg-orange-500 text-white
                     rounded-xl px-3 py-2 shadow-lg shadow-orange-500/30"
        >
          <p className="text-[10px] font-bold uppercase tracking-wider">Page 1</p>
          <p className="text-lg font-extrabold leading-none">#1</p>
        </motion.div>

        {/* ── Floating badge bottom-left ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
          className="absolute -bottom-4 -left-4 bg-[#141414] border border-gray-700
                     rounded-xl px-3 py-2 shadow-lg"
        >
          <p className="text-gray-500 text-[10px] mb-0.5">Organic Revenue</p>
          <p className="text-white font-extrabold text-sm">$127K <span className="text-green-400 text-[10px]">↑</span></p>
        </motion.div>
      </div>
    </div>
  );
}