import { links } from '../data/portfolio';

// Shared imperative actions used by the command palette, terminal, and contact card.

export function goToSection(id: string, push: (href: string) => void) {
  const el = document.getElementById(id);
  if (el) {
    history.replaceState(null, '', `#${id}`);
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  } else {
    push(`/#${id}`);
  }
}

export function downloadResume() {
  const a = document.createElement('a');
  a.href = links.resume;
  a.download = links.resumeFileName;
  a.click();
}

export function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export const openExperience = (id: string) => window.dispatchEvent(new CustomEvent('experience:open', { detail: id }));
