import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { projects } from "../src/pages/Projects/projectsData.js";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

assert.equal(projects.length, 5);
for (const project of projects) {
  const page = await read(project.page);
  assert.match(page, new RegExp(`data-project="${project.slug}"`));
  await read(project.image);
}

assert.match(await read("index.html"), /Andrew Centov/);
const contacts = await read("src/pages/Contacts/contactsData.js");
assert.doesNotMatch(contacts, /Email|Telegram|mailto:|t\.me\//);
console.log("Site checks passed: five project pages, project art, pseudonym, and contacts.");
