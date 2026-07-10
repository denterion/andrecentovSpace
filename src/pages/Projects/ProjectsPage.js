import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { projectsData } from "./projectsData.js";
import { t, translateTree } from "../../lib/i18n.js";

export function ProjectsPage({ lang, setLang }) {
  const data = translateTree(projectsData, lang);

  return html`
    <main className="page-shell">
      <${Header} title=${t("Selected Projects", lang)} nav=${data.nav} lang=${lang} setLang=${setLang} />

      <section className="hero card">
        <div className="hero-copy">
          <p className="section-kicker">${t("Portfolio", lang)}</p>
          <h1>${t("Backend projects with code a reviewer can inspect.", lang)}</h1>
          <p>
            ${t("Each case explains the problem, the architecture direction, and the repository evidence that matters for a recruiter, hiring manager, or technical interviewer.", lang)}
          </p>
        </div>
        <div className="hero-metrics">
          ${data.metrics.map(([label, value]) => html`
            <article key=${label}>
              <span className="label">${label}</span>
              <strong>${value}</strong>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="review-guide">
        <div className="section-head">
          <p className="section-kicker">${t("Review guide", lang)}</p>
          <h2>${t("How to evaluate the repositories quickly.", lang)}</h2>
          <p>${t("This guide is for recruiters and technical reviewers who want a fast route through backend evidence instead of opening every file at random.", lang)}</p>
        </div>
        <div className="review-grid">
          ${data.reviewChecklist.map(([title, text]) => html`
            <article key=${title} className="card review-card">
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `)}
        </div>
      </section>

      <section className="section" id="cases">
        <div className="section-head">
          <p className="section-kicker">${t("Case studies", lang)}</p>
          <h2>${t("Three projects mapped to common backend responsibilities.", lang)}</h2>
        </div>

        ${data.cases.map((entry) => html`
          <article key=${entry.title} className="case card">
            <div className="case-side">
              <div className="icon-frame">
                <img src=${entry.icon} alt=${entry.alt} />
              </div>
              <span className="pill">${entry.pill}</span>
              <a className="repo-link" href=${entry.repo} target="_blank" rel="noopener noreferrer">${t("Open Repository", lang)}</a>
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
          <p className="section-kicker">${t("Capabilities", lang)}</p>
          <h2>${t("What these projects collectively show.", lang)}</h2>
        </div>
        <div className="capability-grid">
          ${data.capabilities.map(([title, text]) => html`
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
            <p className="section-kicker">${t("Next step", lang)}</p>
            <h2>${t("Want to review the code or discuss a backend role?", lang)}</h2>
            <p>${t("The contact page has direct links for email, LinkedIn, hh.ru, Telegram, and GitHub.", lang)}</p>
          </div>
          <a className="button" href="contacts.html">${t("Open Contacts", lang)}</a>
        </div>
      </section>

      <${Footer} />
    </main>
  `;
}
