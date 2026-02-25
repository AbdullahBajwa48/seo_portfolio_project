import WebDesignHero from "./websitedesignHero";
import WebDesignIntro from "./websitedesignIntro";
import WebDesignDifferences from "./websitedesignDifference";
import WebDesignWhatsIncluded from "./websitedesignWhatIncluded";
import WebDesignPlatforms from "./websitedesignPlatforms";
import WebDesignProcess from "./websitedesignProcess";
import WebDesignWhoItsFor from "./websitedesignHowItFor";
import WebDesignResults from "./websitedesignTestAnomalies";
import WebDesignFAQ from "./websitedesignFAQ";
import WebDesignCta from "./websitedesignCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Website Design Melbourne | Khalis Marketing",
  description:
    "Website design Melbourne. SEO-focused websites built to rank and convert. Fast, mobile-friendly, and optimised from day one. Get your free consultation.",
};

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <WebDesignHero />
      <WebDesignIntro />
      <WebDesignDifferences />
      <WebDesignWhatsIncluded />
      <WebDesignPlatforms />
      <WebDesignProcess />
      <WebDesignWhoItsFor />
      <WebDesignResults />
      <WebDesignFAQ />
      <WebDesignCta />
    </>
  );
}