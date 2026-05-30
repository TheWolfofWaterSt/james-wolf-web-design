import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site, sitePhoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a new website or redesign for your local business.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Let's talk about your website"
        description="Share a bit about your business and what you are looking for. I typically respond within one to two business days."
      />

      <section className="section-padding !pt-8">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="card">
              <h2 className="text-lg font-semibold text-ink">Email directly</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Prefer email over the form? Send a message anytime.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="link-accent mt-4 inline-block text-base"
              >
                {site.email}
              </a>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-ink">Call or text</h2>
              <p className="mt-3 text-sm text-ink-muted">
                Easier to talk it through? Reach me by phone during business
                hours.
              </p>
              <a
                href={`tel:${sitePhoneTel}`}
                className="link-accent mt-4 inline-block text-base"
              >
                {site.phone}
              </a>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-ink">Good fit if you are…</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>A local service business needing a new or refreshed site</li>
                <li>Ready to replace an outdated template with something custom</li>
                <li>Focused on mobile customers and clear calls to action</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
