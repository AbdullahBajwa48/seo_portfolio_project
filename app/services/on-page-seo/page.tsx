import OnPageSeoHero from "./onpageseoHero";
import OnPageSeoIntro from "./onpageseoIntro";
import OnPageSeoWhatsIncluded from "./onpageseoWhatsIncluded";
import OnPageSeoProcess from "./onpageseoProcess";
import OnPageSeoWhoItsFor from "./onpageseoWhoItsFor";
import OnPageSeoResults from "./onpageseoTestNominals";
import OnPageSeoFAQ from "./onpageseoFAQ";
import OnPageSeoCta from "./onpageseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "On-Page SEO Melbourne | Khalis Marketing",
  description:
    "On-page SEO services for Melbourne businesses. Title tags, meta descriptions, content optimisation, internal linking. Get your free audit today.",
};

export default function OnPageSeoPage() {
  return (
    <>
    <Navbar />
      <OnPageSeoHero />
      <OnPageSeoIntro />
      <OnPageSeoWhatsIncluded />
      <OnPageSeoProcess />
      <OnPageSeoWhoItsFor />
      <OnPageSeoResults />
      <OnPageSeoFAQ />
      <OnPageSeoCta />
    </>
  );
}