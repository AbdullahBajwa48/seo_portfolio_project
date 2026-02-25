"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    problem: "Paying for Months With Nothing to Show",
    issue: "You've been paying an agency for 6, 9, even 12 months — and you still can't see any real results. Traffic is flat. Leads haven't increased. You're told to \"be patient\" while the invoices keep coming.",
    fix: "I set realistic expectations from day one. SEO takes time, but you should see measurable progress within 3–4 months — improved rankings, growing traffic, more enquiries. I track and report on metrics that matter, so you always know where you stand.",
  },
  {
    problem: "Locked Into Contracts You Can't Escape",
    issue: "You signed a 12-month contract because the agency insisted SEO \"needs time.\" Now you're stuck paying for underperformance with no way out.",
    fix: "I work on a month-to-month basis. No lock-ins. No exit fees. You stay because it's working — not because you're trapped. If I'm not delivering value, you can walk away.",
  },
  {
    problem: "No Idea What They're Actually Doing",
    issue: "You get monthly reports filled with graphs and numbers, but you have no clue what any of it means — or whether real work is being done. When you ask questions, you get vague answers or more jargon.",
    fix: "I explain everything in plain English. You'll know exactly what I'm doing, why I'm doing it, and how it connects to your business goals. Full transparency — no smoke and mirrors.",
  },
  {
    problem: "Rankings But No Leads",
    issue: "Your agency celebrates ranking #1 for some keyword you've never heard of. But the phone isn't ringing any more than before. Rankings mean nothing if they don't bring customers.",
    fix: "I focus on keywords with commercial intent — the searches people make when they're ready to buy, book, or enquire. Every strategy is built around driving leads and revenue, not vanity metrics.",
  },
  {
    problem: "Outdated Tactics That Don't Work Anymore",
    issue: "Your agency is still using strategies from 2015 — keyword stuffing, spammy backlinks, generic blog posts. Google's algorithm has evolved. Their tactics haven't.",
    fix: "I stay current with algorithm updates, AI developments, and evolving best practices. Your strategy is built for how search works today — not five years ago.",
  },
  {
    problem: "Cookie-Cutter Strategies",
    issue: "You're getting the exact same strategy as every other client. No consideration for your industry, your competitors, or your specific goals. It's a template, not a tailored plan.",
    fix: "Every strategy I build starts with understanding your business — your customers, your competitors, your strengths. No templates. No generic playbooks. A plan built specifically for you.",
  },
];

export default function ServiceProblems() {
  const ref = useRef<HTMLDivElement>(null);
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
          The Problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          The Problems With Most SEO Agencies —{" "}
          <span className="text-orange-500">And How I Fix Them</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-2xl"
        >
          These are the frustrations I hear from Melbourne business owners every week.
          If any of them sound familiar, you arre not alone.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group bg-[#141414] border border-gray-800 rounded-2xl p-6
                         hover:border-orange-500/30 transition-colors duration-300 overflow-hidden relative"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4
                              to-transparent opacity-0 group-hover:opacity-100
                              transition-opacity duration-300 pointer-events-none" />

              <h3 className="text-white font-bold text-base mb-4
                             group-hover:text-orange-400 transition-colors duration-300">
                {item.problem}
              </h3>

              {/* Problem */}
              <div className="mb-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-red-400 bg-red-400/10 border border-red-400/20
                                 px-2 py-0.5 rounded-full mb-2">
                  The Problem
                </span>
                <p className="text-gray-500 text-sm leading-relaxed">{item.issue}</p>
              </div>

              {/* Fix */}
              <div className="border-t border-gray-800/60 pt-4">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-orange-500 bg-orange-500/10 border border-orange-500/20
                                 px-2 py-0.5 rounded-full mb-2">
                  How I Fix It
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">{item.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}