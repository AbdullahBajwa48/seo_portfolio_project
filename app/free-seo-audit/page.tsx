import Hero from "./Hero";
import AuditInclude from "./AuditIncludes";
import AuditForm from "./AuditForm";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Free SEO Audit Melbourne | Khalis Marketing",
  description:
    "Free SEO audit for Melbourne businesses. Technical, content, local, and backlink analysis with a prioritised action plan. No obligation.",
};

export default function FreeSeoAudit(){
    return (
        <>
            <Navbar/>
            <Hero />
            <AuditInclude />
            <AuditForm />
        </>
    );
}