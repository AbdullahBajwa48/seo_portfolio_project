import TechnicalSeoHero from "./technicalseoHero";
import TechnicalSeoIntro from "./technicalseoIntro";
import TechnicalSeoProblems from "./technicalseoProblems";
import TechnicalSeoWhatsIncluded from "./technicalseoWhatsIncluded";
import TechnicalSeoProcess from "./technicalseoProcess";
import TechnicalSeoResults from "./technicalseoTestNominals";
import TechnicalSeoFAQ from "./technicalseoFAQ";
import TechnicalSeoCta from "./technicalseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Technical SEO Melbourne | Khalis Marketing",
  description:
    "Technical SEO services for Melbourne businesses. Site speed, mobile usability, crawl errors, indexing fixes. Get your free technical SEO audit today.",
};

export default function TechnicalSeoPage() {
  return (
    <>
    <Navbar />
      <TechnicalSeoHero />
      <TechnicalSeoIntro />
      <TechnicalSeoProblems />
      <TechnicalSeoWhatsIncluded />
      <TechnicalSeoProcess />
      <TechnicalSeoResults />
      <TechnicalSeoFAQ />
      <TechnicalSeoCta />
    </>
  );
}