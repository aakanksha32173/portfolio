// Single source of truth for portfolio content.
// Only verified details belong here — leave optional fields (dates, links) undefined rather than guessing.

export const profile = {
  name: 'Aakanksha Trivedi',
  roles: ['Software Engineer', 'AI/ML Engineer', 'Systems & Security Researcher'],
  tagline: 'Building intelligent systems, from the kernel to the cloud.',
  intro: [
    "I'm a Computer Science graduate student at Purdue University Northwest, working at the intersection of AI, systems engineering, and cybersecurity.",
    'My work spans kernel-level network security using eBPF/XDP, AI-powered applications, industrial automation, and GPU-accelerated digital twins.',
    'I enjoy translating complex technical problems into reliable, scalable, and practical software.',
  ],
  availability:
    'Open to full-time Software Engineering, AI/ML Engineering, Systems Engineering, and Security Engineering opportunities starting January 2027.',
  currently: [
    "Master's student in Computer Science, Purdue University Northwest (graduating December 2026)",
    'Student researcher, Purdue University Northwest',
    'Previously: Software Developer Intern, Beulah Inc. (Summer 2026)',
  ],
  interests: [
    'Artificial Intelligence & Machine Learning',
    'Operating Systems & Kernel Programming',
    'Network Security & Intrusion Detection',
    'Backend Engineering & Automation',
    'Cloud Infrastructure & Distributed Systems',
    'GPU-Accelerated Simulation & Digital Twins',
    'LLM Applications, RAG & AI Agents',
  ],
};

export const links = {
  email: 'aakankshatrivedi27@gmail.com',
  universityEmail: 'trived39@pnw.edu',
  github: 'https://github.com/aakanksha32173',
  linkedin: 'https://www.linkedin.com/in/aakanksha-trivedi/',
  resume: '/resume.pdf',
};

export type Highlight = { title: string; description: string; href: string };

export const highlights: Highlight[] = [
  {
    title: 'Kernel-level industrial network security',
    description: 'Protocol-aware Modbus/TCP inspection with eBPF/XDP for ML-based intrusion detection research.',
    href: '#project-ics-ids',
  },
  {
    title: 'Automated industrial e-commerce integration',
    description: 'n8n, MySQL and Shopify GraphQL pipelines syncing a legacy industrial catalog, deployed on AWS EC2.',
    href: '#project-shopify-sync',
  },
  {
    title: 'GPU-accelerated industrial digital twin',
    description: 'Unity-based visualization of steel casting simulation and thermal data.',
    href: '#project-digital-twin',
  },
  {
    title: 'Multi-agent RAG applications',
    description: 'Retrieval, web-search and generation agents with LangChain, FAISS, Ollama and a Streamlit UI.',
    href: '#project-rag',
  },
  {
    title: 'IEEE MASS 2025 publication',
    description: 'Quantum-enhanced clustering for intrusion detection in IoT devices.',
    href: '#publications',
  },
];

