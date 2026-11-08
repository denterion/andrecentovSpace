import { html } from "../../lib/html.js";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { channels } from "./contactsData.js";
import { decodeUrl } from "../../utils/decodeUrl.js";
import { byLang, text } from "../../lib/i18n.js";

const copy = {
  ru: {
    eyebrow: "Контакт · сотрудничество",
    title: "Давайте создадим что-нибудь устойчивое.",
    lead: "Открыт к backend-задачам, продуктовой разработке и техническому сотрудничеству. Выберите удобный канал — отвечу по существу.",
    availability: "Открыт к предложениям",
  },
  en: {
    eyebrow: "Contact · collaboration",
    title: "Let’s build something that lasts.",
    lead: "Available for backend work, product engineering, and technical collaboration. Choose a convenient channel and I’ll get back to you directly.",
    availability: "Open to opportunities",
  },
};

export function ContactsPage({ lang, setLang }) {
  const c = copy[lang];
  const labels = text[lang];
  const nav = [
    { href: "index.html", label: labels.home },
    { href: "projects.html", label: labels.projects },
  ];

  return html`
    <main className="page-shell inner-page">
      <${Header} nav=${nav} lang=${lang} setLang=${setLang} />
      <section className="contact-hero">
        <div>
          <p className="eyebrow">${c.eyebrow}</p>
          <h1>${c.title}</h1>
          <p>${c.lead}</p>
          <span className="availability"><i aria-hidden="true"></i>${c.availability}</span>
        </div>
        <span className="contact-sun" aria-hidden="true">☉</span>
      </section>
      <section className="contact-grid">
        ${channels.map((channel) => html`
          <a key=${channel.name} href=${decodeUrl(channel.url)} target="_blank" rel="noopener noreferrer" className="contact-card">
            <span className="contact-icon">
              ${channel.icon ? html`<img src=${channel.icon} alt="" />` : html`<span aria-hidden="true">@</span>`}
            </span>
            <span><strong>${channel.name}</strong><small>${byLang(channel.meta, lang)}</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        `)}
      </section>
      <${Footer} lang=${lang} />
    </main>
  `;
}
