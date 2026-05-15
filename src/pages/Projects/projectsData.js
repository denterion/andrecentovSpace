export const projectsData = {
  nav: [
    { href: "index.html", label: "Home" },
    { href: "#cases", label: "Case Studies" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "contacts.html", label: "Contact" },
  ],
  metrics: [
    ["Main focus", "Backend architecture"],
    ["Typical stack", "Go / PostgreSQL / Kafka"],
    ["Priority", "Clear service boundaries"],
  ],
  cases: [
    {
      icon: "images/wise.png",
      alt: "Task tracker API icon",
      pill: "REST API",
      repo: "https://github.com/denterion/golang-Tack-tracker",
      title: "Task Tracker API",
      lead: "A Go task-tracking backend built around authenticated REST endpoints, PostgreSQL persistence, structured request handling, and Docker-based delivery.",
      sections: [
        ["What this project demonstrates", "Building a practical CRUD-style product service with clear request flow, authentication behavior, and task data that remains easy to reason about."],
        ["Important engineering choices", "JWT-based auth, explicit API contracts, PostgreSQL-backed storage, and service organization that separates routing, business logic, and persistence concerns."],
        ["Why it matters", "It is a direct example of everyday backend product work: durable data, predictable endpoints, and code structure that another engineer can extend."],
      ],
      chips: ["Go", "REST", "JWT", "PostgreSQL", "Docker"],
    },
    {
      icon: "images/eternity.png",
      alt: "Job aggregator icon",
      pill: "Data aggregation",
      repo: "https://github.com/denterion/job-aggregator",
      title: "Job Aggregator",
      lead: "A backend service for collecting job listings from multiple sources, normalizing them into a consistent model, and making search results easier to consume.",
      sections: [
        ["What this project demonstrates", "Designing backend data flow where the main work is ingestion, normalization, filtering, and returning a useful result instead of simply storing records."],
        ["Important engineering choices", "Source-specific collection logic, shared listing representation, and service boundaries that make it possible to add or adjust providers without rewriting the core flow."],
        ["Why it matters", "Aggregation projects show how I handle messy external data, consistent output contracts, and backend behavior that has to stay useful when inputs vary."],
      ],
      chips: ["Go", "Aggregation", "REST", "Parsing", "Search"],
    },
    {
      icon: "images/flower.png",
      alt: "Event-driven notification platform icon",
      pill: "Event-driven platform",
      repo: "https://github.com/denterion/Event-Driven-Notification-Platform",
      title: "Event-Driven Notification Platform",
      lead: "A notification platform organized around asynchronous events, service-to-service communication, and delivery flows that are built to handle integration boundaries.",
      sections: [
        ["What this project demonstrates", "Working on backend communication where the main challenge is coordinating events, consumers, contracts, and delivery behavior across moving parts."],
        ["Important engineering choices", "Asynchronous messaging, explicit service boundaries, delivery-oriented workflow design, and implementation choices shaped by integration between components."],
        ["Why it matters", "It shows how I approach systems that have moved beyond a single service and now depend on coordination, retries, and clear ownership of responsibilities."],
      ],
      chips: ["Go", "Kafka", "gRPC", "Events", "Docker"],
    },
  ],
  capabilities: [
    ["API and contract design", "Interfaces that stay understandable for both clients and future contributors."],
    ["Persistence and schema work", "Database-backed design with attention to structure, consistency, and maintainability."],
    ["External data handling", "Ingestion and normalization flows that keep inconsistent source data behind stable backend contracts."],
    ["Distributed system thinking", "Handling service boundaries, asynchronous communication, and backend interactions realistically."],
  ],
};
