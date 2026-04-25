import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { projectsData } from "./projectsData.js";

export function ProjectsPage() {
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

      <${Footer} />
    </main>
  `;
}