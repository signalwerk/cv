import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "path";

// Get directory name in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = join(__dirname, "..", "dist");

// Import route paths configuration (no React components)
const { routePaths } = await import("../src/route-paths.js");

// Map to output paths
const routes = routePaths.map((route: { name: string; path: string }) => ({
  name: route.name,
  path: route.path,
  output:
    route.path === "/"
      ? join(distPath, "index.html")
      : join(distPath, route.path, "index.html"),
}));

console.log("🎨 Generating static HTML pages...\n");

// Check if server build exists
const serverEntryPath = join(distPath, "server", "entry-server.js");
if (!existsSync(serverEntryPath)) {
  console.error("❌ Server build not found. Building server bundle...");
  process.exit(1);
}

// Import the server render function
const { render } = await import("../dist/server/entry-server.js");

// Read the client template
const clientTemplate = readFileSync(join(distPath, "index.html"), "utf-8");

routes.forEach(({ path, output }) => {
  console.log(`Rendering: ${path}`);

  try {
    // Render the route to HTML
    const appHtml = render(path);

    // Inject the rendered HTML into the template
    const html = clientTemplate.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    // Ensure the output directory exists
    const outputDir = dirname(output);
    mkdirSync(outputDir, { recursive: true });

    // Write the static HTML file
    writeFileSync(output, html);
    console.log(`✓ Generated: ${output}`);
  } catch (error) {
    console.error(`✗ Error rendering ${path}:`, error);
    process.exit(1);
  }
});

console.log("\n✨ Static site generation complete!");
