import { html } from "../lib/html.js";
import { HomePage } from "../pages/Home/HomePage.js";
import { ProjectsPage } from "../pages/Projects/ProjectsPage.js";
import { ContactsPage } from "../pages/Contacts/ContactsPage.js";

export function AppRouter({ page }) {
  if (page === "projects") return html`<${ProjectsPage} />`;
  if (page === "contacts") return html`<${ContactsPage} />`;
  return html`<${HomePage} />`;
}