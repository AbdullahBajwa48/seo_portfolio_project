import LlmSeoHero from "./llmseoHero";
import LlmSeoIntro from "./llmseoIntro";
import LlmSeoWhyMatters from "./llmseoMatters";
import LlmSeoWhatsIncluded from "./llmseoWatIncluded";
import LlmSeoProcess from "./llmseoProcess";
import LlmSeoWhoItsFor from "./llmseoWhatItsFor";
import LlmSeoResults from "./llmseoTesAnomalies";
import LlmSeoFAQ from "./llmseoAQ";
import LlmSeoCta from "./llmseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AEO Services Melbourne | Answer Engine Optimization",
  description:
    "AEO services for Melbourne businesses. Get found in ChatGPT, Perplexity, and Google AI Overviews. Answer Engine Optimization that puts you in AI-generated answers.",
};

export default function LlmSeoPage() {
  return (
    <>
      <Navbar />
      <LlmSeoHero />
      <LlmSeoIntro />
      <LlmSeoWhyMatters />
      <LlmSeoWhatsIncluded />
      <LlmSeoProcess />
      <LlmSeoWhoItsFor />
      <LlmSeoResults />
      <LlmSeoFAQ />
      <LlmSeoCta />
    </>
  );
}