export type Experience = {
  role: string;
  org: string;
  unit?: string;
  period?: string;
  project?: string;
  summary?: string;
  highlights: string[];
  planned?: string[];
  status?: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: 'Software Developer Intern',
    org: 'Beulah Inc.',
    unit: 'Valparaiso, IN',
    period: 'May 2026 – Aug 2026',
    project: 'Automated Industrial Product Catalog Integration with Shopify',
    summary:
      'Designed and developed an automated e-commerce integration connecting a legacy industrial product catalog with Shopify.',
    highlights: [
      'Developed PHP/MySQL application features and Dockerized n8n workflows to automate catalog, file, and part-management operations.',
      'Integrated the Shopify GraphQL Admin API for product/variant updates, inventory mapping, metafields, staged image uploads, collections, and Shopify ID writeback.',
      'Implemented sync-state tracking, failure branches, error logging, rerun-safe processing, and SQL validation, and handled production debugging across legacy modules.',
      'Developed and deployed containerized automation infrastructure using Docker and AWS EC2.',
      'Integrated multiple product categories, including Types, Restrictors, and Accessories.',
      'Implemented catalog image synchronization for product diagrams, 3D representations, and fallback images.',
      'Developed synchronization logic for product identifiers, purchasing constraints, product revisions, and industrial product attributes.',
      'Worked on Shopify storefront configuration, product templates, navigation, and custom quote-request flows.',
    ],
    planned: ['Designed groundwork for Shopify order ingestion, webhook processing, and database synchronization (not yet deployed).'],
    tech: ['PHP', 'Python', 'JavaScript', 'SQL', 'MySQL', 'n8n', 'Shopify GraphQL', 'REST APIs', 'Docker', 'AWS EC2', 'Webhooks', 'Git'],
  },
  {
    role: 'Graduate Researcher: Network Security & eBPF',
    org: 'Purdue University Northwest',
    period: 'Aug 2026 – Present',
    project: 'Real-Time Industrial Network Intrusion Detection Using eBPF/XDP and Machine Learning',
    status: "Ongoing Master's thesis research",
    highlights: [
      'Designed a kernel-level network monitoring architecture using eBPF and XDP for Modbus/TCP traffic inspection.',
      'Developed protocol-aware packet inspection programs that parse industrial-control traffic directly in the Linux networking path.',
      'Built a libbpf ring-buffer collector and a Linux namespace/veth testbed for bidirectional packet collection.',
      'Built request–response correlation based on Modbus transaction identifiers, endpoints, and protocol fields.',
      'Extracting transaction IDs, function codes, register references, packet lengths, malformed/stacked frames, duplicate transactions, request-rate behavior, and response timing via XDP.',
      'Created CSV-based data collection workflows and one-second traffic aggregation windows for behavioral feature engineering.',
      'Throughput and latency benchmarking of the XDP pipeline.',
      'Conducted experiments on the CIC Modbus dataset, investigating false data injection, reconnaissance, flooding, malformed packets, replay behavior, and unusual transaction patterns.',
      'Evaluated ML-based anomaly detection and analyzed the limits of cross-environment generalization and sources of false positives.',
      'Investigating richer features, including Modbus response values and transaction-level behavioral features.',
    ],
    tech: ['C', 'Python', 'eBPF', 'XDP', 'libbpf', 'bpftool', 'Linux Kernel', 'Clang/LLVM', 'Modbus/TCP', 'Wireshark', 'tcpdump', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    role: 'Student Researcher: Industrial Digital Twin',
    org: 'Purdue University Northwest',
    unit: 'Center for Innovation through Visualization and Simulation (CIVS)',
    period: 'Jan 2026 – May 2026',
    project: 'GPU-Accelerated Steel Casting Digital Twin',
    highlights: [
      'Built a GPU-accelerated Unity digital twin visualizing real-time thermal behavior in continuous steel casting from dynamic, CSV-driven simulation data.',
      'Developed automated thermal segmentation and annotation using configurable temperature thresholds to identify critical casting regions.',
      'Implemented synchronized 2D/3D transverse, longitudinal, curved, and volumetric rendering pipelines with real-time data synchronization.',
      'Built interactive exploration of temperature distribution and process behavior in C#.',
      'Collaborated on research connecting scientific computing, simulation, and interactive visualization.',
    ],
    tech: ['Unity', 'C#', 'GPU Computing', '3D Visualization', 'Scientific Computing', 'Simulation'],
  },
  {
    role: 'Research and Teaching Assistant',
    org: 'Purdue University Northwest',
    period: 'Jun 2025 – May 2026',
    highlights: [
      'Co-authored and published IEEE MASS 2025 research on quantum-enhanced clustering for intrusion detection in IoT environments.',
      'Conducted literature reviews and comparative research across machine learning, cybersecurity, and quantum computing, standardizing reproducible research workflows.',
      'Mentored undergraduate Java labs: debugging code, teaching object-oriented programming, evaluating assignments, and providing code-review support.',
    ],
    tech: ['Java', 'Object-Oriented Programming', 'Code Review', 'Machine Learning', 'Research'],
  },
  {
    role: 'Research Intern',
    org: 'Indian Institute of Technology (IIT) Indore',
    period: 'May 2024 – Nov 2024',
    highlights: [
      'Developed a low-latency eBPF/XDP intrusion-detection system for real-time, protocol-aware packet inspection in the kernel.',
      'Architected a deep-packet inspection pipeline chaining 140+ eBPF programs with tail calls to stay within verifier instruction limits.',
      'Implemented HTTP/FTP/SSH payload-signature matching and Slowloris detection.',
      'Benchmarked XDP execution modes while minimizing kernel–user context switching.',
    ],
    tech: ['C', 'eBPF', 'XDP', 'Tail Calls', 'Linux'],
  },
];

export type Stage = { label: string; detail: string; planned?: boolean };

