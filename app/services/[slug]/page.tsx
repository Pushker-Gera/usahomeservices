import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { PageTransition } from "@/components/Animated";
import { Button } from "@/components/Button";
import { hasPhone, phone, phoneHref, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-ink py-20 text-white">
        <Image src={service.image} alt={service.title} fill className="object-cover opacity-28" />
        <div className="container relative">
          <Link href="/services" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-brass"><ArrowLeft size={17} /> Back to All Services</Link>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brass">{service.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-black tracking-tight md:text-7xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{service.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[1fr_360px]">
          <article className="rounded-lg bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-copper">Service Overview</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">{service.overview}</p>
            <h2 className="mt-9 text-2xl font-black">Professional Standards</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {service.standards.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-mist p-4 font-bold"><CheckCircle2 size={19} className="text-sage" /> {item}</div>
              ))}
            </div>
            <h2 className="mt-9 text-2xl font-black">Key Benefits</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {service.benefits.map((item) => <div key={item} className="rounded-lg border border-black/8 p-4 font-bold">{item}</div>)}
            </div>
          </article>
          <aside className="h-fit rounded-lg bg-ink p-6 text-white shadow-lift">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brass">Need Help Now?</p>
            <p className="mt-4 text-2xl font-black">{hasPhone ? "Click below to speak directly with our expert team." : "Send your details and our team will follow up quickly."}</p>
            <p className="mt-3 text-white/70">{hasPhone ? "Available 24/7 for you." : "Quote requests are routed through Google Sheets."}</p>
            <Button href={hasPhone ? phoneHref : "/quote-request"} className="mt-6 w-full">{hasPhone ? phone : "Request Quote"}</Button>
            <p className="mt-6 rounded-lg bg-white/10 p-4 text-center text-sm font-black uppercase tracking-widest">Rapid Response Time</p>
          </aside>
        </div>
      </section>
      <ContactPanel source={`service-${service.slug}`} />
    </PageTransition>
  );
}
