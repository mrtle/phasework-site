# Phasework — phasework.work

Portfolio site for Phasework, an independent production studio making films for technology companies.

Originally built in Lovable; moved to this repo in October 2026 and hosted free on GitHub Pages.

## How it deploys

Push to `main` → GitHub Actions builds the site → GitHub Pages serves it at https://phasework.work.
The whole site is prerendered to static HTML, so there's no server to run or pay for.

## Editing

Most content lives in:

- `src/routes/index.tsx` — home page (films list, studio section, contact)
- `src/routes/startups.tsx` — /startups page
- `src/components/client-proof.tsx` — client logo strip
- `src/styles.css` — all styling

## Running locally

Requires [Bun](https://bun.sh) and Node.js 20+.

```sh
bun install
bun run dev      # local dev server
bun run build    # static build into dist/client
```

## Built with

TanStack Start, React, TypeScript, Tailwind CSS.
