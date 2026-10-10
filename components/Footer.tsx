import { links, profile } from '../data/portfolio';
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from './ui';

const contactLinks = [
  { label: 'Email', value: links.email, href: `mailto:${links.email}`, Icon: MailIcon, external: false },
  { label: 'University email', value: links.universityEmail, href: `mailto:${links.universityEmail}`, Icon: MailIcon, external: false },
  { label: 'LinkedIn', value: 'aakanksha-trivedi', href: links.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: 'aakanksha32173', href: links.github, Icon: GitHubIcon, external: true },
  { label: 'Resume', value: 'Download PDF', href: links.resume, Icon: FileIcon, external: false, download: true },
];

const Footer = () => {
  return (
    <>
      <section id="contact" aria-labelledby="contact-heading" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="rounded-2xl border border-line bg-surface p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">08 / Contact</p>
          <h2 id="contact-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Let&apos;s build something reliable.
          </h2>
          <p className="mt-4 max-w-2xl text-fg/80">{profile.availability}</p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map(({ label, value, href, Icon, external, download }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(download ? { download: 'Aakanksha-Trivedi-Resume.pdf' } : {})}
                  className="group flex items-center gap-3 rounded-lg border border-line bg-surface-2 p-4 transition-colors hover:border-accent/50"
                >
                  <Icon className="h-5 w-5 shrink-0 text-muted group-hover:text-accent" />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium text-fg">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
