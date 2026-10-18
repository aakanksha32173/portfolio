'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { links, sections } from '../data/portfolio';
import { CloseIcon, GitHubIcon, LinkedInIcon, SearchIcon, TerminalIcon } from './ui';

// Loaded on first use only.
const CommandPalette = dynamic(() => import('./CommandPalette'), { ssr: false });
const Terminal = dynamic(() => import('./Terminal'), { ssr: false });

export const openPalette = () => window.dispatchEvent(new Event('palette:open'));
export const openTerminal = () => window.dispatchEvent(new Event('terminal:open'));

const iconBase = 'h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg';
const iconBtn = `inline-flex ${iconBase}`;

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [palette, setPalette] = useState({ loaded: false, open: false });
  const [terminal, setTerminal] = useState({ loaded: false, open: false });
  const [mod, setMod] = useState('⌘');

  useEffect(() => {
    if (!/Mac|iPhone|iPad/i.test(navigator.userAgent)) setMod('Ctrl ');
    const showPalette = () => setPalette({ loaded: true, open: true });
    const showTerminal = () => setTerminal({ loaded: true, open: true });
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((p) => ({ loaded: true, open: !p.open }));
      }
    };
    window.addEventListener('palette:open', showPalette);
    window.addEventListener('terminal:open', showTerminal);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('palette:open', showPalette);
      window.removeEventListener('terminal:open', showTerminal);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:px-6">
        <Link href="/#top" className="mr-auto font-mono text-sm font-semibold tracking-tight text-fg hover:text-accent">
          aakanksha<span className="text-accent">.</span>trivedi
        </Link>

        <ul className="mr-2 hidden items-center gap-5 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`/#${s.id}`} className="text-sm text-muted transition-colors hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={openPalette}
          aria-label="Search and navigate (command palette)"
          aria-keyshortcuts="Meta+K Control+K"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg sm:px-3"
        >
          <SearchIcon className="h-4 w-4" />
          <kbd className="hidden font-mono text-[11px] sm:inline" suppressHydrationWarning>
            {mod}K
          </kbd>
        </button>
        <button type="button" onClick={openTerminal} aria-label="Open developer terminal" className={`hidden sm:inline-flex ${iconBase}`}>
          <TerminalIcon className="h-[18px] w-[18px]" />
        </button>
        <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className={iconBtn}>
          <GitHubIcon className="h-[18px] w-[18px]" />
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className={iconBtn}>
          <LinkedInIcon className="h-[18px] w-[18px]" />
        </a>
        <button
          type="button"
          className={`inline-flex md:hidden ${iconBase}`}
          aria-expanded={menu}
          aria-controls="mobile-nav"
          aria-label={menu ? 'Close menu' : 'Open menu'}
          onClick={() => setMenu((m) => !m)}
        >
          {menu ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menu && (
        <ul id="mobile-nav" className="grid grid-cols-2 gap-1 border-t border-line bg-bg px-4 py-3 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`/#${s.id}`} onClick={() => setMenu(false)} className="block rounded-md px-3 py-3 text-muted hover:bg-surface-2 hover:text-fg">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setMenu(false);
                openTerminal();
              }}
              className="w-full rounded-md px-3 py-3 text-left text-muted hover:bg-surface-2 hover:text-fg"
            >
              Terminal
            </button>
          </li>
        </ul>
      )}

      {palette.loaded && <CommandPalette open={palette.open} onOpenChange={(open) => setPalette({ loaded: true, open })} />}
      {terminal.loaded && <Terminal open={terminal.open} onOpenChange={(open) => setTerminal({ loaded: true, open })} />}
    </header>
  );
}
