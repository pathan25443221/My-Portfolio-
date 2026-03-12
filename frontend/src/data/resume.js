export const personalInfo = {
    name: "Intekhab Pathan",
    email: "intekhabpathan125@gmail.com",
    phone: "8871171713",
    location: "Pune, India",
    linkedin: "Intekhab Pathan",
    linkedinUrl: "https://www.linkedin.com/in/intekhab-pathan",
    github: "Intekhab Pathan",
    githubUrl: "https://github.com/intekhab-pathan",
    resumeUrl: null,
};

export const about = `Aspiring Full Stack Developer venturing into AI and Automation. I integrate services and build intelligent workflows using tools like N8n and Gumloop. Experienced with FastAPI and Django for backend systems, and passionate about designing beautiful UI/UX powered by AI. I bridge the gap between automation, AI agents, and production-grade web applications.`;

export const experience = [
    {
        company: "Actly",
        location: "Remote, Kuwait",
        roles: [
            {
                title: "Full Stack Developer",
                period: "Jan 2026 – Present",
                type: "Full-time",
                description: "AI Agent integration with various proprietary tools and Meta Developer tools including WhatsApp. Working directly with the Project Manager and CEO to architect innovative automation solutions.",
                highlights: ["AI Agent Integration", "WhatsApp Business API", "Meta Developer Tools"],
            },
            {
                title: "Full Stack Developer Intern",
                period: "Oct 2025 – Dec 2025",
                type: "Internship",
                description: "Implemented and innovated existing software. Created custom MCP tools (Notion, Slack) to be integrated into AI-powered Workflows.",
                highlights: ["Custom MCP Tools", "Notion Integration", "Slack Integration", "Workflow Automation"],
            },
        ],
    },
];

export const education = [
    {
        degree: "Masters of Computer Applications",
        shortDegree: "MCA",
        institution: "IMED, Bharti Vidyapeeth",
        location: "Pune, Maharashtra",
        period: "Jun 2024 – Present",
        cgpa: 8.79,
        maxCgpa: 10,
        color: "cyan",
    },
    {
        degree: "Bachelor of Computer Applications",
        shortDegree: "BCA",
        institution: "Makhanlal Chaturvedi National University",
        location: "Bhopal, Madhya Pradesh",
        period: "Jun 2021 – May 2024",
        cgpa: 7.8,
        maxCgpa: 10,
        color: "violet",
    },
    {
        degree: "Science (Jr. College)",
        shortDegree: "12th",
        institution: "Central Academy Hr. Sec. School",
        location: "",
        period: "2009 – 2021",
        cgpa: null,
        percentage: 71.0,
        color: "pink",
    },
];

export const skills = {
    technical: [
        { name: "Python", icon: "🐍", level: 90 },
        { name: "FastAPI / Django", icon: "⚡", level: 85 },
        { name: "n8n / Automation", icon: "🔄", level: 92 },
        { name: "AI Agent Integration", icon: "🤖", level: 88 },
        { name: "Prompt Engineering", icon: "✨", level: 85 },
        { name: "Java", icon: "☕", level: 75 },
        { name: "MySQL", icon: "🗄️", level: 80 },
        { name: "Git", icon: "🌿", level: 85 },
        { name: "HTML / CSS", icon: "🎨", level: 88 },
        { name: "AI Tools", icon: "🧠", level: 90 },
    ],
    soft: [
        { name: "Leadership", icon: "👑" },
        { name: "Teamwork", icon: "🤝" },
        { name: "Adaptability", icon: "🔀" },
        { name: "Time Management", icon: "⏱️" },
    ],
};

export const projects = [
    {
        title: "Automated Data Analytics Pipeline",
        description: "Comprehensive data analytics automation pipeline using n8n integrating multiple APIs for real-time business data collection, processing, and analysis. Features advanced data transformation and dynamic report generation with interactive charts.",
        technologies: ["n8n", "Gemini API", "AI Agent Integration", "Data Visualization", "Quickchart.io"],
        accent: "cyan",
        icon: "📊",
    },
    {
        title: "AI Content Aggregation & Automation",
        description: "AI-powered automated content aggregation system leveraging RSS feeds and custom API integrations to scrape, filter, and organize real-time articles. NLP-based classification across finance, health, and tech domains with a clean JSX dashboard.",
        technologies: ["n8n", "Node.js", "JSX Frontend", "NLP Classification", "RSS Feeds", "AI/LLM"],
        accent: "violet",
        icon: "📰",
    },
    {
        title: "Facial Recognition Attendance System",
        description: "Real-time facial recognition system automating attendance marking. Uses OpenCV Haar Cascade for detection and LBPH for recognition, with a Tkinter GUI and PostgreSQL/CSV storage.",
        technologies: ["Python", "OpenCV", "LBPH Face Recognizer", "Tkinter", "PostgreSQL"],
        accent: "pink",
        icon: "👁️",
    },
    {
        title: "Osiris Game – Dynamic NPC AI",
        description: "Isometric game in C++ and SDL3 featuring Dynamic NPCs with a locally hosted LLM via Webhook API calls (n8n). NPCs deliver story progression and lore with per-NPC session memory for persistent conversations.",
        technologies: ["C++", "SDL3", "n8n", "LLM (Local)", "Webhook API"],
        accent: "cyan",
        icon: "🎮",
    },
    {
        title: "AI Itinerary Planner",
        description: "Web-based itinerary management app with an interactive Leaflet map for route visualization, PDF generation of trip recommendations, and Claude AI-assisted personalized travel suggestions.",
        technologies: ["Web Framework", "Leaflet Maps", "Claude AI", "PDF Generation"],
        accent: "violet",
        icon: "🗺️",
    },
];

export const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "2+", label: "Years Coding" },
    { value: "10+", label: "Tech Stack" },
    { value: "8.79", label: "CGPA (MCA)" },
];
