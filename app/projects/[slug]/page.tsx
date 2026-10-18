import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Architecture from '../../../components/Architecture';
import ProjectPreview from '../../../components/ProjectPreview';
import { ArrowIcon, Badge, TagList } from '../../../components/ui';
import { projectHref, projects } from '../../../data/portfolio';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.overview, openGraph: { title: p.title, description: p.overview } } : {};
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[15px] leading-relaxed text-fg/85">
      {items.map((d) => (
        <li key={d} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
          {d}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 pb-16 pt-20 sm:px-6 md:pt-24">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
        <ArrowIcon className="h-3.5 w-3.5 rotate-180" /> All projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={p.status.includes('ongoing') ? 'warn' : 'default'}>{p.status}</Badge>
          <span className="font-mono text-xs text-muted">
            {p.period} · {p.categories.join(' · ')}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{p.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{p.overview}</p>
        <div className="mt-4">
          <TagList items={p.tech} label="Technologies" />
        </div>
      </header>

      <div className="mt-8 h-32 sm:h-36">
        <ProjectPreview kind={p.preview} live />
      </div>

      <dl className="mt-6 grid gap-3 md:grid-cols-3">
        {(
          [
            ['Problem', p.problem],
            ['What I built', p.solution],
            ['Why it matters', p.impact],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="tile p-4">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{k}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-fg/90">{v}</dd>
          </div>
        ))}
      </dl>

      {p.architecture && (
        <Block title="Architecture">
          <Architecture arch={p.architecture} />
        </Block>
      )}

      <Block title="Implementation">
        <Bullets items={p.details} />
      </Block>

      {p.challenges && (
        <Block title="Challenges & open questions">
          <Bullets items={p.challenges} />
        </Block>
      )}

      {p.notes?.map((n) => (
        <p key={n} className="mt-8 rounded-lg border border-accent/25 bg-accent/5 px-4 py-3 text-sm text-fg/85">
          {n}
        </p>
      ))}

      <nav aria-label="More projects" className="mt-12 border-t border-line pt-6">
        <Link href={projectHref(next.slug)} className="group flex items-center justify-between gap-4 rounded-xl p-2 hover:bg-surface">
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">Next project</span>
            <span className="mt-1 block font-medium text-fg group-hover:text-accent">{next.title}</span>
          </span>
          <ArrowIcon className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      </nav>
    </main>
  );
}
