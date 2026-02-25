import SeoAuditHero from "./seoauditHero";
import SeoAuditIntro from "./seoauditIntro";
import SeoAuditWhatsCovered from "./seoauditWhatCovered";
import SeoAuditWhatsIncluded from "./seoauditWhatsItsIncluded";
import SeoAuditWhoItsFor from "./seoauditWhoItFor";
import SeoAuditStandaloneVsOngoing from "./seoauditStandalone";
import SeoAuditResults from "./seoauditTestNominals";
import SeoAuditFAQ from "./seoauditFQA";
import SeoAuditCta from "./seoauditCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Audit Melbourne | Khalis Marketing",
  description:
    "Comprehensive SEO audit for Melbourne businesses. Technical, content, on-page, backlink, and local SEO analysis. Get your prioritised action plan today.",
};

export default function SeoAuditPage() {
  return (
    <>
     <Navbar />
      <SeoAuditHero />
      <SeoAuditIntro />
      <SeoAuditWhatsCovered />
      <SeoAuditWhatsIncluded />
      <SeoAuditWhoItsFor />
      <SeoAuditStandaloneVsOngoing />
      <SeoAuditResults />
      <SeoAuditFAQ />
      <SeoAuditCta />
    </>
  );
}