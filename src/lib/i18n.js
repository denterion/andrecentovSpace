export const text = {
  ru: {
    home: "Главная",
    projects: "Проекты",
    about: "Обо мне",
    contact: "Контакты",
    open: "Открыть проект",
    repository: "Репозиторий",
    details: "Подробнее",
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    open: "Open project",
    repository: "Repository",
    details: "View details",
  },
};

export const byLang = (value, lang) => value[lang] ?? value.en;
