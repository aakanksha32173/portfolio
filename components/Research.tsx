import { profile, publications, thesis } from '../data/portfolio';
import { Badge, Section } from './ui';

export const Research = () => (
  <Section id="research" eyebrow="04 / Research" title="Current research">
    <article className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="warn">{thesis.status}</Badge>
        <p className="font-mono text-xs text-muted">
          {thesis.type} · {thesis.year}
        </p>
      </div>
      <h3 className="mt-4 max-w-3xl text-xl font-semibold tracking-tight text-fg md:text-2xl">{thesis.title}</h3>
      <p className="mt-3 max-w-3xl text-fg/80">{thesis.summary}</p>
      <ul aria-label="Research themes" className="mt-6 flex flex-wrap gap-2">
        {thesis.themes.map((t) => (
          <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-fg/85">
            {t}
          </li>
        ))}
      </ul>
      <a href="#project-ics-ids" className="mt-6 inline-block text-sm font-medium text-sky-300 hover:text-accent">
        See the research pipeline →
      </a>
    </article>
  </Section>
);

export const Publications = () => (
  <Section id="publications" eyebrow="05 / Publications" title="Publications">
    <ol className="space-y-4">
      {publications.map((p) => (
        <li key={p.title} className="rounded-xl border border-line bg-surface p-6 md:p-8">
          <p className="font-mono text-xs text-accent">{p.date}</p>
          <h3 className="mt-2 text-lg font-semibold text-fg">
            {p.url ? (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {p.title}
              </a>
            ) : (
              p.title
            )}
          </h3>
          {p.authors && (
            <p className="mt-1 text-sm text-muted">
              {p.authors.split(profile.name).flatMap((part, i) =>
                i === 0 ? [part] : [<strong key={i} className="font-semibold text-fg">{profile.name}</strong>, part],
              )}
            </p>
          )}
          <p className="mt-1 text-sm italic text-muted">{p.venue}</p>
          {p.doi && (
            <p className="mt-2 font-mono text-xs text-muted">
              DOI:{' '}
              <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-accent">
                {p.doi}
              </a>
            </p>
          )}
        </li>
      ))}
    </ol>
  </Section>
);
