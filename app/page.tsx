import { ArrowRight, BadgeCheck, CalendarCheck, CheckCircle2, ClipboardCheck, Headphones, Phone, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import { AnimatedCounter, PageTransition, Reveal } from "@/components/Animated";
import { Button } from "@/components/Button";
import { ContactPanel } from "@/components/ContactPanel";
import { JobCards } from "@/components/JobCards";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceCard";
import { areas, phone, phoneHref, quickFacts } from "@/lib/data";

const heroStats = [
  { value: 24, suffix: "/7", label: "Emergency Response" },
  { value: 100, suffix: "%", label: "Service Guarantee" },
  { value: 50, suffix: "mi", label: "Metro Coverage" }
];

const steps = [
  { title: "Tell us what happened", text: "Submit a quote request or call the emergency line with your service need.", icon: ClipboardCheck },
  { title: "Get matched fast", text: "We route your request to the right home-services specialist for rapid follow-up.", icon: Headphones },
  { title: "Approve clear pricing", text: "You receive transparent recommendations before work starts.", icon: CalendarCheck },
  { title: "Relax at home", text: "Licensed pros complete the work cleanly and stand behind the result.", icon: Wrench }
];

const testimonials = [
  { name: "Megan R.", city: "Carmel", text: "The team arrived fast, explained the issue clearly, and left the work area spotless. It felt premium from the first call." },
  { name: "Daniel P.", city: "Indianapolis", text: "Our roof leak was handled the same day. The quote was straightforward and the communication was excellent." },
  { name: "Alicia M.", city: "Fishers", text: "Professional, polished, and reliable. Zenza is now our go-to for anything home maintenance related." }
];

const faqs = [
  ["Do you offer emergency repairs?", "Yes. Emergency plumbing, roof leak, electrical hazard, storm, and locksmith requests can be handled 24/7."],
  ["Can I request a quote online?", "Yes. Use the quote form and the team will follow up with the next steps and service recommendations."],
  ["Are job applications stored?", "Yes. Applications are sent to Google Sheets through the Apps Script endpoint, with demo success when the URL is missing."],
  ["Which areas do you serve?", "Zenza serves Indianapolis and surrounding communities within the metro service area."]
];

const reasons = [
  { title: "Licensed Specialists", text: "Trained home-service professionals with dependable standards.", icon: ShieldCheck },
  { title: "Upfront Pricing", text: "Clear recommendations and no surprise-cost culture.", icon: BadgeCheck },
  { title: "Rapid Response", text: "Emergency support for urgent home issues day or night.", icon: Phone },
  { title: "Quality Guarantee", text: "Premium workmanship backed by a satisfaction promise.", icon: Sparkles }
];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="premium-bg relative min-h-[calc(100vh-var(--header-h))]">
        <div className="premium-grid" />
        <div className="hero-particles" aria-hidden>
          <span /><span /><span /><span /><span />
        </div>
        <div className="container relative z-10 flex min-h-[calc(100vh-var(--header-h))] flex-col items-center justify-center py-20 text-center text-white">
          <Reveal>
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/22 bg-white/10 px-4 py-2 text-sm font-black text-orange-100 backdrop-blur">
              <BadgeCheck size={17} className="text-orange-300" />
              Trusted by Local Homeowners
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl lg:text-8xl">
              Expert Care for Your <span className="accent-text">Dream Home</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
              Premium plumbing, roofing, HVAC, locksmith, electrical, emergency, and home maintenance services with a lead flow built for fast response.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/quote-request">Get Free Estimate <ArrowRight size={18} /></Button>
              <Button href={phoneHref} variant="glass"><Phone size={18} /> Call {phone}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {quickFacts.slice(0, 4).map((fact) => {
                const Icon = fact.icon;
                return (
                  <span key={fact.title} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-white/82 backdrop-blur">
                    <Icon size={16} className="text-orange-300" />
                    {fact.title}
                  </span>
                );
              })}
            </div>
          </Reveal>
          <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.24 + index * 0.05}>
                <div className="glass-card rounded-[28px] p-5">
                  <p className="text-4xl font-black text-orange-300"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></p>
                  <p className="mt-2 text-sm font-black uppercase tracking-widest text-white/62">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-amber-300 py-5 text-ink">
        <div className="container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-widest">Emergency? Call Now!</p>
            <p className="font-semibold text-ink/72">Available 24/7 for burst pipes, roof leaks, lockouts, and urgent repairs.</p>
          </div>
          <a href={phoneHref} className="inline-flex items-center gap-2 text-xl font-black">{phone}</a>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Instant Quote Flow" title="Request premium service without the back-and-forth." text="Tell us what your home needs. The lead system sends service details straight to Google Sheets for easy follow-up." />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Transparent quotes", "Fast routing", "Demo-safe forms", "Google Sheets storage"].map((item) => (
                <div key={item} className="light-glass flex items-center gap-3 rounded-2xl p-4 font-black">
                  <CheckCircle2 size={19} className="text-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="light-glass rounded-[32px] p-5 md:p-7">
              <LeadForm source="homepage-quote" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading eyebrow="Our Expertise" title="Comprehensive Home Solutions" text="Modern, conversion-focused service cards for every core home-services category." center invert />
          <ServiceGrid detailed />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How It Works" title="A clean service flow from first click to finished repair." center />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="light-glass h-full rounded-[28px] p-6">
                    <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink"><Icon size={24} /></div>
                      <span className="text-4xl font-black text-slate-200">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#eef3f8]">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Why Choose Us" title="Premium standards, practical communication, and work you can trust." text="Zenza blends emergency response with high-end service discipline: clean workspaces, transparent recommendations, and a satisfaction guarantee." />
            <Button href="/about" variant="dark">Explore Our Story</Button>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Reveal key={reason.title} delay={index * 0.05}>
                  <article className="light-glass rounded-[28px] p-6">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-ink text-orange-300"><IconComponent size={22} /></div>
                    <h3 className="font-black">{reason.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{reason.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading eyebrow="Testimonials" title="Homeowners notice the difference." text="Professional communication, fast scheduling, and premium workmanship are the baseline." center invert />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="glass-card h-full rounded-[28px] p-6 text-white">
                  <div className="mb-5 flex gap-1 text-orange-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
                  <p className="leading-8 text-white/76">“{item.text}”</p>
                  <p className="mt-5 font-black">{item.name}</p>
                  <p className="text-sm text-white/50">{item.city}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Careers" title="Join the Home Services Growth Team" text="Apply for calling, appointment setting, cold calling, and sales roles supporting premium home service customers." center />
          <JobCards />
        </div>
      </section>

      <section className="section bg-[#eef3f8]">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Quick answers before you book." />
            <div className="mt-8 rounded-[28px] bg-ink p-6 text-white">
              <h3 className="text-2xl font-black">Expert Service In Your Area</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {areas.map((area) => <span key={area} className="rounded-2xl bg-white/8 p-3 text-sm font-bold text-white/72">{area}</span>)}
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {faqs.map(([q, a], index) => (
              <Reveal key={q} delay={index * 0.04}>
                <article className="light-glass rounded-[26px] p-5">
                  <h3 className="text-lg font-black">{q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="premium-bg rounded-[36px] px-6 py-14 text-center text-white md:px-12">
            <div className="premium-grid" />
            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Ready When You Are</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Get premium home service without waiting around.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Submit a quote request or call now for emergency help from a trusted local home-services team.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/quote-request">Request a Quote</Button>
                <Button href={phoneHref} variant="glass">Call {phone}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
