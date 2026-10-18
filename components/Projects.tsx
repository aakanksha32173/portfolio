'use client';
import Link from 'next/link';
import { useState } from 'react';
import { categories, featuredProjects, moreWork, projectHref, type Category } from '../data/portfolio';
import ProjectPreview from './ProjectPreview';
import { ArrowIcon, Badge, Section, TagList } from './ui';

type Filter = 'All' | Category;
const filters: Filter[] = ['All', ...categories];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const match = (cats: Category[]) => filter === 'All' || cats.includes(filter);
  const shown = featuredProjects.filter((p) => match(p.categories));
  const more = moreWork.filter((p) => match(p.categories));

  const filterBar = (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-1.5">
      {filters.map((f) => {
        const count = f === 'All' ? featuredProjects.length : featuredProjects.filter((p) => p.categories.includes(f)).length;
        return (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === f ? 'border-accent bg-accent text-bg' : 'border-line text-muted hover:border-accent/50 hover:text-fg'
            }`}
          >
            {f} <span className="font-mono opacity-70">{count}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <Section id="projects" eyebrow="Projects" title="Featured engineering" aside={filterBar}>
      <p className="sr-only" aria-live="polite">
        {shown.length} featured projects shown
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {shown.map((p) => (
          <li key={`${filter}-${p.slug}`} className="tile group fade-up flex min-w-0 flex-col p-4 transition-colors hover:border-accent/40 sm:p-5">
            <div className="h-28">
              <ProjectPreview kind={p.preview} />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{p.categories.join(' · ')}</p>
              <Badge tone={p.status.includes('ongoing') ? 'warn' : 'default'}>{p.status}</Badge>
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-fg">{p.title}</h3>
            <dl className="mt-3 space-y-2 text-sm leading-relaxed">
              {(
                [
                  ['Problem', p.problem],
                  ['Built', p.solution],
                  ['Why it matters', p.impact],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="grid gap-0.5 sm:grid-cols-[6.5rem_1fr] sm:gap-2">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">{k}</dt>
                  <dd className="text-fg/85">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 pt-1 md:mt-auto md:pt-4">
              <TagList items={p.tech} label={`${p.title} technologies`} max={5} />
              <Link href={projectHref(p.slug)} className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                Explore project <span className="sr-only">: {p.title}</span>
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </li>
        ))}
        {shown.length === 0 && <li className="tile p-6 text-sm text-muted md:col-span-2">No featured projects in this category.</li>}
      </ul>

      {more.length > 0 && (
        <details className="tile mt-4 px-5 py-3">
          <summary className="flex cursor-pointer items-center gap-2 rounded text-sm font-medium text-fg">
            <span className="chevron text-accent transition-transform" aria-hidden="true">
              ›
            </span>
            More work <span className="font-mono text-xs text-muted">{more.length}</span>
          </summary>
          <ul className="mt-3 grid gap-x-6 gap-y-3 pb-2 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => {
              const external = m.href?.startsWith('http');
              return (
                <li key={m.title} className="border-t border-line pt-3">
                  <p className="text-sm font-medium text-fg">{m.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{m.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <TagList items={m.tech} label={`${m.title} technologies`} />
                    {m.href && (
                      <Link
                        href={m.href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-xs font-medium text-sky-300 hover:text-accent"
                      >
                        {m.linkLabel} →{external && <span className="sr-only"> (opens in a new tab)</span>}
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </details>
      )}
    </Section>
  );
}
