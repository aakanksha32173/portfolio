'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 right-4 z-50 p-3 bg-white/20 backdrop-blur-md border border-none shadow-sm">
      <ul className="flex flex-row gap-6 text-blue-600 text-sm drop-shadow-md">
        <li>
          <a href="#hero" className="hover:text-amber-400 transition-colors duration-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-amber-400 transition-colors duration-300">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-amber-400 transition-colors duration-300">Projects</a>
        </li>
        <li>
          <a href="#achievements" className="hover:text-amber-400 transition-colors duration-300">Achievements</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-amber-400 transition-colors duration-300">Experience</a>
        </li>
        <li>
          <a href="#footer" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
