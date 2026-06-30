import { PageTransition } from "@/components/Animated";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceCard";
import { hasPhone, phone, phoneHref } from "@/lib/data";
import { pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services | usahomeservices Indianapolis Home Repair",
  description: "Explore usahomeservices premium plumbing, roofing, HVAC, electrical, locksmith, emergency repair, water heater, appliance, and home maintenance services in Indianapolis.",
  path: "/services",
  keywords: ["usahomeservices services", "Indianapolis home repair services", "emergency home services"]
});

export default function ServicesPage() {
  return (
    <PageTransition>
      <JsonLd data={serviceSchema} />
      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading level="h1" title="Premium Solutions for Every Corner of Your Home" text="Discover our range of expert services designed to provide you with peace of mind and luxury performance." center invert />
          <ServiceGrid detailed />
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-amber-300 py-14 text-ink">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">{hasPhone ? "Need Immediate Assistance?" : "Need a Fast Quote?"}</h2>
            <p className="mt-2 font-semibold text-ink/72">{hasPhone ? "Our emergency teams are active 24/7. Do not wait for the damage to spread." : "Submit your details and our team will follow up through the quote system."}</p>
          </div>
          <Button href={hasPhone ? phoneHref : "/quote-request"} variant="dark">{hasPhone ? phone : "Request Quote"}</Button>
        </div>
      </section>
    </PageTransition>
  );
}
