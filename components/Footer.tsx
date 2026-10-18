import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p className="font-mono">
          Press <kbd className="rounded border border-line px-1">⌘K</kbd> / <kbd className="rounded border border-line px-1">Ctrl K</kbd> to jump
          anywhere
        </p>
      </div>
    </footer>
  );
}
