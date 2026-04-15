import React from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(React.createElement);

const decodeUrl = (encoded) => atob(encoded.replace(/\s/g, ""));

const siteFoot = html`<footer className="site-footer">andrecentov.space</footer>`;

const homeData = {
  nav: [
    { href: "#services", label: "Focus" },
    { href: "#projects-preview", label: "Projects" },
    { href: "#process", label: "Process" },
    { href: "projects.html", label: "Full Portfolio" },
    { href: "contacts.html", label: "Contact" },
  ],
  heroPoints: ["Go services", "PostgreSQL design", "REST and gRPC APIs", "Containerized delivery"],
  sideCards: [
    {
      label: "Primary stack",
      title: "Go / PostgreSQL / Docker",
      text: "Backend foundations for services that need predictable behavior and clean structure.",
    },
    {
      label: "What I optimize for",
      title: "Clarity under growth",
      text: "Readable services, practical abstractions, and architecture that stays maintainable as scope increases.",
    },
  ],
  profileItems: [
    "API and service design",
    "Database-backed applications",
    "Observability-aware implementation",
    "Production-oriented engineering",
  ],
  features: [
    ["01", "Service Architecture", "Designing backend structure, module boundaries, and service responsibilities so the codebase remains understandable after the first release."],
    ["02", "API Development", "Building REST and gRPC interfaces with clear contracts, predictable error handling, and implementation that supports future iteration."],
    ["03", "Data and Persistence", "Creating PostgreSQL-backed systems with schema decisions made for long-term maintainability, not only short-term convenience."],
    ["04", "Operational Readiness", "Containerization, logging, and service behavior designed with real deployment and debugging needs in mind."],
    ["05", "Workflow Automation", "Command-driven systems and automation flows that remove manual steps while keeping execution controlled and explicit."],
    ["06", "Distributed Communication", "Components that interact through events, background processing, and service contracts without turning the architecture into noise."],
  ],
  previewProjects: [
    {
      icon: "images/wise.png",
      alt: "API service illustration",
      pill: "Stable foundation",
      title: "API Service",
      text: "A Go REST API with JWT authentication, PostgreSQL, and Docker-based delivery built around durable request flow and maintainable service structure.",
      items: ["Authentication and access flow", "Schema-oriented backend design", "Containerized development and deployment"],
    },
    {
      icon: "images/eternity.png",
      alt: "Automation bot illustration",
      pill: "Automation",
      title: "Telegram Bot",
      text: "A command-driven automation bot designed for scheduling flows and repeatable operational actions with predictable execution paths.",
      items: ["Message-driven backend logic", "Reusable command structure", "Extensible workflow design"],
    },
    {
      icon: "images/flower.png",
      alt: "gRPC microservice illustration",
      pill: "Distributed systems",
      title: "gRPC Microservice",
      text: "A service-to-service component using gRPC and Kafka with attention to contracts, asynchronous communication, and observability.",
      items: ["gRPC communication model", "Kafka event handling", "Integration-oriented backend design"],
    },
  ],
  principles: [
    ["Readable architecture", "System structure should be understandable by another engineer without verbal decoding."],
    ["Predictable behavior", "Error handling, interfaces, and data flow should behave consistently under normal and failure conditions."],
    ["Practical abstractions", "I avoid complexity that looks sophisticated but does not improve delivery or maintenance."],
    ["Long-term maintainability", "Good implementation is not only fast to write, but also realistic to support, debug, and extend."],
  ],
  process: [
    ["01", "Clarify the system boundary", "Define the service responsibility, the core flows, and the interfaces that matter before implementation grows in the wrong direction."],
    ["02", "Model data and behavior", "Shape the API, database structure, and service contracts together so the implementation does not fight the domain model later."],
    ["03", "Implement with operational context", "Add logging, clear service flow, and delivery conventions early instead of treating operations as an afterthought."],
    ["04", "Keep the result extensible", "Make future changes possible by keeping code paths understandable and design choices explicit."],
  ],
  stackGroups: [
    ["Languages and runtime", ["Go", "SQL", "Bash"]],
    ["Data and storage", ["PostgreSQL", "Schema design", "Query design"]],
    ["Interfaces", ["REST", "gRPC", "JWT"]],
    ["Infrastructure and delivery", ["Docker", "Service logging", "Deployment setup"]],
    ["Messaging and workflows", ["Kafka", "Schedulers", "Bots and automation"]],
  ],
};

