const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col items-center justify-center px-6 py-16 
               bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900"
  >
    <h2 className="text-4xl md:text-6xl font-bold mb-10 animate-fadeIn">
      About Me
    </h2>

    <div className="max-w-3xl text-center space-y-6 md:text-lg text-gray-900">
      <p>
        I’m Aakanksha Trivedi, a Computer Science graduate student at Purdue University Northwest, passionate about networking, kernel programming, and scalable systems.
      </p>

      <p>
        My experience spans high-performance networking with XDP and eBPF, research in distributed systems, and real-world projects focused on security and performance optimization.
      </p>

      <p>
        Beyond research, I enjoy solving complex problems, contributing to open-source tools, and exploring innovative solutions in system design and cybersecurity.
      </p>
    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {["XDP", "eBPF", "Kernel Programming", "Distributed Systems", "System Design", "Networking", "Cybersecurity"].map(skill => (
        <span 
          key={skill} 
          className="px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm font-medium text-gray-900 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default About;
