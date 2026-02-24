import Hero from "./Hero";
import Navbar from "@/components/Navbar";
import Intro from "./Intro";
import Cases from "./Cases";
import Cta from "./Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Case Studies Melbourne | Khalis Marketing",
  description:
    "See real SEO results from Melbourne businesses. Traffic growth, more leads, higher revenue. Explore case studies from Khalis Marketing.",
};

export default function CaseStudies(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Intro/>
            <Cases/>
            <Cta/>
        </>
    );
}