import { awards, leadership } from '../data/portfolio';
import { Section, TagList } from './ui';

const Leadership = () => (
  <Section id="leadership" eyebrow="07 / Leadership" title="Leadership & awards">
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Leadership</h3>
        <ul className="mt-4 space-y-4">
          {leadership.map((l) => (
            <li key={l.role + l.org} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-lg font-semibold text-fg">{l.role}</p>
                {l.period && <p className="font-mono text-xs text-muted">{l.period}</p>}
              </div>
              <p className="text-sm text-muted">{l.org}</p>
              <p className="mt-3 text-sm text-fg/80">{l.description}</p>
              {l.highlights && (
                <div className="mt-4">
                  <TagList items={l.highlights} label={`${l.role} focus areas`} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Awards & hackathons</h3>
        <ul className="mt-4 space-y-4">
          {awards.map((a) => (
            <li key={a.title} className="rounded-xl border border-line bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-lg font-semibold text-fg">{a.title}</p>
                {a.date && <p className="font-mono text-xs text-muted">{a.date}</p>}
              </div>
              <p className="text-sm text-muted">{a.org}</p>
              <p className="mt-3 text-sm text-fg/80">{a.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Leadership;
