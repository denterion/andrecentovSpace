import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { homeData } from "./homeData.js";
import { t, translateTree } from "../../lib/i18n.js";

export function HomePage({ lang, setLang }) {
  const data = translateTree(homeData, lang);

  return html`
    <main className="page-shell">
      <${Header} title=${t("Backend Go Developer", lang)} nav=${data.nav} lang=${lang} setLang=${setLang} />

      <section className="hero">
        <div className="hero-main card">
          <p className="section-kicker">${t("Backend engineering for product teams", lang)}</p>
          <h1>${t("I design and build backend systems that stay understandable as the product grows.", lang)}</h1>
          <p className="hero-text">
            ${t("My work is centered on Go services, APIs, PostgreSQL, and service architecture with a practical focus on reliability, maintainability, and clear delivery. The goal is not just to make something work, but to make it stable enough to grow.", lang)}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="projects.html">${t("View Selected Projects", lang)}</a>
            <a className="button button-secondary" href="contacts.html">${t("Discuss Collaboration", lang)}</a>
          </div>
          <div className="hero-points">
            ${data.heroPoints.map((point) => html`<span key=${point}>${point}</span>`)}
          </div>
        </div>

        <aside className="hero-side">
          ${data.sideCards.map((card) => html`
            <article key=${card.title} className="card stat-card">
              <span className="label">${card.label}</span>
              <strong>${card.title}</strong>
              <p>${card.text}</p>
            </article>
          `)}
          <article className="card profile-card">
            <img src="images/avatar.png" alt="Portrait of Andrew Protsenko" className="portrait" />
            <div>
              <p className="label">${t("Work profile", lang)}</p>
              <ul className="compact-list">
                ${data.profileItems.map((item) => html`<li key=${item}>${item}</li>`)}
              </ul>
            </div>
          </article>
        </aside>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-kicker">${t("What I can help with", lang)}</p>
          <h2>${t("Backend work packaged as clear problem areas.", lang)}</h2>
          <p>${t("I structured the site more like a mature product or course landing page: each block explains a concrete area of value instead of acting as decoration.", lang)}</p>
        </div>
        <div className="grid grid-3">
          ${data.features.map(([label, title, text]) => html`
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
            <p className="section-kicker">${t("Selected work", lang)}</p>
            <h2>${t("Projects presented as case-study style summaries.", lang)}</h2>
          </div>
          <a className="text-link" href="projects.html">${t("Open full portfolio", lang)}</a>
        </div>
        <div className="project-preview-grid">
          ${data.previewProjects.map((project) => html`
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
              <a className="project-repo-link" href=${project.repo} target="_blank" rel="noopener noreferrer">${t("Open Repository", lang)}</a>
            </article>
          `)}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">${t("Engineering principles", lang)}</p>
          <h2>${t("What I consider good backend work.", lang)}</h2>
        </div>
        <div className="principles-grid">
          ${data.principles.map(([title, text]) => html`
            <article key=${title} className="card principle">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">${t("Process", lang)}</p>
          <h2>${t("How I usually approach backend work.", lang)}</h2>
        </div>
        <div className="timeline">
          ${data.process.map(([step, title, text]) => html`
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
          <p className="section-kicker">${t("Technology map", lang)}</p>
          <h2>${t("Tools and areas I work with.", lang)}</h2>
        </div>
        <div className="stack-board">
          ${data.stackGroups.map(([title, chips]) => html`
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
            <p className="section-kicker">${t("Contact", lang)}</p>
            <h2>${t("If you need backend development that looks serious in code as well as presentation, that is the work I focus on.", lang)}</h2>
            <p>${t("Use the contact page for direct communication, or go to the projects page for repositories and detailed project context.", lang)}</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="contacts.html">${t("Open Contacts", lang)}</a>
            <a className="button button-secondary" href="projects.html">${t("See Project Details", lang)}</a>
          </div>
        </div>
      </section>

      <${Footer} />
    </main>
  `;
}
