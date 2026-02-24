import Hero from "./Hero";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SEO Tips & Insights | Khalis Marketing",
  description:
    "SEO tips and insights for Melbourne businesses. Practical advice on local SEO, technical SEO, content strategy, and getting found online.",
};

export default function Blog(){

    return(
        <>
            <Hero/>
            <Navbar/>
        </>
    );
}