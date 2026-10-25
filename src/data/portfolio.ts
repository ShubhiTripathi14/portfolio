/**
 * ============================================================================
 * PORTFOLIO DATA - Central configuration file
 * ============================================================================
 * 
 * Recruiter & Hiring Manager Optimized Content
 * - 6-Second HR Rule: Core title, tech stack, and location immediately clear
 * - Google X-Y-Z Formula: "Accomplished [X], measured by [Y], by doing [Z]"
 * - High-Impact Keywords bolded for ATS and human recruiter scanning
 * ============================================================================
 */

export const portfolioData = {
  // ─────────────────────────────────────────────
  // PERSONAL & RECRUITER HEADER (Above-the-fold)
  // ─────────────────────────────────────────────
  personal: {
    name: "Shubhi Tripathi",
    title: "Full Stack Developer",
    targetRole: "Full Stack Developer | Java & Microservices Engineer",
    headline: "Full Stack Developer | Enterprise Backend & Microservices",
    subHeadline: "Java 17 · Spring Boot 3.4 · Angular · Microservices · REST APIs · Docker · Azure",
    location: "Pune, Maharashtra, India",
    email: "shubhiitrip@gmail.com",
    phone: "+91-8009122114",
    linkedin: "https://linkedin.com/in/shubhitripathi1410",
    github: "https://github.com/ShubhiTripathi14",
    websiteUrl: "",
    resumePath: "./Shubhi_Tripathi_Resume.pdf",
    
    // Quick recruiter facts (6-second scan)
    quickStats: [
      { label: "Current Employer", value: "LTIMindtree" },
      { label: "Domain Track", value: "Banking Project" },
      { label: "Primary Core", value: "Java 17 / Spring Boot 3" },
      { label: "Deployment Track", value: "Zero-Downtime Releases" },
    ],
  },

  // ─────────────────────────────────────────────
  // PROFESSIONAL SUMMARY (Concise, high-impact bio)
  // ─────────────────────────────────────────────
  about: {
    summary: `Results-driven **Full Stack Developer** with **1+ year of enterprise engineering experience** building high-throughput banking systems with **Java 17**, **Spring Boot 3.4**, **Microservices**, and **Angular**. Currently engineering enterprise CMS migrations and secure microservice integrations at **LTIMindtree** on an **Enterprise Banking Project**, specializing in zero-downtime upgrades, cloud IAM security, and RESTful API architecture.`,
    highlights: [
      "**Enterprise Stack Modernization**: Upgraded legacy enterprise platforms to **Java 17** and **Spring Boot 3.4**, achieving enhanced runtime performance and complete **Jakarta EE 10** compliance.",
      "**Zero-Downtime Delivery**: Executed **Bloomreach CMS v15 → v16** platform migration with zero downtime under strict banking change management protocols.",
      "**Enterprise Cloud Security**: Replaced vulnerable static database credentials with **Microsoft Entra ID token authentication** on Azure Database for MySQL and centralized auth with **SAML SSO**.",
      "**Quality & Test Validation**: Engineered robust unit/integration test suites using **JUnit** and **Mockito** integrated into automated CI/CD pipelines.",
    ],
  },

  // ─────────────────────────────────────────────
  // WORK EXPERIENCE (Google X-Y-Z formula)
  // ─────────────────────────────────────────────
  experience: [
    {
      title: "Full Stack Developer",
      company: "LTIMindtree",
      location: "Pune, India",
      period: "Nov 2025 – Present",
      type: "full-time" as const,
      account: "Banking Project",
      project: "NLPDK – Headless Bloomreach CMS Migration & Microservices Enhancement",
      responsibilities: [
        "**Achieved zero-downtime deployment** and stable production builds by **upgrading the enterprise Bloomreach CMS platform from v15 to v16**, resolving legacy dependency conflicts and configuring build pipelines under strict change management protocols.",
        "**Modernized core enterprise architecture** to enhance runtime performance and scalability by **upgrading runtime stacks from Java 11 → Java 17 and Spring Boot 2.5.2 → 3.4** (Spring Framework 5.3 to 6.2).",
        "**Eliminated static database credential exposure** across containerized cloud environments by **transitioning connectivity to Microsoft Entra ID IAM authentication** for Azure Database for MySQL.",
        "**Centralized enterprise authentication** across distributed microservices by **architecting SAML-based Single Sign-On (SSO)** via Spring Security aligned with **OAuth 2.0 and JWT** standards.",
        "**Ensured 100% forward-compatibility** with Spring Framework 6 and Jakarta EE 10 standards by **migrating all legacy javax.* package dependencies to Jakarta EE namespaces**.",
        "**Accelerated distributed service communication** and cross-functional banking integrations by **designing and maintaining high-reliability RESTful APIs** following microservices design patterns.",
        "**Enforced banking-grade engineering standards** by **driving Agile sprint planning, backlog grooming, technical documentation, and rigorous peer code reviews**.",
      ],
      technologies: [
        "Java 17", "Spring Boot 3.4", "Spring Security", "SAML SSO",
        "Microservices", "RESTful APIs", "Azure Database for MySQL", "Microsoft Entra ID",
        "Docker", "Maven", "Jakarta EE 10", "Bloomreach CMS v16",
      ],
    },
    {
      title: "Full Stack Developer Trainee",
      company: "LTIMindtree",
      location: "Mumbai, India",
      period: "Jun 2025 – Sep 2025",
      type: "training" as const,
      responsibilities: [
        "**Delivered 2 production-ready full-stack applications from scratch** by completing intensive software engineering training focused on **Core Java, Spring Boot, Angular, and MySQL**.",
        "**Architected JobFinder portal** with secure candidate tracking and admin dashboards by **developing JWT-secured RESTful APIs in Spring Boot and Role-Based Access Control (RBAC)**.",
        "**Engineered WiZone Wi-Fi management system** with real-time utilization analytics by **building JWT-authenticated Spring Boot APIs, approval lifecycles, and interactive Chart.js dashboards in Angular**.",
        "**Maximized code reliability and prevented regression defects** by **writing comprehensive unit and integration test suites using JUnit and Mockito** for core business services.",
        "**Streamlined deployment readiness** by **containerizing backend services with Docker** and implementing structured CI/CD pipeline automation.",
      ],
      technologies: [
        "Java", "Spring Boot", "Angular", "TypeScript",
        "MySQL", "JWT", "Docker", "JUnit", "Mockito", "Bootstrap",
      ],
    },
  ],

  // ─────────────────────────────────────────────
  // TECHNICAL SKILLS (Categorized & Scannable)
  // ─────────────────────────────────────────────
  skills: [
    {
      category: "Backend & Frameworks",
      items: ["Java (Core, 11/17/21)", "Spring Boot 3.4", "Spring MVC", "Spring Data JPA", "Hibernate", "Node.js", "Express.js"],
    },
    {
      category: "Microservices & Architecture",
      items: ["RESTful APIs", "Microservices Architecture", "Event-Driven Architecture", "API Integration", "System Design"],
    },
    {
      category: "Security & Cloud IAM",
      items: ["Spring Security", "SAML Single Sign-On (SSO)", "OAuth 2.0", "JWT Authentication", "Role-Based Access Control (RBAC)", "Microsoft Entra ID", "Secure Coding"],
    },
    {
      category: "Frontend Development",
      items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular Material"],
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Database Design & Indexing"],
    },
    {
      category: "Messaging & Streaming",
      items: ["Apache Kafka"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Microsoft Azure", "Azure DevOps", "Docker", "Jenkins", "CI/CD Pipelines", "Maven", "Git", "GitLab"],
    },
    {
      category: "Testing & Quality Assurance",
      items: ["JUnit", "Mockito", "Unit Testing", "Integration Testing"],
    },
    {
      category: "Developer Tools & AI",
      items: ["IntelliJ IDEA", "VS Code", "Postman", "GitHub Copilot", "ChatGPT", "Claude", "Cursor AI"],
    },
    {
      category: "Core Computer Science",
      items: ["OOP Principles", "Design Patterns", "Data Structures & Algorithms", "Dependency Conflict Management"],
    },
  ],

  // ─────────────────────────────────────────────
  // FEATURED PROJECTS (Results & Architecture first)
  // ─────────────────────────────────────────────
  projects: [
    {
      title: "JobFinder — Full-Stack Recruitment Portal",
      description: "An end-to-end recruitment platform with role-based access control, automated candidate application tracking, and an administrative job management console.",
      features: [
        "**Accomplished secure multi-tenant authorization** by implementing **JWT authentication and Role-Based Access Control (RBAC)** across candidate and administrator workflows.",
        "**Accelerated resume submission and status queries** by architecting high-efficiency **RESTful APIs with Spring Boot and MySQL**.",
        "**Delivered intuitive user experience** by building responsive recruitment dashboards using **Angular, TypeScript, and Bootstrap**.",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL", "JWT", "REST APIs", "Bootstrap"],
      github: "https://github.com/ShubhiTripathi14/JobFinder",
      liveDemo: "",
    },
    {
      title: "WiZone — Telecom & Wi-Fi Management System",
      description: "A centralized Wi-Fi subscription and account lifecycle portal featuring self-service plan provisioning, document verification workflows, and visual analytics.",
      features: [
        "**Automated subscription approval cycles** by developing secure backend service workflows for document uploads, verification, and automated status transitions.",
        "**Streamlined usage monitoring** by integrating **dynamic Chart.js data visualizations** into an interactive Angular administrative portal.",
        "**Fortified backend endpoints** by configuring **stateless JWT authentication and role-based endpoint protection** in Spring Boot.",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL", "JWT", "Chart.js", "Docker"],
      github: "https://github.com/ShubhiTripathi14/WiZone",
      liveDemo: "",
    },
  ],

  // ─────────────────────────────────────────────
  // EDUCATION
  // ─────────────────────────────────────────────
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Graphic Era (Deemed to be University)",
      location: "Dehradun, Uttarakhand, India",
      period: "2023 – 2025",
      cgpa: "8.77",
    },
  ],

  // ─────────────────────────────────────────────
  // CERTIFICATIONS
  // ─────────────────────────────────────────────
  certifications: [] as Array<{ name: string; issuer: string; date: string; link: string }>,
};

export type PortfolioData = typeof portfolioData;
