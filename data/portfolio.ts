// Single source of truth for portfolio content and link destinations.
// Only verified details belong here — leave optional fields undefined rather than guessing.

/* ------------------------------------------------------------------ links */

export const links = {
  email: 'aakankshatrivedi27@gmail.com',
  universityEmail: 'trived39@pnw.edu',
  github: 'https://github.com/aakanksha32173',
  linkedin: 'https://www.linkedin.com/in/aakanksha-trivedi/',
  resume: '/resume.pdf',
  resumeFileName: 'Aakanksha-Trivedi-Resume.pdf',
  paper: 'https://www.computer.org/csdl/proceedings-article/mass/2025/659900a610/2bmXJT8D6rS',
  ietPortal: 'https://student.ietdavv.edu.in/',
  ietFeedback: 'https://student.ietdavv.edu.in/feedback',
} as const;

export const projectHref = (slug: string) => `/projects/${slug}`;

/* ---------------------------------------------------------------- profile */

export const profile = {
  name: 'Aakanksha Trivedi',
  identity: 'Software Engineer · AI/ML · Systems & Security',
  roles: ['Software Engineer', 'AI/ML Engineer', 'Systems & Security Researcher'],
  headline: 'Building intelligent systems, from the kernel to the cloud.',
  summary:
    'CS graduate student at Purdue University Northwest. I build across eBPF/XDP network security, applied AI, backend automation, and GPU-accelerated digital twins.',
  degree: 'M.S. Computer Science',
  school: 'Purdue University Northwest',
  location: 'Hammond, IN',
  graduation: 'Dec 2026',
  availability: 'Open to full-time roles from Jan 2027',
  availabilityLong:
    'Open to full-time Software, AI/ML, Systems, and Security Engineering roles starting January 2027.',
};

export const sections = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------- hero: kernel → cloud map */

export const stack: { layer: string; items: { label: string; slug: string }[] }[] = [
  { layer: 'Cloud & backend', items: [{ label: 'Shopify catalog automation', slug: 'shopify-catalog-integration' }] },
  {
    layer: 'AI & agents',
    items: [
      { label: 'Multi-agent RAG', slug: 'multi-agent-rag' },
      { label: 'Lifeline AI', slug: 'lifeline-ai' },
    ],
  },
  { layer: 'Simulation & GPU', items: [{ label: 'Steel-casting digital twin', slug: 'steel-casting-digital-twin' }] },
  { layer: 'Kernel & network', items: [{ label: 'eBPF/XDP Modbus IDS', slug: 'ebpf-modbus-ids' }] },
];

/* ------------------------------------------------------------- highlights */

export type Achievement = {
  kicker: string;
  title: string;
  detail: string;
  stat?: string;
  href?: string;
  linkLabel?: string;
  wide?: boolean;
};

export const achievements: Achievement[] = [
  {
    kicker: 'Publication · IEEE MASS 2025',
    title: 'Quantum-Enhanced Clustering for Intrusion Detection System in IoT Devices',
    detail: 'K. Srinivasan, A. Trivedi, S. Yang · pp. 610–615 · DOI 10.1109/MASS66014.2025.00099',
    href: links.paper,
    linkLabel: 'Read the paper',
    wide: true,
  },
  {
    kicker: 'Kernel engineering · IIT Indore',
    stat: '140+',
    title: 'eBPF programs chained with tail calls',
    detail: 'A deep-packet inspection pipeline split to stay within verifier limits.',
  },
  {
    kicker: 'Award · Aug 2025',
    title: 'Graduate Research Award',
    detail: 'Purdue University Northwest',
  },
  {
    kicker: 'Leadership',
    title: 'President, ACM Student Chapter',
    detail: 'Purdue University Northwest, 2026–present. Also Vice President, AiRobot.',
  },
  {
    kicker: 'Hackathons',
    title: 'Cal Hacks 12.0 · UC Berkeley AI Hackathon 2026',
    detail: 'Two-time Smart India Hackathon national finalist (2022, 2023).',
    wide: true,
  },
  {
    kicker: 'Thesis · in progress',
    title: 'eBPF/XDP + ML for industrial intrusion detection',
    detail: 'M.S. thesis, Purdue University Northwest.',
    href: projectHref('ebpf-modbus-ids'),
    linkLabel: 'See the pipeline',
  },
];

