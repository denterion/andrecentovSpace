import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { contactsData } from "./contactsData.js";
import { decodeUrl } from "../../utils/decodeUrl.js";
import { t, translateTree } from "../../lib/i18n.js";

export function ContactsPage({ lang, setLang }) {
  const data = translateTree(contactsData, lang);

  return html`
    <main className="page-shell">
      <${Header} title=${t("Contact", lang)} nav=${data.nav} lang=${lang} setLang=${setLang} />

      <section className="hero card">
        <div>
          <p className="section-kicker">${t("Direct communication", lang)}</p>
          <h1>${t("Available for backend roles, engineering collaboration, and project discussion.", lang)}</h1>
          <p>
            ${t("If you want to discuss Go development, backend architecture, APIs, service design, or one of the projects from the portfolio, choose the platform that is most convenient for you below.", lang)}
          </p>
        </div>
        <aside className="hero-note">
          <span className="label">${t("Best use cases", lang)}</span>
          <ul className="compact-list">
            ${data.useCases.map((item) => html`<li key=${item}>${item}</li>`)}
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="section-kicker">${t("Channels", lang)}</p>
          <h2>${t("Professional and direct ways to reach me.", lang)}</h2>
        </div>
        <div className="contact-grid">
          ${data.channels.map(([icon, name, meta, encoded]) => html`
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
          ${data.infoCards.map((card) => html`
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
