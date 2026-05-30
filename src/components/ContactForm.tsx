"use client";

import { useState, FormEvent } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <p className="text-lg font-medium text-ink">Opening your email client…</p>
        <p className="mt-3 text-sm text-ink-muted">
          If nothing opens, email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            {site.email}
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-surface-border bg-surface-subtle px-4 py-3 text-ink shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-surface-border bg-surface-subtle px-4 py-3 text-ink shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-lg border border-surface-border bg-surface-subtle px-4 py-3 text-ink shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Tell me about your business and what you need from your website."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send message
      </button>

      <p className="text-xs text-ink-faint">
        No backend—submit opens your email app with a pre-filled message. Or
        email{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-brand-700 underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
