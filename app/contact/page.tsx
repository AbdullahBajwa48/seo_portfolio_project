import Hero from "./Hero";
import Options from "./Options";
import Form from "./Form";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Khalis Marketing",
  description:
    "Get in touch with Khalis Marketing. SEO services for Melbourne businesses. Email, phone, or send a message. I respond within 24 hours.",
};


export default function ContactPage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Options/>
            <Form/>
        </>
    );
}