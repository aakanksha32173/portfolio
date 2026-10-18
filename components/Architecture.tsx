import type { Project, Stage } from '../data/portfolio';

function StageBox({ stage, index }: { stage: Stage; index?: number }) {
  const planned = index === undefined;
  return (
    <div className={`h-full rounded-lg border p-3 ${planned ? 'border-dashed border-line' : 'border-line bg-surface-2'}`}>
      <p className="font-mono text-[11px] text-accent">{planned ? 'planned' : String(index + 1).padStart(2, '0')}</p>
      <p className="mt-1 text-sm font-medium text-fg">{stage.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{stage.detail}</p>
    </div>
  );
}

export default function Architecture({ arch }: { arch: NonNullable<Project['architecture']> }) {
  return (
    <figure>
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label={`${arch.caption}, in order`}>
        {arch.stages.map((s, i) => (
          <li key={s.label}>
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
        {arch.caption}, in order{arch.planned ? '. Dashed boxes are planned work.' : '.'}
      </figcaption>
    </figure>
  );
}
