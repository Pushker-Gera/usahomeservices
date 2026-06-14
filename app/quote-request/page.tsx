import { ContactPanel } from "@/components/ContactPanel";
import { PageTransition } from "@/components/Animated";
import { SectionHeading } from "@/components/SectionHeading";

export default function QuoteRequestPage() {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Quote Request" title="Tell Us What Your Home Needs" text="Submit your service request and our team will follow up with clear next steps and transparent pricing." center />
        </div>
      </section>
      <ContactPanel source="quote-request" />
    </PageTransition>
  );
}
