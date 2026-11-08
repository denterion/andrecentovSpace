import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { byLang, text } from "../../lib/i18n.js";
import { getProject } from "../Projects/projectsData.js";

const copy = {
  ru: {
    back: "Назад к проектам",
    overview: "Обзор",
    capabilities: "Что реализовано",
    flow: "Архитектура в одном взгляде",
    stack: "Технологии",
    source: "Описание составлено по README и исходному коду проекта.",
    unavailable: "Проект не найден",
  },
  en: {
    back: "Back to projects",
    overview: "Overview",
    capabilities: "What is implemented",
    flow: "Architecture at a glance",
    stack: "Technology stack",
    source: "This description is grounded in the project README and source code.",
    unavailable: "Project not found",
  },
};

export function ProjectPage({ slug, lang, setLang }) {
  const project = getProject(slug);
  const c = copy[lang];
  const labels = text[lang];
  const nav = [
    { href: "index.html", label: labels.home },
    { href: "projects.html", label: labels.projects },
    { href: "contacts.html", label: labels.contact },
  ];

  if (!project) return html`
    <main className="page-shell parchment-page"><${Header} nav=${nav} lang=${lang} setLang=${setLang} /><section className="page-intro"><h1>${c.unavailable}</h1></section></main>
  `;

  return html`
    <main className=${`page-shell inner-page parchment-page project-detail project-${project.slug}`}>
      <${Header} nav=${nav} lang=${lang} setLang=${setLang} />
      <section className="detail-shell">
        <a className="detail-back" href="projects.html">← ${c.back}</a>
        <div className="detail-layout">
          <aside className="detail-card-column">
            <div className="detail-tarot">
              <span>${project.arcana}</span>
              <img src=${project.image} alt=${`${project.name} — ${byLang(project.tarot, lang)}`} />
              <strong>${byLang(project.tarot, lang)}</strong>
            </div>
            <p className="eyebrow">${byLang(project.kind, lang)}</p>
            <h2>${project.name}</h2>
          </aside>

          <article className="detail-content">
            <div className="detail-heading">
              <div>
                <p className="eyebrow">${byLang(project.kind, lang)}</p>
                <h1>${project.name}</h1>
              </div>
              ${project.detailImage ? html`<img className="detail-brand-image" src=${project.detailImage} alt="" />` : null}
            </div>
            <p className="detail-tagline">${byLang(project.tagline, lang)}</p>
            <p className="detail-description">${byLang(project.description, lang)}</p>

            <div className="detail-section-grid">
              <section>
                <p className="detail-label">✦ ${c.capabilities}</p>
                <ul className="detail-facts">
                  ${project.facts[lang].map((fact) => html`<li key=${fact}>${fact}</li>`)}
                </ul>
              </section>
              <section>
                <p className="detail-label">✦ ${c.stack}</p>
                <div className="detail-stack">
                  ${project.stack.map((item) => html`<span key=${item}>${item}</span>`)}
                </div>
              </section>
            </div>

            <section className="detail-flow-section">
              <p className="detail-label">✦ ${c.flow}</p>
              <div className="detail-flow">
                ${project.flow.map((item, index) => html`
                  <span key=${item}>${item}</span>${index < project.flow.length - 1 ? html`<i aria-hidden="true">→</i>` : null}
                `)}
              </div>
            </section>

            ${project.slug === "tikideco" ? html`
              <p className="project-boundary">${lang === "ru"
                ? "TIDE — тестовый прототип в Sepolia. Токен не продаётся, не имеет заявленной денежной стоимости, не развёрнут в mainnet и не проходил независимый аудит."
                : "TIDE is a Sepolia testnet prototype. It is not sold, has no stated monetary value, is not deployed on mainnet, and has not completed an independent audit."}</p>
            ` : null}

            <div className="detail-actions">
              <a className="detail-primary" href=${project.link} target="_blank" rel="noopener noreferrer">
                ${labels[project.action]} <span aria-hidden="true">↗</span>
              </a>
              <small>${c.source}</small>
            </div>
          </article>
        </div>
      </section>
      <${Footer} lang=${lang} />
    </main>
  `;
}
