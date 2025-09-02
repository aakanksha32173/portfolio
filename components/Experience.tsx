const Experience = () => (
  <section
    id="experience"
    className="min-h-screen py-16 px-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 text-gray-900"
  >
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
      Experience
    </h2>

    <div className="space-y-10 max-w-6xl mx-auto">
      
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start hover:shadow-2xl transition">
        <div className="md:w-1/3">
          <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600">
            Teaching Assistant
          </h3>
          <p className="text-gray-700 mt-1 text-sm md:text-base">
            Purdue University Northwest | 08/2025 – Present
          </p>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 text-gray-700">
          Assisted students with Java programming, debugging, and algorithm concepts. Graded assignments and exams, prepared lab materials, and supported coursework execution.
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start hover:shadow-2xl transition">
        <div className="md:w-1/3">
          <h3 className="text-2xl md:text-3xl font-semibold text-pink-600">
            Research Assistant
          </h3>
          <p className="text-gray-700 mt-1 text-sm md:text-base">
            Purdue University | 06/2025 – 07/2025
          </p>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 text-gray-700">
          Set up research environment, ran initial experiments, and conducted literature review to define pre-thesis research problems.
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start hover:shadow-2xl transition">
        <div className="md:w-1/3">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">
            Research Intern
          </h3>
          <p className="text-gray-700 mt-1 text-sm md:text-base">
            Indian Institute of Technology (IIT) Indore | 05/2024 – 11/2024
          </p>
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 text-gray-700">
          Worked on high-performance kernel programming using XDP and eBPF. Implemented custom network filtering and optimized network performance.
        </div>
      </div>

    </div>
  </section>
);

export default Experience;