export type Project = {
  id: string;
  title: string;
  category: string;
  status?: string;
  overview: string;
  highlights: string[];
  details?: string[];
  architecture?: { caption: string; stages: Stage[]; planned?: Stage[] };
  notes?: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'project-ics-ids',
    title: 'Real-Time Industrial Intrusion Detection Using eBPF/XDP',
    category: 'Cybersecurity · Systems Programming · Machine Learning',
    status: 'Active research',
    overview:
      'Kernel-level industrial network monitoring and anomaly detection research combining eBPF/XDP, Modbus/TCP protocol analysis, and machine learning.',
    highlights: [
      'Protocol-aware Modbus/TCP parsing and packet structure validation at XDP',
      'Bidirectional inspection with request–response correlation by transaction ID',
      'Function-code, register-address, and response-latency feature collection',
      'One-second feature aggregation for behavioral anomaly detection',
    ],
    details: [
      'Linux network namespace testbed connected by virtual Ethernet pairs, with a libbpf ring-buffer collector.',
      'Throughput and latency benchmarking of the in-kernel pipeline.',
      'Experiments on the CIC Modbus dataset, including false data injection detection research.',
      'Random Forest evaluation with a focus on cross-environment generalization and false positives.',
    ],
    architecture: {
      caption: 'Research pipeline',
      stages: [
        { label: 'Testbed', detail: 'Modbus/TCP traffic across Linux network namespaces joined by veth pairs' },
        { label: 'XDP / eBPF', detail: 'In-kernel protocol-aware parsing and structure validation, both directions' },
        { label: 'Ring-buffer collector', detail: 'libbpf user-space collector; request–response matching by transaction ID and endpoints' },
        { label: 'Feature logs', detail: 'CSV records: function codes, registers, lengths, transaction IDs, malformed/stacked frames' },
        { label: '1-s windows', detail: 'Traffic aggregated into one-second behavioral feature windows' },
        { label: 'ML evaluation', detail: 'Random Forest on CIC Modbus; generalization and false-positive analysis' },
      ],
    },
    notes: ['Ongoing research: this is not a completed or production-ready IDS, and no final accuracy results are claimed.'],
    tech: ['C', 'eBPF', 'XDP', 'libbpf', 'Python', 'Linux', 'Scikit-learn', 'Modbus/TCP'],
  },
  {
    id: 'project-shopify-sync',
    title: 'Automated Industrial Catalog-to-Shopify Integration',
    category: 'Backend Engineering · Automation · E-commerce',
    status: 'Internship · Beulah Inc.',
    overview:
      'An automated synchronization platform integrating a legacy industrial product database with Shopify.',
    highlights: [
      'n8n workflow orchestration over a MySQL catalog database',
      'Product, variant, collection, and custom metafield sync via Shopify GraphQL',
      'Retry-safe design with database-tracked sync state and failure branches',
      'Containerized infrastructure on AWS EC2',
    ],
    details: [
      'Image and document handling, including product diagrams, 3D representations, and fallback images.',
      'Collection mapping across product categories (Types, Restrictors, Accessories).',
      'Error logging and dedicated failure branches in workflows.',
    ],
    architecture: {
      caption: 'Integration architecture',
      stages: [
        { label: 'MySQL catalog', detail: 'Legacy industrial product data and synchronization state' },
        { label: 'n8n workflows', detail: 'Dockerized on AWS EC2; transforms, retries, and failure branches' },
        { label: 'Shopify GraphQL', detail: 'Products, variants, metafields, collections, and images' },
        { label: 'Storefront', detail: 'Product templates, navigation, and quote-request flows' },
      ],
      planned: [
        { label: 'Order ingestion', detail: 'Shopify webhooks → order processing → database sync', planned: true },
      ],
    },
    notes: ['Order ingestion and webhook processing are designed but not deployed. Proprietary code and data are not shown.'],
    tech: ['n8n', 'MySQL', 'Shopify GraphQL', 'Docker', 'AWS EC2', 'JavaScript', 'SQL'],
  },
  {
    id: 'project-digital-twin',
    title: 'GPU-Accelerated Steel Casting Digital Twin',
    category: 'Simulation · Visualization · GPU Computing',
    status: 'Research · PNW CIVS · 2026',
    overview:
      'A GPU-accelerated Unity digital twin that visualizes real-time thermal behavior in continuous steel casting from dynamic simulation data.',
    highlights: [
      'Real-time visualization driven by dynamic CSV simulation data',
      'Automated thermal segmentation with configurable temperature thresholds',
      'Synchronized 2D/3D transverse, longitudinal, curved, and volumetric views',
      'GPU-accelerated rendering with interactive exploration',
    ],
    details: ['Annotation of critical casting regions to make thermal behavior easier to interpret for industrial research.'],
    tech: ['Unity', 'C#', 'GPU Computing', '3D Graphics', 'Scientific Visualization'],
  },
  {
    id: 'project-rag',
    title: 'Multi-Agent Research Assistant (RAG + LLM)',
    category: 'Generative AI · LLM Engineering',
    status: 'Mar 2026 – May 2026',
    overview:
      'A multi-agent RAG system that orchestrates specialized agents for document retrieval, web search, and LLM-based response generation across multiple sources.',
    highlights: [
      'Specialized agents for retrieval, web search, and response generation',
      'Embedding-based semantic retrieval with FAISS and LangChain',
      'Local model inference with Ollama and citation-aware answers',
      'Streamlit interface for document ingestion, vector indexing, and querying',
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'Ollama', 'Streamlit', 'LLMs', 'RAG', 'Vector Search'],
  },
  {
    id: 'project-disaster',
    title: 'Lifeline AI: Disaster Management Dashboard',
    category: 'AI Agents · Real-Time Applications · Social Impact',
    status: 'Hackathon · Jun 2026 – Present',
    overview:
      'An AI-powered dashboard that helps first responders monitor incidents, prioritize events, and coordinate emergency-response information.',
    highlights: [
      'Web automation with the Browserbase API',
      'Speech-to-text updates with the Deepgram API',
      'Redis for low-latency, real-time information retrieval',
      'Built and presented as a working prototype with a hackathon team',
    ],
    tech: ['Browserbase', 'Deepgram', 'Redis', 'AI Agents', 'Speech-to-Text'],
  },
  {
    id: 'project-quantum-ids',
    title: 'Quantum-Enhanced Clustering for IoT Intrusion Detection',
    category: 'AI Research · Cybersecurity · Quantum Computing',
    status: 'Published · IEEE MASS 2025',
    overview: 'Research exploring quantum-enhanced clustering approaches for intrusion detection in IoT networks.',
    highlights: [
      'Quantum-enhanced clustering methods',
      'IoT network intrusion detection',
      'Machine learning for cybersecurity with experimental evaluation',
      'Published in the IEEE MASS 2025 proceedings',
    ],
    tech: ['Quantum Computing', 'Clustering', 'Machine Learning', 'IoT Security'],
    links: [
      { label: 'Read the paper', href: 'https://www.computer.org/csdl/proceedings-article/mass/2025/659900a610/2bmXJT8D6rS' },
      { label: 'Publication details', href: '#publications' },
    ],
  },
];

