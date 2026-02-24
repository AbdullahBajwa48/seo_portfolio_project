"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const included = [
  { icon: "🔭", title: "AI Visibility Audit", desc: "I analyse how your business currently appears (or doesn't) in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and other platforms. You'll see exactly where you stand." },
  { icon: "🏅", title: "E-E-A-T Enhancement", desc: "AI systems prioritise sources that demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness. I strengthen these signals across your website — author bios, credentials, trust indicators, and content depth." },
  { icon: "✍️", title: "Content Optimisation for AI", desc: "AI tools favour content that directly answers questions in clear, structured formats. I optimise your content for question-based queries, featured snippet formats, and conversational search patterns." },
  { icon: "🏷️", title: "Structured Data Implementation", desc: "Schema markup helps AI systems understand your content. I implement and optimise FAQ schema, How-To schema, LocalBusiness schema, and more — so AI tools can easily parse and cite your information." },
  { icon: "📣", title: "Brand Mention Building", desc: "AI systems learn from mentions across the web. I build your brand presence through PR, guest posts, directory listings, and authoritative mentions that train AI models to recognise and recommend your business." },
  { icon: "🪟", title: "Knowledge Panel Optimisation", desc: "For eligible businesses, I optimise your Google Knowledge Panel and ensure your brand information is accurate across sources that AI systems reference." },
  { icon: "📊", title: "Ongoing Monitoring", desc: "AI search is evolving rapidly. I monitor how your business appears in AI-generated results and adapt strategies as platforms update their algorithms and sources." },
];

export default function LlmSeoWhatsIncluded() {
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
            <span className="text-orange-500">AEO Services</span>
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