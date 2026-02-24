// app/page.tsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CaseStudies from "../components/CaseStudies";
import Faq from "../components/Faq";
import HomeFooter from "../components/HomeFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Agency Melbourne | Khalis Marketing",
  description:
    "Melbourne SEO agency with no lock-in contracts. Transparent strategies, real results. Get your free SEO audit from Khalis Marketing today.",
};

export default function Home() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CaseStudies />
      <Faq />
      {/* <HomeFooter /> */}

    </div>
  );
}