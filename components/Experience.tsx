import { experience } from '../data/portfolio';
import { Badge, Section, TagList } from './ui';

const VISIBLE = 4;

const Experience = () => (
  <Section id="experience" eyebrow="02 / Experience" title="Experience">
    <ol className="relative space-y-6 border-l border-line pl-6 md:pl-10">
      {experience.map((job) => {
        const shown = job.highlights.slice(0, VISIBLE);
        const more = job.highlights.slice(VISIBLE);
        return (
          <li key={`${job.role}-${job.org}`} className="relative">
            <span
              className="absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg md:-left-[45px]"
              aria-hidden="true"
            />
            <article className="rounded-xl border border-line bg-surface p-6 md:p-8">
              <header className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-fg md:text-xl">{job.role}</h3>
                  <p className="text-muted">
                    {job.org}
                    {job.unit && <span className="block text-sm">{job.unit}</span>}
                  </p>
                </div>
                {job.period && <p className="shrink-0 font-mono text-xs text-muted md:pt-1.5">{job.period}</p>}
              </header>

              {(job.project || job.status) && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {job.project && <p className="text-sm font-medium text-sky-300">{job.project}</p>}
                  {job.status && <Badge tone="warn">{job.status}</Badge>}
                </div>
              )}
              {job.summary && <p className="mt-3 text-fg/85">{job.summary}</p>}

              <ul className="mt-4 space-y-2 text-sm text-fg/80 md:text-[15px]">
                {shown.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              {(more.length > 0 || job.planned) && (
                <details className="group mt-3">
                  <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded text-sm font-medium text-accent hover:underline">
                    <span className="chevron transition-transform" aria-hidden="true">›</span>
                    Show more details
                  </summary>
                  <ul className="mt-3 space-y-2 text-sm text-fg/80 md:text-[15px]">
                    {more.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                    {job.planned?.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="shrink-0">
                          <Badge>Planned</Badge>
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="mt-5">
                <TagList items={job.tech} label={`Technologies used as ${job.role}`} />
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  </Section>
);

export default Experience;
