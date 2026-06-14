"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { jobs } from "@/lib/data";
import { submitToGoogleSheet } from "@/lib/google-sheets";
import { Button } from "./Button";

export function JobApplicationForm() {
  const params = useSearchParams();
  const selected = params.get("job") || jobs[0].title;
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const required = ["full_name", "phone", "email", "city", "state", "country", "job_applying_for", "work_experience", "available_hours_per_week"];
    if (required.some((field) => !formData.get(field))) {
      setStatus("Please complete the required fields.");
      setLoading(false);
      return;
    }
    const resume = formData.get("resume");
    try {
      const result = await submitToGoogleSheet({
        formType: "job_application",
        fullName: String(formData.get("full_name")),
        phone: String(formData.get("phone")),
        email: String(formData.get("email")),
        city: String(formData.get("city")),
        state: String(formData.get("state")),
        country: String(formData.get("country")),
        jobApplyingFor: String(formData.get("job_applying_for")),
        workExperience: String(formData.get("work_experience")),
        availableHoursPerWeek: String(formData.get("available_hours_per_week")),
        resumeFileName: resume instanceof File ? resume.name : "",
        message: String(formData.get("message") || "")
      });
      setStatus(result.demo ? "Demo success: Google Script URL is missing, but the application form is working." : "Application submitted successfully. Our hiring team will review it shortly.");
      form.reset();
    } catch {
      setStatus("Submission failed. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="light-glass grid gap-4 rounded-[30px] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" name="full_name" />
        <Field label="Phone Number" name="phone" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email Address" name="email" type="email" />
        <Field label="City" name="city" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="State" name="state" />
        <Field label="Country" name="country" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="label" htmlFor="job_applying_for">Job Applying For</label>
          <select className="field" id="job_applying_for" name="job_applying_for" required defaultValue={selected}>
            {jobs.map((job) => (
              <option key={job.title}>{job.title}</option>
            ))}
          </select>
        </div>
        <Field label="Available Hours Per Week" name="available_hours_per_week" />
      </div>
      <div>
        <label className="label" htmlFor="work_experience">Work Experience</label>
        <textarea className="field min-h-28" id="work_experience" name="work_experience" required />
      </div>
      <div>
        <label className="label" htmlFor="resume">Resume Upload</label>
        <input className="field" id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
        <p className="mt-2 text-xs font-bold text-slate-500">Resume upload is UI-only for now. Google Drive upload can be added later.</p>
      </div>
      <div>
        <label className="label" htmlFor="message">Message</label>
        <textarea className="field min-h-28" id="message" name="message" />
      </div>
      <Button type="submit" variant="dark">{loading ? "Submitting..." : "Submit Application"}</Button>
      {status ? <p className={`rounded-lg p-3 text-sm font-bold ${status.includes("failed") ? "bg-red-50 text-red-700" : "bg-sage/15 text-sage"}`}>{status}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="label" htmlFor={name}>{label}</label>
      <input className="field" id={name} name={name} type={type} required />
    </div>
  );
}
