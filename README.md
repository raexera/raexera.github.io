# ラエクセラ

[![Deploy to GitHub Pages](https://github.com/raexera/raexera.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/raexera/raexera.github.io/actions/workflows/deploy.yml)

Source code for my personal website: a minimalist portfolio and blog built with a strict monochromatic aesthetic.

## Stack

- [Astro](https://astro.build) (static output, Markdown content collections)
- [React](https://react.dev) (with Framer Motion) for interactive islands
- [Tailwind CSS](https://tailwindcss.com) v4
- [TypeScript](https://www.typescriptlang.org)
- [Expressive Code](https://expressive-code.com) for syntax highlighting
- [Mermaid](https://mermaid.js.org) diagrams, rendered at build time

## Usage

1. Clone the repository: `git clone https://github.com/raexera/raexera.github.io.git`
2. Install dependencies: `pnpm install`
3. Install the Playwright browser used to render Mermaid diagrams: `pnpm exec playwright install chromium`
4. Start the development server: `pnpm dev`
5. Build for production: `pnpm build`

## Configuration

- `cv.json`: Resume data (Experience, Education, Skills, Awards, Projects).
- `src/consts.ts`: Global site metadata and navigation links.
- `src/content/blog/`: Blog posts as Markdown, co-located with their assets.

### Writing a post

Add a Markdown file under `src/content/blog/<slug>/index.md`:

```markdown
---
title: "Post title"
description: "A one-line summary."
pubDate: 2026-08-01
updatedDate: 2026-08-26 # optional
tags: # optional
  - meta
draft: false # optional, hides the post when true
---

Content goes here.
```

Assets referenced from the post live next to it in `src/content/blog/<slug>/assets/`.

## License

MIT License.
