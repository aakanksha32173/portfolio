const Project = () => (
  <section
    id="projects"
    className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 text-gray-900 py-16 px-8"
  >
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      
      {/* Project 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-bold text-indigo-600 mb-3">
          Kernel Pattern Matching
        </h3>
        <p className="text-gray-700 mb-4">
          Implemented in-kernel pattern matching at the XDP level for detecting malicious payloads in network packets.
          Real-time alerts ensured low-latency security enforcement.
        </p>
        <span className="text-sm text-gray-500">Tech: C, eBPF, XDP, Linux</span>
      </div>

      {/* Project 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-bold text-pink-600 mb-3">
          Student Feedback System
        </h3>
        <p className="text-gray-700 mb-4">
          Built an anonymous feedback system with advanced analytics for better faculty decision-making.
         <br /><br />  Semester Feedback: 
          <a 
            href="https://student.ietdavv.edu.in/feedback" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-amber-400 ml-1"
          >
            Feedback Form
          </a>
        </p>
        <span className="text-sm text-gray-500">Tech: React, Node.js, MongoDB</span>
      </div>

      {/* Project 3 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-bold text-blue-600 mb-3">
          Basketball Player Detection
        </h3>
        <p className="text-gray-700 mb-4">
          Developed a computer vision model using <span className="font-semibold">YOLOv8</span> to detect basketball players in real time.
        </p>
        <span className="text-sm text-gray-500">Tech: Python, OpenCV, YOLOv8</span>
      </div>

      {/* Project 4 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-bold text-green-600 mb-3">
          Smart Home Controller
        </h3>
        <p className="text-gray-700 mb-4">
          Designed a system for controlling home appliances remotely using MVC architecture, 
          featuring a Java Swing-based frontend for intuitive user interaction.
        </p>
        <span className="text-sm text-gray-500">Tech: Java (Swing), MVC</span>
      </div>

      {/* Project 5: Student Portal */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h3 className="text-2xl font-bold text-purple-600 mb-3">
          Student Portal – IET DAVV
        </h3>
        <p className="text-gray-700 mb-4">
          Developed a web-based student portal for IET DAVV, enabling streamlined access to academic resources, personalized dashboards, and real-time updates on notices and feedback.
          <br /><br />
          Access the portal here: 
          <a 
            href="https://student.ietdavv.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-amber-400 ml-1"
          >
            Student Portal
          </a>
          <br />
          
        </p>
        <span className="text-sm text-gray-500">Tech: React, Node.js, MongoDB, UI/UX Design</span>
      </div>
    </div>
  </section>
);

export default Project;
