import LinkBuildingHero from "./linkbuildinghero";
import LinkBuildingIntro from "./linkbuildingIntro";
import LinkBuildingWhyBothMatter from "./linkbuildingWhybothmetter";
import LinkBuildingWhatsIncluded from "./linkbuildingWhatsIncluded";
import LinkBuildingProcess from "./linkbuildingProcess";
import LinkBuildingWhoItsFor from "./linkbulidingWhoitsFor";
import LinkBuildingResults from "./linkbuildingTestNominals";
import LinkBuildingFAQ from "./linkblinkingFAQ";
import LinkBuildingCta from "./linkblinkingCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Link Building Melbourne | Khalis Marketing",
  description:
    "Link building services for Melbourne businesses. Quality backlinks and local citations that build authority and improve rankings. Get your free audit today.",
};

export default function LinkBuildingPage() {
  return (
    <>
    <Navbar />
      <LinkBuildingHero />
      <LinkBuildingIntro />
      <LinkBuildingWhyBothMatter />
      <LinkBuildingWhatsIncluded />
      <LinkBuildingProcess />
      <LinkBuildingWhoItsFor />
      <LinkBuildingResults />
      <LinkBuildingFAQ />
      <LinkBuildingCta />
    </>
  );
}