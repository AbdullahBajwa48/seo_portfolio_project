"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
  {
    icon: "🚗",
    title: "Automotive & Transport",
    desc: "Mechanics, tyre shops, driving schools, and towing services — where locals search by location the moment they need help.",
  },
  {
    icon: "🔧",
    title: "Trades Covering the Region",
    desc: "Plumbers, electricians, and builders working across Melton suburbs — needing visibility wherever their service area reaches.",
  },
  {
    icon: "☕",
    title: "Hospitality in Town",
    desc: "Cafés, pubs, restaurants, and takeaway in Melton&apos;s centre — where locals search for their next meal before they leave home.",
  },
  {
    icon: "🌾",
    title: "Rural & Semi-Rural Services",
    desc: "Stock feed, equipment hire, rural fencing, and property maintenance — serving Melton&apos;s outer areas and acreage properties.",
  },
];

export default function MeltonWhoIWorkWith() {
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
          Who I Work With
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          Melton Businesses{" "}
          <span className="text-orange-500">I Work With</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          className="text-gray-500 text-sm leading-relaxed mb-14 max-w-xl"
        >
          I work with businesses serving the Melton region. If your customers search
          for services in the Melton area, I can help you rank.
        </motion.p>

        {/* Featured top card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="group bg-[#141414] border border-orange-500/20 rounded-2xl p-7 mb-5
                     hover:border-orange-500/40 transition-colors duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/4 to-transparent pointer-events-none" />
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20
                            flex items-center justify-center text-2xl shrink-0">
              {industries[0].icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2
                             group-hover:text-orange-400 transition-colors duration-300">
                {industries[0].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                {industries[0].desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {industries.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.08 }}
              className="group flex items-start gap-4 bg-[#141414] border border-gray-800
                         rounded-xl p-6 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1e1e1e] border border-gray-700
                              group-hover:border-orange-500/30 transition-colors duration-300
                              flex items-center justify-center text-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-2
                               group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 text-xs leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
          className="bg-[#141414] border border-gray-800 rounded-xl px-6 py-5
                     flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <span className="text-orange-500 text-xl shrink-0">💡</span>
          <p className="text-gray-400 text-sm leading-relaxed">
            <span className="text-white font-semibold">Not listed here?</span>{" "}
            If your customers search for services in the Melton area, local SEO can
            put you in front of them. Book a free call and I&apos;ll tell you exactly
            what&apos;s possible for your business.
          </p>
          <a
            href="#"
            className="shrink-0 border border-gray-600 hover:border-orange-500 text-white
                       hover:text-orange-400 font-semibold px-5 py-2.5 rounded
                       transition-all duration-300 text-xs active:scale-95
                       inline-flex items-center gap-2 whitespace-nowrap"
          >
            📞 Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}