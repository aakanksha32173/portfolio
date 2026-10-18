'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { experience, links, projectHref, projects, sections } from '../data/portfolio';
import { copyText, downloadResume, goToSection, openExperience, openExternal } from './actions';
import Dialog from './Dialog';
import { SearchIcon } from './ui';

type Item = { id: string; group: string; label: string; hint?: string; keywords?: string; run: () => void };

export default function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const pending = useRef<(() => void) | null>(null);

  const items = useMemo<Item[]>(() => {
    const push = (href: string) => router.push(href);
    return [
      ...sections.map((s) => ({ id: `s-${s.id}`, group: 'Sections', label: s.label, run: () => goToSection(s.id, push) })),
      ...projects.map((p) => ({
        id: `p-${p.slug}`,
        group: 'Projects',
        label: p.title,
        hint: p.categories.join(' · '),
        keywords: p.tech.join(' '),
        run: () => router.push(projectHref(p.slug)),
      })),
      ...experience.map((e) => ({
        id: `e-${e.id}`,
        group: 'Experience',
        label: `${e.title}, ${e.org}`,
        hint: e.period,
        keywords: e.tags.join(' '),
        run: () => {
          if (document.getElementById('experience')) {
            goToSection('experience', push);
            openExperience(e.id);
          } else push('/#experience');
        },
      })),
      { id: 'a-resume', group: 'Actions', label: 'Download resume', hint: 'PDF', keywords: 'cv', run: downloadResume },
      {
        id: 'a-copy',
        group: 'Actions',
        label: 'Copy email address',
        hint: links.email,
        keywords: 'contact mail',
        run: () => void copyText(links.email),
      },
      { id: 'a-mail', group: 'Actions', label: 'Send an email', keywords: 'contact mail', run: () => (window.location.href = `mailto:${links.email}`) },
      { id: 'a-gh', group: 'Actions', label: 'Open GitHub', keywords: 'code repos', run: () => openExternal(links.github) },
      { id: 'a-li', group: 'Actions', label: 'Open LinkedIn', keywords: 'profile', run: () => openExternal(links.linkedin) },
      {
        id: 'a-term',
        group: 'Actions',
        label: 'Open developer terminal',
        keywords: 'shell cli',
        run: () => window.dispatchEvent(new Event('terminal:open')),
      },
    ];
  }, [router]);

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return items;
    return items.filter((i) => {
      const hay = `${i.label} ${i.group} ${i.hint ?? ''} ${i.keywords ?? ''}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [items, query]);

  const select = (item: Item | undefined) => {
    if (!item) return;
    if (item.id === 'a-copy') {
      item.run();
      setToast('Email copied');
      setTimeout(() => setToast(''), 1600);
      return;
    }
    pending.current = item.run; // runs after the dialog has closed and scroll is unlocked
    onOpenChange(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const n = filtered.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (n ? (a + 1) % n : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (n ? (a - 1 + n) % n : 0));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(Math.max(n - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      select(filtered[active]);
    }
  };

  let lastGroup = '';

  return (
    <Dialog
      open={open}
      labelledBy="palette-title"
      className="mt-[12vh] mb-auto w-[min(36rem,calc(100vw-2rem))]"
      onClose={() => {
        onOpenChange(false);
        setQuery('');
        setActive(0);
        const run = pending.current;
        pending.current = null;
        run?.();
      }}
    >
      <h2 id="palette-title" className="sr-only">
        Command palette
      </h2>
      <div className="flex items-center gap-3 border-b border-line px-4">
        <SearchIcon className="h-4 w-4 shrink-0 text-muted" />
        <input
          autoFocus
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={filtered[active] ? `opt-${filtered[active].id}` : undefined}
          aria-autocomplete="list"
          aria-label="Search sections, projects, and actions"
          placeholder="Search projects, experience, actions…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          className="h-12 w-full bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none"
        />
        <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">esc</kbd>
      </div>

      <ul id="palette-list" role="listbox" aria-label="Results" className="max-h-[min(24rem,60vh)] overflow-y-auto p-2">
        {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">No matches</li>}
        {filtered.map((item, i) => {
          const header = item.group !== lastGroup ? item.group : null;
          lastGroup = item.group;
          return (
            <li key={item.id} role="presentation">
              {header && (
                <p role="presentation" className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {header}
                </p>
              )}
              <div
                id={`opt-${item.id}`}
                role="option"
                aria-selected={i === active}
                onMouseMove={() => setActive(i)}
                onClick={() => select(item)}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm ${
                  i === active ? 'bg-surface-2 text-fg' : 'text-fg/85'
                }`}
              >
                <span className="truncate">{item.label}</span>
                {item.hint && <span className="shrink-0 truncate font-mono text-[11px] text-muted">{item.hint}</span>}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between border-t border-line px-4 py-2 font-mono text-[10px] text-muted">
        <span>↑↓ navigate · ↵ select</span>
        <span role="status" aria-live="polite" className="text-accent">
          {toast}
        </span>
      </div>
    </Dialog>
  );
}
