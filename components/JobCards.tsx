import { BriefcaseBusiness, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { jobs } from "@/lib/data";
import { Reveal } from "./Animated";

export function JobCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map((job, index) => (
        <Reveal key={job.title} delay={index * 0.05}>
          <article className="gradient-border group relative h-full overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))] p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" />
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-orange-400/16 blur-2xl" />
            <div className="relative mb-4 flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-300 text-ink shadow-[0_16px_40px_rgba(251,146,60,0.24)]">
                <BriefcaseBusiness size={23} />
              </div>
              <Link href={`/careers?job=${encodeURIComponent(job.title)}#apply`} className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/18">
                Apply Now
              </Link>
            </div>
            <h3 className="relative text-xl font-black tracking-tight">{job.title}</h3>
            <div className="relative mt-4 flex flex-wrap gap-3 text-sm font-bold text-white/82">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                <DollarSign size={16} /> {job.rate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                <Clock size={16} /> {job.hours}
              </span>
            </div>
            <p className="relative mt-4 leading-7 text-white/66">{job.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
