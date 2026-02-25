import ShopifySeoHero from "./shopifyseoHero";
import ShopifySeoIntro from "./shopifyseoIntro";
import ShopifySeoChallenges from "./shopifyseoChalanges";
import ShopifySeoWhatsIncluded from "./shopifyseoWhatIncluded";
import ShopifySeoProcess from "./shopifyseoProcess";
import ShopifySeoWhoItsFor from "./shopifyseoWhatItsFor";
import ShopifySeoResults from "./shopifyseoTestAnomalies";
import ShopifySeoFAQ from "./shopifyseoFAQ";
import ShopifySeoCta from "./shopifyseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Shopify SEO Melbourne | Khalis Marketing",
  description:
    "Shopify SEO services for Melbourne stores. Fix Shopify's SEO limitations, optimise product pages, and drive organic sales. Get your free Shopify SEO audit.",
};

export default function ShopifySeoPage() {
  return (
    <>
    <Navbar/>
      <ShopifySeoHero />
      <ShopifySeoIntro />
      <ShopifySeoChallenges />
      <ShopifySeoWhatsIncluded />
      <ShopifySeoProcess />
      <ShopifySeoWhoItsFor />
      <ShopifySeoResults />
      <ShopifySeoFAQ />
      <ShopifySeoCta />
    </>
  );
}