import TarneitHero from "./terneitHero";
import TarneitIntro from "./tarneitIntro";
import TarneitLocalContext from "./trrneitlocalContext";
import TarneitWhatIOffer from "./terneitWhatIOffer";
import TarneitWhoIWorkWith from "./terneitWhoIWorksWith";
import TarneitCta from "./terneitCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Tarneit | Local SEO Services | Khalis Marketing",
  description:
    "SEO services for Tarneit businesses. Reach thousands of new residents searching for local services. Get found first. Free SEO audit available.",
};

export default function TarneitSeoPage() {
  return (
    <>
      <Navbar />
      <TarneitHero />
      <TarneitIntro />
      <TarneitLocalContext />
      <TarneitWhatIOffer />
      <TarneitWhoIWorkWith />
      <TarneitCta />
    </>
  );
}