import { Clock, Mail, MessageSquare, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactPanel } from "@/components/ContactPanel";
import { PageTransition } from "@/components/Animated";
import { SectionHeading } from "@/components/SectionHeading";
import { email, hasPhone, phone } from "@/lib/data";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading title="Let's Start a Conversation." text="Whether it is an urgent repair or a planned renovation, our experts are here to provide the luxury service you expect." center invert />
          <div className="grid gap-4 md:grid-cols-4">
            {hasPhone ? <Card icon={<Phone />} label="Phone" value={phone} /> : null}
            <Card icon={<Mail />} label="Email" value={email} />
            <Card icon={<Clock />} label="Hours" value="24/7/365 Emergency" />
            <Card icon={<MessageSquare />} label="Support" value="Live Chat Available" />
          </div>
        </div>
      </section>
      <ContactPanel source="contact-page" variant="contact" />
      <section className="section">
        <div className="container rounded-lg bg-white p-8 text-center shadow-sm">
          <h2 className="text-3xl font-black">Service Area</h2>
          <p className="mt-3 text-slate-600">Serving Indianapolis & Surrounding 50-Mile Radius</p>
        </div>
      </section>
    </PageTransition>
  );
}

function Card({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="glass-card rounded-[28px] p-6 text-center text-white">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink">{icon}</div>
      <p className="text-xs font-black uppercase tracking-widest text-orange-200">{label}</p>
      <p className="mt-2 font-black text-white/82">{value}</p>
    </div>
  );
}
