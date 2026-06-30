import { PageTransition } from "@/components/Animated";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { brandName, hasPhone, phone, phoneHref, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative text-white">
          <SectionHeading eyebrow="Our Story" title="Crafting Comfort Through Excellence." text={`At ${brandName}, we do not just fix pipes or repair roofs. We protect the most important place in the world: your home. Founded on the principles of luxury quality and absolute trust, we have become the preferred choice for homeowners who demand the best.`} invert />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card rounded-[28px] p-8"><p className="text-6xl font-black text-orange-300">100%</p><p className="mt-2 font-black uppercase tracking-widest">Satisfaction Rate</p></div>
            <div className="glass-card rounded-[28px] p-8"><p className="text-6xl font-black accent-text">24/7</p><p className="mt-2 font-black uppercase tracking-widest">Available Support</p></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading title="Our Core Values" text="The principles that guide every technician, every call, and every service we provide." center />
          <div className="grid gap-5 md:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="light-glass rounded-[28px] p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink"><Icon size={23} /></div>
                  <h3 className="text-xl font-black">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="premium-bg py-16 text-white">
        <div className="premium-grid" />
        <div className="container text-center">
          <h2 className="text-4xl font-black">Ready to Experience the usahomeservices Difference?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">Our experts are standing by to handle your home maintenance with the care it deserves.</p>
          <div className="mt-7 flex justify-center gap-3">
            {hasPhone ? <Button href={phoneHref}>Call {phone}</Button> : null}
            <Button href="/quote-request" variant="secondary">Book Online</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
