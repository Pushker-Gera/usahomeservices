"use client";

import { ExternalLink, FileSpreadsheet, LockKeyhole, LogOut, MessageSquareText, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { adminEmail, adminStorageKey } from "@/lib/admin";
import { Button } from "./Button";

const sheetLinks = [
  {
    title: "Open Leads Sheet",
    text: "View service quote form submissions in the Service Leads tab.",
    href: process.env.NEXT_PUBLIC_LEADS_SHEET_URL,
    icon: FileSpreadsheet
  },
  {
    title: "Open Job Applications Sheet",
    text: "Review applicant details, selected role, availability, and resume filename.",
    href: process.env.NEXT_PUBLIC_JOB_APPLICATIONS_SHEET_URL,
    icon: UsersRound
  },
  {
    title: "Open Contact Messages Sheet",
    text: "Manage general contact messages from homeowners and visitors.",
    href: process.env.NEXT_PUBLIC_CONTACT_MESSAGES_SHEET_URL,
    icon: MessageSquareText
  }
];

export function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const savedEmail = window.localStorage.getItem(adminStorageKey)?.trim().toLowerCase();
    setAuthorized(Boolean(savedEmail && savedEmail === adminEmail));
  }, []);

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const normalized = email.trim().toLowerCase();

    if (normalized !== adminEmail) {
      setError("This email is not authorized for admin access.");
      return;
    }

    window.localStorage.setItem(adminStorageKey, normalized);
    setAuthorized(true);
  }

  function logout() {
    window.localStorage.removeItem(adminStorageKey);
    setAuthorized(false);
    setEmail("");
  }

  if (!authorized) {
    return (
      <section className="premium-bg min-h-[calc(100vh-var(--header-h))] py-16 text-white">
        <div className="premium-grid" />
        <div className="container relative">
          <div className="mx-auto max-w-xl rounded-[32px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8">
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink">
              <LockKeyhole size={28} />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Admin Login</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight">Restricted dashboard access</h1>
            <p className="mt-4 leading-7 text-white/70">Enter the authorized admin email to view and manage Google Sheets links.</p>

            <form onSubmit={login} className="mt-7 grid gap-4">
              <div>
                <label className="label text-white/70" htmlFor="adminEmail">Admin Email</label>
                <input
                  className="field"
                  id="adminEmail"
                  name="adminEmail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={adminEmail}
                  required
                />
              </div>
              <Button type="submit">Login to Dashboard</Button>
              {error ? <p className="rounded-2xl bg-red-500/12 p-3 text-sm font-bold text-red-200">{error}</p> : null}
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="premium-bg min-h-[calc(100vh-var(--header-h))] py-16 text-white">
      <div className="premium-grid" />
      <div className="container relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Admin Dashboard</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Google Sheets is now your backend.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">View and manage leads directly in Google Sheets.</p>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm font-black text-white/80 transition hover:bg-white/12">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sheetLinks.map((link) => {
            const Icon = link.icon;
            return (
              <article key={link.title} className="glass-card rounded-[28px] p-6">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink">
                  <Icon size={25} />
                </div>
                <h2 className="text-xl font-black">{link.title}</h2>
                <p className="mt-3 min-h-20 leading-7 text-white/68">{link.text}</p>
                <a
                  href={link.href || "#"}
                  target={link.href ? "_blank" : undefined}
                  rel={link.href ? "noreferrer" : undefined}
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${
                    link.href
                      ? "bg-gradient-to-r from-orange-500 to-amber-300 text-ink hover:-translate-y-0.5"
                      : "cursor-not-allowed border border-white/12 bg-white/8 text-white/50"
                  }`}
                  aria-disabled={!link.href}
                >
                  {link.href ? "Open Sheet" : "Add Sheet URL"} <ExternalLink size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="glass-card mt-8 rounded-[28px] p-6">
          <h2 className="text-2xl font-black">Setup Notes</h2>
          <p className="mt-3 leading-7 text-white/70">
            Add your Google Apps Script Web App URL to <span className="font-black text-orange-200">NEXT_PUBLIC_GOOGLE_SCRIPT_URL</span>. Optional sheet links can be added with
            <span className="font-black text-orange-200"> NEXT_PUBLIC_LEADS_SHEET_URL</span>,
            <span className="font-black text-orange-200"> NEXT_PUBLIC_JOB_APPLICATIONS_SHEET_URL</span>, and
            <span className="font-black text-orange-200"> NEXT_PUBLIC_CONTACT_MESSAGES_SHEET_URL</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
