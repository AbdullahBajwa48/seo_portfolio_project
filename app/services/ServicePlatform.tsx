"use client";

import { ServiceSection } from "./ServiceCore";

const platformServices = [
  {
    icon: "🌐",
    title: "WordPress SEO",
    tag: "Most Used",
    href: "/services/wordpress-seo",
    description:
      "WordPress powers over 40% of the web — but out-of-the-box, it's not fully optimised for search. I configure your WordPress site for speed, clean URLs, proper indexing, schema markup, and plugin optimisation to maximise your organic visibility.",
  },
  {
    icon: "🛍️",
    title: "Shopify SEO",
    tag: "Ecommerce",
    href: "/services/shopify-seo",
    description:
      "Shopify is built for selling, but it has SEO limitations. I work around them — optimising collection pages, product descriptions, site structure, and technical elements so your store ranks for the keywords your customers are searching.",
  },
  {
    icon: "🛒",
    title: "Ecommerce SEO",
    tag: "High Intent",
    href: "/services/ecommerce-seo",
    description:
      "Drive organic traffic that converts into sales. I optimise product pages, category structures, site speed, and internal linking to help your online store compete against the big players and capture high-intent shoppers.",
  },
  {
    icon: "💻",
    title: "SaaS SEO",
    tag: "Growth",
    href: "/services/saas-seo",
    description:
      "For software companies, SEO is a long-term growth channel. I build strategies focused on product-led content, comparison keywords, feature pages, and link building that positions your SaaS brand as an authority in your niche.",
  },
];

export default function PlatformSEOServices() {
  return (
    <ServiceSection
      label="Platform-Specific SEO"
      headline="Platform-Specific SEO"
      accentWord="Platform-Specific"
      description="Every platform has its own SEO quirks and limitations. I know them inside out — and I know exactly how to work around them to get your site ranking."
      services={platformServices}
      bgColor="bg-[#0f0f0f]"
    />
  );
}