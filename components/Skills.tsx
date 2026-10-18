'use client';
import Link from 'next/link';
import { useRef, useState, type KeyboardEvent } from 'react';
import { experience, projectHref, projects, skills } from '../data/portfolio';
import { SectionHeader } from './ui';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9#+]/g, '');

// Where a skill shows up across projects and roles, derived from the same data the rest of the site uses.
function usage(skill: string) {
  const k = norm(skill);
  const hit = (tech: string[]) => tech.some((t) => norm(t) === k || t.split(/[/·]/).map(norm).includes(k));
  return {
    projects: projects.filter((p) => hit(p.tech)),
    roles: experience.flatMap((g) => g.roles.filter((r) => hit(r.tech)).map((r) => `${r.role.split(':')[0]}, ${r.org}`)),
  };
}

export default function Skills() {
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = skills[tab];
  const items = expanded ? [...group.core, ...group.more] : group.core;
  const used = picked ? usage(picked) : null;

  const select = (i: number) => {
    setTab(i);
    setExpanded(false);
    setPicked(null);
    tabs.current[i]?.focus();
  };
  const onKeyDown = (e: KeyboardEvent) => {
    const n = skills.length;
    if (e.key === 'ArrowRight') select((tab + 1) % n);
    else if (e.key === 'ArrowLeft') select((tab - 1 + n) % n);
    else if (e.key === 'Home') select(0);
    else if (e.key === 'End') select(n - 1);
    else return;
    e.preventDefault();
  };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="tile min-w-0 scroll-mt-20 p-5 sm:p-6 lg:col-span-8">
      <SectionHeader id="skills" eyebrow="Skills" title="Toolbox" />
      <div role="tablist" aria-label="Skill categories" onKeyDown={onKeyDown} className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1">
        {skills.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`tab-${s.id}`}
            role="tab"
            type="button"
            aria-selected={i === tab}
            aria-controls="skills-panel"
            tabIndex={i === tab ? 0 : -1}
            onClick={() => select(i)}
            className={`shrink-0 rounded-lg px-3 py-2 text-sm transition-colors ${
              i === tab ? 'bg-surface-2 font-medium text-fg' : 'text-muted hover:text-fg'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div id="skills-panel" role="tabpanel" aria-labelledby={`tab-${group.id}`} className="mt-4">
        <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
          {items.map((s) => (
            <li key={s}>
              <button
                type="button"
                aria-pressed={picked === s}
                onClick={() => setPicked((p) => (p === s ? null : s))}
                className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                  picked === s ? 'border-accent bg-accent/10 text-fg' : 'border-line bg-surface-2 text-fg/85 hover:border-accent/50'
                }`}
              >
                {s}
              </button>
            </li>
          ))}
          {group.more.length > 0 && (
            <li>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((x) => !x)}
                className="rounded-lg px-3 py-1.5 text-sm text-accent hover:underline"
              >
                {expanded ? 'Show fewer' : `+${group.more.length} more`}
              </button>
            </li>
          )}
        </ul>

        <div aria-live="polite" className="mt-4 min-h-[3rem] border-t border-line pt-3 text-sm">
          {!used && <p className="text-muted">Select a skill to see where I&apos;ve used it.</p>}
          {used && used.projects.length + used.roles.length === 0 && (
            <p className="text-muted">
              <span className="text-fg">{picked}</span>: listed on my resume; not tied to a featured project here.
            </p>
          )}
          {used && used.projects.length + used.roles.length > 0 && (
            <p className="text-muted">
              <span className="text-fg">{picked}</span> used in{' '}
              {used.projects.map((p, i) => (
                <span key={p.slug}>
                  {i > 0 && ', '}
                  <Link href={projectHref(p.slug)} className="text-sky-300 hover:text-accent">
                    {p.title}
                  </Link>
                </span>
              ))}
              {used.projects.length > 0 && used.roles.length > 0 && '; '}
              {[...new Set(used.roles)].join('; ')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
