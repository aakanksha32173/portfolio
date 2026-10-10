import { otherProjects, projects, type Project as ProjectData, type Stage } from '../data/portfolio';
import { ArrowIcon, Badge, Section, TagList } from './ui';

function StageBox({ stage, index }: { stage: Stage; index?: number }) {
  return (
    <div
      className={`rounded-lg border p-3 ${stage.planned ? 'border-dashed border-line bg-transparent' : 'border-line bg-surface-2'}`}
    >
      <p className="font-mono text-[11px] text-accent">
        {index !== undefined ? String(index + 1).padStart(2, '0') : 'planned'}
      </p>
      <p className="mt-1 text-sm font-medium text-fg">{stage.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{stage.detail}</p>
    </div>
  );
}

function Architecture({ arch }: { arch: NonNullable<ProjectData['architecture']> }) {
  return (
    <figure className="mt-5">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label={`${arch.caption}, in order`}>
        {arch.stages.map((s, i) => (
          <li key={s.label} className="relative">
            <StageBox stage={s} index={i} />
          </li>
        ))}
      </ol>
      {arch.planned && (
        <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="Planned, not yet deployed">
          {arch.planned.map((s) => (
            <li key={s.label}>
              <StageBox stage={s} />
            </li>
          ))}
        </ul>
      )}
      <figcaption className="mt-2 font-mono text-[11px] text-muted">
        {arch.caption}: data flows left to right, top to bottom{arch.planned ? '. Dashed boxes are planned work.' : '.'}
      </figcaption>
    </figure>
  );
}

function ProjectCard({ p, featured }: { p: ProjectData; featured: boolean }) {
  const hasCaseStudy = Boolean(p.details?.length || p.architecture || p.notes?.length);
  return (
    <article
      id={p.id}
      className={`flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 md:p-7 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{p.category}</p>
        {p.status && <Badge tone={p.status.startsWith('Active') ? 'warn' : 'accent'}>{p.status}</Badge>}
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">{p.title}</h3>
      <p className="mt-2 text-fg/80">{p.overview}</p>

      <ul className={`mt-4 grid gap-2 text-sm text-fg/80 ${featured ? 'md:grid-cols-2' : ''}`}>
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2.5">
            <span className="mt-[3px] font-mono text-xs text-accent" aria-hidden="true">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {hasCaseStudy && (
        <details className="mt-4">
          <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline">
            <span className="chevron transition-transform" aria-hidden="true">›</span>
            Technical case study
          </summary>
          {p.architecture && <Architecture arch={p.architecture} />}
          {p.details && (
            <ul className="mt-4 space-y-1.5 text-sm text-fg/80">
              {p.details.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          )}
          {p.notes?.map((n) => (
            <p key={n} className="mt-4 rounded-md border border-accent/25 bg-accent/5 px-3 py-2 text-xs text-fg/80">
              {n}
            </p>
          ))}
        </details>
      )}

      <div className="mt-auto pt-5">
        <TagList items={p.tech} label={`${p.title} technologies`} />
        {p.links && (
          <div className="mt-4 flex flex-wrap gap-4">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-accent"
              >
                {l.label} <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

const Project = () => (
  <Section
    id="projects"
    eyebrow="03 / Projects"
    title="Featured projects"
    intro="Selected work across kernel-level security, backend automation, simulation, and applied AI. Open a case study for architecture and implementation detail."
  >
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} p={p} featured={i < 2} />
      ))}
    </div>

    <h3 className="mt-20 font-mono text-xs uppercase tracking-widest text-muted">Earlier projects</h3>
    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((p) => (
        <li key={p.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
          <p className="font-medium text-fg">{p.title}</p>
          <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
          <div className="mt-4">
            <TagList items={p.tech} label={`${p.title} technologies`} />
          </div>
          {p.link && (
            <a
              href={p.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-accent"
            >
              {p.link.label} <ArrowIcon className="h-3.5 w-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  </Section>
);

export default Project;
