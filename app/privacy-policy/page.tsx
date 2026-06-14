import { PageTransition } from "@/components/Animated";

export default function PrivacyPolicyPage() {
  return <Legal title="Privacy Policy" updated="May 18, 2026" paragraphs={[
    "At Zenza Home Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.",
    "We may collect personal information such as your name, email address, phone number, service details, and candidate application information when you fill out a form or contact us.",
    "We use your information to provide and manage services, respond to enquiries, review job applications, deliver support, and improve website performance.",
    "We do not sell, rent, or trade your personal information. We may share data with trusted partners who assist us in operating the website or conducting business, provided they keep it confidential."
  ]} />;
}

function Legal({ title, updated, paragraphs }: { title: string; updated: string; paragraphs: string[] }) {
  return (
    <PageTransition>
      <section className="section bg-white">
        <article className="container max-w-3xl rounded-lg bg-mist p-8">
          <h1 className="text-4xl font-black">{title}</h1>
          <p className="mt-2 font-bold text-slate-500">Last Updated: {updated}</p>
          <div className="mt-8 grid gap-5 leading-8 text-slate-700">
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </article>
      </section>
    </PageTransition>
  );
}
