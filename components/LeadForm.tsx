"use client";

import { useState } from "react";
import { serviceOptions } from "@/lib/data";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { Button } from "./Button";

export function LeadForm({ source = "website" }: { source?: string }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.fullName || !data.phone || !data.email || !data.zipCode || !data.serviceNeeded) {
      setStatus("Please complete the required fields.");
      setLoading(false);
      return;
    }
    try {
      const result = await submitToGoogleSheet({
        formType: "service_lead",
        source,
        fullName: String(data.fullName),
        phone: String(data.phone),
        email: String(data.email),
        zipCode: String(data.zipCode),
        serviceNeeded: String(data.serviceNeeded),
        message: String(data.message || "")
      });
      setStatus(result.demo ? "Demo success: Google Script URL is missing, but the form is working." : "Thank you. Your enquiry has been submitted successfully.");
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
          <label className="label" htmlFor="fullName">Full Name</label>
          <input className="field" id="fullName" name="fullName" required />
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone Number</label>
          <input className="field" id="phone" name="phone" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">Email Address</label>
          <input className="field" id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="label" htmlFor="zipCode">ZIP Code</label>
          <input className="field" id="zipCode" name="zipCode" required />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="serviceNeeded">Service Needed</label>
        <select className="field" id="serviceNeeded" name="serviceNeeded" required defaultValue="Plumbing">
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label" htmlFor="message">Your Message</label>
        <textarea className="field min-h-32" id="message" name="message" />
      </div>
      <Button type="submit" className="w-full" variant="dark">{loading ? "Submitting..." : "Submit Enquiry"}</Button>
      {status ? <p className={`rounded-lg p-3 text-sm font-bold ${status.includes("failed") ? "bg-red-50 text-red-700" : "bg-sage/15 text-sage"}`}>{status}</p> : null}
    </form>
  );
}
