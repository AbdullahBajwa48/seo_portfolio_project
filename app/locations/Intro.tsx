"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LocationsIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0f0f0f] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* White content panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — orange accent + first paragraph */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="h-1 w-12 bg-orange-500 rounded-full mb-8" />
              <p className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed">
                Melbourne's west is growing fast — and so is the competition
                for local customers.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mt-5">
                Whether you're a tradie, retailer, medical practice, or
                hospitality business, your customers are searching online
                before they call or visit.
              </p>
            </div>

            {/* Right — second paragraph */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50">
              <p className="text-gray-600 text-base leading-relaxed">
                I help businesses across Melbourne's western suburbs rank
                higher in Google Search and Google Maps. Local SEO strategies
                tailored to your area, your industry, and your customers.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}