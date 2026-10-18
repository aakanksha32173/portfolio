'use client';
import { useEffect, useRef, type ReactNode } from 'react';

// Native <dialog> modal: the browser handles Escape, inert background, and focus containment.
// We add backdrop-click dismissal and return focus to the opener.
export default function Dialog({
  open,
  onClose,
  labelledBy,
  className = '',
  children,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      opener.current = document.activeElement as HTMLElement | null;
      d.showModal();
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={() => {
        onClose();
        opener.current?.focus({ preventScroll: true });
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className={`max-h-[85vh] max-w-none overflow-hidden rounded-2xl border border-line bg-surface p-0 text-fg shadow-2xl shadow-black/60 ${className}`}
    >
      {open && children}
    </dialog>
  );
}
