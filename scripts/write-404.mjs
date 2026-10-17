// Renders the app's "Page not found" screen to dist/client/404.html so GitHub Pages
// shows the site's own 404 page for unknown URLs. Runs after `vite build`.
import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { default: server } = await import(pathToFileURL(join(root, "dist/server/server.js")).href);
const res = await server.fetch(new Request("http://localhost/this-page-does-not-exist"));
const html = await res.text();
if (!html.includes("Page not found")) {
  console.error(`write-404: unexpected render (status ${res.status})`);
  process.exit(1);
}
await writeFile(join(root, "dist/client/404.html"), html);
console.log(`write-404: wrote dist/client/404.html (status ${res.status}, ${html.length} bytes)`);
