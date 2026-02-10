export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Project = {
  name: string;
  /**
   * Optional card cover image shown in the Projects section.
   * Use a local file under /public (e.g. "/projects/review-deals.jpg").
   */
  image?: {
    src: string;
    alt: string;
  };
  description: string;
  highlights: string[];
  tags: string[];
  links: SocialLink[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  details?: string[];
};

export const profile = {
  site: {
    url: "https://example.com",
  },
  fullName: "Anitha Yeruva",
  headline: "AI Full Stack Engineer",
  summary:
    "Full Stack Engineer with 3.5 years of experience in frontend development, scalable backend systems, and AI integrations. Proficient in building modern web applications using ReactJS, Next.js, Node.js, PostgreSQL, and MongoDB. Skilled in crafting dynamic, responsive UIs and integrating GenAI to enhance automation and system intelligence. Experienced in deploying applications with Docker, Kubernetes, GCP, and building multi-tenant SaaS platforms.",
  about: {
    paragraphs: [
      "I’m a AI Full-Stack Software Engineer with hands-on experience building and deploying enterprise-grade web and SaaS applications. I specialize in developing scalable, high-performance frontend and backend systems, with a strong focus on clean architecture, usability, and real-world impact.",
      "On the frontend, I work extensively with ReactJS and Next.js, crafting responsive, accessible interfaces using Tailwind CSS and Material UI, and translating Figma designs into production-ready components. I focus on modular, reusable UI patterns that scale well across complex applications.",
      "On the backend, I build robust APIs and services using Node.js and Python (FastAPI), handling authentication, validation, real-time communication, and secure data flows. I have experience designing efficient data models and working with both relational and NoSQL databases such as PostgreSQL and MongoDB, using Prisma ORM to ensure data integrity and optimized queries.",
      "I’ve worked with Dockerized applications and contributed to cloud deployments and scaling on Google Cloud Platform (GCP) with Kubernetes, collaborating closely within Agile teams through sprint planning, code reviews, and continuous improvement.",
      "More recently, I’ve been deeply involved in building AI-powered SaaS platforms, integrating Generative AI using OpenAI and Google GenAI APIs. My work includes developing AI backend services, implementing prompt-based workflows, managing usage quotas, and creating reusable GenUI components for seamless AI interactions.",
      "I enjoy working on products that combine engineering excellence, thoughtful design, and intelligent automation, and I’m always excited to solve challenging problems at scale.",
    ],
  },
  location: "Hyderabad, India",
  phone: "+91 9182579149",
  email: "anithayeruva12@gmail.com",
  resume: {
    label: "Resume",
    
    // Keep as a relative URL so it works both on Vercel (/) and GitHub Pages (/WebSite).
    href: "Anitha_AI_Fullstack.pdf",
    
    fileName: "Anitha_AI_Fullstack.pdf",
  },
  socials: {
    primary: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anitha-yeruva/" },
      { label: "GitHub", href: "https://github.com/anitha-fuizen" },
    ] satisfies SocialLink[],
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      group: "Front End",
      items: ["ReactJS", "Redux", "Next.js", "TypeScript"],
    },
    { group: "Back End", items: ["Node.js", "Python (FastAPI)", "REST APIs", "WebSockets"] },
    {
      group: "Database",
      items: ["MongoDB", "PostgreSQL", "BigQuery", "Prisma ORM", "Redis"],
    },
    {
      group: "UI Libraries & CSS",
      items: ["Tailwind CSS", "Shadcn UI", "Material UI", "Fluent UI"],
    },
    { group: "Web Platform", items: ["SharePoint", "PowerApps"] },
    {
      group: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "Helm Charts",
        "CI/CD Pipelines",
        "PM2",
      ],
    },
    { group: "Cloud", items: ["GCP","AWS"] },
    {
      group: "AI Integration",
      items: [
        "CopilotKit SDK",
        "LangGraph",
        "OpenAI APIs",
        "RAG (Retrieval-Augmented Generation)",
        "LLMs (ChatGPT-4o mini)",
      ],
    },
    { group: "Tools", items: ["Git", "Swagger UI", "Postman", "VS Code"] },
  ] satisfies SkillGroup[],
  certifications: [
    "Google Cloud Certified: Professional Data Engineer",
    "Microsoft Certified: Power Platform Fundamentals (PL-900)",
  ],
  projects: [
    {
      name: "Siyaram Data Lake",
      description:
        "Built an AI Trend Intelligence & Text-to-SQL product that helps users search fashion trends, analyze insights, ingest PDFs, and query data conversationally. Focused on fast exploration with reliable, secure analytics across large datasets.",
      highlights: [
        "Built secure session-based Next.js app with tabbed workspace and chat history",
        "Implemented advanced trend-search UI: multi-facet filters, debounced queries, pagination, signed-URL proxying",
        "Integrated FastAPI services with BigQuery, Discovery Engine, and Gemini",
      ],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "BigQuery",
        "Gemini",
        "Docker",
      ],
      links: [],
    },
    {
      name: "Creative Suite",
      description:
        "Developed a multi-tenant SaaS platform for AI-powered content generation (images/videos) with team workspaces, role-based access, and usage limits. Emphasized scalable data modeling and reliable quota enforcement across tenants.",
      highlights: [
        "Designed multi-tenant architecture with Prisma + PostgreSQL (teams, roles, quotas)",
        "Integrated Python AI backend via secure API routes, validation, and quota tracking",
        "Built asset catalog for saving and managing generated content",
      ],
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "Docker", "GenAI"],
      links: [],
    },
    {
      name: "Cokpit",
      description:
        "Built a customizable AI org platform to automate business operations using multi-agent workflows and knowledge base integrations. Designed the UX for guided decision-making while keeping the system extensible for new automations.",
      highlights: [
        "Integrated CopilotKit SDK for AI chat and built modular GenUI components",
        "Implemented Human-in-the-Loop components for critical decision workflows",
        "Connected Knowledge Base + MCP Server UI to improve agent reasoning and execution",
      ],
      tags: ["Next.js", "CopilotKit", "LangGraph", "NATS", "PostgreSQL", "OpenAI", "GCP"],
      links: [],
    },
    {
      name: "FASTVDI",
      description:
        "Developed a full-stack platform for provisioning and managing Virtual Desktop Infrastructure (VDI), including marketplace-style discovery and admin tooling. Prioritized secure access, clear auditability, and a smooth operator experience.",
      highlights: [
        "Built marketplace UI with filtering and CRUD using Shadcn UI + React Query",
        "Designed RESTful APIs for provisioning using NestJS + Prisma",
        "Implemented RBAC and real-time transparency via Webhooks",
      ],
      tags: ["Next.js", "NestJS", "React Query", "Prisma", "PostgreSQL", "Kubernetes", "Docker"],
      links: [],
    },
    {
      name: "Review Deals",
      description:
        "Developed a responsive e-commerce application with React and Supabase, integrating Google Authentication and Gmail API for data fetching. Built a dynamic UI with reusable components (navbar, card grids, and collapsible tables) to improve product browsing and status tracking.",
      highlights: [
        "Integrated Google Authentication for secure login",
        "Built interactive UI (image slider, deal indicators, bulk upload)",
        "Developed Node.js services and MongoDB-backed deal management",
      ],
      tags: ["React", "Supabase", "Google Authentication", "CSS", "JavaScript", "Node.js", "MongoDB"],
      links: [],
    },
    {
      name: "Intranet Portal",
      description:
        "Developed a role-based intranet portal using SharePoint + SPFx to streamline employee communication and workflows. Delivered reusable web parts and automated processes to reduce manual coordination across departments.",
      highlights: [
        "Built SPFx web parts using React",
        "Automated department workflows using Power Automate",
        "Migrated PowerApps/SharePoint flows across departments",
      ],
      tags: ["SharePoint", "SPFx", "React", "Power Automate", "PowerApps"],
      links: [],
    },
  ] satisfies Project[],
  education: [
    {
      school: "Sri Padmavathi Mahila University, Tirupathi",
      degree: "Master of Science (M.Sc) in Physics",
      start: "Jul 2020",
      end: "Sept 2022",
    },
    {
      school: "SPW Degree & PG College, Tirupathi",
      degree: "Bachelor of Science (B.Sc) in Physics",
      start: "Jun 2017",
      end: "May 2020",
    },
  ] satisfies EducationItem[],
  experience: [
    {
      company: "Zelarsoft Private Limited",
      role: "Software Engineer",
      start: "Oct 2022",
      end: "Present",
      location: "Hyderabad",
      bullets: [
        "Developed and deployed 4+ enterprise-grade applications across AI, DevOps, e-commerce, and intranet domains.",
        "Designed responsive, accessible UIs using React, Next.js, Tailwind CSS, and Material UI from Figma wireframes.",
        "Built RESTful and real-time APIs using Node.js and Python (FastAPI), integrating WebSockets, Webhooks, and NATS.",
        "Optimized performance with SSR in Next.js, code-splitting, lazy loading, and React Query patterns.",
        "Managed data with PostgreSQL, MongoDB, Prisma ORM, BigQuery, and caching strategies (Redis/optional).",
        "Containerized and deployed with Docker, Kubernetes, Helm; set up CI/CD and deployments on GCP.",
        "Integrated CopilotKit, LangGraph, and LLM platforms (Gemini/OpenAI) for RAG, Text-to-SQL, and multi-agent workflows.",
      ],
    },
  ] satisfies ExperienceItem[],
} as const;