/* ------------------------------------------------------------- experience */

export type Role = {
  role: string;
  org: string;
  unit?: string;
  period: string;
  status?: string;
  highlights: string[];
  planned?: string[];
  tech: string[];
  caseStudy?: string;
};

export type ExperienceGroup = {
  id: string;
  title: string;
  org: string;
  period: string;
  line: string;
  tags: string[];
  roles: Role[];
};

export const experience: ExperienceGroup[] = [
  {
    id: 'beulah',
    title: 'Software Developer Intern',
    org: 'Beulah Inc.',
    period: 'May – Aug 2026',
    line: 'Automated a legacy industrial product catalog into Shopify with Dockerized n8n workflows, MySQL sync state, and the Shopify GraphQL Admin API.',
    tags: ['n8n', 'MySQL', 'Shopify GraphQL', 'Docker', 'AWS EC2'],
    roles: [
      {
        role: 'Software Developer Intern',
        org: 'Beulah Inc.',
        unit: 'Valparaiso, IN',
        period: 'May 2026 – Aug 2026',
        highlights: [
          'Built PHP/MySQL features and Dockerized n8n workflows that automate catalog, file, and part-management operations.',
          'Integrated the Shopify GraphQL Admin API: product/variant updates, inventory mapping, metafields, staged image uploads, collections, and Shopify ID writeback.',
          'Implemented sync-state tracking, failure branches, error logging, rerun-safe processing, and SQL validation; debugged production issues across legacy modules.',
          'Deployed the containerized automation stack on AWS EC2.',
          'Configured the storefront: product templates, navigation, and custom quote-request flows.',
        ],
        planned: ['Order ingestion through Shopify webhooks with database sync (designed, not deployed).'],
        tech: ['PHP', 'JavaScript', 'SQL', 'MySQL', 'n8n', 'Shopify GraphQL', 'Docker', 'AWS EC2', 'Webhooks'],
        caseStudy: 'shopify-catalog-integration',
      },
    ],
  },
  {
    id: 'pnw-research',
    title: 'Student Researcher',
    org: 'Purdue University Northwest',
    period: 'Jan 2026 – Present',
    line: 'Thesis research on protocol-aware Modbus/TCP inspection in eBPF/XDP for ML anomaly detection; earlier, a GPU-accelerated Unity digital twin at CIVS.',
    tags: ['eBPF/XDP', 'C', 'Modbus/TCP', 'Python', 'Unity'],
    roles: [
      {
        role: 'Student Researcher: Network Security & eBPF',
        org: 'Purdue University Northwest',
        period: 'Aug 2026 – Present',
        status: "Ongoing master's thesis",
        highlights: [
          'Designing an eBPF/XDP pipeline that parses Modbus/TCP industrial-control traffic directly in the Linux networking path.',
          'Built a libbpf ring-buffer collector and a network-namespace/veth testbed for bidirectional capture.',
          'Running experiments on the CIC Modbus dataset, analyzing cross-environment generalization and false positives.',
        ],
        tech: ['C', 'eBPF', 'XDP', 'libbpf', 'Python', 'Scikit-learn'],
        caseStudy: 'ebpf-modbus-ids',
      },
      {
        role: 'Student Researcher: Industrial Digital Twin',
        org: 'Purdue University Northwest',
        unit: 'Center for Innovation through Visualization and Simulation (CIVS)',
        period: 'Jan 2026 – May 2026',
        highlights: [
          'Built a GPU-accelerated Unity digital twin of thermal behavior in continuous steel casting, driven by dynamic CSV simulation data.',
          'Automated thermal segmentation and annotation with configurable temperature thresholds.',
          'Implemented synchronized 2D/3D transverse, longitudinal, curved, and volumetric rendering with interactive exploration.',
        ],
        tech: ['Unity', 'C#', 'GPU Computing', 'Scientific Visualization'],
        caseStudy: 'steel-casting-digital-twin',
      },
    ],
  },
  {
    id: 'earlier-research',
    title: 'Earlier Security Research',
    org: 'IIT Indore · Purdue University Northwest',
    period: '2024 – 2026',
    line: 'Kernel-level packet inspection with eBPF/XDP at IIT Indore, then ML-based IoT intrusion-detection research and Java teaching at Purdue Northwest.',
    tags: ['eBPF', 'XDP', 'C', 'Machine Learning', 'Java'],
    roles: [
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
      {
        role: 'Research and Teaching Assistant',
        org: 'Purdue University Northwest',
        period: 'Jun 2025 – May 2026',
        highlights: [
          'Co-authored IEEE MASS 2025 research on quantum-enhanced clustering for intrusion detection in IoT environments.',
          'Ran literature reviews and comparative research across ML, cybersecurity, and quantum computing; standardized reproducible research workflows.',
          'Mentored undergraduate Java labs: debugging, object-oriented design, assignment evaluation, and code review.',
        ],
        tech: ['Machine Learning', 'Java', 'Research'],
      },
    ],
  },
];

