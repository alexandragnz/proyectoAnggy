import fs from "node:fs/promises";
import path from "node:path";
import express from "express";

const isProduction = process.env.NODE_ENV === "production";
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Resolver la ruta raíz del proyecto de forma absoluta
const root = process.cwd();
const distClientDir = path.resolve(root, "dist/client");
const distServerDir = path.resolve(root, "dist/server");

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile(path.resolve(distClientDir, "index.html"), "utf-8")
  : "";

/** @type {import('./src/entry-server.js').render | undefined} */
const prodRender = isProduction
  ? (await import(path.resolve(distServerDir, "entry-server.js"))).render
  : undefined;

// Create http server
const app = express();

/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv(distClientDir, { extensions: [] }));
}

// Serve HTML
app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile(path.resolve(root, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
    } else {
      template = templateHtml;
      render = prodRender;
    }

    const rendered = await render(url);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://${host}:${port}`);
});