const projectsData = {
  nav: [
    { href: "index.html", label: "Home" },
    { href: "#cases", label: "Case Studies" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "contacts.html", label: "Contact" },
  ],
  metrics: [
    ["Main focus", "Backend architecture"],
    ["Typical stack", "Go / PostgreSQL / Docker"],
    ["Priority", "Reliability and clarity"],
  ],
  cases: [
    {
      icon: "images/wise.png",
      alt: "API Service icon",
      pill: "API platform",
      repo: "https://github.com/denterion/golang-Tack-tracker",
      title: "API Service",
      lead: "A Go REST API with JWT authentication, PostgreSQL persistence, structured logging, and Docker-based delivery.",
      sections: [
        ["What this project demonstrates", "Building a service with clear request flow, stable authentication behavior, and a database model intended to remain workable after the first version."],
        ["Important engineering choices", "JWT-based auth, organized service structure, and persistence design that supports a practical backend workflow rather than a purely tutorial implementation."],
        ["Why it matters", "This is the most direct example of standard backend product work: API contracts, durable storage, and service code that another engineer can understand."],
      ],
      chips: ["Go", "REST", "JWT", "PostgreSQL", "Docker"],
    },
    {
      icon: "images/eternity.png",
      alt: "Telegram Bot icon",
      pill: "Automation workflows",
      repo: "https://github.com/denterion/tgBot-ForHealth",
      title: "Telegram Bot",
      lead: "A backend-oriented automation bot focused on scheduling, controlled command execution, and repeatable operational flows.",
      sections: [
        ["What this project demonstrates", "Designing a message-driven backend that turns user commands into predictable workflows instead of a set of ad-hoc handlers."],
        ["Important engineering choices", "Reusable command logic, scheduling flow structure, and extension paths that let the bot grow without becoming a collection of fragile exceptions."],
        ["Why it matters", "Automation systems still need backend discipline: state, flow control, and implementation that stays maintainable as the number of actions increases."],
      ],
      chips: ["Go", "Telegram API", "Scheduler", "Workflow logic", "PostgreSQL"],
    },
    {
      icon: "images/flower.png",
      alt: "gRPC Microservice icon",
      pill: "Distributed communication",
      repo: "https://github.com/denterion/Event-Driven-Notification-Platfrom",
      title: "gRPC Microservice",
      lead: "A service-to-service component using gRPC and Kafka for event-driven communication with attention to integration boundaries and observability.",
      sections: [
        ["What this project demonstrates", "Working on backend communication where the hard part is not only business logic, but also the contracts and flow between moving parts."],
        ["Important engineering choices", "gRPC-based service contracts, Kafka-driven asynchronous communication, and implementation choices shaped by integration and service interaction."],
        ["Why it matters", "This type of work shows how I think about backend systems after they stop being single-service applications and begin to rely on coordination."],
      ],
      chips: ["Go", "gRPC", "Kafka", "Observability", "Integration testing"],
    },
  ],
  capabilities: [
    ["API and contract design", "Interfaces that stay understandable for both clients and future contributors."],
    ["Persistence and schema work", "Database-backed design with attention to structure, consistency, and maintainability."],
    ["Automation and workflow execution", "Systems that automate actions without losing control over state and flow."],
    ["Distributed system thinking", "Handling service boundaries, asynchronous communication, and backend interactions realistically."],
  ],
};

const contactsData = {
  nav: [
    { href: "index.html", label: "Home" },
    { href: "projects.html", label: "Projects" },
  ],
  useCases: [
    "Backend development opportunities",
    "Technical discussions and collaboration",
    "Project review and portfolio questions",
  ],
  channels: [
    ["images/hh.png", "hh.ru", "Resume, experience summary, and role information", "aHR0cHM6Ly9o aC5y dS9yZXN1bWUvMzc5YTBjNDFmZjBmNDk0MTcyMDAzOWVkMWY1NTZjNmU0YTcxNGI="],
    ["images/linken.png", "LinkedIn", "Professional profile and network communication", "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FuZHJldy1wcm90c2Vua28tNzI1MDUzM2Iw"],
    ["images/ds.png", "Discord", "Fast communication for direct technical discussion", "aHR0cHM6Ly9kaXNjb3JkLmNvbS91c2Vycy83MTk0OTA2MTcxMzQxNTM4MzA="],
    ["images/telegram.png", "Telegram", "Direct messaging for quick contact and follow-up", "aHR0cHM6Ly90Lm1lL2hhbm5hWG1vbnRhbmE="],
  ],
  infoCards: [
    {
      kicker: "Collaboration",
      title: "What I am most interested in",
      list: [
        "Backend development positions",
        "Go service implementation",
        "API and data-model work",
        "Distributed or automation-oriented systems",
      ],
    },
    {
      kicker: "Portfolio use",
      title: "What this page is for",
      text: "The site is meant to be shareable as a professional portfolio, so this page stays simple: clear channels, clear purpose, and no decorative interaction that hides the actual contact paths.",
    },
  ],
};

