export const projectsData = {
  nav: [
    { href: "index.html", label: "Home" },
    { href: "#cases", label: "Case Studies" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "contacts.html", label: "Contact" },
  ],
  metrics: [
    ["Primary role", "Go backend developer"],
    ["Core stack", "Go / PostgreSQL / Docker"],
    ["Review focus", "APIs, data, service boundaries"],
  ],
  cases: [
    {
      icon: "images/wise.png",
      alt: "Task tracker API icon",
      pill: "REST API",
      repo: "https://github.com/denterion/golang-Tack-tracker",
      title: "Task Tracker API",
      lead: "A Go task-tracking backend built around authenticated REST endpoints, PostgreSQL persistence, Swagger documentation, and Docker-based local delivery.",
      sections: [
        ["Problem", "Model a practical task-management backend where users can authenticate, create tasks, update state, and work with durable PostgreSQL-backed data."],
        ["Architecture", "The project separates routing, handlers, business logic, persistence, configuration, and Docker delivery so the request flow is easier to review."],
        ["What to inspect", "Review the JWT authentication flow, Swagger contracts, PostgreSQL schema, Docker Compose setup, and how task operations move through the service layers."],
      ],
      chips: ["Go", "REST", "JWT", "PostgreSQL", "Docker", "Swagger"],
    },
    {
      icon: "images/eternity.png",
      alt: "Job aggregator icon",
      pill: "Data aggregation",
      repo: "https://github.com/denterion/job-aggregator",
      title: "Job Aggregator",
      lead: "A Go backend service focused on collecting job listings from external sources, normalizing inconsistent data, and exposing cleaner search-oriented results.",
      sections: [
        ["Problem", "External job data is inconsistent, so the backend needs ingestion logic, a shared vacancy model, and output that remains useful when sources differ."],
        ["Architecture", "The project keeps provider-specific parsing separate from the shared listing representation, making future source changes easier to isolate."],
        ["What to inspect", "Review the collection flow, normalization model, filtering/search output, and the boundaries between source-specific logic and core service behavior."],
      ],
      chips: ["Go", "Aggregation", "Parsing", "External APIs", "Search"],
    },
    {
      icon: "images/flower.png",
      alt: "Event-driven notification platform icon",
      pill: "Event-driven platform",
      repo: "https://github.com/denterion/Event-Driven-Notification-Platform",
      title: "Event-Driven Notification Platform",
      lead: "A Go notification platform organized around Kafka events, gRPC service communication, and delivery workflows across integration boundaries.",
      sections: [
        ["Problem", "Notification systems need coordination between event producers, consumers, service contracts, and delivery channels without mixing every concern together."],
        ["Architecture", "The project uses Kafka-oriented event flow and gRPC communication to separate responsibilities while keeping delivery workflows explicit."],
        ["What to inspect", "Review message flow, service boundaries, gRPC contracts, delivery handling, and the way asynchronous work is separated from synchronous APIs."],
      ],
      chips: ["Go", "Kafka", "gRPC", "Events", "Docker"],
    },
  ],
  capabilities: [
    ["API and contract design", "REST, gRPC, JWT, Swagger, and handler structure that make backend behavior easier to verify."],
    ["Persistence and schema work", "PostgreSQL-backed design with attention to data shape, consistency, and maintainable service access."],
    ["External data handling", "Parsing, ingestion, and normalization flows that keep messy input behind stable backend contracts."],
    ["Distributed system thinking", "Kafka, gRPC, events, and service boundaries handled as practical workflow concerns rather than buzzwords."],
  ],
};
