import { ExternalLink, FileSpreadsheet, MessageSquareText, UsersRound } from "lucide-react";

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
  return (
    <section className="premium-bg min-h-[calc(100vh-var(--header-h))] py-16 text-white">
      <div className="premium-grid" />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Admin Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Google Sheets is now your backend.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">View and manage leads directly in Google Sheets.</p>
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
