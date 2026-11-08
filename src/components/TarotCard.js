import { html } from "../lib/html.js";
import { byLang, text } from "../lib/i18n.js";

export function TarotCard({ project, lang, compact = false }) {
  const labels = text[lang];

  return html`
    <article className=${`tarot-card ${compact ? "is-compact" : ""}`}>
      <div className="tarot-frame" aria-hidden="true">
        <span className="tarot-number">${project.arcana}</span>
        <span className="tarot-rays"></span>
        <span className="tarot-symbol">${project.symbol}</span>
        <span className="tarot-stars">✦ · ✧ · ✦</span>
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
        <a href=${project.link} target="_blank" rel="noopener noreferrer">
          ${labels[project.action]} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `;
}
