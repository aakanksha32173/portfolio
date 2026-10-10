import Image from 'next/image';
import { links, profile } from '../data/portfolio';
import { ArrowIcon, FileIcon, GitHubIcon, LinkedInIcon } from './ui';

const HeroSection = () => {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center gap-12 px-4 pb-16 pt-28 sm:px-6 md:flex-row md:justify-between md:gap-16">
        {/* Left Side: Text */}
        <div className="fade-up flex-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Available for full-time roles from Jan 2027
          </p>
          <h1 id="hero-heading" className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-accent">{profile.roles.join('  ·  ')}</p>
          <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-fg/90 md:text-3xl">{profile.tagline}</p>
          <div className="mt-6 max-w-xl space-y-3 text-muted">
            {profile.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110"
            >
              View Projects <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={links.resume}
              download="Aakanksha-Trivedi-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg transition hover:border-accent/60"
            >
              <FileIcon className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:text-accent"
            >
              Contact Me
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-2 text-muted hover:text-accent">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-2 text-muted hover:text-accent">
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Side: Flip Card (hover or keyboard focus to flip) */}
        <div className="flex flex-1 justify-center md:justify-end">
          <div
            tabIndex={0}
            aria-label="Profile photos of Aakanksha Trivedi. Hover or focus to flip."
            className="group perspective h-64 w-64 rounded-2xl sm:h-80 sm:w-80 md:h-96 md:w-96"
          >
            <div className="transform-style-preserve-3d relative h-full w-full duration-700 group-hover:rotate-y-180 group-focus-visible:rotate-y-180 motion-reduce:duration-0">
              <div className="backface-hidden absolute h-full w-full overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
                <Image
                  src="/profile1.jpg"
                  alt="Aakanksha Trivedi"
                  fill
                  priority
                  sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 256px"
                  className="object-cover"
                />
              </div>
              <div className="backface-hidden rotate-y-180 absolute h-full w-full overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
                <Image
                  src="/profile2.jpg"
                  alt="Aakanksha Trivedi"
                  fill
                  sizes="(min-width: 768px) 384px, (min-width: 640px) 320px, 256px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