/* --------------------------------------------------------------- projects */

export type Category = 'AI' | 'Security' | 'Systems' | 'Web/Backend';
export const categories: Category[] = ['AI', 'Security', 'Systems', 'Web/Backend'];

export type PreviewKind = 'packets' | 'retrieval' | 'twin' | 'events' | 'sync';
export type Stage = { label: string; detail: string };

export type Project = {
  slug: string;
  title: string;
  period: string;
  status: string;
  categories: Category[];
  featured: boolean;
  problem: string;
  solution: string;
  impact: string;
  overview: string;
  tech: string[];
  preview: PreviewKind;
  architecture?: { caption: string; stages: Stage[]; planned?: Stage[] };
  details: string[];
  challenges?: string[];
  notes?: string[];
};

export const projects: Project[] = [
  {
    slug: 'ebpf-modbus-ids',
    title: 'eBPF/XDP Modbus Intrusion Detection',
    period: 'Aug 2026 – present',
    status: 'Thesis research · ongoing',
    categories: ['Security', 'Systems', 'AI'],
    featured: true,
    problem:
      'Modbus/TCP has no built-in authentication, so attacks such as false data injection can look like valid industrial traffic.',
    solution:
      'XDP programs parse Modbus in the kernel and extract transaction, function-code, and register features into one-second windows for ML.',
    impact: 'Tests whether kernel-level protocol features can support ICS anomaly detection, and how well detectors generalize.',
    overview:
      'Kernel-level industrial network monitoring research combining eBPF/XDP packet processing, Modbus/TCP protocol analysis, and machine learning.',
    tech: ['C', 'eBPF', 'XDP', 'libbpf', 'Python', 'Scikit-learn', 'Modbus/TCP', 'Linux'],
    preview: 'packets',
    architecture: {
      caption: 'Research pipeline',
      stages: [
        { label: 'Testbed', detail: 'Modbus/TCP traffic between Linux network namespaces joined by veth pairs' },
        { label: 'XDP / eBPF', detail: 'Protocol-aware parsing and structure validation in both directions' },
        { label: 'Ring buffer', detail: 'libbpf collector; request–response matching by transaction ID and endpoints' },
        { label: 'Feature logs', detail: 'CSV records: function codes, registers, lengths, transaction IDs, malformed/stacked frames' },
        { label: '1-s windows', detail: 'Per-second behavioral features: request rate, duplicates, response timing' },
        { label: 'ML evaluation', detail: 'Random Forest on CIC Modbus; generalization and false-positive analysis' },
      ],
    },
    details: [
      'XDP programs parse Modbus/TCP headers, function codes, and register references, and validate packet structure to flag malformed and stacked frames.',
      'Requests and responses are correlated by transaction ID, endpoints, and protocol fields, which also yields response timing.',
      'A libbpf ring buffer streams per-packet records to user space, where they are written as CSV for feature engineering.',
      'Traffic is aggregated into one-second windows: request rate, duplicate transactions, packet lengths, and timing behavior.',
      'Throughput and latency of the pipeline are benchmarked on a namespace/veth testbed.',
      'Experiments on the CIC Modbus dataset cover false data injection, reconnaissance, flooding, malformed packets, replay, and unusual transaction patterns.',
    ],
    challenges: [
      'Cross-environment generalization: a detector trained on one capture environment does not necessarily transfer to another. This is a central question of the thesis.',
      'Understanding which features drive false positives under benign traffic variation.',
      'Next step: richer features, including Modbus response values and transaction-level behavior.',
    ],
    notes: ['Ongoing research. This is not a production IDS, and no final accuracy figures are claimed.'],
  },
  {
    slug: 'multi-agent-rag',
    title: 'Multi-Agent RAG Research Assistant',
    period: 'Mar – May 2026',
    status: 'Personal project',
    categories: ['AI'],
    featured: true,
    problem: 'Answers synthesized from many documents and web sources are hard to trust without knowing where each claim came from.',
    solution:
      'Specialized agents for document retrieval (FAISS), web search, and generation (local Ollama models), orchestrated with LangChain.',
    impact: 'Responses cite their sources, and documents can be ingested, indexed, and queried from a Streamlit interface.',
    overview:
      'A multi-agent retrieval-augmented generation system that coordinates specialized agents across indexed documents and the web.',
    tech: ['Python', 'LangChain', 'FAISS', 'Ollama', 'Streamlit', 'RAG'],
    preview: 'retrieval',
    architecture: {
      caption: 'Agent flow',
      stages: [
        { label: 'Ingestion', detail: 'Documents uploaded in Streamlit, embedded, and indexed in FAISS' },
        { label: 'Retrieval agent', detail: 'Embedding-based semantic search over the vector index' },
        { label: 'Web search agent', detail: 'Pulls in sources beyond the indexed documents' },
        { label: 'Generation agent', detail: 'Local LLM through Ollama synthesizes the answer' },
        { label: 'Cited answer', detail: 'Response returned with citations to its sources' },
      ],
    },
    details: [
      'Agents are specialized by task (retrieval, web search, response generation) and coordinated through LangChain.',
      'Semantic retrieval uses embeddings with FAISS vector similarity search across multiple indexed documents.',
      'Generation runs on local models through Ollama, with citation-aware prompting.',
      'A real-time Streamlit interface handles document ingestion, vector indexing, and interactive querying.',
    ],
  },
  {
    slug: 'steel-casting-digital-twin',
    title: 'GPU-Accelerated Steel-Casting Digital Twin',
    period: 'Jan – May 2026',
    status: 'Research · PNW CIVS',
    categories: ['Systems'],
    featured: true,
    problem: 'Thermal simulation output for continuous steel casting is hard to interpret as raw tabular data.',
    solution:
      'A Unity/C# twin renders the data in synchronized 2D/3D views (transverse, longitudinal, curved, volumetric) with automated thermal segmentation.',
    impact: 'Configurable temperature thresholds highlight critical casting regions so researchers can explore process behavior interactively.',
    overview:
      'A GPU-accelerated Unity digital twin that visualizes real-time thermal behavior in continuous steel casting from dynamic simulation data.',
    tech: ['Unity', 'C#', 'GPU Computing', 'Scientific Visualization'],
    preview: 'twin',
    architecture: {
      caption: 'Visualization pipeline',
      stages: [
        { label: 'Simulation data', detail: 'Dynamic, CSV-driven thermal simulation output' },
        { label: 'Segmentation', detail: 'Automated thermal segmentation and annotation by configurable thresholds' },
        { label: 'Synchronized views', detail: 'Transverse, longitudinal, curved, and volumetric 2D/3D rendering' },
        { label: 'Exploration', detail: 'Interactive, real-time inspection of temperature distribution' },
      ],
    },
    details: [
      'Real-time visualization driven by dynamic CSV simulation data, rendered on the GPU in Unity.',
      'Automated segmentation and annotation identify critical casting regions using configurable temperature thresholds.',
      'Synchronized transverse, longitudinal, curved, and volumetric rendering pipelines stay in step with the data.',
      'Built at the Center for Innovation through Visualization and Simulation, connecting scientific computing with interactive visualization.',
    ],
  },
  {
    slug: 'lifeline-ai',
    title: 'Lifeline AI: Disaster Response Dashboard',
    period: 'Jun 2026 – present',
    status: 'Hackathon prototype',
    categories: ['AI', 'Web/Backend'],
    featured: true,
    problem: 'In an emergency, first responders work from information scattered across voice updates and web sources.',
    solution:
      'A dashboard that turns speech (Deepgram) and automated web lookups (Browserbase) into monitored, prioritized incidents, with Redis for real-time retrieval.',
    impact: 'A working prototype, built and presented with a hackathon team, focused on first-responder situational awareness.',
    overview:
      'An AI-powered dashboard that helps first responders monitor incidents, prioritize events, and coordinate emergency-response information.',
    tech: ['Browserbase', 'Deepgram', 'Redis', 'AI Agents'],
    preview: 'events',
    architecture: {
      caption: 'Integration flow',
      stages: [
        { label: 'Voice', detail: 'Deepgram speech-to-text turns spoken updates into text' },
        { label: 'Web', detail: 'Browserbase automates lookups across web sources' },
        { label: 'Redis', detail: 'Low-latency storage and retrieval of real-time information' },
        { label: 'Dashboard', detail: 'Incident monitoring, event prioritization, and coordination' },
      ],
    },
    details: [
      'Browserbase API for web automation, Deepgram API for speech-to-text updates, and Redis for low-latency, real-time information retrieval.',
      'Designed, implemented, and presented as a working prototype with a hackathon team.',
    ],
    notes: ['Hackathon prototype. The diagram shows its integrations, not a production deployment.'],
  },
  {
    slug: 'shopify-catalog-integration',
    title: 'Industrial Catalog → Shopify Integration',
    period: 'May – Aug 2026',
    status: 'Internship · Beulah Inc.',
    categories: ['Web/Backend'],
    featured: false,
    problem: "An industrial product catalog in a legacy MySQL system needed to be published, and kept current, on the company's Shopify store.",
    solution:
      'Dockerized n8n workflows on AWS EC2 sync products, variants, metafields, collections, and images through the Shopify GraphQL Admin API.',
    impact: 'Catalog changes reach the storefront through repeatable workflows that track sync state and can be safely re-run after failures.',
    overview: 'Workflow automation connecting a legacy industrial product database with Shopify.',
    tech: ['n8n', 'MySQL', 'Shopify GraphQL', 'PHP', 'Docker', 'AWS EC2'],
    preview: 'sync',
    architecture: {
      caption: 'Integration architecture',
      stages: [
        { label: 'MySQL catalog', detail: 'Legacy product data plus per-item synchronization state' },
        { label: 'n8n workflows', detail: 'Dockerized on AWS EC2: transforms, retries, failure branches' },
        { label: 'Shopify GraphQL', detail: 'Products, variants, metafields, collections, staged images, ID writeback' },
        { label: 'Storefront', detail: 'Product templates, navigation, and quote-request flows' },
      ],
      planned: [{ label: 'Order ingestion', detail: 'Shopify webhooks → order processing → database sync' }],
    },
    details: [
      'Covers product categories including Types, Restrictors, and Accessories, with collection mapping.',
      'Image sync for product diagrams, 3D representations, and fallback images via staged uploads.',
      'Sync logic for product identifiers, purchasing constraints, revisions, and industrial attributes.',
      'Shopify IDs are written back to the database so later runs update rather than duplicate.',
      'Sync-state tracking, error logging, failure branches, and SQL validation keep runs rerun-safe.',
    ],
    notes: ['Order ingestion is designed but not deployed. Proprietary code and data are not shown.'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export type SmallProject = {
  title: string;
  description: string;
  tech: string[];
  categories: Category[];
  href?: string;
  linkLabel?: string;
};

export const moreWork: SmallProject[] = [
  {
    title: 'Industrial Catalog → Shopify',
    description: 'Internship case study: n8n, MySQL, and Shopify GraphQL sync.',
    tech: ['n8n', 'MySQL', 'GraphQL'],
    categories: ['Web/Backend'],
    href: projectHref('shopify-catalog-integration'),
    linkLabel: 'Case study',
  },
  {
    title: 'In-Kernel Pattern Matching at XDP',
    description: 'Detects malicious payloads at the earliest networking stage, with real-time alerts.',
    tech: ['C', 'eBPF', 'XDP'],
    categories: ['Security', 'Systems'],
  },
  {
    title: 'Student Feedback System, IET DAVV',
    description: 'Anonymous feedback with analytics and reporting for faculty and administrators.',
    tech: ['React', 'Node.js', 'MongoDB'],
    categories: ['Web/Backend'],
    href: links.ietFeedback,
    linkLabel: 'Live form',
  },
  {
    title: 'Student Portal, IET DAVV',
    description: 'Academic resources, personalized dashboards, and real-time notices.',
    tech: ['React', 'Node.js', 'MongoDB'],
    categories: ['Web/Backend'],
    href: links.ietPortal,
    linkLabel: 'Live portal',
  },
  {
    title: 'Basketball Player Detection',
    description: 'Real-time player detection with YOLOv8.',
    tech: ['Python', 'OpenCV', 'YOLOv8'],
    categories: ['AI'],
  },
  {
    title: 'Smart Home Controller',
    description: 'Remote appliance control on an MVC architecture with a Swing UI.',
    tech: ['Java', 'Swing', 'MVC'],
    categories: [],
  },
];

/* ----------------------------------------------------- research & awards */

export const thesis = {
  title: 'Kernel-Level Industrial Network Intrusion Detection Using eBPF/XDP and Machine Learning',
  status: 'Ongoing',
  year: '2026',
};

export type Publication = { title: string; venue: string; date: string; authors: string; doi: string; url: string };

export const publications: Publication[] = [
  {
    title: 'Quantum-Enhanced Clustering for Intrusion Detection System in IoT Devices',
    venue: '2025 IEEE 22nd International Conference on Mobile Ad-Hoc and Smart Systems (MASS), pp. 610–615',
    date: 'October 2025',
    authors: 'Kowshick Srinivasan, Aakanksha Trivedi, Shuhui Yang',
    doi: '10.1109/MASS66014.2025.00099',
    url: links.paper,
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Purdue University Northwest',
    period: 'Jan 2025 – Dec 2026 (expected)',
    detail: 'GPA 4.00 / 4.00',
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'Institute of Engineering & Technology, Devi Ahilya University',
    period: 'Oct 2020 – Jun 2024',
    detail: 'CGPA 9.18 / 10',
  },
];

/* ----------------------------------------------------------------- skills */

export type SkillGroup = { id: string; label: string; core: string[]; more: string[] };

export const skills: SkillGroup[] = [
  { id: 'languages', label: 'Languages', core: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'], more: ['C#', 'PHP', 'HTML'] },
  {
    id: 'ai',
    label: 'AI / ML',
    core: ['LangChain', 'FAISS', 'Ollama', 'Scikit-learn', 'RAG', 'Feature Engineering'],
    more: ['LLMs', 'Streamlit', 'Pandas', 'NumPy', 'Anomaly Detection', 'OpenCV', 'YOLOv8'],
  },
  {
    id: 'backend',
    label: 'Backend & Cloud',
    core: ['Docker', 'AWS EC2', 'MySQL', 'Redis', 'GraphQL', 'n8n'],
    more: ['REST APIs', 'Shopify API', 'Webhooks', 'Node.js', 'MongoDB', 'React'],
  },
  {
    id: 'systems',
    label: 'Systems & Security',
    core: ['eBPF', 'XDP', 'libbpf', 'Linux Kernel', 'Modbus/TCP', 'TCP/IP'],
    more: ['Network Namespaces', 'Packet Analysis', 'Intrusion Detection', 'GPU Computing'],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    core: ['Git', 'Clang/LLVM', 'bpftool', 'Wireshark', 'tcpdump', 'Unity'],
    more: ['GitHub', 'Bitbucket', 'VS Code', 'Google Colab'],
  },
];
