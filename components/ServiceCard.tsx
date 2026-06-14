import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "./Animated";

export function ServiceGrid({ detailed = false, dark = true }: { detailed?: boolean; dark?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.slug} delay={index * 0.04}>
            <article className={`gradient-border group relative h-full overflow-hidden rounded-[28px] p-6 transition duration-300 hover:-translate-y-2 ${dark ? "glass-card text-white" : "light-glass text-ink"}`}>
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-400/12 blur-2xl transition group-hover:bg-orange-400/20" />
              <div className="relative">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink shadow-[0_16px_40px_rgba(251,146,60,0.24)] transition group-hover:scale-105">
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                <p className={`mt-3 leading-7 ${dark ? "text-white/68" : "text-slate-600"}`}>{service.description}</p>
              </div>
              {detailed ? (
                <ul className={`relative mt-5 grid gap-2 text-sm ${dark ? "text-white/68" : "text-slate-600"}`}>
                  {service.benefits.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Sparkles size={14} className="text-orange-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="relative mt-7 flex flex-wrap gap-3">
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-orange-200 transition hover:bg-white/16">
                  Learn More <ArrowRight size={16} />
                </Link>
                <Link href="/quote-request" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-300 px-4 py-3 text-sm font-black text-ink transition hover:-translate-y-0.5">
                  Get Quote
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
