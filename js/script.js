function go(encoded) {
  // убираем пробелы на случай копирования Base64
  const cleaned = encoded.replace(/\s/g, '');
  const url = atob(cleaned); // decode Base64
  window.open(url, '_blank');
}
window.addEventListener("load", () => {
  const runner = document.getElementById("runner");
  const trail = document.getElementById("trail");
  const intro = document.getElementById("introScene");
  const contacts = document.getElementById("contactsFinal");

  if (!runner) return;

  // запуск бега
  setTimeout(() => {
    runner.style.transition = "left 2.8s linear";
    runner.style.left = "140%";

    trail.style.transition = "width 2.8s linear";
    trail.style.width = "100%";
  }, 200);

  // исчезновение сцены
  setTimeout(() => {
    intro.style.transition = "opacity 0.6s ease";
    intro.style.opacity = "0";
  }, 2400);

  // появление контактов
  setTimeout(() => {
    intro.style.display = "none";
    contacts.classList.remove("hidden");
    contacts.style.opacity = "1";
  }, 3000);
});
function scrollToProjects() {
  document.querySelector(".projects-wrapper")
    ?.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".project-section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top * 0.25;
    section.style.backgroundPosition = `center ${offset}px`;
  });
});