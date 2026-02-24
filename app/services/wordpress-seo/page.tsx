import WordPressSeoHero from "./wordpressseoHero";
import WordPressSeoIntro from "./wordpressseoIntro";
import WordPressSeoAdvantages from "./wordpressseoAdvantages";
import WordPressSeoCommonIssues from "./wordpressseoCommonIssues";
import WordPressSeoWhatsIncluded from "./wordpressseoWhatItsIncludes";
import WordPressSeoProcess from "./wordpressseoProcess";
import WordPressSeoWhoItsFor from "./wordpressseoWhatItsFor";
import WordPressSeoResults from "./wordpressseoTestNominals";
import WordPressSeoFAQ from "./wordpressseoFAQ";
import WordPressSeoCta from "./wordpressseoCta";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "WordPress SEO Melbourne | Khalis Marketing",
  description:
    "WordPress SEO services for Melbourne businesses. Speed optimisation, technical fixes, plugin configuration, and content strategy. Get your free audit today.",
};

export default function WordPressSeoPage() {
  return (
    <>
    <Navbar/>
      <WordPressSeoHero />
      <WordPressSeoIntro />
      <WordPressSeoAdvantages />
      <WordPressSeoCommonIssues />
      <WordPressSeoWhatsIncluded />
      <WordPressSeoProcess />
      <WordPressSeoWhoItsFor />
      <WordPressSeoResults />
      <WordPressSeoFAQ />
      <WordPressSeoCta />
    </>
  );
}