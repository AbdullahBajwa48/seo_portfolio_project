import HoppersHero from "./hoppersHero";
import HoppersIntro from "./hopperasIntro";
import HoppersLocalContext from "./hoppersLocalContext";
import HoppersWhatIOffer from "./hoppersWhatIOffer";
import HoppersWhoIWorkWith from "./hoppersWorkwithfor";
import HoppersCta from "./hoppersCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Hoppers Crossing | Local SEO | Khalis Marketing",
  description:
    "SEO services for Hoppers Crossing businesses. Rank higher in local search and Google Maps. Beat local competitors. Free SEO audit available.",
};

export default function HoppersCrossingSeoPage() {
  return (
    <>
      <Navbar />
      <HoppersHero />
      <HoppersIntro />
      <HoppersLocalContext />
      <HoppersWhatIOffer />
      <HoppersWhoIWorkWith />
      <HoppersCta />
    </>
  );
}