import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { TarotCard } from "../../components/TarotCard.js";
import { projects } from "../Projects/projectsData.js";
import { text } from "../../lib/i18n.js";

const copy = {
  ru: {
    role: "Backend-инженер · Go · продуктовые системы",
    title: "Andrew\nCentov",
    intro: "Проектирую backend-системы и цифровые продукты — от API и инфраструктуры до запуска и развития проекта.",
    explore: "Смотреть проекты",
    contact: "Связаться",
    selected: "Избранные проекты",
    projectLead: "Пять проектов — пять арканов. У каждого своя задача, характер и инженерный ритм.",
    aboutLabel: "Подход",
    aboutTitle: "Технология должна прояснять идею, а не заслонять её.",
    aboutText: "Мой основной стек — Go, PostgreSQL, Docker, Kafka и gRPC. Я строю понятные границы сервисов, продумываю данные и эксплуатацию заранее, а продуктовые решения связываю с реальным пользовательским сценарием.",
    principles: ["Ясная архитектура", "Предсказуемое поведение", "Проверяемая поставка"],
  },
  en: {
    role: "Backend engineer · Go · product systems",
    title: "Andrew\nCentov",
    intro: "I design backend systems and digital products—from APIs and infrastructure to launch and product growth.",
    explore: "Explore projects",
    contact: "Contact me",
    selected: "Selected projects",
    projectLead: "Five projects, five arcana. Each has its own purpose, character, and engineering rhythm.",
    aboutLabel: "Approach",
    aboutTitle: "Technology should clarify the idea, not eclipse it.",
    aboutText: "My core stack is Go, PostgreSQL, Docker, Kafka, and gRPC. I build clear service boundaries, design data and operations early, and connect product decisions to real user journeys.",
    principles: ["Clear architecture", "Predictable behavior", "Verifiable delivery"],
  },
};

export function HomePage({ lang, setLang }) {
  const c = copy[lang];
  const labels = text[lang];
  const nav = [
    { href: "#projects", label: labels.projects },
    { href: "#about", label: labels.about },
    { href: "contacts.html", label: labels.contact },
  ];

  return html`
    <main className="page-shell">
      <${Header} nav=${nav} lang=${lang} setLang=${setLang} />

      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">${c.role}</p>
          <h1>${c.title.split("\n").map((line) => html`<span key=${line}>${line}</span>`)}</h1>
          <p className="hero-intro">${c.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">${c.explore} <span aria-hidden="true">✦</span></a>
            <a className="button button-ghost" href="contacts.html">${c.contact}</a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>✦</span></div>
      </section>

      <section className="paper-section" id="projects">
        <div className="section-title ornate-title">
          <span aria-hidden="true">✦</span>
          <div><p className="eyebrow">Portfolio</p><h2>${c.selected}</h2></div>
          <span aria-hidden="true">✦</span>
        </div>
        <p className="section-lead">${c.projectLead}</p>
        <div className="tarot-grid">
          ${projects.map((project) => html`<${TarotCard} key=${project.name} project=${project} lang=${lang} compact=${true} />`)}
        </div>
        <a className="center-link" href="projects.html">${labels.projects} <span aria-hidden="true">→</span></a>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">${c.aboutLabel}</p>
          <h2>${c.aboutTitle}</h2>
        </div>
        <div>
          <p>${c.aboutText}</p>
          <ul>${c.principles.map((item) => html`<li key=${item}>${item}</li>`)}</ul>
        </div>
      </section>

      <${Footer} lang=${lang} />
    </main>
  `;
}
