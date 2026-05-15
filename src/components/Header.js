import { html } from "../lib/html.js";

export function Header({ title, nav, lang, setLang }) {
  return html`
    <header className="site-header">
      <a className="brand" href="index.html">
        <span className="brand-kicker">Andre</span>
        <span className="brand-title">${title}</span>
      </a>
      <div className="header-actions">
        <nav className="site-nav">
          ${nav.map(
            (item) => html`<a key=${item.href} href=${item.href}>${item.label}</a>`
          )}
        </nav>
        <div className="language-switch" aria-label="Language switch">
          <span className=${lang === "ru" ? "is-active" : ""}>RU</span>
          <button
            type="button"
            className="language-toggle"
            aria-label="Switch language"
            aria-pressed=${lang === "en"}
            onClick=${() => setLang(lang === "ru" ? "en" : "ru")}
          >
            <span className="language-toggle-thumb"></span>
          </button>
          <span className=${lang === "en" ? "is-active" : ""}>ENG</span>
        </div>
      </div>
    </header>
  `;
}
