import Link from "next/link";
import { brandName, email, hasPhone, phone, phoneHref } from "@/lib/data";
import { AdminOnlyLink } from "./AdminOnlyLink";

export function Footer() {
  return (
    <footer className="premium-bg text-white">
      <div className="premium-grid" />
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div className="relative">
          <Link href="/" className="mb-4 flex items-center gap-2 text-xl font-black">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink">U</span>
            {brandName}
          </Link>
          <p className="text-sm leading-6 text-white/70">Premium home maintenance and emergency services you can trust. Serving homeowners with excellence since our inception.</p>
        </div>
        <div className="relative">
          <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-orange-300">Quick Links</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="relative">
          <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-orange-300">Our Services</h3>
          <div className="grid gap-3 text-sm text-white/75">
            <Link href="/services/plumbing">Emergency Plumbing</Link>
            <Link href="/services/roofing">Roofing Services</Link>
            <Link href="/services/hvac">HVAC & Cooling</Link>
            <Link href="/services/locksmith">Locksmith Services</Link>
            <Link href="/services/maintenance">Home Maintenance</Link>
          </div>
        </div>
        <div className="relative">
          <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-orange-300">Contact Us</h3>
          <div className="grid gap-3 text-sm text-white/75">
            {hasPhone ? <Link href={phoneHref}>{phone}</Link> : null}
            <Link href={`mailto:${email}`}>{email}</Link>
            <span>Serving Indianapolis & Surrounding Areas</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {brandName}. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/terms-of-service">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <AdminOnlyLink href="/admin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
