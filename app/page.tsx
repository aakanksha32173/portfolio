import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import ProjectsSection from '../components/Project';
import ExperienceSection from '../components/Experience';
import { Publications, Research } from '../components/Research';
import SkillsSection from '../components/Skills';
import LeadershipSection from '../components/Leadership';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <Research />
        <Publications />
        <SkillsSection />
        <LeadershipSection />
      </main>
      <FooterSection />
    </>
  );
}
