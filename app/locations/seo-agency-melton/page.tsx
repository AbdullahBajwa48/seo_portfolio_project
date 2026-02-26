import MeltonHero from "./meltonseoHero";
import MeltonIntro from "./meltonseoIntro";
import MeltonLocalContext from "./meltonseoLocalContext";
import MeltonWhatIOffer from "./meltonseoWhatIOffer";
import MeltonWhoIWorkWith from "./meltonWhoIWork";
import MeltonCta from "./meltonseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Melton | Local SEO Services | Khalis Marketing",
  description:
    "SEO services for Melton businesses. Rank in Google Search and Maps across Melton, Melton South, Melton West and surrounds. Free audit.",
};

export default function MeltonSeoPage() {
  return (
    <>
      <Navbar />
      <MeltonHero />
      <MeltonIntro />
      <MeltonLocalContext />
      <MeltonWhatIOffer />
      <MeltonWhoIWorkWith />
      <MeltonCta />
    </>
  );
}