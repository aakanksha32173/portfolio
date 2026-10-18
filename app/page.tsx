import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Highlights />
      <Experience />
      <Projects />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-14 pt-4 sm:px-6 lg:grid-cols-12">
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