export type SmallProject = { title: string; description: string; tech: string[]; link?: { label: string; href: string } };

export const otherProjects: SmallProject[] = [
  {
    title: 'In-Kernel Pattern Matching at XDP',
    description:
      'In-kernel pattern matching at the XDP layer to detect malicious payloads at the earliest networking stage, with real-time alerts for low-latency enforcement.',
    tech: ['C', 'eBPF', 'XDP', 'Linux'],
  },
  {
    title: 'Student Feedback System, IET DAVV',
    description: 'Anonymous feedback system with analytics and detailed reporting to support faculty and administrative decisions.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: { label: 'Feedback form', href: 'https://student.ietdavv.edu.in/feedback' },
  },
  {
    title: 'Student Portal, IET DAVV',
    description: 'Web portal with access to academic resources, personalized dashboards, and real-time notices and feedback updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
    link: { label: 'Student portal', href: 'https://student.ietdavv.edu.in/' },
  },
  {
    title: 'Basketball Player Detection',
    description: 'Computer vision model using YOLOv8 to detect basketball players in real time.',
    tech: ['Python', 'OpenCV', 'YOLOv8'],
  },
  {
    title: 'Smart Home Controller',
    description: 'Remote control of home appliances built on an MVC architecture with a Java Swing frontend.',
    tech: ['Java', 'Swing', 'MVC'],
  },
];

