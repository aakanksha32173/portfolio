const Achievements = () => (
  <section
    id="achievements"
    className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-150 to-blue-100 text-gray-900 py-16 px-8"
  >
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
      Hackathons & Awards
    </h2>

    <div className="relative max-w-6xl mx-auto">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-500"></div>

      <div className="space-y-16">
        {/* Achievement 1: Graduate Research Award (Left) */}
        <div className="md:flex md:justify-between relative items-start">
          <div className="md:w-1/2 md:pr-8 md:text-right">
            <div className="inline-block bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all relative text-left">
              <span className="absolute -left-14 top-8 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white text-3xl shadow-md">
                🎓
              </span>
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Graduate Research Award</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Received a Graduate Research Award to support my ongoing work on <span className="font-semibold">high-performance networking using eBPF and XDP</span>, enabling efficient network telemetry and monitoring research.
              </p>
              <span className="text-sm text-gray-500 block">Institution: Purdue University Northwest</span>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>

        {/* Achievement 2: IEEE MASS 2025 (Right) */}
        <div className="md:flex md:justify-between relative items-start">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2 md:pl-8">
            <div className="inline-block bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all relative text-left">
              <span className="absolute -right-14 top-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow-md">
                📄
              </span>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                IEEE MASS 2025 – Paper Accepted
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Research paper titled <span className="font-semibold">"Quantum-Enhanced Clustering for Intrusion Detection System in IoT Devices"</span> accepted at IEEE MASS 2025, focusing on innovative clustering techniques for IoT security.
              </p>
              <span className="text-sm text-gray-500 block">Role: Author / Researcher</span>
            </div>
          </div>
        </div>

        {/* Achievement 3: Smart India Hackathon (Left) */}
        <div className="md:flex md:justify-between relative items-start">
          <div className="md:w-1/2 md:pr-8 md:text-right">
            <div className="inline-block bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all relative text-left">
              <span className="absolute -left-14 top-8 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-md">
                🏆
              </span>
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                Smart India Hackathon – Finalist (Twice)
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Achieved finalist positions at the national-level Smart India Hackathon twice, developing innovative solutions in academic and technical domains.
              </p>
              <span className="text-sm text-gray-500 block">Role: Team Member / Developer</span>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
