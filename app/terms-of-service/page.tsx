import { PageTransition } from "@/components/Animated";

const items = [
  ["Acceptance of Terms", "By accessing and using this website, you agree to comply with and be bound by these terms and conditions."],
  ["Services Offered", "Zenza Home Services provides plumbing, roofing, HVAC, locksmith, electrical, emergency, and general maintenance services. Requests are subject to availability and formal quotation."],
  ["Intellectual Property", "All website content, graphics, logos, and materials are the property of Zenza Home Services or its authorized owners."],
  ["Limitation of Liability", "Zenza Home Services shall not be liable for indirect, incidental, or consequential damages resulting from website use."],
  ["Governing Law", "These terms are governed by the laws of the State of Indiana."]
];

export default function TermsPage() {
  return (
    <PageTransition>
      <section className="section bg-white">
        <article className="container max-w-3xl rounded-lg bg-mist p-8">
          <h1 className="text-4xl font-black">Terms & Conditions</h1>
          <p className="mt-2 font-bold text-slate-500">Last Updated: May 18, 2026</p>
          <div className="mt-8 grid gap-6">
            {items.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-2 leading-8 text-slate-700">{text}</p>
              </section>
            ))}
          </div>
        </article>
      </section>
    </PageTransition>
  );
}
