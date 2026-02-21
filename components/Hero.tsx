"use client";

import { useEffect, useState } from "react";
import { FiInstagram, FiLinkedin, FiGlobe } from "react-icons/fi";
import { SiBehance } from "react-icons/si";
import SeoGlobe from "@/components/SeoGlobe";

interface StatItem {
  value: string;
  label: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "10+", label: "Experiences" },
  { value: "200+", label: "Project done" },
  { value: "80+", label: "Happy Clients" },
];

export default function Hero() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks: SocialLink[] = [
    { icon: <FiInstagram size={17} />, href: "#", label: "Instagram" },
    { icon: <FiLinkedin size={17} />, href: "#", label: "LinkedIn" },
    { icon: <FiGlobe size={17} />, href: "#", label: "Website" },
    { icon: <SiBehance size={17} />, href: "#", label: "Behance" },
  ];

  const fadeUp = (delay: number): string =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  const style = (delay: number): React.CSSProperties => ({
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative min-h-screen bg-[#0f0f0f] flex items-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Background ambient glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />

      {/* ── Left Content ── */}
      <div className="relative z-10 flex-1 max-w-lg">



   
        

        {/* Role */}
        <h1
          className={`text-orange-500 text-5xl md:text-6xl font-extrabold leading-tight mb-7 ${fadeUp(300)}`}
          style={style(300)}
        >
         Melbourne's SEO Agency That Actually Delivers
        </h1>

        {/* Social icons */}
        <p className={`text-white font-semibold text-lg mb-3 ${fadeUp(350)}`} style={style(350)}>
  SEO Without the Runaround.
        </p>

        {/* Supporting Text */}
        <p className={`text-gray-400 text-sm leading-relaxed mb-8 max-w-md ${fadeUp(400)}`} style={style(400)}>
        No long-term contracts. No empty promises. Just transparent strategies that get your business found on Google. Khalis Marketing helps Melbourne businesses grow their organic traffic, generate quality leads, and outrank competitors — all without locking you into contracts you can't escape.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex items-center gap-4 mb-12 ${fadeUp(500)}`}
          style={style(500)}
        >
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white
                       font-semibold px-7 py-2.5 rounded text-sm transition-all duration-300"
          >
            Get Your Free SEO Audit
          </a>
          <a
            href="#"
            className="border border-gray-500 hover:border-orange-500 active:scale-95
                       text-white font-semibold px-7 py-2.5 rounded text-sm transition-all duration-300"
          >
            Book a Call
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex rounded overflow-hidden w-fit ${fadeUp(600)}`}
          style={style(600)}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-3 bg-[#1a1a1a] ${
                i !== stats.length - 1 ? "border-r border-gray-700/60" : ""
              }`}
            >
              <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Photo ── */}
      <div
        className={`hidden md:flex flex-1 justify-center items-end relative
                    transition-all duration-1000 ease-out
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "300ms" }}
      >
        {/* Circle backdrop */}
        {/* <div
          // className="relative w-[600px] h-[600px] md:w-[650px] md:h-[650px]
          //    rounded-full overflow-hidden bg-[url('/image.png')] bg-cover bg-top"    
          
        /> */}

        <div className="hidden md:flex flex-1 justify-center items-center">
  <SeoGlobe />
</div>

      </div>
    </section>
  );
}