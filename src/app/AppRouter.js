import { html } from "../lib/html.js";
import { useEffect, useState } from "react";
import { HomePage } from "../pages/Home/HomePage.js";
import { ProjectsPage } from "../pages/Projects/ProjectsPage.js";
import { ContactsPage } from "../pages/Contacts/ContactsPage.js";

export function AppRouter({ page }) {
  const [lang, setLang] = useState(() => localStorage.getItem("site-lang") || "en");

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  if (page === "projects") return html`<${ProjectsPage} lang=${lang} setLang=${setLang} />`;
  if (page === "contacts") return html`<${ContactsPage} lang=${lang} setLang=${setLang} />`;
  return html`<${HomePage} lang=${lang} setLang=${setLang} />`;
}