export const thesis = {
  title: 'Kernel-Level Industrial Network Intrusion Detection Using eBPF/XDP and Machine Learning',
  type: "Master's Thesis · Purdue University Northwest",
  year: '2026',
  status: 'Ongoing',
  summary:
    'Investigating how in-kernel packet processing can supply protocol-aware behavioral features for detecting attacks on industrial control systems, and how well ML detectors trained on one environment generalize to another.',
  themes: [
    'Industrial Control System Security',
    'Modbus/TCP',
    'Kernel-Level Packet Processing',
    'ML-Based Anomaly Detection',
    'Network Traffic Feature Engineering',
    'Dataset Generalization',
  ],
};

export type Publication = {
  title: string;
  venue: string;
  date: string;
  authors?: string;
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  {
    title: 'Quantum-Enhanced Clustering for Intrusion Detection System in IoT Devices',
    venue: '2025 IEEE 22nd International Conference on Mobile Ad-Hoc and Smart Systems (MASS), pp. 610–615',
    date: 'October 2025',
    authors: 'Kowshick Srinivasan, Aakanksha Trivedi, Shuhui Yang',
    doi: '10.1109/MASS66014.2025.00099',
    url: 'https://www.computer.org/csdl/proceedings-article/mass/2025/659900a610/2bmXJT8D6rS',
  },
];

export type Leadership = { role: string; org: string; period?: string; description: string; highlights?: string[] };

export const leadership: Leadership[] = [
  {
    role: 'President',
    org: 'ACM Student Chapter, Purdue University Northwest',
    period: '2026 – Present',
    description:
      "Leading the university's ACM student chapter, supporting technical community engagement, student collaboration, and computing-related events.",
    highlights: ['Chapter leadership', 'Technical community building', 'Event planning', 'Collaboration with students and faculty'],
  },
  {
    role: 'Vice President',
    org: 'AiRobot, Purdue University Northwest',
    description: 'Executive board member of the AiRobot student organization.',
  },
];

export type Award = { title: string; org: string; date?: string; description: string };

export const awards: Award[] = [
  {
    title: 'Graduate Research Award',
    org: 'Purdue University Northwest',
    date: 'Aug 2025',
    description: 'Awarded in support of research on high-performance networking with eBPF and XDP.',
  },
  {
    title: 'UC Berkeley AI Hackathon 2026',
    org: 'UC Berkeley, USA',
    description: 'Hackathon participant.',
  },
  {
    title: 'Cal Hacks 12.0',
    org: 'San Francisco, USA',
    description: 'Hackathon participant.',
  },
  {
    title: 'Smart India Hackathon Finalist (2022 & 2023)',
    org: 'National-level hackathon, India',
    description:
      'Two-time national finalist. Built a real-time analytics dashboard with KNN-based job recommendations for the PGRKAM website during a 36-hour hackathon.',
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'C#', 'HTML'] },
  {
    category: 'Systems & Security',
    items: ['Linux', 'eBPF', 'XDP', 'libbpf', 'Kernel Programming', 'Network Namespaces', 'Network Programming', 'TCP/IP', 'Modbus/TCP', 'Packet Analysis', 'Intrusion Detection', 'Network Security'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'LLMs', 'RAG', 'LangChain', 'FAISS', 'Ollama', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Anomaly Detection', 'Computer Vision (OpenCV, YOLOv8)'],
  },
  {
    category: 'Backend & Infrastructure',
    items: ['REST APIs', 'GraphQL', 'Shopify API', 'MySQL', 'Redis', 'MongoDB', 'Node.js', 'React', 'Docker', 'AWS EC2', 'Webhooks', 'Automation'],
  },
  { category: 'Visualization & Simulation', items: ['Unity', 'GPU Computing', 'Digital Twins', '3D Visualization', 'Scientific Visualization'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Bitbucket', 'n8n', 'Clang/LLVM', 'bpftool', 'tcpdump', 'Wireshark', 'VS Code', 'Google Colab'] },
];

export type Education = { degree: string; school: string; period: string; location: string; details: string[] };

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science',
    school: 'Purdue University Northwest',
    period: 'Jan 2025 – Dec 2026 (expected)',
    location: 'Hammond, IN',
    details: [
      'GPA 4.00 / 4.00',
      'Focus: systems programming, cybersecurity, AI/ML, industrial network security',
      'Thesis: eBPF/XDP-based industrial network intrusion detection with machine learning',
    ],
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Institute of Engineering & Technology, Devi Ahilya University',
    period: 'Oct 2020 – Jun 2024',
    location: 'Indore, India',
    details: ['CGPA 9.18 / 10'],
  },
];

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#skills', label: 'Skills' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];
