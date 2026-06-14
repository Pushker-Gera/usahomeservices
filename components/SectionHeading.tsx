export function SectionHeading({ eyebrow, title, text, center = false, invert = false }: { eyebrow?: string; title: string; text?: string; center?: boolean; invert?: boolean }) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-copper">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-black tracking-tight md:text-5xl ${invert ? "text-white" : "text-ink"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${invert ? "text-white/75" : "text-slate-600"}`}>{text}</p> : null}
    </div>
  );
}
