import { PageTransition } from "@/components/Animated";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceCard";
import { phone } from "@/lib/data";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="section premium-bg">
        <div className="premium-grid" />
        <div className="container relative">
          <SectionHeading title="Premium Solutions for Every Corner of Your Home" text="Discover our range of expert services designed to provide you with peace of mind and luxury performance." center invert />
          <ServiceGrid detailed />
        </div>
      </section>
      <section className="bg-gradient-to-r from-orange-500 to-amber-300 py-14 text-ink">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">Need Immediate Assistance?</h2>
            <p className="mt-2 font-semibold text-ink/72">Our emergency teams are active 24/7. Do not wait for the damage to spread.</p>
          </div>
          <Button href={`tel:${phone.replace(/[^0-9+]/g, "")}`} variant="dark">{phone}</Button>
        </div>
      </section>
    </PageTransition>
  );
}
