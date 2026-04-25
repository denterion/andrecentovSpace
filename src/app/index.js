import { createRoot } from "react-dom/client";
import { html } from "../lib/html.js";
import { AppRouter } from "./AppRouter.js";

const container = document.getElementById("app");
const page = container?.dataset.page || "home";

createRoot(container).render(html`<${AppRouter} page=${page} />`);

console.log("APP started")