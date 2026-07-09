import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { contactsData } from "./contactsData.js";
import { t, translateTree } from "../../lib/i18n.js";

export function ContactsPage({ lang, setLang }) {
  const data = translateTree(contactsData, lang);

  return html`
    <main className="page-shell">
      <${Header} title=${t("Contact", lang)} nav=${data.nav} lang=${lang} setLang=${setLang} />

      <section className="hero card">
        <div>
          <p className="section-kicker">${t("Direct communication", lang)}</p>
          <h1>${t("Available for Go backend roles and technical conversations.", lang)}</h1>
          <p>
            ${t("For recruiting, project review, or engineering collaboration, use the channel that fits your workflow. Email, LinkedIn, hh.ru, GitHub, Telegram, and Discord are all listed directly.", lang)}
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
          ${data.channels.map((channel) => html`
            <a
              href=${channel.href}
              key=${channel.name}
              className="contact-card"
              target=${channel.external ? "_blank" : undefined}
              rel=${channel.external ? "noopener noreferrer" : undefined}
              aria-label=${`Open ${channel.name} profile`}
            >
              <span className="icon-wrap">
                ${channel.icon
                  ? html`<img src=${channel.icon} alt=${channel.name} />`
                  : html`<span className="mail-icon" aria-hidden="true">@</span>`}
              </span>
              <span className="contact-body">
                <span className="name">${channel.name}</span>
                <span className="meta">${channel.meta}</span>
              </span>
            </a>
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
