'use client';
import { useState } from 'react';
import { links, profile } from '../data/portfolio';
import { copyText } from './actions';
import { CopyIcon, MailIcon, SectionHeader } from './ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="tile flex min-w-0 scroll-mt-20 flex-col p-5 sm:p-6 lg:col-span-4">
      <SectionHeader id="contact" eyebrow="Contact" title="Let's talk" />
      <p className="text-sm leading-relaxed text-fg/85">
        Recruiters, engineers, and researchers are all welcome to reach out. {profile.availabilityLong}
      </p>
      <div className="mt-5 flex gap-2 lg:mt-auto lg:pt-5">
        <a
          href={`mailto:${links.email}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110"
        >
          <MailIcon className="h-4 w-4" /> Email me
        </a>
        <button
          type="button"
          onClick={async () => {
            if (await copyText(links.email)) {
              setCopied(true);
              setTimeout(() => setCopied(false), 1800);
            }
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2.5 text-sm text-fg hover:border-accent/50"
        >
          <CopyIcon className="h-4 w-4" />
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          <span className="sr-only">email address</span>
        </button>
      </div>
      <p className="mt-3 break-all font-mono text-[11px] text-muted">
        {links.email} · university: {links.universityEmail}
      </p>
    </section>
  );
}
