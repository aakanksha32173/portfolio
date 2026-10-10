'use client';
import { useState } from 'react';
import { navItems } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-fg hover:text-accent">
          aakanksha<span className="text-accent">.</span>trivedi
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg hover:bg-surface-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-line bg-bg px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-muted hover:bg-surface-2 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
