export const projectsData = {
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