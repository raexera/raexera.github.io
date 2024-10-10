# raexera's Personal Website

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
│   ├── assets
│   │   └── photo.png
│   ├── CNAME
│   ├── favicon.svg
│   ├── fonts
│   │   ├── Inter-Bold.woff2
│   │   └── Inter-Regular.woff2
│   └── robots.txt
├── README.md
├── src
│   ├── components
│   │   ├── Awards.astro
│   │   ├── Boxes.tsx
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Education.astro
│   │   ├── ExpandButton.tsx
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Heading.astro
│   │   ├── Navbar.astro
│   │   ├── Photo.tsx
│   │   ├── Section.astro
│   │   ├── Skills.astro
│   │   ├── Starry.tsx
│   │   └── ThemeToggle.astro
│   ├── consts.ts
│   ├── env.d.ts
│   ├── icons
│   │   ├── close.svg
│   │   ├── email.svg
│   │   ├── github.svg
│   │   ├── linkedin.svg
│   │   ├── menu.svg
│   │   ├── moon.svg
│   │   ├── sun.svg
│   │   └── telegram.svg
│   ├── layouts
│   │   ├── BaseHead.astro
│   │   └── BaseLayout.astro
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   ├── styles
│   │   └── global.css
│   └── types.ts
├── tailwind.config.mjs
└── tsconfig.json

11 directories, 49 files
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
