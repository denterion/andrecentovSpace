import { html } from "../lib/html.js";
import { byLang, text } from "../lib/i18n.js";

function openCard(event, href) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  event.preventDefault();
  const card = event.currentTarget;
  card.classList.add("is-opening");
  document.body.classList.add("card-transitioning");
  window.setTimeout(() => window.location.assign(href), 620);
}

export function TarotCard({ project, lang, compact = false }) {
  const labels = text[lang];

  return html`
    <a
      className=${`tarot-card ${compact ? "is-compact" : ""}`}
      href=${project.page}
      aria-label=${`${labels.details}: ${project.name}`}
      onClick=${(event) => openCard(event, project.page)}
    >
      <div className="tarot-frame" aria-hidden="true">
        <span className="tarot-number">${project.arcana}</span>
        <img src=${project.image} alt="" loading="lazy" />
        <span className="tarot-glow"></span>
        <span className="tarot-name">${byLang(project.tarot, lang)}</span>
      </div>
      <div className="tarot-copy">
        <p className="eyebrow">${byLang(project.kind, lang)}</p>
        <h3>${project.name}</h3>
        ${compact ? null : html`<p>${byLang(project.description, lang)}</p>`}
        ${compact ? null : html`
          <div className="chip-row">
            ${project.stack.map((item) => html`<span key=${item}>${item}</span>`)}
          </div>
        `}
        <span className="tarot-link">${labels.details} <span aria-hidden="true">→</span></span>
      </div>
      <span className="card-burst" aria-hidden="true"></span>
    </a>
  `;
}
