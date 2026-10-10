import { education, highlights, profile } from '../data/portfolio';
import { ArrowIcon, Section } from './ui';

const About = () => (
  <Section id="about" eyebrow="01 / About" title="Systems depth, applied to real problems">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-8">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Currently</h3>
          <ul className="mt-3 space-y-2">
            {profile.currently.map((c) => (
              <li key={c} className="flex gap-3 text-fg/90">
                <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Interests</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.interests.map((i) => (
              <li key={i} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg/85">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Education</h3>
          <ul className="mt-3 space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="rounded-xl border border-line bg-surface p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-semibold text-fg">{e.degree}</p>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {e.school} · {e.location}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-fg/80">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Engineering highlights</h3>
        <ol className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {highlights.map((h, i) => (
            <li key={h.title}>
              <a href={h.href} className="group flex gap-4 p-5 transition-colors hover:bg-surface-2">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-1">
                  <span className="flex items-center justify-between gap-2 font-medium text-fg">
                    {h.title}
                    <ArrowIcon className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-1 block text-sm text-muted">{h.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);

export default About;
