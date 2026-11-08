import { html } from "../lib/html.js";
import { useEffect, useState } from "react";
import { HomePage } from "../pages/Home/HomePage.js";
import { ProjectsPage } from "../pages/Projects/ProjectsPage.js";
import { ContactsPage } from "../pages/Contacts/ContactsPage.js";

export function AppRouter({ page }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("site-lang");
    if (saved === "ru" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
  });

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
    document.title = page === "projects"
      ? (lang === "ru" ? "Проекты | Андрей Проценко" : "Projects | Andrey Protsenko")
      : page === "contacts"
        ? (lang === "ru" ? "Контакты | Андрей Проценко" : "Contact | Andrey Protsenko")
        : (lang === "ru" ? "Андрей Проценко | Backend-инженер" : "Andrey Protsenko | Backend Engineer");
  }, [lang, page]);

  if (page === "projects") return html`<${ProjectsPage} lang=${lang} setLang=${setLang} />`;
  if (page === "contacts") return html`<${ContactsPage} lang=${lang} setLang=${setLang} />`;
  return html`<${HomePage} lang=${lang} setLang=${setLang} />`;
}
