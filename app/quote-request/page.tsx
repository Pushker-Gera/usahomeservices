import { ContactPanel } from "@/components/ContactPanel";
import { PageTransition } from "@/components/Animated";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Quote Request | usahomeservices Indianapolis",
  description: "Request a premium usahomeservices quote for plumbing, roofing, HVAC, locksmith, electrical, emergency repair, and home maintenance in Indianapolis.",
  path: "/quote-request",
  keywords: ["usahomeservices quote", "Indianapolis home repair estimate", "request home service quote"]
});

export default function QuoteRequestPage() {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionHeading level="h1" eyebrow="Quote Request" title="Tell Us What Your Home Needs" text="Submit your service request and our team will follow up with clear next steps and transparent pricing." center />
        </div>
      </section>
      <ContactPanel source="quote-request" />
    </PageTransition>
  );
}
