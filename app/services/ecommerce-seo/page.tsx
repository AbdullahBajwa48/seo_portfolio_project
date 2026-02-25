import EcommerceSeoHero from "./ecommerceHero";
import EcommerceSeoIntro from "./ecommerceseoIntro";
import EcommerceSeoWhatsIncluded from "./ecommerceseoWhatItsIncluded";
import EcommerceSeoProcess from "./ecommerceseoProcess";
import EcommerceSeoWhoItsFor from "./ecommerseseoWhatItsFor";
import EcommerceSeoResults from "./ecommerceseoTestAnomalies";
import EcommerceSeoFAQ from "./ecommerseseoFqa";
import EcommerceSeoCta from "./ecommerceseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ecommerce SEO Melbourne | Khalis Marketing",
  description:
    "Ecommerce SEO services for Melbourne online stores. Product page optimisation, category SEO, and technical fixes that drive organic sales. Get your free audit.",
};

export default function EcommerceSeoPage() {
  return (
    <>
      <Navbar />
      <EcommerceSeoHero />
      <EcommerceSeoIntro />
      <EcommerceSeoWhatsIncluded />
      <EcommerceSeoProcess />
      <EcommerceSeoWhoItsFor />
      <EcommerceSeoResults />
      <EcommerceSeoFAQ />
      <EcommerceSeoCta />
    </>
  );
}