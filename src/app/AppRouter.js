import { html } from "../lib/html.js";
import { useEffect, useState } from "react";
import { HomePage } from "../pages/Home/HomePage.js";
import { ProjectsPage } from "../pages/Projects/ProjectsPage.js";
import { ContactsPage } from "../pages/Contacts/ContactsPage.js";
import { ProjectPage } from "../pages/Project/ProjectPage.js";
import { getProject } from "../pages/Projects/projectsData.js";

export function AppRouter({ page, slug }) {
  const projectName = getProject(slug)?.name;
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("site-lang");
    if (saved === "ru" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
  });

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
    document.title = page === "projects"
      ? (lang === "ru" ? "Проекты | Andrew Centov" : "Projects | Andrew Centov")
      : page === "contacts"
        ? (lang === "ru" ? "Контакты | Andrew Centov" : "Contact | Andrew Centov")
        : page === "project"
          ? `${projectName || "Project"} | Andrew Centov`
          : (lang === "ru" ? "Andrew Centov | Backend-инженер" : "Andrew Centov | Backend Engineer");
  }, [lang, page, projectName]);

  if (page === "projects") return html`<${ProjectsPage} lang=${lang} setLang=${setLang} />`;
  if (page === "contacts") return html`<${ContactsPage} lang=${lang} setLang=${setLang} />`;
  if (page === "project") return html`<${ProjectPage} slug=${slug} lang=${lang} setLang=${setLang} />`;
  return html`<${HomePage} lang=${lang} setLang=${setLang} />`;
}
