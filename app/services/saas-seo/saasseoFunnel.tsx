"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const funnelStages = [
  {
    stage: "Top of Funnel",
    tag: "Problem-Aware",
    icon: "📣",
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20 hover:border-blue-500/40",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    title: "Problem-Aware Content",
    desc: "Your potential customers are searching for solutions to problems — often before they know your product exists. Educational blog content, guides, and resources capture this traffic and introduce your brand.",
    example: '"How to reduce customer churn" → leads to your retention software',
    items: ["Educational blog posts", "How-to guides and tutorials", "Problem-focused landing pages"],
  },
  {
    stage: "Middle of Funnel",
    tag: "Solution-Aware",
    icon: "⚖️",
    color: "from-yellow-500/8 to-transparent",
    border: "border-yellow-500/20 hover:border-yellow-500/40",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    title: "Solution-Aware Content",
    desc: "Once they know solutions exist, buyers start researching options. Comparison pages, feature breakdowns, and use-case content help them evaluate — with your product in the conversation.",
    example: '"[Your Product] vs [Competitor]" or "Best project management tools for agencies"',
    items: ["Competitor comparison pages", "Feature breakdown content", "Use-case and industry pages"],
  },
  {
    stage: "Bottom of Funnel",
    tag: "Ready to Buy",
    icon: "🎯",
    color: "from-orange-500/10 to-transparent",
    border: "border-orange-500/30 hover:border-orange-500/50",
    tagColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    title: "Product & Conversion Pages",
    desc: "When they're ready to buy, you need optimised landing pages, feature pages, and pricing pages that rank for high-intent keywords and convert visitors into trials or demos.",
    example: '"[Product category] software" or "[Your brand] pricing"',
    items: ["Feature and pricing pages", "High-intent product pages", "Demo and trial landing pages"],
  },
  {
    stage: "Retention & Expansion",
    tag: "Post-Signup",
    icon: "🔄",
    color: "from-green-500/8 to-transparent",
    border: "border-green-500/20 hover:border-green-500/40",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
    title: "Help Content",
    desc: "SEO doesn't stop at acquisition. Knowledge bases, help docs, and tutorial content improve customer success, reduce churn, and rank for long-tail searches that bring in more users.",
    example: "Knowledge base articles, onboarding guides, and feature tutorials",
    items: ["Help docs and knowledge base", "Onboarding content", "Long-tail feature searches"],
  },
];

export default function SaasSeoFunnel() {
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
          The Strategy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          How SaaS SEO{" "}
          <span className="text-orange-500">Drives Growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          Unlike other businesses, SaaS buyers go through a distinct journey. I build content strategies that capture them at every stage.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {funnelStages.map((stage, i) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + i * 0.08 }}
              className={`group bg-[#141414] border rounded-2xl p-6 transition-colors duration-300
                          relative overflow-hidden ${stage.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} pointer-events-none`} />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e1e1e] border border-gray-700
                                  flex items-center justify-center text-xl shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-wider">{stage.stage}</p>
                    <h3 className="text-white font-bold text-sm mt-0.5
                                   group-hover:text-orange-400 transition-colors duration-300">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1
                                  rounded-full border shrink-0 ${stage.tagColor}`}>
                  {stage.tag}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative">{stage.desc}</p>

              {/* Example */}
              <div className="bg-[#0f0f0f] border border-gray-800/60 rounded-lg px-4 py-3 mb-4 relative">
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-1">Example</p>
                <p className="text-gray-400 text-xs italic">{stage.example}</p>
              </div>

              {/* Items */}
              <ul className="space-y-1.5 relative">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-orange-500 text-xs shrink-0">✓</span>
                    <span className="text-gray-500 text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}