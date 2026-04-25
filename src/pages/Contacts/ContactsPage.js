import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { contactsData } from "./contactsData.js";
import { decodeUrl } from "../../utils/decodeUrl.js";

export function ContactsPage() {
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

      <${Footer} />
    </main>
  `;
}