import { skills } from '../data/portfolio';
import { Section } from './ui';

const Skills = () => (
  <Section id="skills" eyebrow="06 / Skills" title="Technical skills">
    <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <div key={group.category} className="bg-surface p-6">
          <dt className="font-mono text-xs uppercase tracking-widest text-accent">{group.category}</dt>
          <dd className="mt-3 text-sm leading-7 text-fg/85">{group.items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
