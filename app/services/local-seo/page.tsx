import LocalSeoHero from "./localseoHero";
import LocalSeoIntro from "./localseoIntro";
import LocalSeoWhatsIncluded from "./localseoWhatIncluded";
import LocalSeoProcess from "./localseoProcess";
import LocalSeoResults from "./localseoResults";
import LocalSeoFAQ from "./localseoFAQ";
import LocalSeoCta from "./localseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Local SEO Melbourne | Khalis Marketing",
  description:
    "Local SEO services for Melbourne businesses. Google Business Profile optimisation, local citations, map pack rankings. Get your free local SEO audit today.",
};

export default function LocalSeoPage() {
  return (
    <>
    <Navbar />
      <LocalSeoHero />
      <LocalSeoIntro />
      <LocalSeoWhatsIncluded />
      <LocalSeoProcess />
      <LocalSeoResults />
      <LocalSeoFAQ />
      <LocalSeoCta />
    </>
  );
}