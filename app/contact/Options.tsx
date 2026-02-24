"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const options = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    ),
    label: "Email",
    value: "contactkhalismarketing@gmail.com",
    href: "mailto:contactkhalismarketing@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "0433 929 754",
    href: "tel:0433929754",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Melbourne, Australia",
    sub: "Serving businesses across Melbourne and Australia-wide",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Fri: 9am – 5pm AEST",
    href: null,
  },
];

export default function ContactOptions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {options.map((opt, i) => {
            const inner = (
              <div className="flex flex-col gap-3 h-full">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border
                                border-orange-500/20 flex items-center justify-center
                                text-orange-500 shrink-0
                                group-hover:bg-orange-500 group-hover:text-white
                                group-hover:border-orange-500 transition-all duration-300">
                  {opt.icon}
                </div>
                {/* Label */}
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  {opt.label}
                </p>
                {/* Value */}
                <p className={`font-semibold text-sm leading-snug
                               ${opt.href
                                 ? "text-white group-hover:text-orange-400 transition-colors duration-300"
                                 : "text-white"}`}>
                  {opt.value}
                </p>
                {opt.sub && (
                  <p className="text-gray-600 text-xs leading-relaxed">{opt.sub}</p>
                )}
              </div>
            );

            return (
              <motion.div
                key={opt.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                className="group"
              >
                {opt.href ? (
                  <a href={opt.href}
                    className="block bg-[#141414] border border-gray-800 rounded-2xl p-6
                               hover:border-orange-500/40 transition-colors duration-300 h-full">
                    {inner}
                  </a>
                ) : (
                  <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 h-full">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}