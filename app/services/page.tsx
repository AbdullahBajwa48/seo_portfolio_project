import ServiceHero from "./ServiceHero";
import ServiceIntro from "./ServiceIntro";
import ServiceCore from "./ServiceCore";
import ServicePlatform from "./ServicePlatform"
import ServiceWeb from "./ServiceWeb";
import ServiceCta from "./ServiceCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services Melbourne | Khalis Marketing",
  description:
    "Melbourne SEO services tailored to your business. Local SEO, technical SEO, link building, and more. No contracts, transparent strategies. Get your free audit.",
};


export default function ServicePage(){
    return (
        <>
            <ServiceHero/>
            <ServiceIntro/>
            <ServiceCore/>
            <ServicePlatform/>
            <ServiceWeb/>
            <ServiceCta/>

        </>
    )
}