import SaasSeoHero from "./saasseoHero";
import SaasSeoIntro from "./saasseoIntro";
import SaasSeoFunnel from "./saasseoFunnel";
import SaasSeoWhatsIncluded from "./saasseoWhatitsIncludes";
import SaasSeoProcess from "./saasseoProcess";
import SaasSeoWhoItsFor from "./saasseoWhiIsFor";
import SaasSeoMetrics from "./saasseoMaterices";
import SaasSeoResults from "./saasseoTestAnomalies";
import SaasSeoFAQ from "./saasseoFAQ";
import SaasSeoCta from "./saasseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "SaaS SEO Melbourne | Khalis Marketing",
  description:
    "SaaS SEO services for Melbourne software companies. Full-funnel content strategy, technical SEO, and link building that drives signups and reduces CAC. Free audit.",
};

export default function SaasSeoPage() {
  return (
    <>
    <Navbar/>
      <SaasSeoHero />
      <SaasSeoIntro />
      <SaasSeoFunnel />
      <SaasSeoWhatsIncluded />
      <SaasSeoProcess />
      <SaasSeoWhoItsFor />
      <SaasSeoMetrics />
      <SaasSeoResults />
      <SaasSeoFAQ />
      <SaasSeoCta />
    </>
  );
}