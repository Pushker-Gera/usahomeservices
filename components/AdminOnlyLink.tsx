"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { adminEmail, adminStorageKey } from "@/lib/admin";

export function AdminOnlyLink({ href, className = "", variant = "admin" }: { href: string; className?: string; variant?: "admin" | "dashboard" }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(adminStorageKey)?.trim().toLowerCase();
    setAllowed(Boolean(savedEmail && savedEmail === adminEmail));
  }, []);

  if (!allowed) return null;

  return (
    <Link href={href} className={className}>
      {variant === "dashboard" ? "View Admin Dashboard" : "Admin"}
    </Link>
  );
}
