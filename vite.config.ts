// Plain TanStack Start config (moved off Lovable, Oct 2026).
// Builds the site as static, prerendered HTML in dist/client so it can be hosted
// for free on GitHub Pages. No server is needed at runtime.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  build: {
    // Keep logos/images as real files instead of inlining them into the JS.
    assetsInlineLimit: 0,
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Keep TanStack Start's server entry pointed at src/server.ts (SSR error wrapper).
      server: { entry: "server" },
      // Render every page to static HTML at build time.
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
        // Write /startups as startups.html so GitHub Pages serves it without a redirect.
        autoSubfolderIndex: false,
      },
      pages: [
        { path: "/" },
        { path: "/startups" },
        { path: "/sitemap.xml", prerender: { enabled: true, outputPath: "/sitemap.xml" } },
      ],
    }),
    viteReact(),
  ],
});
