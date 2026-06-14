"use client";

import { useState } from "react";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { Button } from "./Button";

export function ContactForm({ source = "contact-page" }: { source?: string }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.fullName || !data.phone || !data.email || !data.message) {
      setStatus("Please complete the required fields.");
      setLoading(false);
      return;
    }

    try {
      const result = await submitToGoogleSheet({
        formType: "contact_message",
        source,
        fullName: String(data.fullName),
        phone: String(data.phone),
        email: String(data.email),
        message: String(data.message)
      });
      setStatus(result.demo ? "Demo success: Google Script URL is missing, but the contact form is working." : "Message sent successfully. We will contact you shortly.");
      form.reset();
    } catch {
      setStatus("Submission failed. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="contactFullName">Full Name</label>
          <input className="field" id="contactFullName" name="fullName" required />
        </div>
        <div>
          <label className="label" htmlFor="contactPhone">Phone Number</label>
          <input className="field" id="contactPhone" name="phone" required />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="contactEmail">Email Address</label>
        <input className="field" id="contactEmail" name="email" type="email" required />
      </div>
      <div>
        <label className="label" htmlFor="contactMessage">Message</label>
        <textarea className="field min-h-32" id="contactMessage" name="message" required />
      </div>
      <Button type="submit" className="w-full" variant="dark">{loading ? "Submitting..." : "Send Message"}</Button>
      {status ? <p className={`rounded-lg p-3 text-sm font-bold ${status.includes("failed") ? "bg-red-50 text-red-700" : "bg-sage/15 text-sage"}`}>{status}</p> : null}
    </form>
  );
}
