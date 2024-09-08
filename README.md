# Rxyhn's Personal Website

This is the source code for my personal website. It is built using [Astro](https://astro.build/).

## Stack

This project uses the following technologies:

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├── astro.config.mjs
├── cv.json
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── CNAME
│   ├── favicon.ico
│   ├── favicon.png
│   └── pattern.svg
├── README.md
├── src
│   ├── assets
│   │   └── images
│   │       └── pfp.png
│   ├── components
│   │   ├── Boxes.tsx
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── CollapseText.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Heading.astro
│   │   ├── MobileMenu.tsx
│   │   ├── path.json
│   │   ├── Section.astro
│   │   ├── sections
│   │   │   ├── Awards.astro
│   │   │   ├── Education.astro
│   │   │   ├── Experience.astro
│   │   │   └── Skills.astro
│   │   └── Starry.tsx
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   └── scripts
│       └── main.ts
├── tailwind.config.mjs
└── tsconfig.json

11 directories, 36 files
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
