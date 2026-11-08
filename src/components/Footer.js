import { html } from "../lib/html.js";

export function Footer({ lang = "en" }) {
  return html`
    <footer className="site-footer">
      <span>andrecentov.space</span>
      <span>${lang === "ru" ? "Проектирую системы, которые выдерживают рост." : "Engineering systems that stay clear as they grow."}</span>
    </footer>
  `;
}
