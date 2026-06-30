import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { email, hasPhone, phone, phoneHref } from "@/lib/data";
import { ContactForm } from "./ContactForm";
import { LeadForm } from "./LeadForm";

export function ContactPanel({ source = "contact", variant = "service" }: { source?: string; variant?: "service" | "contact" }) {
  const isContact = variant === "contact";

  return (
    <section className="section premium-bg">
      <div className="premium-grid" />
      <div className="container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="text-white">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-orange-300">{isContact ? "Contact usahomeservices" : "Get Your Free Estimate Today"}</p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">{isContact ? "Send a message to our support team." : "Premium help for urgent repairs and planned upgrades."}</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">{isContact ? "Ask a question, request support, or tell us what you need help with." : "Our team is ready to help you with fast scheduling, premium service, and transparent quotes."}</p>
          <div className="mt-8 grid gap-4">
            {hasPhone ? <Info icon={<Phone size={20} />} label="Call Directly" value={<Link href={phoneHref}>{phone}</Link>} /> : null}
            <Info icon={<Mail size={20} />} label="Email Us" value={<Link href={`mailto:${email}`}>{email}</Link>} />
            <Info icon={<MapPin size={20} />} label="Service Coverage" value="Indianapolis Metropolitan Area" />
          </div>
          <blockquote className="glass-card mt-8 rounded-[28px] p-5 text-lg font-semibold leading-8 text-white/84">“Fastest response in the area. The usahomeservices team was professional, clean, and resolved our water heater issue within hours.”</blockquote>
        </div>
        <div className="light-glass rounded-[30px] p-5 md:p-7">
          {isContact ? <ContactForm source={source} /> : <LeadForm source={source} />}
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className="glass-card flex gap-4 rounded-3xl p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink">{icon}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-orange-200">{label}</p>
        <div className="mt-1 font-black text-white">{value}</div>
      </div>
    </div>
  );
}
