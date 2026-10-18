'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { experience, projectHref } from '../data/portfolio';
import Dialog from './Dialog';
import { ArrowIcon, Badge, CloseIcon, Section, TagList } from './ui';

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = experience.find((e) => e.id === activeId);

  useEffect(() => {
    const onOpen = (e: Event) => setActiveId((e as CustomEvent<string>).detail);
    window.addEventListener('experience:open', onOpen);
    return () => window.removeEventListener('experience:open', onOpen);
  }, []);

  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built things">
      <ol className="grid gap-4 lg:grid-cols-3">
        {experience.map((g) => (
          <li key={g.id} className="tile group flex min-w-0 flex-col p-5 transition-colors hover:border-accent/40">
            <p className="font-mono text-[11px] text-muted">{g.period}</p>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-fg">{g.title}</h3>
            <p className="text-sm text-sky-300">{g.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg/80">{g.line}</p>
            <div className="mt-4">
              <TagList items={g.tags} label={`${g.title} technologies`} />
            </div>
            <button
              type="button"
              onClick={() => setActiveId(g.id)}
              aria-haspopup="dialog"
              className="mt-auto inline-flex items-center gap-1.5 self-start pt-4 text-sm font-medium text-accent hover:underline"
            >
              Details <span className="sr-only">about {g.title}, {g.org}</span>
              <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </li>
        ))}
      </ol>

      <Dialog open={!!active} onClose={() => setActiveId(null)} labelledBy="exp-title" className="w-[min(44rem,calc(100vw-2rem))]">
        {active && (
          <div className="flex max-h-[85vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
              <div>
                <p className="font-mono text-[11px] text-muted">{active.period}</p>
                <h2 id="exp-title" className="text-lg font-semibold text-fg">
                  {active.title}
                </h2>
                <p className="text-sm text-sky-300">{active.org}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6 overflow-y-auto px-6 py-5">
              {active.roles.map((r) => (
                <article key={r.role + r.period}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold text-fg">{r.role}</h3>
                    <p className="font-mono text-[11px] text-muted">{r.period}</p>
                  </div>
                  <p className="text-sm text-muted">
                    {r.org}
                    {r.unit && ` · ${r.unit}`}
                  </p>
                  {r.status && (
                    <p className="mt-2">
                      <Badge tone="warn">{r.status}</Badge>
                    </p>
                  )}
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg/85">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                    {r.planned?.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <Badge>Planned</Badge>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <TagList items={r.tech} label={`${r.role} technologies`} />
                  </div>
                  {r.caseStudy && (
                    <Link
                      href={projectHref(r.caseStudy)}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-accent"
                    >
                      Read the case study <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </Dialog>
    </Section>
  );
}
