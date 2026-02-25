import ServiceHero from "./seoHero";
import ServiceIntro from "./seoIntro";
import ServiceProblems from "./seoProblems";
import ServiceWhatsIncluded from "./seoWhatincluded";
import ServiceProcess from "./seoProcess";
import ServiceWhoItsFor from "./seoWholtFor";
import ServiceTestimonials from "./seoTestMonials";
import ServiceFAQ from "./seoFAQ";
import SeoCta from './seoCat'
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "SEO Services Melbourne | Khalis Marketing",
  description:
    "Melbourne SEO services with no contracts and no BS. Transparent strategies, real results. Get your free SEO audit from Khalis Marketing today.",
};

export default function ServicePage() {
  return (
    <>
    <Navbar />
      <ServiceHero />
      <ServiceIntro />
      <ServiceProblems />
      <ServiceWhatsIncluded />
      <ServiceProcess />
      <ServiceWhoItsFor />
      <ServiceTestimonials />
      <ServiceFAQ />
      <SeoCta />
    </>
  );
}