import { PageTransition } from "@/components/Animated";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | usahomeservices Home Services Questions",
  description: "Find answers about usahomeservices emergency repairs, quote requests, Indianapolis service areas, online applications, and Google Sheets form storage.",
  path: "/faq",
  keywords: ["usahomeservices FAQ", "home services questions", "Indianapolis repair FAQ"]
});

const faqs: Array<[string, string]> = [
  ["Do you provide emergency service?", "Yes. usahomeservices offers emergency support for urgent plumbing, roofing, electrical, locksmith, and damage mitigation needs."],
  ["Which areas do you serve?", "We serve Indianapolis and surrounding communities within an approximate 50-mile radius."],
  ["How does the quote request process work?", "Submit the form with your service need. Our team reviews the details, contacts you, and provides a transparent estimate before work begins."],
  ["Can candidates apply online?", "Yes. The Careers page includes job cards and a full application form with resume upload support."]
];

export default function FAQPage() {
  return (
    <PageTransition>
      <JsonLd data={faqSchema(faqs)} />
      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading level="h1" eyebrow="FAQ" title="Frequently Asked Questions" text="Quick answers for homeowners and job candidates." center invert />
          <div className="mx-auto grid max-w-3xl gap-4">
            {faqs.map(([q, a]) => (
              <article key={q} className="glass-card rounded-[26px] p-5 text-white">
                <h3 className="text-xl font-black">{q}</h3>
                <p className="mt-3 leading-7 text-white/70">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
