import Hero from "./Hero";
import Intro from "./Intro";
import Loc from "./Loc";
import Cta from "./Cta";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Melbourne Western Suburbs | Khalis Marketing",
  description:
    "Local SEO services for Melbourne's western suburbs. Werribee, Hoppers Crossing, Tarneit, and Melton. Get found by local customers. Free audit available.",
};

export default function Locations(){
    return (
        <>
            <Navbar />;
            <Hero />;
            <Intro />;
            <Loc />;
            <Cta />;
        </>
    );
}