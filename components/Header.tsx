"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { phone, phoneHref } from "@/lib/data";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#07111f] py-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
      <div className="container">
        <div className="flex min-h-[68px] items-center justify-between rounded-[28px] border border-white/12 bg-[rgba(11,23,40,0.92)] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-400 to-yellow-300 text-xl font-black text-ink shadow-[0_0_38px_rgba(251,146,60,0.32)]">Z</span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-white">ZenzaHome</span>
            <span className="mt-1 hidden text-[10px] font-black uppercase tracking-[0.22em] text-orange-200/80 sm:block">Premium Services</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.06] p-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                pathname === item.href
                  ? "bg-gradient-to-r from-orange-500 to-amber-300 text-ink shadow-[0_10px_28px_rgba(251,146,60,0.22)]"
                  : "text-white/74 hover:bg-white/8 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/quote-request" className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-extrabold text-white/86 transition hover:bg-white/12 hover:text-white">
            Get Quote
          </Link>
          <Link href={phoneHref} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-300 px-4 py-3 text-sm font-extrabold text-ink shadow-[0_14px_38px_rgba(251,146,60,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(251,146,60,0.34)]">
            <Phone size={17} />
            {phone}
          </Link>
        </div>
        <button aria-label="Toggle menu" className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] text-white lg:hidden" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#07111f] lg:hidden">
            <div className="container grid gap-2 py-4">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 text-base font-extrabold ${pathname === item.href ? "bg-gradient-to-r from-orange-500 to-amber-300 text-ink" : "text-white/84 hover:bg-white/8"}`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/quote-request" onClick={() => setOpen(false)} className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-300 px-3 py-3 text-center font-extrabold text-ink">
                Request Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
