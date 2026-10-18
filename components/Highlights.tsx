import Link from 'next/link';
import { achievements } from '../data/portfolio';
import { ArrowIcon, Section } from './ui';

export default function Highlights() {
  return (
    <Section id="highlights" eyebrow="Highlights" title="Research, engineering, and leadership">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a) => {
          const external = a.href?.startsWith('http');
          return (
            <li key={a.title} className={`tile flex min-w-0 flex-col p-5 ${a.wide ? 'lg:col-span-2' : ''}`}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{a.kicker}</p>
              {a.stat && <p className="mt-2 font-mono text-3xl font-semibold text-accent">{a.stat}</p>}
              <p className={`font-semibold leading-snug text-fg ${a.stat ? 'mt-1' : 'mt-2'}`}>{a.title}</p>
              <p className="mt-1.5 text-sm text-muted">{a.detail}</p>
              {a.href && (
                <Link
                  href={a.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-sky-300 hover:text-accent"
                >
                  {a.linkLabel}
                  <ArrowIcon className="h-3.5 w-3.5" />
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
