import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceUrl = process.argv[2];
if (!sourceUrl) throw new Error("Usage: node scripts/export-github-pages.mjs <source-url>");

const root = process.cwd();
const output = path.join(root, "docs");
const response = await fetch(sourceUrl);
if (!response.ok) throw new Error(`Failed to fetch source: ${response.status}`);

let html = await response.text();
const cssMatch = html.match(/href="(\/_next\/static\/css\/[^"]+\.css)"/);
if (!cssMatch) throw new Error("Could not locate the rendered stylesheet");

const cssUrl = new URL(cssMatch[1], sourceUrl);
const cssResponse = await fetch(cssUrl);
if (!cssResponse.ok) throw new Error(`Failed to fetch CSS: ${cssResponse.status}`);
let css = await cssResponse.text();

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });

html = html
  .replace(/<link[^>]+(?:modulepreload|preload)[^>]*>/g, "")
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link rel="stylesheet"[^>]*>/, '<link rel="stylesheet" href="./site.css">')
  .replace(/(?:src|href)="\/(?!\/)/g, (match) => match.replace('"/', '"./'))
  .replace(/url\((['"]?)\/(?!\/)/g, "url($1./");

css = css.replace(/url\((['"]?)\/(?!\/)/g, "url($1./");

await writeFile(path.join(output, "index.html"), html);
await writeFile(path.join(output, "site.css"), css);
await writeFile(path.join(output, ".nojekyll"), "");

const rendered = await readFile(path.join(output, "index.html"), "utf8");
if (!rendered.includes("SHINY☆GIRL") || !rendered.includes("無料体験に申し込む")) {
  throw new Error("Export verification failed");
}

console.log(`GitHub Pages export written to ${output}`);
