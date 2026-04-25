import { html } from "../lib/html.js";

export function Header({ title, nav }) {
  return html`
    <header className="site-header">
      <a className="brand" href="index.html">
        <span className="brand-kicker">Andre</span>
        <span className="brand-title">${title}</span>
      </a>
      <nav className="site-nav">
        ${nav.map(
          (item) => html`<a key=${item.href} href=${item.href}>${item.label}</a>`
        )}
      </nav>
    </header>
  `;
}