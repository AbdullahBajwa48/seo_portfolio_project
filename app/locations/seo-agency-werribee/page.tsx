import WerribeeHero from "./werribeeseoHero";
import WerribeeIntro from "./werribeeseoIntro";
import WerribeeLocalContext from "./werribeeLocalcontest";
import WerribeeWhatIOffer from "./werribeeWhatIOffer";
import WerribeeWhoIWorkWith from "./werribeeWhoIWorkWith";
import WerribeeCta from "./werribeeCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Werribee | Local SEO Services | Khalis Marketing",
  description:
    "SEO services for Werribee businesses. Rank higher in Google Search and Maps around Pacific Werribee and surrounds. Free local SEO audit.",
};

export default function WerribeeSeoPage() {
  return (
    <>
      <Navbar />
      <WerribeeHero />
      <WerribeeIntro />
      <WerribeeLocalContext />
      <WerribeeWhatIOffer />
      <WerribeeWhoIWorkWith />
      <WerribeeCta />
    </>
  );
}