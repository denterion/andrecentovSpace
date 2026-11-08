import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { TarotCard } from "../../components/TarotCard.js";
import { projects } from "./projectsData.js";
import { text } from "../../lib/i18n.js";

const copy = {
  ru: {
    eyebrow: "Пять проектов · пять арканов",
    title: "Проекты",
    lead: "Каждая карта показывает не просто технологический стек, а характер задачи: создавать, исследовать, соединять, направлять или собирать систему воедино.",
    note: "От API и событийных сервисов до продуктовых платформ и Web3 — всегда с ясной архитектурой и проверяемым результатом.",
  },
  en: {
    eyebrow: "Five projects · five arcana",
    title: "Projects",
    lead: "Each card represents more than a technology stack. It captures the nature of the work: creating, exploring, connecting, guiding, or bringing a system together.",
    note: "From APIs and event-driven services to product platforms and Web3—always with clear architecture and a verifiable result.",
  },
};

export function ProjectsPage({ lang, setLang }) {
  const c = copy[lang];
  const labels = text[lang];
  const nav = [
    { href: "index.html", label: labels.home },
    { href: "contacts.html", label: labels.contact },
  ];

  return html`
    <main className="page-shell inner-page parchment-page project-gallery-page">
      <${Header} nav=${nav} lang=${lang} setLang=${setLang} />
      <section className="page-intro">
        <p className="eyebrow">${c.eyebrow}</p>
        <h1>${c.title}</h1>
        <p>${c.lead}</p>
      </section>
      <section className="project-list" aria-label=${labels.projects}>
        ${projects.map((project) => html`<${TarotCard} key=${project.name} project=${project} lang=${lang} compact=${true} />`)}
      </section>
      <aside className="project-note">✦ ${c.note}</aside>
      <${Footer} lang=${lang} />
    </main>
  `;
}
