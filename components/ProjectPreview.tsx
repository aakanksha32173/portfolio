'use client';
import type { PreviewKind } from '../data/portfolio';

type Node = { label: string; sub?: string[] };

// Schematic data flows. These illustrate architecture only; they are not live or recorded data.
const flows: Record<PreviewKind, Node[]> = {
  packets: [{ label: 'Modbus/TCP' }, { label: 'XDP parse' }, { label: 'ring buffer' }, { label: '1-s windows' }, { label: 'classifier' }],
  retrieval: [{ label: 'query' }, { label: 'agents', sub: ['FAISS retrieval', 'web search'] }, { label: 'Ollama LLM' }, { label: 'cited answer' }],
  events: [{ label: 'inputs', sub: ['Deepgram voice', 'Browserbase web'] }, { label: 'Redis' }, { label: 'incident board' }],
  twin: [{ label: 'CSV sim data' }, { label: 'thermal segmentation' }, { label: 'views', sub: ['2D slices', '3D volume'] }, { label: 'explore' }],
  sync: [{ label: 'MySQL' }, { label: 'n8n · EC2' }, { label: 'GraphQL API' }, { label: 'Shopify' }],
};

function Flow({ nodes }: { nodes: Node[] }) {
  return (
    <div className="relative flex h-full items-center justify-between gap-1 px-2 sm:gap-1.5 sm:px-3">
      <div className="absolute inset-x-6 top-1/2 h-px bg-line" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flow-run" style={{ animationDelay: `${-i * 1.07}s` }}>
            <span />
          </div>
        ))}
      </div>
      {nodes.map((n) => (
        <div key={n.label} className="relative z-10 flex flex-col items-center gap-1">
          {n.sub ? (
            n.sub.map((s) => (
              <span key={s} className="max-w-[4.75rem] rounded-md border border-line bg-surface px-1 py-1 text-center font-mono text-[9px] leading-tight text-fg/85 sm:max-w-none sm:whitespace-nowrap sm:px-1.5 sm:text-[10px]">
                {s}
              </span>
            ))
          ) : (
            <span className="max-w-[4.75rem] rounded-md border border-line bg-surface px-1 py-1 text-center font-mono text-[9px] leading-tight text-fg/85 sm:max-w-none sm:whitespace-nowrap sm:px-1.5 sm:text-[10px]">{n.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProjectPreview({ kind, live = false }: { kind: PreviewKind; live?: boolean }) {
  return (
    <div className={`relative h-full min-w-0 overflow-hidden rounded-xl border border-line bg-bg ${live ? 'flow-live' : ''}`}>
      <span className="absolute right-2 top-1.5 z-20 font-mono text-[9px] uppercase tracking-widest text-muted/70">schematic</span>
      <Flow nodes={flows[kind]} />
    </div>
  );
}
