import { html } from "../lib/html.js";

export function Header({ title, nav, lang, setLang }) {
  return html`
    <header className="site-header">
      <a className="brand" href="index.html">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span className="brand-title">andrecentov.space</span>
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label=${lang === "ru" ? "Основная навигация" : "Primary navigation"}>
          ${nav.map(
            (item) => html`<a key=${item.href} href=${item.href}>${item.label}</a>`
          )}
        </nav>
        <div className="language-switch" aria-label=${lang === "ru" ? "Выбор языка" : "Language selector"}>
          <button
            type="button"
            className=${lang === "ru" ? "is-active" : ""}
            aria-pressed=${lang === "ru"}
            onClick=${() => setLang("ru")}
          >RU</button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className=${lang === "en" ? "is-active" : ""}
            aria-pressed=${lang === "en"}
            onClick=${() => setLang("en")}
          >EN</button>
        </div>
      </div>
    </header>
  `;
}
