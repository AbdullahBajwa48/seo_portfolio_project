"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const types = [
  { icon: "🏠", title: "Local Businesses", desc: "Tradies, restaurants, medical practices, professional services looking to be recommended when users ask AI for local suggestions." },
  { icon: "🛒", title: "Ecommerce Brands", desc: "Products that need to appear in AI-generated shopping recommendations and 'best product' queries." },
  { icon: "💻", title: "SaaS Companies", desc: "Software businesses competing for 'best tool for X' queries — where AI recommendations directly drive signups." },
  { icon: "⚖️", title: "Professional Services", desc: "Lawyers, accountants, consultants who want to be cited as trusted experts when users ask AI for advice." },
  { icon: "📈", title: "Businesses Already Doing SEO", desc: "If you're already investing in SEO, AEO amplifies your investment by extending visibility to AI platforms." },
  { icon: "🎙️", title: "Voice & AI Assistant Users", desc: "If your customers use Siri, Alexa, or Copilot to find businesses like yours — you need AEO in your strategy." },
];

export default function LlmSeoWhoItsFor() {
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
          Who It&apos;s For
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-extrabold leading-tight max-w-xl"
          >
            Who Needs{" "}
            <span className="text-orange-500">AEO Services?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-gray-500 text-sm leading-relaxed max-w-sm"
          >
            If your customers are using ChatGPT, Perplexity, or voice assistants to find
            businesses like yours — you need AEO.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.07 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-5 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
                {t.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1
                               group-hover:text-orange-400 transition-colors duration-300">
                  {t.title}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}