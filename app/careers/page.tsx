import { Suspense } from "react";
import { BadgeDollarSign, Clock, Headphones, Laptop, ShieldCheck, Sparkles } from "lucide-react";
import { PageTransition, Reveal } from "@/components/Animated";
import { Button } from "@/components/Button";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { JobCards } from "@/components/JobCards";
import { SectionHeading } from "@/components/SectionHeading";
import { phoneHref } from "@/lib/data";

const benefits = [
  { title: "Flexible weekly hours", text: "Roles support 20-65 hour weekly ranges depending on position and performance.", icon: Clock },
  { title: "Home-services focus", text: "Work on real homeowner demand across repairs, quotes, and service scheduling.", icon: Headphones },
  { title: "Competitive hourly rates", text: "Openings range from $10 to $45 per hour across calling and sales roles.", icon: BadgeDollarSign },
  { title: "Remote-ready workflow", text: "Application and candidate data are captured digitally for easy review.", icon: Laptop }
];

const careerFaq = [
  ["Can I apply for more than one job?", "Yes. Submit your preferred role first, then mention additional roles in your message."],
  ["Do I need home-services experience?", "Experience helps, but strong communication, reliability, and sales discipline are also valuable."],
  ["How are applications stored?", "Applications are sent to the Job Applications tab in Google Sheets through the Apps Script Web App."],
  ["Can I upload a resume?", "Yes. The application form includes a resume upload field for PDF, DOC, or DOCX files."]
];

export default function CareersPage() {
  return (
    <PageTransition>
      <section className="premium-bg min-h-[620px]">
        <div className="premium-grid" />
        <div className="hero-particles" aria-hidden><span /><span /><span /><span /><span /></div>
        <div className="container relative z-10 flex min-h-[620px] flex-col items-center justify-center py-20 text-center text-white">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/22 bg-white/10 px-4 py-2 text-sm font-black text-orange-100 backdrop-blur">
              <Sparkles size={17} className="text-orange-300" />
              Careers / Jobs
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Build a career in <span className="accent-text">home-services growth</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72">
              Apply for calling, appointment setting, cold calling, and sales roles that support premium homeowner service requests.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="#apply">Apply Now</Button>
              <Button href="/admin" variant="glass">View Admin Dashboard</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Benefits" title="Professional roles with clear expectations and growth potential." center />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 0.05}>
                  <article className="light-glass h-full rounded-[28px] p-6">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink"><Icon size={23} /></div>
                    <h3 className="text-xl font-black">{benefit.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
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
          <SectionHeading eyebrow="Open Jobs" title="Choose the role that fits your communication strengths." text="Every job card includes hourly rate, weekly shift hours, role summary, and an Apply Now button." center invert />
          <JobCards />
        </div>
      </section>

      <section id="apply" className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Application" title="Submit your details in one clean form." text="Candidate data is sent to Google Sheets through the Apps Script Web App endpoint." />
            <div className="mt-6 grid gap-4">
              {[
                ["Status tracking", "Admins can update applicant status."],
                ["Role filtering", "Filter applications by selected job role."],
                ["CSV export", "Export applicant data for hiring workflows."]
              ].map(([title, text]) => (
                <div key={title} className="light-glass flex gap-4 rounded-2xl p-4">
                  <ShieldCheck className="mt-1 text-orange-500" size={20} />
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Suspense fallback={<div className="light-glass rounded-[28px] p-6">Loading form...</div>}>
              <JobApplicationForm />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[#eef3f8]">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Careers questions, answered." center />
          <div className="mx-auto grid max-w-4xl gap-4">
            {careerFaq.map(([q, a], index) => (
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
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Ready to Apply?</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Send your application and step into the pipeline.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Our team reviews role, experience, availability, resume, and message from one dashboard.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="#apply">Start Application</Button>
                <Button href={phoneHref} variant="glass">Call About Hiring</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
