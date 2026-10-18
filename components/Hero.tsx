import Image from 'next/image';
import Link from 'next/link';
import { links, profile, projectHref, stack } from '../data/portfolio';
import { FileIcon } from './ui';

function Avatar() {
  return (
    <div tabIndex={0} aria-label="Profile photo; hover or focus to flip" className="group perspective h-16 w-16 shrink-0 rounded-full sm:h-20 sm:w-20">
      <div className="transform-style-preserve-3d relative h-full w-full duration-700 group-hover:rotate-y-180 group-focus-visible:rotate-y-180 motion-reduce:duration-0">
        {['/profile1.jpg', '/profile2.jpg'].map((src, i) => (
          <div key={src} className={`backface-hidden absolute inset-0 overflow-hidden rounded-full border border-line ${i ? 'rotate-y-180' : ''}`}>
            <Image src={src} alt={i ? '' : profile.name} fill priority={!i} sizes="80px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Kernel → cloud: a map of where each project sits in the stack. The dot is decorative.
function StackVisual() {
  return (
    <div className="tile flex h-full flex-col p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Where my work sits</p>
      <div className="relative mt-4 flex flex-1 flex-col">
        <div className="absolute bottom-5 left-[7px] top-5 w-px bg-line" aria-hidden="true">
          <div className="vflow-run" aria-hidden="true">
            <span />
          </div>
        </div>
        <ol className="flex flex-1 flex-col justify-between gap-2">
          {stack.map((row, i) => (
            <li key={row.layer} className="relative flex items-start gap-4 pl-6">
              <span
                className={`absolute left-[3px] top-[7px] h-[9px] w-[9px] rounded-full border-2 bg-bg ${
                  i === stack.length - 1 ? 'border-accent' : 'border-muted/60'
                }`}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted">{row.layer}</p>
                <p className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
                  {row.items.map((it) => (
                    <Link key={it.slug} href={projectHref(it.slug)} className="text-[15px] font-medium text-fg underline-offset-4 hover:text-accent hover:underline">
                      {it.label}
                    </Link>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-20 sm:px-6 md:pt-24">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="tile relative min-w-0 overflow-hidden p-5 sm:p-8 lg:col-span-7">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="fade-up relative">
            <div className="flex items-center gap-4">
              <Avatar />
              <div>
                <h1 id="hero-heading" className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-1 font-mono text-xs text-accent sm:text-sm">{profile.identity}</p>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-2xl font-medium leading-tight tracking-tight text-fg sm:text-[2rem]">{profile.headline}</p>
            <p className="mt-4 max-w-xl text-muted">{profile.summary}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={links.resume}
                download={links.resumeFileName}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110"
              >
                <FileIcon className="h-4 w-4" /> Download resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-line bg-surface-2 px-4 py-2.5 text-sm font-medium text-fg transition hover:border-accent/60"
              >
                Get in touch
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-sm text-muted">
              <li>
                {profile.degree} · {profile.school}
              </li>
              <li>Graduating {profile.graduation}</li>
              <li className="inline-flex items-center gap-2 text-fg">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {profile.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <StackVisual />
        </div>
      </div>
    </section>
  );
}
