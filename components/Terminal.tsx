'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import {
  achievements,
  education,
  experience,
  links,
  profile,
  projectHref,
  projects,
  publications,
  skills,
  thesis,
} from '../data/portfolio';
import { downloadResume } from './actions';
import Dialog from './Dialog';
import { CloseIcon } from './ui';

type Line = { kind: 'in' | 'out' | 'err'; text: string };

const HELP: [string, string][] = [
  ['about', 'who I am, in four lines'],
  ['experience', 'roles and dates'],
  ['projects', 'project list'],
  ['open <project>', 'open a project case study'],
  ['research', 'thesis and publication'],
  ['highlights', 'notable achievements'],
  ['skills', 'skills by category'],
  ['education', 'degrees'],
  ['contact', 'how to reach me'],
  ['resume', 'download my resume (PDF)'],
  ['clear', 'clear the screen'],
  ['exit', 'close the terminal'],
];
const COMMANDS = HELP.map(([c]) => c.split(' ')[0]);

const intro: Line[] = [{ kind: 'out', text: `Welcome. Type 'help' to see available commands.` }];

function respond(cmd: string, arg: string): string[] | 'clear' | 'exit' | { open: string } | { resume: true } {
  switch (cmd) {
    case 'help':
      return HELP.map(([c, d]) => `${c.padEnd(16)} ${d}`);
    case 'about':
      return [
        `${profile.name}: ${profile.identity}`,
        profile.summary,
        `${profile.degree}, ${profile.school}, graduating ${profile.graduation}`,
        profile.availabilityLong,
      ];
    case 'experience':
      return experience.flatMap((g) => g.roles.map((r) => `${r.period.padEnd(22)} ${r.role}, ${r.org}`));
    case 'projects':
      return [
        ...projects.map((p) => `${p.slug.padEnd(30)} ${p.title}`),
        '',
        `Type 'open <name>' (e.g. 'open ${projects[0].slug}') to read a case study.`,
      ];
    case 'open': {
      if (!arg) return ['usage: open <project>   (see: projects)'];
      const p = projects.find((x) => x.slug === arg) ?? projects.find((x) => x.slug.includes(arg) || x.title.toLowerCase().includes(arg));
      return p ? { open: p.slug } : [`open: no project matching '${arg}'`];
    }
    case 'research':
      return [
        `Thesis (${thesis.status.toLowerCase()}): ${thesis.title}`,
        '',
        ...publications.flatMap((p) => [`Published: ${p.title}`, `  ${p.authors}`, `  ${p.venue}`, `  DOI ${p.doi}`]),
      ];
    case 'highlights':
      return achievements.map((a) => `• ${a.stat ? `${a.stat} ` : ''}${a.title}`);
    case 'skills':
      return skills.map((s) => `${(s.label + ':').padEnd(20)} ${[...s.core, ...s.more].join(', ')}`);
    case 'education':
      return education.map((e) => `${e.degree}, ${e.school} (${e.period}), ${e.detail}`);
    case 'contact':
      return [
        `email       ${links.email}`,
        `university  ${links.universityEmail}`,
        `github      ${links.github}`,
        `linkedin    ${links.linkedin}`,
      ];
    case 'resume':
      return { resume: true };
    case 'clear':
      return 'clear';
    case 'exit':
    case 'quit':
      return 'exit';
    case '':
      return [];
    default:
      return [`command not found: ${cmd}. Try 'help'.`];
  }
}

export default function Terminal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>(intro);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const scroller = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const pending = useRef<(() => void) | null>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [lines]);

  const close = (after?: () => void) => {
    pending.current = after ?? null;
    onOpenChange(false);
  };

  const run = (raw: string) => {
    const [cmd = '', ...rest] = raw.trim().toLowerCase().split(/\s+/);
    const out = respond(cmd, rest.join(' '));
    const echo: Line = { kind: 'in', text: raw };
    if (raw.trim()) setHistory((h) => [...h, raw.trim()]);
    setCursor(-1);
    if (out === 'clear') return setLines([]);
    if (out === 'exit') return close();
    if ('open' in out) {
      setLines((l) => [...l, echo, { kind: 'out', text: `Opening ${out.open}…` }]);
      return close(() => router.push(projectHref(out.open)));
    }
    if ('resume' in out) {
      downloadResume();
      return setLines((l) => [...l, echo, { kind: 'out', text: `Downloading ${links.resumeFileName}…` }]);
    }
    const isErr = out.length === 1 && /not found|no project/.test(out[0]);
    setLines((l) => [...l, echo, ...out.map((text) => ({ kind: isErr ? ('err' as const) : ('out' as const), text }))]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(value);
      setValue('');
    } else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault();
      const next = cursor === -1 ? history.length - 1 : Math.max(cursor - 1, 0);
      setCursor(next);
      setValue(history[next]);
    } else if (e.key === 'ArrowDown' && cursor !== -1) {
      e.preventDefault();
      const next = cursor + 1;
      setCursor(next >= history.length ? -1 : next);
      setValue(next >= history.length ? '' : history[next]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const v = value.trimStart().toLowerCase();
      const pool = v.startsWith('open ') ? projects.map((p) => `open ${p.slug}`) : COMMANDS;
      const matches = pool.filter((c) => c.startsWith(v));
      if (matches.length === 1) setValue(matches[0] + (v.startsWith('open ') ? '' : ' '));
      else if (matches.length > 1) setLines((l) => [...l, { kind: 'in', text: value }, { kind: 'out', text: matches.join('   ') }]);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <Dialog
      open={open}
      labelledBy="terminal-title"
      className="w-[min(44rem,calc(100vw-2rem))]"
      onClose={() => {
        onOpenChange(false);
        const after = pending.current;
        pending.current = null;
        after?.();
      }}
    >
      <div className="flex items-center justify-between border-b border-line bg-surface-2 px-4 py-2">
        <h2 id="terminal-title" className="font-mono text-xs text-muted">
          guest@aakanksha: ~
        </h2>
        <button
          type="button"
          onClick={() => close()}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-muted hover:bg-bg hover:text-fg"
        >
          <CloseIcon className="h-3.5 w-3.5" /> exit
        </button>
      </div>
      <div
        ref={scroller}
        onClick={() => input.current?.focus()}
        className="h-[min(26rem,60vh)] overflow-y-auto bg-bg p-4 font-mono text-[13px] leading-relaxed"
      >
        <div role="log" aria-live="polite" aria-label="Terminal output">
          {lines.map((l, i) => (
            <p
              key={i}
              className={`whitespace-pre-wrap break-words ${l.kind === 'in' ? 'text-fg' : l.kind === 'err' ? 'text-red-300' : 'text-muted'}`}
            >
              {l.kind === 'in' && <span className="text-accent">$ </span>}
              {l.text || ' '}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent" aria-hidden="true">
            $
          </span>
          <input
            ref={input}
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="flex-1 bg-transparent text-fg caret-accent focus:outline-none"
          />
        </div>
      </div>
      <p className="border-t border-line px-4 py-2 font-mono text-[10px] text-muted">help · tab to complete · ↑ history · esc to close</p>
    </Dialog>
  );
}
