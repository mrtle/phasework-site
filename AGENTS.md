## Hosting (moved off Lovable, Oct 2026)

- Live at https://phasework.work, hosted free on GitHub Pages from this repo (branch `main`).
- Every push to `main` runs `.github/workflows/deploy.yml`: `bun install --frozen-lockfile`, `bun run build`, then publishes `dist/client`.
- The build is fully static: TanStack Start prerenders `/` → `index.html`, `/startups` → `startups.html`, `/sitemap.xml`, and `scripts/write-404.mjs` renders `404.html`. There is no server at runtime, so don't add server functions or API routes without moving hosting.
- New pages: add the route file and add its path to `pages` in `vite.config.ts` so it gets prerendered.
- Images live in `src/assets` (imported, so Vite fingerprints them) or `public/` (served as-is, e.g. `og-image.png`, `favicon.png`, `CNAME`).
- DNS (Namecheap): `@` A records → 185.199.108.153 / .109 / .110 / .111, `www` CNAME → mrtle.github.io. Leave the MX/SPF email-forwarding records alone.

## Architecture

- Keep portfolio projects in the `projects` list on the home page so a standard YouTube URL is the only media configuration required.
- The studio is "Phasework" (renamed from Vaporware, Oct 2026): never reintroduce Vaporware branding; keep the exact uploaded V mark. Contact email is team@phasework.work. (Canonical/sitemap/robots URLs still say vaporware.work — carried over unchanged from Lovable; update only when the user says so.)
- Typography: Archivo (800–900, uppercase, tight tracking) for display headlines and JetBrains Mono for labels/specs (replaces Oswald and Satoshi), per the user's American-dynamism direction.
- Visual direction: black + orange broadcast theme with bold American-dynamism energy; the red rec-room variant was rejected. Keep all metadata factual and avoid decorative cosplay.
- Present studio credentials as supplied facts: 200M+ lifetime impressions, Fortune 300/YC/a16z-backed clients, established 2021, and San Francisco/Los Angeles.
- The orange credentials band (home + /startups) is `src/components/credentials-strip.tsx`: "Fortune 300, [YC] & [a16z]-backed clients" with official marks in `src/assets/credentials` (YC from Simple Icons, a16z's current "Andreessen Horowitz" wordmark from a16z.com), shown black on orange.
- Client proof uses a curated static logo strip with local SVG files in `src/assets/clients`, not runtime logo lookup, because the client roster is known.
