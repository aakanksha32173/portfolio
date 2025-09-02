import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import ProjectsSection from '../components/Project';
import ExperienceSection from '../components/Experience';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';
import Acheivements from '../components/Acheivements'
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-blue-100 text-gray-900">
        <section
          id="hero"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <HeroSection />
        </section>
        <section
          id="about"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <AboutSection />
        </section>
        <section
          id="about"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <ExperienceSection />
        </section>
        <section
          id="experience"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <ProjectsSection />
        </section>
        <section
          id="projects"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          <Acheivements />
        </section>
        <section
          id="acheivememts"
          className="snap-start min-h-screen flex items-center justify-center"
        >
          
          <FooterSection />
        </section>
        <section
          id="footer"
          
        ></section>
      </main>
    </>
  );
}