function Header({ title, nav }) {
  return html`
    <header className="site-header">
      <a className="brand" href="index.html">
        <span className="brand-kicker">Andre</span>
        <span className="brand-title">${title}</span>
      </a>
      <nav className="site-nav">
        ${nav.map((item) => html`<a key=${item.href} href=${item.href}>${item.label}</a>`)}
      </nav>
    </header>
  `;
}

function HomePage() {
  return html`
    <main className="page-shell">
      <${Header} title="Backend Go Developer" nav=${homeData.nav} />

      <section className="hero">
        <div className="hero-main card">
          <p className="section-kicker">Backend engineering for product teams</p>
          <h1>I design and build backend systems that stay understandable as the product grows.</h1>
          <p className="hero-text">
            My work is centered on Go services, APIs, PostgreSQL, and service architecture with a practical focus on reliability,
            maintainability, and clear delivery. The goal is not just to make something work, but to make it stable enough to grow.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="projects.html">View Selected Projects</a>
            <a className="button button-secondary" href="contacts.html">Discuss Collaboration</a>
          </div>
          <div className="hero-points">
            ${homeData.heroPoints.map((point) => html`<span key=${point}>${point}</span>`)}
          </div>
        </div>

        <aside className="hero-side">
          ${homeData.sideCards.map((card) => html`
            <article key=${card.title} className="card stat-card">
              <span className="label">${card.label}</span>
              <strong>${card.title}</strong>
              <p>${card.text}</p>
            </article>
          `)}
          <article className="card profile-card">
            <img src="images/avatar.png" alt="Portrait of Andrew Protsenko" className="portrait" />
            <div>
              <p className="label">Work profile</p>
              <ul className="compact-list">
                ${homeData.profileItems.map((item) => html`<li key=${item}>${item}</li>`)}
              </ul>
            </div>
          </article>
        </aside>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-kicker">What I can help with</p>
          <h2>Backend work packaged as clear problem areas.</h2>
          <p>I structured the site more like a mature product or course landing page: each block explains a concrete area of value instead of acting as decoration.</p>
        </div>
        <div className="grid grid-3">
          ${homeData.features.map(([label, title, text]) => html`
            <article key=${label} className="card feature-card">
              <span className="label">${label}</span>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="projects-preview">
        <div className="section-head split-head">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Projects presented as case-study style summaries.</h2>
          </div>
          <a className="text-link" href="projects.html">Open full portfolio</a>
        </div>
        <div className="project-preview-grid">
          ${homeData.previewProjects.map((project) => html`
            <article key=${project.title} className="card project-preview">
              <div className="project-preview-top">
                <img src=${project.icon} alt=${project.alt} className="project-icon" />
                <span className="pill">${project.pill}</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.text}</p>
              <ul className="mini-list">
                ${project.items.map((item) => html`<li key=${item}>${item}</li>`)}
              </ul>
            </article>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">Engineering principles</p>
          <h2>What I consider good backend work.</h2>
        </div>
        <div className="principles-grid">
          ${homeData.principles.map(([title, text]) => html`
            <article key=${title} className="card principle">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">Process</p>
          <h2>How I usually approach backend work.</h2>
        </div>
        <div className="timeline">
          ${homeData.process.map(([step, title, text]) => html`
            <article key=${step} className="card timeline-item">
              <span className="timeline-step">${step}</span>
              <div>
                <h3>${title}</h3>
                <p>${text}</p>
              </div>
            </article>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">Technology map</p>
          <h2>Tools and areas I work with.</h2>
        </div>
        <div className="stack-board">
          ${homeData.stackGroups.map(([title, chips]) => html`
            <article key=${title} className="card stack-group">
              <h3>${title}</h3>
              <div className="chip-row">
                ${chips.map((chip) => html`<span key=${chip}>${chip}</span>`)}
              </div>
            </article>
          `)}
        </div>
      </section>

      <section className="section final-cta">
        <div className="card cta-panel">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>If you need backend development that looks serious in code as well as presentation, that is the work I focus on.</h2>
            <p>Use the contact page for direct communication, or go to the projects page for repositories and detailed project context.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="contacts.html">Open Contacts</a>
            <a className="button button-secondary" href="projects.html">See Project Details</a>
          </div>
        </div>
      </section>

      ${siteFoot}
    </main>
  `;
}

function ProjectsPage() {
  return html`
    <main className="page-shell">
      <${Header} title="Selected Projects" nav=${projectsData.nav} />

      <section className="hero card">
        <div className="hero-copy">
          <p className="section-kicker">Portfolio</p>
          <h1>Projects that show how I approach backend systems in practice.</h1>
          <p>
            Instead of showing only links, this page explains what each project solves, which engineering choices matter,
            and what kind of backend responsibility the project represents.
          </p>
        </div>
        <div className="hero-metrics">
          ${projectsData.metrics.map(([label, value]) => html`
            <article key=${label}>
              <span className="label">${label}</span>
              <strong>${value}</strong>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="cases">
        <div className="section-head">
          <p className="section-kicker">Case studies</p>
          <h2>Three project types, three different backend concerns.</h2>
        </div>

        ${projectsData.cases.map((entry) => html`
          <article key=${entry.title} className="case card">
            <div className="case-side">
              <div className="icon-frame">
                <img src=${entry.icon} alt=${entry.alt} />
              </div>
              <span className="pill">${entry.pill}</span>
              <a className="repo-link" href=${entry.repo} target="_blank" rel="noopener noreferrer">Open Repository</a>
            </div>
            <div className="case-main">
              <h3>${entry.title}</h3>
              <p className="lead">${entry.lead}</p>
              <div className="case-grid">
                ${entry.sections.map(([title, text]) => html`
                  <article key=${title}>
                    <h4>${title}</h4>
                    <p>${text}</p>
                  </article>
                `)}
              </div>
              <div className="chip-row">
                ${entry.chips.map((chip) => html`<span key=${chip}>${chip}</span>`)}
              </div>
            </div>
          </article>
        `)}
      </section>

      <section className="section" id="capabilities">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2>What these projects collectively show.</h2>
        </div>
        <div className="capability-grid">
          ${projectsData.capabilities.map(([title, text]) => html`
            <article key=${title} className="card capability">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="card cta-panel">
          <div>
            <p className="section-kicker">Next step</p>
            <h2>If you want to discuss one of these projects or a similar backend problem, use the contact page.</h2>
          </div>
          <a className="button" href="contacts.html">Open Contacts</a>
        </div>
      </section>

      ${siteFoot}
    </main>
  `;
}

function ContactsPage() {
  return html`
    <main className="page-shell">
      <${Header} title="Contact" nav=${contactsData.nav} />

      <section className="hero card">
        <div>
          <p className="section-kicker">Direct communication</p>
          <h1>Available for backend roles, engineering collaboration, and project discussion.</h1>
          <p>
            If you want to discuss Go development, backend architecture, APIs, service design, or one of the projects from the portfolio,
            choose the platform that is most convenient for you below.
          </p>
        </div>
        <aside className="hero-note">
          <span className="label">Best use cases</span>
          <ul className="compact-list">
            ${contactsData.useCases.map((item) => html`<li key=${item}>${item}</li>`)}
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">Channels</p>
          <h2>Professional and direct ways to reach me.</h2>
        </div>
        <div className="contact-grid">
          ${contactsData.channels.map(([icon, name, meta, encoded]) => html`
            <button
              key=${name}
              className="contact-card"
              onClick=${() => window.open(decodeUrl(encoded), "_blank", "noopener,noreferrer")}
              aria-label=${`Open ${name} profile`}
              type="button"
            >
              <span className="icon-wrap"><img src=${icon} alt=${name} /></span>
              <span className="contact-body">
                <span className="name">${name}</span>
                <span className="meta">${meta}</span>
              </span>
            </button>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="info-grid">
          ${contactsData.infoCards.map((card) => html`
            <article key=${card.title} className="card info-card">
              <p className="section-kicker">${card.kicker}</p>
              <h3>${card.title}</h3>
              ${card.list
                ? html`<ul className="compact-list">${card.list.map((item) => html`<li key=${item}>${item}</li>`)}</ul>`
                : html`<p>${card.text}</p>`}
            </article>
          `)}
        </div>
      </section>

      ${siteFoot}
    </main>
  `;
}

function AppRouter({ page }) {
  if (page === "projects") return html`<${ProjectsPage} />`;
  if (page === "contacts") return html`<${ContactsPage} />`;
  return html`<${HomePage} />`;
}

const container = document.getElementById("app");
const page = container?.dataset.page || "home";

createRoot(container).render(html`<${AppRouter} page=${page} />`);
