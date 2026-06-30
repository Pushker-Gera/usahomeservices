"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { adminEmail, adminStorageKey } from "@/lib/admin";

export function AdminOnlyLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(adminStorageKey)?.trim().toLowerCase();
    setAllowed(Boolean(savedEmail && savedEmail === adminEmail));
  }, []);

  if (!allowed) return null;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
